import { Col, Row, Typography } from "antd";
import { useTranslation } from "react-i18next";
import { PrimaryButton } from "../buttons/index";
export const CategoryHome = () => {
  const { t } = useTranslation();
  return (
    <div className="mt-96 xs:mt-[450px] md:mt-24 lg:mt-24 mp:mt-[450px] ">
      <div className="flex justify-between items-center !pt-0 sm:pt-10 ">
        <Typography.Title level={2} className="!m-0">
          {t(`ПопулярныеКатегории`)}
        </Typography.Title>
        <div className="hidden md:flex">
          <PrimaryButton text={t(`ВсеКатегории`)} />
        </div>
      </div>
      <div className="mt-10">
        <Row gutter={[16, 16]}>
          {/* First column */}
          <Col xxl={6} xl={6} lg={8} md={12} sm={24} xs={24}>
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <div className="border rounded-xl h-full">
                  <div className="bg-white rounded-tl-xl rounded-tr-xl p-3 p-md-4">
                    <img
                      src="../category/Photo.png"
                      alt="Dermatological Equipment"
                      className="rounded-tr-xl rounded-tl-xl w-full object-contain"
                      style={{ height: "180px" }}
                    />
                  </div>
                  <div className="p-3 p-md-4 border-t-2">
                    <Typography.Title level={5} className="m-0">
                      {t("ДерматологическоеОборудование")}
                    </Typography.Title>
                  </div>
                </div>
              </Col>
              <Col span={24}>
                <div className="border rounded-xl h-full">
                  <div className="bg-white rounded-tl-xl rounded-tr-xl p-3 p-md-4">
                    <img
                      src="../category/Photo (5).png"
                      alt="Veterinary Equipment"
                      className="rounded-tr-xl rounded-tl-xl w-full object-contain"
                      style={{ height: "180px" }}
                    />
                  </div>
                  <div className="p-3 p-md-4 border-t-2">
                    <Typography.Title level={5} className="m-0">
                      {t("ВетеринарноеОборудование")}
                    </Typography.Title>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>

          {/* Second column - tall card */}
          <Col xxl={6} xl={6} lg={8} md={12} sm={24} xs={24}>
            <div className="border rounded-xl h-full">
              <div className="bg-white rounded-tl-xl rounded-tr-xl p-3 p-md-4">
                <img
                  src="../category/Photo (4).png"
                  alt="Dermatological Equipment"
                  className="rounded-tr-xl rounded-tl-xl w-full object-contain md:h-[460px] h-[270px]"
                  // style={{ height: "460px" }}
                />
              </div>
              <div className="p-3 p-md-4 border-t-2">
                <Typography.Title level={5} className="m-0">
                  {t("ДерматологическоеОборудование")}
                </Typography.Title>
              </div>
            </div>
          </Col>

          {/* Third column */}
          <Col xxl={6} xl={6} lg={8} md={24} sm={24} xs={24}>
            <Row gutter={[16, 16]}>
              <Col span={24} lg={24} md={12}>
                <div className="border rounded-xl h-full">
                  <div className="bg-white rounded-tl-xl rounded-tr-xl p-3 p-md-4">
                    <img
                      src="../category/Photo (6).png"
                      alt="Anesthesiology Equipment"
                      className="rounded-tr-xl rounded-tl-xl w-full object-contain"
                      style={{ height: "180px" }}
                    />
                  </div>
                  <div className="p-3 p-md-4 border-t-2">
                    <Typography.Title level={5} className="m-0">
                      {t("ОборудованиеДляАнастезиологии")}
                    </Typography.Title>
                  </div>
                </div>
              </Col>
              <Col span={24} lg={24} md={12}>
                <div className="border rounded-xl h-full">
                  <div className="bg-white rounded-tl-xl rounded-tr-xl p-3 p-md-4">
                    <img
                      src="../category/Photo7.png"
                      alt="Anesthesiology Equipment"
                      className="rounded-tr-xl rounded-tl-xl w-full object-contain"
                      style={{ height: "180px" }}
                    />
                  </div>
                  <div className="p-3 p-md-4 border-t-2">
                    <Typography.Title level={5} className="m-0">
                      {t("ОборудованиеДляАнастезиологии")}
                    </Typography.Title>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>

          {/* Fourth column */}
          <Col xxl={6} xl={6} lg={24} md={24} sm={24} xs={24}>
            <Row gutter={[16, 16]}>
              <Col xxl={24} xl={24} lg={12} md={12} sm={12} xs={24}>
                <div className="border rounded-xl h-full">
                  <div className="bg-white rounded-tl-xl rounded-tr-xl p-3 p-md-4">
                    <img
                      src="../category/Photo8.png"
                      alt="Medical Furniture"
                      className="rounded-tr-xl rounded-tl-xl w-full object-contain"
                      style={{ height: "180px" }}
                    />
                  </div>
                  <div className="p-3 p-md-4 border-t-2">
                    <Typography.Title level={5} className="m-0">
                      {t("МебельДляМедицинскихЦелей")}
                    </Typography.Title>
                  </div>
                </div>
              </Col>
              <Col xxl={24} xl={24} lg={12} md={12} sm={12} xs={24}>
                <div className="border rounded-xl h-full">
                  <div className="bg-white rounded-tl-xl rounded-tr-xl p-3 p-md-4">
                    <img
                      src="../category/Photo (9).png"
                      alt="Dermatological Equipment"
                      className="rounded-tr-xl rounded-tl-xl w-full object-contain"
                      style={{ height: "180px" }}
                    />
                  </div>
                  <div className="p-3 p-md-4 border-t-2">
                    <Typography.Title level={5} className="m-0">
                      {t("ДерматологическоеОборудование")}
                    </Typography.Title>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <div className="md:hidden flex justify-center mt-10">
        <PrimaryButton text={t(`ВсеКатегории`)} />
      </div>
    </div>
  );
};
