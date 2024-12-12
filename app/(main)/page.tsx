import { AboutMe } from "@/components/about-me";
import { AboutMyCat } from "@/components/about-my-cat";
import { ContactMe } from "@/components/contact-me";
import { ContentWindow } from "@/components/content-window";
import { CurvedContainer } from "@/components/curved-container";
import { Experience } from "@/components/experience";
import { Logo } from "@/components/logo";
import { Main } from "@/components/main";
import { Section } from "@/components/section";

export default function Page() {
  return (
    <Main>
      <Section className="md:h-96">
        <Logo />
      </Section>
      <Section id="about-me">
        <ContentWindow
          className="md:w-xl"
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
      <Section id="contact" noPaddingBottom={true} fullBleed={true}>
        <CurvedContainer displayBottomCurve={false}>
          <ContactMe className="self-center pb-12 md:w-xl md:pb-6" />
        </CurvedContainer>
      </Section>
    </Main>
  );
}
