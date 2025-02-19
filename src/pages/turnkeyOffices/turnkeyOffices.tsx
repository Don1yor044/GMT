import {
  About,
  TurnkeyForm,
  BreadcrumbTwo,
  HomeCards,
  HomeForm,
  HomeSubscription,
} from "components";
import { Col, Row, Typography } from "antd";
import { useTranslation } from "react-i18next";
interface Items {
  id: number;
  img: string;
  name: string;
}

export const TurnkeyOffices = () => {
  const items: Items[] = [
    {
      id: 1,
      name: "Реанимация",
      img: "../turnkey/Rectangle (58).png",
    },
    {
      id: 2,
      name: "Реанимация",
      img: "../turnkey/Rectangle (62).png",
    },
    {
      id: 3,
      name: "Реанимация",
      img: "../turnkey/Rectangle (62).png",
    },
    {
      id: 4,
      name: "Реанимация",
      img: "../turnkey/Rectangle (58).png",
    },
    {
      id: 5,
      name: "Реанимация",
      img: "../turnkey/Rectangle (58).png",
    },
    {
      id: 6,
      name: "Реанимация",
      img: "../turnkey/Rectangle (62).png",
    },
    {
      id: 7,
      name: "Реанимация",
      img: "../turnkey/Rectangle (62).png",
    },
    {
      id: 8,
      name: "Реанимация",
      img: "../turnkey/Rectangle (58).png",
    },
    {
      id: 9,
      name: "Реанимация",
      img: "../turnkey/Rectangle (58).png",
    },
  ];
  const { t } = useTranslation();
  return (
    <>
      <div className="px-5 py-2 lg:px-14">
        <BreadcrumbTwo currentPage="Кабинеты ключ" />
        <div className="mt-5 md:mt-10 lg:mt-20">
          <Typography className="text-3xl md:text-5xl">
            {t(`КабинетыКлюч`)}
          </Typography>
          <div className="mt-5">
            <Row gutter={[20, 20]}>
              {items.map((item: Items) => (
                <Col span={24} md={12} key={item.id}>
                  <div className="bg-white border rounded-xl">
                    <img src={item.img} className="w-full" alt="not found" />
                    <div className="p-4">
                      <Typography className="text-xl">
                        {t(item.name)}
                      </Typography>
                    </div>{" "}
                  </div>
                </Col>
              ))}
            </Row>
          </div>{" "}
        </div>
        <HomeCards />
        <TurnkeyForm />
      </div>
      <About />
      <HomeForm />
      <HomeSubscription />
    </>
  );
};
