export default function Provides() {
  return (
    <section id="provides" className="pb-40 1xl:pb-55 3xl:pb-60 4xl:pb-70">
      <div className="section flex flex-col 1xl:gap-3 1xl:flex-row">
        <h2
          className="font-second tracking-[-0.02em] font-medium mb-9.5 leading-[110%] 1xl:min-w-[446px] 3xl:min-w-[572px] 4xl:min-w-[700px] 1xl:mb-0 text-center"
          style={{
            backgroundImage:
              'url(https://cdn.builder.io/api/v1/image/assets%2F72ae2a4d99034a3aa7809f652e4e761b%2F5537c778e73b4ba280b542dd39a24aed)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            color: 'rgba(0, 0, 0, 1)',
          }}
        >
          Як це працює?
        </h2>
        <div className="flex flex-col gap-15 1xl:gap-27 1xl:flex-wrap">
          <ul className="flex flex-col gap-y-6 xs:text-xl/[110%] lg:gap-x-1.5 lg:gap-y-13.5 lg:flex-row lg:flex-wrap text-boulder-dust 1xl:gap-x-3 3xl:gap-x-6">
            <li className="tracking-[0.02em] 1xl:tracking-normal 3xl:tracking-[0.07em] lg:max-w-114 1xl:max-w-[440px] 3xl:max-w-[544px] 4xl:max-w-[732px]">
              Флоромат - вендинговий апарат для продажу авторських квіткових композицій.
            </li>
            <li className="tracking-[0.02em] 3xl:tracking-[0.07em] 1xl:tracking-normal lg:max-w-114 1xl:max-w-[440px] 3xl:max-w-[544px] 4xl:max-w-[732px]">
              Флоромат забезпечує автономну реалізацію квітів без участі флористів.
            </li>
            <li className="tracking-[0.02em] 3xl:tracking-[0.07em] 1xl:tracking-normal lg:max-w-114 1xl:max-w-[440px] 3xl:max-w-[544px] 4xl:max-w-[732px] order-3">
              Ми надаємо ексклюзивну можливість встановлення апарату на вокзалах Укрзалізниці.
            </li>
          </ul>

          <ul className="flex flex-col text-mercury-white font-semibold gap-y-6 xs:gap-y-10.5 lg:flex-row lg:flex-wrap lg:gap-x-1.5 1xl:gap-y-16 1xl:gap-x-3 3xl:gap-x-6 xs:text-lg/[156%] 1xl:font-bold 1xl:text-[22px]/[127%] 4xl:text-[28px]/[136%]">
            <li className="flex gap-6 lg:gap-4 h-16 items-center w-full lg:w-[452px] 1xl:w-[440px] 3xl:w-[544px] 4xl:w-[732px]">
              <span className="flex justify-center items-center w-16 h-16 rounded-full bg-woodsmoke-dark shrink-0">
                <img
                  src="/images/icons-png/cleaning.png"
                  alt="Іконка"
                  className="max-w-6.5 xs:max-w-8.5"
                />
              </span>
              <p>Цілодобові продажі 24 години на добу, 7 днів на тиждень</p>
            </li>
            <li className="flex gap-6 lg:gap-4 h-16 items-center w-full lg:w-[452px] 1xl:w-[440px] 3xl:w-[544px] 4xl:w-[732px]">
              <span className="flex justify-center items-center w-16 h-16 rounded-full bg-woodsmoke-dark shrink-0">
                <img
                  src="/images/icons-png/health.png"
                  alt="Іконка"
                  className="max-w-6.5 xs:max-w-8.5"
                />
              </span>
              <p>Швидка окупність інвестицій до двох років</p>
            </li>
            <li className="flex gap-6 lg:gap-4 h-16 items-center w-full lg:w-[452px] 1xl:w-[440px] 3xl:w-[544px] 4xl:w-[732px]">
              <span className="flex justify-center items-center w-16 h-16 rounded-full bg-woodsmoke-dark shrink-0">
                <img
                  src="/images/icons-png/flowers.png"
                  alt="Іконка"
                  className="max-w-6.5 xs:max-w-8.5"
                />
              </span>
              <p>Автоматизація процесу та дистанційне керування через мобільний додаток</p>
            </li>
            <li className="flex gap-6 lg:gap-4 h-16 items-center w-full lg:w-[452px] 1xl:w-[440px] 3xl:w-[544px] 4xl:w-[732px]">
              <span className="flex justify-center items-center w-16 h-16 rounded-full bg-woodsmoke-dark shrink-0">
                <img
                  src="/images/icons-png/cargo.png"
                  alt="Іконка"
                  className="max-w-6.5 xs:max-w-8.5"
                />
              </span>
              <p>Найкраща локація з найбільшим пішим трафіком</p>
            </li>
            <li className="flex gap-6 lg:gap-4 h-16 items-center w-full lg:w-[452px] 1xl:w-[440px] 3xl:w-[544px] 4xl:w-[732px]">
              <span className="flex justify-center items-center w-16 h-16 rounded-full bg-woodsmoke-dark shrink-0">
                <img
                  src="/images/icons-png/secure.png"
                  alt="Іконка"
                  className="max-w-6.5 xs:max-w-8.5"
                />
              </span>
              <p>Безпечна конструкція із системою сигналізації та відоспостереження</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
