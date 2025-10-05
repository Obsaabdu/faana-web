import { ChevronRight, Gavel, Scale, Shield, Award } from "lucide-react";
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
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "@/i18n/routing";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Litigation Services | Expert Trial Lawyers | FAANA Advocacy",
    description:
      "Experienced litigation attorneys providing aggressive representation in civil and commercial disputes. Expert trial advocacy for business disputes, arbitration, and appeals.",
    keywords: [
      "litigation lawyer",
      "trial attorney",
      "commercial litigation",
      "civil litigation",
      "dispute resolution",
      "arbitration services",
      "appeals attorney",
    ],
    openGraph: {
      title: "Litigation Services | FAANA Advocacy",
      description:
        "Expert litigation attorneys with proven track record in complex disputes and trial advocacy.",
      type: "website",
    },
  };
}

export default function LitigationPage() {
  const t = useTranslations("LitigationPage");

  // Structured Data for LegalService Schema
  const legalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Litigation Services - FAANA Advocacy",
    description:
      "Expert litigation and trial advocacy services for civil and commercial disputes",
    provider: {
      "@type": "LegalService",
      name: "FAANA Advocacy",
      url: "https://faana.com",
    },
    areaServed: "International",
    serviceType: "Litigation and Dispute Resolution",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Litigation Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Commercial Litigation",
            description:
              "Representation in business disputes and contract breaches",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Civil Litigation",
            description: "Expert advocacy in tort claims and property disputes",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Arbitration & Mediation",
            description:
              "Alternative dispute resolution for efficient outcomes",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Appeals",
            description: "Appellate advocacy in state and federal courts",
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
              <Link
                href="/"
                className="hover:text-primary">
                {t("home")}
              </Link>
              <ChevronRight className="h-4 w-4" />
              <Link
                href="/practice-areas"
                className="hover:text-primary">
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
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-primary/5 to-background">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(239,68,68,0.1),transparent_50%)]" />
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center flex-shrink-0 shadow-lg animate-bounce">
                <Gavel className="h-10 w-10 text-white" />
              </div>
              <div className="flex-1">
                <Badge className="mb-4 bg-red-500/10 text-red-600 border-red-500/20 animate-fade-in">
                  Aggressive Legal Advocacy
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
                  icon: Scale,
                  label: "Cases Won",
                  value: "95%",
                },
                {
                  icon: Shield,
                  label: "Years Experience",
                  value: "20+",
                },
                {
                  icon: Award,
                  label: "Court Victories",
                  value: "300+",
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

        {/* Overview */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">{t("overviewTitle")}</h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {t("overviewP1")}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t("overviewP2")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12">{t("servicesTitle")}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    id: "service1",
                    title: t("service1Title"),
                    desc: t("service1Desc"),
                  },
                  {
                    id: "service2",
                    title: t("service2Title"),
                    desc: t("service2Desc"),
                  },
                  {
                    id: "service3",
                    title: t("service3Title"),
                    desc: t("service3Desc"),
                  },
                  {
                    id: "service4",
                    title: t("service4Title"),
                    desc: t("service4Desc"),
                  },
                  {
                    id: "service5",
                    title: t("service5Title"),
                    desc: t("service5Desc"),
                  },
                  {
                    id: "service6",
                    title: t("service6Title"),
                    desc: t("service6Desc"),
                  },
                ].map((service) => (
                  <div
                    key={service.id}
                    className="p-6 bg-background border rounded-lg hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-semibold mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">{t("faqTitle")}</h2>
              <Accordion
                type="single"
                collapsible
                className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>{t("faq1Question")}</AccordionTrigger>
                  <AccordionContent>{t("faq1Answer")}</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>{t("faq2Question")}</AccordionTrigger>
                  <AccordionContent>{t("faq2Answer")}</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>{t("faq3Question")}</AccordionTrigger>
                  <AccordionContent>{t("faq3Answer")}</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>{t("faq4Question")}</AccordionTrigger>
                  <AccordionContent>{t("faq4Answer")}</AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">{t("ctaTitle")}</h2>
              <p className="text-lg text-muted-foreground mb-8">
                {t("ctaDesc")}
              </p>
              <Button
                asChild
                size="lg">
                <Link href="/contact">{t("contactUs")}</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
