type TApp = {
    id?: string,
    name: string;
    icon: string;
    size: '1x1' |  '2x2' | '2x4';
    external_link?: string;
    Component?: import('svelte').ComponentType;
    project_details?: {
        description: string;
        image: string;
        bullet_points?: string[];
        technologies: Technology[];
        extra_section?: import('svelte').ComponentType;
        play_store_link?: string;
        code_link?: string;
        web_preview_link?: string;
        colors: {
            fg: string;
            bg: string;
        }
    };
    topbarTheme?: 'light' | 'dark';
    open?: boolean;
}

type TFolder = {
    name: string;
    apps: TApp[];
}

// 'react' | 'next' | 'node' | 'express' | 'typescript' | 'go' | 'python' | 'git' | 'linux' | 'docker'
type Technology = {
    name: string;
    icon: string;
};
