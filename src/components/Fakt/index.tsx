import { Col, Row, Typography } from "antd";
import { useTranslation } from "react-i18next";

const Fakt = () => {
  const { t } = useTranslation();
  return (
    <>
      <Row gutter={[20, 20]}>
        <Col span={24} lg={12}>
          <Typography.Title level={2}>{t(`ЦифрыИФакты`)}</Typography.Title>
          <Typography.Title
            level={5}
            className="!text-[#696969ba]"
            style={{ fontWeight: 400, fontSize: 17 }}
          >
            {t(`Мы работаем на результат и продаём`)}
            <br /> {t(`только качественную продукцию`)}
          </Typography.Title>
        </Col>
        <Col span={24} lg={12}>
          <div>
            <Row align="middle" className="my-5">
              <Col span={10} md={8}>
                <span className="text-[#088269] text-5xl font-semibold">
                  7 {t(`лет`)}
                </span>
              </Col>
              <Col>
                <Typography.Title level={5}>{t(`нарынке`)}</Typography.Title>
              </Col>
            </Row>
            <hr className="my-5" />
            <Row align="middle" className="my-5">
              <Col span={10} md={8}>
                <span className="text-[#088269] text-5xl font-semibold">
                  964+
                </span>
              </Col>
              <Col span={14} md={16}>
                <Typography.Title level={5}>
                  {t(`оригинальной продукции со всего мира`)}
                </Typography.Title>
              </Col>
            </Row>
            <hr className="my-5" />
            <Row align="middle" className="my-5">
              <Col span={10} md={8}>
                <span className="text-[#088269] text-5xl font-semibold">
                  23+
                </span>
              </Col>
              <Col span={14} md={16}>
                <Typography.Title level={5}>
                  {t(`международных сертификатов качества`)}
                </Typography.Title>
              </Col>
            </Row>
            <hr className="my-5" />
            <Row align="middle" className="my-5">
              <Col span={11} md={8}>
                <span className="text-[#088269] text-5xl font-semibold">
                  2452+
                </span>
              </Col>
              <Col span={13} md={16}>
                <Typography.Title level={5}>
                  {t(`товаров всегда в наличии`)}
                </Typography.Title>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Fakt;
