import { AlertTriangle } from "lucide-react";
import { useTranslations } from "next-intl";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";

export default function DisclaimerPage() {
  const t = useTranslations("DisclaimerPage");

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-4 mb-6">
              <AlertTriangle className="h-12 w-12 text-primary flex-shrink-0" />
              <h1 className="text-4xl md:text-6xl font-bold">{t("title")}</h1>
            </div>
            <p className="text-lg text-muted-foreground">
              {t("lastUpdated")}: {t("date")}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
              <div className="p-6 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900 rounded-lg mb-8">
                <p className="font-semibold text-amber-900 dark:text-amber-100 mb-2">
                  {t("importantNotice")}
                </p>
                <p className="text-amber-800 dark:text-amber-200">
                  {t("importantNoticeContent")}
                </p>
              </div>

              <h2>{t("section1Title")}</h2>
              <p>{t("section1Content")}</p>

              <h2>{t("section2Title")}</h2>
              <p>{t("section2Content")}</p>

              <h2>{t("section3Title")}</h2>
              <p>{t("section3Content")}</p>

              <h2>{t("section4Title")}</h2>
              <p>{t("section4Content")}</p>

              <h2>{t("section5Title")}</h2>
              <p>{t("section5Content")}</p>

              <h2>{t("section6Title")}</h2>
              <p>{t("section6Content")}</p>

              <h2>{t("section7Title")}</h2>
              <p>{t("section7Content")}</p>

              <h2>{t("section8Title")}</h2>
              <p>{t("section8Content")}</p>

              <h2>{t("section9Title")}</h2>
              <p>{t("section9Content")}</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
