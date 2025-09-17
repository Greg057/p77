/**
 * Database-first TypeScript types for Koderra Portfolio Builder
 * All types match the actual Supabase database schema exactly
 */

// Custom link type for flexible linking across all sections
export type CustomLink = {
  id: string;
  icon: string; // 'github', 'youtube', 'website', 'demo', 'slides', 'documentation', etc.
  title: string;
  url: string;
};

// Core user information (matches personal_info table)
export type UserInfo = {
    user_id: string; // Primary key, references `auth.users.id`
    full_name: string | null;
    email: string | null;
    title: string | null;
    about_me: string | null;
    location: string | null;
    avatarUrl: string | null;
    cvUrl: string | null;
    custom_links: CustomLink[];
};

// Work experience (matches work_experience table)
export type WorkExperience = {
    id: string; // Primary key
    user_id: string; // References `auth.users.id`
    company: string | null;
    position: string | null;
    location: string | null;
    start_date: string | null;
    end_date: string | null;
    description: string | null;
    logoUrl: string | null;
    order_index: number;
    custom_links: CustomLink[];
};

// Education (matches education table)
export type Education = {
    id: string; // Primary key
    user_id: string; // References `auth.users.id`
    degree: string | null;
    university: string | null;
    location: string | null;
    start_year: string | null;
    end_year: string | null;
    description: string | null;
    logoUrl: string | null;
    order_index: number;
    custom_links: CustomLink[];
};

// Projects (matches projects table)
export type Project = {
    id: string; // Primary key
    user_id: string; // References `auth.users.id`
    name: string | null;
    description: string | null;
    picUrl: string | null;
    technology_names: string[] | null; // Array of technology names
    technology_details: TechnologyDetail[] | null; // JSONB array of technology details
    order_index: number;
    custom_links: CustomLink[];
};

// Technology detail structure for project technology_details
export type TechnologyDetail = {
    id?: string; // Optional ID for client-side management
    name: string;
    displayName?: string;
    technologyName?: string;
    logoType?: 'default' | 'svg_version' | 'custom_upload';
    logoData?: string | null;
    order_index?: number;
};

// User technologies (matches user_technologies table)
export type Technology = {
    id: string; // Primary key
    user_id: string; // References `auth.users.id`
    display_name: string | null; // User-friendly display name
    technology_name: string | null; // Canonical devicon name for logo lookup
    logo_type: 'default' | 'svg_version' | 'custom_upload' | null; // Type of logo being used
    logo_data: string | null; // SVG version name, custom image URL, or null for default
    order_index: number;
    created_at: string;
    updated_at: string;
};



export type CustomSectionItem = {
    id: string;
    primaryTitle?: string;
    secondaryTitle?: string;
    dateInfo?: string;
    location?: string;
    description?: string;
    logoUrl?: string | null;
    customLinks: CustomLink[];
    orderIndex: number;
};

export type CustomSection = {
    id: string; // Primary key
    user_id: string; // References `auth.users.id`
    section_name: string; // Title of the section (e.g., "Public Speaking")
    layout_type: 'card' | 'timeline' | 'list';
    items: CustomSectionItem[];
    created_at: string;
    updated_at: string;
};



// User section ordering (matches user_section_order table)
export type UserSectionOrder = {
    user_id: string; // Primary key, references `auth.users.id`
    section_order: string[]; // Array of section identifiers
    updated_at: string;
};

// Section identifier types for type safety
export type SectionKey = 
    | 'personal'
    | 'experience' 
    | 'education'
    | 'projects'
    | 'skills'
    | string; // Allow custom section keys

// Default section order constant
export const DEFAULT_SECTION_ORDER: SectionKey[] = [
    'personal',
    'experience',
    'education', 
    'projects',
    'skills'
];

// Portfolio configuration (matches portfolio_data table)
export type PortfolioData = {
    user_id: string; // Primary key, references `auth.users.id`
    is_saved: boolean;
    updated_at: string;
    created_at: string;
    education_layout_type: 'card' | 'timeline' | 'list';
    work_layout_type: 'card' | 'timeline' | 'list';
    user_info_layout_type: 'userInfo1' | 'userInfo2' | 'userInfo3' | 'userInfo4';
    projects_layout_type: 'projects1' | 'projects3';
    skills_layout_type: 'skills1' | 'skills3' | 'skillsCarousel';
    slug: string | null;
};

// GitHub-related types (for API responses)
export interface GitHubUser {
    login: string;
    name: string;
    bio: string | null;
    avatar_url: string;
    html_url: string;
    public_repos: number;
    followers: number;
    following: number;
}

export interface GitHubRepository {
    id: number;
    name: string;
    full_name: string;
    description: string | null;
    html_url: string;
    homepage: string | null;
    language: string | null;
    topics: string[];
    stargazers_count: number;
    forks_count: number;
    fork: boolean;
    updated_at: string;
    created_at: string;
}

export interface ParsedRepository {
    id: number;
    name: string;
    description: string | null;
    technologies: string[];
    stargazers_count: number;
    forks_count: number;
    updated_at: string;
    readme_content?: string;
    custom_links: CustomLink[];
}

export interface ImportedProject {
    id: string;
    name: string;
    description: string | null;
    technologies: string[];
    stargazers_count: number;
    forks_count: number;
    imported_at: string;
    custom_links: CustomLink[];
}

// Utility types
export type UploadResult = {
    publicUrl: string | null;
    error: Error | null;
};

// Anonymous user detection utility type
export interface AnonymousUserInfo {
    isAnonymous: boolean;
    userType: 'anonymous' | 'permanent';
    shouldShowWarning: boolean;
}

// User type for authentication context
export type User = {
    id: string;
    email?: string;
    is_anonymous?: boolean; // Direct property set by Supabase for anonymous users
    user_metadata?: {
        [key: string]: unknown;
    };
    app_metadata?: {
        [key: string]: unknown;
    };
};

// Form data types for server actions
export interface SavePersonalInfoState {
    message: string;
    avatarUrl?: string;
    cvUrl?: string;
}

export interface SaveExperienceState {
    message: string;
}

export interface SaveEducationState {
    message: string;
}

export interface SaveProjectsState {
    message: string;
}

export interface SaveSkillsState {
    message: string;
}

export interface SavePortfolioConfigState {
    message: string;
}

export interface DeployPortfolioState {
    message: string;
    deployedUrl?: string;
}

// Onboarding data types
export interface OnboardingData {
    userId: string;
    userInfo: Partial<UserInfo>;
    educations: Partial<Education>[];
    experiences: Partial<WorkExperience>[];
    projects: Partial<Project>[];
    userTechnologies: string[];
}

// Component selection types
export interface ComponentSelection {
    userInfo: string;
    educationWork: string;
    projects: string;
    userSkills: string;
}
  