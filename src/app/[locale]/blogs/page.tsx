import { Newspaper, TrendingUp, Calendar, Tag } from "lucide-react";
import { useTranslations } from "next-intl";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "@/i18n/routing";

export default function BlogsPage() {
  const t = useTranslations("BlogsPage");

  const blogPosts = [
    {
      id: 1,
      slug: "understanding-corporate-governance-regulations",
      title: t("post1Title"),
      excerpt: t("post1Excerpt"),
      category: t("post1Category"),
      date: "December 15, 2024",
      readTime: "5 min read",
      featured: true,
    },
    {
      id: 2,
      slug: "employment-law-updates-2024",
      title: t("post2Title"),
      excerpt: t("post2Excerpt"),
      category: t("post2Category"),
      date: "December 10, 2024",
      readTime: "3 min read",
      featured: false,
    },
    {
      id: 3,
      slug: "intellectual-property-protection-strategies",
      title: t("post3Title"),
      excerpt: t("post3Excerpt"),
      category: t("post3Category"),
      date: "December 5, 2024",
      readTime: "7 min read",
      featured: false,
    },
    {
      id: 4,
      slug: "real-estate-investment-legal-considerations",
      title: t("post4Title"),
      excerpt: t("post4Excerpt"),
      category: t("post4Category"),
      date: "November 28, 2024",
      readTime: "4 min read",
      featured: false,
    },
    {
      id: 5,
      slug: "family-law-navigating-divorce-proceedings",
      title: t("post5Title"),
      excerpt: t("post5Excerpt"),
      category: t("post5Category"),
      date: "November 20, 2024",
      readTime: "6 min read",
      featured: false,
    },
    {
      id: 6,
      slug: "litigation-trends-commercial-disputes",
      title: t("post6Title"),
      excerpt: t("post6Excerpt"),
      category: t("post6Category"),
      date: "November 15, 2024",
      readTime: "5 min read",
      featured: false,
    },
  ];

  const categories = [
    { name: t("category1"), count: 8 },
    { name: t("category2"), count: 6 },
    { name: t("category3"), count: 4 },
    { name: t("category4"), count: 5 },
    { name: t("category5"), count: 3 },
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Newspaper className="h-4 w-4" />
                {t("heroBadge")}
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                {t("title")}
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {t("subtitle")}
              </p>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">
                {t("featuredPostTitle")}
              </h2>

              {blogPosts
                .filter((post) => post.featured)
                .map((post) => (
                  <div
                    key={post.id}
                    className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/20">
                    <div className="flex flex-col lg:flex-row gap-8">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-4">
                          <Badge
                            variant="secondary"
                            className="bg-primary/10 text-primary">
                            {post.category}
                          </Badge>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            {post.date}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <TrendingUp className="h-4 w-4" />
                            {post.readTime}
                          </div>
                        </div>
                        <h3 className="text-3xl font-bold mb-4">
                          {post.title}
                        </h3>
                        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                          {post.excerpt}
                        </p>
                        <Button
                          asChild
                          size="lg">
                          <Link href={`/blogs/${post.slug}`}>
                            {t("readMore")}
                          </Link>
                        </Button>
                      </div>
                      <div className="lg:w-80">
                        <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center">
                          <Newspaper className="h-16 w-16 text-primary/60" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* Latest Posts */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">
                {t("latestPostsTitle")}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts
                  .filter((post) => !post.featured)
                  .map((post) => (
                    <article
                      key={post.id}
                      className="bg-background border rounded-xl p-6 hover:shadow-lg transition-shadow group">
                      <div className="flex items-center gap-2 mb-4">
                        <Badge
                          variant="outline"
                          className="text-xs">
                          {post.category}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          {post.date}
                        </div>
                        <div className="flex items-center gap-2">
                          <TrendingUp className="h-4 w-4" />
                          {post.readTime}
                        </div>
                      </div>
                      <Button
                        asChild
                        variant="outline"
                        className="w-full">
                        <Link href={`/blogs/${post.slug}`}>
                          {t("readMore")}
                        </Link>
                      </Button>
                    </article>
                  ))}
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">
                {t("categoriesTitle")}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((category) => (
                  <div
                    key={category.name}
                    className="bg-background border rounded-xl p-6 hover:shadow-lg transition-shadow group cursor-pointer">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Tag className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold group-hover:text-primary transition-colors">
                          {category.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {category.count} {t("postsCount")}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("newsletterTitle")}
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              {t("newsletterDesc")}
            </p>
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
        </section>
      </main>
      <Footer />
    </>
  );
}
