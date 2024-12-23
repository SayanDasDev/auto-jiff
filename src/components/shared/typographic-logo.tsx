import React from "react";

import useFonts from "@/hooks/use-fonts";

function TypographicLogo() {
  const { fontMono, fontSans } = useFonts();

  return (
    <span className={`text-primary font-black ${fontSans.className}`}>
      Auto
      <span className={`text-foreground font-semibold ${fontMono.className}`}>Jiff</span>
    </span>
  );
}

export default TypographicLogo;
