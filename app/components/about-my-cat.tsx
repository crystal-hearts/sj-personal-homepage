import Image from "next/image";

import { ContentContainer } from "@/components/content-container";
import { InlineImageContainer } from "@/components/inline-image-container";

import winterImage from "@/images/winter.jpg";

export function AboutMyCat({ className }: { className?: string }) {
  return (
    <ContentContainer className={className}>
      <p className="text-center">
        <span>
          <strong>Winter</strong> is my beautiful little cat adopted on July
          10th, 2024. He&lsquo;s a grey and white tabby and was born sometime in
          2023.
        </span>
      </p>
      <div className="flex justify-center">
        <InlineImageContainer title="the boy">
          <Image src={winterImage} alt="cat" />
        </InlineImageContainer>
      </div>
      <p className="text-center">
        <span>
          His interests include <strong>yelling</strong>,{" "}
          <strong>watching the neighbourhood crows</strong>, and for some
          reason, <strong>videos of cows</strong>.
        </span>
      </p>
    </ContentContainer>
  );
}
