import { notFound, redirect } from "next/navigation";

interface PracticeAreaPageProps {
  params: {
    locale: string;
    area: string;
  };
}

// Map of area slugs to their full paths
const areaRedirects: Record<string, string> = {
  "corporate-law": "/practice-areas/corporate-law",
  litigation: "/practice-areas/litigation",
  "intellectual-property": "/practice-areas/intellectual-property",
  "employment-law": "/practice-areas/employment-law",
  "real-estate": "/practice-areas/real-estate",
  "family-law": "/practice-areas/family-law",
};

export default function PracticeAreaPage({ params }: PracticeAreaPageProps) {
  const { area } = params;

  // Check if the area exists in our redirects
  if (area in areaRedirects) {
    redirect(areaRedirects[area]);
  }

  // If area doesn't exist, show 404
  notFound();
}
