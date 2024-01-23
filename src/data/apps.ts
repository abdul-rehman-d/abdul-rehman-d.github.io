import { icons, images } from "../theme";

export const APP_LIBRARY_FOLDERS: TFolder[] = [
    {
        name: 'Connect with Me',
        apps: [
            {
                name: 'LinkedIn',
                icon: icons.linkedin,
                size: '1x1',
            },
            {
                name: 'GitHub',
                icon: icons.github,
                size: '1x1',
            },
            {
                name: 'Twitter',
                icon: icons.X,
                size: '1x1',
            },
            {
                name: 'Email',
                icon: icons.mail,
                size: '1x1',
            },
        ],
    },
    {
        name: 'Technologies',
        apps: [
            {
                name: 'React',
                icon: '',
                size: '1x1',
            },
            {
                name: 'React Native',
                icon: '',
                size: '1x1',
            },
            {
                name: 'Next js',
                icon: '',
                size: '1x1',
            },
            {
                name: 'Node js',
                icon: '',
                size: '1x1',
            },
            {
                name: 'Express js',
                icon: '',
                size: '1x1',
            },
            {
                name: 'Typescript',
                icon: '',
                size: '1x1',
            }, {
                name: 'Go',
                icon: '',
                size: '1x1',
            }, {
                name: 'Python',
                icon: '',
                size: '1x1',
            },
            {
                name: 'Git',
                icon: '',
                size: '1x1',
            }, {
                name: 'Linux',
                icon: '',
                size: '1x1',
            }, {
                name: 'Docker',
                icon: '',
                size: '1x1',
            },
        ]
    },
    {
        name: 'Mobile Apps',
        apps: [
            {
                name: 'MedList',
                icon: '',
                size: '1x1',
            },
        ],
    },
    {
        name: 'Web Apps',
        apps: [
            {
                name: 'Twitter Clone',
                icon: '',
                size: '1x1',
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
        icon: icons.photos,
        name: "Photos",
        size: "1x1",
    },
    {
        icon: icons.appleWallet,
        name: "Wallet",
        size: "1x1",
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
