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
    label: "Окомпании",
    children: "ИнформацияОкомпанииДеск",
  },
  {
    key: "2",
    label: "ПреимуществаСотрудников",
    children: "ИнформацияОкомпанииДеск",
  },
  {
    key: "3",
    label: "ДостиженияКомпании",
    children: "ИнформацияОкомпанииДеск",
  },
  {
    key: "4",
    label: "КарьерныйРост",
    children: "ИнформацияОкомпанииДеск",
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
  const translatedItems: CollapseProps["items"] = items.map((item) => ({
    key: item.key,
    label: t(item.label),
    children: t(item.children),
  }));
  return (
    <div
      className="bg-[#088269] py-14 lg:px-14 md:px-10 sm:px-7 px-5 mt-16"
      style={{ minHeight: "70vh" }}
    >
      <Row gutter={[20, 20]}>
        <Col md={11} xs={24}>
          <Typography.Title level={3} className="!text-white">
            {t(`ИнформацияОкомпании`)}
          </Typography.Title>
        </Col>
        <Col md={13} xs={24}>
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
