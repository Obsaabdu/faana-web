import { Building2, Gavel, Heart, Home, Lightbulb, Users } from "lucide-react";
import { useTranslations } from "next-intl";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { Link } from "@/i18n/routing";

export default function PracticeAreasPage() {
  const t = useTranslations("PracticeAreasPage");

  const practiceAreas = [
    {
      icon: Building2,
      title: t("corporateLawTitle"),
      description: t("corporateLawDesc"),
      href: "/practice-areas/corporate-law",
    },
    {
      icon: Gavel,
      title: t("litigationTitle"),
      description: t("litigationDesc"),
      href: "/practice-areas/litigation",
    },
    {
      icon: Lightbulb,
      title: t("intellectualPropertyTitle"),
      description: t("intellectualPropertyDesc"),
      href: "/practice-areas/intellectual-property",
    },
    {
      icon: Users,
      title: t("employmentLawTitle"),
      description: t("employmentLawDesc"),
      href: "/practice-areas/employment-law",
    },
    {
      icon: Home,
      title: t("realEstateTitle"),
      description: t("realEstateDesc"),
      href: "/practice-areas/real-estate",
    },
    {
      icon: Heart,
      title: t("familyLawTitle"),
      description: t("familyLawDesc"),
      href: "/practice-areas/family-law",
    },
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-3xl">
              {t("title")}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              {t("subtitle")}
            </p>
          </div>
        </section>

        {/* Practice Areas Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {practiceAreas.map((area) => {
                const Icon = area.icon;
                return (
                  <Link
                    key={area.href}
                    href={area.href}
                    className="group p-8 border rounded-lg hover:shadow-xl transition-all hover:border-primary"
                  >
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                      {area.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {area.description}
                    </p>
                    <span className="text-primary font-medium">
                      {t("learnMore")} →
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
