import { Main } from "@/components/main";
import { Section } from "@/components/section";
import { ContentWindow } from "@/components/content-window";

export default function Page() {
  return (
    <Main>
      <Section>
        <ContentWindow
          className="max-w-4xl"
          windowTitle="about this site"
          returnID="about-site-button"
          href="/"
        >
          <p className="font-semibold">
            <span>
              For this site, I wanted to evoke the late-1990s spirit of personal
              homepages using contemporary tools and frameworks. I have a lot of
              love for the do-it-yourself ethos that drove a lot of the early
              Internet and wanted to capture that feeling in a way that also
              communicates something about who I am and what I care about.
            </span>
          </p>
          <p>
            <span>
              A big part of what I care about is fun! Effective UI/UX
              shouldn&lsquo;t just be clear and seamless for the user, it should
              also be pleasurable to use. Even the most sober and serious Web
              applications have an element of fun if they&lsquo;re built well!
            </span>
          </p>
          <p>
            <span>
              While I wanted to evoke a late-90s aesthetic, I also wanted to
              meet design goals and standards that didn&lsquo;t exist in 1998.
              In addition to being responsive to reflect that the majority of
              web traffic is from mobile devices, it also meets W3 accessibility
              guidelines.
            </span>
          </p>
          <p>
            <span>
              The site is built with React, NextJS, and Tailwind CSS, and you
              can see its code at the GitHub repository for the project.
              There&lsquo;s a lot here that wasn&lsquo;t typical in 1998!
            </span>
          </p>
          <p>
            <span>
              Stylistic influences include{" "}
              <a href="https://www.milk.com" target="_">
                the perfect simplicity of Dan Bornstein&lsquo;s milk.com
              </a>
              ,{" "}
              <a href="https://www.jenniverse.com/" target="_">
                Jennifer Diane Reitz&lsquo; many projects
              </a>
              , the flourishing ecosystem of Macromedia Flash sites before the
              launch of the iPhone, the tight and effective CSS effects in the
              New York Times Games app built by the{" "}
              <a href="https://nytimesguild.org/">NYT Tech Guild</a>, and the
              groovy 90s-does-60s psychedelia of EarthBound and the Sega
              Dreamcast. It&lsquo;s best viewed while listening to{" "}
              <a
                href="https://archive.org/details/jet-set-radio-ost-flac"
                target="_"
              >
                Hideki Naganuma&lsquo;s soundtrack to Jet Set Radio (2000)
              </a>
              .
            </span>
          </p>
        </ContentWindow>
      </Section>
    </Main>
  );
}
