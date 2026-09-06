import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap { return ["","/technology","/products","/solutions","/research","/about","/contact"].map(url=>({url:`https://hydroai.in${url}`,lastModified:new Date(),changeFrequency:"monthly",priority:url===""?1:.7})); }
