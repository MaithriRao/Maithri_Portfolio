export interface Publication {
  title: string;
  authors: string;
  year: string;
  journal: string;
  slug: string;
  link?: string;
}

export const publications: Publication[] = [
  {
    title: "Sign Language Video Segmentation using Temporal Boundary Identification",
    authors: "Maithri Rao, John Doe",
    year: "2024",
    journal: "IEEE International Conference on Computer Vision",
    slug: "sign-language-video-segmentation",
    link: "https://example.com"
  }
];
