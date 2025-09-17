import { CustomSection } from '../../types/supabase-types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { CalendarDays, MapPin } from 'lucide-react';
import { renderDescription, ensureAbsoluteUrl } from '../../lib/utils';
import { CustomLinkIconWrapper } from '../../lib/custom-link-icons';
import Image from 'next/image';

export default function CustomSection3({ section }: { section: CustomSection }) {
  return (
    <section id={`custom-${section.id}`} className="mb-16 animate-in fade-in slide-in-from-bottom duration-700">
      <h2 className="text-3xl font-bold mb-8">{section.section_name}</h2>
      <div className="space-y-6">
        {section.items.map((item, index) => (
          <Card
            key={item.id || index}
            className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-in fade-in slide-in-from-bottom bg-card overflow-hidden"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-center space-x-4">
                  {item.logoUrl && (
                    <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-muted flex items-center justify-center flex-shrink-0">
                      <Image
                        src={item.logoUrl}
                        alt="Logo"
                        fill
                        className="object-cover"
                        sizes="48px"
                        priority={index === 0}
                      />
                    </div>
                  )}
                  <div>
                    <CardTitle className="text-xl">{item.primaryTitle}</CardTitle>
                    {item.secondaryTitle && (
                      <CardDescription className="text-lg font-medium">{item.secondaryTitle}</CardDescription>
                    )}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  {item.dateInfo && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CalendarDays className="h-4 w-4" />
                      <span>{item.dateInfo}</span>
                    </div>
                  )}
                  {item.location && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{item.location}</span>
                    </div>
                  )}
                </div>
              </div>
            </CardHeader>
            {item.description && (
              <CardContent className="pb-4">
                <div className="text-muted-foreground leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: renderDescription(item.description) }} />
              </CardContent>
            )}
            {item.customLinks && item.customLinks.length > 0 && (
              <CardContent className="pt-0 pb-4">
                <div className="flex flex-wrap gap-2">
                  {item.customLinks.map((link) => {
                    const linkUrl = ensureAbsoluteUrl(link.url);
                    return linkUrl ? (
                      <Button
                        key={link.id}
                        variant="outline"
                        size="sm"
                        asChild
                        className="hover:scale-105 transition-transform duration-200 bg-transparent"
                      >
                        <a
                          href={linkUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={link.title}
                          className="flex items-center gap-2"
                        >
                          <CustomLinkIconWrapper iconKey={link.icon} className="h-4 w-4" />
                          {link.title}
                        </a>
                      </Button>
                    ) : null;
                  })}
                </div>
              </CardContent>
            )}
          </Card>
        ))}
      </div>
    </section>
  );
}