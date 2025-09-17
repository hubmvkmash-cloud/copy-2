import { lockers } from '../../data/lockers';

const LockerType = () => {
  return (
    <section id="locker" className="pb-40 1xl:pb-55 3xl:pb-60 4xl:pb-70">
      <div className="section flex flex-col 1xl:flex-row 1xl:flex-wrap gap-18 1xl:gap-35">
        <div className="3xl:pl-69 4xl:pl-94 flex flex-col gap-[60px] lg:gap-[60px]">
          <div className="flex flex-col gap-10">
            <div className="">
              <h2 className="mb-6 3xl:mb-17 4xl:mb-15 font-second font-medium text-[32px]/[35px]">
                Технічні характеристики
              </h2>
            </div>

            <div className="flex flex-row-reverse items-center gap-5 justify-between max-[640px]:flex-col">
              <div className="flex items-center flex-col justify-center aspect-[520/352] max-w-[520px] mb-12 ml-auto">
                <img
                  alt="picture"
                  src="https://cdn.builder.io/api/v1/image/assets%2F72ae2a4d99034a3aa7809f652e4e761b%2F5e0a6aaf1b4f456c88f462786d1be943"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <ul className="flex flex-col gap-[46px] justify-center items-start">
                {lockers.map((locker, index) => {
                  return (
                    <li key={index} className="flex items-center gap-6">
                      <div className="p-4 bg-woodsmoke-dark rounded-full flex items-center justify-center max-w-16 max-h-16">
                        <img
                          src={locker.imgPath}
                          alt={`Фото ${locker.title}`}
                          className="max-w-[34px]"
                        />
                      </div>
                      <div>
                        <h3 className="text-2xl/[117%] text-mercury-white font-bold mb-4">
                          {locker.title}
                        </h3>
                        <p className="text-lg/[122%] text-mountain-mist">
                          {locker.description}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="w-full">
            <div className="grid grid-cols-1 gap-10">
              <img
                alt="picture"
                src="https://cdn.builder.io/api/v1/image/assets%2F72ae2a4d99034a3aa7809f652e4e761b%2F6cdf8a503f51429a8bd09812b01d6fb7"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <img
                alt="picture"
                src="https://cdn.builder.io/api/v1/image/assets%2F72ae2a4d99034a3aa7809f652e4e761b%2F426eb1a982404a5f80dae921bb7ac0e0"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LockerType;
