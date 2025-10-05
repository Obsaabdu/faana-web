"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Home, Search, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import { BackgroundShapes } from "@/components/ui/background-shapes";

export default function NotFound() {
  const t = useTranslations("NotFound");

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-background to-background py-20 md:py-32 overflow-hidden">
          <BackgroundShapes variant="justice" />

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
              {/* 404 Animation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-8">
                <div className="relative inline-block">
                  <div className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    404
                  </div>
                  <motion.div
                    className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-500 rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.div
                    className="absolute -bottom-2 -left-2 w-6 h-6 bg-primary/30 rounded-full"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-6">
                  <AlertCircle className="w-4 h-4 text-yellow-500" />
                  Page Not Found
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                {t("title")}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
                {t("message")}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
                {t("description")}
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  asChild
                  size="lg"
                  className="group">
                  <Link href="/">
                    <Home className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    {t("backToHome")}
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="group">
                  <Link href="/contact">
                    <Search className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                    Get Help
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Helpful Links Section */}
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
                Looking for Something Specific?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Here are some popular pages that might help you find what you're
                looking for.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Practice Areas",
                  description: "Explore our legal services",
                  href: "/practice-areas",
                  icon: "⚖️",
                },
                {
                  title: "About Us",
                  description: "Learn about our firm",
                  href: "/about",
                  icon: "🏢",
                },
                {
                  title: "Contact",
                  description: "Get in touch with us",
                  href: "/contact",
                  icon: "📞",
                },
                {
                  title: "Careers",
                  description: "Join our team",
                  href: "/careers",
                  icon: "💼",
                },
              ].map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="group">
                  <Link href={link.href}>
                    <div className="p-6 bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg rounded-xl text-center">
                      <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                        {link.icon}
                      </div>
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        {link.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {link.description}
                      </p>
                    </div>
                  </Link>
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
