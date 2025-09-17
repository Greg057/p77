"use client";

import type { Technology } from "../../types/supabase-types"
import { TechLogo } from "../ui/tech-logo"
import { hasTechnologyLogo } from "../../utils/devicon-mapping"
import { useMemo } from "react"

export default function Skills1({ userTechnologies }: { userTechnologies: Technology[] }) {
  // Memoize the categorization of technologies
  const { techsWithLogos, techsWithoutLogos } = useMemo(() => {
    // Filter out technologies without valid names
    const validTechnologies = userTechnologies.filter(tech => 
      tech && tech.display_name && typeof tech.display_name === 'string' && tech.display_name.trim() !== ''
    );
    
    // Deduplicate by id
    const uniqueTechs = Array.from(
      new Map(validTechnologies.map((tech) => [tech.id, tech])).values()
    );

    const withLogos: Technology[] = [];
    const withoutLogos: Technology[] = [];

    // Categorize technologies based on logo availability
    for (const tech of uniqueTechs) {
      const hasBuiltInLogo = hasTechnologyLogo(tech.display_name || '');
      const hasCustomLogo = (tech.logo_type === 'custom_upload' || tech.logo_type === 'svg_version') && tech.logo_data;
      const hasLogo = hasBuiltInLogo || hasCustomLogo;
      
      if (hasLogo) {
        withLogos.push(tech);
      } else {
        withoutLogos.push(tech);
      }
    }

    return { techsWithLogos: withLogos, techsWithoutLogos: withoutLogos };
  }, [userTechnologies]);

  return (
    <section id="skills" className="mb-14">
      <h2 className="text-2xl font-bold mb-5">Skills</h2>
      <p className="text-base text-muted-foreground mb-3">
        Some of the technologies I've worked with:
      </p>
      
      {/* Grid for technologies with logos */}
      {techsWithLogos.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {techsWithLogos.map((skill, index) => (
            <div
              key={skill.id || skill.display_name || `skill-${index}`}
              className="group flex flex-col items-center gap-2 p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-accent/50 transition-all duration-300 hover:scale-105 hover:shadow-md"
            >
              <TechLogo 
                techName={skill.display_name || ''} 
                technologyName={skill.technology_name || ''}
                size={32}
                className="group-hover:scale-110 transition-transform duration-200"
                customLogoUrl={skill.logo_type === 'custom_upload' || skill.logo_type === 'svg_version' ? skill.logo_data : undefined}
              />
              <span className="text-xs text-center font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                {skill.display_name}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Plain text for technologies without logos */}
      {techsWithoutLogos.length > 0 && (
        <div className={techsWithLogos.length > 0 ? "mt-8" : ""}>
          {techsWithLogos.length > 0 && (
            <h3 className="text-lg font-semibold text-center mb-4">Other Technologies</h3>
          )}
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {techsWithoutLogos.map((tech) => (
              <div 
                key={`other-${tech.id}`} 
                className="px-3 py-1 bg-muted rounded-full text-sm font-medium text-muted-foreground hover:bg-muted/80 transition-colors"
              >
                {tech.display_name || ''}
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}

