"use client";

import { Project } from '../../types/supabase-types';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { renderDescription, ensureAbsoluteUrl } from '../../lib/utils';
import { TechLogo } from '../ui/tech-logo';
import { CustomLinkIconWrapper } from '../../lib/custom-link-icons';
import { CardBody, CardContainer, CardItem } from '../ui/3d-card';
import Image from 'next/image';


export default function Projects1({ projects }: { projects: Project[] }) {
  return (
    <section className="mb-14">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-5 text-center">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => {
            return (
              <CardContainer key={project.id} className="inter-var" containerClassName="py-8 flex items-start justify-center">
                <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                  >
                    {project.name}
                  </CardItem>
                  
                  {project.description && (
                    <CardItem
                      as="div"
                      translateZ="60"
                      className="text-neutral-500 text-sm mt-2 dark:text-neutral-300"
                    >
                      <div dangerouslySetInnerHTML={{ __html: renderDescription(project.description) }} />
                    </CardItem>
                  )}
                  
                  {project.picUrl && (
                    <CardItem translateZ="100" className="w-full mt-4">
                      <div className="relative aspect-video w-full overflow-hidden rounded-xl">
                        <Image
                          src={project.picUrl}
                          alt={project.name || 'Project image'}
                          fill
                          className="object-cover group-hover/card:shadow-xl"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          priority={index < 2}
                        />
                      </div>
                    </CardItem>
                  )}
                  
                  {project.technology_names && project.technology_names.length > 0 && (
                    <CardItem
                      translateZ="60"
                      className="flex flex-wrap gap-2 mt-4"
                    >
                      {project.technology_names.slice(0, 5).map((techName, index) => {
                        // Find the detailed technology info if available
                        const techDetail = Array.isArray(project.technology_details) ? project.technology_details.find(tech => tech.name === techName) : undefined;
                        const displayName = techDetail?.displayName || techName;
                        const customLogoUrl = techDetail?.logoType === 'custom_upload' || techDetail?.logoType === 'svg_version' ? techDetail?.logoData : undefined;
                        
                        return (
                          <div key={index} className="flex items-center gap-1">
                            <TechLogo 
                              techName={techName} 
                              technologyName={techDetail?.technologyName}
                              size={16} 
                              fallbackToText={false}
                              customLogoUrl={customLogoUrl}
                            />
                            <span className="text-xs text-muted-foreground">{displayName}</span>
                          </div>
                        );
                      })}
                      {project.technology_names.length > 5 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technology_names.length - 5} more
                        </Badge>
                      )}
                    </CardItem>
                  )}
                  
                  {project.custom_links && project.custom_links.length > 0 && (
                    <CardItem translateZ={20} className="mt-8">
                      <div className="flex flex-wrap gap-2">
                        {project.custom_links.map((link) => {
                          const linkUrl = ensureAbsoluteUrl(link.url);
                          return linkUrl ? (
                            <Button key={link.id} variant="outline" size="sm" asChild>
                              <a href={linkUrl} target="_blank" rel="noopener noreferrer" title={link.title}>
                                <CustomLinkIconWrapper iconKey={link.icon} className="mr-2" />
                                {link.title}
                              </a>
                            </Button>
                          ) : null;
                        })}
                      </div>
                    </CardItem>
                  )}
                </CardBody>
              </CardContainer>
            );
          })}
        </div>
      </div>
    </section>
  )
}