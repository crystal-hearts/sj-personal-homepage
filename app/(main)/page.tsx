import { Logo } from "@/components/logo";
import { Main } from "@/components/main";
import { Section } from "@/components/section";

export default function Page() {
  return (
    <Main>
      <Section>
        <div className="flex flex-col">
          <Logo />
        </div>
      </Section>
    </Main>
  );
}
