import { Checkbox, Col, Row, Typography } from "antd";
import { PrimaryButton } from "../buttons";
import { useTranslation } from "react-i18next";
export const HomeSubscription = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-[#E5E4ED] px-3 xl:px-14 lg:px-8 md:px-10 sm:px-10 p-0 md:py-0 mp:py-5 mt-24">
      <Row>
        <Col lg={12} className="hidden lg:flex ">
          <div>
            <img src="../../Vector (4).png" alt="" />
          </div>
        </Col>
        <Col
          lg={12}
          xs={24}
          className="lg:mb-0 md:mb-10 md:flex md:justify-center"
        >
          <div className="pt-10">
            <Typography.Title level={2}>{t(`Подпишитесь`)}!</Typography.Title>
            <Typography.Title
              level={5}
              className="!text-[#7A7687] !m-0"
              style={{ fontWeight: 400 }}
            >
              {t(`Акции, скидки, распродажи ждут`)}!
            </Typography.Title>
            <div>
              <div className="flex items-center mt-12 sm:w-96 lg:w-full mp:w-full">
                <input
                  placeholder={t("ВведитеEmail")}
                  className="rounded-full py-2 px-5 flex-grow"
                />
                <div className="-ml-8">
                  <PrimaryButton text={t("Подписаться")} size={100} />
                </div>
              </div>
              <div className="flex items-center mt-4 ms-2">
                <Checkbox className="mr-3" />
                <label htmlFor="consent" className="text-sm text-black">
                  {t(`Я даю согласие на обработку своих персональных данных`)}.
                </label>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
