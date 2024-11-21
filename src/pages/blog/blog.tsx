import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { RiArrowRightSLine } from "react-icons/ri";
import { Col, Dropdown, MenuProps, Pagination, Row, Typography } from "antd";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import { HomeSubscription } from "@components/subscription";
import { Footer } from "@components/footer";
import { SecondaryButton } from "@components/buttons";
import { Header } from "@components/header";
import { BreadcrumbTwo } from "@components/breadCrumb";
export const Blog = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const paginationRef = useRef(null);

  const items = [
    {
      id: 1,
      title: "Реанимация",
    },
    {
      id: 2,
      title: "Хирургия",
    },
    {
      id: 3,
      title: "Офтальмология",
    },
    {
      id: 4,
      title: "ЛабораторнаяДиагностика",
    },
    {
      id: 5,
      title: "АкушерствоИГинекология",
    },
    {
      id: 6,
      title: "Гистология",
    },
    {
      id: 7,
      title: "Косметология",
    },
    {
      id: 9,
      title: "Оториноларингология",
    },
    {
      id: 10,
      title: "РентгенологияИТомография",
    },
    {
      id: 11,
      title: "Стерилизация",
    },
    {
      id: 12,
      title: "ФизиотерапияИРеабилитация",
    },
    {
      id: 13,
      title: "ФункциональнаяДиагностика",
    },
    {
      id: 14,
      title: "Эндоскопия",
    },
  ];
  const items2: MenuProps["items"] = [
    {
      label: (
        <div className="flex justify-between w-full items-center">
          {t(`Реанимация`)}
          <RiArrowRightSLine size={20} />
        </div>
      ),
      key: "0",
    },
    {
      label: (
        <div className="flex justify-between w-full items-center">
          {t(`Хирургия`)}
          <RiArrowRightSLine size={20} />
        </div>
      ),
      key: "1",
    },
    {
      label: (
        <div className="flex justify-between w-full items-center">
          {t(`Офтальмология`)}
          <RiArrowRightSLine size={20} />
        </div>
      ),
      key: "2",
    },
    {
      label: (
        <div className="flex justify-between w-full items-center">
          {t(`ЛабораторнаяДиагностика`)}
          <RiArrowRightSLine size={20} />
        </div>
      ),
      key: "3",
    },
    {
      label: (
        <div className="flex justify-between w-full items-center">
          {t(`АкушерствоИГинекология`)}
          <RiArrowRightSLine size={20} />
        </div>
      ),
      key: "4",
    },
    {
      label: (
        <div className="flex justify-between w-full items-center">
          {t(`Гистология`)}
          <RiArrowRightSLine size={20} />
        </div>
      ),
      key: "5",
    },
    {
      label: (
        <div className="flex justify-between w-full items-center">
          {t(`Косметология`)}
          <RiArrowRightSLine size={20} />
        </div>
      ),
      key: "6",
    },
    {
      label: (
        <div className="flex justify-between w-full items-center">
          {t(`Оториноларингология`)}
          <RiArrowRightSLine size={20} />
        </div>
      ),
      key: "7",
    },
    {
      label: (
        <div className="flex justify-between w-full items-center">
          {t(`РентгенологияИТомография`)}
          <RiArrowRightSLine size={20} />
        </div>
      ),
      key: "8",
    },
    {
      label: (
        <div className="flex justify-between w-full items-center">
          {t(`Стерилизация`)}
          <RiArrowRightSLine size={20} />
        </div>
      ),
      key: "9",
    },
    {
      label: (
        <div className="flex justify-between w-full items-center">
          {t(`ФизиотерапияИРеабилитация`)}
          <RiArrowRightSLine size={20} />
        </div>
      ),
      key: "10",
    },
    {
      label: (
        <div className="flex justify-between w-full items-center">
          {t(`ФункциональнаяДиагностика`)}
          <RiArrowRightSLine size={20} />
        </div>
      ),
      key: "11",
    },
    {
      label: (
        <div className="flex justify-between w-full items-center">
          {t(`Эндоскопия`)}
          <RiArrowRightSLine size={20} />
        </div>
      ),
      key: "12",
    },
  ];
  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
  };
  const CardItems = [
    {
      id: 1,
      img: "../blog/Rectangle (50).png",
      title: "Что такое инфузомат (инфузионный насос)",
      date: "14.03.2023",
      descriptions:
        "Обеспечение нашей деятельности требует определения и уточнения распределения внутренних резервов и ресурсов.  Каждый из нас понимает очевидную вещь.",
    },
    {
      id: 2,
      img: "../blog/Rectangle (51).png",
      title: "Что такое инфузомат (инфузионный насос)",
      date: "14.03.2023",
      descriptions:
        "Обеспечение нашей деятельности требует определения и уточнения распределения внутренних резервов и ресурсов.  Каждый из нас понимает очевидную вещь: понимание сути ресурсосберегающих технологий создаёт.",
    },
    {
      id: 3,
      img: "../blog/Rectangle (52).png",
      title: "Что такое инфузомат (инфузионный насос)",
      date: "14.03.2023",
      descriptions:
        "Обеспечение нашей деятельности требует определения и уточнения распределения внутренних резервов и ресурсов.  Каждый из нас понимает очевидную вещь.",
    },
    {
      id: 4,
      img: "../blog/Rectangle (53).png",
      title: "Что такое инфузомат (инфузионный насос)",
      date: "14.03.2023",
      descriptions:
        "Обеспечение нашей деятельности требует определения и уточнения распределения внутренних резервов и ресурсов.  Каждый из нас понимает очевидную вещь.",
    },
    {
      id: 5,
      img: "../blog/Rectangle (50).png",
      title: "Что такое инфузомат (инфузионный насос)",
      date: "14.03.2023",
      descriptions:
        "Обеспечение нашей деятельности требует определения и уточнения распределения внутренних резервов и ресурсов.  Каждый из нас понимает очевидную вещь.",
    },
    {
      id: 6,
      img: "../blog/Rectangle (52).png",
      title: "Что такое инфузомат (инфузионный насос)",
      date: "14.03.2023",
      descriptions:
        "Обеспечение нашей деятельности требует определения и уточнения распределения внутренних резервов и ресурсов.  Каждый из нас понимает очевидную вещь.",
    },
  ];
  const startIndex = (currentPage - 1) * 4;
  const endIndex = startIndex + 4;
  const currentItems = CardItems.slice(startIndex, endIndex);

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
      <Header />
      <div className="px-4 py-2 lg:px-14">
        <BreadcrumbTwo currentPage="Блог" />
        <div className="mt-5 md:mt-10 lg:mt-20">
          <div className="flex justify-between">
            <Typography className="font-semibold text-3xl sm:text-5xl">
              {t(`Блог`)}
            </Typography>
            <div className=" md:w-[33%] border rounded-xl hidden md:block xl:hidden ">
              <Dropdown
                menu={{ items: items2 }}
                trigger={["click"]}
                onOpenChange={handleOpenChange}
              >
                <a onClick={(e) => e.preventDefault()}>
                  <div className="flex justify-between p-3 items-center">
                    <Typography className="text-base font-semibold">
                      {t(`Направления`)}
                    </Typography>
                    {isOpen ? (
                      <IoIosArrowUp size={18} />
                    ) : (
                      <IoIosArrowDown size={18} />
                    )}
                  </div>
                </a>
              </Dropdown>
            </div>
          </div>
          <div className="my-5">
            <Row gutter={[20, 20]}>
              <Col lg={6} className="hidden xl:block">
                <div className="p-4 border rounded-lg">
                  <Typography.Title level={5}>
                    {t(`Направления`)}
                  </Typography.Title>
                  <hr className="my-4" />

                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between items-center py-1 cursor-pointer"
                      onClick={() => navigate(`/${item.title}`)}
                    >
                      <Typography className="text-base">
                        {t(item.title)}
                      </Typography>
                      <RiArrowRightSLine size={19} />{" "}
                    </div>
                  ))}
                </div>
              </Col>
              <Col span={24} className="flex md:hidden cursor-pointer">
                <div className="flex justify-center border w-full p-3">
                  <Typography className="font-semibold">
                    {t(`Направления`)}
                  </Typography>
                </div>
              </Col>
              <Col span={24} lg={24} xl={18}>
                <Row gutter={[10, 10]}>
                  {currentItems.map((item) => (
                    <Col lg={24} md={12} key={item.id}>
                      <div className="bg-white border rounded-xl flex w-full flex-wrap min-h-80">
                        <div className="lg:w-[40%] w-full">
                          <img
                            src={item.img}
                            alt="photo"
                            className="h-60 md:h-full w-full object-cover lg:rounded-l-xl lg:rounded-r-none rounded-md rounded-b-none"
                          />
                        </div>
                        <div className="py-5 px-5 lg:px-10 relative lg:w-[60%] w-full">
                          <Typography className="font-semibold text-2xl">
                            {t(item.title)}
                          </Typography>
                          <Typography className="text-[#7A7687]">
                            {item.date}
                          </Typography>
                          <Typography className="text-[#7A7687] text-md sm:text-lg md:text-lg mt-5 lg:min-h-10 sm:min-h-64 min-h-56">
                            {t(item.descriptions)}
                          </Typography>

                          <div className="absolute bottom-7">
                            <SecondaryButton text={t("Подробнее")} />
                          </div>
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
            <StylePagination ref={paginationRef}>
              <Pagination
                current={currentPage}
                total={CardItems.length}
                pageSize={4}
                onChange={handlePageChange}
              />
            </StylePagination>
          </div>
        </div>
      </div>
      <HomeSubscription />
      <Footer />
    </>
  );
};

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
