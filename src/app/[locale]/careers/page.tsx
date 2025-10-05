"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
  Briefcase,
  GraduationCap,
  TrendingUp,
  Users,
  ArrowRight,
  Sparkles,
  CheckCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import { BackgroundShapes } from "@/components/ui/background-shapes";

export default function CareersPage() {
  const t = useTranslations("CareersPage");

  const openPositions = [
    {
      title: t("position1Title"),
      location: t("position1Location"),
      type: t("position1Type"),
      description: t("position1Desc"),
    },
    {
      title: t("position2Title"),
      location: t("position2Location"),
      type: t("position2Type"),
      description: t("position2Desc"),
    },
    {
      title: t("position3Title"),
      location: t("position3Location"),
      type: t("position3Type"),
      description: t("position3Desc"),
    },
  ];

  const benefits = [
    { id: "benefit1", title: t("benefit1Title"), desc: t("benefit1Desc") },
    { id: "benefit2", title: t("benefit2Title"), desc: t("benefit2Desc") },
    { id: "benefit3", title: t("benefit3Title"), desc: t("benefit3Desc") },
    { id: "benefit4", title: t("benefit4Title"), desc: t("benefit4Desc") },
  ];

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
              className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-6">
                  <Sparkles className="w-4 h-4" />
                  Join Our Legal Team
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

        {/* Why Join Us */}
        <section className="py-20 relative overflow-hidden">
          <BackgroundShapes variant="corporate" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t("whyJoinTitle")}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t("whyJoinSubtitle")}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: TrendingUp,
                  title: t("growthTitle"),
                  desc: t("growthDesc"),
                  delay: 0,
                },
                {
                  icon: Users,
                  title: t("cultureTitle"),
                  desc: t("cultureDesc"),
                  delay: 0.1,
                },
                {
                  icon: GraduationCap,
                  title: t("learningTitle"),
                  desc: t("learningDesc"),
                  delay: 0.2,
                },
                {
                  icon: Briefcase,
                  title: t("workLifeTitle"),
                  desc: t("workLifeDesc"),
                  delay: 0.3,
                },
              ].map((feature) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: feature.delay }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center text-center p-6 bg-background/50 backdrop-blur-sm rounded-xl border border-border/50 hover:border-primary/20 transition-all duration-300 group">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 bg-muted/50 relative overflow-hidden">
          <BackgroundShapes variant="justice" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-12 text-center">
              {t("openPositionsTitle")}
            </motion.h2>

            <div className="max-w-4xl mx-auto space-y-6">
              {openPositions.map((position, index) => (
                <motion.div
                  key={position.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="p-6 bg-background border rounded-lg hover:shadow-lg transition-all hover:border-primary/20">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">
                        {position.title}
                      </h3>
                      <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                        <span>📍 {position.location}</span>
                        <span>⏰ {position.type}</span>
                      </div>
                    </div>
                    <Button asChild>
                      <Link href="/contact">{t("apply")}</Link>
                    </Button>
                  </div>
                  <p className="text-muted-foreground">
                    {position.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 relative overflow-hidden">
          <BackgroundShapes variant="team" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-12 text-center">
                {t("benefitsTitle")}
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="p-6 border rounded-lg hover:shadow-lg transition-all bg-background/50 backdrop-blur-sm hover:border-primary/20">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">
                          {benefit.title}
                        </h3>
                        <p className="text-muted-foreground">{benefit.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
          <BackgroundShapes variant="justice" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t("ctaTitle")}
              </h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
                {t("ctaDesc")}
              </p>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="group">
                <Link
                  href="/contact"
                  className="flex items-center gap-2">
                  {t("getInTouch")}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
