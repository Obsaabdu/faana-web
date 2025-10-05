"use client";

import { Linkedin, Mail, Sparkles, Users, Award } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRouter, useParams } from "next/navigation";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { motion } from "framer-motion";
import { BackgroundShapes } from "@/components/ui/background-shapes";

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

export default function TeamPage() {
  const t = useTranslations("TeamPage");
  const router = useRouter();
  const params = useParams();
  const locale = params.locale;

  const handleMemberClick = (member: TeamMember) => {
    router.push(`/${locale}/team/${member.slug}`);
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
      slug: "sarah-johnson",
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
      slug: "michael-chen",
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
      slug: "aisha-rahman",
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
      slug: "david-williams",
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
      slug: "maria-garcia",
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
      slug: "james-thompson",
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
        <section className="relative bg-gradient-to-br from-primary/10 via-background to-background py-20 md:py-32 overflow-hidden">
          <BackgroundShapes variant="team" />
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <motion.div
              className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [360, 180, 0],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-6">
                  <Sparkles className="w-4 h-4 text-yellow-500" />
                  Legal Excellence
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                {t("title")}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                {t("subtitle")}
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-20 relative overflow-hidden">
          <BackgroundShapes variant="corporate" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Award className="h-8 w-8 text-yellow-500" />
                <h2 className="text-3xl md:text-4xl font-bold">
                  {t("partnersTitle")}
                </h2>
              </div>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.slice(0, 3).map((member, index) => (
                <motion.div
                  key={member.email}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="group">
                  <button
                    type="button"
                    onClick={() => handleMemberClick(member)}
                    className="w-full p-8 bg-gradient-to-br from-background via-background to-primary/5 border border-primary/20 rounded-2xl hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 cursor-pointer text-left group-hover:border-primary/40 group-hover:bg-gradient-to-br group-hover:from-primary/5 group-hover:via-background group-hover:to-primary/10">
                    {/* Animated avatar */}
                    <div className="relative mb-6">
                      <div className="w-28 h-28 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-500">
                        <span className="text-4xl font-bold text-primary group-hover:text-primary/80">
                          {member.name.charAt(0)}
                        </span>
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary/20 rounded-full animate-pulse group-hover:bg-primary/30"></div>
                    </div>

                    <h3 className="text-xl font-bold text-center mb-3 group-hover:text-primary transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-sm text-primary text-center mb-4 font-medium">
                      {member.position}
                    </p>
                    <p className="text-muted-foreground text-center mb-6 line-clamp-3 leading-relaxed">
                      {member.bio}
                    </p>

                    {/* Enhanced expertise preview */}
                    <div className="mb-6">
                      <div className="flex flex-wrap justify-center gap-2">
                        {member.expertise.slice(0, 2).map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-gradient-to-r from-primary/10 to-primary/5 text-primary text-xs rounded-full font-medium group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-300">
                            {skill}
                          </span>
                        ))}
                        {member.expertise.length > 2 && (
                          <span className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full font-medium">
                            +{member.expertise.length - 2} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Enhanced contact buttons */}
                    <div className="flex justify-center gap-4 mb-4">
                      <a
                        href={`mailto:${member.email}`}
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                        aria-label={`Email ${member.name}`}>
                        <Mail className="h-5 w-5 text-yellow-500" />
                      </a>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                        aria-label={`LinkedIn profile of ${member.name}`}>
                        <Linkedin className="h-5 w-5 text-yellow-500" />
                      </a>
                    </div>

                    <div className="text-center">
                      <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors duration-300 font-medium">
                        Click for full profile →
                      </span>
                    </div>
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Associates Section */}
        <section className="py-24 bg-gradient-to-br from-muted/30 via-background to-primary/5 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Users className="h-8 w-8 text-primary" />
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  {t("associatesTitle")}
                </h2>
              </div>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.slice(3, 6).map((member, index) => (
                <motion.div
                  key={member.email}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="group">
                  <button
                    type="button"
                    onClick={() => handleMemberClick(member)}
                    className="w-full p-8 bg-gradient-to-br from-background via-background to-primary/5 border border-primary/20 rounded-2xl hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 cursor-pointer text-left group-hover:border-primary/40 group-hover:bg-gradient-to-br group-hover:from-primary/5 group-hover:via-background group-hover:to-primary/10">
                    {/* Animated avatar */}
                    <div className="relative mb-6">
                      <div className="w-28 h-28 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-500">
                        <span className="text-4xl font-bold text-primary group-hover:text-primary/80">
                          {member.name.charAt(0)}
                        </span>
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary/20 rounded-full animate-pulse group-hover:bg-primary/30"></div>
                    </div>

                    <h3 className="text-xl font-bold text-center mb-3 group-hover:text-primary transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-sm text-primary text-center mb-4 font-medium">
                      {member.position}
                    </p>
                    <p className="text-muted-foreground text-center mb-6 line-clamp-3 leading-relaxed">
                      {member.bio}
                    </p>

                    {/* Enhanced expertise preview */}
                    <div className="mb-6">
                      <div className="flex flex-wrap justify-center gap-2">
                        {member.expertise.slice(0, 2).map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-gradient-to-r from-primary/10 to-primary/5 text-primary text-xs rounded-full font-medium group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-300">
                            {skill}
                          </span>
                        ))}
                        {member.expertise.length > 2 && (
                          <span className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full font-medium">
                            +{member.expertise.length - 2} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Enhanced contact buttons */}
                    <div className="flex justify-center gap-4 mb-4">
                      <a
                        href={`mailto:${member.email}`}
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                        aria-label={`Email ${member.name}`}>
                        <Mail className="h-5 w-5 text-yellow-500" />
                      </a>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                        aria-label={`LinkedIn profile of ${member.name}`}>
                        <Linkedin className="h-5 w-5 text-yellow-500" />
                      </a>
                    </div>

                    <div className="text-center">
                      <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors duration-300 font-medium">
                        Click for full profile →
                      </span>
                    </div>
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
