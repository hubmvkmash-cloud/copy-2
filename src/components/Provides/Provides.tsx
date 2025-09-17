export default function Provides() {
  return (
    <section id="provides" className="pb-40 1xl:pb-55 3xl:pb-60 4xl:pb-70">
      <div className="section flex flex-col lg:flex-row lg:flex-wrap">
          {/* Left column: background title block */}
          <div className="flex flex-col w-[48%] mr-auto mb-5 lg:mb-0">
            <h2 className="font-second font-medium text-center mr-auto mb-[40px]">
              Як це працює?
            </h2>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets%2F72ae2a4d99034a3aa7809f652e4e761b%2F2eed2cabd7bb4c308d76431764a8bf3a"
              className="w-full self-stretch object-contain"
              alt="Як це працює"
            />
          </div>

          {/* Right column: content lists */}

            <div className="flex flex-col mr-auto w-[48%]">
              <ul className="flex flex-wrap text-boulder-dust text-[20px]/[22px] gap-y-[54px] gap-x-1.5 mb-[54px] max-[991px]:flex-col max-[991px]:items-stretch">
                <li className="tracking-[0.02em] 3xl:tracking-[0.07em] 1xl:tracking-normal lg:max-w-114 1xl:max-w-[440px] 3xl:max-w-[544px] 4xl:max-w-[732px]">Флоромат (квіткомат) - обладнання для продажу авторських квіткових композицій та сувенірів.</li>
                <li className="tracking-[0.02em] 3xl:tracking-[0.07em] 1xl:tracking-normal lg:max-w-114 1xl:max-w-[440px] 3xl:max-w-[544px] 4xl:max-w-[732px]">Таке обладнання забезпечує автономну реалізацію квітів без участі продавців.</li>
                <li className="tracking-[0.02em] 3xl:tracking-[0.07em] 1xl:tracking-normal lg:max-w-114 1xl:max-w-[440px] 3xl:max-w-[544px] 4xl:max-w-[732px]">Ми надаємо місце та обладнання. Ви контролюєте реалізацію та прибуток.</li>
              </ul>

              <ul className="flex flex-wrap text-[18px]/[28px] font-semibold gap-y-[42px] gap-x-1.5">
                <li className="flex gap-6 h-16 items-center max-w-[456px] w-full">
                  <span className="flex justify-start lg:justify-center items-center w-16 h-16 rounded-full bg-woodsmoke-dark shrink-0">
                    <img src="/images/icons-png/cleaning.png" alt="Іконка" className="max-w-[34px] mx-auto lg:mx-0" />
                  </span>
                  <div className="sm:m-0 mb-[-2px] mr-auto ml-0">Цілодобові продажі 24 години на добу, 7 днів на тиждень</div>
                </li>
                <li className="flex gap-6 h-16 items-center max-w-[456px] w-full">
                  <span className="flex justify-start lg:justify-center items-center w-16 h-16 rounded-full bg-woodsmoke-dark shrink-0">
                    <img src="/images/icons-png/health.png" alt="Іконка" className="max-w-[26px] mx-auto lg:mx-0" />
                  </span>
                  <div className="pt-2 my-auto mr-[-4px] ml-0">Швидка окупність інвестицій до двох років</div>
                </li>
                <li className="flex gap-6 h-16 items-center max-w-[456px] w-full">
                  <span className="flex justify-start lg:justify-center items-center w-16 h-16 rounded-full bg-woodsmoke-dark shrink-0">
                    <img src="/images/icons-png/flowers.png" alt="Іконка" className="max-w-[34px] mx-auto lg:mx-0" />
                  </span>
                  <div className="lg:mr-0 mr-[-1px] sm:pt-0 pt-5">Автоматизація процесу та ди��танційне керування через мобільний додаток</div>
                </li>
                <li className="flex gap-6 h-16 items-center max-w-[456px] w-full">
                  <span className="flex justify-start lg:justify-center items-center w-16 h-16 rounded-full bg-woodsmoke-dark shrink-0">
                    <img src="/images/icons-png/cargo.png" alt="Іконка" className="max-w-[34px] mx-auto lg:mx-0" />
                  </span>
                  <div className="w-full sm:w-auto flex-grow-0 sm:flex-grow my-auto sm:my-0 sm:pt-0 pt-[11px]">Найкраща локація з найбільшим пішим трафіком</div>
                </li>
                <li className="flex gap-6 h-16 items-center max-w-[456px] w-full">
                  <span className="flex justify-start lg:justify-center items-center w-16 h-16 rounded-full bg-woodsmoke-dark shrink-0">
                    <img src="/images/icons-png/secure.png" alt="Іконка" className="max-w-[34px] mx-auto lg:mx-0" />
                  </span>
                  <div className="sm:mt-0 mt-[1px] sm:pt-0 pt-[22px]">Безпечна конструкція із системою сигналізації та відоспостереження</div>
                </li>
              </ul>
            </div>
      </div>
    </section>
  );
}
