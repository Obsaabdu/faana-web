"use client";

import { useEffect } from "react";

interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  image: string;
  email: string;
  phone: string;
  linkedin: string;
  specialties: string[];
}

interface TeamSchemaProps {
  members: TeamMember[];
}

export function TeamSchema({ members }: TeamSchemaProps) {
  useEffect(() => {
    // Add structured data to the page head
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": members.map((member) => ({
        "@type": "Person",
        name: member.name,
        jobTitle: member.position,
        description: member.bio,
        image: member.image,
        email: member.email,
        telephone: member.phone,
        sameAs: [member.linkedin],
        worksFor: {
          "@type": "Organization",
          name: "FAANA Advocacy",
          url: "https://faana.com",
        },
        knowsAbout: member.specialties,
      })),
    });

    document.head.appendChild(script);

    return () => {
      // Cleanup on unmount
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [members]);

  return null;
}
