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
                name: 'MedList',
                icon: icons.medlist,
                size: '1x1',
                external_link: 'https://play.google.com/store/apps/details?id=com.abdulrehmand.MedList'
            },
            {
                name: 'Twitter Clone',
                icon: icons.XClone,
                size: '1x1',
                external_link: 'https://twitter.abdulrehmandev.me/'
            },
        ],
    },
    {
        name: 'Projects I\'ve worked on',
        apps: [
            {
                name: 'California',
                icon: 'https://console.indolj.io/upload/1658409985-Logo-california.png',
                size: '1x1',
                external_link: 'https://californiapizza.com.pk/'
            },
            {
                name: 'Rehmat e Shereen',
                icon: 'https://scontent.fkhi17-1.fna.fbcdn.net/v/t39.30808-6/379305415_708654591298005_5298503343706501957_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHwxWq4hz8d_L1DhPpgXhjWcroRI-rnnyZyuhEj6uefJnqu3JVmwhY2DyLYZilCDnnehMicFTrEPNK1jsLwZuRw&_nc_ohc=NfzmbDyZdbcQ7kNvgECJmw3&_nc_ht=scontent.fkhi17-1.fna&oh=00_AYDh8ffYt5lyU2f1BNqsD_Rl3x_HRkqn9ijQaA0b1-h7JQ&oe=6679D69C',
                size: '1x1',
                external_link: 'https://order.rehmateshereen.com/'
            },
            {
                name: 'United King',
                icon: 'https://console.indolj.io/upload/1652698752-uk-1.jpg',
                size: '1x1',
                external_link: 'https://www.unitedkingonline.com/'
            },
            {
                name: 'Pie in the Sky',
                icon: 'https://console.indolj.io/upload/1658775499-Logo.png',
                size: '1x1',
                external_link: 'https://order.pieinthesky.com.pk/'
            },
        ],
    },
    // {
    //     name: 'Web Apps',
    //     apps: [
    //     ],
    // },
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
    // {
    //     id: "photo",
    //     icon: icons.photos,
    //     name: "Photos",
    //     size: "1x1",
    //     Component: Dummy,
    // },
    // {
    //     id: "wallet",
    //     icon: icons.appleWallet,
    //     name: "Wallet",
    //     size: "1x1",
    //     Component: Dummy,
    // },
    {
        id: "calculator",
        icon: icons.calculator,
        name: "Calculator",
        size: "1x1",
        Component: Calculator,
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
