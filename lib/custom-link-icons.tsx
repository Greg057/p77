import React from 'react';
import { 
  Globe, 
  Github, 
  Linkedin, 
  ExternalLink,
  Play,
  Presentation,
  FileText,
  Palette,
  Edit,
  Briefcase,
  Award,
  Youtube,
  Instagram
} from 'lucide-react';
import { DiscordLogoIcon } from '@radix-ui/react-icons';

// Custom SVG components for platform logos
const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
  </svg>
);

const TwitchIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.142V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/>
  </svg>
);

const RedditIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
  </svg>
);

// Predefined icons configuration
export const PREDEFINED_ICONS = [
  // Social Media & Professional
  { key: 'website', label: 'Website', icon: Globe },
  { key: 'github', label: 'GitHub', icon: Github },
  { key: 'linkedin', label: 'LinkedIn', icon: Linkedin },
  { key: 'x', label: 'X', icon: XIcon },
  { key: 'instagram', label: 'Instagram', icon: Instagram },
  { key: 'youtube', label: 'YouTube', icon: Youtube },
  { key: 'tiktok', label: 'TikTok', icon: TikTokIcon },
  { key: 'discord', label: 'Discord', icon: DiscordLogoIcon },
  { key: 'twitch', label: 'Twitch', icon: TwitchIcon },
  { key: 'reddit', label: 'Reddit', icon: RedditIcon },
  
  // Project Links
  { key: 'demo', label: 'Demo', icon: ExternalLink },
  { key: 'video', label: 'Video', icon: Play },
  { key: 'slides', label: 'Slides', icon: Presentation },
  { key: 'documentation', label: 'Docs', icon: FileText },
  { key: 'design', label: 'Design', icon: Palette },
  { key: 'blog', label: 'Blog', icon: Edit },
  { key: 'portfolio', label: 'Portfolio', icon: Briefcase },
  { key: 'certificate', label: 'Certificate', icon: Award },
];

/**
 * Get icon component for a custom link
 * @param iconKey - The icon key (e.g., 'github', 'linkedin', 'x')
 * @returns React component for the icon
 */
export function getCustomLinkIcon(iconKey: string): React.ComponentType<{ className?: string }> {
  const iconConfig = PREDEFINED_ICONS.find(icon => icon.key === iconKey);
  return iconConfig?.icon || Globe;
}

/**
 * Get display label for an icon key
 * @param iconKey - The icon key
 * @returns Human-readable label
 */
export function getIconLabel(iconKey: string): string {
  const iconConfig = PREDEFINED_ICONS.find(icon => icon.key === iconKey);
  return iconConfig?.label || 'Website';
}

/**
 * Icon wrapper component that handles different icon types consistently
 * @param iconKey - The icon key
 * @param className - Additional CSS classes
 */
export function CustomLinkIconWrapper({ iconKey, className }: { iconKey: string, className?: string }) {
  const IconComponent = getCustomLinkIcon(iconKey);
  
  // Handle custom SVG components and Radix icons
  if (IconComponent === XIcon || IconComponent === TikTokIcon || 
      IconComponent === TwitchIcon || IconComponent === RedditIcon ||
      IconComponent === DiscordLogoIcon) {
    return <IconComponent className={`w-4 h-4 ${className || ''}`} />;
  }
  
  // Handle Lucide icons
  return <IconComponent className={`w-4 h-4 ${className || ''}`} />;
}