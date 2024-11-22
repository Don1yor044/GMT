import { BreadcrumbThree } from "@components/breadCrumb";
import { CatalogTovar } from "@components/catalogTovar";
import { Footer } from "@components/footer";
import { HomeForm } from "@components/form";
import { Header } from "@components/header";
import styled from "@emotion/styled";
import { Col, Collapse, CollapseProps, Row, Typography } from "antd";
import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { CiCirclePlus } from "react-icons/ci";
import { IoIosCloseCircle } from "react-icons/io";
import { Link } from "react-router-dom";
interface ItemType {
  key: string;
  label: string;
  children?: ReactNode;
}
export const Certificates = () => {
  const { t } = useTranslation();
  const linksData = [
    "Инструменты медицинские хирургические РУ № РЗН 2015/3121 от 12 октября 2015 г.",
    "Фильтры медицинские РУ № РЗН 2019/8405 от 5 июня 2019 г.",
    "Воздуховоды полимерные РУ № ФСР 2011/10719 от 15 августа 2016 г.",
    "Набор оториноларингологический РУ № ФСЗ 2010/08840 от 23 ноября 2018 г.",
    "Инструменты одноразовые РУ № ФСЗ 2009/05638 от 23 ноября 2018 года",
    "Пипетка офтальмологическая РУ № ФСР 2009/04211 от 23 ноября 2015 г.",
    "Термометр инфракрасный РУ № ФСЗ 2012/13255 от 22 ноября 2012 г.",
    "Зажим пупочный РУ № ФСР 2011/10731 от 6 мая 2011 г.",
    "Гигрометры ВИТ Свидетельство об утверждении",
    "Термометры медицинские РУ № РЗН 2015/2853 от 6 июля 2017 г.",
    "Станов для бритья РУ № ФСЗ 2009/04329 от 20 июля 2009 г.",
    "Пинцеты медицинские РУ № ФСЗ 2010/06996 от 23 ноября 2018 г.",
    "Емкость-контейнеры для сбора РУ № РЗН 2014/2254 от 18 марта 2020 г.",
    "Емкости-контейнеры РУ № ФСР 2012/13095 ч.1",
    "Электроды медицинские РУ № ФСЗ 2012/12612",
    "Инструменты хирургические РУ № ФСЗ 2012/12251 от 30 мая 2012 г.",
    "Изделие медицинское для инфуз.-трансфуз. РУ № ФСЗ 2011/11287 от 27 декабря 2011 г.",
    "Термометр медицинский РУ № ФСЗ 2011/10572",
    "Мундштуки картонные и адаптеры РУ № ФСР 2012/13317 от 27 августа 2019 г.",
    "Мундштуки картонные одноразовые РУ № ФСР 2012/13607 от 13 февраля 2018 г.",
    "Анализатор паров этанола Alcotest РУ № РЗН 2016/5237 от 13 января 2017 г.",
  ];
  const children = (
    <div className="text-[#07745E]  space-y-3">
      {linksData.map((linkText, index) => (
        <Link to={""} key={index} className="block text-sm font-semibold">
          {t(linkText)}
        </Link>
      ))}
    </div>
  );
  const items: ItemType[] = [
    {
      key: "1",
      label: "МедицинскиеИнструменты",
      children: children,
    },
    {
      key: "2",
      label: "Материалы для гинекологии и урологии",
      children: children,
    },
    {
      key: "3",
      label: "Материалы для инъекционных процедур",
      children: children,
    },
    {
      key: "4",
      label: "Перевязочные материалы",
      children: children,
    },
  ];
  const translatedItems: CollapseProps["items"] = items.map((item) => ({
    key: item.key,
    label: t(item.label),
    children: item.children,
  }));
  const customExpandIcon = ({ isActive }: { isActive?: boolean }) => {
    return isActive ? (
      <IoIosCloseCircle size={40} color="#088269" /> // Ochiq holat
    ) : (
      <CiCirclePlus size={40} /> // Yopiq holat
    );
  };
  return (
    <>
      <Header />
      <div className="px-5 py-2 lg:px-14">
        <BreadcrumbThree currentPage="Сертификаты" twoPages="Окомпании" />
        <div className="mt-24">
          <Row gutter={[20, 20]}>
            <Col span={24} lg={12}>
              <Typography className="lg:text-5xl text-4xl font-semibold ">
                {t(`Сертификаты`)}
              </Typography>
            </Col>
            <Col span={24} lg={12}>
              <div>
                <hr className="my-4" />
                <div>
                  <StyledCollapse
                    items={translatedItems}
                    bordered={false}
                    accordion={true}
                    defaultActiveKey={["1"]}
                    expandIconPosition="right"
                    expandIcon={customExpandIcon}
                  />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <CatalogTovar />
      <HomeForm />
      <div className="mt-24">
        <Footer />
      </div>
    </>
  );
};
const StyledCollapse = styled(Collapse)`
  background-color: inherit !important;
  width: 100% !important;
  font-size: 18px;
  &&& .ant-collapse-header {
    /* color: #088269; */
    height: 60px;
    font-weight: 600;
    display: flex;
    align-items: center;
  }
  .ant-collapse-content-box {
    /* color: #cdcdcd; */
    font-size: 16px;
  }
`;
