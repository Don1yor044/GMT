import styled from "@emotion/styled";
import { Button, Col, Pagination, Row, Typography } from "antd";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaRegHeart } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { LuBarChartBig } from "react-icons/lu";
import { catalogTovar } from "types/types";
import baseURL from "utils/api";
interface ImageContainerProps {
  src: string;
}
const categories = [
  "Группы товаров",
  "Мониторы",
  "Лампы",
  "Кровати",
  "Рентгены",
];
export const Cards = () => {
  const [dataCourse, setDataCourse] = useState<catalogTovar[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const paginationRef = useRef(null);
  const { t } = useTranslation();

  const startIndex = (currentPage - 1) * 9;
  const endIndex = startIndex + 9;
  const currentItems = dataCourse.slice(startIndex, endIndex);

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
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await baseURL.get(`CategoryItems`);
        if (res.data) {
          const Filter = res.data.filter(
            (item: catalogTovar) => item.status == 3
          );
          setDataCourse(Filter);
        }
        console.log(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
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
                        <StyledButton>
                          <span className="text-xs sm:text-sm">-30 %</span>
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
              total={dataCourse.length}
              pageSize={10}
              onChange={handlePageChange}
            />
          </StylePagination>
        </div>
      </div>
    </>
  );
};
const StyledButton = styled.div`
  color: #855e00;
  border: 1px solid #855e00;
  background-color: #ffeeba;
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
