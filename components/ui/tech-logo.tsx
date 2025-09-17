"use client";

import React from "react"
import Image from "next/image"
import { cn } from "../../lib/utils"
import { hasTechnologyLogo, generateLogoUrl as generateDeviconLogoUrl, getTechnologyByLabel } from "../../utils/devicon-mapping"

interface TechLogoProps {
  techName: string
  technologyName?: string // Canonical devicon name for logo lookup
  size?: number
  className?: string
  showName?: boolean
  fallbackToText?: boolean
  customLogoUrl?: string | null
}

function TechLogoComponent({ 
  techName, 
  technologyName,
  size = 32, 
  className,
  showName = false,
  fallbackToText = true,
  customLogoUrl
}: TechLogoProps) {
  const [imageError, setImageError] = React.useState(false)
  const [imageLoaded, setImageLoaded] = React.useState(false)
  
  // Use ref to track loaded images across re-renders
  const loadedImagesRef = React.useRef<Set<string>>(new Set())
  
  // Memoize the logo URL to prevent unnecessary re-computations
  const { techData, logoUrl } = React.useMemo(() => {
    // Use technologyName for logo lookup if available, otherwise fall back to techName
    const lookupName = technologyName || techName;
    
    // Ensure lookupName is a valid string
    if (!lookupName || typeof lookupName !== 'string') {
      return { techData: null, logoUrl: null };
    }
    
    const techData = getTechnologyByLabel(lookupName);
    
    // Handle custom logo URLs with special logic for devicon paths
    if (customLogoUrl) {
      // Check if customLogoUrl looks like a devicon path that needs basePath correction
      if (customLogoUrl.startsWith('/icons/') && techData) {
        // This is a devicon path - extract version and use generateDeviconLogoUrl for basePath handling
        const pathParts = customLogoUrl.split('/');
        const filename = pathParts[pathParts.length - 1]; // e.g., "nextjs-original-wordmark.svg"
        const filenameParts = filename.split('-');
        // Extract everything after the technology name (first part) and remove .svg extension
        const versionParts = filenameParts.slice(1); // e.g., ["original", "wordmark.svg"]
        const lastPart = versionParts[versionParts.length - 1];
        versionParts[versionParts.length - 1] = lastPart.replace('.svg', ''); // Remove .svg from last part
        const versionName = versionParts.join('-') || 'original'; // e.g., "original-wordmark"
        
        // Generate URL using devicon mapping to ensure basePath is applied correctly
        const baseUrl = generateDeviconLogoUrl(techData);
        // Replace the version in the base URL with the specific version from customLogoUrl
        const logoUrl = baseUrl.replace('-original.svg', `-${versionName}.svg`);
        return { techData, logoUrl };
      } else {
        // Non-devicon custom URL (e.g., custom uploads) - use as-is
        return { techData: null, logoUrl: customLogoUrl };
      }
    }
    
    // No custom URL - use standard devicon mapping
    const logoUrl = techData ? generateDeviconLogoUrl(techData) : null;
    return { techData, logoUrl };
  }, [techName, technologyName, customLogoUrl]);
  
  const handleImageError = () => {
    setImageError(true)
    // Remove from loaded images set
    if (logoUrl) {
      loadedImagesRef.current.delete(logoUrl)
    }
  }

  const handleImageLoad = () => {
    setImageLoaded(true)
    // Add to loaded images set
    if (logoUrl) {
      loadedImagesRef.current.add(logoUrl)
    }
  }

  // Check if image was previously loaded
  React.useEffect(() => {
    if (logoUrl && loadedImagesRef.current.has(logoUrl)) {
      setImageLoaded(true)
      setImageError(false)
    } else {
      setImageLoaded(false)
      setImageError(false)
    }
  }, [techName, logoUrl])

  // If no logo URL is available, show text fallback
  if (!logoUrl) {
    return (
      <div className={cn("flex items-center gap-2", className)}>
        <div 
          className={cn(
            "flex items-center justify-center rounded-lg font-medium text-xs",
            "bg-muted text-muted-foreground border border-border"
          )}
          style={{ width: size, height: size }}
        >
          {techName && typeof techName === 'string' ? techName.charAt(0).toUpperCase() : '?'}
        </div>
        {showName && (
          <span className="text-sm font-medium">{techName}</span>
        )}
      </div>
    )
  }

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div 
        className="relative flex items-center justify-center"
        style={{ width: size, height: size }}
      >
        {!imageError ? (
          <Image
            key={techName} // Simplified key - only use techName
            src={logoUrl}
            alt={`${techName} logo`}
            width={size}
            height={size}
            className={cn(
              "object-contain transition-opacity duration-200",
              imageLoaded ? "opacity-100" : "opacity-0"
            )}
            style={{ 
              width: size, 
              height: size,
              maxWidth: size, 
              maxHeight: size 
            }}
            onError={handleImageError}
            onLoad={handleImageLoad}
            unoptimized // Add this to prevent Next.js image optimization issues
          />
        ) : fallbackToText ? (
          <div 
            className={cn(
              "flex items-center justify-center rounded-lg font-medium text-xs",
              "bg-muted text-muted-foreground border border-border"
            )}
            style={{ width: size, height: size }}
          >
            {techName.charAt(0).toUpperCase()}
          </div>
        ) : null}
        
        {/* Loading state */}
        {!imageLoaded && !imageError && (
          <div 
            className="absolute inset-0 flex items-center justify-center"
            style={{ width: size, height: size }}
          >
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary"></div>
          </div>
        )}
      </div>
      {showName && (
        <span className="text-sm font-medium">{techName}</span>
      )}
    </div>
  )
}

// Export with React.memo to prevent unnecessary re-renders
export const TechLogo = React.memo(TechLogoComponent, (prevProps, nextProps) => {
  // Re-render if techName or customLogoUrl changes
  return prevProps.techName === nextProps.techName && 
         prevProps.customLogoUrl === nextProps.customLogoUrl;
});


// Tech logo grid component for displaying multiple tech logos
interface TechLogoGridProps {
  techNames: string[]
  size?: number
  className?: string
  showNames?: boolean
  maxItems?: number
  customLogoUrls?: { [techName: string]: string | null }
}

export function TechLogoGrid({ 
  techNames, 
  size = 32, 
  className,
  showNames = false,
  maxItems,
  customLogoUrls
}: TechLogoGridProps) {
  const displayTechs = maxItems ? techNames.slice(0, maxItems) : techNames

  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      {displayTechs.map((techName) => (
        <TechLogo
          key={`tech-logo-${techName}`}
          techName={techName}
          size={size}
          showName={showNames}
          customLogoUrl={customLogoUrls?.[techName] || null}
        />
      ))}
      {maxItems && techNames.length > maxItems && (
        <div 
          className="flex items-center justify-center rounded-lg font-medium text-xs bg-muted text-muted-foreground"
          style={{ width: size, height: size }}
        >
          +{techNames.length - maxItems}
        </div>
      )}
    </div>
  )
} 