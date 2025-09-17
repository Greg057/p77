import React from "react";
import { CustomSection } from '../../types/supabase-types';
import { Button } from '../ui/button';
import { CardContent } from '../ui/card';
import { renderDescription, ensureAbsoluteUrl } from '../../lib/utils';
import { CustomLinkIconWrapper } from '../../lib/custom-link-icons';
import { Briefcase, MapPin } from 'lucide-react';
import Image from 'next/image';

interface TimelineItemProps {
  primaryTitle: string;
  secondaryTitle?: string;
  dateInfo?: string;
  location?: string;
  description?: string;
  logoUrl?: string | null;
  customLinks?: readonly {
    title: string;
    url: string;
    icon: string;
  }[];
  isFirst?: boolean;
}

function TimelineItem({ primaryTitle, secondaryTitle, dateInfo, location, description, logoUrl, customLinks, isFirst = false }: TimelineItemProps) {
  return (
    <li className="relative ml-10 py-4">
      <div className="absolute -left-16 top-4 flex items-center justify-center">
        <div className="relative size-12 rounded-full bg-muted flex items-center justify-center overflow-hidden">
          {logoUrl ? (
            <Image
              src={logoUrl}
              alt="Logo"
              fill
              className="object-cover"
              sizes="48px"
              priority={isFirst}
            />
          ) : (
            <Briefcase className="h-5 w-5 text-muted-foreground" />
          )}
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-start gap-1">
        <div className="flex flex-col gap-1">
          {dateInfo && <time className="text-sm text-muted-foreground">{dateInfo}</time>}
          {location && (
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <MapPin className="h-3 w-3" />
              <span>{location}</span>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="font-semibold leading-none">{primaryTitle}</h2>
          {secondaryTitle && <p className="text-md text-muted-foreground">{secondaryTitle}</p>}
        </div>
        {description && (
          <div className="prose pr-8 text-md dark:prose-invert" dangerouslySetInnerHTML={{ __html: renderDescription(description) }} />
        )}
        {customLinks && customLinks.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-2">
            {customLinks.map((link, idx) => {
              const linkUrl = ensureAbsoluteUrl(link.url);
              return linkUrl ? (
                <Button key={idx} variant="outline" size="sm" asChild>
                  <a href={linkUrl} target="_blank" rel="noopener noreferrer" title={link.title}>
                    <CustomLinkIconWrapper iconKey={link.icon} className="mr-2" />
                    {link.title}
                  </a>
                </Button>
              ) : null;
            })}
          </div>
        )}
      </div>
    </li>
  );
}

export default function CustomSectionTimeline({ section }: { section: CustomSection }) {
  if (!section || !section.items || section.items.length === 0) {
    return null;
  }

  return (
    <section id={`custom-${section.id}`} className="mb-14">
      <h2 className="text-2xl font-bold mb-5">{section.section_name}</h2>
      <CardContent className="p-0">
        <ul className="ml-10 border-l">
          {section.items.map((item, index) => (
            <TimelineItem
              key={item.id || 'item'}
              primaryTitle={item.primaryTitle || 'Untitled Item'}
              secondaryTitle={item.secondaryTitle || undefined}
              dateInfo={item.dateInfo || undefined}
              location={item.location || undefined}
              description={item.description || undefined}
              logoUrl={item.logoUrl || null}
              isFirst={index === 0}
              customLinks={item.customLinks?.map((link) => ({
                title: link.title,
                url: link.url,
                icon: link.icon,
              }))}
            />
          ))}
        </ul>
      </CardContent>
    </section>
  );
}