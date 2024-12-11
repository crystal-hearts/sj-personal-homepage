import { Main } from "@/components/main";
import { Section } from "@/components/section";
import { CurvedContainer } from "@/components/curved-container";

import { Logo } from "@/components/logo";
import { AboutMe } from "@/components/about-me";
import { AboutMyCat } from "@/components/about-my-cat";
import { Experience } from "@/components/experience";
import { ContactMe } from "@/components/contact-me";

import { ContentWindow } from "@/components/content-window";

export default function Page() {
  return (
    <Main>
      <Section className="h-96 py-20">
        <Logo />
      </Section>
      <Section id="about-me">
        <ContentWindow
          className="md:w-3/5"
          windowTitle="about me"
          noClose={true}
        >
          <AboutMe />
        </ContentWindow>
      </Section>
      <Section id="about-site" fullBleed={true}>
        <CurvedContainer>
          <Experience />
        </CurvedContainer>
      </Section>
      <Section id="about-my-cat">
        <ContentWindow
          className="md:w-1/2"
          windowTitle="about my cat"
          noClose={true}
        >
          <AboutMyCat />
        </ContentWindow>
      </Section>
      <Section id="contact" fullBleed={true}>
        <CurvedContainer displayBottomCurve={false}>
          <ContactMe className="self-center pb-6 md:w-2/3" />
        </CurvedContainer>
      </Section>
    </Main>
  );
}
