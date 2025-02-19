import styled from "@emotion/styled";
import { Button, Col, Row, Typography } from "antd";
import { FaRegHeart } from "react-icons/fa";
import { LuBarChartBig } from "react-icons/lu";
import { AiOutlineClose } from "react-icons/ai";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { PrimaryButton, SecondaryButton } from "components";
import { useTranslation } from "react-i18next";
import baseURL from "utils/api";
import { useEffect, useState } from "react";
import { catalogTovar } from "types/types";

interface ImageContainerProps {
  src: string;
}
interface StyledButtonProps {
  status: number;
}

export const BasketProducts = () => {
  const [dataCourse, setDataCourse] = useState<catalogTovar[]>([]);

  const { t } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await baseURL.get(`CategoryItems`);
        setDataCourse(res.data);
        console.log(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <Row gutter={[20, 20]}>
        <Col span={24} md={16} lg={18} className="space-y-4">
          {dataCourse.map((item) => (
            <div
              className="!border border-gray-300 rounded-xl flex"
              key={item.id}
            >
              <div className="bg-white w-[50%] sm:w-[30%] lg:w-[35%] p-1 sm:p-3 rounded-s-xl min-h-64 border">
                <div className="flex justify-between items-center flex-wrap">
                  <StyledButton status={item.status}>
                    {t(
                      item.status == 1
                        ? "ХитыПродаж"
                        : item.status == 2
                        ? "Новинки"
                        : "-30%"
                    )}
                  </StyledButton>
                  <div className="flex sm:hidden items-center">
                    <Button
                      type="text"
                      className="p-0 flex items-center justify-center"
                      style={{ minWidth: "35px", minHeight: "30px" }}
                    >
                      <LuBarChartBig size={19} />
                    </Button>
                    <Button
                      type="text"
                      className="p-0 flex items-center justify-center"
                      style={{ minWidth: "35px", minHeight: "30px" }}
                    >
                      <FaRegHeart size={19} />
                    </Button>
                  </div>
                </div>
                <ImageContainer src={item.src}></ImageContainer>
              </div>
              <div className="md:px-3 lg:px-7 p-2 sm:p-3 w-[50%] sm:w-[70%] lg:w-[65%]">
                <div className="flex justify-between">
                  <div className="lg:flex justify-center">
                    <div>
                      <Typography className="w-[90%] text-base sm:text-xl font-medium">
                        {t(item.title)}
                      </Typography>
                      <Typography className="text-[#7A7687]">
                        {"Артикул"}: {item.article}
                      </Typography>
                      <Typography className="text-[#7A7687]">
                        {"Вналичии"}
                      </Typography>
                    </div>
                    <div className="space-y-3 mt-5 lg:mt-0">
                      <div>
                        <Typography.Title level={4}>
                          {item.price} руб.
                        </Typography.Title>
                      </div>
                      <div className="inline-flex items-center gap-2 rounded-full px-4 py-[3px] border-gray-300 border-[1px] justify-center ">
                        <Button
                          type="text"
                          icon={<MinusOutlined />}
                          className="flex items-center justify-center rounded-full border-none text-gray-500 hover:bg-gray-50 hover:text-[#088269]"
                        />
                        <span className="min-w-[12px] text-center text-lg font-medium text-[#088269]">
                          {1}
                        </span>
                        <Button
                          type="text"
                          icon={<PlusOutlined />}
                          className="flex items-center justify-center rounded-full border-none text-gray-500 hover:bg-gray-50 !hover:text-[#088269]"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="hidden sm:flex">
                    <Button
                      type="text"
                      className="p-0 flex items-center justify-center"
                      style={{ minWidth: "35px", minHeight: "30px" }}
                    >
                      <LuBarChartBig size={19} />
                    </Button>
                    <Button
                      type="text"
                      className="p-0 flex items-center justify-center"
                      style={{ minWidth: "35px", minHeight: "30px" }}
                    >
                      <FaRegHeart size={19} />
                    </Button>
                    <Button
                      type="text"
                      className="p-0 flex items-center justify-center"
                      style={{ minWidth: "35px", minHeight: "30px" }}
                    >
                      <AiOutlineClose size={19} />
                    </Button>
                  </div>
                  <div className="flex sm:hidden absolute right-3">
                    <Button
                      type="text"
                      className="p-0 flex items-center justify-center"
                      style={{ minWidth: "35px", minHeight: "30px" }}
                    >
                      <AiOutlineClose size={19} />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Col>
        <Col span={24} md={8} lg={6}>
          <div className="border rounded-xl border-gray-300 p-5 md:p-3 bg-white">
            <div className="flex justify-between items-center">
              <Typography className="!m-0 text-xl md:text-base font-medium">
                {t(`Итого`)}
              </Typography>
              <Typography className="!m-0 text-xl md:text-base font-medium">
                900.000 руб.
              </Typography>
            </div>
            <hr className="my-5" />
            <div className="space-y-4 md:space-y-2">
              <div className="flex justify-between ">
                <Typography className="text-base md:text-sm font-medium">
                  {t(`Товары`)} (3 {t(`шт`)})
                </Typography>
                <Typography className="text-base md:text-sm font-medium">
                  900.000 руб.
                </Typography>
              </div>
              <div className="flex justify-between">
                <Typography className="text-base md:text-sm font-medium">
                  {t(`Скидка`)}
                </Typography>
                <Typography className="text-base md:text-sm font-medium">
                  0 руб.
                </Typography>
              </div>
            </div>
            <div className="flex px-2 mt-10 md:mt-5 justify-center">
              <div className="flex flex-col gap-3 w-[70%] md:w-full">
                <PrimaryButton text={t("Оформить заказ")} />
                <SecondaryButton text={t("ЗадатьВопрос")} />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};
const StyledButton = styled.button<StyledButtonProps>`
  color: ${({ status }) =>
    status === 1 ? "#088269" : status === 2 ? "#59599A" : "#855E00"};
  border: 1px solid
    ${({ status }) =>
      status === 1 ? "#088269" : status === 2 ? "#59599A" : "#855E00"};
  background-color: ${({ status }) =>
    status === 1 ? "#448c7e2f" : status === 2 ? "#59599a44" : "#ffeeba"};
  padding: 1px 8px;
  border-radius: 50px;
  font-weight: 500;
  cursor: auto;
`;
const ImageContainer = styled.div<ImageContainerProps>`
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  max-width: 200px;
  height: 100%;
  max-height: 200px;
  margin: 0 auto;
  background-image: ${(props) => `url(${props.src})`};
`;
