"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
  Linkedin,
  Twitter,
  Loader2,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import { contactInfo, socialLinks } from "@/lib/constants";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import SectionHeader from "../common/SectionHeader";
import { sendContactEmail } from "@/app/actions/contact";

type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const socialIconMap: Record<string, React.ElementType> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
};

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    icon: Phone,
    label: "Phone",
    value: contactInfo.phone,
    href: `tel:${contactInfo.phone}`,
    gradient: "from-emerald-500 to-teal-400",
  },
  {
    icon: MapPin,
    label: "Location",
    value: contactInfo.location,
    href: "#",
    gradient: "from-violet-500 to-purple-400",
  },
];

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const result = await sendContactEmail(data);

      if (result.success) {
        setSubmitStatus({ type: "success", message: result.message });
        reset(); // Clear form on success
      } else {
        setSubmitStatus({ type: "error", message: result.message });
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
      // Auto-hide status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center border-b border-zinc-300 dark:border-zinc-700/50 py-20"
    >
      <SectionHeader
        label="Get In Touch"
        title="Contact Me"
        subtitle="Have a project in mind or want to collaborate? Don't hesitate to reach out — I'd love to hear from you"
      />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 w-full">
        {/* Left column — Contact info + Socials */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 space-y-8"
        >
          {/* Contact Info Cards */}
          <div className="space-y-4">
            {contactDetails.map((detail) => {
              const Icon = detail.icon;
              return (
                <a
                  key={detail.label}
                  href={detail.href}
                  className="group flex items-center gap-4 p-4 rounded-xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-white/5 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300"
                >
                  <div
                    className={`flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${detail.gradient} shadow-md`}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
                      {detail.label}
                    </p>
                    <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {detail.value}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-4">
              Follow Me
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const SocialIcon = socialIconMap[social.icon] ?? Github;
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex items-center justify-center w-11 h-11 rounded-xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-white/5 text-zinc-600 dark:text-zinc-400 hover:bg-blue-50 dark:hover:bg-blue-500/10 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-200 dark:hover:border-blue-500/30 transition-all duration-300 hover:shadow-md"
                  >
                    <SocialIcon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-3 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-100 dark:border-emerald-500/20"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <p className="text-sm font-medium text-emerald-700 dark:text-emerald-400">
              Currently available for freelance work
            </p>
          </motion.div>
        </motion.div>

        {/* Right column — Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-3"
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5 p-8 rounded-2xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-white/5 shadow-sm"
          >
            {/* Status message */}
            {submitStatus && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className={`flex items-center gap-3 p-4 rounded-xl text-sm font-medium ${
                  submitStatus.type === "success"
                    ? "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20"
                    : "bg-red-50 dark:bg-red-500/10 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-500/20"
                }`}
              >
                {submitStatus.type === "success" ? (
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                ) : (
                  <XCircle className="w-5 h-5 flex-shrink-0" />
                )}
                {submitStatus.message}
              </motion.div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label
                  htmlFor="contact-name"
                  className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
                >
                  Full Name
                </label>
                <Input
                  id="contact-name"
                  placeholder="John Doe"
                  disabled={isSubmitting}
                  className="h-12 rounded-xl bg-zinc-50 dark:bg-white/5 border-zinc-200 dark:border-white/10 focus:border-blue-500 dark:focus:border-blue-400 transition-colors duration-300"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <p className="text-xs text-red-500">{errors.name.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="contact-email"
                  className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
                >
                  Email
                </label>
                <Input
                  id="contact-email"
                  type="email"
                  placeholder="john@example.com"
                  disabled={isSubmitting}
                  className="h-12 rounded-xl bg-zinc-50 dark:bg-white/5 border-zinc-200 dark:border-white/10 focus:border-blue-500 dark:focus:border-blue-400 transition-colors duration-300"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-xs text-red-500">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="contact-subject"
                className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
              >
                Subject
              </label>
              <Input
                id="contact-subject"
                placeholder="Project collaboration"
                disabled={isSubmitting}
                className="h-12 rounded-xl bg-zinc-50 dark:bg-white/5 border-zinc-200 dark:border-white/10 focus:border-blue-500 dark:focus:border-blue-400 transition-colors duration-300"
                {...register("subject", { required: "Subject is required" })}
              />
              {errors.subject && (
                <p className="text-xs text-red-500">
                  {errors.subject.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label
                htmlFor="contact-message"
                className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
              >
                Message
              </label>
              <Textarea
                id="contact-message"
                placeholder="Tell me about your project..."
                rows={6}
                disabled={isSubmitting}
                className="rounded-xl bg-zinc-50 dark:bg-white/5 border-zinc-200 dark:border-white/10 focus:border-blue-500 dark:focus:border-blue-400 transition-colors duration-300 resize-none"
                {...register("message", {
                  required: "Message is required",
                  minLength: {
                    value: 10,
                    message: "Message must be at least 10 characters",
                  },
                })}
              />
              {errors.message && (
                <p className="text-xs text-red-500">
                  {errors.message.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-12 rounded-xl text-base font-bold bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
