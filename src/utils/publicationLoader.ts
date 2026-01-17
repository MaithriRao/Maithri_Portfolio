export const loadPublicationContent = async (slug: string): Promise<string> => {
  try {
    const response = await fetch(`/publication-posts/${slug}.md`);
    if (!response.ok) throw new Error("Failed to load publication");

    const content = await response.text();
    return content.replace(/^---[\s\S]*?---\n/, "");
  } catch {
    return "# Error loading publication";
  }
};
