import styled from "@emotion/styled";
import { Rate, Table } from "antd";

export const CompareTable = () => {
  const columns = [
    {
      dataIndex: "rating",
      key: "rating",
      render: (rating: string) => (
        <span className="text-[#7A7687] font-medium">{rating}</span>
      ),
    },
    {
      dataIndex: "product1",
      key: "product1",
      render: (value: number, record: unknown, index: number) =>
        index === 0 ? (
          <div className="flex gap-3 items-center">
            <Rate disabled defaultValue={value} className="text-sm" />
            <span className="font-medium">{value}</span>
          </div>
        ) : (
          <span className="font-semibold">{value}</span>
        ),
    },
    {
      dataIndex: "product2",
      key: "product2",
      render: (value: number, record: unknown, index: number) =>
        index === 0 ? (
          <div className="flex gap-3 items-center">
            <Rate disabled defaultValue={value} className="text-sm" />
            <span className="font-medium">{value}</span>
          </div>
        ) : (
          <span className="font-semibold">{value}</span>
        ),
    },
    {
      dataIndex: "product3",
      key: "product3",
      render: (value: number, record: unknown, index: number) =>
        index === 0 ? (
          <div className="flex gap-3 items-center">
            <Rate disabled defaultValue={value} className="text-sm" />
            <span className="font-medium">{value}</span>
          </div>
        ) : (
          <span className="font-semibold">{value}</span>
        ),
    },
  ];
  const data = [
    {
      key: "1",
      rating: "Рейтинг",
      product1: 4,
      product2: 3,
      product3: 5,
    },
    {
      key: "2",
      rating: "Скорость работы",
      product1: "60 или 120 тестов в час",
      product2: "60 или 120 тестов в час",
      product3: "60 или 120 тестов в час",
    },
    {
      key: "3",
      rating: "Возможный диапазон длины волны",
      product1: "557, 620, 656 нм",
      product2: "557, 620, 656 нм",
      product3: "557, 620, 656 нм",
    },
    {
      key: "4",
      rating: "Тест-полоски",
      product1: "На 10 или 11 параметров",
      product2: "На 10 или 11 параметров",
      product3: "На 10 или 11 параметров",
    },
    {
      key: "5",
      rating: "Функция автоматической калибровки",
      product1: "Есть",
      product2: "Есть",
      product3: "Есть",
    },
  ];
  return (
    <div>
      <StyledTable
        dataSource={data}
        columns={columns}
        pagination={false}
        showHeader={false}
        className="bg-red-50"
      />
    </div>
  );
};
const StyledTable = styled(Table)`
  .ant-table {
    background: #ffffff4f; /* Jadvalning asosiy foni olib tashlandi */
  }
`;
