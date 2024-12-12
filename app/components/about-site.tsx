import { ContentContainer } from "@/components/content-container";
import { Paragraph } from "@/components/paragraph";
import { TextColumns } from "@/components/text-column";
import { TextHeading } from "@/components/text-heading";

export function AboutSite({ className }: { className?: string }) {
  return (
    <ContentContainer className={className}>
      <TextHeading>
        Hey Sarah, why&lsquo;d you build your site like this?
      </TextHeading>
      <TextColumns>
        <Paragraph className="md:w-3/5">
          <span>
            Well, I&lsquo;m glad you asked! I wanted to step outside the look of
            a typical developer portfolio site and evoke the spirit of
            late-1990s personal homepages by building an{" "}
            <strong>
              intentionally retro-styled site using contemporary tools and
              frameworks
            </strong>
            .
          </span>
          <span>
            I have a lot of love for the do-it-yourself ethos that drove a lot
            of the early Internet and wanted to capture that feeling in a way
            that also communicates something about who I am and what I care
            about.
          </span>
        </Paragraph>
        <Paragraph className="md:w-3/5">
          <span>
            A big part of what I care about is fun! Effective UI/UX design
            isn&lsquo;t just clear and seamless for the user, it should also be{" "}
            <strong>fun to use</strong>! Even the most sober and serious Web
            applications should be fun to use if they&lsquo;re built
            thoughtfully.
          </span>
          <span>
            While I wanted to evoke a playful Y2K aesthetic, I also wanted to{" "}
            <strong>
              meet design standards that didn&lsquo;t exist in 1998
            </strong>
            . In addition to being responsive, this site also meets W3
            accessibility guidelines.
          </span>
        </Paragraph>
      </TextColumns>
    </ContentContainer>
  );
}
