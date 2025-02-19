import styled from "@emotion/styled";
import { Button, Col, Row, Typography } from "antd";
import { FaRegHeart } from "react-icons/fa";
import { LuBarChartBig } from "react-icons/lu";
import { AiOutlineClose } from "react-icons/ai";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { PrimaryButton, SecondaryButton } from "components";
import { useTranslation } from "react-i18next";

interface ImageContainerProps {
  src: string;
}
interface StyledButtonProps {
  status: string;
}
interface ProductsType {
  id: number;
  src: string;
  title: string;
  article: number;
  price: string;
  status: string;
}
const itemsProduct: ProductsType[] = [
  {
    id: 1,
    src: "https://s3-alpha-sig.figma.com/img/98d6/ce68/ca05465aa55ba84ace8005d1e27d304e?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JF03XnkxPtJqZP~WkiPPjrSTlpi6qfHG1YUXGXBdd3Em~VCvVm~6vCv24gGkidK6-0hsp7oSyK6zVFsUSPgpCdHNxU27xnEazGaLBIhEtTRkeYV-ycX98bETvoZvELm47Ln7OcUnkcUdpJfa415tYj2JVUWRymV1gF0q~YvO287tW0OQM9hWIrOtx5xLfBGja5EaNAxXf~BEIHjpgfcHYWiUv0Hi~91eVg1qP6Wv-mj5IwTcdoYcAbT1hskPP4lW6mjoWHg0ewdZdQIFpxpJbr7L9NL4Tr~GmHtgL5W8cMw~-w21MWMt2KDGwA6x~7Yp64dbJCwZ~RZ2arXGydZHng__",
    title: "Анализатор Мочи MINDUA-66",
    article: 213134,
    price: "300 000",
    status: "Новинка",
  },
  {
    id: 2,
    src: "../category/Phtoto.png",
    title: "Анализатор Мочи MINDUA-66",
    article: 213134,
    price: "300 000",
    status: "ХитПродаж",
  },
  {
    id: 3,
    src: "https://s3-alpha-sig.figma.com/img/d2e6/71b1/8132204915c34ae4aa933a3947a30dfe?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b9AkS0S9gVIeuJ2MgvW1pNcu-12gY-0~hoU3wAgC~g3ByYyEb1ujKxD-HPL1WiUDgcX9mkCQfFl6ys2bISFKdhW6QHs-nNynUc5uFQm2mQlycBdY0K~F8VHYl808nAi0JF5p7YsABLndcyPqU8I1rXWDIK7lksHVzV7byZOoQCmFSZi70TTcAR0cPAIBZRUGsxhD8alVthHMIQWDDh4r3m55S4jCE91I~Vgpyzc~SWR1o5aqU4iiMIXLYRs~hhnF2CrrMnjUI55wE5~fsNywGw79R8jcQ5MFfsOKGKbVrsEYoiukkvL9w7g-C3ZgW67HE~UPgvPngi3FRbBMrhEYCA__",
    title: "Анализатор Мочи MINDUA-66",
    article: 213134,
    price: "300 000",
    status: "-30%",
  },
];
export const BasketProducts = () => {
  const { t } = useTranslation();
  return (
    <>
      <Row gutter={[20, 20]}>
        <Col span={24} md={16} lg={18} className="space-y-4">
          {itemsProduct.map((item) => (
            <div
              className="!border border-gray-300 rounded-xl flex"
              key={item.id}
            >
              <div className="bg-white w-[50%] sm:w-[30%] lg:w-[35%] p-1 sm:p-3 rounded-s-xl min-h-64 border">
                <div className="flex justify-between items-center flex-wrap">
                  <StyledButton status={item.status}>
                    {t(item.status)}
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
    status === "Новинка"
      ? "#088269"
      : status === "ХитПродаж"
      ? "#59599A"
      : "#855E00"};
  border: 1px solid
    ${({ status }) =>
      status === "Новинка"
        ? "#088269"
        : status === "ХитПродаж"
        ? "#59599A"
        : "#855E00"};
  background-color: ${({ status }) =>
    status === "Новинка"
      ? "#448c7e2f"
      : status === "ХитПродаж"
      ? "#59599a44"
      : "#ffeeba"};
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
