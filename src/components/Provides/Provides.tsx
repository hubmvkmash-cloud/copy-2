export default function Provides() {
  return (
    <section id="provides" className="pb-40 1xl:pb-55 3xl:pb-60 4xl:pb-70">
      <div className="section flex flex-col 1xl:flex-row 1xl:flex-wrap">
          {/* Left column: background title block */}
          <div className="flex flex-col w-1/2 mr-auto">
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
          <div className="flex flex-col w-1/2 justify-start items-start">
            <div className="flex flex-col gap-10 sm:gap-15 items-center justify-center lg:items-start lg:justify-start pr-[2px] mt-[4px] mr-[-2px] ml-[5px]">
              <ul className="flex flex-col items-center sm:items-stretch lg:items-start justify-center lg:flex-wrap lg:justify-start text-boulder-dust text-[20px]/[22px] gap-y-6 gap-x-1.5 mr-[-1px]">
                <li className="max-w-[456px] tracking-[0.02em]">Флоромат (квіткомат) - обладнання для продажу авторських квіткових композицій та сувенірів.</li>
                <li className="max-w-[456px] tracking-[0.02em]">Таке обладнання забезпечує автономну реалізацію квітів без участі продавців.</li>
                <li className="max-w-[456px] tracking-[0.02em] order-3">Ми надаємо місце та обладнання. Ви контролюєте реалізацію та прибуток.</li>
              </ul>

              <ul className="flex flex-col items-start text-mercury-white font-semibold text-[18px]/[28px] gap-y-6 sm:gap-y-12 gap-x-1.5 pb-[31px] mt-0 mr-0 mb-[-1px] ml-[-3px]">
                <li className="flex gap-4 items-center h-16 w-[452px] lg:w-[452px]">
                  <span className="flex justify-start lg:justify-center items-center w-16 h-16 rounded-full bg-woodsmoke-dark shrink-0">
                    <img src="/images/icons-png/cleaning.png" alt="Іконка" className="max-w-[34px] mx-auto lg:mx-0" />
                  </span>
                  <div className="sm:m-0 mb-[-2px] mr-auto ml-0">Цілодобові продажі 24 години на добу, 7 днів на тиждень</div>
                </li>
                <li className="flex gap-4 items-center h-16 w-[452px] lg:w-[452px] mt-[14px] mb-[12px]">
                  <span className="flex justify-start lg:justify-center items-center w-16 h-16 rounded-full bg-woodsmoke-dark shrink-0">
                    <img src="/images/icons-png/health.png" alt="Іконка" className="max-w-[26px] mx-auto lg:mx-0" />
                  </span>
                  <div className="pt-2 my-auto mr-[-4px] ml-0">Швидка окупність інвестицій до двох років</div>
                </li>
                <li className="flex gap-4 items-center h-16 w-[452px] lg:w-[452px] mb-[12px]">
                  <span className="flex justify-start lg:justify-center items-center w-16 h-16 rounded-full bg-woodsmoke-dark shrink-0">
                    <img src="/images/icons-png/flowers.png" alt="Іконка" className="max-w-[34px] mx-auto lg:mx-0" />
                  </span>
                  <div className="lg:mr-0 mr-[-1px] sm:pt-0 pt-5">Автоматизація процесу та дистанційне керування через мобільний додаток</div>
                </li>
                <li className="flex gap-4 items-center h-16 w-[452px] lg:w-[452px] mt-[6px] mb-[20px]">
                  <span className="flex justify-start lg:justify-center items-center w-16 h-16 rounded-full bg-woodsmoke-dark shrink-0">
                    <img src="/images/icons-png/cargo.png" alt="Іконка" className="max-w-[34px] mx-auto lg:mx-0" />
                  </span>
                  <div className="w-full sm:w-auto flex-grow-0 sm:flex-grow my-auto sm:my-0 sm:pt-0 pt-[11px]">Найкраща локація з найбільшим пішим трафіком</div>
                </li>
                <li className="flex gap-4 items-center h-16 w-[452px] lg:w-[452px]">
                  <span className="flex justify-start lg:justify-center items-center w-16 h-16 rounded-full bg-woodsmoke-dark shrink-0">
                    <img src="/images/icons-png/secure.png" alt="Іконка" className="max-w-[34px] mx-auto lg:mx-0" />
                  </span>
                  <div className="sm:mt-0 mt-[1px] sm:pt-0 pt-[22px]">Безпечна конструкція із системою сигналізації та відоспостереження</div>
                </li>
              </ul>
            </div>
          </div>
      </div>
    </section>
  );
}
