import { MainSection } from "../main";
import { Section } from "../section";

export default function Page() {
  return (
    <MainSection>
      <Section>
        <span className="font-semibold">Hi!</span>
        <span className="mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          faucibus auctor maximus. Donec nec urna rhoncus, blandit magna
          eleifend, dictum erat. In ullamcorper commodo elit, non tristique quam
          vulputate vitae. Aenean tincidunt eu mauris ac dignissim. Nam a libero
          efficitur, molestie orci non, suscipit nibh. Suspendisse ornare
          feugiat nibh eu laoreet. Aliquam malesuada dolor sed euismod
          tincidunt. Quisque neque eros, sollicitudin ut arcu eget, posuere
          eleifend ipsum. Etiam libero mi, semper cursus ullamcorper interdum,
          vulputate eu sem. Curabitur vulputate erat ex, eget aliquet metus
          feugiat dapibus. Quisque at volutpat felis, sit amet commodo nisl.
          Nulla facilisi. Sed pretium, felis sit amet egestas tempus, lacus est
          vehicula magna, nec pharetra dui dui sagittis augue.
        </span>
      </Section>
    </MainSection>
  );
}
