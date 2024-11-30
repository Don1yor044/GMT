import { About } from "@components/about";
import { BreadcrumbTwo } from "@components/breadCrumb";
import { PrimaryButton } from "@components/buttons";
import { HomeCards } from "@components/cards";
import { Footer } from "@components/footer";
import { HomeForm } from "@components/form";
import { Header } from "@components/header";
import { HomeSubscription } from "@components/subscription";
import { Col, Form, Input, Row, Typography } from "antd";
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
      <Header />
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
        <div className="flex gap-2 bg-white my-20 rounded-xl border md:p-10 p-2 ">
          <Row gutter={[10, 10]}>
            <Col span={24} md={12} className="flex-wrap">
              <Typography className="sm:text-4xl text-xl">
                {t(`Закажите у нас комплексное оснащение`)}
              </Typography>
            </Col>
            <Col span={24} md={12}>
              <div className="lg:w-[90%] w-full">
                <Form.Item
                  name="name"
                  rules={[
                    { required: true, message: "Please enter your name" },
                  ]}
                >
                  <Input
                    bordered={false}
                    style={{
                      borderBottom: "1px solid #ccc",
                      padding: "10px",
                      fontSize: "16px",
                    }}
                    placeholder={t("ВашТелефон")}
                  />
                </Form.Item>
                <div className="sm:flex gap-5 items-center ">
                  <div className="sm:w-[24%] w-[30%]">
                    <PrimaryButton text={t("Заказать")} size={100} />
                  </div>
                  <div className="flex-1">
                    <Typography className="text-[#7A7687]">
                      {t(`НажимаяОтправить`)}{" "}
                      <span className="text-[#088269]">
                        {t(`Политики конфиденциальности`)}.
                      </span>
                    </Typography>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <About />
      <HomeForm />
      <HomeSubscription />
      <Footer />
    </>
  );
};
