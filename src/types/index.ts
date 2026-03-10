export interface Project {
    id: string;
    title: string;
    category: string;
    description: string;
    longDescription: string;
    image: string;
    technologies: string[];
    date: string;
    link?: string;
    highlight?: string;
}

export interface Skill {
    name: string;
    level: number; // 1-100
    category: 'Frontend' | 'Backend' | 'Design' | 'Other';
}

export interface Education {
    institution: string;
    degree: string;
    period: string;
    description?: string;
}
