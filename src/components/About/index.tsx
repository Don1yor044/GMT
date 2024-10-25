import styled from "@emotion/styled";
import { Col, Collapse, CollapseProps, Row, Typography } from "antd";
import { CiCirclePlus } from "react-icons/ci";
import { IoIosCloseCircle } from "react-icons/io";

const items: CollapseProps["items"] = [
  {
    key: "1",
    label: "О компании",
    children:
      "Но синтетическое тестирование, в своём классическом представлении, допускает внедрение поэтапного и последовательного развития общества.   В рамках спецификации современных стандартов, сторонники тоталитаризма в науке будут функционально разнесены.",
  },
  {
    key: "2",
    label: "Преимущества сотрудников",
    children:
      "Но синтетическое Но синтетическое тестирование, в своём классическом представлении, допускает внедрение поэтапного и последовательного развития общества.   В рамках спецификации современных стандартов, сторонники тоталитаризма в науке будут функционально разнесены тестирование, в своём классическом представлении, допускает внедрение поэтапного и последовательного развития общества.   В рамках спецификации современных стандартов, сторонники тоталитаризма в науке будут функционально разнесены.",
  },
  {
    key: "3",
    label: "Достижения компании",
    children:
      "Но синтетическое тестирование, в своём классическом представлении, допускает внедрение поэтапного и последовательного развития общества.   В рамках спецификации современных стандартов, сторонники тоталитаризма в науке будут функционально разнесены.",
  },
  {
    key: "4",
    label: "Карьерный рост",
    children:
      "Но синтетическое тестирование, в своём классическом представлении, допускает внедрение поэтапного и последовательного развития общества.   В рамках спецификации современных стандартов, сторонники тоталитаризма в науке будут функционально разнесены.",
  },
];
const customExpandIcon = ({ isActive }: { isActive?: boolean }) => {
  return isActive ? (
    <IoIosCloseCircle size={40} /> // Ochiq holat
  ) : (
    <CiCirclePlus size={40} /> // Yopiq holat
  );
};
const About = () => {
  return (
    <div className="bg-[#088269] p-14" style={{ minHeight: "70vh" }}>
      <Row>
        <Col span={11}>
          <Typography.Title level={3} className="!text-white">
            Информация о компании
          </Typography.Title>
        </Col>
        <Col span={13}>
          <StyledCollapse
            items={items}
            bordered={false}
            accordion={true}
            defaultActiveKey={["1"]}
            expandIconPosition="right"
            expandIcon={customExpandIcon}
          />
        </Col>
      </Row>
    </div>
  );
};

export default About;
const StyledCollapse = styled(Collapse)`
  background-color: inherit !important;
  font-size: 18px;
  &&& .ant-collapse-header {
    color: white;
    height: 60px;
    display: flex;
    align-items: center;
  }
  .ant-collapse-content-box {
    color: #cdcdcd;
    font-size: 16px;
  }
`;
