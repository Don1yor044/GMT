import { PrimaryButton } from "components";
import { Col, Row, Typography } from "antd";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

const itemsThree = [
  {
    id: 1,
    name: "Апробация",
    img: "../../Rectangle (54).png",
  },
  {
    id: 2,
    name: "Помощь в подборе оборудования",
    img: "../../Rectangle (55).png",
  },
  {
    id: 3,
    name: "Помощь инженеров в настройке",
    img: "../../Rectangle (56).png",
  },
  {
    id: 4,
    name: "Пуско-наладочные работы",
    img: "../../Rectangle (57).png",
  },
];

export const OneChildren = () => {
  const { t } = useTranslation();
  return (
    <>
      <Typography className="text-xl">{t(`ОписаниеОборудования`)}</Typography>
      <Typography className="text-[#7A7687] mt-2">
        {t(
          `Биохимический анализатор Mindr UA-66 оснащен открытой платформой для загрузки образцов и отлично размещается на столе в кабинете врача. Функциональная сочетаемость с дополнительным модулем ISE обеспечивает увеличение «скорострельности» прибора от 100 до 300 обработанных пробирок с биоматериалом в час, а также позволит замерять показатели K, Na, Cl и Li в плазме, моче, цереброспинальной жидкости вместе с другими важными параметрами исследования.`
        )}
      </Typography>
      <Typography className="text-[#7A7687] mt-2">
        {t(
          `Прибор интуитивно понятен в использовании и техобслуживании, экономен в части финансовых затрат не реагенты. Что важно, калибровка системы аналогична той, что установлена на более современной аппаратуре, и это – идеальный вариант для небольших лабораторий, поскольку емкость погрузчика для проб меньше, чем у мощного оборудования.`
        )}
      </Typography>
      <Typography className="text-[#7A7687] mt-2">
        {t(
          `Только небольшая загрузочная емкость для образцов и химических компонентов, если сравнивать с передовой аналогичной техникой, не позволяет этой системе претендовать на принятие в ряды аппаратуры, которой оснащены крупномасштабные лаборатории.`
        )}
      </Typography>
    </>
  );
};
export const TwoChildren = () => {
  const { t } = useTranslation();
  return (
    <>
      <Typography className="text-xl">
        {t(`ТехническиеХарактеристики`)}
      </Typography>
      <Row gutter={[10, 10]} className="my-5">
        <Col span={24} lg={12}>
          <div className="gap-2 flex-wrap space-y-2">
            <div className="md:flex block gap-2">
              <Typography className="text-[#7A7687]">
                {t(`ВесОборудования`)}{" "}
                <span className="hidden md:inline">. . . . . . . . . . .</span>
              </Typography>
              <Typography className="font-semibold ">90 {t(`кг`)}</Typography>
            </div>
            <div className="md:flex block gap-2">
              <Typography className="text-[#7A7687]">
                {t(`Детектор`)}{" "}
                <span className="hidden md:inline">
                  . . . . . . . . . . . . . . . . . . . .
                </span>
              </Typography>
              <Typography className="font-semibold">
                {t(`CsI - на основе аморфного кремния`)}
              </Typography>
            </div>
            <div className="md:flex block gap-2">
              <Typography className="text-[#7A7687]">
                {t(`ВремяСканирования`)}{" "}
                <span className="hidden md:inline">. . . . . . . . .</span>
              </Typography>
              <Typography className="font-semibold">
                {t(`PAN стандарт - 12 сек`)}
              </Typography>
            </div>
            <div className="md:flex block gap-2">
              <Typography className="text-[#7A7687]">
                {t(`Размер фокусного пятна`)}{" "}
                <span className="hidden md:inline">. . . . . .</span>
              </Typography>
              <Typography className="font-semibold">0.6</Typography>
            </div>
            <div className="md:flex block gap-2">
              <Typography className="text-[#7A7687]">
                {t(`ДинамическийДиапазон`)}{" "}
                <span className="hidden md:inline">. . . . . .</span>
              </Typography>
              <Typography className="font-semibold">
                {t(`16 бит (65 536 градации серого)`)}
              </Typography>
            </div>
          </div>
        </Col>
        <Col span={24} lg={12}>
          <div className="gap-2 flex-wrap space-y-2">
            <div className="md:flex block gap-2">
              <Typography className="text-[#7A7687]">
                {t(`РабочееНапряжение`)}{" "}
                <span className="hidden md:inline">. . . . . . . . . </span>
              </Typography>
              <Typography className="font-semibold">90 {t(`кг`)}</Typography>
            </div>
            <div className="md:flex block gap-2">
              <Typography className="text-[#7A7687] ">
                {t(`МаксимальныйТок`)}{" "}
                <span className="hidden md:inline">. . . . . . . . . . .</span>
              </Typography>
              <Typography className="font-semibold">
                {t(`CsI - на основе аморфного кремния`)}
              </Typography>
            </div>
            <div className="md:flex block gap-2">
              <Typography className="text-[#7A7687]">
                {t(`Гарантия`)}{" "}
                <span className="hidden md:inline">
                  . . . . . . . . . . . . . . . . . . . . .
                </span>
              </Typography>
              <Typography className="font-semibold">
                {t(`PAN стандарт - 12 сек`)}
              </Typography>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};
export const ThreeChildren = () => {
  const { t } = useTranslation();
  return (
    <>
      <Typography className="text-xl font-semibold">
        {t(`УслугиИсервис`)}
      </Typography>
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
                    {t(item.name)}
                  </Typography>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="mt-4 flex justify-center">
        <PrimaryButton text={t("Все услуги")} />
      </div>
    </>
  );
};
export const FourChildren = () => {
  const { t } = useTranslation();
  return (
    <>
      <Typography className="text-xl font-semibold mt-2">
        {t(`ОптовымПокупателям`)}
      </Typography>
      <Typography className="text-[#7A7687] mt-2">
        {t(
          `Только небольшая загрузочная емкость для образцов и химических компонентов, если сравнивать с передовой аналогичной техникой, не позволяет этой системе претендовать на принятие в ряды аппаратуры, которой оснащены крупномасштабные лаборатории.`
        )}
      </Typography>
      <Typography className="text-md font-semibold mt-5">
        {t(`Заголовок`)}
      </Typography>
      <Typography className="text-[#7A7687] my-3">
        {t(
          `Только небольшая загрузочная емкость для образцов и химических компонентов, если сравнивать с передовой аналогичной техникой, не позволяет этой системе претендовать на принятие в ряды аппаратуры, которой оснащены крупномасштабные лаборатории.`
        )}
      </Typography>

      <div className="my-1 mb-3">
        <Link to={""} className="text-[#088269]">
          {t(`Реквизиты для оформеления заказа`)}
        </Link>
      </div>
    </>
  );
};
