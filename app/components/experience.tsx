import { TicketContainer } from "@/components/ticket-container";
import { JobListing } from "@/components/job-listing";

/**
 * "Experience" section content
 * @param {string} className Any custom class names passed to the component
 */
export function Experience() {
  return (
    <div className="ticket-containers flex w-full flex-col flex-wrap items-center justify-center md:flex-row">
      <div data-theme-color="strawberry">
        <TicketContainer className="-rotate-2">
          <JobListing
            organization="Crystalheart Digital"
            position="Founder"
            dateFrom="July 2022"
            dateTo="Present"
          >
            <span>
              In July 2022 I set out on my own! As Crystalheart Digital
              I&lsquo;ve assisted large eCommerce clients with their Salesforce
              Commerce Cloud deployments and advised small business and
              nonprofits on best practices for their online stores.
            </span>
          </JobListing>
        </TicketContainer>
      </div>
      <div data-theme-color="mint">
        <TicketContainer className="rotate-2">
          <JobListing
            organization="Lush Cosmetics North America"
            position="Web Development Manager"
            dateFrom="2021"
            dateTo="2022"
          >
            <span>
              In this role I managed an Agile-based team of Web developers and
              QA analysts to develop and maintain Lush North America&lsquo;s
              webstore using Salesforce Commerce Cloud! Highlights include
              planning and launching a same-day courier shipping service from
              stores and a monthly subscription box service.
            </span>
          </JobListing>
        </TicketContainer>
      </div>
      <div data-theme-color="ube">
        <TicketContainer className="-rotate-2">
          <JobListing
            organization="Lush Cosmetics North America"
            position="Full-Stack Web Developer"
            dateFrom="2018"
            dateTo="2021"
          >
            <span>
              I was also a full-stack developer on that team! I worked across
              the stack in this role, building and launching
              buy-online-pick-up-in-store functionality and leading the
              development on a full rebuild of an in-house OMS-CMS-PIM system.
            </span>
          </JobListing>
        </TicketContainer>
      </div>
      <div data-theme-color="lime">
        <TicketContainer className="rotate-2">
          <JobListing
            organization="Lush Cosmetics North America"
            position="Systems Developer"
            dateFrom="2014"
            dateTo="2016"
          >
            <span>
              Before I worked on Lush North America&lsquo;s webstore, I was
              responsible for the internal systems for their eCommerce
              fulfillment operation. This included building integrations to
              carriers and internal financial systems, and also time-saving
              tools for warehouse staff. I&lsquo;m really proud of a lot of the
              improvements I made that made their lives easier!
            </span>
          </JobListing>
        </TicketContainer>
      </div>
      <div data-theme-color="raspberry">
        <TicketContainer className="-rotate-2">
          <JobListing
            organization="Lush Cosmetics North America"
            position="Fulfillment Manager"
            dateFrom="2016"
            dateTo="2018"
          >
            <span>
              I also managed that eCommerce fulfillment operation! I managed a
              team of about thirty people, which grew seasonally to about 100.
            </span>
          </JobListing>
        </TicketContainer>
      </div>
    </div>
  );
}
