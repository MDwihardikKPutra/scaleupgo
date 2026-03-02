export interface Project {
    title: string;
    category: string;
    descriptionKey: string;
    image: string;
    tagKeys: string[];
    href: string;
    price: string;
    imageClassName?: string;
}

export const projects: Project[] = [
    {
        title: "Oceanus Energy",
        category: "Company Profile",
        descriptionKey: "portfolio.desc1",
        image: "/oceanusenergy.png",
        tagKeys: ["portfolio.tag_corp", "portfolio.tag_anim", "portfolio.tag_multi"],
        href: "https://oceanusenergy.vercel.app/",
        price: "Rp 2.500.000",
    },
    {
        title: "Brewhouse",
        category: "Landing Page",
        descriptionKey: "portfolio.desc2",
        image: "/brewhouse.png",
        tagKeys: ["portfolio.tag_coffee", "portfolio.tag_prem", "portfolio.tag_resp"],
        href: "https://brewhouse-rho.vercel.app/",
        price: "Rp 1.500.000",
    },
    {
        title: "Luxe Fashion",
        category: "Landing Page",
        descriptionKey: "portfolio.desc3",
        image: "/Fashion.png",
        tagKeys: ["portfolio.tag_fashion", "portfolio.tag_visual", "portfolio.tag_resp"],
        href: "https://fashion-landingpage-five.vercel.app/",
        price: "Rp 1.500.000",
        imageClassName: "object-top",
    },
];

export const categories = ["All", "Landing Page", "Company Profile", "E-commerce"];
