import { MainSection } from "../main";
import { Section } from "../section";

import CloseIcon from "../../images/close-svgrepo-com.svg";

export default function Page() {
  return (
    <MainSection>
      <Section>
        <div
          id="about-me-modal"
          className="about-me-modal modal fixed w-full overflow-hidden rounded border-1 border-solid border-[var(--theme-color-500)] border-opacity-80 bg-[var(--theme-color-100)] shadow-drop-5 transition-transform duration-500 modal-open:w-48"
          data-modal-active="closed"
        >
          <div className="modal-contents">
            <div className="modal-header flex flex-row items-center justify-between border-b-2 border-solid border-[var(--theme-color-500)] border-opacity-80 bg-[var(--theme-color-700)] py-1 pl-4 pr-3">
              <h2
                className="modal-heading select-none text-base font-bold text-[var(--theme-color-100)]"
                tabIndex="-1"
              >
                contact
              </h2>
              <button className="modal-close h-4 w-4 fill-[var(--theme-color-100)]">
                <CloseIcon />
              </button>
            </div>
            <div className="modal-contents h-full px-5 py-2">
              <div className="modal-text-section flex flex-col">
                <span className="font-semibold">Hi!</span>
                <span className="mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer faucibus auctor maximus. Donec nec urna rhoncus,
                  blandit magna eleifend, dictum erat. In ullamcorper commodo
                  elit, non tristique quam vulputate vitae. Aenean tincidunt eu
                  mauris ac dignissim. Nam a libero efficitur, molestie orci
                  non, suscipit nibh. Suspendisse ornare feugiat nibh eu
                  laoreet. Aliquam malesuada dolor sed euismod tincidunt.
                  Quisque neque eros, sollicitudin ut arcu eget, posuere
                  eleifend ipsum. Etiam libero mi, semper cursus ullamcorper
                  interdum, vulputate eu sem. Curabitur vulputate erat ex, eget
                  aliquet metus feugiat dapibus. Quisque at volutpat felis, sit
                  amet commodo nisl. Nulla facilisi. Sed pretium, felis sit amet
                  egestas tempus, lacus est vehicula magna, nec pharetra dui dui
                  sagittis augue.
                </span>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </MainSection>
  );
}
