"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  FileText,
  Calendar,
  User,
  ArrowRight,
  Search,
  Filter,
  BookOpen,
  Scale,
  Gavel,
} from "lucide-react";
import { motion } from "framer-motion";
import { BackgroundShapes } from "@/components/ui/background-shapes";

export default function LegalInsightsPage() {
  const insights = [
    {
      id: "corporate-governance-2024",
      title: "Corporate Governance Trends in 2024",
      excerpt:
        "Explore the latest developments in corporate governance, including new regulatory requirements and best practices for board effectiveness.",
      author: "Sarah Johnson",
      date: "2024-01-15",
      category: "Corporate Law",
      readTime: "8 min read",
      icon: Scale,
    },
    {
      id: "data-privacy-compliance",
      title: "Navigating Data Privacy Compliance Across Jurisdictions",
      excerpt:
        "A comprehensive guide to data privacy laws and compliance requirements for multinational corporations operating in different regions.",
      author: "Michael Chen",
      date: "2024-01-12",
      category: "Privacy Law",
      readTime: "12 min read",
      icon: FileText,
    },
    {
      id: "employment-law-updates",
      title: "Recent Employment Law Updates and Their Impact",
      excerpt:
        "Analysis of recent employment law changes and their implications for employers, including remote work policies and discrimination protections.",
      author: "Aisha Rahman",
      date: "2024-01-10",
      category: "Employment Law",
      readTime: "6 min read",
      icon: Gavel,
    },
    {
      id: "intellectual-property-strategy",
      title: "Strategic Intellectual Property Protection for Startups",
      excerpt:
        "Essential IP protection strategies for startups and emerging companies, covering patents, trademarks, and trade secrets.",
      author: "David Williams",
      date: "2024-01-08",
      category: "IP Law",
      readTime: "10 min read",
      icon: BookOpen,
    },
    {
      id: "contract-negotiation-tips",
      title: "Advanced Contract Negotiation Techniques",
      excerpt:
        "Professional tips and strategies for negotiating complex commercial contracts and avoiding common pitfalls.",
      author: "Maria Garcia",
      date: "2024-01-05",
      category: "Commercial Law",
      readTime: "9 min read",
      icon: FileText,
    },
    {
      id: "litigation-risk-management",
      title: "Litigation Risk Management for Businesses",
      excerpt:
        "Proactive approaches to identifying and mitigating litigation risks in business operations and transactions.",
      author: "Sarah Johnson",
      date: "2024-01-03",
      category: "Litigation",
      readTime: "11 min read",
      icon: Scale,
    },
  ];

  const categories = [
    "All Categories",
    "Corporate Law",
    "Privacy Law",
    "Employment Law",
    "IP Law",
    "Commercial Law",
    "Litigation",
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
                  <FileText className="w-4 h-4 text-yellow-500" />
                  Legal Intelligence
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Legal Insights
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                Expert analysis, legal updates, and strategic insights from our
                team of experienced attorneys.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 bg-muted/30 relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search legal insights..."
                    className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4 text-muted-foreground" />
                  <select className="px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20">
                    {categories.map((category) => (
                      <option
                        key={category}
                        value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Insights */}
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
                Latest Legal Insights
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Stay informed with our latest analysis and commentary on legal
                developments.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {insights.map((insight, index) => (
                <motion.div
                  key={insight.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="group">
                  <Card className="h-full bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-xl">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-4">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="flex-shrink-0">
                          <insight.icon className="h-8 w-8 text-yellow-500 group-hover:text-yellow-400 transition-colors" />
                        </motion.div>
                        <Badge
                          variant="secondary"
                          className="text-xs">
                          {insight.category}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                        {insight.title}
                      </CardTitle>
                      <CardDescription className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                        {insight.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            <span>{insight.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>
                              {new Date(insight.date).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                        <span>{insight.readTime}</span>
                      </div>
                      <Button
                        variant="outline"
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center mt-12">
              <Button
                size="lg"
                variant="outline">
                Load More Insights
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
          <BackgroundShapes variant="justice" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Never Miss an Update
              </h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
                Subscribe to our newsletter and get the latest legal insights
                delivered directly to your inbox.
              </p>
              <Button
                size="lg"
                variant="secondary"
                className="group">
                Subscribe to Newsletter
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
