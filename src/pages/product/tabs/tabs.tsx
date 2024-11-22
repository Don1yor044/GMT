import styled from "@emotion/styled";
import { Tabs, TabsProps, Typography } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
const onChange = (key: string) => {
  console.log(key);
};
const itemsThree = [
  {
    id: 1,
    name: "Апробация",
    img: "../../Rectangle (54).png",
  },
  {
    id: 2,
    name: "Помощь в подборе оборудования",
    img: "../../Rectangle (54).png",
  },
  {
    id: 3,
    name: "Помощь инженеров в настройке",
    img: "../../Rectangle (54).png",
  },
  {
    id: 4,
    name: "Пуско-наладочные работы",
    img: "../../Rectangle (54).png",
  },
];

const OneChildren = (
  <>
    <Typography className="text-xl">Описание оборудования</Typography>
    <Typography className="text-[#7A7687] mt-2">
      Биохимический анализатор Mindr UA-66 оснащен открытой платформой для
      загрузки образцов и отлично размещается на столе в кабинете врача.
      Функциональная сочетаемость с дополнительным модулем ISE обеспечивает
      увеличение «скорострельности» прибора от 100 до 300 обработанных пробирок
      с биоматериалом в час, а также позволит замерять показатели K, Na, Cl и Li
      в плазме, моче, цереброспинальной жидкости вместе с другими важными
      параметрами исследования.
    </Typography>
    <Typography className="text-[#7A7687] mt-2">
      Прибор интуитивно понятен в использовании и техобслуживании, экономен в
      части финансовых затрат не реагенты. Что важно, калибровка системы
      аналогична той, что установлена на более современной аппаратуре, и это –
      идеальный вариант для небольших лабораторий, поскольку емкость погрузчика
      для проб меньше, чем у мощного оборудования.
    </Typography>
    <Typography className="text-[#7A7687] mt-2">
      Только небольшая загрузочная емкость для образцов и химических
      компонентов, если сравнивать с передовой аналогичной техникой, не
      позволяет этой системе претендовать на принятие в ряды аппаратуры, которой
      оснащены крупномасштабные лаборатории.
    </Typography>
  </>
);
const TwoChildren = (
  <>
    <Typography className="text-xl">Технические характеристики</Typography>
    <div className="flex mt-5">
      <div className="w-full">
        <div className="flex gap-2">
          <div className="space-y-2">
            <Typography className="text-[#7A7687]">
              Вес оборудования . . . . . . . . . . .
            </Typography>
            <Typography className="text-[#7A7687] ">
              Детектор . . . . . . . . . . . . . . . . . . . .
            </Typography>
            <Typography className="text-[#7A7687]">
              Время сканирования . . . . . . . . .
            </Typography>
            <Typography className="text-[#7A7687]">
              Размер фокусного пятна . . . . . .
            </Typography>
            <Typography className="text-[#7A7687]">
              Динамический диапазон . . . . . .
            </Typography>
          </div>
          <div className="space-y-2">
            <Typography className="font-semibold">90 кг</Typography>
            <Typography className="font-semibold">
              CsI - на основе аморфного кремния
            </Typography>
            <Typography className="font-semibold">
              PAN стандарт - 12 сек
            </Typography>
            <Typography className="font-semibold">0.6</Typography>
            <Typography className="font-semibold">
              16 бит (65 536 градации серого)
            </Typography>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="flex gap-2 ">
          <div className="space-y-2">
            <Typography className="text-[#7A7687]">
              Рабочее напряжение . . . . . . . . .
            </Typography>
            <Typography className="text-[#7A7687] ">
              Максимальный ток . . . . . . . . . . .
            </Typography>
            <Typography className="text-[#7A7687]">
              Гарантия . . . . . . . . . . . . . . . . . .
            </Typography>
          </div>
          <div className="space-y-2">
            <Typography className="font-semibold">90 кг</Typography>
            <Typography className="font-semibold">
              CsI - на основе аморфного кремния
            </Typography>
            <Typography className="font-semibold">
              PAN стандарт - 12 сек
            </Typography>
          </div>
        </div>
      </div>
    </div>
  </>
);
const ThreeChildren = (
  <>
    <Typography className="text-xl">Услуги и сервис</Typography>

    <div className="mt-5">
      <Swiper
        loop={true}
        //   onSwiper={(swiper) => (swiperRef.current = swiper)} // Swiper instansiyani olish
        spaceBetween={10}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        breakpoints={{
          340: { slidesPerView: 1.5 },
          640: { slidesPerView: 2.2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {itemsThree.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="border rounded-lg">
              <img src={item.img} alt="" className="w-full" />
              <div className="p-3">
                <Typography className="text-md font-semibold">
                  {item.name}
                </Typography>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </>
);

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Описание оборудования",
    children: OneChildren,
  },
  {
    key: "2",
    label: "Характеристики и документы",
    children: TwoChildren,
  },
  {
    key: "3",
    label: "Услуги и сервис",
    children: ThreeChildren,
  },
  {
    key: "4",
    label: "Оптовым покупателям",
    children: "Content of Tab Pane 3",
  },
  {
    key: "5",
    label: "Отзывы",
    children: "Content of Tab Pane 3",
  },
];
export const TabsComp = () => {
  return (
    <div className="mt-10 border rounded-lg">
      <StyledTabs defaultActiveKey="3" items={items} onChange={onChange} />
    </div>
  );
};

const StyledTabs = styled(Tabs)`
  .ant-tabs-tab {
    padding: 10px !important; /* Label uchun padding */
  }
  .ant-tabs-content-holder {
    background-color: white !important; /* Content joyida oq rang */
    border-radius: 8px; /* Yuvarlak burchaklar */
    padding: 16px 20px;
  }
  .ant-tabs-tab {
    color: gray;
    &:hover {
      color: black;
    }
  }
  .ant-tabs-tab-active {
    .ant-tabs-tab-btn {
      color: black !important;
    }
  }
`;
