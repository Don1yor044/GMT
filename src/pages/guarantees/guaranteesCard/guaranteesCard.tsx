import { Col, Row, Typography } from "antd";
import { PrimaryButton, SecondaryButton } from "../../../components/buttons";
import { useTranslation } from "react-i18next";
export const GuaranteesCard = () => {
  const { t } = useTranslation();
  const items = [
    {
      id: 1,
      src: "../../carbon.png",
      title: "Установка, настройка и пуско-наладка медтехники",
    },
    {
      id: 2,
      src: "../../Group (3).png",
      title: "Сервисное обслуживание медицинской техники любой комплектации",
    },
    {
      id: 3,
      src: "../../Group (4).png",
      title: "Гарантийное и постгарантийное обслуживание",
    },
    {
      id: 4,
      src: "../../Symbol (2).png",
      title: "Диагностика и проведение профилактических работ",
    },
  ];
  return (
    <div className="mt-24">
      <Typography className="text-2xl md:text-4xl font-semibold">
        {t(`ПереченьГарантийныхУслуг`)}
      </Typography>
      <div className="mt-10">
        <Row gutter={[10, 20]}>
          {items.map((item) => (
            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
              <div className="flex flex-col items-center xl:h-72 md:h-64 h-64 justify-center border rounded-xl">
                <img src={item.src} alt="" className="h-[70px]" />
                <Typography className="px-1 mt-7 md:px-5 xl:px-12 text-center text-lg lg:text-xl xl:text-1xl ">
                  {t(item.title)}
                </Typography>
              </div>
            </Col>
          ))}
        </Row>
        <div className="mt-10 gap-3  flex justify-end items-center mp:flex-col sm:flex-row">
          <SecondaryButton text={t("ГарантийныйСлучай")} />
          <PrimaryButton text={t("ЗаменаТовара")} />
        </div>
      </div>
    </div>
  );
};
