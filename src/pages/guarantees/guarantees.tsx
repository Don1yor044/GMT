import { Col, Row, Typography } from "antd";
import Cards from "./component";
import { useTranslation } from "react-i18next";
import { HomeForm } from "@components/form";
import { BreadcrumbTwo } from "@components/breadCrumb";
export const Guarantees = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="px-5 py-2 lg:px-14">
        <BreadcrumbTwo currentPage="Гарантии" />
        <div className="mt-5 md:mt-10 lg:mt-20">
          <Typography className="text-5xl mb-10">{t(`Гарантии`)}</Typography>
          <div className="xl:w-[53%] lg:w-[65%] md:w-[90%] w-[100%]">
            <Typography className="text-md md:text-xl ">
              {t(
                `Регулярное сервисное обслуживание медицинской техники – залог ее надежной, беспроблемной эксплуатации, а также продолжительного срока службы. Периодическая диагностика позволяет выявить любые неисправности, отклонения от нормального рабочего режима на самых ранних сроках. Это предотвратит серьезные поломки, приводящие к дорогостоящим ремонтам`
              )}
              .{" "}
            </Typography>
            <div className="mt-5">
              <Typography className="text-sm md:text-xl">
                {t(
                  `Являясь авторизованным дилером брендов, продукция которых представлена в каталоге, компания`
                )}
                :
              </Typography>
              <ol className=" list-decimal sm:list-inside ps-7 text-md md:text-lg  my-5">
                <li>
                  {t(
                    `Предоставляет услуги сервисного и гарантийного обслуживания`
                  )}
                  .
                </li>
                <li>
                  {t(
                    `Осуществляет поставку оригинальных запчастей и комплектующих`
                  )}
                  .
                </li>
                <li>
                  {t(
                    `Обучает медицинский персонал работе с современным высокотехнологичным оборудованием`
                  )}
                  .
                </li>
              </ol>
              <Typography className="text-sm md:text-xl">
                {t(
                  `Глобал Медикал Трейд является надежным поставщиком медицинского оборудовани, предлагая своим клиентам качественную продукцию по лучшей цене. Наша компания гарантирует всем клиентам возможность воспользоваться услугами квалифицированных мастеров в установке, пуско-наладке, сервисном и техническом обслуживании приобретенного оборудования`
                )}
                .
              </Typography>
            </div>
          </div>
        </div>
        <Cards />
        <div className="mt-20 bg-[#088269] rounded-xl p-5 md:p-10">
          <Row gutter={[20, 20]}>
            <Col lg={12} md={10} span={24}>
              <Typography.Title level={2} className="!text-white">
                {t(`Внимание`)}!
              </Typography.Title>
            </Col>
            <Col lg={12} md={14} span={24}>
              <Typography className="!text-[#F8F7F3] text-lg">
                {t(
                  `Рассмотрение заявки на замену товара осуществляется в срок до 30 дней со дня её регистрации согласно п. 1 ст. 12 Закона № 59-ФЗ, при условии предоставления документов, перечисленных в договоре`
                )}
                .
              </Typography>
              <Typography className="!text-[#F8F7F3] mt-5 text-lg">
                {t(
                  `Оформление гарантийного случая осуществляется согласно Гражданскому кодексу РФ, при условии предоставления документов, перечисленных в договоре и при наличии заявления с указанием причины возврата, оформленного надлежащим образом`
                )}
                .
              </Typography>
            </Col>
          </Row>
        </div>
      </div>
      <div className="mb-24">
        <HomeForm />
      </div>
    </>
  );
};
