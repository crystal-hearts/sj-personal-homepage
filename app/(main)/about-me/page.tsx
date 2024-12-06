import { Main } from "@/components/main";
import { Section } from "@/components/section";
import { TextSection } from "@/components/text-section";

export default function Page() {
  return (
    <Main>
      <Section>
        <div className="flex flex-row">
          <TextSection sectionTitle="about me">
            <span className="font-semibold">Hi!</span>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              faucibus auctor maximus. Donec nec urna rhoncus, blandit magna
              eleifend, dictum erat.
            </span>
          </TextSection>
        </div>
      </Section>
    </Main>
  );
}
