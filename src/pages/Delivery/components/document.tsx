import styled from "@emotion/styled";
import { Col, Collapse, CollapseProps, Row, Typography } from "antd";
import { t } from "i18next";
import { CiCirclePlus } from "react-icons/ci";
import { IoIosCloseCircle } from "react-icons/io";
interface ItemType {
  key: string;
  label: string;
  children: string;
}
const items: ItemType[] = [
  {
    key: "1",
    label: "ЮридическиеЛица",
    children:
      "Но синтетическое тестирование, в своём классическом представлении, допускает внедрение поэтапного и последовательного развития общества. В рамках спецификации современных стандартов, сторонники тоталитаризма в науке будут функционально разнесены",
  },
  {
    key: "2",
    label: "ИндивидуальныеПредприниматели",
    children:
      "Но синтетическое тестирование, в своём классическом представлении, допускает внедрение поэтапного и последовательного развития общества. В рамках спецификации современных стандартов, сторонники тоталитаризма в науке будут функционально разнесены",
  },
  {
    key: "3",
    label: "ФизическиеЛица",
    children:
      "Но синтетическое тестирование, в своём классическом представлении, допускает внедрение поэтапного и последовательного развития общества. В рамках спецификации современных стандартов, сторонники тоталитаризма в науке будут функционально разнесены",
  },
];
const customExpandIcon = ({ isActive }: { isActive?: boolean }) => {
  return isActive ? (
    <IoIosCloseCircle size={40} color="#088269" /> // Ochiq holat
  ) : (
    <CiCirclePlus size={40} /> // Yopiq holat
  );
};
const Document = () => {
  const translatedItems: CollapseProps["items"] = items.map((item) => ({
    key: item.key,
    label: t(item.label),
    children: t(item.children),
  }));
  return (
    <div
      className="bg-[#E5E4ED] py-14 lg:px-14 md:px-10 xs:px-5 px-2 mt-28"
      style={{ minHeight: "60vh" }}
    >
      <Row gutter={[20, 20]}>
        <Col md={18} lg={11} xs={24}>
          <Typography.Title level={2} className="lg:w-96 w-full">
            {t(`Документы, необходимые для получения груза`)}
          </Typography.Title>
          <Typography className="xl:pr-52 ">
            {t(
              `По копиям доверенностей и доверенностям с незаполненными обязательными реквизитами отгрузка не производится`
            )}
          </Typography>
        </Col>
        <Col md={18} lg={13} xs={24}>
          <StyledCollapse
            items={translatedItems}
            bordered={false}
            accordion={true}
            defaultActiveKey={["3"]}
            expandIconPosition="right"
            expandIcon={customExpandIcon}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Document;
const StyledCollapse = styled(Collapse)`
  background-color: inherit !important;
  font-size: 18px;
  &&& .ant-collapse-header {
    height: 60px;
    display: flex;
    align-items: center;
  }
  .ant-collapse-content-box {
    color: #202020;
    font-size: 16px;
  }
`;
