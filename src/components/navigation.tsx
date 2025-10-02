"use client";

import { ChevronDown, Menu } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import Image from "next/image";
import { LanguageSwitcher } from "@/components/language-switcher";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "@/i18n/routing";

export function Navigation() {
  const t = useTranslations("Navigation");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="flex items-center gap-2">
              <Image
                src="/faana-logo.png"
                alt="FAANA Law Firm"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold">FAANA</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-6">
            <Link
              href="/"
              className="text-sm font-medium transition-colors hover:text-primary">
              {t("home")}
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium transition-colors hover:text-primary">
              {t("about")}
            </Link>

            {/* Practice Areas Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary">
                {t("practiceAreas")}
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem asChild>
                  <Link
                    href="/practice-areas"
                    className="w-full">
                    {t("allPracticeAreas")}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/practice-areas/corporate-law"
                    className="w-full">
                    {t("corporateLaw")}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/practice-areas/litigation"
                    className="w-full">
                    {t("litigation")}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/practice-areas/intellectual-property"
                    className="w-full">
                    {t("intellectualProperty")}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/practice-areas/employment-law"
                    className="w-full">
                    {t("employmentLaw")}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/practice-areas/real-estate"
                    className="w-full">
                    {t("realEstate")}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/practice-areas/family-law"
                    className="w-full">
                    {t("familyLaw")}
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/team"
              className="text-sm font-medium transition-colors hover:text-primary">
              {t("team")}
            </Link>
            <Link
              href="/careers"
              className="text-sm font-medium transition-colors hover:text-primary">
              {t("careers")}
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium transition-colors hover:text-primary">
              {t("contact")}
            </Link>
          </div>

          {/* Right Side Controls */}
          <div className="flex items-center gap-2">
            <ModeToggle />
            <LanguageSwitcher />

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            <Link
              href="/"
              className="block px-3 py-2 text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}>
              {t("home")}
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}>
              {t("about")}
            </Link>
            <div className="px-3 py-2">
              <div className="text-sm font-medium mb-2">
                {t("practiceAreas")}
              </div>
              <div className="space-y-2 pl-4">
                <Link
                  href="/practice-areas"
                  className="block text-sm transition-colors hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}>
                  {t("allPracticeAreas")}
                </Link>
                <Link
                  href="/practice-areas/corporate-law"
                  className="block text-sm transition-colors hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}>
                  {t("corporateLaw")}
                </Link>
                <Link
                  href="/practice-areas/litigation"
                  className="block text-sm transition-colors hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}>
                  {t("litigation")}
                </Link>
                <Link
                  href="/practice-areas/intellectual-property"
                  className="block text-sm transition-colors hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}>
                  {t("intellectualProperty")}
                </Link>
                <Link
                  href="/practice-areas/employment-law"
                  className="block text-sm transition-colors hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}>
                  {t("employmentLaw")}
                </Link>
                <Link
                  href="/practice-areas/real-estate"
                  className="block text-sm transition-colors hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}>
                  {t("realEstate")}
                </Link>
                <Link
                  href="/practice-areas/family-law"
                  className="block text-sm transition-colors hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}>
                  {t("familyLaw")}
                </Link>
              </div>
            </div>
            <Link
              href="/team"
              className="block px-3 py-2 text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}>
              {t("team")}
            </Link>
            <Link
              href="/careers"
              className="block px-3 py-2 text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}>
              {t("careers")}
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}>
              {t("contact")}
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
