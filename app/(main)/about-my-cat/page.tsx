import { Main } from "@/components/main";
import { Section } from "@/components/section";
import { AboutMyCatWindow } from "@/components/about-my-cat-window";
export default function Page() {
  return (
    <Main>
      <Section>
        <div className="flex max-w-lg flex-col">
          <AboutMyCatWindow />
        </div>
      </Section>
    </Main>
  );
}
