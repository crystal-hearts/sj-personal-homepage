import { ContentContainer } from "@/components/content-container";
import { Paragraph } from "@/components/paragraph";
import { TicketContainer } from "@/components/ticket-container";

export function Experience() {
  return (
    <div className="ticket-containers flex flex-col items-center">
      <TicketContainer className="mr-10 -rotate-2">
        <ContentContainer>
          <Paragraph>
            <span className="font-semibold">
              Crystalheart Digital - Founder, Web Developer
            </span>
            <span className="[var(--theme-color-200)] text-xs">
              JULY 2022 - PRESENT
            </span>
            <span>
              Developed websites and web functionality for corporate and
              not-for-profit Developed websites and web functionality for
              corporate and not-for-profit Developed websites and web
              functionality for corporate and not-for-profit Developed websites
              and web functionality for corporate and not-for-profit
            </span>
          </Paragraph>
        </ContentContainer>
      </TicketContainer>
      <TicketContainer className="rotate-2">
        <ContentContainer>
          <Paragraph>
            <span className="font-semibold">
              Crystalheart Digital - Founder, Web Developer
            </span>
            <span className="[var(--theme-color-200)] text-xs">
              JULY 2022 - PRESENT
            </span>
            <span>
              Developed websites and web functionality for corporate and not-
            </span>
          </Paragraph>
        </ContentContainer>
      </TicketContainer>
    </div>
  );
}
