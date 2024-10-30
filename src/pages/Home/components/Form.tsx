import { Col, Form, Input, Row, Typography } from "antd";
import { PrimaryButton } from "../../../components/Buttons";
import { t } from "i18next";

const HomeForm = () => {
  return (
    <div className="px-2">
      <Row gutter={[10, 20]}>
        <Col md={12} xs={24}>
          adsasd
        </Col>
        <Col md={12} xs={24}>
          <div className="bg-white lg:p-10 mp:p-3 border rounded-xl ">
            <div className="w-full xl:pe-52">
              <Typography.Title level={2}>
                {t(`ОсталисьВопросы`)} ?
              </Typography.Title>
              <Typography.Title
                level={5}
                style={{ fontWeight: 400, color: "#7A7687" }}
              >
                {t(`ОсталисьВопросыНомер`)}
              </Typography.Title>
            </div>
            <div style={{ maxWidth: "100%", marginTop: "40px" }}>
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
                    style={{ fontWeight: 400, fontSize: 16 }}
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

export default HomeForm;
