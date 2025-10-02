import { Building2, ChevronRight } from "lucide-react";
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
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-6 mb-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Building2 className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  {t("title")}
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl">
                  {t("subtitle")}
                </p>
              </div>
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
                    className="p-6 bg-background border rounded-lg hover:shadow-lg transition-shadow"
                  >
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
              <Accordion type="single" collapsible className="w-full">
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

        {/* Related Insights */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">
                {t("relatedInsightsTitle")}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    id: "insight1",
                    title: t("insight1Title"),
                    excerpt: t("insight1Excerpt"),
                    link: "/insights/corporate-governance-best-practices",
                  },
                  {
                    id: "insight2",
                    title: t("insight2Title"),
                    excerpt: t("insight2Excerpt"),
                    link: "/insights/mergers-acquisitions-guide",
                  },
                  {
                    id: "insight3",
                    title: t("insight3Title"),
                    excerpt: t("insight3Excerpt"),
                    link: "/insights/regulatory-compliance-updates",
                  },
                ].map((insight) => (
                  <Card
                    key={insight.id}
                    className="hover:shadow-lg transition-shadow"
                  >
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-2">
                        {insight.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {insight.excerpt}
                      </p>
                      <Link
                        href={insight.link}
                        className="text-primary text-sm font-medium hover:underline"
                      >
                        Read more →
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
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
              <Button asChild size="lg">
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
