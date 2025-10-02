"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  AlertTriangle,
  Clock,
  Mail,
  MapPin,
  Phone,
  Shield,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

// Form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactPage() {
  const t = useTranslations("ContactPage");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log("Form submitted:", data);
      setSubmitStatus("success");
      reset();
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

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

        {/* Contact Form and Info */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Information */}
              <div className="lg:col-span-1 space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-primary" />
                      {t("contactInfoTitle")}
                    </CardTitle>
                    <CardDescription>
                      {t("contactInfoSubtitle")}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{t("phone")}</h3>
                        <p className="text-muted-foreground">
                          {t("phoneNumber")}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{t("email")}</h3>
                        <p className="text-muted-foreground">
                          {t("emailAddress")}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{t("address")}</h3>
                        <p className="text-muted-foreground">
                          {t("addressLine1")}
                          <br />
                          {t("addressLine2")}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">
                          {t("businessHours")}
                        </h3>
                        <p className="text-muted-foreground">
                          {t("hoursWeekdays")}
                          <br />
                          {t("hoursWeekend")}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Google Maps */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      {t("mapTitle")}
                    </CardTitle>
                    <CardDescription>{t("mapDescription")}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="w-full h-64 rounded-lg overflow-hidden">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5!2d38.7578!3d9.0054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85c4a4b8b8b8%3A0x4b8b8b8b8b8b8b8b!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1234567890"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="FAANA Advocacy Office Location"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-primary" />
                      {t("formTitle")}
                    </CardTitle>
                    <CardDescription>{t("formSubtitle")}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {/* Disclaimer Alert */}
                    <Alert className="mb-6">
                      <AlertTriangle className="h-4 w-4" />
                      <AlertDescription>
                        <strong>{t("disclaimerTitle")}</strong>{" "}
                        {t("disclaimerText")}
                      </AlertDescription>
                    </Alert>

                    {/* Status Messages */}
                    {submitStatus === "success" && (
                      <Alert className="mb-6 border-green-200 bg-green-50">
                        <AlertDescription className="text-green-800">
                          {t("successMessage")}
                        </AlertDescription>
                      </Alert>
                    )}

                    {submitStatus === "error" && (
                      <Alert className="mb-6 border-red-200 bg-red-50">
                        <AlertDescription className="text-red-800">
                          {t("errorMessage")}
                        </AlertDescription>
                      </Alert>
                    )}

                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="name">{t("nameLabel")} *</Label>
                          <Input
                            id="name"
                            {...register("name")}
                            placeholder={t("namePlaceholder")}
                            className="mt-1"
                          />
                          {errors.name && (
                            <p className="text-sm text-red-600 mt-1">
                              {errors.name.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <Label htmlFor="email">{t("emailLabel")} *</Label>
                          <Input
                            id="email"
                            type="email"
                            {...register("email")}
                            placeholder={t("emailPlaceholder")}
                            className="mt-1"
                          />
                          {errors.email && (
                            <p className="text-sm text-red-600 mt-1">
                              {errors.email.message}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="phone">{t("phoneLabel")}</Label>
                          <Input
                            id="phone"
                            type="tel"
                            {...register("phone")}
                            placeholder={t("phonePlaceholder")}
                            className="mt-1"
                          />
                          {errors.phone && (
                            <p className="text-sm text-red-600 mt-1">
                              {errors.phone.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <Label htmlFor="subject">{t("subjectLabel")} *</Label>
                          <Input
                            id="subject"
                            {...register("subject")}
                            placeholder={t("subjectPlaceholder")}
                            className="mt-1"
                          />
                          {errors.subject && (
                            <p className="text-sm text-red-600 mt-1">
                              {errors.subject.message}
                            </p>
                          )}
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="message">{t("messageLabel")} *</Label>
                        <Textarea
                          id="message"
                          {...register("message")}
                          placeholder={t("messagePlaceholder")}
                          rows={6}
                          className="mt-1"
                        />
                        {errors.message && (
                          <p className="text-sm text-red-600 mt-1">
                            {errors.message.message}
                          </p>
                        )}
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full md:w-auto">
                        {isSubmitting
                          ? t("submittingButton")
                          : t("submitButton")}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
