type TApp = {
    name: string;
    icon: string;
    size: '1x1' | '2x2' | '2x4';
}

type TFolder = {
    name: string;
    apps: TApp[];
}