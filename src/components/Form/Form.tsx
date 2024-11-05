import { Col, Form, Input, Row, Typography } from "antd";
import { PrimaryButton } from "../Buttons";
import { t } from "i18next";
import {
  FullscreenControl,
  Map,
  Placemark,
  TypeSelector,
  YMaps,
} from "@pbe/react-yandex-maps";
import styled from "@emotion/styled";

const HomeForm = () => {
  return (
    <div className="px-2 lg:px-14 md:px-5 xs:px-4 sm:px-2 mt-24">
      <Row gutter={[20, 20]}>
        <Col md={12} xs={24} span={24}>
          <Stylediv className="w-full h-full mp:h-96 md:h-full">
            <YMaps>
              <Map
                defaultState={{
                  center: [41.326509, 69.228341],
                  zoom: 15,
                  controls: [],
                }}
                options={
                  {
                    scrollZoom: false,
                    draggable: false,
                  } as any
                }
                instanceRef={(instance) => {
                  if (instance) {
                    instance.behaviors.disable("scrollZoom"); // Skroll orqali zoomni o'chirish
                    instance.behaviors.disable("drag"); // Xarita ustida harakatlanishni o'chirish
                  }
                }}
                className="w-full h-full"
              >
                <FullscreenControl options={{ float: "right" }} />
                <Placemark
                  geometry={[41.326509, 69.228341]}
                  options={{
                    iconImageHref:
                      "https://cdn3.iconfinder.com/data/icons/flat-pro-basic-set-1-1/32/location-green-512.png", // Bu yerda icon o'rniga preset tanlashingiz mumkin
                    iconLayout: "default#image",
                    iconImageSize: [40, 40], // Ikona o'lchami
                  }}
                />
                <TypeSelector options={{ float: "left" } as any} />
              </Map>
            </YMaps>
          </Stylediv>
        </Col>
        <Col md={12} xs={24} span={24}>
          <div className="bg-white lg:p-10 mp:p-3 border rounded-xl h-full">
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

export default HomeForm;
const Stylediv = styled.div`
  .ymaps-2-1-79-gotoymaps {
    display: none;
  }
  .ymaps-2-1-79-gototech {
    display: none;
  }
  .ymaps-2-1-79-copyright__content-cell {
    display: none;
  }
`;
