import { ContentContainer } from "@/components/content-container";
import { InlineLink } from "@/components/inline-link";

export function Influences({ className }: { className?: string }) {
  return (
    <ContentContainer className={className}>
      <p>
        <span>
          Influences include the perfect simplicity of{" "}
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
    </ContentContainer>
  );
}
