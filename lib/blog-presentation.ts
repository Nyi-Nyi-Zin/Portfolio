export function blogDate(value: string, lang: "en" | "mm") {
  return new Date(value).toLocaleDateString(lang === "mm" ? "my-MM" : "en-US", { year: "numeric", month: "short", day: "numeric", timeZone: "UTC" });
}

export function readingTime(html: string, lang: "en" | "mm") {
  const text = html.replace(/<[^>]*>/g, " ").trim();
  // Myanmar text does not consistently separate words with spaces.
  const count = lang === "mm" ? text.replace(/\s/g, "").length / 450 : text.split(/\s+/).filter(Boolean).length / 200;
  const minutes = Math.max(1, Math.ceil(count));
  return lang === "mm" ? `${minutes} မိနစ် ဖတ်ရန်` : `${minutes} min read`;
}

export function categoryLabel(category: string) {
  if (category === "ai") return "AI";
  if (category === "devops") return "DevOps";
  return category.replace(/\b\w/g, (letter) => letter.toUpperCase());
}
