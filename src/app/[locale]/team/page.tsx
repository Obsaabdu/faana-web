"use client";

import { Linkedin, Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { TeamMemberModal } from "@/components/team-member-modal";

interface Education {
  institution: string;
  degree: string;
  year: string;
}

interface Publication {
  title: string;
  journal: string;
  year: string;
  url: string;
}

interface TeamMember {
  name: string;
  position: string;
  bio: string;
  email: string;
  linkedin: string;
  expertise: string[];
  education: Education[];
  publications: Publication[];
  languages: string[];
  barAdmissions: string[];
}

export default function TeamPage() {
  const t = useTranslations("TeamPage");
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMemberClick = (member: TeamMember) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };

  const teamMembers: TeamMember[] = [
    {
      name: t("member1Name"),
      position: t("member1Position"),
      bio: t("member1Bio"),
      email: "partner1@faana.com",
      linkedin: "https://linkedin.com/in/sarah-johnson",
      expertise: [
        "Corporate Law",
        "Mergers & Acquisitions",
        "Securities Law",
        "Corporate Governance",
      ],
      education: [
        {
          institution: "Harvard Law School",
          degree: "Juris Doctor",
          year: "2003",
        },
        {
          institution: "Stanford University",
          degree: "Bachelor of Arts in Economics",
          year: "2000",
        },
      ],
      publications: [
        {
          title: "Navigating Complex M&A Transactions in the Digital Age",
          journal: "Corporate Law Review",
          year: "2023",
          url: "https://example.com/publication1",
        },
        {
          title: "Best Practices in Corporate Governance",
          journal: "Business Law Journal",
          year: "2022",
          url: "https://example.com/publication2",
        },
      ],
      languages: ["English", "Amharic"],
      barAdmissions: ["New York", "California", "Federal Courts"],
    },
    {
      name: t("member2Name"),
      position: t("member2Position"),
      bio: t("member2Bio"),
      email: "partner2@faana.com",
      linkedin: "https://linkedin.com/in/michael-chen",
      expertise: [
        "Commercial Litigation",
        "Civil Litigation",
        "Arbitration",
        "Appellate Practice",
      ],
      education: [
        {
          institution: "Yale Law School",
          degree: "Juris Doctor",
          year: "2002",
        },
        {
          institution: "University of California, Berkeley",
          degree: "Bachelor of Science in Political Science",
          year: "1999",
        },
      ],
      publications: [
        {
          title: "Effective Strategies in Commercial Dispute Resolution",
          journal: "Litigation Quarterly",
          year: "2023",
          url: "https://example.com/publication3",
        },
        {
          title: "The Future of Alternative Dispute Resolution",
          journal: "Legal Practice Today",
          year: "2022",
          url: "https://example.com/publication4",
        },
      ],
      languages: ["English", "Mandarin", "Amharic"],
      barAdmissions: ["New York", "Federal Courts"],
    },
    {
      name: t("member3Name"),
      position: t("member3Position"),
      bio: t("member3Bio"),
      email: "partner3@faana.com",
      linkedin: "https://linkedin.com/in/aisha-rahman",
      expertise: [
        "Intellectual Property",
        "Patent Law",
        "Trademark Law",
        "Technology Law",
      ],
      education: [
        {
          institution: "Columbia Law School",
          degree: "Juris Doctor",
          year: "2004",
        },
        {
          institution: "Massachusetts Institute of Technology",
          degree: "Bachelor of Science in Computer Science",
          year: "2001",
        },
      ],
      publications: [
        {
          title: "AI and Intellectual Property: Emerging Legal Challenges",
          journal: "IP Law Review",
          year: "2023",
          url: "https://example.com/publication5",
        },
        {
          title: "Patent Protection in the Digital Economy",
          journal: "Technology Law Journal",
          year: "2022",
          url: "https://example.com/publication6",
        },
      ],
      languages: ["English", "Arabic", "Amharic"],
      barAdmissions: ["New York", "USPTO", "Federal Courts"],
    },
    {
      name: t("member4Name"),
      position: t("member4Position"),
      bio: t("member4Bio"),
      email: "associate1@faana.com",
      linkedin: "https://linkedin.com/in/david-williams",
      expertise: [
        "Employment Law",
        "Labor Relations",
        "Workplace Compliance",
        "Employment Litigation",
      ],
      education: [
        {
          institution: "Georgetown Law School",
          degree: "Juris Doctor",
          year: "2010",
        },
        {
          institution: "University of Virginia",
          degree: "Bachelor of Arts in History",
          year: "2007",
        },
      ],
      publications: [
        {
          title: "Remote Work and Employment Law Compliance",
          journal: "Employment Law Today",
          year: "2023",
          url: "https://example.com/publication7",
        },
      ],
      languages: ["English", "Spanish", "Amharic"],
      barAdmissions: ["New York", "Federal Courts"],
    },
    {
      name: t("member5Name"),
      position: t("member5Position"),
      bio: t("member5Bio"),
      email: "associate2@faana.com",
      linkedin: "https://linkedin.com/in/maria-garcia",
      expertise: [
        "Real Estate Law",
        "Commercial Real Estate",
        "Property Development",
        "Real Estate Finance",
      ],
      education: [
        {
          institution: "Fordham Law School",
          degree: "Juris Doctor",
          year: "2012",
        },
        {
          institution: "New York University",
          degree: "Bachelor of Science in Business Administration",
          year: "2009",
        },
      ],
      publications: [
        {
          title: "Sustainable Development and Real Estate Law",
          journal: "Real Estate Law Journal",
          year: "2023",
          url: "https://example.com/publication8",
        },
      ],
      languages: ["English", "Spanish", "Amharic"],
      barAdmissions: ["New York", "Federal Courts"],
    },
    {
      name: t("member6Name"),
      position: t("member6Position"),
      bio: t("member6Bio"),
      email: "associate3@faana.com",
      linkedin: "https://linkedin.com/in/james-thompson",
      expertise: [
        "Family Law",
        "Divorce Law",
        "Child Custody",
        "Estate Planning",
      ],
      education: [
        {
          institution: "New York University School of Law",
          degree: "Juris Doctor",
          year: "2015",
        },
        {
          institution: "Columbia University",
          degree: "Bachelor of Arts in Psychology",
          year: "2012",
        },
      ],
      publications: [
        {
          title: "Mediation in Family Law: A Collaborative Approach",
          journal: "Family Law Review",
          year: "2023",
          url: "https://example.com/publication9",
        },
      ],
      languages: ["English", "Amharic"],
      barAdmissions: ["New York", "Federal Courts"],
    },
  ];

  // Generate JSON-LD structured data for each team member
  const generatePersonSchema = (member: TeamMember) => ({
    "@context": "https://schema.org",
    "@type": "Person",
    name: member.name,
    jobTitle: member.position,
    description: member.bio,
    email: member.email,
    url: member.linkedin,
    knowsAbout: member.expertise,
    alumniOf: member.education.map((edu: Education) => ({
      "@type": "EducationalOrganization",
      name: edu.institution,
    })),
    hasCredential: member.education.map((edu: Education) => ({
      "@type": "EducationalOccupationalCredential",
      name: edu.degree,
      educationalLevel: edu.degree,
      recognizedBy: {
        "@type": "EducationalOrganization",
        name: edu.institution,
      },
    })),
    sameAs: [member.linkedin],
    worksFor: {
      "@type": "Organization",
      name: "FAANA Advocacy",
    },
    knowsLanguage: member.languages,
    hasOccupation: {
      "@type": "Occupation",
      name: member.position,
      occupationLocation: {
        "@type": "Place",
        name: "Addis Ababa, Ethiopia",
      },
    },
  });

  const structuredData = teamMembers.map(generatePersonSchema);

  return (
    <>
      <Navigation />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-3xl">
              {t("title")}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              {t("subtitle")}
            </p>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">
              {t("partnersTitle")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.slice(0, 3).map((member) => (
                <button
                  key={member.email}
                  type="button"
                  onClick={() => handleMemberClick(member)}
                  className="w-full p-6 border rounded-lg hover:shadow-lg transition-all cursor-pointer hover:scale-105 text-left">
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                    <span className="text-3xl font-bold text-primary">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2">
                    {member.name}
                  </h3>
                  <p className="text-sm text-primary text-center mb-4">
                    {member.position}
                  </p>
                  <p className="text-muted-foreground text-center mb-6 line-clamp-3">
                    {member.bio}
                  </p>

                  {/* Brief expertise preview */}
                  <div className="mb-4">
                    <div className="flex flex-wrap justify-center gap-1">
                      {member.expertise.slice(0, 2).map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                          {skill}
                        </span>
                      ))}
                      {member.expertise.length > 2 && (
                        <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                          +{member.expertise.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex justify-center gap-4">
                    <a
                      href={`mailto:${member.email}`}
                      onClick={(e) => e.stopPropagation()}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`Email ${member.name}`}>
                      <Mail className="h-5 w-5" />
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`LinkedIn profile of ${member.name}`}>
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>

                  <div className="text-center mt-4">
                    <span className="text-xs text-muted-foreground">
                      Click for full profile
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Associates Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">
              {t("associatesTitle")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.slice(3, 6).map((member) => (
                <button
                  key={member.email}
                  type="button"
                  onClick={() => handleMemberClick(member)}
                  className="w-full p-6 bg-background border rounded-lg hover:shadow-lg transition-all cursor-pointer hover:scale-105 text-left">
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                    <span className="text-3xl font-bold text-primary">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2">
                    {member.name}
                  </h3>
                  <p className="text-sm text-primary text-center mb-4">
                    {member.position}
                  </p>
                  <p className="text-muted-foreground text-center mb-6 line-clamp-3">
                    {member.bio}
                  </p>

                  {/* Brief expertise preview */}
                  <div className="mb-4">
                    <div className="flex flex-wrap justify-center gap-1">
                      {member.expertise.slice(0, 2).map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                          {skill}
                        </span>
                      ))}
                      {member.expertise.length > 2 && (
                        <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                          +{member.expertise.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex justify-center gap-4">
                    <a
                      href={`mailto:${member.email}`}
                      onClick={(e) => e.stopPropagation()}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`Email ${member.name}`}>
                      <Mail className="h-5 w-5" />
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`LinkedIn profile of ${member.name}`}>
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>

                  <div className="text-center mt-4">
                    <span className="text-xs text-muted-foreground">
                      Click for full profile
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Team Member Modal */}
      <TeamMemberModal
        member={selectedMember}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}
