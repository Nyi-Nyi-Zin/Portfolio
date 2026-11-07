import Image from "next/image";
import Link from "next/link";

export function Brand() {
  return (
    <Link
      href="/"
      aria-label="Nyi Nyi Zin portfolio — home"
      className="group inline-flex shrink-0 items-center gap-2 rounded-2xl bg-transparent px-2 py-1.5 transition-colors hover:bg-[#f0f6ff] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary sm:gap-2.5 sm:rounded-[18px] sm:px-3 sm:py-2 dark:hover:bg-[#17243c]"
    >
      <Image
        alt=""
        src="/logo.png"
        width={44}
        height={44}
        sizes="(min-width: 640px) 44px, 36px"
        className="size-9 shrink-0 object-contain transition-transform duration-500 ease-out motion-safe:group-hover:rotate-12 motion-safe:group-hover:scale-110 motion-reduce:transition-none sm:size-11"
        priority
      />
      <span className="relative flex flex-col gap-1 whitespace-nowrap border-b-2 border-transparent pb-1 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:bg-blue-500 after:transition-transform after:duration-300 after:ease-out after:content-[''] group-hover:after:scale-x-100 motion-reduce:after:transition-none dark:after:bg-blue-400">
        <span
          className="text-xl leading-none font-bold tracking-[-0.045em] text-[#3075f6] sm:text-2xl dark:text-blue-400"
          style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
        >
          NyiNyiZin
        </span>
        <span className="text-[8px] leading-none font-bold tracking-[0.14em] text-slate-600 uppercase sm:text-[10px] dark:text-slate-300">
          Portfolio
        </span>
      </span>
    </Link>
  );
}
