import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

import { Icons } from "@/components/shared/icons";
import { buttonVariants } from "@/components/ui/button";
import useFonts from "@/hooks/use-fonts";

function NotFoundPage() {
  const { fontSans, fontMono } = useFonts();

  return (
    <div className="flex flex-col bg-background justify-center items-center text-center min-h-screen gap-2 sm:gap-4 p-4">
      <Icons.NotFound className="size-24 sm:size-40 text-primary" />
      <p className={`text-2xl sm:text-6xl text-foreground font-bold ${fontSans.className}`}>404 | Not Found</p>
      <p className={`text-md sm:text-xl text-foreground/50 ${fontMono.className}`}>Woops! Looks like this page doesn't exist</p>
      <Link href="/" className={buttonVariants({ variant: "default", size: "lg" })}>
        <ArrowLeft />
        <span>
          Back
          {" "}
          <span className="max-sm:hidden">to Dashboard</span>
        </span>
      </Link>
    </div>
  );
}

export default NotFoundPage;
