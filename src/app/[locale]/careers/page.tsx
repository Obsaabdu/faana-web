import { Briefcase, GraduationCap, TrendingUp, Users } from "lucide-react";
import { useTranslations } from "next-intl";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";

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

        {/* Why Join Us */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t("whyJoinTitle")}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t("whyJoinSubtitle")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center p-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {t("growthTitle")}
                </h3>
                <p className="text-muted-foreground">{t("growthDesc")}</p>
              </div>

              <div className="flex flex-col items-center text-center p-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {t("cultureTitle")}
                </h3>
                <p className="text-muted-foreground">{t("cultureDesc")}</p>
              </div>

              <div className="flex flex-col items-center text-center p-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {t("learningTitle")}
                </h3>
                <p className="text-muted-foreground">{t("learningDesc")}</p>
              </div>

              <div className="flex flex-col items-center text-center p-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Briefcase className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {t("workLifeTitle")}
                </h3>
                <p className="text-muted-foreground">{t("workLifeDesc")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">
              {t("openPositionsTitle")}
            </h2>

            <div className="max-w-4xl mx-auto space-y-6">
              {openPositions.map((position) => (
                <div
                  key={position.title}
                  className="p-6 bg-background border rounded-lg hover:shadow-lg transition-shadow"
                >
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
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">
                {t("benefitsTitle")}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    id: "benefit1",
                    title: t("benefit1Title"),
                    desc: t("benefit1Desc"),
                  },
                  {
                    id: "benefit2",
                    title: t("benefit2Title"),
                    desc: t("benefit2Desc"),
                  },
                  {
                    id: "benefit3",
                    title: t("benefit3Title"),
                    desc: t("benefit3Desc"),
                  },
                  {
                    id: "benefit4",
                    title: t("benefit4Title"),
                    desc: t("benefit4Desc"),
                  },
                ].map((benefit) => (
                  <div key={benefit.id} className="p-6 border rounded-lg">
                    <h3 className="text-xl font-semibold mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("ctaTitle")}
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              {t("ctaDesc")}
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">{t("getInTouch")}</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
