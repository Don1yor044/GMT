import { Col, Row, Typography } from "antd";
import { PrimaryButton } from "../../../components/buttons";
import { useTranslation } from "react-i18next";

const Cards = () => {
  const { t } = useTranslation();
  const items = [
    {
      id: 1,
      src: "../../Subtract.png",
      title: "ДоставкаПоВсейРоссииИУзбекистану",
    },
    {
      id: 2,
      src: "../../Group (3).png",
      title: "СобственныйСкладСПродукцией",
    },
    {
      id: 3,
      src: "../../Symbol (1).png",
      title: "ВесьТоварСертифицирован",
    },
    {
      id: 4,
      src: "../../Group (4).png",
      title: "БезопасныеСпособыОплаты",
    },
  ];
  return (
    <>
      <div className="flex justify-between items-center">
        <Typography className="text-2xl font-semibold md:text-4xl">
          {t(`С нами выгодно и удобно`)}
        </Typography>
        <div className="hidden lg:hidden md:flex">
          <PrimaryButton text={t("ПроверитьСтатусДоставки")} />
        </div>
      </div>
      <div className="mt-10">
        <Row gutter={[10, 20]}>
          {items.map((item) => (
            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
              <div className="flex flex-col items-center xl:h-80 md:h-64 h-52 justify-center border rounded-xl">
                <img src={item.src} alt="" style={{ height: "70px" }} />
                <Typography.Title
                  level={4}
                  className="px-2 mt-7 md:px-5 xl:px-16 xl:pl-20 text-center"
                >
                  {t(item.title)}
                </Typography.Title>
              </div>
            </Col>
          ))}
        </Row>
        <div className="mt-16 flex lg:justify-end mp:justify-center lg:flex md:hidden">
          <PrimaryButton text={t("ПроверитьСтатусДоставки")} />
        </div>
      </div>
    </>
  );
};

export default Cards;
