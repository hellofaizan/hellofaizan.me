import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  const title = "We do not support Genocide - Free Palestine 🇵🇸";
  const description = "Stand for humanity! Palestine has a right to defend itself. Together, we can put an end to the Gaza genocide. Let's unite and ensure that every life in this region has access to the most basic necessities." 
  const linkTo = "https://twitter.com/search?q=%23PalestineLivesMatter";
  // ---- change the content above if you want to ----

  const hideBanner = () => {
    document.querySelector(".Pbanner").style.display = "none";
  };

  return (
    <div className="sticky Pbanner bottom-0">
      <div className="flex items-center justify-between gap-4 bg-slate-100/40 dark:bg-[#393939]/40 backdrop-blur-md px-4 py-3 dark:text-white">
        <Link href={linkTo} target="_blank" className="flex flex-row items-center">
          <Image
            className="fixed bottom-0 -ml-8"
            src="https://cdn.discordapp.com/attachments/1065518726855807067/1193491914415144970/pngtree-holding-hand-palestine-png-image_6513341-removebg-preview.png?ex=66bc7df6&is=66bb2c76&hm=1abd3216122f7be261b070c653f2e473931a0a690d4be4df374081d861f57090&"
            alt=""
            width={130}
            height={130}
          />
          <p className="text-sm font-medium ml-[85px]">
            <span className="font-bold text-base">{title}</span> <br/> <span className="hidden md:block">{description} <span className="bg-gradient-to-r from-red-500 dark:from-red-500 via-black dark:via-white to-green-500 dark:to-green-500 bg-clip-text text-transparent ml-1">#SAVEGAZASAVEPALESTINE</span></span>
          </p>
        </Link>

        <button
          aria-label="Dismiss"
          className="shrink-0 rounded-lg bg-black/10 p-1 transition hover:bg-black/20"
          onClick={() => {hideBanner()}}
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
