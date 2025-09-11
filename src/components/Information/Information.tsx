import { information } from '../../data/information';

const Information = () => {
  return (
    <section id="information" className="pb-[99px] sm:pb-40 1xl:pb-55 3xl:pb-60 4xl:pb-70">
      <div className="section flex flex-col max-w-[375px] sm:max-w-none px-3 sm:px-0 mx-auto">
        <div className="mb-9 1xl:mb-20 3xl:mb-17 4xl:mb-15 flex items-center justify-between">
          <h2 className="leading-[110%] font-second font-medium">
            Метрики та фінансові показники
          </h2>
          <img
            src="/images/info.png"
            alt="Стрілка"
            className="hidden xs:block w-5 h-5 1xl:w-10 1xl:h-10"
          />
        </div>

        <div className="relative mt-5 text-right">Середні показники/ місяць</div>

        <ul className="flex flex-col gap-12 sm:gap-20 lg:gap-18">
          {information.map((info, index) => {
            return (
              <li
                key={index}
                className="border-t border-tuatara/75 pt-8 flex flex-col lg:flex-row gap-2.5 sm:gap-[100px] 3xl:gap-63 4xl:gap-90"
              >
                <p className="text-[36px]/[31px] text-boulder-dust font-medium">
                  {info.number}
                </p>
                <div className="flex flex-col gap-4 lg:w-[604px] 1xl:w-[680px] 3xl:w-[710px] 4xl:w-[768px]">
                  <h3 className="text-2xl/[100%] xs:text-[32px]/[87%] text-mercury-white font-semibold">
                    {info.title}
                  </h3>
                  <p className="text-lg/[122%] text-boulder-dust">
                    {info.description}
                  </p>
                </div>
                <div className="flex justify-between text-2xl/[87%] 1xl:text-[32px]/[87%] text-boulder-dust font-medium lg:min-w-60 1xl:min-w-105 3xl:min-w-126 4xl:min-w-183 shrink-0">
                  <p>{info.price}</p>
                  <p>{info.duration}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Information;
