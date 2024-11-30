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
      <div className="mt-10 ">
        <Row gutter={[20, 20]}>
          <Col xl={6} lg={8} md={8} sm={12} xs={12}>
            <Row gutter={[20, 20]}>
              <Col span={24}>
                <div className="border rounded-xl h-[44vh]">
                  <div className="bg-white rounded-tl-xl rounded-tr-xl p-5">
                    <img
                      src="../../../public/category/Phtoto.png"
                      alt=""
                      className="rounded-tr-xl rounded-tl-xl h-[190px] w-[100%] object-contain"
                    />
                  </div>
                  <div className="lg:p-5 mp:p-3 px-7 border-t-2">
                    <Typography.Title level={5} className="lg:pe-10 mp:pe-0">
                      {" "}
                      {t("ДерматологическоеОборудование")}
                    </Typography.Title>
                  </div>
                </div>
              </Col>
              <Col span={24}>
                <div className="border rounded-xl h-[44vh]">
                  <div className="bg-white rounded-tl-xl rounded-tr-xl p-5">
                    <img
                      src="../../../public/category/Photo (5).png"
                      alt=""
                      className="rounded-tr-xl rounded-tl-xl h-[190px] w-[100%] object-contain"
                    />
                  </div>
                  <div className="lg:p-5 mp:p-3 px-7 border-t-2">
                    <Typography.Title level={5} className="lg:pe-10 mp:pe-0">
                      {" "}
                      {t(`ВетеринарноеОборудование`)}
                    </Typography.Title>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col xl={6} lg={8} md={8} sm={12} xs={12}>
            <Row>
              <Col span={24}>
                <div className="border rounded-xl ">
                  <div className="bg-white rounded-tl-xl rounded-tr-xl">
                    <img
                      src="../../../public/category/Photo (4).png"
                      alt=""
                      className="rounded-tr-xl rounded-tl-xl h-[570px] w-[100%] object-contain pe-10"
                    />
                  </div>
                  <div className="lg:p-5 mp:px-3 border-t-2 rounded-b-xl h-[91px]">
                    <Typography.Title level={5} className="lg:pe-14 mp:pe-2">
                      {t(`ДерматологическоеОборудование`)}
                    </Typography.Title>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col xl={6} lg={8} md={8} sm={12} xs={12}>
            <Row gutter={[20, 20]}>
              <Col span={24}>
                <div className="border rounded-xl h-[44vh]">
                  <div className="bg-white rounded-tl-xl rounded-tr-xl p-5">
                    <img
                      src="../../../public/category/Photo (6).png"
                      alt=""
                      className="rounded-tr-xl rounded-tl-xl h-[190px] w-[100%] object-contain"
                    />
                  </div>
                  <div className="lg:p-5 mp:px-3  border-t-2">
                    <Typography.Title level={5} className="lg:pe-10 mp:pe-0">
                      {t(`ОборудованиеДляАнастезиологии`)}
                    </Typography.Title>
                  </div>
                </div>
              </Col>
              <Col span={24}>
                <div className="border rounded-xl h-[44vh]">
                  <div className="bg-white rounded-tl-xl rounded-tr-xl p-5">
                    <img
                      src="../../../public/category/Photo (7).png"
                      alt=""
                      className="rounded-tr-xl rounded-tl-xl h-[190px] w-[100%] object-contain"
                    />
                  </div>
                  <div className="lg:p-5 mp:px-3 border-t-2">
                    <Typography.Title level={5} className="lg:pe-10 mp:pe-0">
                      {t(`ОборудованиеДляАнастезиологии`)}
                    </Typography.Title>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col xl={6} lg={16} md={16} sm={12} xs={12}>
            <Row gutter={[20, 20]}>
              <Col xl={24} lg={12} md={12}>
                <div className="border rounded-xl h-[44vh]">
                  <div className="bg-white rounded-tl-xl rounded-tr-xl p-5">
                    <img
                      src="../../../public/category/Photo (8).png"
                      alt=""
                      className="rounded-tr-xl rounded-tl-xl h-[190px] w-[100%] object-contain"
                    />
                  </div>

                  <div className="lg:p-5 mp:px-3 border-t-2">
                    <Typography.Title level={5} className="lg:pe-28 mp:pe-0">
                      {t(`МебельДляМедицинскихЦелей`)}
                    </Typography.Title>
                  </div>
                </div>
              </Col>
              <Col xl={24} lg={12} md={12}>
                <div className="border rounded-xl h-[44vh]">
                  <div className="bg-white rounded-tl-xl rounded-tr-xl p-5">
                    <img
                      src="../../../public/category/Photo (9).png"
                      alt=""
                      className="rounded-tr-xl rounded-tl-xl h-[190px] w-[100%] object-contain"
                    />
                  </div>

                  <div className="lg:p-5 mp:px-3 border-t-2">
                    <Typography.Title level={5} className="lg:pe-10 mp:pe-0">
                      {t(`ДерматологическоеОборудование`)}
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
