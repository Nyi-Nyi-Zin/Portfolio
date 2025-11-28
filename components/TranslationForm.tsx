"use client";

import { useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { CreateBlogSchema, type CreateBlogInput } from "@/schemas/blogs";
import { CategoryEnum } from "@/lib/constants";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Loader2, Save, ImageIcon } from "lucide-react";
import { RichTextEditor } from "@/components/rich-text-editor";

interface TranslationFormProps {
  initialData?: CreateBlogInput;
  onSubmit: (data: CreateBlogInput) => Promise<void>;
}

export default function TranslationForm({
  initialData,
  onSubmit,
}: TranslationFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<CreateBlogInput>({
    resolver: zodResolver(CreateBlogSchema),
    defaultValues: initialData ?? {
      image: "",
      translations: {
        en: { title: "", description: "", category: undefined, detail: "" },
        mm: { title: "", description: "", category: undefined, detail: "" },
      },
    },
  });

  const handleSubmit: SubmitHandler<CreateBlogInput> = async (data) => {
    setIsSubmitting(true);
    try {
      await onSubmit(data);
    } finally {
      setIsSubmitting(false);
    }
  };

  const [activeTab, setActiveTab] = useState<"en" | "mm">("en");

  return (
    <section className="m-20">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          {/* IMAGE */}
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2">
                  <ImageIcon className="h-4 w-4 text-primary" />
                  Image URL
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="https://example.com/image.jpg"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* LANGUAGE TABS */}
          <div className="flex gap-2">
            <Button
              type="button"
              variant={activeTab === "en" ? "default" : "outline"}
              onClick={() => setActiveTab("en")}
            >
              🇺🇸 English
            </Button>
            <Button
              type="button"
              variant={activeTab === "mm" ? "default" : "outline"}
              onClick={() => setActiveTab("mm")}
            >
              🇲🇲 Myanmar
            </Button>
          </div>

          {/* TRANSLATION FIELDS */}
          {["en", "mm"].map((lang) => {
            if (lang !== activeTab) return null; // only show active tab

            return (
              <div key={lang} className="border rounded-lg p-4 space-y-4">
                {/* TITLE */}
                <FormField
                  control={form.control}
                  name={`translations.${lang}.title` as const}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title ({lang})</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Enter title..." />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* DESCRIPTION */}
                <FormField
                  control={form.control}
                  name={`translations.${lang}.description` as const}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description ({lang})</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          placeholder="Enter description..."
                          rows={2}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* CATEGORY */}
                <FormField
                  control={form.control}
                  name={`translations.${lang}.category` as const}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Category ({lang})</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            {CategoryEnum.options.map((cat) => (
                              <SelectItem key={cat} value={cat}>
                                {cat}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* DETAIL */}
                <FormField
                  control={form.control}
                  name={`translations.${lang}.detail` as const}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Detail ({lang})</FormLabel>
                      <FormControl>
                        <RichTextEditor
                          value={field.value}
                          onChange={(v) => field.onChange(v)}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            );
          })}

          {/* SUBMIT BUTTON */}
          <div className="flex justify-end pt-4">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="gap-2 bg-primary text-primary-foreground"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" /> Save
                </>
              )}
            </Button>
          </div>
        </form>
      </Form>
    </section>
  );
}
