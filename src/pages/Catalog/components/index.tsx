import { Col, Row, Typography } from "antd";
import { useTranslation } from "react-i18next";

const GridCards = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Row gutter={[10, 20]}>
        <Col span={12} md={16}>
          <Row gutter={[10, 10]}>
            <Col span={24} md={12}>
              <div className="border rounded-lg" style={{ height: "44vh" }}>
                <div className="bg-white rounded-tl-lg rounded-tr-xl">
                  <img
                    src="../../catalog/image 236.png"
                    alt=""
                    className="rounded-tr-xl rounded-tl-xl"
                    style={{
                      height: "230px",
                      width: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>
                <div className="lg:p-5 mp:p-3 px-7 border-t-2">
                  <Typography className="lg:pe-10 mp:pe-0 text-base md:text-lg font-semibold">
                    {t(`ВетеринарноеОборудование`)}
                  </Typography>
                </div>
              </div>
            </Col>
            <Col span={24} md={12}>
              <div className="border rounded-lg" style={{ height: "44vh" }}>
                <div className="bg-white rounded-tl-lg rounded-tr-xl">
                  <img
                    src="../../catalog/image 237.png"
                    alt=""
                    className="rounded-tr-xl rounded-tl-xl"
                    style={{
                      height: "230px",
                      width: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>
                <div className="lg:p-5 mp:p-3 px-7 border-t-2">
                  <Typography className="lg:pe-10 mp:pe-0 text-base md:text-lg font-semibold">
                    {t(`Анестезиология`)}
                  </Typography>
                </div>
              </div>
            </Col>
            <Col span={24} md={12} className="hidden md:block">
              <div className="border rounded-lg" style={{ height: "44vh" }}>
                <div className="bg-white rounded-tl-lg rounded-tr-xl">
                  <img
                    src="../../catalog/image 241.png"
                    alt=""
                    className="rounded-tr-xl rounded-tl-xl"
                    style={{
                      height: "230px",
                      width: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>
                <div className="lg:p-5 mp:p-3 px-7 border-t-2">
                  <Typography className="lg:pe-10 mp:pe-0 text-base md:text-lg font-semibold">
                    {t(`ФизиотерапевтическоеОборудование`)}
                  </Typography>
                </div>
              </div>
            </Col>
            <Col span={24} md={12} className="hidden md:block">
              <div className="border rounded-lg" style={{ height: "44vh" }}>
                <div className="bg-white rounded-tl-lg rounded-tr-xl">
                  <img
                    src="../../catalog/image 242.png"
                    alt=""
                    className="rounded-tr-xl rounded-tl-xl"
                    style={{
                      height: "230px",
                      width: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>
                <div className="lg:p-5 mp:p-3 px-7 border-t-2">
                  <Typography className="lg:pe-10 mp:pe-0 text-base md:text-lg font-semibold">
                    {t(`СтоматологическоеОборудование`)}
                  </Typography>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
        <Col span={12} md={8}>
          <div className="border rounded-xl ">
            <div className="bg-white rounded-tl-xl rounded-tr-xl overflow-hidden">
              <img
                src="../../catalog/image 238.png"
                alt=""
                className="rounded-tr-xl rounded-tl-xl"
                style={{
                  height: "560px",
                  width: "100%",
                  objectFit: "contain",
                }}
              />
            </div>

            <div
              className="lg:p-5 mp:px-3 border-t-2 rounded-b-xl"
              style={{ height: "91px" }}
            >
              <Typography className="lg:pe-10 mp:pe-0 text-base md:text-lg font-semibold">
                {t(`ДерматологическоеОборудование`)}
              </Typography>
            </div>
          </div>
        </Col>
      </Row>
      <div className="mt-3">
        <Row gutter={[10, 20]}>
          <Col span={12} className="block md:hidden">
            <div className="border rounded-lg" style={{ height: "44vh" }}>
              <div className="bg-white rounded-tl-lg rounded-tr-xl">
                <img
                  src="../../catalog/image 241.png"
                  alt=""
                  className="rounded-tr-xl rounded-tl-xl"
                  style={{
                    height: "230px",
                    width: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
              <div className="lg:p-5 mp:p-3 px-7 border-t-2">
                <Typography className="lg:pe-10 mp:pe-0 text-base md:text-lg font-semibold">
                  {t(`ФизиотерапевтическоеОборудование`)}
                </Typography>
              </div>
            </div>
          </Col>
          <Col span={12} className="block md:hidden">
            <div className="border rounded-lg" style={{ height: "44vh" }}>
              <div className="bg-white rounded-tl-lg rounded-tr-xl">
                <img
                  src="../../catalog/image 242.png"
                  alt=""
                  className="rounded-tr-xl rounded-tl-xl"
                  style={{
                    height: "230px",
                    width: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
              <div className="lg:p-5 mp:p-3 px-7 border-t-2">
                <Typography className="lg:pe-10 mp:pe-0 text-base md:text-lg font-semibold">
                  {t(`СтоматологическоеОборудование`)}
                </Typography>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className="mt-5">
        <Row gutter={[10, 10]}>
          <Col span={12} md={8}>
            <div className="border rounded-xl ">
              <div className="bg-white rounded-tl-xl rounded-tr-xl overflow-hidden">
                <img
                  src="../../catalog/image 240.png"
                  alt=""
                  className="rounded-tr-xl rounded-tl-xl"
                  style={{
                    height: "560px",
                    width: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>

              <div
                className="lg:p-5 mp:px-3 border-t-2 rounded-b-xl"
                style={{ height: "91px" }}
              >
                <Typography className="lg:pe-10 mp:pe-0 text-base md:text-lg font-semibold">
                  {t(`ДерматологическоеОборудование`)}
                </Typography>
              </div>
            </div>
          </Col>
          <Col span={12} md={16}>
            <Row gutter={[10, 10]}>
              <Col span={24} md={12}>
                <div className="border rounded-lg" style={{ height: "44vh" }}>
                  <div className="bg-white rounded-tl-lg rounded-tr-xl">
                    <img
                      src="../../catalog/image 245.png"
                      alt=""
                      className="rounded-tr-xl rounded-tl-xl"
                      style={{
                        height: "230px",
                        width: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                  <div className="lg:p-5 mp:p-3 px-7 border-t-2">
                    <Typography className="lg:pe-10 mp:pe-0 text-base md:text-lg font-semibold">
                      {t(`ВетеринарноеОборудование`)}
                    </Typography>
                  </div>
                </div>
              </Col>
              <Col span={24} md={12}>
                <div className="border rounded-lg" style={{ height: "44vh" }}>
                  <div className="bg-white rounded-tl-lg rounded-tr-xl">
                    <img
                      src="../../catalog/image 246.png"
                      alt=""
                      className="rounded-tr-xl rounded-tl-xl"
                      style={{
                        height: "230px",
                        width: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                  <div className="lg:p-5 mp:p-3 px-7 border-t-2">
                    <Typography className="lg:pe-10 mp:pe-0 text-base md:text-lg font-semibold">
                      {t(`Анестезиология`)}{" "}
                    </Typography>
                  </div>
                </div>
              </Col>
              <Col span={24} md={12} className="hidden md:block">
                <div className="border rounded-lg" style={{ height: "44vh" }}>
                  <div className="bg-white rounded-tl-lg rounded-tr-xl">
                    <img
                      src="../../catalog/image 247.png"
                      alt=""
                      className="rounded-tr-xl rounded-tl-xl"
                      style={{
                        height: "230px",
                        width: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                  <div className="lg:p-5 mp:p-3 px-7 border-t-2">
                    <Typography className="lg:pe-10 mp:pe-0 text-base md:text-lg font-semibold">
                      {t(`ФизиотерапевтическоеОборудование`)}
                    </Typography>
                  </div>
                </div>
              </Col>
              <Col span={24} md={12} className="hidden md:block">
                <div className="border rounded-lg" style={{ height: "44vh" }}>
                  <div className="bg-white rounded-tl-lg rounded-tr-xl">
                    <img
                      src="../../catalog/image 248.png"
                      alt=""
                      className="rounded-tr-xl rounded-tl-xl"
                      style={{
                        height: "230px",
                        width: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                  <div className="lg:p-5 mp:p-3 px-7 border-t-2">
                    <Typography className="lg:pe-10 mp:pe-0 text-base md:text-lg font-semibold">
                      {t(`СтоматологическоеОборудование`)}
                    </Typography>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <div className="mt-3">
          <Row gutter={[10, 20]}>
            <Col span={12} className="block md:hidden">
              <div className="border rounded-lg" style={{ height: "44vh" }}>
                <div className="bg-white rounded-tl-lg rounded-tr-xl">
                  <img
                    src="../../catalog/image 241.png"
                    alt=""
                    className="rounded-tr-xl rounded-tl-xl"
                    style={{
                      height: "230px",
                      width: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>
                <div className="lg:p-5 mp:p-3 px-7 border-t-2">
                  <Typography className="lg:pe-10 mp:pe-0 text-base md:text-lg font-semibold">
                    {t(`ФизиотерапевтическоеОборудование`)}
                  </Typography>
                </div>
              </div>
            </Col>
            <Col span={12} className="block md:hidden">
              <div className="border rounded-lg" style={{ height: "44vh" }}>
                <div className="bg-white rounded-tl-lg rounded-tr-xl">
                  <img
                    src="../../catalog/image 242.png"
                    alt=""
                    className="rounded-tr-xl rounded-tl-xl"
                    style={{
                      height: "230px",
                      width: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>
                <div className="lg:p-5 mp:p-3 px-7 border-t-2">
                  <Typography className="lg:pe-10 mp:pe-0 text-base md:text-lg font-semibold">
                    {t(`СтоматологическоеОборудование`)}
                  </Typography>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default GridCards;
