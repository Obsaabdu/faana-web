"use client";

import { motion } from "framer-motion";
import {
  CheckCircle,
  Clock,
  Mail,
  Send,
  TrendingUp,
  Users,
} from "lucide-react";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { BackgroundShapes } from "@/components/ui/background-shapes";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { newsArticles } from "@/data/newsArticles";
import { Link } from "@/i18n/routing";

export default function NewslettersPage() {
  const newsletters = [
    {
      id: "legal-updates",
      title: "Legal Updates Weekly",
      description:
        "Stay informed with the latest legal developments, court decisions, and regulatory changes.",
      subscribers: "2,500+",
      frequency: "Weekly",
      icon: TrendingUp,
    },
    {
      id: "industry-insights",
      title: "Industry Insights",
      description:
        "Deep dives into industry trends, market analysis, and strategic legal advice.",
      subscribers: "1,800+",
      frequency: "Bi-weekly",
      icon: Users,
    },
    {
      id: "case-studies",
      title: "Case Studies & Analysis",
      description:
        "Detailed analysis of landmark cases and their implications for businesses.",
      subscribers: "1,200+",
      frequency: "Monthly",
      icon: CheckCircle,
    },
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
              className="max-w-4xl mx-auto text-center"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-6"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-6">
                  <Mail className="w-4 h-4 text-yellow-500" />
                  Stay Informed
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
              >
                Legal Newsletters
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto"
              >
                Subscribe to our expert-curated newsletters and stay ahead of
                legal developments that matter to your business.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-muted/50 relative overflow-hidden">
          <BackgroundShapes variant="team" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-12 text-center"
              >
                Why Subscribe?
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    icon: CheckCircle,
                    title: "Expert Analysis",
                    description:
                      "Written by experienced attorneys and legal professionals with deep industry knowledge.",
                  },
                  {
                    icon: TrendingUp,
                    title: "Stay Ahead",
                    description:
                      "Get early insights into legal trends and regulatory changes that could impact your business.",
                  },
                  {
                    icon: Users,
                    title: "Industry Network",
                    description:
                      "Join thousands of professionals who trust our newsletters for their legal intelligence.",
                  },
                  {
                    icon: Clock,
                    title: "Time-Saving",
                    description:
                      "Get the most important legal updates delivered directly to your inbox, saving you hours of research.",
                  },
                ].map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="flex items-start gap-4 p-6 bg-background/50 backdrop-blur-sm rounded-xl border border-border/50 hover:border-primary/20 transition-all duration-300"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0"
                    >
                      <benefit.icon className="h-6 w-6 text-yellow-500" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Available Newsletters */}
        <section className="py-20 bg-muted/50 relative overflow-hidden">
          <BackgroundShapes variant="justice" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Newsletters
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose from our carefully curated newsletters designed for
                different needs and interests.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {newsletters.map((newsletter, index) => (
                <motion.div
                  key={newsletter.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <Card className="h-full bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-xl">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="flex-shrink-0"
                        >
                          <newsletter.icon className="h-8 w-8 text-yellow-500 group-hover:text-yellow-400 transition-colors" />
                        </motion.div>
                        <div>
                          <CardTitle className="text-xl group-hover:text-primary transition-colors">
                            {newsletter.title}
                          </CardTitle>
                        </div>
                      </div>
                      <CardDescription className="text-base leading-relaxed">
                        {newsletter.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>{newsletter.subscribers}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{newsletter.frequency}</span>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                      >
                        Subscribe
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Subscription Form */}
        <section className="py-20 relative overflow-hidden">
          <BackgroundShapes variant="corporate" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto"
            >
              <Card className="border-0 shadow-xl bg-background/50 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold mb-2">
                    Subscribe to Our Newsletters
                  </CardTitle>
                  <CardDescription className="text-base">
                    Get the latest legal insights delivered directly to your
                    inbox
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email address"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="company">Company (Optional)</Label>
                      <Input
                        id="company"
                        type="text"
                        placeholder="Enter your company name"
                        className="mt-1"
                      />
                    </div>
                  </div>
                  <Button className="w-full" size="lg">
                    <Send className="w-4 h-4 mr-2 text-yellow-500" />
                    Subscribe to All Newsletters
                  </Button>
                  <p className="text-sm text-muted-foreground text-center">
                    By subscribing, you agree to receive our newsletters and can
                    unsubscribe at any time.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Recent News */}
        <section className="py-20 relative overflow-hidden">
          <BackgroundShapes variant="corporate" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Latest News
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Stay updated with our recent firm news and announcements.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {newsArticles.slice(0, 4).map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <Card className="h-full bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-xl">
                    <CardHeader>
                      <Badge variant="secondary" className="text-xs mb-2 w-fit">
                        {article.category}
                      </Badge>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                        {article.title}
                      </CardTitle>
                      <CardDescription className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                        {article.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="w-full"
                      >
                        <Link href={`/news/${article.slug}`}>Read More</Link>
                      </Button>
                    </CardContent>
                  </Card>
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
