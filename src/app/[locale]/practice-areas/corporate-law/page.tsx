import {
  ArrowRight,
  Award,
  BarChart3,
  Building2,
  CheckCircle,
  ChevronRight,
  Clock,
  Construction,
  DollarSign,
  FileText,
  Scale,
  Users,
} from "lucide-react";
import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@/i18n/routing";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Corporate Law Services | Business Attorneys | FAANA Advocacy",
    description:
      "Expert corporate law services including M&A, corporate governance, commercial contracts, and regulatory compliance. Trusted advisors for businesses of all sizes.",
    keywords: [
      "corporate lawyer",
      "business attorney",
      "mergers and acquisitions",
      "corporate governance",
      "commercial contracts",
      "securities law",
      "regulatory compliance",
    ],
    openGraph: {
      title: "Corporate Law Services | FAANA Advocacy",
      description:
        "Comprehensive corporate legal support for businesses navigating complex transactions and strategic decisions.",
      type: "website",
    },
  };
}

export default function CorporateLawPage() {
  const t = useTranslations("CorporateLawPage");

  // Structured Data for LegalService Schema
  const legalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Corporate Law Services - FAANA Advocacy",
    description:
      "Comprehensive corporate legal services for businesses including M&A, governance, and compliance",
    provider: {
      "@type": "LegalService",
      name: "FAANA Advocacy",
      url: "https://faana.com",
    },
    areaServed: "International",
    serviceType: "Corporate Law",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Corporate Law Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mergers & Acquisitions",
            description:
              "Expert guidance through complex M&A transactions and due diligence",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Corporate Governance",
            description:
              "Advisory services on board matters and shareholder relations",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Commercial Contracts",
            description:
              "Drafting and negotiating commercial agreements and partnerships",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Securities & Finance",
            description:
              "Regulatory compliance and corporate financing transactions",
          },
        },
      ],
    },
  };

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }}
      />

      <Navigation />
      <main className="min-h-screen">
        {/* Breadcrumb */}
        <section className="py-6 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary">
                {t("home")}
              </Link>
              <ChevronRight className="h-4 w-4" />
              <Link href="/practice-areas" className="hover:text-primary">
                {t("practiceAreas")}
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground">{t("title")}</span>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-background">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center flex-shrink-0 shadow-lg animate-bounce">
                <Building2 className="h-10 w-10 text-white" />
              </div>
              <div className="flex-1">
                <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 animate-fade-in">
                  Corporate Legal Excellence
                </Badge>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent animate-slide-up">
                  {t("title")}
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed animate-slide-up delay-200">
                  {t("subtitle")}
                </p>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {[
                {
                  icon: Users,
                  label: "Clients Served",
                  value: "500+",
                },
                {
                  icon: Award,
                  label: "Successful Deals",
                  value: "200+",
                },
                {
                  icon: Clock,
                  label: "Years Experience",
                  value: "15+",
                },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center animate-fade-in-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
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

        {/* Overview */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12 animate-fade-in-up">
                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  {t("overviewTitle")}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full" />
              </div>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8 mb-6 animate-slide-up">
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    {t("overviewP1")}
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {t("overviewP2")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.1),transparent_50%)]" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 animate-fade-in-up">
                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  {t("servicesTitle")}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    id: "service1",
                    title: t("service1Title"),
                    desc: t("service1Desc"),
                    icon: Building2,
                  },
                  {
                    id: "service2",
                    title: t("service2Title"),
                    desc: t("service2Desc"),
                    icon: Scale,
                  },
                  {
                    id: "service3",
                    title: t("service3Title"),
                    desc: t("service3Desc"),
                    icon: FileText,
                  },
                  {
                    id: "service4",
                    title: t("service4Title"),
                    desc: t("service4Desc"),
                    icon: DollarSign,
                  },
                  {
                    id: "service5",
                    title: t("service5Title"),
                    desc: t("service5Desc"),
                    icon: Construction,
                  },
                  {
                    id: "service6",
                    title: t("service6Title"),
                    desc: t("service6Desc"),
                    icon: BarChart3,
                  },
                ].map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <Card
                      key={service.id}
                      className="group relative overflow-hidden border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <CardContent className="p-8">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mb-6 text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {service.desc}
                        </p>
                      </CardContent>
                      <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80 opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(120,119,198,0.1),transparent_50%)]" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16 animate-fade-in-up">
                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  {t("faqTitle")}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full" />
              </div>
              <div className="space-y-4">
                {[
                  { question: t("faq1Question"), answer: t("faq1Answer") },
                  { question: t("faq2Question"), answer: t("faq2Answer") },
                  { question: t("faq3Question"), answer: t("faq3Answer") },
                  { question: t("faq4Question"), answer: t("faq4Answer") },
                ].map((faq, index) => (
                  <Card
                    key={faq.question}
                    className="border-0 shadow-lg bg-gradient-to-r from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem
                        value={`item-${index}`}
                        className="border-0"
                      >
                        <AccordionTrigger className="text-left hover:no-underline px-6 py-4 hover:bg-primary/5 transition-colors duration-300">
                          <div className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                            <span className="font-semibold">
                              {faq.question}
                            </span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4 text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-gradient-to-r from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-3xl p-12 shadow-2xl animate-fade-in-up">
                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  {t("ctaTitle")}
                </h2>
                <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                  {t("ctaDesc")}
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <Link href="/contact" className="flex items-center">
                    {t("contactUs")}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
