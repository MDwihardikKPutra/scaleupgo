export interface Project {
    title: string;
    category: string;
    descriptionKey: string;
    image: string;
    tagKeys: string[];
    href: string;
    price: string;
    imageClassName?: string;
    isPlaceholder?: boolean;
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
    // Dummy Placeholders
    ...Array.from({ length: 20 }).map((_, i) => ({
        title: `Premium Template ${i + 1}`,
        category: i % 3 === 0 ? "Landing Page" : i % 3 === 1 ? "Company Profile" : "E-commerce",
        descriptionKey: "portfolio.dummy_desc",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
        tagKeys: ["portfolio.tag_prem", "portfolio.tag_resp"],
        href: "#",
        price: "Rp ???",
        isPlaceholder: true,
    })),
];

export const categories = ["All", "Landing Page", "Company Profile", "E-commerce"];
