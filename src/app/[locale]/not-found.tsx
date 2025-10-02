import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";

export default function NotFound() {
  const t = useTranslations("NotFound");

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">{t("title")}</h1>
        <p className="text-xl mb-6">{t("message")}</p>
        <Button asChild>
          <Link href="/">{t("returnHome")}</Link>
        </Button>
      </div>
    </div>
  );
}
