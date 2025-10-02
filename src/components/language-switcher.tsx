"use client";

import { Languages } from "lucide-react";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname, useRouter } from "@/i18n/routing";

export function LanguageSwitcher() {
  const t = useTranslations("Navigation");
  const params = useParams();
  const locale = params.locale as string;
  const router = useRouter();
  // IMPORTANT: usePathname from @/i18n/routing already returns path WITHOUT locale
  // Example: if URL is /en/about, this returns /about
  const pathname = usePathname();

  const handleLocaleChange = (newLocale: string) => {
    const pathWithoutLocale = pathname.replace(`/${locale}`, "") || "/";
    router.replace(pathWithoutLocale, { locale: newLocale });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Languages className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">{t("changeLanguage")}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => handleLocaleChange("en")}
          className={locale === "en" ? "bg-accent" : ""}
        >
          {t("english")}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleLocaleChange("am")}
          className={locale === "am" ? "bg-accent" : ""}
        >
          {t("amharic")}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleLocaleChange("or")}
          className={locale === "or" ? "bg-accent" : ""}
        >
          {t("oromo")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
