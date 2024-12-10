import { BreadcrumbFour } from "@components/breadCrumb";
import { Col, Row, Typography } from "antd";
import { useTranslation } from "react-i18next";
import { HomeBrand } from "@components/brend";
import { About } from "@components/about";
import { HomeForm } from "@components/form";
import { Equipment } from "@components/equipment";

export const Brand = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="px-5 py-2 lg:px-14">
        <BreadcrumbFour
          currentPage="Производители"
          twoPages="Каталог"
          threePages="Медецинское оборудование Draeger"
        />
        <div className="mt-24">
          <Typography className="text-2xl sm:text-3xl md:text-5xl">
            {t(`Медецинское оборудование Draeger`)}
          </Typography>
          <div className="mt-10">
            <Row gutter={[10, 20]}>
              <Col span={24} md={12}>
                <img src="../Rectangle (67).png" alt="" className="w-full" />
              </Col>
              <Col span={24} md={12}>
                <img src="../Rectangle (68).png" alt="" className="w-full" />
              </Col>
            </Row>
            <div className="mt-10">
              <div className="lg:flex justify-end">
                <Typography.Title
                  level={5}
                  className="lg:w-[50%] sm:w-[90%] !font-normal"
                >
                  {t(
                    `Учитывая стремительное развитие мировых медицинских технологий, врачи в Российской Федерации и соседних странах столкнулись с вызовом, требующим обновления приборов в различных направлениях, от установок компьютерной томографии до ультразвуковых сканеров и ЛОР комбайнов. Переход на полностью цифровую платформу при диагностике и лечении заболеваний также стал серьёзным испытанием для большинства больниц и частных клиник.`
                  )}{" "}
                </Typography.Title>
              </div>
              <div className="lg:flex justify-end mt-5">
                <Typography.Title
                  level={5}
                  className="lg:w-[50%] sm:w-[90%] !font-normal"
                >
                  {t(
                    `Учитывая стремительное развитие мировых медицинских технологий, врачи в Российской Федерации и соседних странах столкнулись с вызовом, требующим обновления приборов в различных направлениях, от установок компьютерной томографии до ультразвуковых сканеров и ЛОР комбайнов. Переход на полностью цифровую платформу при диагностике и лечении заболеваний также стал серьёзным испытанием для большинства больниц и частных клиник.`
                  )}{" "}
                </Typography.Title>
              </div>
            </div>
          </div>
          <div>
            <Equipment />
          </div>
        </div>
      </div>
      <HomeBrand />
      <About />
      <div className="mb-24">
        <HomeForm />
      </div>
    </>
  );
};
