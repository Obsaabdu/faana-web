import { Award, Eye, Heart, Shield, Star, Target, Users } from "lucide-react";
import { useTranslations } from "next-intl";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";

export default function AboutPage() {
  const t = useTranslations("AboutPage");

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

        {/* Our Story */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t("ourStoryTitle")}
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {t("ourStoryP1")}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {t("ourStoryP2")}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t("ourStoryP3")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 bg-background rounded-lg shadow-sm">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{t("missionTitle")}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t("missionDesc")}
                </p>
              </div>

              <div className="p-8 bg-background rounded-lg shadow-sm">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{t("visionTitle")}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t("visionDesc")}
                </p>
              </div>

              <div className="p-8 bg-background rounded-lg shadow-sm">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{t("valuesTitle")}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t("valuesDesc")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section with Person Schema */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                {t("teamTitle")}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    id: "sarah-johnson",
                    name: t("member1Name"),
                    position: t("member1Position"),
                    bio: t("member1Bio"),
                    image: "/team/sarah-johnson.jpg",
                    email: "sarah.johnson@faana.com",
                    phone: "+1 (555) 123-4567",
                    linkedin: "https://linkedin.com/in/sarah-johnson",
                    specialties: ["Corporate Law", "M&A", "Securities"],
                  },
                  {
                    id: "michael-chen",
                    name: t("member2Name"),
                    position: t("member2Position"),
                    bio: t("member2Bio"),
                    image: "/team/michael-chen.jpg",
                    email: "michael.chen@faana.com",
                    phone: "+1 (555) 123-4568",
                    linkedin: "https://linkedin.com/in/michael-chen",
                    specialties: [
                      "Litigation",
                      "Commercial Disputes",
                      "Appeals",
                    ],
                  },
                  {
                    id: "aisha-rahman",
                    name: t("member3Name"),
                    position: t("member3Position"),
                    bio: t("member3Bio"),
                    image: "/team/aisha-rahman.jpg",
                    email: "aisha.rahman@faana.com",
                    phone: "+1 (555) 123-4569",
                    linkedin: "https://linkedin.com/in/aisha-rahman",
                    specialties: [
                      "Intellectual Property",
                      "Patent Law",
                      "Technology",
                    ],
                  },
                ].map((member) => (
                  <div
                    key={member.id}
                    className="p-6 border rounded-lg bg-background"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                        <Users className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{member.name}</h3>
                        <p className="text-primary font-medium">
                          {member.position}
                        </p>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">{member.bio}</p>
                    <div className="space-y-2">
                      <div className="flex flex-wrap gap-2">
                        {member.specialties.map((specialty) => (
                          <span
                            key={specialty}
                            className="px-2 py-1 bg-primary/10 text-primary text-sm rounded-full"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Machine-readable Person Schema */}
                    <script
                      type="application/ld+json"
                      dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                          "@context": "https://schema.org",
                          "@type": "Person",
                          name: member.name,
                          jobTitle: member.position,
                          description: member.bio,
                          image: member.image,
                          email: member.email,
                          telephone: member.phone,
                          sameAs: [member.linkedin],
                          worksFor: {
                            "@type": "Organization",
                            name: "FAANA Advocacy",
                            url: "https://faana.com",
                          },
                          knowsAbout: member.specialties,
                        }),
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Core Values List */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                {t("coreValuesTitle")}
              </h2>
              <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
                {t("coreValuesSubtitle")}
              </p>

              {/* Featured Values - Integrity, Excellence, Client Focus */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="p-8 bg-background rounded-xl shadow-lg border-2 border-primary/20 hover:border-primary/40 transition-all duration-300">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 mx-auto">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-center text-primary">
                    {t("integrityTitle")}
                  </h3>
                  <p className="text-muted-foreground text-center leading-relaxed">
                    {t("integrityDesc")}
                  </p>
                </div>

                <div className="p-8 bg-background rounded-xl shadow-lg border-2 border-primary/20 hover:border-primary/40 transition-all duration-300">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 mx-auto">
                    <Star className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-center text-primary">
                    {t("excellenceTitle")}
                  </h3>
                  <p className="text-muted-foreground text-center leading-relaxed">
                    {t("excellenceDesc")}
                  </p>
                </div>

                <div className="p-8 bg-background rounded-xl shadow-lg border-2 border-primary/20 hover:border-primary/40 transition-all duration-300">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 mx-auto">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-center text-primary">
                    {t("clientFocusTitle")}
                  </h3>
                  <p className="text-muted-foreground text-center leading-relaxed">
                    {t("clientFocusDesc")}
                  </p>
                </div>
              </div>

              {/* Additional Values */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    id: "innovation",
                    title: t("innovationTitle"),
                    desc: t("innovationDesc"),
                  },
                  {
                    id: "collaboration",
                    title: t("collaborationTitle"),
                    desc: t("collaborationDesc"),
                  },
                ].map((value) => (
                  <div
                    key={value.id}
                    className="p-6 border rounded-lg bg-background hover:shadow-md transition-shadow duration-300"
                  >
                    <h3 className="text-xl font-semibold mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">{value.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
