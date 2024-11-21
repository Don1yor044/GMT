import { Header } from "@components/header";
import { Col, Row, Typography } from "antd";
import { useTranslation } from "react-i18next";
import { RiArrowRightSLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export const Certificates = () => {
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <div className="px-5 py-2 lg:px-14">
        <div className="flex gap-3 items-center py-2">
          <Link to={"/"} className="text-[#7A7687]">
            {t(`Главная`)}
          </Link>
          <div className="text-[#7A7687]">
            <RiArrowRightSLine size={20} />{" "}
          </div>
          <Link to={"/"} className="text-[#7A7687]">
            {t(`Окомпании`)}
          </Link>
          <div className="text-[#7A7687]">
            <RiArrowRightSLine size={20} />{" "}
          </div>
          <Typography className="font-semibold">{t(`Сертификаты`)}</Typography>
        </div>
        <div className="mt-24">
          <Row gutter={[20, 20]}>
            <Col span={12}>
              <Typography className="text-5xl font-semibold">
                {t(`Сертификаты`)}
              </Typography>
            </Col>
            <Col span={12}>2</Col>
          </Row>
        </div>
      </div>
    </>
  );
};
