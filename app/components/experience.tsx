import { TicketContainer } from "@/components/ticket-container";

/**
 * "Experience" section content
 * The pieces here should be reworked into their own components at a later date to adhere to DRY principles
 * @param {string} className Any custom class names passed to the component
 */
export function Experience() {
  return (
    <div className="ticket-containers flex w-full flex-col flex-wrap items-center justify-center md:flex-row">
      <div data-theme-color="strawberry">
        <TicketContainer className="-rotate-2">
          <div className="flex flex-col font-semibold">
            <div className="flex flex-col md:flex-row md:space-x-1">
              <span>Crystalheart Digital</span>
              <span className="hidden md:inline">–</span>
              <span>Founder</span>
            </div>
            <hr className="mb-0.5 h-px border-0 bg-[var(--theme-color-500)]" />
            <span className="text-xs uppercase text-[var(--theme-color-700)]">
              July 2022 – Present
            </span>
          </div>
          <span className="text-sm">
            In July 2022 I set out on my own! As Crystalheart Digital I&lsquo;ve
            assisted large eCommerce clients with their Salesforce Commerce
            Cloud deployments and advised small business and nonprofits on best
            practices for their online stores.
          </span>
        </TicketContainer>
      </div>
      <div data-theme-color="mint">
        <TicketContainer className="rotate-2">
          <div className="flex flex-col font-semibold">
            <div className="flex flex-col md:flex-row md:space-x-1">
              <span>Lush Cosmetics North America</span>
              <span className="hidden md:inline">–</span>
              <span>Web Developer</span>
            </div>
            <hr className="mb-0.5 h-px border-0 bg-[var(--theme-color-500)]" />
            <span className="text-xs uppercase text-[var(--theme-color-700)]">
              2018 – 2022
            </span>
          </div>
          <span>
            In this role I worked on an Agile team to develop and maintain Lush
            North America&lsquo;s webstore using Salesforce Commerce Cloud.
            Highlights include building and launching buy-online
            pick-up-in-store functionality, same-day courier shipping from
            stores, and a monthly subscription box service.
          </span>
        </TicketContainer>
      </div>
      <div data-theme-color="lime">
        <TicketContainer className="-rotate-2">
          <div className="flex flex-col font-semibold">
            <div className="flex flex-col md:flex-row md:space-x-1">
              <span>Lush Cosmetics North America</span>
              <span className="hidden md:inline">–</span>
              <span>Systems Developer</span>
            </div>
            <hr className="mb-0.5 h-px border-0 bg-[var(--theme-color-500)]" />
            <span className="text-xs text-[var(--theme-color-700)]">
              2014 – 2018
            </span>
          </div>
          <span>
            Before I worked on Lush North America&lsquo;s webstore, I was
            responsible for the internal systems for their eCommerce fulfillment
            operation. This included building integrations to carriers and
            internal financial systems, and also time-saving tools for warehouse
            staff. I&lsquo;m really proud of a lot of the improvements I made
            that made their lives easier!
          </span>
        </TicketContainer>
      </div>
      <div data-theme-color="ube">
        <TicketContainer className="rotate-2">
          <div className="flex flex-col font-semibold">
            <div className="flex flex-col md:flex-row md:space-x-1">
              <span>Lush Cosmetics North America</span>
              <span className="hidden md:inline">–</span>
              <span>Fulfillment Manager</span>
            </div>
            <hr className="my-0.5 h-px border-0 bg-[var(--theme-color-500)] md:mt-0" />
            <span className="text-xs text-[var(--theme-color-700)]">
              2016 – 2018
            </span>
          </div>
          <span>
            I also managed that eCommerce fulfillment operation! I managed a
            team of about thirty people, which grew seasonally to about 100.
          </span>
        </TicketContainer>
      </div>
    </div>
  );
}
