import { PrimaryButton, SecondaryButton } from "@components/buttons";
import { Col, Progress, Rate, Row, Select } from "antd";
import Typography from "antd/es/typography/Typography";
import { useState } from "react";
import { BiSortAlt2 } from "react-icons/bi";
const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};
interface Items {
  id: number;
  name: string;
  comment: string;
  date: string;
}

const items: Items[] = [
  {
    id: 1,
    name: "Тепляков Максим",
    comment:
      "Но синтетическое тестирование, в своём классическом представлении, допускает внедрение поэтапного и последовательного развития общества. В рамках спецификации современных стандартов, сторонники тоталитаризма в науке будут функционально разнесены.",
    date: "12 января 2023",
  },
  {
    id: 2,
    name: "Тепляков Максим",
    comment:
      "Но синтетическое тестирование, в своём классическом представлении, допускает внедрение поэтапного и последовательного развития общества. В рамках спецификации современных стандартов, сторонники тоталитаризма в науке будут функционально разнесены.",
    date: "12 января 2023",
  },
  {
    id: 3,
    name: "Тепляков Максим",
    comment:
      "Но синтетическое тестирование, в своём классическом представлении, допускает внедрение поэтапного и последовательного развития общества. В рамках спецификации современных стандартов, сторонники тоталитаризма в науке будут функционально разнесены.",
    date: "12 января 2023",
  },
  {
    id: 4,
    name: "Тепляков Максим",
    comment:
      "Но синтетическое тестирование, в своём классическом представлении, допускает внедрение поэтапного и последовательного развития общества. В рамках спецификации современных стандартов, сторонники тоталитаризма в науке будут функционально разнесены.",
    date: "12 января 2023",
  },
  {
    id: 5,
    name: "Тепляков Максим",
    comment:
      "Но синтетическое тестирование, в своём классическом представлении, допускает внедрение поэтапного и последовательного развития общества. В рамках спецификации современных стандартов, сторонники тоталитаризма в науке будут функционально разнесены.",
    date: "12 января 2023",
  },
];

export const Reviews = () => {
  const [visibleItems, setVisibleItems] = useState(2);
  const ShowMore = () => {
    setVisibleItems(items.length);
  };
  return (
    <>
      <div className="flex gap-10">
        <Typography className="text-xl font-semibold hidden sm:block ">
          Отзывы <span className="text-gray-400">{items.length}</span>
        </Typography>
        <Select
          defaultValue="Сначала полезные"
          onChange={handleChange}
          style={{ width: "300px" }}
          suffixIcon={<BiSortAlt2 size={19} color="black" />}
          options={[
            { value: "jack", label: "Jack" },
            { value: "Сначала новые ", label: "Сначала новые " },
            {
              value: "Сначала с высокой оценкой",
              label: "Сначала с высокой оценкой",
            },
            {
              value: "Сначала с низкой оценкой",
              label: "Сначала с низкой оценкой",
            },
          ]}
        />
      </div>
      <div>
        <Row gutter={[20, 20]}>
          <Col sm={24} md={13} lg={18} span={24}>
            {items.slice(0, visibleItems).map((item) => (
              <div className="border flex gap-5 p-5 rounded-lg mt-6">
                <div className="md:flex hidden">
                  <div className="h-8 w-8  bg-slate-300 rounded-full  flex justify-center items-center text-gray-500">
                    T
                  </div>
                </div>
                <div className="items-center gap-5 flex-row">
                  <div className="flex gap-2 sm:gap-5 items-center">
                    <div className="h-8 w-8  mp:w-9 bg-slate-300 rounded-full  flex md:hidden justify-center items-center text-gray-500">
                      T
                    </div>
                    <Typography className="text-[12px] sm:text-lg font-semibold">
                      {item.name}
                    </Typography>
                    <div className="flex items-center gap-2">
                      <Rate
                        allowHalf
                        defaultValue={5}
                        className="sm:text-[13px]  text-[10px]"
                      />
                      <p className="font-semibold text-xs text-[#202020]">
                        5.0
                      </p>
                    </div>
                  </div>
                  <div>
                    <Typography className="text-[#7A7687]">
                      {item.comment}
                    </Typography>
                    <Typography className="font-semibold mt-2">
                      {item.date}
                    </Typography>
                  </div>
                </div>
              </div>
            ))}
            <div onClick={ShowMore} className="flex justify-center mt-5">
              <SecondaryButton text="Показать еще" />
            </div>
          </Col>
          <Col sm={24} md={11} lg={6} span={24}>
            <div className="flex justify-between w-full ">
              <div>
                {" "}
                <Rate allowHalf defaultValue={5} style={{ fontSize: 13 }} />
              </div>
              <div className="flex gap-1 text-[14px]">
                <span>4.0</span>
                <span className="text-[#7A7687]">/</span>
                <span className="text-[#7A7687]">5.0</span>
              </div>
            </div>
            <hr className="my-3" />
            <div className="flex gap-7 mt-3">
              <div className="space-y-2">
                <Typography className="font-medium">5 звезд</Typography>
                <Typography className="font-medium">4 звезд</Typography>
                <Typography className="font-medium">3 звезд</Typography>
                <Typography className="font-medium">2 звезд</Typography>
                <Typography className="font-medium">1 звезд</Typography>
              </div>
              <div className="flex-1 space-y-3">
                <Progress
                  percent={80}
                  size="small"
                  status="active"
                  strokeColor="#FFC536"
                  trailColor="#fec32f48"
                  format={() => 12}
                />
                <Progress
                  percent={60}
                  size="small"
                  status="active"
                  strokeColor="#FFC536"
                  trailColor="#fec32f48"
                  format={() => 8}
                />
                <Progress
                  percent={30}
                  status="active"
                  size="small"
                  strokeColor="#FFC536"
                  trailColor="#fec32f48"
                  format={() => 2}
                />
                <Progress
                  percent={0}
                  status="active"
                  size="small"
                  trailColor="#fec32f48"
                  strokeColor="#FFC536"
                  format={() => 0}
                />
                <Progress
                  percent={0}
                  status="active"
                  size="small"
                  trailColor="#fec32f48"
                  strokeColor="#FFC536"
                  format={() => 0}
                />
              </div>
            </div>
            <div className="mt-3 flex justify-center py-2">
              <PrimaryButton text="Оставить отзыв" size={80} />
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};
