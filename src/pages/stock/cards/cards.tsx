import styled from "@emotion/styled";
import { Button, Col, Pagination, Row, Typography } from "antd";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaRegHeart } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { LuBarChartBig } from "react-icons/lu";
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
const categories = [
  "Группы товаров",
  "Мониторы",
  "Лампы",
  "Кровати",
  "Рентгены",
];
const itemsProduct: ProductsType[] = [
  {
    id: 1,
    src: "https://s3-alpha-sig.figma.com/img/98d6/ce68/ca05465aa55ba84ace8005d1e27d304e?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JF03XnkxPtJqZP~WkiPPjrSTlpi6qfHG1YUXGXBdd3Em~VCvVm~6vCv24gGkidK6-0hsp7oSyK6zVFsUSPgpCdHNxU27xnEazGaLBIhEtTRkeYV-ycX98bETvoZvELm47Ln7OcUnkcUdpJfa415tYj2JVUWRymV1gF0q~YvO287tW0OQM9hWIrOtx5xLfBGja5EaNAxXf~BEIHjpgfcHYWiUv0Hi~91eVg1qP6Wv-mj5IwTcdoYcAbT1hskPP4lW6mjoWHg0ewdZdQIFpxpJbr7L9NL4Tr~GmHtgL5W8cMw~-w21MWMt2KDGwA6x~7Yp64dbJCwZ~RZ2arXGydZHng__",
    title: "Анализатор Мочи MINDUA-66",
    article: 213134,
    price: "300 000",
    status: "-30%",
  },
  {
    id: 2,
    src: "../category/Phtoto.png",
    title: "Анализатор Мочи MINDUA-66",
    article: 213134,
    price: "300 000",
    status: "-50%",
  },
  {
    id: 3,
    src: "https://s3-alpha-sig.figma.com/img/d2e6/71b1/8132204915c34ae4aa933a3947a30dfe?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b9AkS0S9gVIeuJ2MgvW1pNcu-12gY-0~hoU3wAgC~g3ByYyEb1ujKxD-HPL1WiUDgcX9mkCQfFl6ys2bISFKdhW6QHs-nNynUc5uFQm2mQlycBdY0K~F8VHYl808nAi0JF5p7YsABLndcyPqU8I1rXWDIK7lksHVzV7byZOoQCmFSZi70TTcAR0cPAIBZRUGsxhD8alVthHMIQWDDh4r3m55S4jCE91I~Vgpyzc~SWR1o5aqU4iiMIXLYRs~hhnF2CrrMnjUI55wE5~fsNywGw79R8jcQ5MFfsOKGKbVrsEYoiukkvL9w7g-C3ZgW67HE~UPgvPngi3FRbBMrhEYCA__",
    title: "Анализатор Мочи MINDUA-66",
    article: 213134,
    price: "300 000",
    status: "-30%",
  },
  {
    id: 4,
    src: "https://s3-alpha-sig.figma.com/img/98d6/ce68/ca05465aa55ba84ace8005d1e27d304e?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JF03XnkxPtJqZP~WkiPPjrSTlpi6qfHG1YUXGXBdd3Em~VCvVm~6vCv24gGkidK6-0hsp7oSyK6zVFsUSPgpCdHNxU27xnEazGaLBIhEtTRkeYV-ycX98bETvoZvELm47Ln7OcUnkcUdpJfa415tYj2JVUWRymV1gF0q~YvO287tW0OQM9hWIrOtx5xLfBGja5EaNAxXf~BEIHjpgfcHYWiUv0Hi~91eVg1qP6Wv-mj5IwTcdoYcAbT1hskPP4lW6mjoWHg0ewdZdQIFpxpJbr7L9NL4Tr~GmHtgL5W8cMw~-w21MWMt2KDGwA6x~7Yp64dbJCwZ~RZ2arXGydZHng__",
    title: "Анализатор Мочи MINDUA-66",
    article: 213134,
    price: "300 100",
    status: "-30%",
  },
  {
    id: 5,
    src: "https://s3-alpha-sig.figma.com/img/d2e6/71b1/8132204915c34ae4aa933a3947a30dfe?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b9AkS0S9gVIeuJ2MgvW1pNcu-12gY-0~hoU3wAgC~g3ByYyEb1ujKxD-HPL1WiUDgcX9mkCQfFl6ys2bISFKdhW6QHs-nNynUc5uFQm2mQlycBdY0K~F8VHYl808nAi0JF5p7YsABLndcyPqU8I1rXWDIK7lksHVzV7byZOoQCmFSZi70TTcAR0cPAIBZRUGsxhD8alVthHMIQWDDh4r3m55S4jCE91I~Vgpyzc~SWR1o5aqU4iiMIXLYRs~hhnF2CrrMnjUI55wE5~fsNywGw79R8jcQ5MFfsOKGKbVrsEYoiukkvL9w7g-C3ZgW67HE~UPgvPngi3FRbBMrhEYCA__",
    title: "Анализатор Мочи MINDUA-66",
    article: 213134,
    price: "300 000",
    status: "-30%",
  },
  {
    id: 6,
    src: "../category/Phtoto.png",
    title: "Анализатор Мочи MINDUA-66",
    article: 213134,
    price: "300 000",
    status: "-25%",
  },
  {
    id: 7,
    src: "https://s3-alpha-sig.figma.com/img/d2e6/71b1/8132204915c34ae4aa933a3947a30dfe?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b9AkS0S9gVIeuJ2MgvW1pNcu-12gY-0~hoU3wAgC~g3ByYyEb1ujKxD-HPL1WiUDgcX9mkCQfFl6ys2bISFKdhW6QHs-nNynUc5uFQm2mQlycBdY0K~F8VHYl808nAi0JF5p7YsABLndcyPqU8I1rXWDIK7lksHVzV7byZOoQCmFSZi70TTcAR0cPAIBZRUGsxhD8alVthHMIQWDDh4r3m55S4jCE91I~Vgpyzc~SWR1o5aqU4iiMIXLYRs~hhnF2CrrMnjUI55wE5~fsNywGw79R8jcQ5MFfsOKGKbVrsEYoiukkvL9w7g-C3ZgW67HE~UPgvPngi3FRbBMrhEYCA__",
    title: "Анализатор Мочи MINDUA-66",
    article: 213134,
    price: "300 000",
    status: "-30%",
  },
  {
    id: 8,
    src: "https://s3-alpha-sig.figma.com/img/98d6/ce68/ca05465aa55ba84ace8005d1e27d304e?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JF03XnkxPtJqZP~WkiPPjrSTlpi6qfHG1YUXGXBdd3Em~VCvVm~6vCv24gGkidK6-0hsp7oSyK6zVFsUSPgpCdHNxU27xnEazGaLBIhEtTRkeYV-ycX98bETvoZvELm47Ln7OcUnkcUdpJfa415tYj2JVUWRymV1gF0q~YvO287tW0OQM9hWIrOtx5xLfBGja5EaNAxXf~BEIHjpgfcHYWiUv0Hi~91eVg1qP6Wv-mj5IwTcdoYcAbT1hskPP4lW6mjoWHg0ewdZdQIFpxpJbr7L9NL4Tr~GmHtgL5W8cMw~-w21MWMt2KDGwA6x~7Yp64dbJCwZ~RZ2arXGydZHng__",
    title: "Анализатор Мочи MINDUA-66",
    article: 213134,
    price: "300 100",
    status: "-30%",
  },
  {
    id: 9,
    src: "../category/Phtoto.png",
    title: "Анализатор Мочи MINDUA-66",
    article: 213134,
    price: "300 000",
    status: "-10%",
  },
];
export const Cards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const paginationRef = useRef(null);
  const { t } = useTranslation();

  const startIndex = (currentPage - 1) * 9;
  const endIndex = startIndex + 9;
  const currentItems = itemsProduct.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  useEffect(() => {
    if (paginationRef.current) {
      if (currentPage !== 1) {
        window.scrollTo(0, 1300);
      }
    }
  }, [currentPage]);
  return (
    <>
      <div className="mt-5">
        <Row gutter={[20, 20]}>
          <Col span={24} md={8} lg={6}>
            <div className="border rounded-lg px-5 py-3 md:block hidden">
              <Typography className="text-lg">{t(`Категория`)}</Typography>
              <hr className="my-4" />
              <div className="space-y-3">
                {categories.map((category, index) => (
                  <div
                    key={index}
                    className="flex justify-between cursor-pointer"
                  >
                    <Typography className="text-base">{t(category)}</Typography>
                    <IoIosArrowForward />
                  </div>
                ))}
              </div>
            </div>
            <div className="md:hidden flex">
              <div className="p-3 border rounded-lg mt-2 w-full flex justify-center">
                {t(`Фильтр`)}
              </div>
            </div>
          </Col>
          <Col span={24} md={16} lg={18}>
            <Row gutter={[20, 20]}>
              {currentItems.map((item) => (
                <Col span={12} lg={8} key={item.id}>
                  <div className="!border border-gray-300 rounded-xl">
                    <div className="bg-white h-60 sm:h-72 p-2 sm:p-3 rounded-t-xl">
                      <div className="flex justify-between items-center">
                        <StyledButton status={item.status}>
                          <span className="text-xs sm:text-sm">
                            {t(item.status)}
                          </span>
                        </StyledButton>
                        <div className="flex gap-1">
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
                            <FaRegHeart size={19} />
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
          </Col>
        </Row>
        <div className="flex justify-center mt-10">
          <StylePagination ref={paginationRef}>
            <Pagination
              current={currentPage}
              total={itemsProduct.length}
              pageSize={10}
              onChange={handlePageChange}
            />
          </StylePagination>
        </div>
      </div>
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
const StylePagination = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  .ant-pagination {
    a {
      color: black !important;
      outline: 1px solid gray;
      border-radius: 7px;
    }
    .ant-pagination-item-active {
      border: none !important;
      outline: none !important;
      background-color: #088269;
      a {
        border: none !important;
        outline: none !important;
        color: white !important;
      }
    }
  }
`;
