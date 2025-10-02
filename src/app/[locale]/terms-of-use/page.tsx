import { useTranslations } from "next-intl";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";

export default function TermsOfUsePage() {
  const t = useTranslations("TermsOfUsePage");

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {t("title")}
            </h1>
            <p className="text-lg text-muted-foreground">
              {t("lastUpdated")}: {t("date")}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
              <h2>{t("section1Title")}</h2>
              <p>{t("section1Content")}</p>

              <h2>{t("section2Title")}</h2>
              <p>{t("section2Content")}</p>

              <h2>{t("section3Title")}</h2>
              <p>{t("section3Content")}</p>
              <ul>
                <li>{t("section3Item1")}</li>
                <li>{t("section3Item2")}</li>
                <li>{t("section3Item3")}</li>
                <li>{t("section3Item4")}</li>
              </ul>

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

              <h2>{t("section10Title")}</h2>
              <p>{t("section10Content")}</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
