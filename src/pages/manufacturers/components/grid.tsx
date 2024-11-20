import { SearchOutlined } from "@ant-design/icons";
import { PrimaryButton, SecondaryButton } from "@components/buttons";
import styled from "@emotion/styled";
import { Checkbox, Col, Input, Pagination, Row, Typography } from "antd";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Grid = () => {
  const { t } = useTranslation();
  const [drawer, setDrawer] = useState(true);
  const [selectedCountries] = useState<string[]>([
    "Австрия",
    "Беларусь",
    "Великобритания",
    "Израиль",
    "Испания",
  ]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const paginationRef = useRef(null);
  const startIndex = (currentPage - 1) * 10;
  const endIndex = startIndex + 10;

  const countries = [
    "Австралия",
    "Австрия",
    "Беларусь",
    "Бельгия",
    "Великобритания",
    "Германия",
    "Израиль",
    "Испания",
  ];
  const items = [
    {
      id: 1,
      src: "https://s3-alpha-sig.figma.com/img/40a3/9e49/81e4863f171c830a16afa5bd4155182f?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SOX~oDO1JcV~gymn6NIC5bXSHVqzYDxoqjGazEOkQULUfjY2HWqKkP90I~4VenR6JksMWDVhltyFF~4dgqw9Nis-54GbWsU1ffezcjEpcztIqtTQNArrD6Gje3eLG5gXCcM88cbd7gEXu38VVSRMatyEevgHNbVYjhDKCK8raotBEI9sJ5O8wNMtuKr03a2zWouXHoOcMPwQkGmuRHmGeddoqhX5UtbMh4AgHuaysjtP2RI8Twd~d4dL35urQ9TAdbK~rWgLAcZFnV1RjomaAfLPFWoYnDK2y84ep7q3u3OWINTjNT26wiR8iUwBVsfMs0HdB4pDI8ucsigFjV9doA__",
      title: "НМИЦ онкологии им. Н.Н. Блохина",
    },
    {
      id: 2,
      src: "https://s3-alpha-sig.figma.com/img/40a3/9e49/81e4863f171c830a16afa5bd4155182f?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SOX~oDO1JcV~gymn6NIC5bXSHVqzYDxoqjGazEOkQULUfjY2HWqKkP90I~4VenR6JksMWDVhltyFF~4dgqw9Nis-54GbWsU1ffezcjEpcztIqtTQNArrD6Gje3eLG5gXCcM88cbd7gEXu38VVSRMatyEevgHNbVYjhDKCK8raotBEI9sJ5O8wNMtuKr03a2zWouXHoOcMPwQkGmuRHmGeddoqhX5UtbMh4AgHuaysjtP2RI8Twd~d4dL35urQ9TAdbK~rWgLAcZFnV1RjomaAfLPFWoYnDK2y84ep7q3u3OWINTjNT26wiR8iUwBVsfMs0HdB4pDI8ucsigFjV9doA__",
      title: "НМИЦ онкологии им. Н.Н. Блохина",
    },
    {
      id: 3,
      src: "https://s3-alpha-sig.figma.com/img/40a3/9e49/81e4863f171c830a16afa5bd4155182f?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SOX~oDO1JcV~gymn6NIC5bXSHVqzYDxoqjGazEOkQULUfjY2HWqKkP90I~4VenR6JksMWDVhltyFF~4dgqw9Nis-54GbWsU1ffezcjEpcztIqtTQNArrD6Gje3eLG5gXCcM88cbd7gEXu38VVSRMatyEevgHNbVYjhDKCK8raotBEI9sJ5O8wNMtuKr03a2zWouXHoOcMPwQkGmuRHmGeddoqhX5UtbMh4AgHuaysjtP2RI8Twd~d4dL35urQ9TAdbK~rWgLAcZFnV1RjomaAfLPFWoYnDK2y84ep7q3u3OWINTjNT26wiR8iUwBVsfMs0HdB4pDI8ucsigFjV9doA__",
      title: "НМИЦ онкологии им. Н.Н. Блохина",
    },
    {
      id: 4,
      src: "https://s3-alpha-sig.figma.com/img/40a3/9e49/81e4863f171c830a16afa5bd4155182f?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SOX~oDO1JcV~gymn6NIC5bXSHVqzYDxoqjGazEOkQULUfjY2HWqKkP90I~4VenR6JksMWDVhltyFF~4dgqw9Nis-54GbWsU1ffezcjEpcztIqtTQNArrD6Gje3eLG5gXCcM88cbd7gEXu38VVSRMatyEevgHNbVYjhDKCK8raotBEI9sJ5O8wNMtuKr03a2zWouXHoOcMPwQkGmuRHmGeddoqhX5UtbMh4AgHuaysjtP2RI8Twd~d4dL35urQ9TAdbK~rWgLAcZFnV1RjomaAfLPFWoYnDK2y84ep7q3u3OWINTjNT26wiR8iUwBVsfMs0HdB4pDI8ucsigFjV9doA__",
      title: "НМИЦ онкологии им. Н.Н. Блохина",
    },
    {
      id: 5,
      src: "https://s3-alpha-sig.figma.com/img/40a3/9e49/81e4863f171c830a16afa5bd4155182f?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SOX~oDO1JcV~gymn6NIC5bXSHVqzYDxoqjGazEOkQULUfjY2HWqKkP90I~4VenR6JksMWDVhltyFF~4dgqw9Nis-54GbWsU1ffezcjEpcztIqtTQNArrD6Gje3eLG5gXCcM88cbd7gEXu38VVSRMatyEevgHNbVYjhDKCK8raotBEI9sJ5O8wNMtuKr03a2zWouXHoOcMPwQkGmuRHmGeddoqhX5UtbMh4AgHuaysjtP2RI8Twd~d4dL35urQ9TAdbK~rWgLAcZFnV1RjomaAfLPFWoYnDK2y84ep7q3u3OWINTjNT26wiR8iUwBVsfMs0HdB4pDI8ucsigFjV9doA__",
      title: "НМИЦ онкологии им. Н.Н. Блохина",
    },
    {
      id: 6,
      src: "https://s3-alpha-sig.figma.com/img/40a3/9e49/81e4863f171c830a16afa5bd4155182f?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SOX~oDO1JcV~gymn6NIC5bXSHVqzYDxoqjGazEOkQULUfjY2HWqKkP90I~4VenR6JksMWDVhltyFF~4dgqw9Nis-54GbWsU1ffezcjEpcztIqtTQNArrD6Gje3eLG5gXCcM88cbd7gEXu38VVSRMatyEevgHNbVYjhDKCK8raotBEI9sJ5O8wNMtuKr03a2zWouXHoOcMPwQkGmuRHmGeddoqhX5UtbMh4AgHuaysjtP2RI8Twd~d4dL35urQ9TAdbK~rWgLAcZFnV1RjomaAfLPFWoYnDK2y84ep7q3u3OWINTjNT26wiR8iUwBVsfMs0HdB4pDI8ucsigFjV9doA__",
      title: "НМИЦ онкологии им. Н.Н. Блохина",
    },
    {
      id: 7,
      src: "https://s3-alpha-sig.figma.com/img/40a3/9e49/81e4863f171c830a16afa5bd4155182f?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SOX~oDO1JcV~gymn6NIC5bXSHVqzYDxoqjGazEOkQULUfjY2HWqKkP90I~4VenR6JksMWDVhltyFF~4dgqw9Nis-54GbWsU1ffezcjEpcztIqtTQNArrD6Gje3eLG5gXCcM88cbd7gEXu38VVSRMatyEevgHNbVYjhDKCK8raotBEI9sJ5O8wNMtuKr03a2zWouXHoOcMPwQkGmuRHmGeddoqhX5UtbMh4AgHuaysjtP2RI8Twd~d4dL35urQ9TAdbK~rWgLAcZFnV1RjomaAfLPFWoYnDK2y84ep7q3u3OWINTjNT26wiR8iUwBVsfMs0HdB4pDI8ucsigFjV9doA__",
      title: "НМИЦ онкологии им. Н.Н. Блохина",
    },
    {
      id: 8,
      src: "https://s3-alpha-sig.figma.com/img/40a3/9e49/81e4863f171c830a16afa5bd4155182f?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SOX~oDO1JcV~gymn6NIC5bXSHVqzYDxoqjGazEOkQULUfjY2HWqKkP90I~4VenR6JksMWDVhltyFF~4dgqw9Nis-54GbWsU1ffezcjEpcztIqtTQNArrD6Gje3eLG5gXCcM88cbd7gEXu38VVSRMatyEevgHNbVYjhDKCK8raotBEI9sJ5O8wNMtuKr03a2zWouXHoOcMPwQkGmuRHmGeddoqhX5UtbMh4AgHuaysjtP2RI8Twd~d4dL35urQ9TAdbK~rWgLAcZFnV1RjomaAfLPFWoYnDK2y84ep7q3u3OWINTjNT26wiR8iUwBVsfMs0HdB4pDI8ucsigFjV9doA__",
      title: "НМИЦ онкологии им. Н.Н. Блохина",
    },
    {
      id: 9,
      src: "https://s3-alpha-sig.figma.com/img/40a3/9e49/81e4863f171c830a16afa5bd4155182f?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SOX~oDO1JcV~gymn6NIC5bXSHVqzYDxoqjGazEOkQULUfjY2HWqKkP90I~4VenR6JksMWDVhltyFF~4dgqw9Nis-54GbWsU1ffezcjEpcztIqtTQNArrD6Gje3eLG5gXCcM88cbd7gEXu38VVSRMatyEevgHNbVYjhDKCK8raotBEI9sJ5O8wNMtuKr03a2zWouXHoOcMPwQkGmuRHmGeddoqhX5UtbMh4AgHuaysjtP2RI8Twd~d4dL35urQ9TAdbK~rWgLAcZFnV1RjomaAfLPFWoYnDK2y84ep7q3u3OWINTjNT26wiR8iUwBVsfMs0HdB4pDI8ucsigFjV9doA__",
      title: "НМИЦ онкологии им. Н.Н. Блохина",
    },
    {
      id: 10,
      src: "https://s3-alpha-sig.figma.com/img/40a3/9e49/81e4863f171c830a16afa5bd4155182f?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SOX~oDO1JcV~gymn6NIC5bXSHVqzYDxoqjGazEOkQULUfjY2HWqKkP90I~4VenR6JksMWDVhltyFF~4dgqw9Nis-54GbWsU1ffezcjEpcztIqtTQNArrD6Gje3eLG5gXCcM88cbd7gEXu38VVSRMatyEevgHNbVYjhDKCK8raotBEI9sJ5O8wNMtuKr03a2zWouXHoOcMPwQkGmuRHmGeddoqhX5UtbMh4AgHuaysjtP2RI8Twd~d4dL35urQ9TAdbK~rWgLAcZFnV1RjomaAfLPFWoYnDK2y84ep7q3u3OWINTjNT26wiR8iUwBVsfMs0HdB4pDI8ucsigFjV9doA__",
      title: "НМИЦ онкологии им. Н.Н. Блохина",
    },
  ];
  const currentItems = items.slice(startIndex, endIndex);

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

  const filteredCountries = countries.filter((country) =>
    t(country).toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Row gutter={[20, 20]}>
        <Col lg={6} md={7} className="hidden md:block">
          <div className="p-3 border rounded-lg">
            <div className="flex justify-between items-center cursor-pointer">
              <Typography className="text-base font-semibold">
                {t(`Направления`)}
              </Typography>
              <IoIosArrowDown size={19} />
            </div>
          </div>
          <div className="p-3 border rounded-lg mt-2">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setDrawer((prev) => !prev)}
            >
              <Typography className="text-base font-semibold">
                {t(`Страны`)}
              </Typography>

              {drawer ? (
                <IoIosArrowUp size={19} />
              ) : (
                <IoIosArrowDown size={19} />
              )}
            </div>
            {drawer && (
              <div>
                <div className="my-4">
                  <Input
                    placeholder={t(`ПоискПоСтране`)}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    suffix={
                      <SearchOutlined style={{ color: "#aaa", fontSize: 18 }} />
                    }
                    style={{
                      border: "1px solid #E5E2EE", // Remove border
                      boxShadow: "none", // Remove outline
                      padding: "8px 20px",
                      borderRadius: "20px", // Optional: Keep some roundness
                    }}
                  />
                </div>
                <div className="space-y-2 max-h-64 overflow-auto">
                  {filteredCountries.map((country) => (
                    <label
                      key={t(country)}
                      className="flex items-center space-x-3 rounded-lg text-base"
                    >
                      <Checkbox checked={selectedCountries.includes(country)} />
                      <span>{t(country)}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="flex gap-3 mt-2 items-center">
            <SecondaryButton text="Сбросить" size={40} />
            <PrimaryButton text="Показать" size={50} />
          </div>
        </Col>
        <Col span={24} className="block md:hidden">
          <div className="p-3 border rounded-lg">
            <div className="flex justify-center items-center cursor-pointer">
              <Typography className="text-base font-semibold">
                {t(`Фильтр`)}
              </Typography>
            </div>
          </div>
        </Col>
        <Col lg={18} md={17} span={24}>
          <Row gutter={[10, 10]}>
            {currentItems.map((item) => (
              <Col lg={8} span={12} key={item.id}>
                <div className="border rounded-xl">
                  <div className="bg-white rounded-tl-xl rounded-tr-xl flex justify-center">
                    <img
                      src={item.src}
                      alt=""
                      className="rounded-tr-xl rounded-tl-xl h-[200px] w-auto max-w-[65%] object-contain m-auto"
                    />
                  </div>
                  <div className="md:p-5 md:px-7 p-3 border-t-2 rounded-b-xl bg-[#F8F7F3]">
                    <Typography.Title level={5}>
                      {t(item.title)}
                    </Typography.Title>
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
          total={items.length}
          pageSize={10}
          onChange={handlePageChange}
        />
      </StylePagination>
    </>
  );
};

export default Grid;
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
