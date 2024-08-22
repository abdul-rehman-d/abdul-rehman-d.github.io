import { icons, images } from "../theme";
import Calculator from '../components/apps/Calculator/Calculator.svelte';

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
                external_link: 'https://indolj.pk/',
            },
            // {
            //     name: 'California',
            //     icon: 'https://console.indolj.io/upload/1658409985-Logo-california.png',
            //     size: '1x1',
            //     external_link: 'https://californiapizza.com.pk/'
            // },
            // {
            //     name: 'Rehmat e Shereen',
            //     icon: 'https://scontent.fkhi17-1.fna.fbcdn.net/v/t39.30808-6/379305415_708654591298005_5298503343706501957_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHwxWq4hz8d_L1DhPpgXhjWcroRI-rnnyZyuhEj6uefJnqu3JVmwhY2DyLYZilCDnnehMicFTrEPNK1jsLwZuRw&_nc_ohc=NfzmbDyZdbcQ7kNvgECJmw3&_nc_ht=scontent.fkhi17-1.fna&oh=00_AYDh8ffYt5lyU2f1BNqsD_Rl3x_HRkqn9ijQaA0b1-h7JQ&oe=6679D69C',
            //     size: '1x1',
            //     external_link: 'https://order.rehmateshereen.com/'
            // },
            // {
            //     name: 'United King',
            //     icon: 'https://console.indolj.io/upload/1652698752-uk-1.jpg',
            //     size: '1x1',
            //     external_link: 'https://www.unitedkingonline.com/'
            // },
            // {
            //     name: 'Pie in the Sky',
            //     icon: 'https://console.indolj.io/upload/1658775499-Logo.png',
            //     size: '1x1',
            //     external_link: 'https://order.pieinthesky.com.pk/'
            // },
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
