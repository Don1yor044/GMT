import { SecondaryButton } from "@components/buttons";
import styled from "@emotion/styled";
import { Button, Col, Pagination, Row, Typography } from "antd";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaRegHeart } from "react-icons/fa";
import { LuBarChartBig } from "react-icons/lu";
interface ImageContainerProps {
  src: string;
}
interface StyledButtonProps {
  status: string;
}
export const ListProducts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const paginationRef = useRef(null);
  const { t } = useTranslation();
  const itemsProduct = [
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
    {
      id: 4,
      src: "https://s3-alpha-sig.figma.com/img/98d6/ce68/ca05465aa55ba84ace8005d1e27d304e?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JF03XnkxPtJqZP~WkiPPjrSTlpi6qfHG1YUXGXBdd3Em~VCvVm~6vCv24gGkidK6-0hsp7oSyK6zVFsUSPgpCdHNxU27xnEazGaLBIhEtTRkeYV-ycX98bETvoZvELm47Ln7OcUnkcUdpJfa415tYj2JVUWRymV1gF0q~YvO287tW0OQM9hWIrOtx5xLfBGja5EaNAxXf~BEIHjpgfcHYWiUv0Hi~91eVg1qP6Wv-mj5IwTcdoYcAbT1hskPP4lW6mjoWHg0ewdZdQIFpxpJbr7L9NL4Tr~GmHtgL5W8cMw~-w21MWMt2KDGwA6x~7Yp64dbJCwZ~RZ2arXGydZHng__",
      title: "Анализатор Мочи MINDUA-66",
      article: 213134,
      price: "300 100",
      status: "-30%",
    },
  ];
  const startIndex = (currentPage - 1) * 4;
  const endIndex = startIndex + 4;
  const currentItems = itemsProduct.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  useEffect(() => {
    if (paginationRef.current) {
      if (currentPage === 1) {
        window.scrollTo(0, 0);
      } else {
        window.scrollTo(0, 300);
      }
    }
  }, [currentPage]);
  return (
    <>
      <Row gutter={[10, 10]} className="mt-5">
        {currentItems.map((item) => (
          <Col span={24} key={item.id}>
            <div className="!border border-gray-300 rounded-xl flex">
              <div className="bg-white w-[35%] p-3 rounded-s-xl min-h-64 border">
                <div className="flex justify-between items-center">
                  <StyledButton status={item.status}>
                    {t(item.status)}
                  </StyledButton>
                </div>
                <ImageContainer src={item.src}></ImageContainer>
              </div>
              <div className="px-7 p-3 border-t w-[70%]">
                <div className="flex justify-between">
                  <div>
                    {" "}
                    <Typography.Title level={2} className="w-96">
                      {t(item.title)}
                    </Typography.Title>
                    <Typography className="text-[#7A7687]">
                      {t(`Артикул`)}:{item.article}
                    </Typography>
                    <Typography className="text-[#7A7687]">
                      {t(`Вналичии`)}
                    </Typography>
                  </div>
                  <div className="flex">
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
                <div className="flex justify-between mt-12 w-full">
                  <Typography.Title level={4}>
                    {item.price} руб.
                  </Typography.Title>
                  <div>
                    <SecondaryButton text={t("ДобавитьВкорзину")} size={100} />
                  </div>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
      <StylePagination ref={paginationRef}>
        <Pagination
          current={currentPage}
          total={itemsProduct.length}
          pageSize={4}
          onChange={handlePageChange}
        />
      </StylePagination>
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
