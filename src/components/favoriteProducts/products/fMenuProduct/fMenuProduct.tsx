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
export const MenuProducts = ({
  itemsProduct,
}: {
  itemsProduct: catalogTovar[];
}) => {
  const { t } = useTranslation();

  return (
    <>
      <Row gutter={[10, 10]} className="mt-5">
        {itemsProduct.map((item) => (
          <Col span={12} md={8} lg={8} key={item.id}>
            <div className="!border border-gray-300 rounded-xl">
              <div className="bg-white h-60 sm:h-72 p-1 sm:p-3 rounded-t-xl">
                <div className="flex justify-between items-center">
                  <StyledButton status={item.status}>
                    <span className="text-xs sm:text-sm">
                      {" "}
                      {t(
                        item.status == 1
                          ? "ХитыПродаж"
                          : item.status == 2
                          ? "Новинки"
                          : "-30%"
                      )}
                    </span>
                  </StyledButton>
                  <div className="flex">
                    <Button
                      type="text"
                      className="p-0 flex items-center justify-center sm:w-[35px] sm:h-[30px] w-[25px] h-[20px]"
                    >
                      <LuBarChartBig size={19} />
                    </Button>
                    <Button
                      type="text"
                      className="p-0 flex items-center justify-center sm:w-[35px] sm:h-[30px] w-[25px] h-[20px]"
                    >
                      <FaHeart size={19} color="#088269" />
                    </Button>
                  </div>
                </div>
                <ImageContainer src={item.src}></ImageContainer>
              </div>
              <div className="p-2 sm:p-3 border-t">
                <Typography className="w-full flex-wrap sm:text-xl md:text-2xl text-lg font-medium ">
                  {t(item.title)}
                </Typography>
                <Typography className="text-[#7A7687]">
                  {t(`Артикул`)}: {item.article}
                </Typography>
                <Typography className="text-[#7A7687]">
                  {t(`Вналичии`)}
                </Typography>
                <Typography className="text-lg font-medium sm:text-2xl">
                  {item.price} руб.
                </Typography>
                <div className="mt-5 ">
                  <StyledSecondaryButton>
                    <span className="text-[11px] sm:text-sm">
                      {t("ДобавитьВкорзину")}
                    </span>
                  </StyledSecondaryButton>
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
