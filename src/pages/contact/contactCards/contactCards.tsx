import { PrimaryButton } from "components";
import styled from "@emotion/styled";
import {
  FullscreenControl,
  GeolocationControl,
  Map,
  Placemark,
  TypeSelector,
  YMaps,
} from "@pbe/react-yandex-maps";
import { Button, Col, Form, Input, Row, Typography } from "antd";
import { useTranslation } from "react-i18next";
import { BiLogoVk } from "react-icons/bi";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { GoClock } from "react-icons/go";
import { HiOutlineMail } from "react-icons/hi";
import { LuMapPin } from "react-icons/lu";
import { PiPhoneLight } from "react-icons/pi";
import { IOptionManager } from "yandex-maps";
interface ExtendedOptionManager extends IOptionManager {
  float?: string;
}

export const ContactCards = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="mt-10">
        <Row gutter={[10, 10]}>
          <Col lg={12} span={24}>
            <div className="bg-white lg:p-10 mp:p-3 border rounded-xl">
              <Typography className="text-3xl font-semibold">
                {t(`ООО Глобал Медикал Трейд`)}
              </Typography>
              <div className="flex gap-2 mt-2">
                <div className="text-[#7A7687] mt-1">
                  <LuMapPin size={19} />
                </div>
                <div>
                  <Typography className="text-lg text-[#7A7687]">
                    {t(`Юридический адрес`)}:
                  </Typography>
                  <Typography className="text-lg">
                    {t(`Россия, г. Москва, ул. Докукина, 8, стр. 2`)}
                  </Typography>
                </div>
              </div>
              <div className="flex gap-2 mt-2">
                <div className="text-[#7A7687] mt-1">
                  <LuMapPin size={19} />
                </div>
                <div>
                  <Typography className="text-lg text-[#7A7687]">
                    {t(`Фактический адрес`)}:
                  </Typography>
                  <Typography className="text-lg">
                    {t(`Россия, г. Москва, ул. Докукина, 8, стр. 2`)}
                  </Typography>
                </div>
              </div>
              <div className="flex gap-2 mt-2">
                <div className="text-[#7A7687] mt-1">
                  <GoClock size={19} />
                </div>
                <div>
                  <Typography className="text-lg text-[#7A7687]">
                    {t(`РежимРаботы`)}:
                  </Typography>
                  <Typography className="text-lg">
                    {t(`РабочееВремя`)}
                  </Typography>
                  <Typography className="text-lg">{t(`Отдых`)}</Typography>
                </div>
              </div>
              <div className="mt-3">
                <Typography className="font-semibold text-2xl">
                  {t(`Звоните. Звонки по России бесплатны`)}:
                </Typography>
                <div className="flex gap-2 mt-2">
                  <div className="text-[#7A7687] mt-1">
                    <PiPhoneLight size={20} />
                  </div>
                  <div>
                    <Typography className="text-lg text-[#7A7687]">
                      {t(`Телефоны`)}:
                    </Typography>
                    <div className="flex gap-5 flex-wrap">
                      <Typography className="text-lg">
                        8-800-000-00-00
                      </Typography>
                      <Typography className="text-lg">
                        +7-000-000-00-00
                      </Typography>
                      <Typography className="text-lg">
                        +7-495-000-00-00
                      </Typography>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 mt-2">
                  <div className="text-[#7A7687] mt-1">
                    <HiOutlineMail size={19} />
                  </div>
                  <div>
                    <Typography className="text-lg text-[#7A7687]">
                      {t(`Пишите`)}:
                    </Typography>
                    <Typography className="text-lg">info@mail.ru</Typography>
                  </div>
                </div>
              </div>
              <div className="mt-2 flex w-full gap-14 items-center flex-wrap">
                <div>
                  <Typography className="text-xl font-semibold py-1">
                    {t(`Реквизиты`)}:{" "}
                  </Typography>
                  <div className="flex gap-10">
                    <div>
                      <Typography className="text-[#7A7687] text-lg">
                        ИНН
                      </Typography>
                      <Typography className="text-lg">9717039181</Typography>
                    </div>
                    <div>
                      <Typography className="text-[#7A7687] text-lg">
                        ОГРН
                      </Typography>
                      <Typography className="text-lg">1167746796986</Typography>
                    </div>
                  </div>
                </div>
                <div>
                  <Typography.Title level={4}>
                    {t(`МыВСоцсетях`)}
                  </Typography.Title>

                  <div className="flex gap-4 mt-5">
                    <Button
                      type="text"
                      className="bg-[#088269] px-1.5 py-3 text-white"
                    >
                      <BiLogoVk size={22} />
                    </Button>
                    <Button
                      type="text"
                      className="bg-[#088269] p-1.5 py-3 text-white"
                    >
                      <FaTelegramPlane size={22} />
                    </Button>
                    <Button
                      type="text"
                      className="bg-[#088269] p-1.5 py-3 text-white"
                    >
                      <FaWhatsapp size={22} />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col span={24} sm={12} className="hidden sm:flex lg:hidden ">
            <Stylediv1>
              <YMaps
                query={{
                  apikey: "6a3a7db6-31cf-4fdc-a728-492d5bd481e1",
                  lang: "ru_RU",
                }}
              >
                <Map
                  defaultState={{
                    center: [41.326509, 69.228341],
                    zoom: 12,
                    controls: [],
                  }}
                  className="w-full h-full"
                >
                  <FullscreenControl options={{ float: "right" }} />
                  <Placemark
                    geometry={[41.326509, 69.228341]}
                    options={{
                      iconImageHref:
                        "https://cdn3.iconfinder.com/data/icons/flat-pro-basic-set-1-1/32/location-green-512.png",
                      iconLayout: "default#image",
                      iconImageSize: [40, 40],
                    }}
                  />
                  <TypeSelector
                    options={{ float: "left" } as ExtendedOptionManager}
                  />
                  <GeolocationControl options={{ float: "left" }} />
                </Map>
              </YMaps>
              <div className="absolute bottom-5 right-5">
                <PrimaryButton text={t("ПостроитьМаршрут")} />
              </div>
            </Stylediv1>
          </Col>
          <Col span={24} sm={12}>
            <div className="bg-white lg:p-8 mp:p-3 border rounded-xl h-full">
              <div className="w-full xl:pe-40">
                <Typography.Title level={2}>
                  {t(`БесплатнаяКонсультация`)} ?
                </Typography.Title>
                <Typography.Title
                  level={5}
                  style={{ fontWeight: 400, color: "#7A7687" }}
                >
                  {t(
                    `Оставьте свои координаты и наш менеджер перезвонит вам через 10 минут`
                  )}
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
          <Col lg={24} span={24} className="flex sm:hidden lg:flex ">
            {" "}
            <Stylediv>
              <YMaps
                query={{
                  apikey: "6a3a7db6-31cf-4fdc-a728-492d5bd481e1",
                  lang: "ru_RU",
                }}
              >
                <Map
                  defaultState={{
                    center: [41.326509, 69.228341],
                    zoom: 12,
                    controls: [],
                  }}
                  className="w-full h-full"
                >
                  <FullscreenControl options={{ float: "right" }} />
                  <Placemark
                    geometry={[41.326509, 69.228341]}
                    options={{
                      iconImageHref:
                        "https://cdn3.iconfinder.com/data/icons/flat-pro-basic-set-1-1/32/location-green-512.png",
                      iconLayout: "default#image",
                      iconImageSize: [40, 40],
                    }}
                  />
                  <TypeSelector
                    options={{ float: "left" } as ExtendedOptionManager}
                  />
                  <GeolocationControl options={{ float: "left" }} />
                </Map>
              </YMaps>
              <div className="absolute bottom-5 right-5 ">
                <PrimaryButton text={t("ПостроитьМаршрут")} />
              </div>
            </Stylediv>
          </Col>
        </Row>
      </div>
    </>
  );
};
const Stylediv = styled.div`
  max-height: 450px !important;
  height: 450px !important;
  width: 100%;
  position: relative;
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

const Stylediv1 = styled.div`
  min-height: 600px !important;
  height: 620px !important;
  width: 100%;
  position: relative;
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
