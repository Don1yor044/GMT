import { Col, Row, Typography } from "antd";

const HomeCards = () => {
  const items = [
    {
      id: 1,
      src: "../../Symbol.png",
      title: "Быстрая доставка",
    },
    {
      id: 2,
      src: "../../Symbol (1).png",
      title: "Весь товар сертифицирован",
    },
    {
      id: 3,
      src: "../../Symbol (2).png",
      title: "Гибкая система скидок",
    },
    {
      id: 4,
      src: "../../Symbol (3).png",
      title: "Лет на рынке",
    },
  ];
  return (
    <div className="mt-10">
      <Row gutter={[10, 20]}>
        {items.map((item) => (
          <Col span={6}>
            <div className="flex flex-col items-center h-80 justify-center border rounded-xl">
              <img src={item.src} alt="" style={{ height: "70px" }} />
              <Typography.Title level={4} className="mt-7 px-20 text-center">
                {item.title}
              </Typography.Title>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomeCards;
