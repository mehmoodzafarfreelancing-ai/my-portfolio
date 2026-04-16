export type Project = Readonly<{
  id: string;
  title: string;
  description: string;
  concept: string;
  tags: readonly string[];
  /** Omit when the repository is private or not on GitHub. */
  githubUrl?: string;
  liveUrl: string;
  /** Tailwind grid column/row span utilities for the bento layout */
  gridClass: string;
}>;
