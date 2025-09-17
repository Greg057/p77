'use client';

// 🎯 PORTFOLIO PAGE USING ACTUAL PORTFOLIOLAYOUT SYSTEM
// This ensures 100% visual parity with the SaaS version
import PortfolioLayout from '@/components/PortfolioLayout'

// User data embedded at build time (no server-side dependencies)
// NOTE: File URLs include GitHub Pages basePath (e.g., /repo-name/user-files/...)
const userData = {
  "userInfo": {
    "user_id": "d0967d5e-fb83-41f9-bcd8-b5e6593f8971",
    "full_name": "Jane Doe",
    "title": "Software Engineer",
    "email": "jane.doe@email.com",
    "about_me": "Software Engineer at TechWave Solutions specializing in scalable web applications, cloud platforms, and Agile methodologies. Passionate about building user-friendly solutions and continuously learning emerging technologies such as artificial intelligence, machine learning, and cloud-native applications. Experienced in Java, Python, JavaScript, and cloud DevOps tools.",
    "location": "San Francisco, CA",
    "avatarUrl": null,
    "cvUrl": "/p77/user-files/d0967d5e-fb83-41f9-bcd8-b5e6593f8971/cv.pdf",
    "custom_links": [
      {
        "id": "1",
        "url": "https://linkedin.com/in/janedoe",
        "icon": "linkedin",
        "title": "LinkedIn"
      },
      {
        "id": "2",
        "url": "https://github.com/janedoe",
        "icon": "github",
        "title": "GitHub"
      }
    ],
    "published_data": null
  },
  "educations": [
    {
      "id": "0d4d111f-2ae4-4bd7-82ad-79a94122686d",
      "user_id": "d0967d5e-fb83-41f9-bcd8-b5e6593f8971",
      "degree": "Bachelor of Computer Science",
      "university": "University of California, Berkeley",
      "start_year": "2015",
      "end_year": "2019",
      "description": "Relevant Coursework:\r\nData Structures, Algorithms, Operating Systems, Databases, Machine Learning, Software Engineering.",
      "logoUrl": null,
      "order_index": 0,
      "custom_links": [],
      "location": "Berkeley, CA",
      "published_data": null
    }
  ],
  "experiences": [
    {
      "id": "25404199-a5d8-4611-abf9-5170a8bdfcc8",
      "user_id": "d0967d5e-fb83-41f9-bcd8-b5e6593f8971",
      "company": "TechWave Solutions",
      "position": "Software Engineer",
      "start_date": "Jan 2021",
      "end_date": "Present",
      "description": "- Designed and developed scalable microservices in Java and Node.js, reducing system downtime by 30%.\r\n- Implemented CI/CD pipelines with GitHub Actions and Docker, improving deployment speed by 40%.\r\n- Optimized database queries in PostgreSQL, cutting average response time by 25%.\r\n- Collaborated with a team of 8 engineers using Agile, consistently delivering features within sprint deadlines.\r\n- Mentored junior developers, leading to faster onboarding and reduced code review issues.",
      "logoUrl": null,
      "order_index": 0,
      "custom_links": [],
      "location": "San Francisco, CA",
      "published_data": null
    },
    {
      "id": "289ba0c3-4879-4114-b53e-0fafad331619",
      "user_id": "d0967d5e-fb83-41f9-bcd8-b5e6593f8971",
      "company": "BrightApps Inc.",
      "position": "Junior Software Engineer",
      "start_date": "Jun 2019",
      "end_date": "Dec 2020",
      "description": "- Built front-end features with React and integrated REST APIs for an e-commerce platform serving 50k+ users.\r\n- Wrote unit and integration tests, increasing code coverage from 60% to 85%.\r\n- Supported migration of legacy PHP application to Node.js, improving maintainability.\r\n- Partnered with UX designers to enhance customer checkout flow, resulting in 15% increase in conversions.\r\n- Automated deployment scripts with Jenkins, cutting manual release steps by 70%.",
      "logoUrl": null,
      "order_index": 1,
      "custom_links": [],
      "location": "San Jose, CA",
      "published_data": null
    }
  ],
  "projects": [
    {
      "id": "6dea8041-96bc-41e5-95a1-17a282f6121c",
      "user_id": "d0967d5e-fb83-41f9-bcd8-b5e6593f8971",
      "name": "Portfolio Builder Web App",
      "description": "- Developed a customizable portfolio generator using Next.js and Supabase.\r\n- Implemented user authentication, template themes, and image upload features.\r\n- Deployed application on Vercel with continuous integration.",
      "picUrl": null,
      "order_index": 0,
      "technology_names": [
        "Next.js",
        "Supabase",
        "Vercel"
      ],
      "technology_details": [],
      "custom_links": [],
      "published_data": null,
      "technologyNames": [
        "Next.js",
        "Supabase",
        "Vercel"
      ],
      "technologyDetails": []
    },
    {
      "id": "2ea9b582-40ab-4864-84ad-a261ac275fbe",
      "user_id": "d0967d5e-fb83-41f9-bcd8-b5e6593f8971",
      "name": "Movie Recommendation System",
      "description": "- Built a Python-based ML model using scikit-learn to recommend movies with 82% accuracy.\r\n- Deployed the model as a Flask API and integrated it into a React front end.\r\n- Conducted A/B testing with 200+ users, improving recommendation relevance by 18%.",
      "picUrl": null,
      "order_index": 1,
      "technology_names": [
        "Python",
        "scikit-learn",
        "Flask",
        "React"
      ],
      "technology_details": [],
      "custom_links": [],
      "published_data": null,
      "technologyNames": [
        "Python",
        "scikit-learn",
        "Flask",
        "React"
      ],
      "technologyDetails": []
    },
    {
      "id": "9e041c83-bb93-46d2-97bc-2155f4c5f21a",
      "user_id": "d0967d5e-fb83-41f9-bcd8-b5e6593f8971",
      "name": "Task Manager Mobile App",
      "description": "- Created a cross-platform mobile app using React Native for task tracking.\r\n- Integrated push notifications and offline storage using SQLite.\r\n- Achieved 1,000+ downloads with positive feedback on UI/UX.",
      "picUrl": null,
      "order_index": 2,
      "technology_names": [
        "React Native",
        "SQLite"
      ],
      "technology_details": [],
      "custom_links": [],
      "published_data": null,
      "technologyNames": [
        "React Native",
        "SQLite"
      ],
      "technologyDetails": []
    }
  ],
  "userTechnologies": [
    {
      "id": "e0c5e8ca-de35-4434-ade7-8930ebdcf155",
      "user_id": "d0967d5e-fb83-41f9-bcd8-b5e6593f8971",
      "display_name": "Java",
      "technology_name": "Java",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 0,
      "created_at": "2025-09-17T22:26:00.927+00:00",
      "updated_at": "2025-09-17T22:26:00.927+00:00"
    },
    {
      "id": "72461c17-a27d-4b65-b838-932cde8c5679",
      "user_id": "d0967d5e-fb83-41f9-bcd8-b5e6593f8971",
      "display_name": "Python",
      "technology_name": "Python",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 1,
      "created_at": "2025-09-17T22:26:00.927+00:00",
      "updated_at": "2025-09-17T22:26:00.927+00:00"
    },
    {
      "id": "76ec14af-9ff5-400f-89bc-f904c691301d",
      "user_id": "d0967d5e-fb83-41f9-bcd8-b5e6593f8971",
      "display_name": "JavaScript",
      "technology_name": "JavaScript",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 2,
      "created_at": "2025-09-17T22:26:00.927+00:00",
      "updated_at": "2025-09-17T22:26:00.927+00:00"
    },
    {
      "id": "a582310f-6026-4d77-92cb-382eb4f271d0",
      "user_id": "d0967d5e-fb83-41f9-bcd8-b5e6593f8971",
      "display_name": "React",
      "technology_name": "React",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 3,
      "created_at": "2025-09-17T22:26:00.927+00:00",
      "updated_at": "2025-09-17T22:26:00.927+00:00"
    },
    {
      "id": "6403a466-833d-47d0-b97f-c69d3fda4d3f",
      "user_id": "d0967d5e-fb83-41f9-bcd8-b5e6593f8971",
      "display_name": "Node.js",
      "technology_name": "Node.js",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 4,
      "created_at": "2025-09-17T22:26:00.927+00:00",
      "updated_at": "2025-09-17T22:26:00.927+00:00"
    },
    {
      "id": "dcc22c6f-2f43-4f02-8f12-0305c2ed171e",
      "user_id": "d0967d5e-fb83-41f9-bcd8-b5e6593f8971",
      "display_name": "TypeScript",
      "technology_name": "TypeScript",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 5,
      "created_at": "2025-09-17T22:26:00.927+00:00",
      "updated_at": "2025-09-17T22:26:00.927+00:00"
    },
    {
      "id": "34d0e26c-8069-40b4-b56f-4e8cc6490344",
      "user_id": "d0967d5e-fb83-41f9-bcd8-b5e6593f8971",
      "display_name": "C++",
      "technology_name": "C++",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 6,
      "created_at": "2025-09-17T22:26:00.927+00:00",
      "updated_at": "2025-09-17T22:26:00.927+00:00"
    },
    {
      "id": "5fe474b8-f701-4aa6-b6d6-b24484556eda",
      "user_id": "d0967d5e-fb83-41f9-bcd8-b5e6593f8971",
      "display_name": "Next.js",
      "technology_name": "Next.js",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 7,
      "created_at": "2025-09-17T22:26:00.927+00:00",
      "updated_at": "2025-09-17T22:26:00.927+00:00"
    },
    {
      "id": "53f34f71-6170-43d2-bd89-b702282da72d",
      "user_id": "d0967d5e-fb83-41f9-bcd8-b5e6593f8971",
      "display_name": "Spring Boot",
      "technology_name": "Spring Boot",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 8,
      "created_at": "2025-09-17T22:26:00.927+00:00",
      "updated_at": "2025-09-17T22:26:00.927+00:00"
    },
    {
      "id": "b836bdee-61dd-4026-9d4f-ee6c641fae15",
      "user_id": "d0967d5e-fb83-41f9-bcd8-b5e6593f8971",
      "display_name": "Express.js",
      "technology_name": "Express.js",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 9,
      "created_at": "2025-09-17T22:26:00.927+00:00",
      "updated_at": "2025-09-17T22:26:00.927+00:00"
    },
    {
      "id": "002609a0-606f-4bfe-badc-4595a1865a4d",
      "user_id": "d0967d5e-fb83-41f9-bcd8-b5e6593f8971",
      "display_name": "Django",
      "technology_name": "Django",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 10,
      "created_at": "2025-09-17T22:26:00.927+00:00",
      "updated_at": "2025-09-17T22:26:00.927+00:00"
    },
    {
      "id": "bb32c30a-9748-46d4-9a68-5065b3924f10",
      "user_id": "d0967d5e-fb83-41f9-bcd8-b5e6593f8971",
      "display_name": "PostgreSQL",
      "technology_name": "PostgreSQL",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 11,
      "created_at": "2025-09-17T22:26:00.927+00:00",
      "updated_at": "2025-09-17T22:26:00.927+00:00"
    },
    {
      "id": "11770d27-7492-4b0f-a773-3839b4f58068",
      "user_id": "d0967d5e-fb83-41f9-bcd8-b5e6593f8971",
      "display_name": "MongoDB",
      "technology_name": "MongoDB",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 12,
      "created_at": "2025-09-17T22:26:00.927+00:00",
      "updated_at": "2025-09-17T22:26:00.927+00:00"
    },
    {
      "id": "e1646312-7929-4bd3-adde-1e39f8bb0b79",
      "user_id": "d0967d5e-fb83-41f9-bcd8-b5e6593f8971",
      "display_name": "MySQL",
      "technology_name": "MySQL",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 13,
      "created_at": "2025-09-17T22:26:00.927+00:00",
      "updated_at": "2025-09-17T22:26:00.927+00:00"
    },
    {
      "id": "b8ce3f6b-b662-46c7-ad16-886b25799739",
      "user_id": "d0967d5e-fb83-41f9-bcd8-b5e6593f8971",
      "display_name": "Redis",
      "technology_name": "Redis",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 14,
      "created_at": "2025-09-17T22:26:00.927+00:00",
      "updated_at": "2025-09-17T22:26:00.927+00:00"
    },
    {
      "id": "cfee9023-8090-4aa2-b418-77611ff76a8e",
      "user_id": "d0967d5e-fb83-41f9-bcd8-b5e6593f8971",
      "display_name": "AWS",
      "technology_name": "AWS",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 15,
      "created_at": "2025-09-17T22:26:00.927+00:00",
      "updated_at": "2025-09-17T22:26:00.927+00:00"
    },
    {
      "id": "353941d2-e24a-4eb7-9a9c-5b0cd2b1d8bd",
      "user_id": "d0967d5e-fb83-41f9-bcd8-b5e6593f8971",
      "display_name": "Docker",
      "technology_name": "Docker",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 16,
      "created_at": "2025-09-17T22:26:00.927+00:00",
      "updated_at": "2025-09-17T22:26:00.927+00:00"
    },
    {
      "id": "95c4a568-3e27-49d1-ab4f-fe27bbb44837",
      "user_id": "d0967d5e-fb83-41f9-bcd8-b5e6593f8971",
      "display_name": "Kubernetes",
      "technology_name": "Kubernetes",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 17,
      "created_at": "2025-09-17T22:26:00.927+00:00",
      "updated_at": "2025-09-17T22:26:00.927+00:00"
    },
    {
      "id": "774e2757-3088-4687-a121-c94c77e2a32c",
      "user_id": "d0967d5e-fb83-41f9-bcd8-b5e6593f8971",
      "display_name": "Git",
      "technology_name": "Git",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 18,
      "created_at": "2025-09-17T22:26:00.927+00:00",
      "updated_at": "2025-09-17T22:26:00.927+00:00"
    },
    {
      "id": "d8ae4cdf-c864-4178-bf83-e1941da51b1a",
      "user_id": "d0967d5e-fb83-41f9-bcd8-b5e6593f8971",
      "display_name": "Jenkins",
      "technology_name": "Jenkins",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 19,
      "created_at": "2025-09-17T22:26:00.927+00:00",
      "updated_at": "2025-09-17T22:26:00.927+00:00"
    },
    {
      "id": "753aff8e-e418-4792-bd43-98a8136a434e",
      "user_id": "d0967d5e-fb83-41f9-bcd8-b5e6593f8971",
      "display_name": "CI/CD pipelines",
      "technology_name": "CI/CD pipelines",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 20,
      "created_at": "2025-09-17T22:26:00.927+00:00",
      "updated_at": "2025-09-17T22:26:00.927+00:00"
    },
    {
      "id": "f2eda15a-ac24-42aa-a1d2-46082ef0fb3e",
      "user_id": "d0967d5e-fb83-41f9-bcd8-b5e6593f8971",
      "display_name": "REST APIs",
      "technology_name": "REST APIs",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 21,
      "created_at": "2025-09-17T22:26:00.927+00:00",
      "updated_at": "2025-09-17T22:26:00.927+00:00"
    },
    {
      "id": "f176b185-d9a6-4aa2-b624-cf55fd1bdbea",
      "user_id": "d0967d5e-fb83-41f9-bcd8-b5e6593f8971",
      "display_name": "GraphQL",
      "technology_name": "GraphQL",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 22,
      "created_at": "2025-09-17T22:26:00.927+00:00",
      "updated_at": "2025-09-17T22:26:00.927+00:00"
    },
    {
      "id": "a186cdd0-0c12-4e2d-8e02-d6f55fcacfab",
      "user_id": "d0967d5e-fb83-41f9-bcd8-b5e6593f8971",
      "display_name": "Unit Testing",
      "technology_name": "Unit Testing",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 23,
      "created_at": "2025-09-17T22:26:00.927+00:00",
      "updated_at": "2025-09-17T22:26:00.927+00:00"
    },
    {
      "id": "fa7c9380-e913-4065-8657-80d909cbff6d",
      "user_id": "d0967d5e-fb83-41f9-bcd8-b5e6593f8971",
      "display_name": "Agile/Scrum",
      "technology_name": "Agile/Scrum",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 24,
      "created_at": "2025-09-17T22:26:00.927+00:00",
      "updated_at": "2025-09-17T22:26:00.927+00:00"
    },
    {
      "id": "9d1bce20-44fb-43d9-9f14-de354d1b00df",
      "user_id": "d0967d5e-fb83-41f9-bcd8-b5e6593f8971",
      "display_name": "Test-Driven Development (TDD)",
      "technology_name": "Test-Driven Development (TDD)",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 25,
      "created_at": "2025-09-17T22:26:00.927+00:00",
      "updated_at": "2025-09-17T22:26:00.927+00:00"
    },
    {
      "id": "7a93676e-c6e6-4e73-8059-16244fc7aa00",
      "user_id": "d0967d5e-fb83-41f9-bcd8-b5e6593f8971",
      "display_name": "GitHub Actions",
      "technology_name": "GitHub Actions",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 26,
      "created_at": "2025-09-17T22:26:00.927+00:00",
      "updated_at": "2025-09-17T22:26:00.927+00:00"
    },
    {
      "id": "28b3486d-7584-4d03-aa83-081d7fd90875",
      "user_id": "d0967d5e-fb83-41f9-bcd8-b5e6593f8971",
      "display_name": "Supabase",
      "technology_name": "Supabase",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 27,
      "created_at": "2025-09-17T22:26:00.927+00:00",
      "updated_at": "2025-09-17T22:26:00.927+00:00"
    },
    {
      "id": "27d4dd05-216f-4f26-bc15-d45669cee6b0",
      "user_id": "d0967d5e-fb83-41f9-bcd8-b5e6593f8971",
      "display_name": "Vercel",
      "technology_name": "Vercel",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 28,
      "created_at": "2025-09-17T22:26:00.927+00:00",
      "updated_at": "2025-09-17T22:26:00.927+00:00"
    },
    {
      "id": "ecc9483e-db7a-4ecc-be67-1155f0d3140a",
      "user_id": "d0967d5e-fb83-41f9-bcd8-b5e6593f8971",
      "display_name": "scikit-learn",
      "technology_name": "scikit-learn",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 29,
      "created_at": "2025-09-17T22:26:00.927+00:00",
      "updated_at": "2025-09-17T22:26:00.927+00:00"
    },
    {
      "id": "692f8c1a-afd4-418a-bc55-8f68b817b2b3",
      "user_id": "d0967d5e-fb83-41f9-bcd8-b5e6593f8971",
      "display_name": "Flask",
      "technology_name": "Flask",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 30,
      "created_at": "2025-09-17T22:26:00.927+00:00",
      "updated_at": "2025-09-17T22:26:00.927+00:00"
    },
    {
      "id": "257132c9-2384-4f02-84df-3b5e62bcaf93",
      "user_id": "d0967d5e-fb83-41f9-bcd8-b5e6593f8971",
      "display_name": "React Native",
      "technology_name": "React Native",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 31,
      "created_at": "2025-09-17T22:26:00.927+00:00",
      "updated_at": "2025-09-17T22:26:00.927+00:00"
    },
    {
      "id": "54e79a53-609c-44bb-91e0-b3b699fe25c1",
      "user_id": "d0967d5e-fb83-41f9-bcd8-b5e6593f8971",
      "display_name": "SQLite",
      "technology_name": "SQLite",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 32,
      "created_at": "2025-09-17T22:26:00.927+00:00",
      "updated_at": "2025-09-17T22:26:00.927+00:00"
    }
  ],
  "customSections": [],
  "sectionOrder": [
    "personal",
    "experience",
    "education",
    "projects",
    "skills"
  ]
}

// Component layout preferences
const portfolioConfig = {
  "user_info_layout_type": "userInfo1",
  "projects_layout_type": "projects1",
  "skills_layout_type": "skills1",
  "education_layout_type": "card",
  "work_layout_type": "card",
  "github_repo_name": "p77",
  "github_username": "Greg057",
  "github_repo_url": "https://github.com/Greg057/p77"
}

export default function Portfolio() {
  return (
    <PortfolioLayout
      personalInfo={userData.userInfo}
      educations={userData.educations || []}
      experiences={userData.experiences || []}
      projects={userData.projects || []}
      userTechnologies={userData.userTechnologies || []}
      customSections={userData.customSections || []}
      userInfoLayoutType={portfolioConfig?.user_info_layout_type || 'userInfo1'}
      projectsLayoutType={portfolioConfig?.projects_layout_type || 'projects1'}
      skillsLayoutType={portfolioConfig?.skills_layout_type || 'skills1'}
      educationLayoutType={portfolioConfig?.education_layout_type || 'card'}
      workLayoutType={portfolioConfig?.work_layout_type || 'card'}
      sectionOrder={userData.sectionOrder || undefined}
    />
  )
}