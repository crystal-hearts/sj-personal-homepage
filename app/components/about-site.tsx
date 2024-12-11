import { ContentContainer } from "@/components/content-container";
import { InlineLink } from "@/components/inline-link";

import { SITE_CONSTANTS } from "@/constants/site-constants";

export function AboutSite({ className }: { className?: string }) {
  return (
    <ContentContainer className={className}>
      <p>
        <span>
          For this site, I wanted to evoke the spirit of late-1990s spirit of
          personal homepages by building an{" "}
          <strong>
            intentionally retro-styled site using contemporary tools and
            frameworks
          </strong>
          . I have a lot of love for the do-it-yourself ethos that drove a lot
          of the early Internet and wanted to capture that feeling in a way that
          also communicates something about who I am and what I care about.
        </span>
      </p>
      <p>
        <span>
          A big part of what I care about is fun! Effective UI/UX design
          isn&lsquo;t just be clear and seamless for the user, it should also be{" "}
          <strong>fun to use</strong>! Even the most sober and serious Web
          applications have an element of fun if they&lsquo;re built well.
        </span>
      </p>
      <p>
        <span>
          While I wanted to evoke a late-90s aesthetic, I also wanted to{" "}
          <strong>meet design standards that didn&lsquo;t exist in 1998</strong>
          . In addition to being responsive, this site also meets W3
          accessibility guidelines.
        </span>
      </p>
      <p>
        <span>
          Stylistic influences include the perfect simplicity of{" "}
          <InlineLink href="https://www.milk.com" target="_">
            Dan Bornstein&lsquo;s milk.com
          </InlineLink>
          , the incredible breadth of{" "}
          <InlineLink href="https://www.jenniverse.com/" target="_">
            Jennifer Diane Reitz&lsquo; many projects
          </InlineLink>
          , the flourishing ecosystem of Macromedia Flash sites before the
          launch of the iPhone, the tight and effective CSS effects in the New
          York Times Games app built by the{" "}
          <InlineLink href="https://nytimesguild.org/">
            NYT Tech Guild
          </InlineLink>
          , and the groovy 90s-does-60s psychedelia of EarthBound and the Sega
          Dreamcast.
        </span>
      </p>
      <p>
        <span>
          It&lsquo;s best viewed while listening to{" "}
          <InlineLink
            href="https://archive.org/details/jet-set-radio-ost-flac"
            target="_"
          >
            Hideki Naganuma&lsquo;s soundtrack to Jet Set Radio (2000)
          </InlineLink>
          .
        </span>
      </p>
      <p>
        <span>
          The site is built with React, NextJS, and Tailwind CSS, and you can
          see its code at{" "}
          <InlineLink href={SITE_CONSTANTS.GITHUB_URL} target="_">
            the GitHub repository for the project
          </InlineLink>
          .
        </span>
      </p>
    </ContentContainer>
  );
}
