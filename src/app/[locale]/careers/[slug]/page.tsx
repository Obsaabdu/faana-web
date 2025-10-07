import {
  Calendar,
  MapPin,
  Briefcase,
  Clock,
  ArrowLeft,
  Share2,
  CheckCircle,
  ChevronRight,
  Users,
  TrendingUp,
  GraduationCap,
  Building,
} from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { positions } from "@/data/positions";

interface PositionDetailPageProps {
  params: {
    slug: string;
    locale: string;
  };
}

// Generate static params for all positions and locales
export async function generateStaticParams() {
  const locales = ['en', 'am', 'or'];
  const params: { locale: string; slug: string }[] = [];
  
  for (const locale of locales) {
    for (const position of positions) {
      params.push({
        locale,
        slug: position.slug,
      });
    }
  }
  
  return params;
}

// Force static generation
export const dynamic = "force-static";
export const dynamicParams = false;

// Generate metadata for each position
export async function generateMetadata({ params }: PositionDetailPageProps) {
  const { slug } = await params;
  const position = positions.find((p) => p.slug === slug);

  if (!position) {
    return {
      title: "Position Not Found",
    };
  }

  return {
    title: `${position.title} - Careers at FAANA`,
    description: position.shortDescription,
  };
}

export default async function PositionDetailPage({
  params,
}: PositionDetailPageProps) {
  const { slug, locale } = await params;
  const t = await getTranslations("PositionDetailPage");

  // Find the position by slug
  const position = positions.find((p) => p.slug === slug);

  if (!position) {
    notFound();
  }

  // Get related positions (same department, excluding current position)
  const relatedPositions = positions
    .filter((p) => p.department === position.department && p.id !== position.id)
    .slice(0, 2);

  // Get other open positions if not enough in same department
  if (relatedPositions.length < 2) {
    const otherPositions = positions
      .filter((p) => p.id !== position.id && !relatedPositions.includes(p))
      .slice(0, 2 - relatedPositions.length);
    relatedPositions.push(...otherPositions);
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Breadcrumb */}
        <section className="py-8 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link
                href="/"
                className="hover:text-primary transition-colors">
                {t("home")}
              </Link>
              <ChevronRight className="h-4 w-4" />
              <Link
                href="/careers"
                className="hover:text-primary transition-colors">
                {t("careers")}
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground">{position.title}</span>
            </nav>
          </div>
        </section>

        {/* Position Header */}
        <section className="py-12 bg-gradient-to-br from-primary/5 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="mb-6">
                <Button
                  asChild
                  variant="ghost"
                  className="mb-4">
                  <Link
                    href="/careers"
                    className="flex items-center gap-2">
                    <ArrowLeft className="h-4 w-4" />
                    {t("backToCareers")}
                  </Link>
                </Button>

                <div className="flex flex-wrap items-center gap-2 mb-4">
                  {position.featured && (
                    <Badge className="bg-primary text-primary-foreground">
                      {t("featured")}
                    </Badge>
                  )}
                  <Badge
                    variant="secondary"
                    className="bg-primary/10 text-primary">
                    {position.department}
                  </Badge>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {position.location}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Briefcase className="h-4 w-4" />
                    {position.type}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <TrendingUp className="h-4 w-4" />
                    {position.experienceLevel}
                  </div>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {position.title}
              </h1>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {position.shortDescription}
              </p>

              <div className="flex items-center justify-between py-6 border-t border-b">
                <div className="flex flex-col gap-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">
                      {t("posted")}: {position.postedDate}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">
                      {t("deadline")}: {position.applicationDeadline}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2">
                    <Share2 className="h-4 w-4" />
                    {t("share")}
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    className="px-8">
                    <Link href="/contact">{t("applyNow")}</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Position Details */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-12">
              {/* Responsibilities */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">
                    {t("responsibilities")}
                  </h2>
                </div>
                <ul className="space-y-3">
                  {position.responsibilities.map((responsibility, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Qualifications */}
              <div className="border-t pt-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">{t("qualifications")}</h2>
                </div>
                <ul className="space-y-3">
                  {position.qualifications.map((qualification, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{qualification}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Preferred Qualifications */}
              {position.preferredQualifications &&
                position.preferredQualifications.length > 0 && (
                  <div className="border-t pt-12">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <TrendingUp className="h-5 w-5 text-primary" />
                      </div>
                      <h2 className="text-2xl font-bold">
                        {t("preferredQualifications")}
                      </h2>
                    </div>
                    <ul className="space-y-3">
                      {position.preferredQualifications.map(
                        (qualification, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-3 text-muted-foreground">
                            <CheckCircle className="h-5 w-5 text-primary/60 mt-0.5 flex-shrink-0" />
                            <span>{qualification}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                )}

              {/* What We Offer */}
              <div className="border-t pt-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Building className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">{t("whatWeOffer")}</h2>
                </div>
                <ul className="space-y-3">
                  {position.whatWeOffer.map((benefit, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Application Instructions */}
              <div className="border-t pt-12">
                <div className="bg-primary/5 border border-primary/20 rounded-xl p-8">
                  <h2 className="text-2xl font-bold mb-4">{t("howToApply")}</h2>
                  <p className="text-muted-foreground mb-6">
                    {t("applicationInstructions")}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      asChild
                      size="lg"
                      className="flex-1">
                      <Link href="/contact">{t("applyNow")}</Link>
                    </Button>
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="flex-1">
                      <Link href="/careers">{t("viewAllPositions")}</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Positions */}
        {relatedPositions.length > 0 && (
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-center">
                  {t("otherPositions")}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {relatedPositions.map((relatedPosition) => (
                    <article
                      key={relatedPosition.id}
                      className="bg-background border rounded-xl p-6 hover:shadow-lg transition-shadow group">
                      <div className="flex items-center gap-2 mb-4">
                        <Badge
                          variant="outline"
                          className="text-xs">
                          {relatedPosition.department}
                        </Badge>
                        <Badge
                          variant="secondary"
                          className="text-xs">
                          {relatedPosition.type}
                        </Badge>
                      </div>
                      <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                        {relatedPosition.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 line-clamp-2">
                        {relatedPosition.shortDescription}
                      </p>
                      <div className="flex flex-col gap-2 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          {relatedPosition.location}
                        </div>
                        <div className="flex items-center gap-2">
                          <TrendingUp className="h-4 w-4" />
                          {relatedPosition.experienceLevel}
                        </div>
                      </div>
                      <Button
                        asChild
                        variant="outline"
                        className="w-full">
                        <Link href={`/careers/${relatedPosition.slug}`}>
                          {t("viewDetails")}
                        </Link>
                      </Button>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-2xl mx-auto">
              <Users className="h-16 w-16 mx-auto mb-6 opacity-80" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t("joinOurTeam")}
              </h2>
              <p className="text-lg mb-8 opacity-90">{t("joinTeamDesc")}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  variant="secondary">
                  <Link href="/contact">{t("applyNow")}</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline">
                  <Link href="/about">{t("learnMore")}</Link>
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
