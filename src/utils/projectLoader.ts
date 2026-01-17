export const loadProjectContent = async (slug: string): Promise<string> => {
  try {
    const response = await fetch(`/project-posts/${slug}.md`);
    if (!response.ok) {
      throw new Error(`Failed to load project: ${slug}`);
    }

    const content = await response.text();

    // Remove frontmatter (--- ... ---)
    const contentWithoutFrontmatter = content.replace(/^---[\s\S]*?---\n/, '');

    return contentWithoutFrontmatter;
  } catch (error) {
    console.error(`Error loading project ${slug}:`, error);
    return `# Error Loading Project\n\nSorry, we couldn't load the project "${slug}".`;
  }
};
