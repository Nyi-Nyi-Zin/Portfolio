"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/store/useLanguage";
import styles from "./journal.module.css";

export default function BlogFooter() {
  const lang = useLanguage((state) => state.lang);
  return <footer className={styles.footer}><div className={styles.container}>
    <div><Link href="/" className="font-display text-lg font-semibold">Nyi Nyi Zin<span className="text-primary">.</span></Link><p className="mt-2 text-sm text-muted-foreground">{lang === "mm" ? "Software တည်ဆောက်ရင်း လေ့လာတွေ့ရှိမှုများ။" : "Building things. Sharing what I learn."}</p></div>
    <Link href="/#contact" className={styles.footerLink}>{lang === "mm" ? "အတူတူ တည်ဆောက်ကြမယ်" : "Have something in mind? Let’s talk"}<ArrowUpRight className="size-4 shrink-0" aria-hidden="true" /></Link>
  </div></footer>;
}
