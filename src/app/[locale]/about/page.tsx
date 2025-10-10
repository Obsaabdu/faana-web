"use client";

import { motion } from "framer-motion";
import {
  Award,
  Eye,
  Linkedin,
  Mail,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { BackgroundShapes } from "@/components/ui/background-shapes";
import { Link } from "@/i18n/routing";

export default function AboutPage() {
  const t = useTranslations("AboutPage");

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-background to-background py-20 md:py-32 overflow-hidden">
          <BackgroundShapes variant="legal" />
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
              className="max-w-4xl mx-auto text-center"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-6"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-6">
                  <Sparkles className="w-4 h-4" />
                  Building Trust Through Excellence
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
              >
                {t("title")}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto"
              >
                {t("subtitle")}
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 relative overflow-hidden">
          <BackgroundShapes variant="corporate" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-6"
              >
                {t("ourStoryTitle")}
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="prose prose-lg dark:prose-invert max-w-none"
              >
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {t("ourStoryP1")}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {t("ourStoryP2")}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t("ourStoryP3")}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-20 bg-muted/50 relative overflow-hidden">
          <BackgroundShapes variant="justice" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="p-8 bg-background rounded-lg shadow-sm hover:shadow-lg transition-all"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4"
                >
                  <Target className="h-6 w-6 text-primary" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4">{t("missionTitle")}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t("missionDesc")}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="p-8 bg-background rounded-lg shadow-sm hover:shadow-lg transition-all"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4"
                >
                  <Eye className="h-6 w-6 text-primary" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4">{t("visionTitle")}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t("visionDesc")}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="p-8 bg-background rounded-lg shadow-sm hover:shadow-lg transition-all"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4"
                >
                  <Award className="h-6 w-6 text-primary" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4">{t("valuesTitle")}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t("valuesDesc")}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values List */}
        <section className="py-20 relative overflow-hidden">
          <BackgroundShapes variant="team" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-12 text-center"
              >
                {t("coreValuesTitle")}
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    id: "integrity",
                    title: t("integrityTitle"),
                    desc: t("integrityDesc"),
                  },
                  {
                    id: "excellence",
                    title: t("excellenceTitle"),
                    desc: t("excellenceDesc"),
                  },
                  {
                    id: "innovation",
                    title: t("innovationTitle"),
                    desc: t("innovationDesc"),
                  },
                  {
                    id: "collaboration",
                    title: t("collaborationTitle"),
                    desc: t("collaborationDesc"),
                  },
                ].map((value, index) => (
                  <motion.div
                    key={value.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="p-6 border rounded-lg hover:shadow-lg transition-all bg-background/50 backdrop-blur-sm hover:border-primary/20"
                  >
                    <h3 className="text-xl font-semibold mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">{value.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Team Preview */}
        <section className="py-20 relative overflow-hidden">
          <BackgroundShapes variant="team" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <Users className="h-8 w-8 text-yellow-500" />
                <h2 className="text-3xl md:text-4xl font-bold">
                  Meet Our Team
                </h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our experienced attorneys and legal professionals are dedicated
                to providing exceptional legal services.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Johnson",
                  position: "Managing Partner",
                  expertise: [
                    "Corporate Law",
                    "M&A",
                    "Commercial Transactions",
                  ],
                  email: "sarah.johnson@faana.com",
                  linkedin: "https://linkedin.com/in/sarah-johnson",
                  initials: "SJ",
                },
                {
                  name: "Michael Chen",
                  position: "Senior Partner",
                  expertise: [
                    "Litigation",
                    "Commercial Disputes",
                    "Arbitration",
                  ],
                  email: "michael.chen@faana.com",
                  linkedin: "https://linkedin.com/in/michael-chen",
                  initials: "MC",
                },
                {
                  name: "Aisha Rahman",
                  position: "Partner",
                  expertise: [
                    "Intellectual Property",
                    "Patent Law",
                    "Technology Law",
                  ],
                  email: "aisha.rahman@faana.com",
                  linkedin: "https://linkedin.com/in/aisha-rahman",
                  initials: "AR",
                },
              ].map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <div className="p-8 bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-xl rounded-xl">
                    {/* Avatar */}
                    <div className="relative mb-6">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-500">
                        <span className="text-2xl font-bold text-primary group-hover:text-primary/80">
                          {member.initials}
                        </span>
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary/20 rounded-full animate-pulse group-hover:bg-primary/30"></div>
                    </div>

                    <h3 className="text-xl font-bold text-center mb-2 group-hover:text-primary transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-sm text-primary text-center mb-4 font-medium">
                      {member.position}
                    </p>

                    {/* Expertise tags */}
                    <div className="flex flex-wrap justify-center gap-2 mb-6">
                      {member.expertise.slice(0, 2).map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                      {member.expertise.length > 2 && (
                        <span className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full font-medium">
                          +{member.expertise.length - 2} more
                        </span>
                      )}
                    </div>

                    {/* Contact buttons */}
                    <div className="flex justify-center gap-4">
                      <button
                        type="button"
                        onClick={() => {
                          window.location.href = `mailto:${member.email}`;
                        }}
                        className="p-2 rounded-full hover:bg-primary/10 transition-all duration-300 hover:scale-110"
                        aria-label={`Email ${member.name}`}
                      >
                        <Mail className="h-5 w-5 text-yellow-500" />
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          window.open(member.linkedin, "_blank");
                        }}
                        className="p-2 rounded-full hover:bg-primary/10 transition-all duration-300 hover:scale-110"
                        aria-label={`LinkedIn profile of ${member.name}`}
                      >
                        <Linkedin className="h-5 w-5 text-yellow-500" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Link
                href="/team"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors group"
              >
                View Full Team
                <Users className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
