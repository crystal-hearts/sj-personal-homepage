import { Main } from "@/components/main";
import { Section } from "@/components/section";
import { AboutMeWindow } from "@/components/about-me-window";

export default function Page() {
  return (
    <Main>
      <Section>
        <div className="flex max-w-xl flex-col">
          <AboutMeWindow />
        </div>
      </Section>
    </Main>
  );
}
