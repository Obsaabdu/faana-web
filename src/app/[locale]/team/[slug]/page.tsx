"use client";

import {
  Linkedin,
  Mail,
  ExternalLink,
  GraduationCap,
  BookOpen,
  Award,
  Globe,
  ArrowLeft,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";
import { useRouter, useParams } from "next/navigation";
import { useEffect, useState, use } from "react";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";

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
  slug: string;
}

// Team member data - in a real app, this would come from a database or API
const getTeamMemberBySlug = (slug: string): TeamMember | null => {
  const teamMembers: TeamMember[] = [
    {
      name: "Sarah Johnson",
      position: "Senior Partner",
      bio: "Specializing in corporate law and M&A with over 20 years of experience.",
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
      slug: "sarah-johnson",
    },
    {
      name: "Michael Chen",
      position: "Managing Partner",
      bio: "Expert in litigation with a proven track record of success.",
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
      slug: "michael-chen",
    },
    {
      name: "Aisha Rahman",
      position: "Partner",
      bio: "Intellectual property specialist with technology sector experience.",
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
      slug: "aisha-rahman",
    },
    {
      name: "David Williams",
      position: "Senior Associate",
      bio: "Employment law expert helping clients navigate workplace matters.",
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
      slug: "david-williams",
    },
    {
      name: "Maria Garcia",
      position: "Associate",
      bio: "Real estate attorney with focus on commercial transactions.",
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
      slug: "maria-garcia",
    },
    {
      name: "James Thompson",
      position: "Associate",
      bio: "Family law practitioner dedicated to compassionate client service.",
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
      slug: "james-thompson",
    },
  ];

  return teamMembers.find((member) => member.slug === slug) || null;
};

interface ProfilePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function ProfilePage({ params }: ProfilePageProps) {
  const router = useRouter();
  const urlParams = useParams();
  const locale = urlParams.locale;
  const resolvedParams = use(params);
  const member = getTeamMemberBySlug(resolvedParams.slug);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (!member) {
    return (
      <>
        <Navigation />
        <main className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Team Member Not Found</h1>
            <p className="text-muted-foreground mb-6">
              The requested team member profile could not be found.
            </p>
            <Button
              onClick={() => router.push(`/${locale}/team`)}
              variant="outline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Team
            </Button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  // Generate JSON-LD structured data
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

  const structuredData = generatePersonSchema(member);

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
        {/* Header Section */}
        <section className="relative py-24 bg-gradient-to-br from-primary/20 via-background to-primary/5 overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 animate-pulse"></div>
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full animate-bounce delay-1000"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-primary/15 rounded-full animate-bounce delay-2000"></div>
          <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-primary/20 rounded-full animate-bounce delay-3000"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div
              className={`transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}>
              <Button
                onClick={() => router.back()}
                variant="ghost"
                className="mb-8 group hover:bg-primary/10 transition-all duration-300">
                <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
                Back to Team
              </Button>

              <div className="flex flex-col md:flex-row gap-12 items-start">
                {/* Enhanced Avatar */}
                <div className="relative">
                  <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mx-auto md:mx-0 group hover:scale-105 transition-transform duration-500">
                    <span className="text-8xl font-bold text-primary">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary/20 rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-primary/15 rounded-full animate-pulse delay-1000"></div>
                </div>

                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
                    <Sparkles className="h-6 w-6 text-primary animate-spin" />
                    <span className="text-primary font-semibold">
                      Legal Professional
                    </span>
                  </div>

                  <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                    {member.name}
                  </h1>
                  <h2 className="text-2xl text-primary mb-6 font-medium">
                    {member.position}
                  </h2>
                  <p className="text-xl text-muted-foreground mb-8 max-w-3xl leading-relaxed">
                    {member.bio}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <a
                      href={`mailto:${member.email}`}
                      className="group flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-xl hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-105">
                      <Mail className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                      Email
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary text-primary rounded-xl hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25">
                      <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-transparent"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative">
            <div className="space-y-16">
              {/* Expertise Section */}
              <div
                className={`transition-all duration-1000 delay-300 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 rounded-full bg-gradient-to-r from-primary/20 to-primary/10">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    Expertise
                  </h3>
                </div>
                <div className="flex flex-wrap gap-4">
                  {member.expertise.map((skill, index) => (
                    <span
                      key={skill}
                      className="group px-6 py-3 bg-gradient-to-r from-primary/10 to-primary/5 text-primary text-sm rounded-full font-medium border border-primary/20 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:scale-105"
                      style={{ animationDelay: `${index * 100}ms` }}>
                      <Star className="inline h-4 w-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Education Section */}
              <div
                className={`transition-all duration-1000 delay-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 rounded-full bg-gradient-to-r from-primary/20 to-primary/10">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    Education
                  </h3>
                </div>
                <div className="space-y-6">
                  {member.education.map((edu, index) => (
                    <div
                      key={`${edu.institution}-${edu.degree}`}
                      className="group relative bg-gradient-to-r from-background via-primary/5 to-background border border-primary/20 rounded-2xl p-6 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-500 hover:scale-105"
                      style={{ animationDelay: `${index * 200}ms` }}>
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-primary/50 rounded-l-2xl"></div>
                      <div className="pl-4">
                        <div className="font-bold text-xl text-primary mb-2">
                          {edu.degree}
                        </div>
                        <div className="text-muted-foreground text-lg mb-1">
                          {edu.institution}
                        </div>
                        <div className="text-sm text-muted-foreground font-medium">
                          {edu.year}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Publications Section */}
              {member.publications.length > 0 && (
                <div
                  className={`transition-all duration-1000 delay-700 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 rounded-full bg-gradient-to-r from-primary/20 to-primary/10">
                      <BookOpen className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                      Publications
                    </h3>
                  </div>
                  <div className="space-y-6">
                    {member.publications.map((pub, index) => (
                      <div
                        key={pub.title}
                        className="group bg-gradient-to-r from-background via-primary/5 to-background border border-primary/20 rounded-2xl p-8 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 hover:scale-105"
                        style={{ animationDelay: `${index * 200}ms` }}>
                        <a
                          href={pub.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link text-primary hover:text-primary/80 font-bold text-xl flex items-center gap-3 mb-3 transition-colors duration-300">
                          <Zap className="h-5 w-5 group-hover/link:rotate-12 transition-transform duration-300" />
                          {pub.title}
                          <ExternalLink className="h-5 w-5 group-hover/link:scale-110 transition-transform duration-300" />
                        </a>
                        <div className="text-muted-foreground text-lg font-medium">
                          {pub.journal}, {pub.year}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Languages Section */}
              <div
                className={`transition-all duration-1000 delay-900 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 rounded-full bg-gradient-to-r from-primary/20 to-primary/10">
                    <Globe className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    Languages
                  </h3>
                </div>
                <div className="flex flex-wrap gap-4">
                  {member.languages.map((language, index) => (
                    <span
                      key={language}
                      className="group px-6 py-3 bg-gradient-to-r from-muted to-muted/80 text-muted-foreground text-sm rounded-full font-medium border border-muted-foreground/20 hover:border-primary/40 hover:text-primary hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:scale-105"
                      style={{ animationDelay: `${index * 100}ms` }}>
                      <Globe className="inline h-4 w-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                      {language}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bar Admissions Section */}
              <div
                className={`transition-all duration-1000 delay-1100 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 rounded-full bg-gradient-to-r from-primary/20 to-primary/10">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    Bar Admissions
                  </h3>
                </div>
                <div className="flex flex-wrap gap-4">
                  {member.barAdmissions.map((admission, index) => (
                    <span
                      key={admission}
                      className="group px-6 py-3 bg-gradient-to-r from-primary/5 to-primary/10 text-primary text-sm rounded-full border border-primary/20 font-medium hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:scale-105"
                      style={{ animationDelay: `${index * 100}ms` }}>
                      <Award className="inline h-4 w-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                      {admission}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
