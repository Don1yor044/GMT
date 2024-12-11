import { Col, Form, Input, Row, Typography } from "antd";
import { PrimaryButton } from "../buttons";
import {
  FullscreenControl,
  Map,
  Placemark,
  TypeSelector,
  YMaps,
} from "@pbe/react-yandex-maps";
import styled from "@emotion/styled";
import { IOptionManager } from "yandex-maps";
import { useTranslation } from "react-i18next";
interface ExtendedOptionManager extends IOptionManager {
  float?: string;
}
export const HomeForm = () => {
  const { t } = useTranslation();
  return (
    <div className="px-3 lg:px-14 md:px-5 xs:px-4 sm:px-3 mt-24">
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
                <TypeSelector
                  options={{ float: "left" } as ExtendedOptionManager}
                />
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
            <div className="max-w-[100%] mt-[40px]">
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
