// Devicon technology mapping for the combobox
// This uses the devicon.json file for comprehensive technology data

export interface DeviconTechnology {
  value: string;
  label: string;
  tags: string[];
  versions: {
    svg: string[];
    font: string[];
  };
  color: string;
  altnames: string[];
  aliases?: Array<{
    base: string;
    alias: string;
  }>;
}

// Devicon CDN base URL
const DEVICON_CDN = '/p77/icons';

// Import the devicon data
import deviconData from '../devicon.json';

// Import display names mapping
import displayNamesMapping from './display-names-mapping.json';

// Type for the display names mapping
type DisplayNamesMapping = Record<string, string>;

// Convert devicon data to our format
export const DEVICON_TECHNOLOGIES: DeviconTechnology[] = deviconData.map((tech: any) => {
  // Get display name from comprehensive mapping, fallback to smart formatting
  let displayLabel: string;
  
  // First, check if we have a predefined display name
  if ((displayNamesMapping as any)[tech.name]) {
    displayLabel = (displayNamesMapping as any)[tech.name];
  } else if (tech.altnames && tech.altnames.length > 0) {
    // Check if any altname has a predefined display name
    const altnameWithDisplay = tech.altnames.find((altname: string) => (displayNamesMapping as any)[altname]);
    if (altnameWithDisplay) {
      displayLabel = (displayNamesMapping as any)[altnameWithDisplay];
    } else {
      // Fallback to formatting the best altname
      const sortedAltnames = [...tech.altnames].sort((a, b) => {
        if (a.length !== b.length) {
          return b.length - a.length; // Longer names first
        }
        return a.localeCompare(b); // Then alphabetically
      });
      displayLabel = formatNameForDisplay(sortedAltnames[0]);
    }
  } else {
    // Fallback to formatting the name
    displayLabel = formatNameForDisplay(tech.name);
  }

  return {
    value: tech.name,
    label: displayLabel,
    tags: tech.tags || [],
    versions: tech.versions || { svg: [], font: [] },
    color: tech.color || '#000000',
    altnames: tech.altnames || [],
    aliases: tech.aliases || [],
  };
});

// Helper function to format a name for display (fallback)
function formatNameForDisplay(name: string): string {
  // Special cases for common technologies that should remain as single words
  const specialCases: Record<string, string> = {
    'type-script': 'TypeScript',
    'java-script': 'JavaScript',
    'react-native': 'React Native',
    'react-bootstrap': 'React Bootstrap',
    'react bootstrap': 'React Bootstrap',
    'next.js': 'Next.js',
    'node.js': 'Node.js',
    'amazon-web-services': 'Amazon Web Services',
  };

  // Check if this is a special case
  if (specialCases[name]) {
    return specialCases[name];
  }

  return name
    .replace(/-/g, ' ') // Replace hyphens with spaces
    .replace(/([A-Z])/g, ' $1') // Add space before capitals
    .replace(/^./, (str: string) => str.toUpperCase()) // Capitalize first letter
    .replace(/\s+/g, ' ') // Normalize multiple spaces
    .trim();
}

// Helper function to get technology by value
export function getTechnologyByValue(value: string): DeviconTechnology | undefined {
  return DEVICON_TECHNOLOGIES.find(tech => tech.value === value);
}

// Helper function to get technology by label
export function getTechnologyByLabel(label: string | null | undefined): DeviconTechnology | undefined {
  // Handle null/undefined input
  if (!label || typeof label !== 'string') {
    return undefined;
  }
  
  // First, try exact match on value (most reliable)
  const valueMatch = DEVICON_TECHNOLOGIES.find(tech => 
    tech.value.toLowerCase() === label.toLowerCase()
  );
  if (valueMatch) return valueMatch;
  
  // Then try exact match on label
  const labelMatch = DEVICON_TECHNOLOGIES.find(tech => 
    tech.label.toLowerCase() === label.toLowerCase()
  );
  if (labelMatch) return labelMatch;
  
  // Then try to find by altnames
  const altnameMatch = DEVICON_TECHNOLOGIES.find(tech => 
    tech.altnames.some(alt => alt.toLowerCase() === label.toLowerCase())
  );
  if (altnameMatch) return altnameMatch;
  
  // Finally try normalized matching (for backward compatibility)
  const normalizedLabel = label.toLowerCase().replace(/\s+/g, '-');
  const normalizedMatch = DEVICON_TECHNOLOGIES.find(tech => 
    tech.value.toLowerCase() === normalizedLabel ||
    tech.label.toLowerCase() === normalizedLabel ||
    tech.altnames.some(alt => alt.toLowerCase() === normalizedLabel)
  );
  if (normalizedMatch) return normalizedMatch;
  
  return undefined;
}

// Helper function to search technologies
export function searchTechnologies(query: string): DeviconTechnology[] {
  const lowerQuery = query.toLowerCase();
  return DEVICON_TECHNOLOGIES.filter(tech => 
    tech.label.toLowerCase().startsWith(lowerQuery) || 
    tech.value.toLowerCase().startsWith(lowerQuery) ||
    tech.altnames.some(alt => alt.toLowerCase().startsWith(lowerQuery))
  );
}

// Helper function to generate logo URL
export function generateLogoUrl(technology: DeviconTechnology): string {
  // Try to find the best available version
  const svgVersions = technology.versions.svg;
  if (svgVersions.length > 0) {
    // Prefer 'original' version, fallback to first available
    const preferredVersion = svgVersions.find(v => v === 'original') || svgVersions[0];
    return `${DEVICON_CDN}/${technology.value}/${technology.value}-${preferredVersion}.svg`;
  }
  
  // Fallback to original if no versions specified
  return `${DEVICON_CDN}/${technology.value}/${technology.value}-original.svg`;
}

// Helper function to get all available SVG versions for a technology
export function getTechnologySvgVersions(technology: DeviconTechnology): Array<{ version: string; url: string; label: string }> {
  const versions: Array<{ version: string; url: string; label: string }> = [];
  
  // Add only the actual SVG versions (no aliases)
  technology.versions.svg.forEach(version => {
    const url = `${DEVICON_CDN}/${technology.value}/${technology.value}-${version}.svg`;
    const label = version.charAt(0).toUpperCase() + version.slice(1); // Capitalize first letter
    versions.push({ version, url, label });
  });
  
  return versions;
}

// Helper function to check if a technology has a logo
export function hasTechnologyLogo(technologyName: string): boolean {
  const tech = getTechnologyByLabel(technologyName);
  return tech !== undefined && tech.versions.svg.length > 0;
}

// Helper function to get all unique tags for categorization
export function getAllTags(): string[] {
  const allTags = new Set<string>();
  DEVICON_TECHNOLOGIES.forEach(tech => {
    tech.tags.forEach(tag => allTags.add(tag));
  });
  return Array.from(allTags).sort();
}

// Helper function to get technologies by tag
export function getTechnologiesByTag(tag: string): DeviconTechnology[] {
  return DEVICON_TECHNOLOGIES.filter(tech => 
    tech.tags.some(t => t.toLowerCase() === tag.toLowerCase())
  );
}

// Helper function to get popular tags (tags with most technologies)
export function getPopularTags(limit: number = 10): string[] {
  const tagCounts: Record<string, number> = {};
  
  DEVICON_TECHNOLOGIES.forEach(tech => {
    tech.tags.forEach(tag => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    });
  });
  
  return Object.entries(tagCounts)
    .sort(([,a], [,b]) => b - a)
    .slice(0, limit)
    .map(([tag]) => tag);
}

// Helper function to get all available technology names for AI awareness
export function getAllAvailableTechnologyNames(): string[] {
  const allNames = new Set<string>();
  
  DEVICON_TECHNOLOGIES.forEach(tech => {
    // Add the main name (formatted for display)
    allNames.add(tech.label);
    
    // Add all altnames
    tech.altnames.forEach(altname => {
      allNames.add(altname);
    });
  });
  
  return Array.from(allNames).sort();
}

// Helper function to get technology names by category for AI
export function getTechnologyNamesByCategory(): Record<string, string[]> {
  const categories: Record<string, string[]> = {};
  
  DEVICON_TECHNOLOGIES.forEach(tech => {
    tech.tags.forEach(tag => {
      if (!categories[tag]) {
        categories[tag] = [];
      }
      
      // Add the main name
      if (!categories[tag].includes(tech.label)) {
        categories[tag].push(tech.label);
      }
      
      // Add altnames
      tech.altnames.forEach(altname => {
        if (!categories[tag].includes(altname)) {
          categories[tag].push(altname);
        }
      });
    });
  });
  
  // Sort each category
  Object.keys(categories).forEach(category => {
    categories[category].sort();
  });
  
  return categories;
} 