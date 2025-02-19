import styled from "@emotion/styled";
import { Tabs, TabsProps } from "antd";
import {
  FourChildren,
  OneChildren,
  ThreeChildren,
  TwoChildren,
} from "./tabsChildrens";
import { Reviews } from "./tabsReviews";
import { useTranslation } from "react-i18next";
const onChange = (key: string) => {
  console.log(key);
};

export const TabsComp = () => {
  const { t } = useTranslation();
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: t("ОписаниеОборудования"),
      children: <OneChildren />,
    },
    {
      key: "2",
      label: t("ХарактеристикиИдокументы"),
      children: <TwoChildren />,
    },
    {
      key: "3",
      label: t("УслугиИсервис"),
      children: <ThreeChildren />,
    },
    {
      key: "4",
      label: t("ОптовымПокупателям"),
      children: <FourChildren />,
    },
    {
      key: "5",
      label: t("Отзывы"),
      children: <Reviews />,
    },
  ];
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
