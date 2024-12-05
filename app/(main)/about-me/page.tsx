import { MainSection } from "@/components/main";
import { Section } from "@/components/section";

import CloseIcon from "@/images/close-svgrepo-com.svg";

export default function Page() {
  return (
    <MainSection>
      <Section>
        <div
          id="about-me-modal"
          className="about-me-modal modal w-full overflow-hidden rounded border-1 border-solid border-[var(--theme-color-500)] border-opacity-80 bg-[var(--theme-color-100)] shadow-drop-5 transition-transform duration-500 modal-open:w-48"
          data-modal-active="closed"
        >
          <div className="modal-contents">
            <div className="modal-header flex flex-row items-center justify-between border-b-2 border-solid border-[var(--theme-color-500)] border-opacity-80 bg-[var(--theme-color-700)] py-1 pl-4 pr-3">
              <h2
                className="modal-heading select-none text-base font-bold text-[var(--theme-color-100)]"
                tabIndex="-1"
              >
                about me
              </h2>
              <button className="modal-close h-4 w-4 fill-[var(--theme-color-100)]">
                <CloseIcon />
              </button>
            </div>
            <div className="modal-contents h-full px-5 py-2">
              <div className="modal-text-section flex flex-col">
                <span className="font-semibold">Hi!</span>
                <span className="mt-2">Lorem ipsum dolor sit amet.</span>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </MainSection>
  );
}
