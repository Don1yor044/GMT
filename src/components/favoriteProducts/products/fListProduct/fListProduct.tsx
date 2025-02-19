import styled from "@emotion/styled";
import { Button, Col, Row, Typography } from "antd";
import { useTranslation } from "react-i18next";
import { FaHeart } from "react-icons/fa";
import { LuBarChartBig } from "react-icons/lu";
import { catalogTovar } from "types/types";
interface ImageContainerProps {
  src: string;
}
interface StyledButtonProps {
  status: number;
}
export const ListProducts = ({
  itemsProduct,
}: {
  itemsProduct: catalogTovar[];
}) => {
  const { t } = useTranslation();
  return (
    <>
      <Row gutter={[10, 10]} className="mt-5">
        {itemsProduct.map((item) => (
          <Col span={24} key={item.id}>
            <div className="!border border-gray-300 rounded-xl flex">
              <div className="bg-white w-[45%] lg:w-[35%] p-3 rounded-s-xl min-h-64 border">
                <div className="flex justify-between items-center">
                  <StyledButton status={item.status}>
                    {t(
                      item.status == 1
                        ? "ХитыПродаж"
                        : item.status == 2
                        ? "Новинки"
                        : "-30%"
                    )}
                  </StyledButton>
                </div>
                <ImageContainer src={item.src}></ImageContainer>
              </div>
              <div className="sm:px-7 p-3 border-t w-[55%] lg:w-[70%]">
                <div className="flex justify-between">
                  <div>
                    {" "}
                    <Typography className="w-[90%] text-lg sm:text-xl lg:text-3xl font-medium">
                      {t(item.title)}
                    </Typography>
                    <Typography className="text-[#7A7687]">
                      {t(`Артикул`)}: {item.article}
                    </Typography>
                    <Typography className="text-[#7A7687]">
                      {t(`Вналичии`)}
                    </Typography>
                  </div>
                  <div className="hidden lg:flex">
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
                      <FaHeart size={19} color="#088269" />
                    </Button>
                  </div>
                </div>
                <div className="lg:flex justify-between sm:mt-0 mt-5 lg:mt-14 w-full">
                  <Typography.Title level={4}>
                    {item.price} руб.
                  </Typography.Title>
                  <div className="lg:mt-0 sm:mt-8">
                    <StyledSecondaryButton>
                      <span className="text-[11px] sm:text-sm lg:px-10">
                        {t("ДобавитьВкорзину")}
                      </span>
                    </StyledSecondaryButton>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        ))}
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
const StyledSecondaryButton = styled.button`
  background-color: inherit;
  padding: 8px 5px;
  width: 100%;
  border-radius: 50px;
  border: 1px solid #d5d1e1;
  color: #088269 !important;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    border: 1px solid #07745e;
  }
  &:active {
    border: 1px solid #07745e;
  }
`;
