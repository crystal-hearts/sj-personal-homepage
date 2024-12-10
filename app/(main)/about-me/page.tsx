import Image from "next/image";

import { Main } from "@/components/main";
import { Section } from "@/components/section";
import { ContentWindow } from "@/components/content-window";
import { InlineImageContainer } from "@/components/inline-image-container";

import sarahImage from "@/images/sarah.jpg";

export default function Page() {
  return (
    <Main>
      <Section>
        <ContentWindow
          className="max-w-2xl"
          windowTitle="about me"
          returnID="about-me-button"
          href="/"
        >
          <p className="text-center">
            <span>
              <strong>Hi!</strong> Thanks for checking out my homepage!
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
              developer, and UX specialist living in Vancouver, BC on the
              unceded territory of the xʷməθkʷəy̓əm, Sḵwx̱wú7mesh, and səlilwətaɬ
              Nations.
            </span>
          </p>
          {/* <p className="text-center">
            <span>
              I have a wide-ranging, varied career in eCommerce that
              includes full-stack development, and managing an eCommerce
              Fulfillment warehouse. You can check out more about my career on
              my LinkedIn profile!
            </span>
          </p> */}
        </ContentWindow>
      </Section>
    </Main>
  );
}
