import type { Education, Project, UserInfo, Technology, WorkExperience, SectionKey, CustomSection } from './supabase-types'

/**
 * Shared Portfolio Types
 * 
 * This file contains common interfaces and types used across different
 * portfolio components to reduce duplication and improve maintainability.
 */

/**
 * Base portfolio data interface used across all portfolio contexts
 */
export interface BasePortfolioData {
  /** User's personal information */
  personalInfo: UserInfo
  /** User's education history */
  educations: Education[]
  /** User's work experience */
  experiences: WorkExperience[]
  /** User's projects */
  projects: Project[]
  /** User's technologies and skills */
  userTechnologies: Technology[]
  /** User's custom sections */
  customSections: CustomSection[]
  /** User's custom section order */
  sectionOrder?: SectionKey[]
}

/**
 * Component reference interface for portfolio sections
 * 
 * This matches the actual structure exported from componentsData.ts
 */
export interface PortfolioComponentReference<T = any> {
  /** The React component to render */
  component: React.ComponentType<T>
  /** Human-readable name for the component */
  name: string
  /** Unique key identifier for the component */
  key: string
}

/**
 * Complete portfolio components configuration
 * 
 * This interface matches the actual structure exported from componentsData.ts
 */
export interface PortfolioComponents {
  /** Component for rendering user information section */
  userInfo: PortfolioComponentReference<any>
  /** Component for rendering projects showcase section */
  projects: PortfolioComponentReference<any>
  /** Component for rendering skills and technologies section */
  userSkills: PortfolioComponentReference<any>
  /** Component for rendering custom sections (optional - handled dynamically) */
  customSections?: PortfolioComponentReference<any>
}

/**
 * Portfolio display props interface
 *
 * Used by PortfolioDisplay component to receive data and component references
 */
export interface PortfolioDisplayProps extends BasePortfolioData {
  /** Component references for dynamic portfolio rendering */
  selectedComponents: PortfolioComponents
  /** Layout type for education section */
  educationLayoutType?: 'card' | 'timeline' | 'list'
  /** Layout type for work experience section */
  workLayoutType?: 'card' | 'timeline' | 'list'
  /** Layout type for user info section */
  userInfoLayoutType?: 'userInfo1' | 'userInfo2' | 'userInfo3' | 'userInfo4'
  /** Layout type for projects section */
  projectsLayoutType?: 'projects1' | 'projects3'
  /** Layout type for skills section */
  skillsLayoutType?: 'skills1' | 'skills3' | 'skillsCarousel'
  /** CV preview URL for immediate portfolio updates */
  cvPreviewUrl?: string | null
  /** CV preview filename for immediate portfolio updates */
  cvPreviewFileName?: string | null
}

/**
 * Portfolio page props interface
 * 
 * Used by PortfolioPage component for editor preview functionality
 */
export interface PortfolioPageProps extends BasePortfolioData {
  /** Component to render user information section */
  UserInfoComponent: React.ComponentType<{ personalInfo: UserInfo }>
  /** Component to render projects section */
  ProjectsComponent: React.ComponentType<{ projects: Project[] }>
  /** Component to render user skills/technologies section */
  UserSkillsComponent: React.ComponentType<{ userTechnologies: Technology[] }>
  /** Layout type for education section */
  educationLayoutType?: 'card' | 'timeline' | 'list'
  /** Layout type for work experience section */
  workLayoutType?: 'card' | 'timeline' | 'list'
  /** Layout type for user info section */
  userInfoLayoutType?: 'userInfo1' | 'userInfo2' | 'userInfo3' | 'userInfo4'
  /** Layout type for projects section */
  projectsLayoutType?: 'projects1' | 'projects3'
  /** Layout type for skills section */
  skillsLayoutType?: 'skills1' | 'skills3' | 'skillsCarousel'
  /** CV preview URL for immediate portfolio updates (editor only) */
  cvPreviewUrl?: string | null
  /** CV preview filename for immediate portfolio updates (editor only) */
  cvPreviewFileName?: string | null
}

/**
 * Portfolio layout props interface
 * 
 * Used by PortfolioLayout component for consistent rendering across contexts
 */
export interface PortfolioLayoutProps extends BasePortfolioData {
  /** Component to render user information section */
  userInfoComponent: React.ComponentType<{ personalInfo: UserInfo }>
  /** Component to render projects section */
  projectsComponent: React.ComponentType<{ projects: Project[] }>
  /** Component to render user skills/technologies section */
  userSkillsComponent: React.ComponentType<{ userTechnologies: Technology[] }>
  /** Layout type for education section */
  educationLayoutType?: 'card' | 'timeline' | 'list'
  /** Layout type for work experience section */
  workLayoutType?: 'card' | 'timeline' | 'list'
  /** Layout type for user info section */
  userInfoLayoutType?: 'userInfo1' | 'userInfo2' | 'userInfo3' | 'userInfo4'
  /** Layout type for projects section */
  projectsLayoutType?: 'projects1' | 'projects3'
  /** Layout type for skills section */
  skillsLayoutType?: 'skills1' | 'skills3' | 'skillsCarousel'
  /** CV preview URL for immediate portfolio updates (editor only) */
  cvPreviewUrl?: string | null
  /** CV preview filename for immediate portfolio updates (editor only) */
  cvPreviewFileName?: string | null
}
