import SmartButton from '../ui/Button/SmartButton';

const Hero = () => {
  return (
    <section className="w-full relative lg:-mt-23 pb-[62px] sm:pb-40 1xl:pb-55 3xl:pb-60 4xl:pb-70 mb-[-1px]">
      <div className="flex justify-between gap-5.5 flex-col items-start 1xl:items-center 1xl:justify-center-safe max-h-full h-full">
        <div className="relative -mt-17 1xl:-mt-10.5 3xl:-mt-18 4xl:-mt-17 w-full h-screen overflow-hidden bg-[linear-gradient(to_top,_#080808_0%,_#080808_5%,_rgba(8,8,8,0.5)_100%)]">
          <video
            className="absolute top-0 left-0 z-[-1] w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            style={{ pointerEvents: 'none' }}
            poster="/images/poster.webp"
          >
            <source src="/video/video.webm" type="video/webm" />
            <source src="/video/video.mp4" type="video/mp4" />
            Ваш браузер не підтримує тег video.
          </video>

          {/* Контент поверх відео */}

          <div className="section flex flex-col justify-center lg:justify-center lg:items-center h-full max-w-[375px] sm:max-w-none px-3 sm:px-0 mx-auto mb-[-3px] sm:mb-0 pb-[9px] sm:pb-[132px]">
            <div className="lg:flex flex-col items-center lg:mb-12 4xl:mb-8.5">
              <h1 className="mt-25 1xl:mt-0 font-second text-[34px]/[1] mb-5.5 1xl:mb-3.5  1xl:text-[64px]/[1] 3xl:text-[82px]/[1] 4xl:text-[94px]/[1] font-medium text-gallery-white">
                <span className="text-tangerine block text-center mt-[200px]">Збільши прибуток</span>
                <span className="block self-center font-medium text-center sm:text-inherit">свого квіткового бізнесу</span>
              </h1>
              <p className="text-[18px]/[22px] font-normal text-alto-white max-w-[500px] text-center mb-[34px] sm:mb-0">
                <span className="xs:text-[20px]">У тебе є квітковий магазин або мрієш почати?</span>
                <br />
                <br />
                Наші Флоромати - це 24/7 продажі, мінімум витрат та лідерство в галузі.
              </p>
            </div>

            <SmartButton
              label="Рішення для бізнесу"
              href="#provides"
              className="4xl:text-[20px]/[1] mt-[3px] pt-[11px] pb-[13px] mx-auto sm:ml-auto"
              labelClassName="pt-[2px] mx-auto sm:mx-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
