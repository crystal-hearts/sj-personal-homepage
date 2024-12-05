import { Logo } from "@/components/logo";
import { MainSection } from "@/components/main";
import { Section } from "@/components/section";

export default function Page() {
  return (
    <MainSection>
      <Section>
        <Logo />
      </Section>
    </MainSection>
  );
}
