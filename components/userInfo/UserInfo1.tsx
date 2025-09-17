"use client";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Mail, FileDown } from "lucide-react";
import type { UserInfo } from '../../types/supabase-types';
import { ensureAbsoluteUrl } from '../../lib/utils';
import { CustomLinkIconWrapper } from '../../lib/custom-link-icons';

// Extended UserInfo interface for portfolio preview that includes CV filename
interface ExtendedUserInfo extends UserInfo {
  cvFileName?: string | null;
}

interface UserInfo1Props {
  personalInfo: ExtendedUserInfo;
}


export default function UserInfo1({ personalInfo }: UserInfo1Props) {
  const cvUrl = ensureAbsoluteUrl(personalInfo.cvUrl);
  
  const handleCvDownload = async () => {
    if (!cvUrl) {
      return;
    }
    
    try {
      const response = await fetch(cvUrl);
      
      if (!response.ok) {
        throw new Error('Failed to fetch CV');
      }
      
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      
      const a = document.createElement('a');
      a.href = url;
      a.download = personalInfo.cvFileName || 'resume.pdf';
      
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      
      URL.revokeObjectURL(url);
    } catch (error) {
      // Fallback: open in new tab
      window.open(cvUrl, '_blank');
    }
  };

  return (
    <header className="text-center py-12">
      <div className="max-w-2xl mx-auto">
        {personalInfo.avatarUrl && (
          <Avatar className="w-24 h-24 mx-auto mb-6">
            <AvatarImage src={personalInfo.avatarUrl || undefined} alt={personalInfo.full_name || ''} />
            <AvatarFallback>{(personalInfo.full_name || '').split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
        )}
        
        <h1 className="text-4xl font-bold mb-2">{personalInfo.full_name}</h1>
        {personalInfo.title && (
          <p className="text-xl text-muted-foreground mb-4">{personalInfo.title}</p>
        )}
        {personalInfo.location && (
          <p className="text-muted-foreground mb-6">{personalInfo.location}</p>
        )}
  
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {personalInfo.email && (
          <Button variant="outline" size="sm" asChild>
            <a href={`mailto:${personalInfo.email}`} aria-label="Email">
              <Mail className="mr-2 h-4 w-4" />
              Email
            </a>
          </Button>
        )}
        {cvUrl && (
          <Button variant="outline" size="sm" asChild>
            <button 
              onClick={() => {
                handleCvDownload();
              }}
              aria-label="Download CV"
            >
              <FileDown className="mr-2 w-4 h-4" />
              Resume
            </button>
          </Button>
        )}
        {personalInfo.custom_links && personalInfo.custom_links.length > 0 && personalInfo.custom_links.map((link) => {
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
  
      {personalInfo.about_me && (
        <p className="text-center">
          {personalInfo.about_me}
        </p>
      )}
      </div>
    </header>
  );  
}