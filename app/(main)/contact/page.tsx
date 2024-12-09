import { Main } from "@/components/main";
import { Section } from "@/components/section";
import { ContactMeWindow } from "@/components/contact-me-window";

export default function Page() {
  return (
    <Main>
      <Section>
        <div className="flex flex-row">
          <ContactMeWindow />
        </div>
      </Section>
    </Main>
  );
}
