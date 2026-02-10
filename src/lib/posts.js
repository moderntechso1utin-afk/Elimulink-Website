import matter from "gray-matter";

// Vite import.meta.glob for markdown posts
export function getAllPosts() {
  const modules = import.meta.glob("../posts/*.md", { eager: true, as: "raw" });
  return Object.entries(modules).map(([path, raw]) => {
    const { data, content } = matter(raw);
    const slug = path.split("/").pop().replace(/\.md$/, "");
    return {
      ...data,
      content,
      slug,
    };
  }).sort((a, b) => new Date(b.date) - new Date(a.date));
}
