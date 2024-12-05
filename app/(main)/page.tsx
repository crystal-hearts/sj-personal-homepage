import { Logo } from "./logo";
import { MainSection } from "./main";
import { Section } from "./section";

export default function Page() {
  return (
    <MainSection>
      <Section>
        <Logo />
      </Section>
    </MainSection>
  );
}
