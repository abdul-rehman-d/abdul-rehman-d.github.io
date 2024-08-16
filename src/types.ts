type TApp = {
    id?: string,
    name: string;
    icon: string;
    size: '1x1' | '2x2' | '2x4';
    external_link?: string;
    Component?: import('svelte').ComponentType;
    topbarTheme?: 'light' | 'dark',
    open?: boolean,
}

type TFolder = {
    name: string;
    apps: TApp[];
}

