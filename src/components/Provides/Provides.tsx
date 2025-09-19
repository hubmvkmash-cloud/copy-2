export default function Provides() {
  return (
    <section id="provides" className="pb-40 1xl:pb-55 3xl:pb-60 4xl:pb-70">
      <div className="section flex flex-col">
        <div className="mb-10">
          <h2 className="text-left font-second font-medium leading-[138%] 1xl:text-[42px]/[138%]">
            Як це працює?
          </h2>
        </div>

        <div className="flex w-full gap-12 flex-row">
          {/* Left image */}
          <div className="w-full 1xl:w-[32%] 1xl:max-w-[32%] 1xl:mr-auto mb-5">
            <img
              loading="lazy"
              alt="Як це працює"
              src="https://cdn.builder.io/api/v1/image/assets%2F72ae2a4d99034a3aa7809f652e4e761b%2Fd5a0a1a7b2954541b532325e8a01dcce"
              className="w-full object-contain"
            />
          </div>

          {/* Right content */}
          <div className="w-full 1xl:w-[65%] 1xl:max-w-[65%] mr-auto">
            {/* Intro bullets */}
            <ul className="flex flex-wrap gap-x-1.5 gap-y-10 text-boulder-dust text-[20px]/[110%] mb-10">
              <li className="max-w-[49%] w-full lg:w-[49%] pr-[29px]">
                Флоромат (квіткомат) - обладнання для продажу авторських
                квіткових композицій та сувенірів.
              </li>
              <li className="max-w-[49%] w-full lg:w-[49%]">
                Таке обладнання забезпечує автономну реалізацію квітів без
                участі продавців.
              </li>
              <li className="max-w-[49%] w-full lg:w-[49%]">
                Ми надаємо місце та обладнання. Ви кон��ролюєте реалізацію та
                прибуток.
              </li>
            </ul>

            {/* Feature list */}
            <ul className="flex flex-wrap gap-x-1.5 gap-y-10 text-[18px]/[28px] font-semibold">
              <li className="flex items-center gap-6 h-16 max-w-[49%] w-full lg:w-[49%]">
                <span className="flex justify-center items-center w-16 h-16 rounded-full bg-woodsmoke-dark shrink-0">
                  <img
                    src="https://7dd4ab0b020240d4892775eeccdad6ca-04ab0c36-6ec6-48d2-8410-fa7af2.fly.dev/images/icons-png/cleaning.png"
                    alt="Іконка"
                    className="max-w-8.5"
                  />
                </span>
                <p>Цілодобові продажі 24 години на добу, 7 днів на тиждень</p>
              </li>

              <li className="flex items-center gap-6 h-16 max-w-[49%] w-full lg:w-[49%]">
                <span className="flex justify-center items-center w-16 h-16 rounded-full bg-woodsmoke-dark shrink-0">
                  <img
                    src="https://7dd4ab0b020240d4892775eeccdad6ca-04ab0c36-6ec6-48d2-8410-fa7af2.fly.dev/images/icons-png/health.png"
                    alt="Іконка"
                    className="max-w-[26px]"
                  />
                </span>
                <p className="pt-2 -mr-1">Швидка окупність інвестицій до двох років</p>
              </li>

              <li className="flex items-center gap-6 h-16 max-w-[49%] w-full lg:w-[49%]">
                <span className="flex justify-center items-center w-16 h-16 rounded-full bg-woodsmoke-dark shrink-0">
                  <img
                    src="https://7dd4ab0b020240d4892775eeccdad6ca-04ab0c36-6ec6-48d2-8410-fa7af2.fly.dev/images/icons-png/flowers.png"
                    alt="Іконка"
                    className="max-w-8.5"
                  />
                </span>
                <p>
                  Рекомендації формату та ціноутворення квіткових композицій
                </p>
              </li>

              <li className="flex items-center gap-6 h-16 max-w-[49%] w-full lg:w-[49%]">
                <span className="flex justify-center items-center w-16 h-16 rounded-full bg-woodsmoke-dark shrink-0">
                  <img
                    src="https://7dd4ab0b020240d4892775eeccdad6ca-04ab0c36-6ec6-48d2-8410-fa7af2.fly.dev/images/icons-png/cargo.png"
                    alt="Іконка"
                    className="max-w-8.5"
                  />
                </span>
                <p>Логістика: оптимізація витрат та часу</p>
              </li>

              <li className="flex items-center gap-6 h-16 max-w-[49%] w-full lg:w-[49%]">
                <span className="flex justify-center items-center w-16 h-16 rounded-full bg-woodsmoke-dark shrink-0">
                  <img
                    src="https://7dd4ab0b020240d4892775eeccdad6ca-04ab0c36-6ec6-48d2-8410-fa7af2.fly.dev/images/icons-png/secure.png"
                    alt="Іконка"
                    className="max-w-8.5"
                  />
                </span>
                <p>Послуга "Під ключ"</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
