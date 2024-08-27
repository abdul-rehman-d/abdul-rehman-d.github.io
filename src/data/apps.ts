import { icons, images } from "../theme";
import Calculator from '../components/apps/Calculator/Calculator.svelte';
import IndoljClients from "../components/apps/CustomSections/IndoljClients.svelte";

export const APP_LIBRARY_FOLDERS: TFolder[] = [
    {
        name: 'Connect with Me',
        apps: [
            {
                name: 'LinkedIn',
                icon: icons.linkedin,
                size: '1x1',
                external_link: 'https://www.linkedin.com/in/abdul-rehman-d/',
            },
            {
                name: 'GitHub',
                icon: icons.github,
                size: '1x1',
                external_link: 'https://github.com/abdul-rehman-d/',
            },
            {
                name: 'Twitter',
                icon: icons.X,
                size: '1x1',
                external_link: 'https://X.com/abdlremaaan',
            },
            {
                name: 'Email',
                icon: icons.mail,
                size: '1x1',
                external_link: 'mailto:ar618211@outlook.com',
            },
        ],
    },
    {
        name: 'Technologies',
        apps: [
            {
                name: 'React/React Native',
                icon: icons.technologies.react,
                size: '1x1',
            },
            {
                name: 'Next js',
                icon: icons.technologies.next,
                size: '1x1',
            },
            {
                name: 'Node js',
                icon: icons.technologies.node,
                size: '1x1',
            },
            {
                name: 'Typescript',
                icon: icons.technologies.typescript,
                size: '1x1',
            }, {
                name: 'Go',
                icon: icons.technologies.go,
                size: '1x1',
            }, {
                name: 'Python',
                icon: icons.technologies.python,
                size: '1x1',
            },
            {
                name: 'Git',
                icon: icons.technologies.git,
                size: '1x1',
            }, {
                name: 'Linux',
                icon: icons.technologies.linux,
                size: '1x1',
            }, {
                name: 'Docker',
                icon: icons.technologies.docker,
                size: '1x1',
            },
            {
                name: 'Express js',
                icon: icons.technologies.express,
                size: '1x1',
            },
        ]
    },
    {
        name: 'Personal Projects',
        apps: [
            {
                id: "medlist",
                name: 'MedList',
                icon: icons.medlist,
                size: '1x1',
                project_details: {
                    description: `MedList is a simple mobile app to help you keep a list of all your medications.<br>This app lets you share that list with doctor or pharmacist. You can select which medicines you want to share and which you don't.`,
                    image: images.screenshots.medlist,
                    technologies: [
                        {
                            name: "React Native",
                            icon: icons.technologies.react,
                        },
                        {
                            name: "Typescript",
                            icon: icons.technologies.typescript,
                        },
                        {
                            name: "Redux",
                            icon: icons.technologies.redux,
                        },
                        {
                            name: "React Native Paper",
                            icon: icons.technologies.react_native_paper,
                        },
                    ],
                    play_store_link: "https://play.google.com/store/apps/details?id=com.abdulrehmand.MedList",
                    code_link: "https://github.com/abdul-rehman-d/medlist",
                    colors: {
                        fg: "#000000",
                        bg: "#E6DFF8",
                    },
                },
            },
            {
                id: "x-clone",
                name: 'X Clone',
                icon: icons.XClone,
                size: '1x1',
                topbarTheme: 'light',
                project_details: {
                    description: `A clone of X(formerly Twitter) with complete backend and frontend functionality of tweeting, liking and replying. Robust authentication using third party social accounts, i.e. Github and Google.`,
                    image: images.screenshots.xclone,
                    technologies: [
                        {
                            name: "React",
                            icon: icons.technologies.react,
                        },
                        {
                            name: "Next",
                            icon: icons.technologies.next,
                        },
                        {
                            name: "Typescript",
                            icon: icons.technologies.typescript,
                        },
                        {
                            name: 'tRPC',
                            icon: icons.technologies.trpc,
                        },
                        {
                            name: 'Prisma',
                            icon: icons.technologies.prisma,
                        },
                        {
                            name: 'Zod',
                            icon: icons.technologies.zod,
                        },
                        {
                            name: 'Tailwind',
                            icon: icons.technologies.tailwind,
                        },
                    ],
                    web_preview_link: "https://twitter-abdul-rehman-d.vercel.app/",
                    code_link: "https://github.com/abdul-rehman-d/twitter-clone",
                    colors: {
                        fg: "#ffffff",
                        bg: "#111827",
                    },
                },
            },
        ],
    },
    {
        name: 'Projects I\'ve worked on',
        apps: [
            {
                id: 'indolj',
                name: 'Indolj',
                icon: icons.indolj,
                size: '1x1',
                project_details: {
                    description: `
                    Indolj is a complete suite of tools for restaurants including an online ordering web application,
                    an admin panel and point-of-sale system.<br>
                    I have personally worked on the web app, admin panel and POS system. My biggest achievements include:<br><br>
                    - Increasing the SEO optimization and Lighthouse score from 60's% to 90s.<br><br>
                    - Single-handedly porting the entire codebase from simple CRA to Nextjs and use Server Side Rendering to keep it optimized.<br><br>
                    - Increase the performance of web app by using more modern state management solutions.<br><br>
                    `,
                    image: images.screenshots.indolj,
                    technologies: [
                        {
                            name: "React",
                            icon: icons.technologies.react,
                        },
                        {
                            name: "Next",
                            icon: icons.technologies.next,
                        },
                        {
                            name: "Redux",
                            icon: icons.technologies.redux,
                        },
                    ],
                    extra_section: IndoljClients,
                    web_preview_link: 'https://indolj.pk/',
                    colors: {
                        bg: "#eeeeee",
                        fg: "#000000",
                    },
                },
            },
        ],
    },
]

export const HOME_SCREEN_1_APPS: TApp[] = [
    {
        icon: images.profile,
        name: "Abdul Rehman",
        size: "2x2",
    },
    {
        icon: images.location,
        name: "Maps",
        size: "2x2",
    },
    {
        id: "calculator",
        icon: icons.calculator,
        name: "Calculator",
        size: "1x1",
        Component: Calculator,
        topbarTheme: 'light',
    },
];

export const DOCK_APPS: TApp[] = [
    {
        icon: icons.phone,
        name: "Phone",
        size: "1x1",
    },
    {
        icon: icons.messages,
        name: "Messages",
        size: "1x1",
    },
];
