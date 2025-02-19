import { BreadcrumbTwo, HomeForm } from "components";
import { Button, Col, Collapse, CollapseProps, Row, Typography } from "antd";
import { ReactNode } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { CiCirclePlus } from "react-icons/ci";
import styled from "@emotion/styled";
import { useTranslation } from "react-i18next";
import { BsSearch } from "react-icons/bs";
interface ItemType {
  key: string;
  label: string;
  children?: ReactNode;
}
export const Faq = () => {
  const { t } = useTranslation();
  const children = (
    <Typography className="text-lg pr-8">
      {t(
        `Но синтетическое тестирование, в своём классическом представлении, допускает внедрение поэтапного и последовательного развития общества. В рамках спецификации современных стандартов, сторонники тоталитаризма в науке будут функционально разнесены.`
      )}
    </Typography>
  );
  const items: ItemType[] = [
    {
      key: "1",
      label: "Окомпании",
      children: children,
    },
    {
      key: "2",
      label: "ПреимуществаСотрудников",
      children: children,
    },
    {
      key: "3",
      label: "ДостиженияКомпании",
      children: children,
    },
    {
      key: "4",
      label: "Возврат товара или заказа",
      children: children,
    },
    {
      key: "5",
      label: "Стоимость доставки",
      children: children,
    },
    {
      key: "6",
      label: "Стать поставщиком",
      children: children,
    },
    {
      key: "7",
      label: "Возможен ли возврат денежных средств?",
      children: children,
    },
    {
      key: "8",
      label: "Правила расторжения договора?",
      children: children,
    },
    {
      key: "9",
      label: "Почему не отгружаем по платежному поручению?",
      children: children,
    },
    {
      key: "10",
      label: "Как можно купить товар за наличный расчет?",
      children: children,
    },
    {
      key: "11",
      label: "Как сравнить товары на сайте?",
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
      <div className="px-5 py-2 lg:px-14">
        <BreadcrumbTwo currentPage="Faq" />
        <div className="mt-10 lg:mt-24">
          <Row gutter={[20, 20]}>
            <Col span={24} lg={12}>
              <div className="sm:w-[90%]">
                <Typography className="text-3xl sm:text-5xl font-medium ">
                  {t(`Часто задаваемые вопросы`)}
                </Typography>
                <div className="mt-10 flex items-center bg-gray-300 rounded-full overflow-hidden shadow-sm hover:shadow-md transition-shadow !text-[#7A7687] border border-gray-300  ">
                  <input
                    type="text"
                    placeholder={t("Поиск по вопросам")}
                    className="mp:w-20  flex-1 px-4 py-2 bg-[#F8F7F3] border-none outline-none text-gray-800 placeholder-gray-500 rounded-e-3xl"
                  />
                  <Button
                    type="text"
                    className="p-2 rounded-full mr-2 transition-colors text-[#7A7687]"
                  >
                    <BsSearch size={19} />
                  </Button>
                </div>
              </div>
            </Col>
            <Col span={24} lg={12}>
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
            </Col>
          </Row>
        </div>
      </div>
      <div className="my-24">
        <HomeForm />
      </div>
    </>
  );
};
const StyledCollapse = styled(Collapse)`
  background-color: inherit !important;
  width: 100% !important;
  font-size: 17px;
  &&& .ant-collapse-header {
    height: 60px;
    font-weight: 600;
    display: flex;
    align-items: center;
  }
  .ant-collapse-content-box {
    font-size: 14px;
  }
`;
