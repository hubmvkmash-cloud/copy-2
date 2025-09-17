import { information } from '../../data/information';

const Information = () => {
  return (
    <section
      id="information"
      className="pb-40 1xl:pb-[220px] 3xl:pb-60 4xl:pb-70"
    >
      <div className="section flex flex-col">
        <div className="mb-9 1xl:mb-[64px] 3xl:mb-17 4xl:mb-15 flex items-center justify-between">
          <h2 className="font-second font-medium text-[32px]/[35px]">
            Метрики та фінанcові показники
          </h2>
          <img src="/images/info.png" alt="Стрілка" className="w-5 h-5" />
        </div>

        <div className="flex items-center justify-between ml-auto lg:w-[33%]">
          <div className="relative text-right lg:text-center text-[18px] mx-auto">
            Середні показники/ місяць
          </div>
        </div>

        <ul className="flex flex-col gap-[26px]">
          {information.map((info, index) => {
            return (
              <li
                key={index}
                className="border-t-[1.6px] border-tuatara/75 pt-8 flex flex-col lg:flex-row max-[1023px]:gap-[50px] gap-[100px]"
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
                <div className="flex justify-between text-[24px]/[21px] text-boulder-dust font-medium min-w-[240px] max-[991px]:min-w-[340px] lg:min-w-[33%] shrink-0">
                  <p>{info.price}</p>
                  <p
                    className={
                      [
                        'ml-[23px]',
                        'ml-[22px]',
                        'ml-[26px]',
                        'ml-[26px]',
                        'ml-[28px]',
                      ][index] ?? ''
                    }
                  >
                    {info.duration}
                  </p>
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
