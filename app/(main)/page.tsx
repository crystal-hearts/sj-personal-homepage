import { Main } from "@/components/main";
import { Section } from "@/components/section";
import { CurvedContainer } from "@/components/curved-container";

import { Logo } from "@/components/logo";
import { AboutMe } from "@/components/about-me";
import { AboutSite } from "@/components/about-site";
import { AboutMyCat } from "@/components/about-my-cat";
import { ContactMe } from "@/components/contact-me";

import { ContentWindow } from "@/components/content-window";

export default function Page() {
  return (
    <Main>
      <Section className="h-96 pt-40">
        <Logo />
      </Section>
      <Section fullBleed={true}>
        <CurvedContainer>
          <AboutMe className="w-2/5" />
          <AboutSite className="w-3/5" />
        </CurvedContainer>
      </Section>
      <Section>
        <ContentWindow windowTitle="why this site?" noClose={true}>
          <AboutSite />
        </ContentWindow>
      </Section>
      <Section>
        <ContentWindow
          className="w-1/2"
          windowTitle="about my cat"
          noClose={true}
        >
          <AboutMyCat />
        </ContentWindow>
      </Section>
      <Section fullBleed={true}>
        <CurvedContainer displayBottomCurve={false}>
          <ContactMe className="pb-6" />
        </CurvedContainer>
      </Section>
    </Main>
  );
}
