import { Col, Row, Typography } from "antd";
import { t } from "i18next";

const HomeCards = () => {
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
      <Typography.Title level={2}>{t(`ПочемуВыбираютНас`)}?</Typography.Title>
      <div className="mt-10">
        <Row gutter={[10, 20]}>
          {items.map((item) => (
            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
              <div className="flex flex-col items-center xl:h-80 md:h-64 h-52 justify-center border rounded-xl">
                <img src={item.src} alt="" style={{ height: "70px" }} />
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

export default HomeCards;
