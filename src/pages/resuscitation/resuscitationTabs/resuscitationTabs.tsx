import { ListProducts } from "@components/listProducts";
import styled from "@emotion/styled";
import { Tabs, TabsProps, Typography } from "antd";
import { useTranslation } from "react-i18next";
const onChange = (key: string) => {
  console.log(key);
};

interface TabsItem {
  id: number;
  name: string;
}

export const ResuscitationTabs = () => {
  const { t } = useTranslation();
  const TabsItems: TabsItem[] = [
    {
      id: 1,
      name: "Аппарат искусственной вентиляции лёгких",
    },
    {
      id: 2,
      name: "Аппарат искусственной вентиляции легких транспортный",
    },
    {
      id: 3,
      name: "Дыхательный мешок для ручной искусственной вентиляции легких",
    },
    {
      id: 4,
      name: "Монитор пациента на 5 параметров",
    },
    {
      id: 5,
      name: "Монитор пациента на 8 параметров",
    },
    {
      id: 6,
      name: "Шприцевой насос",
    },
    {
      id: 7,
      name: "Инфузионный насос",
    },
    {
      id: 8,
      name: "Набор для интубации трахеи",
    },
    {
      id: 9,
      name: "Дефибриллятор",
    },
  ];
  const TabsItems2: TabsItem[] = [
    {
      id: 10,
      name: "Матрац термостабилизирующий",
    },
    {
      id: 11,
      name: "Автоматический анализатор газов крови",
    },
    {
      id: 12,
      name: "Электрокардиограф",
    },
    {
      id: 13,
      name: "Транспортируемый рентгеновский аппарат",
    },
    {
      id: 14,
      name: "Портативный ультразвуковой диагностический аппарат",
    },
    {
      id: 15,
      name: "Кровать трёхсекционная с ограждением",
    },
    {
      id: 16,
      name: "Кровать-вес",
    },
    {
      id: 17,
      name: "Электроэнцефалограф 8-канальный",
    },
    {
      id: 18,
      name: "Пневмокомпрессорная профилактика тромбоэмболических осложнений и лимфостаза",
    },
  ];
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: t("СтандартыОснащения"),
      children: (
        <>
          <div className="block md:flex gap-3 justify-between">
            <div className="space-y-2">
              {TabsItems.map((item: TabsItem) => (
                <Typography className="sm:font-medium" key={item.id}>
                  <span className="font-normal text-gray-500 me-2">
                    {item.id}.
                  </span>
                  {t(item.name)}
                </Typography>
              ))}
            </div>
            <div className="space-y-2 mt-2 md:mt-0">
              {" "}
              {TabsItems2.map((item: TabsItem) => (
                <Typography className="sm:font-medium" key={item.id}>
                  <span className="font-normal text-gray-500 me-2">
                    {item.id}.
                  </span>
                  {t(item.name)}
                </Typography>
              ))}
            </div>
          </div>
        </>
      ),
    },
    {
      key: "2",
      label: t("СписокТоваров"),
      children: <ListProducts />,
    },
  ];

  return (
    <StyleTabs>
      <Tabs
        defaultActiveKey="1"
        items={items}
        onChange={onChange}
        className="border rounded-lg"
      />
    </StyleTabs>
  );
};

const StyleTabs = styled.div`
  .ant-tabs-tab {
    padding: 15px 20px !important; /* Label uchun padding */
  }
  .ant-tabs-content-holder {
    background-color: white !important; /* Content joyida oq rang */
    border-radius: 8px; /* Yuvarlak burchaklar */
    padding: 16px 25px;
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
