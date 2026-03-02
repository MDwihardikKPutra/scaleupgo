import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://scaleupgo.solutions";

    // In a real app, you might fetch these from a CMS or database
    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: `${baseUrl}/market`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
        // Add other static routes if they exist
        // {
        //   url: `${baseUrl}/about`,
        //   lastModified: new Date(),
        //   changeFrequency: 'monthly',
        //   priority: 0.8,
        // },
    ];
}
