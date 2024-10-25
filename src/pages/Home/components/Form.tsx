import { Col, Form, Input, Row, Typography } from "antd";
import { PrimaryButton } from "../../../components/Buttons";

const HomeForm = () => {
  return (
    <div className="px-2">
      <Row gutter={[10, 20]}>
        <Col span={12}></Col>
        <Col span={12}>
          <div className="bg-white p-10 border rounded-xl">
            <Typography.Title level={2}>Остались вопросы?</Typography.Title>
            <Typography.Title
              level={5}
              style={{ fontWeight: 400, color: "#7A7687" }}
            >
              Задайте их по номеру телефона +7 (495) 000-00-00 <br /> или
              оставьте свои координаты и наш менеджер <br /> перезвонит вам
              через 10 минут
            </Typography.Title>
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
                    placeholder="Ваше имя"
                  />
                </Form.Item>
                <Form.Item
                  name="phone"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your phone number",
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
                    placeholder="Ваш телефон"
                  />
                </Form.Item>

                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: "Please enter your email" },
                    { type: "email", message: "Please enter a valid email" },
                  ]}
                >
                  <Input
                    bordered={false}
                    style={{
                      borderBottom: "1px solid #ccc",
                      padding: "10px",
                      fontSize: "16px",
                    }}
                    placeholder="Ваш email"
                  />
                </Form.Item>

                <Form.Item
                  name="question"
                  rules={[
                    { required: true, message: "Please enter your question" },
                  ]}
                >
                  <Input.TextArea
                    bordered={false}
                    style={{
                      borderBottom: "1px solid #ccc",
                      minHeight: "120px",
                      maxHeight: "120px",
                      fontSize: "16px",
                    }}
                    placeholder="Ваш вопрос"
                  />
                </Form.Item>

                <div className="flex gap-5 mt-10">
                  <Form.Item className="w-52">
                    <PrimaryButton text="Отправить" size={100} />
                  </Form.Item>
                  <Typography
                    className="!text-[#7A7687]"
                    style={{ fontWeight: 400, fontSize: 16 }}
                  >
                    Нажимая «Отправить», я соглашаюсь c обработкой персональных
                    данных на условиях{" "}
                    <span className="text-[#088269]">
                      Политики конфиденциальности
                    </span>
                    .
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
