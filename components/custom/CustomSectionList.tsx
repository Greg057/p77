import React from "react";
import { CustomSection } from '../../types/supabase-types';
import { Button } from '../ui/button';
import { renderDescription, ensureAbsoluteUrl } from '../../lib/utils';
import { CustomLinkIconWrapper } from '../../lib/custom-link-icons';
import { MapPin } from 'lucide-react';
import Image from 'next/image';

interface ListItemProps {
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

function ListItem({ primaryTitle, secondaryTitle, dateInfo, location, description, logoUrl, customLinks, isFirst = false }: ListItemProps) {
  return (
    <li className="py-6">
      <div className="flex gap-4">
        {logoUrl && (
          <div className="flex-shrink-0">
            <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-muted flex items-center justify-center">
              <Image
                src={logoUrl}
                alt="Logo"
                fill
                className="object-cover"
                sizes="48px"
                priority={isFirst}
              />
            </div>
          </div>
        )}
        <div className="flex flex-1 flex-col justify-start gap-2">
          <div className="flex flex-col gap-1">
            {dateInfo && (
              <time className="text-sm text-muted-foreground">
                {dateInfo}
              </time>
            )}
            {location && (
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <MapPin className="h-3 w-3" />
                <span>{location}</span>
              </div>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="font-semibold leading-none text-xl">{primaryTitle}</h2>
            {secondaryTitle && <p className="text-md text-muted-foreground">{secondaryTitle}</p>}
          </div>
        {description && (
          <div className="prose text-md dark:prose-invert" dangerouslySetInnerHTML={{ __html: renderDescription(description) }} />
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
      </div>
    </li>
  );
}

export default function CustomSectionList({ section }: { section: CustomSection }) {
  if (!section || !section.items || section.items.length === 0) {
    return null;
  }

  return (
    <section id={`custom-${section.id}`} className="mb-16 animate-in fade-in slide-in-from-bottom duration-700">
      <h2 className="text-3xl font-bold mb-8">{section.section_name}</h2>
      <ul className="divide-y divide-border">
        {section.items.map((item, index) => (
          <ListItem
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
    </section>
  );
}