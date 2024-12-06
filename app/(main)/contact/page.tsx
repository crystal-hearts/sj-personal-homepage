import { Main } from "@/components/main";
import { Section } from "@/components/section";
import { TextSection } from "@/components/text-section";

export default function Page() {
  return (
    <Main>
      <Section>
        <TextSection sectionTitle="contact">
          <span className="font-semibold">Hi!</span>
          <span className="mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            faucibus auctor maximus. Donec nec urna rhoncus, blandit magna
            eleifend, dictum erat.
          </span>
        </TextSection>
      </Section>
    </Main>
  );
}
