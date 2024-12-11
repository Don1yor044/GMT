import { Col, Row, Typography } from "antd";
import { useTranslation } from "react-i18next";
export const HomeCards = () => {
  const { t } = useTranslation();
  const items = [
    {
      id: 1,
      src: "../../Symbol.png",
      title: "БыстраяДоставка",
    },
    {
      id: 2,
      src: "../../Symbol (1).png",
      title: "ВесьТоварСертифицирован",
    },
    {
      id: 3,
      src: "../../Symbol (2).png",
      title: "ГибкаяСистемаСкидок",
    },
    {
      id: 4,
      src: "../../Symbol (3).png",
      title: "ЛетНаРынке",
    },
  ];
  return (
    <div className="mt-24">
      <Typography className="text-3xl md:text-4xl font-semibold">
        {t(`ПочемуВыбираютНас`)} ?
      </Typography>
      <div className="mt-10">
        <Row gutter={[10, 20]}>
          {items.map((item) => (
            <Col xl={6} lg={6} md={6} sm={12} xs={12} key={item.id}>
              <div className="flex flex-col items-center xl:h-80 md:h-64 h-52 justify-center border rounded-xl">
                <img src={item.src} alt="" className="h-[70px]" />
                <Typography.Title
                  level={4}
                  className="px-2 mt-7 md:px-5 xl:px-20 text-center"
                >
                  {t(item.title)}
                </Typography.Title>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};
