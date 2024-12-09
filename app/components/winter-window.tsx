import Image from "next/image";

import { InlineImage } from "@/components/inline-image";

import winterImage from "@/images/winter.jpg";

export function WinterWindow() {
  return (
    <InlineImage imageTitle="winter">
      <Image src={winterImage} alt="winter" />
    </InlineImage>
  );
}
