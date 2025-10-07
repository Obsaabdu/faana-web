import {
  Calendar,
  ArrowLeft,
  Share2,
  Camera,
  Download,
  ChevronRight,
  Image as ImageIcon,
} from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "@/i18n/routing";
import { notFound } from "next/navigation";
import Image from "next/image";
import { photoCollections } from "@/data/photoCollections";

// Re-export for other pages to use
export { photoCollections } from "@/data/photoCollections";

interface PhotoCollectionPageProps {
  params: {
    slug: string;
    locale: string;
  };
}

// Generate static params for all photo collections
export async function generateStaticParams() {
  return photoCollections.map((collection) => ({
    slug: collection.slug,
  }));
}

// Generate metadata for each photo collection
export async function generateMetadata({ params }: PhotoCollectionPageProps) {
  const { slug } = await params;
  const collection = photoCollections.find((c) => c.slug === slug);

  if (!collection) {
    return {
      title: "Collection Not Found",
    };
  }

  return {
    title: collection.title,
    description: collection.description,
  };
}

export default async function PhotoCollectionPage({
  params,
}: PhotoCollectionPageProps) {
  const { slug } = await params;
  const t = await getTranslations("PhotoCollectionPage");

  // Find the photo collection by slug
  const collection = photoCollections.find((c) => c.slug === slug);

  if (!collection) {
    notFound();
  }

  // Get related collections (excluding current collection)
  const relatedCollections = photoCollections
    .filter((c) => c.id !== collection.id)
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
                {t("photos")}
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground">{collection.title}</span>
            </nav>
          </div>
        </section>

        {/* Collection Header */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="mb-6">
                <Button
                  asChild
                  variant="ghost"
                  className="mb-4">
                  <Link
                    href="/blogs"
                    className="flex items-center gap-2">
                    <ArrowLeft className="h-4 w-4" />
                    {t("backToGallery")}
                  </Link>
                </Button>

                <div className="flex items-center gap-2 mb-4">
                  <Badge
                    variant="secondary"
                    className="bg-primary/10 text-primary">
                    {collection.category}
                  </Badge>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {collection.date}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Camera className="h-4 w-4" />
                    {collection.photoCount} {t("photos")}
                  </div>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {collection.title}
              </h1>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {collection.description}
              </p>

              <div className="flex items-center justify-between py-6 border-t border-b">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="font-semibold">{t("location")}:</span>
                    <span className="text-muted-foreground">
                      {collection.location}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="font-semibold">{t("photographer")}:</span>
                    <span className="text-muted-foreground">
                      {collection.photographer}
                    </span>
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

        {/* Photo Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {collection.photos.map((photo) => (
                  <div
                    key={photo.id}
                    className="group relative aspect-[4/3] bg-muted rounded-xl overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <ImageIcon className="h-16 w-16 text-primary/40" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <p className="text-white text-sm font-medium">
                          {photo.caption}
                        </p>
                      </div>
                    </div>
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button
                        size="sm"
                        variant="secondary"
                        className="h-8 w-8 p-0">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="mt-12 pt-8 border-t">
                <div className="flex items-center gap-2 mb-4">
                  <Camera className="h-5 w-5 text-muted-foreground" />
                  <span className="font-semibold">{t("tags")}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {collection.tags.map((tag) => (
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

        {/* Related Collections */}
        {relatedCollections.length > 0 && (
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-center">
                  {t("moreCollections")}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {relatedCollections.map((relatedCollection) => (
                    <article
                      key={relatedCollection.id}
                      className="bg-background border rounded-xl overflow-hidden hover:shadow-lg transition-shadow group">
                      <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                        <ImageIcon className="h-16 w-16 text-primary/40" />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-4">
                          <Badge
                            variant="outline"
                            className="text-xs">
                            {relatedCollection.category}
                          </Badge>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Camera className="h-3 w-3" />
                            {relatedCollection.photoCount}
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                          {relatedCollection.title}
                        </h3>
                        <p className="text-muted-foreground mb-4 line-clamp-2 text-sm">
                          {relatedCollection.description}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                          <Calendar className="h-4 w-4" />
                          {relatedCollection.date}
                        </div>
                        <Button
                          asChild
                          variant="outline"
                          className="w-full">
                          <Link href={`/photos/${relatedCollection.slug}`}>
                            {t("viewCollection")}
                          </Link>
                        </Button>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
