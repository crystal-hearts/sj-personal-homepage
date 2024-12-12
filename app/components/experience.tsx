import { TicketContainer } from "@/components/ticket-container";

export function Experience() {
  return (
    <div className="ticket-containers flex w-full flex-col flex-wrap items-center justify-center md:flex-row">
      <div data-theme-color="strawberry">
        <TicketContainer className="-rotate-2">
          <div className="flex flex-col font-semibold">
            <span>Crystalheart Digital - Founder</span>
            <span className="text-xs uppercase text-[var(--theme-color-700)]">
              July 2022 - Present
            </span>
          </div>
          <span className="text-sm">
            In July 2022 I set out on my own! As Crystalheart Digital,
            I&lsquo;ve assisted large eCommerce clients with their Salesforce
            Commerce Cloud deployments and advised small business and nonprofits
            on best practices for their online stores.
          </span>
        </TicketContainer>
      </div>
      <div data-theme-color="mint">
        <TicketContainer className="rotate-2">
          <div className="flex flex-col font-semibold">
            <span>Lush Cosmetics North America - Web Developer</span>
            <span className="text-xs uppercase text-[var(--theme-color-700)]">
              2018 - 2022
            </span>
          </div>
          <span>
            In this role, I worked in an Agile team to develop and maintain Lush
            North America&lsquo;s webstore using Salesforce Commerce Cloud.
            Highlights include building and launching buy-online
            pick-up-in-store functionality, same-day courier shipping from
            stores, and a subscription box service.
          </span>
        </TicketContainer>
      </div>
      <div data-theme-color="lime">
        <TicketContainer className="-rotate-2">
          <div className="flex flex-col font-semibold">
            <span>Lush Cosmetics North America - Systems Developer</span>
            <span className="text-xs text-[var(--theme-color-700)]">
              2014 - 2018
            </span>
          </div>
          <span>
            Before worked on Lush North America&lsquo;s webstore, I was
            responsible for the internal systems for their eCommerce
            fulfillment. This included building integrations to carriers and
            internal financial systems, but also time-saving tools for warehouse
            staff. I&lsquo;m really proud of a lot of the improvements I made
            that made their lives easier!
          </span>
        </TicketContainer>
      </div>
      <div data-theme-color="ube">
        <TicketContainer className="rotate-2">
          <div className="flex flex-col font-semibold">
            <span>Lush Cosmetics North America - Fulfillment Manager</span>
            <span className="text-xs text-[var(--theme-color-700)]">
              2016 - 2018
            </span>
          </div>
          <span>
            I also managed that eCommerce fulfillment facility! I managed a team
            of about thirty people, which grew seasonally to about 100.
          </span>
        </TicketContainer>
      </div>
    </div>
  );
}
