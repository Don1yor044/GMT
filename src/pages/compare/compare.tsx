import { Col, Row, Typography } from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { PrimaryButton, SecondaryButton, BreadcrumbTwo } from "components";
import { CompareTable } from "./compareTable/compareTable";
import { CompareProduct } from "./compareProduct/compareProduct";

export const Compare = () => {
  const [compareLenght] = useState(false);
  const { t } = useTranslation();
  return (
    <div className="px-5 py-2 lg:px-14">
      <BreadcrumbTwo currentPage={t("Сравнение")} />
      <div className="my-10 lg:my-24">
        {compareLenght ? (
          <>
            <div className="lg:flex block space-y-5 justify-between">
              <div>
                <Typography className="text-3xl sm:text-5xl">
                  {t(`Сравнение товаров`)}
                </Typography>
              </div>
              <div>
                <Typography className="text-xl sm:text-3xl font-medium">
                  {t(`Не добавлено товаров на сравнение`)}
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
            <Typography className="text-3xl sm:text-5xl">
              {t(`Сравнение товаров`)}
            </Typography>
            <div className="my-10">
              <Row gutter={[20, 20]}>
                <Col span={24} lg={6}>
                  <div className="lg:block flex sm:gap-5 gap-4">
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
                  <div>
                    <CompareProduct />
                  </div>
                </Col>
              </Row>
            </div>
            <div className="mt-24">
              <Typography className="text-2xl font-medium mb-5">
                {t(`Технические характеристики`)}
              </Typography>
              <CompareTable />
              <div className="flex gap-3 justify-center md:justify-end mt-10">
                <SecondaryButton text={t("Авторизироваться")} />
                <PrimaryButton text={t("ВКаталог")} />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
