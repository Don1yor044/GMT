import { Tabs, TabsProps } from "antd";
const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Стандарты оснащения",
    children: "Content of Tab Pane 1",
  },
  {
    key: "2",
    label: "Список товаров",
    children: "Content of Tab Pane 2",
  },
];
export const ResuscitationTabs = () => {
  return (
    <>
      <Tabs
        defaultActiveKey="1"
        items={items}
        onChange={onChange}
        className="border px-5 rounded-lg"
      />
    </>
  );
};
