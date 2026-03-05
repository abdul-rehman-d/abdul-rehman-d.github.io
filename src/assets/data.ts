import indoljImage from "./apps/indolj.png";
import ccccImage from "./apps/cccc.jpg";
import massdImage from "./apps/massd.png";

export const SEO_DATA = {
    title: "Abdul Rehman",
    shortDescription: "I'm a full-stack developer with a focus on frontend engineering and a passion for clean design, smart systems, and solving real-world problems.",
    ogImageUrl: "og_image.png",
    websiteLink: "https://abdul-rehman-d.com/"
}

export const PROJECTS_DATA = {
    apps: [
        {
            id: "indolj",
            name: "Indolj",
            description: "Multi-tenant restaurant management",
            link: "https://indolj.pk/",
            image: indoljImage,
        },
        {
            id: "cc-connect",
            name: "Community College Career Connect",
            description: "ATS-powered web app",
            link: "https://www.communitycollegecareerconnect.com/",
            image: ccccImage,
        },
        {
            id: "masjid",
            name: "Masjid As Sunnah",
            description: "CMS-driven Astro + Strapi site",
            link: "https://www.masjidassunnahsd.com/",
            image: massdImage,
        }
    ]
}
