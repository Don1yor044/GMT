import styled from "@emotion/styled";
import { Tabs, TabsProps } from "antd";
import {
  FourChildren,
  OneChildren,
  ThreeChildren,
  TwoChildren,
} from "./tabsChildrens";
import { Reviews } from "./reviews";
const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Описание оборудования",
    children: OneChildren,
  },
  {
    key: "2",
    label: "Характеристики и документы",
    children: TwoChildren,
  },
  {
    key: "3",
    label: "Услуги и сервис",
    children: ThreeChildren,
  },
  {
    key: "4",
    label: "Оптовым покупателям",
    children: FourChildren,
  },
  {
    key: "5",
    label: "Отзывы",
    children: <Reviews />,
  },
];
export const TabsComp = () => {
  return (
    <div className="mt-10 border rounded-lg">
      <StyledTabs defaultActiveKey="5" items={items} onChange={onChange} />
    </div>
  );
};

const StyledTabs = styled(Tabs)`
  .ant-tabs-tab {
    padding: 10px !important; /* Label uchun padding */
  }
  .ant-tabs-content-holder {
    background-color: white !important; /* Content joyida oq rang */
    border-radius: 8px; /* Yuvarlak burchaklar */
    padding: 16px 20px;
  }
  .ant-tabs-tab {
    color: #636363;
    font-weight: 500;
    &:hover {
      color: black;
    }
  }
  .ant-tabs-tab-active {
    .ant-tabs-tab-btn {
      color: black !important;
    }
  }
`;
