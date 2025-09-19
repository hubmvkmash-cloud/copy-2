type Lockers = {
  imgPath: string;
  title: string;
  description: string;
};

export const lockers: Lockers[] = [
  {
    imgPath: '/images/icons-png/cargo.png',
    title: 'Зовнішні розміри',
    description: '2100 х 1100 х 650 мм (Висота х Ширина х Глибина)',
  },
  {
    imgPath: '/images/icons-png/holod.png',
    title: 'Клімат контроль',
    description: 'Промисловий холод забезпечує від 4 до 10 °С',
  },
  {
    imgPath: '/images/icons-png/cleaning.png',
    title: 'Розміри комірок',
    description: '533 х 345 х 545 мм (Висота х Ширина х Глибина)',
  },
  {
    imgPath: '/images/icons-png/service.png',
    title: 'Потужність та підключення',
    description: 'До 800 Вт/годину, 220VAC/12VDC',
  },
];
