import { PrimaryButton } from "components";
import { Col, Form, Input, Row, Typography } from "antd";
import { useTranslation } from "react-i18next";
export const TurnkeyForm = () => {
  const { t } = useTranslation();
  return (
    <>
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
                rules={[{ required: true, message: "Please enter your name" }]}
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
    </>
  );
};
