import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export interface MarkdownFrontmatter {
  title: string;
  role?: string;
  updated: string;
}

export interface MarkdownContent {
  frontmatter: MarkdownFrontmatter;
  content: string;
}

export function getMarkdownContent(filename: string): MarkdownContent {
  try {
    const filePath = path.join(contentDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      frontmatter: data as MarkdownFrontmatter,
      content,
    };
  } catch (error) {
    console.error(`Error loading ${filename}:`, error);
    // Return fallback content
    return {
      frontmatter: {
        title: 'Content Not Found',
        updated: new Date().toISOString().split('T')[0],
      },
      content: `# Content Not Available\n\nThe requested content file (${filename}) could not be loaded. Please check that the file exists in the content directory.`,
    };
  }
}

export function getAllContent() {
  return {
    cv: getMarkdownContent('cv.md'),
    coverLetter: getMarkdownContent('cover-letter.md'),
    executiveSummary: getMarkdownContent('executive-summary.md'),
  };
}
