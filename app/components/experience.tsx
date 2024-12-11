import { ContentContainer } from "@/components/content-container";

export function Experience({ className }: { className?: string }) {
  return (
    <ContentContainer className={className}>
      <div className="flex flex-col space-y-3 text-center md:text-left">
        <span className="text-lg font-semibold">Why this site?</span>
        <div className="flex flex-col space-y-3 md:flex-row md:space-x-3 md:space-y-0">
          <p className="flex flex-col space-y-3 md:w-3/5">
            <span>
              I wanted to step outside the style of the typical developer
              portfolio site and evoke the spirit of late-1990s personal
              homepages by building an{" "}
              <strong>
                intentionally retro-styled site using contemporary tools and
                frameworks
              </strong>
              .
            </span>
            <span>
              I have a lot of love for the do-it-yourself ethos that drove a lot
              of the early Internet and wanted to capture that feeling in a way
              that also{" "}
              <strong>
                communicates something about who I am and what I care about
              </strong>
              .
            </span>
          </p>
          <p className="flex flex-col space-y-3 md:w-3/5">
            <span>
              A big part of what I care about is fun! Effective UI/UX design
              isn&lsquo;t just be clear and seamless for the user, it should
              also be <strong>fun to use</strong>! Even the most sober and
              serious Web applications should be fun to use if they&lsquo;re
              built thoughtfully.
            </span>
            <span>
              While I wanted to evoke a late-90s aesthetic, I also wanted to{" "}
              <strong>
                meet design standards that didn&lsquo;t exist in 1998
              </strong>
              . In addition to being responsive, this site also meets W3
              accessibility guidelines.
            </span>
          </p>
        </div>
      </div>
    </ContentContainer>
  );
}
