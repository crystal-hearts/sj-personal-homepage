import Image from "next/image";

import { ContentContainer } from "@/components/content-container";

import { InlineImageContainer } from "@/components/inline-image-container";

import sarahImage from "@/images/sarah.jpg";

export function AboutMe({ className }: { className?: string }) {
  return (
    <ContentContainer className={className}>
      <p className="text-center">
        <span>
          <strong>Hi! Thanks for checking out my homepage!</strong>
        </span>
      </p>
      <div className="flex justify-center">
        <InlineImageContainer title="the author">
          <Image src={sarahImage} alt="sarah" />
        </InlineImageContainer>
      </div>
      <p className="text-center">
        <span>
          I&lsquo;m Sarah Jacques, an eCommerce consultant, full-stack web
          developer, and UX specialist.{" "}
          <strong>I build accessible and fun experiences for the web</strong>!
        </span>
      </p>
      <p className="text-center">
        <span>
          I&lsquo;m based in Vancouver, BC on the unceded territory of the
          xʷməθkʷəy̓əm, Sḵwx̱wú7mesh, and səlilwətaɬ nations.
        </span>
      </p>
    </ContentContainer>
  );
}
