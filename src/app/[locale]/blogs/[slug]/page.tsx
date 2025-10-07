import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Share2,
  Tag,
  BookOpen,
  ChevronRight,
} from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "@/i18n/routing";
import { notFound } from "next/navigation";

// Blog posts data - in a real app, this would come from a CMS or database
export const blogPosts = [
  {
    id: 1,
    slug: "understanding-corporate-governance-regulations",
    title: "Understanding the New Corporate Governance Regulations",
    excerpt:
      "Recent changes in corporate governance laws require businesses to adapt their compliance strategies. Learn what these changes mean for your organization.",
    content: `
      <p>The corporate governance landscape has undergone significant changes in recent years, with new regulations being introduced to enhance transparency, accountability, and stakeholder protection. These changes impact businesses of all sizes and require immediate attention to ensure compliance.</p>

      <h2>Key Regulatory Changes</h2>
      <p>The new regulations introduce several important requirements:</p>
      
      <ul>
        <li><strong>Enhanced Disclosure Requirements:</strong> Companies must now provide more detailed information about their governance structures, risk management processes, and sustainability initiatives.</li>
        <li><strong>Independent Director Requirements:</strong> Boards must maintain a certain percentage of independent directors, with specific qualifications and experience requirements.</li>
        <li><strong>Audit Committee Enhancements:</strong> Strengthened requirements for audit committee composition, responsibilities, and reporting.</li>
        <li><strong>Executive Compensation Transparency:</strong> Detailed disclosure of executive compensation packages and performance metrics.</li>
      </ul>

      <h2>Implementation Timeline</h2>
      <p>Organizations have a phased implementation approach:</p>
      
      <ol>
        <li><strong>Phase 1 (Immediate):</strong> Review current governance structures and identify gaps</li>
        <li><strong>Phase 2 (3 months):</strong> Implement new disclosure requirements</li>
        <li><strong>Phase 3 (6 months):</strong> Ensure board composition meets new standards</li>
        <li><strong>Phase 4 (12 months):</strong> Full compliance with all new requirements</li>
      </ol>

      <h2>Best Practices for Compliance</h2>
      <p>To ensure smooth implementation, consider these best practices:</p>
      
      <blockquote>
        <p>"Effective corporate governance is not just about compliance; it's about building trust with stakeholders and creating sustainable value for the long term."</p>
      </blockquote>

      <p>Key recommendations include:</p>
      <ul>
        <li>Conduct a comprehensive governance audit</li>
        <li>Engage with legal and compliance experts</li>
        <li>Develop clear policies and procedures</li>
        <li>Train board members and executives on new requirements</li>
        <li>Establish regular monitoring and review processes</li>
      </ul>

      <h2>Impact on Different Business Types</h2>
      <p>The regulations affect different types of businesses in various ways:</p>
      
      <h3>Public Companies</h3>
      <p>Public companies face the most stringent requirements, with immediate compliance obligations for enhanced disclosure and reporting.</p>
      
      <h3>Private Companies</h3>
      <p>While private companies have more flexibility, they should still consider adopting these governance practices to prepare for potential future requirements and improve overall business operations.</p>
      
      <h3>Non-Profit Organizations</h3>
      <p>Non-profits may need to adapt certain aspects of these regulations to enhance their governance structures and maintain donor confidence.</p>

      <h2>Conclusion</h2>
      <p>The new corporate governance regulations represent a significant shift towards greater transparency and accountability. While implementation may require substantial effort, organizations that embrace these changes early will be better positioned to build stakeholder trust and achieve long-term success.</p>
      
      <p>It's crucial to work with experienced legal counsel to ensure full compliance while maintaining operational efficiency. The investment in proper governance structures will pay dividends in terms of risk mitigation, stakeholder confidence, and business sustainability.</p>
    `,
    category: "Corporate Law",
    author: "Sarah Johnson",
    authorTitle: "Senior Partner",
    date: "December 15, 2024",
    readTime: "5 min read",
    featured: true,
    tags: ["Corporate Governance", "Compliance", "Business Law", "Regulations"],
  },
  {
    id: 2,
    slug: "employment-law-updates-2024",
    title: "Employment Law Updates for 2024",
    excerpt:
      "Key changes in employment legislation that affect both employers and employees in the current year.",
    content: `
      <p>2024 has brought significant changes to employment law that both employers and employees need to understand. These updates affect workplace policies, employee rights, and employer obligations across various jurisdictions.</p>

      <h2>Minimum Wage Increases</h2>
      <p>Several states and localities have implemented minimum wage increases:</p>
      
      <ul>
        <li>Federal minimum wage remains at $7.25 per hour</li>
        <li>Many states have increased their minimum wages above federal levels</li>
        <li>Some cities have implemented living wage ordinances</li>
      </ul>

      <h2>Remote Work Regulations</h2>
      <p>The continued prevalence of remote work has led to new regulations:</p>
      
      <ul>
        <li>Tax implications for remote workers</li>
        <li>Workplace safety requirements for home offices</li>
        <li>Data privacy and security obligations</li>
        <li>Workers' compensation coverage for remote work injuries</li>
      </ul>

      <h2>Non-Compete Agreement Restrictions</h2>
      <p>New limitations on non-compete agreements have been implemented:</p>
      
      <blockquote>
        <p>"The Federal Trade Commission has proposed a rule that would ban most non-compete agreements, citing their negative impact on worker mobility and competition."</p>
      </blockquote>

      <h2>Conclusion</h2>
      <p>Staying informed about these changes is crucial for maintaining compliance and protecting both employee rights and employer interests.</p>
    `,
    category: "Employment Law",
    author: "David Williams",
    authorTitle: "Senior Associate",
    date: "December 10, 2024",
    readTime: "3 min read",
    featured: false,
    tags: ["Employment Law", "Workplace Rights", "Remote Work", "2024 Updates"],
  },
  {
    id: 3,
    slug: "intellectual-property-protection-strategies",
    title: "Intellectual Property Protection Strategies",
    excerpt:
      "Comprehensive guide to protecting your innovations, trademarks, and creative works in today's competitive market.",
    content: `
      <p>In today's rapidly evolving business landscape, intellectual property (IP) has become one of the most valuable assets for companies. Effective IP protection strategies are essential for maintaining competitive advantages and securing long-term business success.</p>

      <h2>Types of Intellectual Property</h2>
      <p>Understanding the different types of IP protection available:</p>
      
      <h3>Patents</h3>
      <p>Patents protect inventions and provide exclusive rights for 20 years from the filing date. They are crucial for technology companies and innovators.</p>
      
      <h3>Trademarks</h3>
      <p>Trademarks protect brand names, logos, and other identifiers that distinguish your products or services in the marketplace.</p>
      
      <h3>Copyrights</h3>
      <p>Copyrights protect original works of authorship, including literary works, music, software, and artistic creations.</p>
      
      <h3>Trade Secrets</h3>
      <p>Trade secrets protect confidential business information that provides a competitive advantage, such as formulas, processes, or customer lists.</p>

      <h2>Strategic IP Protection Framework</h2>
      <p>Developing a comprehensive IP protection strategy involves several key steps:</p>
      
      <ol>
        <li><strong>IP Audit:</strong> Identify all existing IP assets within your organization</li>
        <li><strong>Risk Assessment:</strong> Evaluate potential threats and vulnerabilities</li>
        <li><strong>Protection Implementation:</strong> Apply appropriate protection mechanisms</li>
        <li><strong>Monitoring and Enforcement:</strong> Continuously monitor for infringement and take action when necessary</li>
      </ol>

      <h2>International IP Protection</h2>
      <p>For businesses operating globally, international IP protection is crucial:</p>
      
      <ul>
        <li>Patent Cooperation Treaty (PCT) for international patent applications</li>
        <li>Madrid System for international trademark registration</li>
        <li>Berne Convention for copyright protection</li>
        <li>Country-specific protection strategies</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Effective IP protection requires a strategic approach that aligns with your business goals and market position. Working with experienced IP attorneys can help you develop and implement a comprehensive protection strategy.</p>
    `,
    category: "Intellectual Property",
    author: "Aisha Rahman",
    authorTitle: "Partner",
    date: "December 5, 2024",
    readTime: "7 min read",
    featured: false,
    tags: ["Intellectual Property", "Patents", "Trademarks", "IP Strategy"],
  },
  {
    id: 4,
    slug: "real-estate-investment-legal-considerations",
    title: "Real Estate Investment Legal Considerations",
    excerpt:
      "Essential legal factors to consider when investing in real estate, from due diligence to closing procedures.",
    content: `
      <p>Real estate investment offers significant opportunities for wealth building, but it also involves complex legal considerations that can impact your success. Understanding these legal aspects is crucial for making informed investment decisions.</p>

      <h2>Due Diligence Process</h2>
      <p>Thorough due diligence is essential before any real estate investment:</p>
      
      <h3>Title Examination</h3>
      <p>Ensure clear title ownership and identify any liens, encumbrances, or title defects that could affect your investment.</p>
      
      <h3>Property Inspection</h3>
      <p>Conduct comprehensive property inspections to identify structural issues, environmental concerns, and compliance violations.</p>
      
      <h3>Financial Analysis</h3>
      <p>Review property financials, rent rolls, operating expenses, and market comparables to assess investment viability.</p>

      <h2>Legal Structures for Real Estate Investment</h2>
      <p>Choosing the right legal structure for your investment:</p>
      
      <ul>
        <li><strong>Individual Ownership:</strong> Simple but exposes personal assets to liability</li>
        <li><strong>Limited Liability Company (LLC):</strong> Provides liability protection and tax flexibility</li>
        <li><strong>Partnership:</strong> Suitable for multiple investors with shared management</li>
        <li><strong>Corporation:</strong> More complex but offers additional liability protection</li>
      </ul>

      <h2>Financing and Lending Considerations</h2>
      <p>Understanding financing options and legal requirements:</p>
      
      <blockquote>
        <p>"The right financing structure can significantly impact your investment returns and tax obligations."</p>
      </blockquote>

      <h2>Conclusion</h2>
      <p>Successful real estate investment requires careful attention to legal considerations throughout the entire process. Working with experienced real estate attorneys can help you navigate these complexities and protect your investment.</p>
    `,
    category: "Real Estate",
    author: "Maria Garcia",
    authorTitle: "Associate",
    date: "November 28, 2024",
    readTime: "4 min read",
    featured: false,
    tags: ["Real Estate", "Investment", "Due Diligence", "Property Law"],
  },
  {
    id: 5,
    slug: "family-law-navigating-divorce-proceedings",
    title: "Family Law: Navigating Divorce Proceedings",
    excerpt:
      "Understanding the divorce process, asset division, and custody arrangements in modern family law.",
    content: `
      <p>Divorce proceedings can be emotionally challenging and legally complex. Understanding the process and your rights is essential for achieving a fair and equitable resolution.</p>

      <h2>Types of Divorce</h2>
      <p>Different types of divorce proceedings available:</p>
      
      <ul>
        <li><strong>Uncontested Divorce:</strong> Both parties agree on all issues</li>
        <li><strong>Contested Divorce:</strong> Parties disagree on one or more issues</li>
        <li><strong>Collaborative Divorce:</strong> Parties work together with attorneys to reach agreement</li>
        <li><strong>Mediation:</strong> Neutral third party helps facilitate agreement</li>
      </ul>

      <h2>Key Issues in Divorce</h2>
      <p>Common issues that must be addressed during divorce proceedings:</p>
      
      <h3>Asset Division</h3>
      <p>Equitable distribution of marital property, including real estate, investments, and personal property.</p>
      
      <h3>Child Custody and Support</h3>
      <p>Determining custody arrangements, visitation schedules, and child support obligations based on the child's best interests.</p>
      
      <h3>Spousal Support</h3>
      <p>Alimony or spousal maintenance payments based on various factors including income, earning capacity, and marriage duration.</p>

      <h2>Legal Process</h2>
      <p>Understanding the divorce process timeline:</p>
      
      <ol>
        <li>Filing the divorce petition</li>
        <li>Serving the other party</li>
        <li>Discovery and information gathering</li>
        <li>Negotiation and settlement discussions</li>
        <li>Court proceedings if settlement is not reached</li>
        <li>Final judgment and decree</li>
      </ol>

      <h2>Conclusion</h2>
      <p>Navigating divorce proceedings requires careful consideration of legal, financial, and emotional factors. Working with an experienced family law attorney can help ensure your rights are protected throughout the process.</p>
    `,
    category: "Family Law",
    author: "James Thompson",
    authorTitle: "Associate",
    date: "November 20, 2024",
    readTime: "6 min read",
    featured: false,
    tags: ["Family Law", "Divorce", "Child Custody", "Asset Division"],
  },
  {
    id: 6,
    slug: "litigation-trends-commercial-disputes",
    title: "Litigation Trends in Commercial Disputes",
    excerpt:
      "Analysis of current trends in commercial litigation and how they may impact your business disputes.",
    content: `
      <p>Commercial litigation continues to evolve with changing business practices, technological advancements, and regulatory developments. Understanding current trends can help businesses better prepare for potential disputes and develop effective resolution strategies.</p>

      <h2>Technology-Driven Disputes</h2>
      <p>The digital transformation of business has created new types of commercial disputes:</p>
      
      <ul>
        <li>Data breach and cybersecurity litigation</li>
        <li>Intellectual property disputes in digital platforms</li>
        <li>E-commerce contract disputes</li>
        <li>Artificial intelligence and liability issues</li>
      </ul>

      <h2>Alternative Dispute Resolution Growth</h2>
      <p>Businesses are increasingly turning to alternative dispute resolution methods:</p>
      
      <blockquote>
        <p>"Mediation and arbitration offer faster, more cost-effective resolution compared to traditional litigation."</p>
      </blockquote>

      <h2>Regulatory Compliance Disputes</h2>
      <p>Increased regulatory scrutiny has led to more compliance-related disputes:</p>
      
      <ul>
        <li>Environmental compliance issues</li>
        <li>Employment law violations</li>
        <li>Consumer protection disputes</li>
        <li>Financial services regulatory matters</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Staying informed about litigation trends helps businesses anticipate potential disputes and develop proactive strategies for resolution.</p>
    `,
    category: "Litigation",
    author: "Michael Chen",
    authorTitle: "Managing Partner",
    date: "November 15, 2024",
    readTime: "5 min read",
    featured: false,
    tags: ["Litigation", "Commercial Disputes", "ADR", "Business Law"],
  },
];

interface BlogDetailPageProps {
  params: {
    slug: string;
    locale: string;
  };
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const t = await getTranslations("BlogDetailPage");

  // Find the blog post by slug
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Get related posts (same category, excluding current post)
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
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
                {t("blogs")}
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground">{post.title}</span>
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
                    {t("backToBlogs")}
                  </Link>
                </Button>

                <div className="flex items-center gap-2 mb-4">
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
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </div>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {post.title}
              </h1>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between py-6 border-t border-b">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">{post.author}</p>
                    <p className="text-sm text-muted-foreground">
                      {post.authorTitle}
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
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Tags */}
              <div className="mt-12 pt-8 border-t">
                <div className="flex items-center gap-2 mb-4">
                  <Tag className="h-5 w-5 text-muted-foreground" />
                  <span className="font-semibold">{t("tags")}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
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

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-center">
                  {t("relatedPosts")}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {relatedPosts.map((relatedPost) => (
                    <article
                      key={relatedPost.id}
                      className="bg-background border rounded-xl p-6 hover:shadow-lg transition-shadow group">
                      <div className="flex items-center gap-2 mb-4">
                        <Badge
                          variant="outline"
                          className="text-xs">
                          {relatedPost.category}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          {relatedPost.date}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          {relatedPost.readTime}
                        </div>
                      </div>
                      <Button
                        asChild
                        variant="outline"
                        className="w-full">
                        <Link href={`/blogs/${relatedPost.slug}`}>
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
              <BookOpen className="h-16 w-16 mx-auto mb-6 opacity-80" />
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
