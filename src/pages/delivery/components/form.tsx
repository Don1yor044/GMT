import { PrimaryButton } from "@components/buttons";
import { Col, Form, Input, Row, Typography } from "antd";
import { t } from "i18next";

const DeliveryForm = () => {
  return (
    <div className="px-2 lg:px-14 md:px-5 xs:px-4 sm:px-2 md:pt-24 pt-10">
      <Row gutter={[20, 20]}>
        <Col lg={12} xs={24} span={24}>
          <div>
            <Typography.Title level={2}>
              {t(`ВамНужнаКонсультация`)} ?
            </Typography.Title>
            <Typography.Title level={5} className="xl:pr-44 md:pr-40">
              {t(`Задайте их по номеру телефона`)}{" "}
              <span className="text-[#088269]">+7 (495) 000-00-00</span>{" "}
              {t(
                `или оставьте свои координаты и наш менеджер перезвонит вам через 10 минут`
              )}
            </Typography.Title>
          </div>
        </Col>
        <Col lg={12} xs={24} span={24}>
          <div className="bg-white lg:p-10 mp:p-3 border rounded-xl h-full">
            <div className="max-w-[100%]">
              <Form layout="vertical" autoComplete="off" requiredMark={false}>
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
                    placeholder={t("ВашеИмя")}
                  />
                </Form.Item>
                <Form.Item
                  name="phone"
                  rules={[
                    {
                      required: true,
                      message: t(`Пожалуйста, введите ваш номер телефона`),
                    },
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

                <Form.Item
                  name="email"
                  rules={[
                    {
                      required: true,
                      message:
                        "Пожалуйста, введите свой адрес электронной почты",
                    },
                    {
                      type: "email",
                      message:
                        "Пожалуйста, введите действительный адрес электронной почты",
                    },
                  ]}
                >
                  <Input
                    bordered={false}
                    style={{
                      borderBottom: "1px solid #ccc",
                      padding: "10px",
                      fontSize: "16px",
                    }}
                    placeholder={t("ВашEmail")}
                  />
                </Form.Item>

                <Form.Item
                  name="question"
                  rules={[
                    {
                      required: true,
                      message: "Пожалуйста, введите ваш вопрос",
                    },
                  ]}
                >
                  <Input.TextArea
                    bordered={false}
                    style={{
                      borderBottom: "1px solid #ccc",
                      minHeight: "70px",
                      maxHeight: "120px",
                      fontSize: "16px",
                    }}
                    placeholder={t("ВашВопрос")}
                  />
                </Form.Item>

                <div className="mp:flex-row xl:flex gap-5 mt-10 ">
                  <Form.Item className="w-52">
                    <PrimaryButton text={t("Отправить")} size={100} />
                  </Form.Item>
                  <Typography
                    className="!text-[#7A7687]"
                    style={{ fontWeight: 400, fontSize: 15 }}
                  >
                    {t(`НажимаяОтправить`)}{" "}
                    <span className="text-[#088269]">
                      {t(`Политики конфиденциальности`)}.
                    </span>
                  </Typography>
                </div>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default DeliveryForm;
