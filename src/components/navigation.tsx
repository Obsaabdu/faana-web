"use client";

import {
  Briefcase,
  Building2,
  Camera,
  ChevronDown,
  FileText,
  Heart,
  Home,
  ImageIcon,
  Lightbulb,
  Mail,
  Menu,
  Scale,
  X,
} from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { LanguageSwitcher } from "@/components/language-switcher";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";

export function Navigation() {
  const t = useTranslations("Navigation");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [practiceAreasOpen, setPracticeAreasOpen] = useState(false);
  const [blogsNewsOpen, setBlogsNewsOpen] = useState(false);
  const [mobilePracticeAreasOpen, setMobilePracticeAreasOpen] = useState(false);
  const [mobileBlogsNewsOpen, setMobileBlogsNewsOpen] = useState(false);
  const practiceAreasTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const blogsNewsTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Helper function to check if a path is active
  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/" || pathname === "";
    }
    return pathname.startsWith(path);
  };

  const handlePracticeAreasMouseEnter = () => {
    if (practiceAreasTimeoutRef.current) {
      clearTimeout(practiceAreasTimeoutRef.current);
      practiceAreasTimeoutRef.current = null;
    }
    setPracticeAreasOpen(true);
  };

  const handlePracticeAreasMouseLeave = () => {
    practiceAreasTimeoutRef.current = setTimeout(() => {
      setPracticeAreasOpen(false);
    }, 150);
  };

  const handleBlogsNewsMouseEnter = () => {
    if (blogsNewsTimeoutRef.current) {
      clearTimeout(blogsNewsTimeoutRef.current);
      blogsNewsTimeoutRef.current = null;
    }
    setBlogsNewsOpen(true);
  };

  const handleBlogsNewsMouseLeave = () => {
    blogsNewsTimeoutRef.current = setTimeout(() => {
      setBlogsNewsOpen(false);
    }, 150);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 rounded-b-3xl ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl shadow-lg"
          : "bg-background/60 backdrop-blur-md"
      }`}>
      {/* Curvy bottom border with animated wave effect */}
      <div className="relative overflow-hidden">
        <div className="absolute -bottom-1 left-0 right-0 h-3">
          <svg
            className="w-full h-full animate-pulse"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            aria-hidden="true"
            role="presentation">
            {/* Main wave */}
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              fill={scrolled ? "hsl(var(--border))" : "transparent"}
              className="transition-all duration-500"
            />
            {/* Secondary wave */}
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              fill={scrolled ? "hsl(var(--primary) / 0.2)" : "transparent"}
              className="transition-all duration-500"
            />
            {/* Accent wave */}
            <path
              d="M0,0V8.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              fill={scrolled ? "hsl(var(--accent) / 0.3)" : "transparent"}
              className="transition-all duration-700"
            />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="flex items-center gap-3 group transition-all duration-300 hover:scale-105">
              <div className="relative">
                <Image
                  src="/faana-logo.png"
                  alt="FAANA Law Firm"
                  width={40}
                  height={40}
                  className="h-10 w-auto transition-all duration-300 group-hover:rotate-3 drop-shadow-lg dark:drop-shadow-primary dark:shadow-primary"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 dark:opacity-30 dark:group-hover:opacity-60" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent transition-all duration-300 group-hover:from-primary group-hover:to-accent">
                FAANA
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-1">
            <Link
              href="/"
              className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 hover:text-primary group ${
                isActive("/") ? "text-primary" : ""
              }`}>
              <span className="relative z-10">{t("home")}</span>
              <div
                className={`absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg transition-opacity duration-300 ${
                  isActive("/")
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100"
                }`}
              />
              <div
                className={`absolute bottom-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 ${
                  isActive("/")
                    ? "left-0 w-full"
                    : "left-1/2 w-0 group-hover:left-0 group-hover:w-full"
                }`}
              />
            </Link>
            <Link
              href="/about"
              className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 hover:text-primary group ${
                isActive("/about") ? "text-primary" : ""
              }`}>
              <span className="relative z-10">{t("about")}</span>
              <div
                className={`absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg transition-opacity duration-300 ${
                  isActive("/about")
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100"
                }`}
              />
              <div
                className={`absolute bottom-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 ${
                  isActive("/about")
                    ? "left-0 w-full"
                    : "left-1/2 w-0 group-hover:left-0 group-hover:w-full"
                }`}
              />
            </Link>

            {/* Practice Areas Dropdown */}
            <section
              className="relative"
              aria-label="Practice Areas Menu"
              onMouseEnter={handlePracticeAreasMouseEnter}
              onMouseLeave={handlePracticeAreasMouseLeave}>
              <button
                type="button"
                className={`relative flex items-center gap-1 px-4 py-2 text-sm font-medium transition-all duration-300 hover:text-primary group ${
                  isActive("/practice-areas") ? "text-primary" : ""
                }`}>
                <span className="relative z-10">{t("practiceAreas")}</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ${
                    practiceAreasOpen ? "rotate-180" : ""
                  }`}
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg transition-opacity duration-300 ${
                    isActive("/practice-areas")
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  }`}
                />
                <div
                  className={`absolute bottom-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 ${
                    isActive("/practice-areas")
                      ? "left-0 w-full"
                      : "left-1/2 w-0 group-hover:left-0 group-hover:w-full"
                  }`}
                />
              </button>
              {practiceAreasOpen && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[800px] bg-background/95 backdrop-blur-xl border border-border/50 shadow-xl rounded-2xl p-6">
                  <div className="grid grid-cols-3 gap-4">
                    {/* All Practice Areas */}
                    <Link
                      href="/practice-areas"
                      className={`flex items-start gap-4 p-4 rounded-xl transition-all duration-300 group border hover:border-primary ${
                        isActive("/practice-areas") &&
                        !pathname.includes("/practice-areas/")
                          ? "border-primary/30 bg-primary/5"
                          : "border-border/30"
                      }`}>
                      <div className="flex-shrink-0 p-2 rounded-lg bg-primary/10 group-hover:scale-110 transition-all duration-300">
                        <FileText className="w-5 h-5 text-primary group-hover:text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-base mb-1 text-foreground group-hover:text-primary transition-colors duration-300">
                          {t("allPracticeAreas")}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Comprehensive legal services across all practice areas
                        </p>
                      </div>
                    </Link>

                    {/* Corporate Law */}
                    <Link
                      href="/practice-areas/corporate-law"
                      className={`flex items-start gap-4 p-4 rounded-xl transition-all duration-300 group border hover:border-primary ${
                        isActive("/practice-areas/corporate-law")
                          ? "border-primary/30 bg-primary/5"
                          : "border-border/30"
                      }`}>
                      <div className="flex-shrink-0 p-2 rounded-lg bg-primary/10 group-hover:scale-110 transition-all duration-300">
                        <Building2 className="w-5 h-5 text-primary group-hover:text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-base mb-1 text-foreground group-hover:text-primary transition-colors duration-300">
                          {t("corporateLaw")}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Business formation, contracts, and corporate
                          governance
                        </p>
                      </div>
                    </Link>

                    {/* Litigation */}
                    <Link
                      href="/practice-areas/litigation"
                      className={`flex items-start gap-4 p-4 rounded-xl transition-all duration-300 group border hover:border-primary ${
                        isActive("/practice-areas/litigation")
                          ? "border-primary/30 bg-primary/5"
                          : "border-border/30"
                      }`}>
                      <div className="flex-shrink-0 p-2 rounded-lg bg-primary/10 group-hover:scale-110 transition-all duration-300">
                        <Scale className="w-5 h-5 text-primary group-hover:text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-base mb-1 text-foreground group-hover:text-primary transition-colors duration-300">
                          {t("litigation")}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Civil and commercial dispute resolution
                        </p>
                      </div>
                    </Link>

                    {/* Intellectual Property */}
                    <Link
                      href="/practice-areas/intellectual-property"
                      className={`flex items-start gap-4 p-4 rounded-xl transition-all duration-300 group border hover:border-primary ${
                        isActive("/practice-areas/intellectual-property")
                          ? "border-primary/30 bg-primary/5"
                          : "border-border/30"
                      }`}>
                      <div className="flex-shrink-0 p-2 rounded-lg bg-primary/10 group-hover:scale-110 transition-all duration-300">
                        <Lightbulb className="w-5 h-5 text-primary group-hover:text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-base mb-1 text-foreground group-hover:text-primary transition-colors duration-300">
                          {t("intellectualProperty")}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Patents, trademarks, and IP protection
                        </p>
                      </div>
                    </Link>

                    {/* Employment Law */}
                    <Link
                      href="/practice-areas/employment-law"
                      className={`flex items-start gap-4 p-4 rounded-xl transition-all duration-300 group border hover:border-primary ${
                        isActive("/practice-areas/employment-law")
                          ? "border-primary/30 bg-primary/5"
                          : "border-border/30"
                      }`}>
                      <div className="flex-shrink-0 p-2 rounded-lg bg-primary/10 group-hover:scale-110 transition-all duration-300">
                        <Briefcase className="w-5 h-5 text-primary group-hover:text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-base mb-1 text-foreground group-hover:text-primary transition-colors duration-300">
                          {t("employmentLaw")}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Workplace rights and employment disputes
                        </p>
                      </div>
                    </Link>

                    {/* Real Estate */}
                    <Link
                      href="/practice-areas/real-estate"
                      className={`flex items-start gap-4 p-4 rounded-xl transition-all duration-300 group border hover:border-primary ${
                        isActive("/practice-areas/real-estate")
                          ? "border-primary/30 bg-primary/5"
                          : "border-border/30"
                      }`}>
                      <div className="flex-shrink-0 p-2 rounded-lg bg-primary/10 group-hover:scale-110 transition-all duration-300">
                        <Home className="w-5 h-5 text-primary group-hover:text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-base mb-1 text-foreground group-hover:text-primary transition-colors duration-300">
                          {t("realEstate")}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Property transactions and real estate law
                        </p>
                      </div>
                    </Link>

                    {/* Family Law */}
                    <Link
                      href="/practice-areas/family-law"
                      className={`flex items-start gap-4 p-4 rounded-xl transition-all duration-300 group border hover:border-primary ${
                        isActive("/practice-areas/family-law")
                          ? "border-primary/30 bg-primary/5"
                          : "border-border/30"
                      }`}>
                      <div className="flex-shrink-0 p-2 rounded-lg bg-primary/10 group-hover:scale-110 transition-all duration-300">
                        <Heart className="w-5 h-5 text-primary group-hover:text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-base mb-1 text-foreground group-hover:text-primary transition-colors duration-300">
                          {t("familyLaw")}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Divorce, custody, and family matters
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </section>

            {/* Blogs & News Dropdown */}
            <section
              className="relative"
              aria-label="Blogs and News Menu"
              onMouseEnter={handleBlogsNewsMouseEnter}
              onMouseLeave={handleBlogsNewsMouseLeave}>
              <button
                type="button"
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 hover:text-primary group ${
                  isActive("/newsletters") ||
                  isActive("/careers") ||
                  isActive("/legal-insights") ||
                  isActive("/gallery")
                    ? "text-primary"
                    : ""
                }`}>
                <span className="relative z-10 flex items-center gap-1">
                  {t("blogsNews")}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-300 ${
                      blogsNewsOpen ? "rotate-180" : ""
                    }`}
                  />
                </span>
                <div
                  className={`absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg transition-opacity duration-300 ${
                    isActive("/newsletters") ||
                    isActive("/careers") ||
                    isActive("/legal-insights") ||
                    isActive("/gallery")
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  }`}
                />
                <div
                  className={`absolute bottom-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 ${
                    isActive("/newsletters") ||
                    isActive("/careers") ||
                    isActive("/legal-insights") ||
                    isActive("/gallery")
                      ? "left-0 w-full"
                      : "left-1/2 w-0 group-hover:left-0 group-hover:w-full"
                  }`}
                />
              </button>
              {blogsNewsOpen && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-56 bg-background/95 backdrop-blur-xl border border-border/50 shadow-xl rounded-2xl p-2">
                  <Link
                    href="/newsletters"
                    className="flex items-center gap-2 px-3 py-2 text-sm rounded-lg hover:bg-primary/10 hover:text-primary transition-colors duration-200">
                    <Mail className="w-4 h-4" />
                    {t("newsletters")}
                  </Link>
                  <Link
                    href="/careers"
                    className="flex items-center gap-2 px-3 py-2 text-sm rounded-lg hover:bg-primary/10 hover:text-primary transition-colors duration-200">
                    <Briefcase className="w-4 h-4" />
                    {t("careers")}
                  </Link>
                  <Link
                    href="/legal-insights"
                    className="flex items-center gap-2 px-3 py-2 text-sm rounded-lg hover:bg-primary/10 hover:text-primary transition-colors duration-200">
                    <FileText className="w-4 h-4" />
                    {t("legalInsights")}
                  </Link>
                  <Link
                    href="/gallery"
                    className="flex items-center gap-2 px-3 py-2 text-sm rounded-lg hover:bg-primary/10 hover:text-primary transition-colors duration-200">
                    <Camera className="w-4 h-4" />
                    {t("gallery")}
                  </Link>
                </div>
              )}
            </section>
            <Link
              href="/contact"
              className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 hover:text-primary group ${
                isActive("/contact") ? "text-primary" : ""
              }`}>
              <span className="relative z-10">{t("contact")}</span>
              <div
                className={`absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg transition-opacity duration-300 ${
                  isActive("/contact")
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100"
                }`}
              />
              <div
                className={`absolute bottom-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 ${
                  isActive("/contact")
                    ? "left-0 w-full"
                    : "left-1/2 w-0 group-hover:left-0 group-hover:w-full"
                }`}
              />
            </Link>
          </div>

          {/* Right Side Controls */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2">
              <ModeToggle />
              <LanguageSwitcher />
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden relative overflow-hidden bg-gradient-to-r from-primary/10 to-accent/10 hover:from-primary/20 hover:to-accent/20 transition-all duration-300 hover:scale-105"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <div className="relative z-10 transition-transform duration-300">
                {mobileMenuOpen ? (
                  <X className="h-5 w-5 rotate-90" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 transition-opacity duration-300 hover:opacity-100" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden rounded-b-2xl ${
            mobileMenuOpen
              ? "max-h-screen opacity-100 py-4 bg-background/95 backdrop-blur-xl"
              : "max-h-0 opacity-0 py-0"
          }`}>
          <div className="space-y-1 max-h-[80vh] overflow-y-auto">
            {/* Mobile Controls - Top */}
            <div className="flex items-center justify-right gap-3 px-4 py-3 border-b border-border/50 mb-4">
              <ModeToggle />
              <LanguageSwitcher />
            </div>

            <Link
              href="/"
              className={`block px-4 py-3 text-sm font-medium transition-all duration-300 hover:text-primary hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 rounded-lg ${
                isActive("/")
                  ? "text-primary bg-gradient-to-r from-primary/10 to-accent/10"
                  : ""
              }`}
              onClick={() => setMobileMenuOpen(false)}>
              {t("home")}
            </Link>
            <Link
              href="/about"
              className={`block px-4 py-3 text-sm font-medium transition-all duration-300 hover:text-primary hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 rounded-lg ${
                isActive("/about")
                  ? "text-primary bg-gradient-to-r from-primary/10 to-accent/10"
                  : ""
              }`}
              onClick={() => setMobileMenuOpen(false)}>
              {t("about")}
            </Link>
            <button
              type="button"
              onClick={() =>
                setMobilePracticeAreasOpen(!mobilePracticeAreasOpen)
              }
              className="flex items-center gap-3 w-full text-left px-4 py-3 rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 hover:text-primary mb-4">
              <span className="text-sm font-medium">{t("practiceAreas")}</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ml-auto ${
                  mobilePracticeAreasOpen ? "rotate-180 text-primary" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                mobilePracticeAreasOpen
                  ? "max-h-[500px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}>
              {mobilePracticeAreasOpen && (
                <div className="space-y-2">
                  <Link
                    href="/practice-areas"
                    className={`flex items-start gap-3 p-3 rounded-lg transition-all duration-300 group border hover:border-primary ${
                      isActive("/practice-areas") &&
                      !pathname.includes("/practice-areas/")
                        ? "border-primary/30 bg-primary/5"
                        : "border-border/30"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}>
                    <div className="flex-shrink-0 p-1.5 rounded-md bg-primary/10 group-hover:scale-110 transition-all duration-300">
                      <FileText className="w-4 h-4 text-primary group-hover:text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-xs mb-1 text-foreground group-hover:text-primary transition-colors duration-300">
                        {t("allPracticeAreas")}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-tight">
                        Comprehensive legal services
                      </p>
                    </div>
                  </Link>

                  <Link
                    href="/practice-areas/corporate-law"
                    className={`flex items-start gap-3 p-3 rounded-lg transition-all duration-300 group border hover:border-primary ${
                      isActive("/practice-areas/corporate-law")
                        ? "border-primary/30 bg-primary/5"
                        : "border-border/30"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}>
                    <div className="flex-shrink-0 p-1.5 rounded-md bg-primary/10 group-hover:scale-110 transition-all duration-300">
                      <Building2 className="w-4 h-4 text-primary group-hover:text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-xs mb-1 text-foreground group-hover:text-primary transition-colors duration-300">
                        {t("corporateLaw")}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-tight">
                        Business formation & contracts
                      </p>
                    </div>
                  </Link>

                  <Link
                    href="/practice-areas/litigation"
                    className={`flex items-start gap-3 p-3 rounded-lg transition-all duration-300 group border hover:border-primary ${
                      isActive("/practice-areas/litigation")
                        ? "border-primary/30 bg-primary/5"
                        : "border-border/30"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}>
                    <div className="flex-shrink-0 p-1.5 rounded-md bg-primary/10 group-hover:scale-110 transition-all duration-300">
                      <Scale className="w-4 h-4 text-primary group-hover:text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-xs mb-1 text-foreground group-hover:text-primary transition-colors duration-300">
                        {t("litigation")}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-tight">
                        Dispute resolution
                      </p>
                    </div>
                  </Link>

                  <Link
                    href="/practice-areas/intellectual-property"
                    className={`flex items-start gap-3 p-3 rounded-lg transition-all duration-300 group border hover:border-primary ${
                      isActive("/practice-areas/intellectual-property")
                        ? "border-primary/30 bg-primary/5"
                        : "border-border/30"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}>
                    <div className="flex-shrink-0 p-1.5 rounded-md bg-primary/10 group-hover:scale-110 transition-all duration-300">
                      <Lightbulb className="w-4 h-4 text-primary group-hover:text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-xs mb-1 text-foreground group-hover:text-primary transition-colors duration-300">
                        {t("intellectualProperty")}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-tight">
                        Patents & trademarks
                      </p>
                    </div>
                  </Link>

                  <Link
                    href="/practice-areas/employment-law"
                    className={`flex items-start gap-3 p-3 rounded-lg transition-all duration-300 group border hover:border-primary ${
                      isActive("/practice-areas/employment-law")
                        ? "border-primary/30 bg-primary/5"
                        : "border-border/30"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}>
                    <div className="flex-shrink-0 p-1.5 rounded-md bg-primary/10 group-hover:scale-110 transition-all duration-300">
                      <Briefcase className="w-4 h-4 text-primary group-hover:text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-xs mb-1 text-foreground group-hover:text-primary transition-colors duration-300">
                        {t("employmentLaw")}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-tight">
                        Workplace rights
                      </p>
                    </div>
                  </Link>

                  <Link
                    href="/practice-areas/real-estate"
                    className={`flex items-start gap-3 p-3 rounded-lg transition-all duration-300 group border hover:border-primary ${
                      isActive("/practice-areas/real-estate")
                        ? "border-primary/30 bg-primary/5"
                        : "border-border/30"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}>
                    <div className="flex-shrink-0 p-1.5 rounded-md bg-primary/10 group-hover:scale-110 transition-all duration-300">
                      <Home className="w-4 h-4 text-primary group-hover:text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-xs mb-1 text-foreground group-hover:text-primary transition-colors duration-300">
                        {t("realEstate")}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-tight">
                        Property transactions
                      </p>
                    </div>
                  </Link>

                  <Link
                    href="/practice-areas/family-law"
                    className={`flex items-start gap-3 p-3 rounded-lg transition-all duration-300 group border hover:border-primary ${
                      isActive("/practice-areas/family-law")
                        ? "border-primary/30 bg-primary/5"
                        : "border-border/30"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}>
                    <div className="flex-shrink-0 p-1.5 rounded-md bg-primary/10 group-hover:scale-110 transition-all duration-300">
                      <Heart className="w-4 h-4 text-primary group-hover:text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-xs mb-1 text-foreground group-hover:text-primary transition-colors duration-300">
                        {t("familyLaw")}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-tight">
                        Divorce & custody
                      </p>
                    </div>
                  </Link>
                </div>
              )}
            </div>
            <button
              type="button"
              onClick={() => setMobileBlogsNewsOpen(!mobileBlogsNewsOpen)}
              className="flex items-center gap-3 w-full text-left px-4 py-3 rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 hover:text-primary mb-2">
              <span className="text-sm font-medium">{t("blogsNews")}</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ml-auto ${
                  mobileBlogsNewsOpen ? "rotate-180 text-primary" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                mobileBlogsNewsOpen
                  ? "max-h-[300px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}>
              {mobileBlogsNewsOpen && (
                <div className="space-y-2">
                  <Link
                    href="/newsletters"
                    className={`flex items-start gap-3 p-3 rounded-lg transition-all duration-300 group border hover:border-primary ${
                      isActive("/newsletters")
                        ? "border-primary/30 bg-primary/5"
                        : "border-border/30"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}>
                    <div className="flex-shrink-0 p-1.5 rounded-md bg-primary/10 group-hover:scale-110 transition-all duration-300">
                      <FileText className="w-4 h-4 text-primary group-hover:text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-xs mb-1 text-foreground group-hover:text-primary transition-colors duration-300">
                        {t("newsletters")}
                      </h3>
                    </div>
                  </Link>
                  <Link
                    href="/careers"
                    className={`flex items-start gap-3 p-3 rounded-lg transition-all duration-300 group border hover:border-primary ${
                      isActive("/careers")
                        ? "border-primary/30 bg-primary/5"
                        : "border-border/30"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}>
                    <div className="flex-shrink-0 p-1.5 rounded-md bg-primary/10 group-hover:scale-110 transition-all duration-300">
                      <Briefcase className="w-4 h-4 text-primary group-hover:text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-xs mb-1 text-foreground group-hover:text-primary transition-colors duration-300">
                        {t("careers")}
                      </h3>
                    </div>
                  </Link>
                  <Link
                    href="/legal-insights"
                    className={`flex items-start gap-3 p-3 rounded-lg transition-all duration-300 group border hover:border-primary ${
                      isActive("/legal-insights")
                        ? "border-primary/30 bg-primary/5"
                        : "border-border/30"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}>
                    <div className="flex-shrink-0 p-1.5 rounded-md bg-primary/10 group-hover:scale-110 transition-all duration-300">
                      <Lightbulb className="w-4 h-4 text-primary group-hover:text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-xs mb-1 text-foreground group-hover:text-primary transition-colors duration-300">
                        {t("legalInsights")}
                      </h3>
                    </div>
                  </Link>
                  <Link
                    href="/gallery"
                    className={`flex items-start gap-3 p-3 rounded-lg transition-all duration-300 group border hover:border-primary ${
                      isActive("/gallery")
                        ? "border-primary/30 bg-primary/5"
                        : "border-border/30"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}>
                    <div className="flex-shrink-0 p-1.5 rounded-md bg-primary/10 group-hover:scale-110 transition-all duration-300">
                      <ImageIcon className="w-4 h-4 text-primary group-hover:text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-xs mb-1 text-foreground group-hover:text-primary transition-colors duration-300">
                        {t("gallery")}
                      </h3>
                    </div>
                  </Link>
                </div>
              )}
            </div>
            <Link
              href="/contact"
              className={`block px-4 py-3 text-sm font-medium transition-all duration-300 hover:text-primary hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 rounded-lg ${
                isActive("/contact")
                  ? "text-primary bg-gradient-to-r from-primary/10 to-accent/10"
                  : ""
              }`}
              onClick={() => setMobileMenuOpen(false)}>
              {t("contact")}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
