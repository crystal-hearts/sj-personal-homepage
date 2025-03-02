import Image from "next/image";

import { ContentContainer } from "@/components/content-container";
import { InlineImageContainer } from "@/components/inline-image-container";
import { Paragraph } from "@/components/paragraph";

import sarahImage from "@/images/sarah.webp";

/**
 * "About Me" section content
 * @param {string} className Any custom class names passed to the component
 */
export function AboutMe({ className }: { className?: string }) {
  return (
    <ContentContainer className={className}>
      <Paragraph className="text-center">
        <span className="font-bold">
          Hi! Thanks for checking out my homepage!
        </span>
      </Paragraph>
      <div className="flex justify-center">
        <InlineImageContainer title="the author">
          <Image src={sarahImage} alt="sarah" />
        </InlineImageContainer>
      </div>
      <Paragraph className="text-center">
        <span>
          I&lsquo;m Sarah Jacques, a full-stack web developer and eCommerce
          consultant
        </span>
        <span className="text-center">
          <strong>I build fun and accessible experiences for the web!</strong>
        </span>
      </Paragraph>
      <Paragraph className="text-center">
        <span>
          I&lsquo;m based in Vancouver, BC on the unceded territory of the
          xʷməθkʷəy̓əm, Sḵwx̱wú7mesh, and səlilwətaɬ nations
        </span>
      </Paragraph>
    </ContentContainer>
  );
}
