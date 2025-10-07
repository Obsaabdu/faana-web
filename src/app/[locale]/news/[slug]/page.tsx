import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Share2,
  Tag,
  Newspaper,
  ChevronRight,
} from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { newsArticles } from "@/data/newsArticles";

// Re-export for other pages to use
export { newsArticles } from "@/data/newsArticles";

// Remove duplicate - data is in src/data/newsArticles.ts
interface NewsDetailPageProps {
  params: {
    slug: string;
    locale: string;
  };
}

// Generate static params for all news articles
export async function generateStaticParams() {
  return newsArticles.map((article) => ({
    slug: article.slug,
  }));
}

// Generate metadata for each news article
export async function generateMetadata({ params }: NewsDetailPageProps) {
  const { slug } = await params;
  const article = newsArticles.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const { slug } = await params;
  const t = await getTranslations("NewsDetailPage");

  // Find the news article by slug
  const article = newsArticles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  // Get related articles (same category, excluding current article)
  const relatedArticles = newsArticles
    .filter((a) => a.category === article.category && a.id !== article.id)
    .slice(0, 3);

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
                href="/blogs"
                className="hover:text-primary transition-colors">
                {t("news")}
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground">{article.title}</span>
            </nav>
          </div>
        </section>

        {/* Article Header */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="mb-6">
                <Button
                  asChild
                  variant="ghost"
                  className="mb-4">
                  <Link
                    href="/blogs"
                    className="flex items-center gap-2">
                    <ArrowLeft className="h-4 w-4" />
                    {t("backToNews")}
                  </Link>
                </Button>

                <div className="flex items-center gap-2 mb-4">
                  <Badge
                    variant="secondary"
                    className="bg-primary/10 text-primary">
                    {article.category}
                  </Badge>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {article.date}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    {article.readTime}
                  </div>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {article.title}
              </h1>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {article.excerpt}
              </p>

              <div className="flex items-center justify-between py-6 border-t border-b">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">{article.author}</p>
                    <p className="text-sm text-muted-foreground">
                      {article.authorTitle}
                    </p>
                  </div>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2">
                  <Share2 className="h-4 w-4" />
                  {t("share")}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <article
                className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-blockquote:border-primary prose-blockquote:bg-primary/5 prose-blockquote:px-6 prose-blockquote:py-4 prose-blockquote:rounded-lg"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              {/* Tags */}
              <div className="mt-12 pt-8 border-t">
                <div className="flex items-center gap-2 mb-4">
                  <Tag className="h-5 w-5 text-muted-foreground" />
                  <span className="font-semibold">{t("tags")}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="text-sm">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-center">
                  {t("relatedArticles")}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {relatedArticles.map((relatedArticle) => (
                    <article
                      key={relatedArticle.id}
                      className="bg-background border rounded-xl p-6 hover:shadow-lg transition-shadow group">
                      <div className="flex items-center gap-2 mb-4">
                        <Badge
                          variant="outline"
                          className="text-xs">
                          {relatedArticle.category}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                        {relatedArticle.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {relatedArticle.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          {relatedArticle.date}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          {relatedArticle.readTime}
                        </div>
                      </div>
                      <Button
                        asChild
                        variant="outline"
                        className="w-full">
                        <Link href={`/news/${relatedArticle.slug}`}>
                          {t("readMore")}
                        </Link>
                      </Button>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Newsletter CTA */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-2xl mx-auto">
              <Newspaper className="h-16 w-16 mx-auto mb-6 opacity-80" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t("newsletterTitle")}
              </h2>
              <p className="text-lg mb-8 opacity-90">{t("newsletterDesc")}</p>
              <div className="max-w-md mx-auto flex gap-3">
                <input
                  type="email"
                  placeholder={t("emailPlaceholder")}
                  className="flex-1 px-4 py-3 rounded-lg text-foreground bg-background/10 border border-background/20 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-background/50"
                />
                <Button
                  size="lg"
                  variant="secondary"
                  className="px-8">
                  {t("subscribe")}
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
