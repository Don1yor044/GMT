import { BreadcrumbTwo } from "@components/breadCrumb";
import { PrimaryButton, SecondaryButton } from "@components/buttons";
import { FavoriteProducts } from "@components/favoriteProducts";
import { Col, Row } from "antd";
import Typography from "antd/es/typography/Typography";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export const Favorites = () => {
  const [favorite] = useState(false);
  const { t } = useTranslation();
  return (
    <>
      <div className="px-5 py-2 lg:px-14">
        <BreadcrumbTwo currentPage="Избранное" />

        <div className="my-10 lg:my-24">
          {favorite ? (
            <>
              <div className="lg:flex block space-y-5 justify-between">
                <div>
                  <Typography className="text-5xl">{t(`Избранное`)}</Typography>
                </div>
                <div>
                  <Typography className="text-xl sm:text-3xl font-medium">
                    {t(`Не добавлено товаров в избранное`)}
                  </Typography>
                  <Typography className="sm:text-base sm:w-[40%] lg:w-[55%] text-[#7A7687] mt-3">
                    {t(
                      `Вы можете перейти на главную страницу или воспользоваться каталогом товаров`
                    )}
                  </Typography>
                  <div className="flex gap-2 mt-5">
                    <SecondaryButton text={t("На главную")} />
                    <PrimaryButton text={t("ВКаталог")} />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              {" "}
              <Typography className="text-3xl sm:text-5xl">
                {t(`Избранное`)}
              </Typography>
              <div className="mt-8">
                <Row gutter={[20, 20]}>
                  <Col span={24} lg={6}>
                    <div className="lg:block flex gap-5">
                      <Typography className=" sm:text-lg">
                        {t(`ВсеТовары`)}
                      </Typography>
                      <Typography className="sm:text-lg text-gray-400">
                        {t(`Маммографы`)}
                      </Typography>
                      <Typography className=" sm:text-lg text-gray-400">
                        {t(`Флюорографы`)}
                      </Typography>
                    </div>
                  </Col>
                  <Col span={24} lg={18}>
                    <FavoriteProducts />
                  </Col>
                </Row>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
