import React from 'react'
import type { UserInfo, SectionKey } from '@/types/supabase-types'
import { DEFAULT_SECTION_ORDER } from '@/types/supabase-types'
import CustomSection3 from '@/components/custom/CustomSection3'
import CustomSectionTimeline from '@/components/custom/CustomSectionTimeline'
import CustomSectionList from '@/components/custom/CustomSectionList'
import UserInfo1 from '@/components/userInfo/UserInfo1'
import Projects1 from '@/components/projects/Projects1'
import Skills1 from '@/components/skills/Skills1'

// Extended UserInfo interface for portfolio preview that includes CV filename
interface ExtendedUserInfo extends UserInfo {
  cvFileName?: string | null;
}

interface PortfolioLayoutProps {
  personalInfo: UserInfo | null
  educations: any[] | null
  experiences: any[] | null
  projects: any[] | null
  userTechnologies: any[] | null
  customSections: any[] | null
  userInfoLayoutType?: string
  projectsLayoutType?: string  
  skillsLayoutType?: string
  educationLayoutType?: string
  workLayoutType?: string
  cvPreviewUrl?: string | null
  cvPreviewFileName?: string | null
  sectionOrder?: SectionKey[]
}

export default function PortfolioLayout({
  personalInfo,
  educations,
  experiences,
  projects,
  userTechnologies,
  customSections,
  educationLayoutType = 'card',
  workLayoutType = 'card',
  userInfoLayoutType = 'userInfo1',
  projectsLayoutType = 'projects1', 
  skillsLayoutType = 'skills1',
  cvPreviewUrl,
  cvPreviewFileName,
  sectionOrder
}: PortfolioLayoutProps) {
  // Create extended personal info with CV preview data
  const extendedPersonalInfo: ExtendedUserInfo = personalInfo ? {
    ...personalInfo,
    // Use CV preview data if available (for immediate editor updates)
    cvUrl: cvPreviewUrl || personalInfo.cvUrl,
    cvFileName: cvPreviewFileName || null
  } : {
    user_id: '',
    full_name: null,
    email: null,
    title: null,
    about_me: null,
    location: null,
    avatarUrl: null,
    cvUrl: cvPreviewUrl || null,
    custom_links: [],
    cvFileName: cvPreviewFileName || null
  };

  // Check if sections have meaningful content
  const hasUserInfo = !!(
    extendedPersonalInfo.full_name || 
    extendedPersonalInfo.title || 
    extendedPersonalInfo.about_me ||
    extendedPersonalInfo.avatarUrl ||
    extendedPersonalInfo.email ||
    extendedPersonalInfo.cvUrl ||
    (extendedPersonalInfo.custom_links && extendedPersonalInfo.custom_links.length > 0)
  );
  
  const hasExperience = !!(experiences && experiences.length > 0);
  const hasEducation = !!(educations && educations.length > 0);
  const hasProjects = !!(projects && projects.length > 0);
  const hasSkills = !!(userTechnologies && userTechnologies.length > 0);
  const hasCustomSections = !!(customSections && customSections.length > 0);

  // Check if portfolio is completely empty
  const isCompletelyEmpty = !hasUserInfo && !hasExperience && !hasEducation && !hasProjects && !hasSkills && !hasCustomSections;

  // Use provided section order or fall back to default + custom sections
  const sectionsToRender = sectionOrder && sectionOrder.length > 0 
    ? sectionOrder 
    : [...DEFAULT_SECTION_ORDER, ...(customSections?.map(s => s.id) || [])];

  // Create section mapping for dynamic rendering
  const sectionRenderers: Record<SectionKey, () => React.JSX.Element | null> = {
    personal: () => {
      if (!hasUserInfo) return null;
      return <UserInfo1 personalInfo={extendedPersonalInfo} />;
    },
    experience: () => {
      if (!hasExperience) return null;
      return <CustomSection3 section={{
        id: 'work-experience',
        user_id: '',
        section_name: 'Work Experience',
        layout_type: 'card' as const,
        items: experiences.map((exp: any, index: number) => ({
          id: exp.id,
          primaryTitle: exp.company || 'Company',
          secondaryTitle: exp.position || undefined,
          dateInfo: `${exp.start_date || ''} - ${exp.end_date || 'Present'}`.trim(),
          description: exp.description || undefined,
          logoUrl: exp.logoUrl || null,
          customLinks: exp.custom_links?.map((link: any) => ({
            id: link.id,
            title: link.title,
            url: link.url,
            icon: link.icon,
          })) || [],
          orderIndex: index
        })),
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }} />;
    },
    education: () => {
      if (!hasEducation) return null;
      return <CustomSection3 section={{
        id: 'education',
        user_id: '',
        section_name: 'Education',
        layout_type: 'card' as const,
        items: educations.map((edu: any, index: number) => ({
          id: edu.id,
          primaryTitle: edu.university || 'University',
          secondaryTitle: edu.degree || undefined,
          dateInfo: `${edu.start_year || ''} - ${edu.end_year || 'Present'}`.trim(),
          description: edu.description || undefined,
          logoUrl: edu.logoUrl || null,
          customLinks: edu.custom_links?.map((link: any) => ({
            id: link.id,
            title: link.title,
            url: link.url,
            icon: link.icon,
          })) || [],
          orderIndex: index
        })),
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }} />;
    },
    projects: () => {
      if (!hasProjects) return null;
      return <Projects1 projects={projects} />;
    },
    skills: () => {
      if (!hasSkills) return null;
      return <Skills1 userTechnologies={userTechnologies} />;
    },
  };
  
  // Add custom sections to the renderer dynamically
  customSections?.forEach((section: any) => {
    sectionRenderers[section.id] = () => {
      if (section.items.length === 0) return null;
      
      if (section.layout_type === 'timeline') {
        return <CustomSectionTimeline section={section} />;
      } else if (section.layout_type === 'list') {
        return <CustomSectionList section={section} />;
      } else {
        return <CustomSection3 section={section} />;
      }
    };
  });

  return (
    <main className="min-h-screen bg-background relative">
      <div className="container mx-auto max-w-4xl px-4 py-8 pb-24">
        {isCompletelyEmpty ? (
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="text-center max-w-md mx-auto">
              <div className="text-muted-foreground text-lg mb-2">
                📝 Your portfolio preview will appear here
              </div>
              <p className="text-sm text-muted-foreground">
                Add information in the sidebar to start building your portfolio
              </p>
            </div>
          </div>
        ) : (
          <>
            {sectionsToRender.map((sectionKey) => {
              const SectionRenderer = sectionRenderers[sectionKey];
              return SectionRenderer ? <div key={sectionKey}>{SectionRenderer()}</div> : null;
            })}
          </>
        )}
      </div>
    </main>
  )
}