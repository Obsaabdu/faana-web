import {
  Building2,
  Scale,
  Heart,
  Home,
  Lightbulb,
  Briefcase,
  ArrowRight,
  Award,
  Shield,
  Users,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@/i18n/routing";

export default function PracticeAreasPage() {
  const t = useTranslations("PracticeAreasPage");

  const practiceAreas = [
    {
      icon: Building2,
      title: t("corporateLawTitle"),
      description: t("corporateLawDesc"),
      href: "/practice-areas/corporate-law",
      stats: "300+ Companies",
    },
    {
      icon: Scale,
      title: t("litigationTitle"),
      description: t("litigationDesc"),
      href: "/practice-areas/litigation",
      stats: "500+ Cases",
    },
    {
      icon: Lightbulb,
      title: t("intellectualPropertyTitle"),
      description: t("intellectualPropertyDesc"),
      href: "/practice-areas/intellectual-property",
      stats: "500+ Patents",
    },
    {
      icon: Briefcase,
      title: t("employmentLawTitle"),
      description: t("employmentLawDesc"),
      href: "/practice-areas/employment-law",
      stats: "800+ Cases",
    },
    {
      icon: Home,
      title: t("realEstateTitle"),
      description: t("realEstateDesc"),
      href: "/practice-areas/real-estate",
      stats: "1200+ Properties",
    },
    {
      icon: Heart,
      title: t("familyLawTitle"),
      description: t("familyLawDesc"),
      href: "/practice-areas/family-law",
      stats: "400+ Families",
    },
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-background">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 animate-fade-in">
                Legal Excellence
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent animate-slide-up">
                {t("title")}
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up delay-200">
                {t("subtitle")}
              </p>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
              {[
                {
                  icon: Scale,
                  label: "Cases Won",
                  value: "95%",
                },
                {
                  icon: Award,
                  label: "Years Experience",
                  value: "25+",
                },
                {
                  icon: Shield,
                  label: "Clients Served",
                  value: "2000+",
                },
                {
                  icon: Users,
                  label: "Practice Areas",
                  value: "6+",
                },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center animate-fade-in-up"
                  style={{ animationDelay: `${index * 200}ms` }}>
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Practice Areas Grid */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
                Our Practice Areas
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {practiceAreas.map((area, index) => {
                const Icon = area.icon;
                return (
                  <Link
                    key={area.href}
                    href={area.href}
                    className="group block">
                    <Card
                      className="h-full relative overflow-hidden border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up"
                      style={{ animationDelay: `${index * 100}ms` }}>
                      <CardContent className="p-8">
                        <div className="flex items-start justify-between mb-6">
                          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <Icon className="h-8 w-8 text-white" />
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-medium text-primary mb-1">
                              {area.stats}
                            </div>
                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                              <Icon className="h-4 w-4 text-primary" />
                            </div>
                          </div>
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                          {area.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                          {area.description}
                        </p>
                        <div className="inline-flex items-center text-primary font-medium group-hover:translate-x-1 transition-transform duration-300">
                          {t("learnMore")}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </div>
                      </CardContent>
                      <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80 opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-3xl p-12 shadow-2xl border border-primary/10 animate-fade-in-up">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  {t("ctaTitle")}
                </h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                  {t("ctaDesc")}
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 rounded-lg">
                  {t("getInTouch")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
