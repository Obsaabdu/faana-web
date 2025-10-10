"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
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
import { BackgroundShapes } from "@/components/ui/background-shapes";
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
        <section className="relative bg-gradient-to-br from-primary/10 via-background to-background py-20 md:py-32 overflow-hidden">
          <BackgroundShapes variant="justice" />
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <motion.div
              className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [360, 180, 0],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-6"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-6">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  Ready to help you succeed
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
              >
                {t("title")}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto"
              >
                {t("subtitle")}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button
                  size="lg"
                  className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Phone className="mr-2 h-5 w-5 text-oklch(0.2136 0.0483 257.951)" />
                  Call Now
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-6 border-2 hover:bg-primary/5 transition-all duration-300"
                >
                  <Mail className="mr-2 h-5 w-5 text-primary" />
                  Send Email
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Get in Touch Today
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Ready to discuss your legal needs? We're here to help you
                navigate through any legal challenge.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Information */}
              <div className="lg:col-span-1 space-y-8">
                <Card className="border-0 shadow-xl bg-gradient-to-br from-background to-muted/50 backdrop-blur-sm">
                  <CardHeader className="pb-6">
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                        <Shield className="h-5 w-5 text-yellow-500" />
                      </div>
                      {t("contactInfoTitle")}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {t("contactInfoSubtitle")}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="group flex gap-4 p-4 rounded-lg hover:bg-primary/5 transition-all duration-300">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 text-lg">
                          {t("phone")}
                        </h3>
                        <p className="text-muted-foreground text-lg font-medium">
                          {t("phoneNumber")}
                        </p>
                      </div>
                    </div>

                    <div className="group flex gap-4 p-4 rounded-lg hover:bg-primary/5 transition-all duration-300">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-accent/20 to-accent/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Mail className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 text-lg">
                          {t("email")}
                        </h3>
                        <p className="text-muted-foreground text-lg font-medium">
                          {t("emailAddress")}
                        </p>
                      </div>
                    </div>

                    <div className="group flex gap-4 p-4 rounded-lg hover:bg-primary/5 transition-all duration-300">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500/20 to-green-500/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <MapPin className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 text-lg">
                          {t("address")}
                        </h3>
                        <p className="text-muted-foreground text-lg font-medium">
                          {t("addressLine1")}
                          <br />
                          {t("addressLine2")}
                        </p>
                      </div>
                    </div>

                    <div className="group flex gap-4 p-4 rounded-lg hover:bg-primary/5 transition-all duration-300">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500/20 to-blue-500/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Clock className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 text-lg">
                          {t("businessHours")}
                        </h3>
                        <p className="text-muted-foreground text-lg font-medium">
                          {t("hoursWeekdays")}
                          <br />
                          {t("hoursWeekend")}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Google Maps */}
                <Card className="border-0 shadow-xl bg-gradient-to-br from-background to-muted/50 backdrop-blur-sm">
                  <CardHeader className="pb-6">
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-white" />
                      </div>
                      {t("mapTitle")}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {t("mapDescription")}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="w-full h-64 rounded-xl overflow-hidden shadow-lg">
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
                <Card className="border-0 shadow-2xl bg-gradient-to-br from-background to-muted/30 backdrop-blur-sm">
                  <CardHeader className="pb-8">
                    <CardTitle className="flex items-center gap-3 text-2xl">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                        <Shield className="h-6 w-6 text-white" />
                      </div>
                      {t("formTitle")}
                    </CardTitle>
                    <CardDescription className="text-lg">
                      {t("formSubtitle")}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {/* Disclaimer Alert */}
                    <Alert className="mb-8 border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50">
                      <AlertTriangle className="h-5 w-5 text-amber-600" />
                      <AlertDescription className="text-amber-800">
                        <strong className="text-lg">
                          {t("disclaimerTitle")}
                        </strong>{" "}
                        <span className="text-base">{t("disclaimerText")}</span>
                      </AlertDescription>
                    </Alert>

                    {/* Status Messages */}
                    {submitStatus === "success" && (
                      <Alert className="mb-8 border-green-200 bg-gradient-to-r from-green-50 to-emerald-50 shadow-lg">
                        <AlertDescription className="text-green-800 text-lg font-medium">
                          ✅ {t("successMessage")}
                        </AlertDescription>
                      </Alert>
                    )}

                    {submitStatus === "error" && (
                      <Alert className="mb-8 border-red-200 bg-gradient-to-r from-red-50 to-rose-50 shadow-lg">
                        <AlertDescription className="text-red-800 text-lg font-medium">
                          ❌ {t("errorMessage")}
                        </AlertDescription>
                      </Alert>
                    )}

                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="space-y-8"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="group">
                          <Label
                            htmlFor="name"
                            className="text-base font-semibold mb-2 block"
                          >
                            {t("nameLabel")} *
                          </Label>
                          <Input
                            id="name"
                            {...register("name")}
                            placeholder={t("namePlaceholder")}
                            className="mt-1 h-12 text-base border-2 focus:border-primary/50 transition-all duration-300 group-hover:border-primary/30"
                          />
                          {errors.name && (
                            <p className="text-sm text-red-600 mt-2 font-medium">
                              {errors.name.message}
                            </p>
                          )}
                        </div>

                        <div className="group">
                          <Label
                            htmlFor="email"
                            className="text-base font-semibold mb-2 block"
                          >
                            {t("emailLabel")} *
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            {...register("email")}
                            placeholder={t("emailPlaceholder")}
                            className="mt-1 h-12 text-base border-2 focus:border-primary/50 transition-all duration-300 group-hover:border-primary/30"
                          />
                          {errors.email && (
                            <p className="text-sm text-red-600 mt-2 font-medium">
                              {errors.email.message}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="group">
                          <Label
                            htmlFor="phone"
                            className="text-base font-semibold mb-2 block"
                          >
                            {t("phoneLabel")}
                          </Label>
                          <Input
                            id="phone"
                            type="tel"
                            {...register("phone")}
                            placeholder={t("phonePlaceholder")}
                            className="mt-1 h-12 text-base border-2 focus:border-primary/50 transition-all duration-300 group-hover:border-primary/30"
                          />
                          {errors.phone && (
                            <p className="text-sm text-red-600 mt-2 font-medium">
                              {errors.phone.message}
                            </p>
                          )}
                        </div>

                        <div className="group">
                          <Label
                            htmlFor="subject"
                            className="text-base font-semibold mb-2 block"
                          >
                            {t("subjectLabel")} *
                          </Label>
                          <Input
                            id="subject"
                            {...register("subject")}
                            placeholder={t("subjectPlaceholder")}
                            className="mt-1 h-12 text-base border-2 focus:border-primary/50 transition-all duration-300 group-hover:border-primary/30"
                          />
                          {errors.subject && (
                            <p className="text-sm text-red-600 mt-2 font-medium">
                              {errors.subject.message}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="group">
                        <Label
                          htmlFor="message"
                          className="text-base font-semibold mb-2 block"
                        >
                          {t("messageLabel")} *
                        </Label>
                        <Textarea
                          id="message"
                          {...register("message")}
                          placeholder={t("messagePlaceholder")}
                          rows={6}
                          className="mt-1 text-base border-2 focus:border-primary/50 transition-all duration-300 group-hover:border-primary/30 resize-none"
                        />
                        {errors.message && (
                          <p className="text-sm text-red-600 mt-2 font-medium">
                            {errors.message.message}
                          </p>
                        )}
                      </div>

                      <div className="pt-4">
                        <Button
                          type="submit"
                          size="lg"
                          disabled={isSubmitting}
                          className="w-full md:w-auto h-14 text-lg font-semibold bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? (
                            <div className="flex items-center gap-2">
                              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                              {t("submittingButton")}
                            </div>
                          ) : (
                            <div className="flex items-center gap-2">
                              <Mail className="h-5 w-5" />
                              {t("submitButton")}
                            </div>
                          )}
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />
          <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-gradient-to-l from-primary/20 to-accent/20 rounded-full blur-3xl opacity-30" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                Don't wait. Contact us today for a consultation and let us help
                you achieve your legal goals with confidence.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button
                  size="lg"
                  className="text-lg px-10 py-6 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <Phone className="mr-3 h-6 w-6" />
                  Schedule Consultation
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-10 py-6 border-2 hover:bg-primary/5 dark:hover:text-primary dark:hover:border-primary transition-all duration-300 transform hover:scale-105"
                >
                  <Mail className="mr-3 h-6 w-6" />
                  Send Quick Message
                </Button>
              </div>

              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">24/7 Support</h3>
                  <p className="text-muted-foreground">
                    Round-the-clock assistance for urgent legal matters
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Expert Team</h3>
                  <p className="text-muted-foreground">
                    Experienced lawyers with proven track records
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Quick Response</h3>
                  <p className="text-muted-foreground">
                    Fast response times for all your inquiries
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
