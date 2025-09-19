import { faqItems } from '../../data/faq-items';
import AskUsButton from '../AskUsButton/AskUsButton';

const FAQ = () => {
  return (
    <section id="questions" className="pb-40 1xl:pb-55 3xl:pb-60 4xl:pb-70">
      <div className="section">
        <div className="flex flex-col 1xl:flex-row 1xl:justify-start 1xl:gap-24 4xl:gap-55">
          {/* Left: h2 + desktop-only button */}
          <div className="flex flex-col lg:flex-row  lg:justify-between 1xl:justify-start 1xl:flex-col 1xl:items-start 1xl:w-[362px] 3xl:w-[488px] 4xl:w-[534px] 1xl:gap-8.5 3xl:gap-12.5 4xl:gap-10.5 4xl:pt-2.5 mb-8 xs:mb-12 lg:mb-26.5 1xl:mb-0">
            <h2 className="leading-[110%] font-second font-medium text-center 1xl:text-left tracking-[-0.02em] whitespace-nowrap">
              Часті питання
            </h2>
            <AskUsButton targetId="more-info" className="hidden lg:flex" />
          </div>
          {/*Right: list */}
          <ul className="flex flex-col w-full gap-[58px] max-[1023px]:mb-[32px] 1xl:max-w-[902px] 3xl:max-w-[1156px] 4xl:max-w-[1486px]">
            {faqItems.map(({ title, text }, i) => (
              <li
                key={i}
                className="border-t-[0.8px] border-tuatara pt-8 flex flex-col lg:flex-row gap-3 4xl:gap-4.5 items-start lg:items-start"
              >
                <h3 className="text-[22px]/[38px] font-second font-semibold tracking-[-0.66px] lg:w-1/2 lg:flex-1 lg:basis-0">
                  {title}
                </h3>
                <p className="leading-[137%] xs:text-lg/[122%] lg:text-xl/[110%] text-boulder-dust lg:w-1/2">
                  {text}
                </p>
              </li>
            ))}
          </ul>
          {/* Mobile-only button под списком */}
          <AskUsButton targetId="more-info" className="flex lg:hidden" />
        </div>
      </div>
    </section>
  );
};
export default FAQ;
