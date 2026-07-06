export interface ProjectDescription {
    [key: string]: string;
}

export interface Project {
    title: string;
    category: string;
    completedYear: string;
    desc: ProjectDescription[];
    image: string;
    tools: string[];
    link: string,
    clientName?: string;
    teamSize?: number;
}