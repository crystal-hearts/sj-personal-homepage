import Image from "next/image";

import { Main } from "@/components/main";
import { Section } from "@/components/section";
import { ContentWindow } from "@/components/content-window";
import { InlineImageContainer } from "@/components/inline-image-container";

import winterImage from "@/images/winter.jpg";
import winterImage2 from "@/images/winter2.png";

export default function Page() {
  return (
    <Main>
      <Section>
        <ContentWindow
          className="max-w-lg"
          windowTitle="about my cat"
          returnID="about-my-cat-button"
          href="/"
        >
          <p className="text-center">
            <span>
              <strong>Winter</strong> is my beautiful little cat adopted on July
              10th, 2024. He&lsquo;s a grey and white tabby and was born
              sometime in 2023.
            </span>
          </p>
          <div className="flex justify-center">
            <InlineImageContainer title="winter">
              <Image src={winterImage} alt="cat" />
            </InlineImageContainer>
          </div>
          <p className="text-center">
            <span>
              His interests include <strong>yelling</strong>,{" "}
              <strong>watching the neighbourhood crows</strong>, and for some
              reason, <strong>cow videos</strong>.
            </span>
          </p>
          <div className="flex justify-center">
            <InlineImageContainer title="he loves them">
              <Image src={winterImage2} alt="cat watching cows" />
            </InlineImageContainer>
          </div>
        </ContentWindow>
      </Section>
    </Main>
  );
}
