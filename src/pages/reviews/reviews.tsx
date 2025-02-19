import { BreadcrumbTwo, HomeForm } from "components";
import styled from "@emotion/styled";
import { Col, Pagination, Rate, Row } from "antd";
import Typography from "antd/es/typography/Typography";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
interface IReviews {
  id: number;
  name: string;
  productUz?: string;
  productRu: string;
  productEn?: string;
  date: string;
  desciptionUz?: string;
  desciptionRu: string;
  desciptionEn?: string;
  rate?: number;
}

export const Reviews = () => {
  const { t } = useTranslation();
  const reviewsItems: IReviews[] = [
    {
      id: 1,
      name: "Doniyor Mamaraimov",
      productRu: "Анализатор мочи MIND UA-66",
      date: "14.03.2023",
      desciptionRu:
        "Каждый из нас понимает очевидную вещь: понимание сути ресурсосберегающих технологий создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса новых принципов формирования материально-технической и кадровой базы. Господа, повышение уровня гражданского сознания играет определяющее значение для стандартных подходов. План целого ряда внеочередных мероприятий с учётом комплекса.",
      desciptionUz:
        "Har birimiz aniq narsani tushunamiz: resurslarni tejovchi texnologiyalarning mohiyatini tushunish moddiy-texnik va kadrlar bazasini shakllantirishning yangi tamoyillarini hisobga olgan holda ishlab chiqarish rejasiga bir qator favqulodda tadbirlarni kiritish zaruriyatini tug'diradi. . Janoblar, standart yondashuvlarda fuqarolik ongini oshirish hal qiluvchi rol o'ynaydi. Kompleksni hisobga olgan holda bir qator favqulodda tadbirlar rejasi.",
      desciptionEn:
        "Each of us understands the obvious thing: understanding the essence of resource-saving technologies creates the need to include in the production plan a whole series of extraordinary events taking into account the complex of new principles for the formation of the material and technical and personnel base. Gentlemen, raising the level of civic consciousness plays a decisive role for standard approaches. A plan for a whole series of extraordinary events taking into account the complex.",
      rate: 4,
    },
    {
      id: 2,
      name: "Doston Mamaraimov",
      productRu: "Анализатор мочи MIND UA-66",
      date: "14.03.2023",
      desciptionRu:
        "Не следует, однако, забывать, что граница обучения кадров, а также свежий взгляд на привычные вещи — безусловно открывает новые горизонты для новых принципов формирования.",
      desciptionUz:
        "Ammo shuni unutmasligimiz kerakki, kadrlar tayyorlash chegarasi, shuningdek, tanish narsalarga yangicha qarash, albatta, shakllanishning yangi tamoyillari uchun yangi ufqlarni ochadi.",
      desciptionEn:
        "It should not be forgotten, however, that the boundaries of personnel training, as well as a fresh look at familiar things, certainly open up new horizons for new principles of formation.",
      rate: 5,
    },
    {
      id: 3,
      name: "Doston Mamaraimov",
      productRu: "Анализатор мочи MIND UA-66",
      date: "14.03.2023",
      desciptionRu:
        "Не следует, однако, забывать, что граница обучения кадров, а также свежий взгляд на привычные вещи — безусловно открывает новые горизонты для новых принципов формирования.",
      desciptionUz:
        "Ammo shuni unutmasligimiz kerakki, kadrlar tayyorlash chegarasi, shuningdek, tanish narsalarga yangicha qarash, albatta, shakllanishning yangi tamoyillari uchun yangi ufqlarni ochadi.",
      desciptionEn:
        "It should not be forgotten, however, that the boundaries of personnel training, as well as a fresh look at familiar things, certainly open up new horizons for new principles of formation.",
      rate: 5,
    },
    {
      id: 4,
      name: "Doniyor Mamaraimov",
      productRu: "Анализатор мочи MIND UA-66",
      date: "14.03.2023",
      desciptionRu:
        "Каждый из нас понимает очевидную вещь: понимание сути ресурсосберегающих технологий создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса новых принципов формирования материально-технической и кадровой базы. Господа, повышение уровня гражданского сознания играет определяющее значение для стандартных подходов. План целого ряда внеочередных мероприятий с учётом комплекса.",
      desciptionUz:
        "Har birimiz aniq narsani tushunamiz: resurslarni tejovchi texnologiyalarning mohiyatini tushunish moddiy-texnik va kadrlar bazasini shakllantirishning yangi tamoyillarini hisobga olgan holda ishlab chiqarish rejasiga bir qator favqulodda tadbirlarni kiritish zaruriyatini tug'diradi. . Janoblar, standart yondashuvlarda fuqarolik ongini oshirish hal qiluvchi rol o'ynaydi. Kompleksni hisobga olgan holda bir qator favqulodda tadbirlar rejasi.",
      desciptionEn:
        "Each of us understands the obvious thing: understanding the essence of resource-saving technologies creates the need to include in the production plan a whole series of extraordinary events taking into account the complex of new principles for the formation of the material and technical and personnel base. Gentlemen, raising the level of civic consciousness plays a decisive role for standard approaches. A plan for a whole series of extraordinary events taking into account the complex.",
      rate: 4,
    },
    {
      id: 5,
      name: "Doston Mamaraimov",
      productRu: "Анализатор мочи MIND UA-66",
      date: "14.03.2023",
      desciptionRu:
        "Не следует, однако, забывать, что граница обучения кадров, а также свежий взгляд на привычные вещи — безусловно открывает новые горизонты для новых принципов формирования.",
      desciptionUz:
        "Ammo shuni unutmasligimiz kerakki, kadrlar tayyorlash chegarasi, shuningdek, tanish narsalarga yangicha qarash, albatta, shakllanishning yangi tamoyillari uchun yangi ufqlarni ochadi.",
      desciptionEn:
        "It should not be forgotten, however, that the boundaries of personnel training, as well as a fresh look at familiar things, certainly open up new horizons for new principles of formation.",
      rate: 5,
    },
    {
      id: 6,
      name: "Doniyor Mamaraimov",
      productRu: "Анализатор мочи MIND UA-66",
      date: "14.03.2023",
      desciptionRu:
        "Каждый из нас понимает очевидную вещь: понимание сути ресурсосберегающих технологий создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса новых принципов формирования материально-технической и кадровой базы. Господа, повышение уровня гражданского сознания играет определяющее значение для стандартных подходов. План целого ряда внеочередных мероприятий с учётом комплекса.",
      desciptionUz:
        "Har birimiz aniq narsani tushunamiz: resurslarni tejovchi texnologiyalarning mohiyatini tushunish moddiy-texnik va kadrlar bazasini shakllantirishning yangi tamoyillarini hisobga olgan holda ishlab chiqarish rejasiga bir qator favqulodda tadbirlarni kiritish zaruriyatini tug'diradi. . Janoblar, standart yondashuvlarda fuqarolik ongini oshirish hal qiluvchi rol o'ynaydi. Kompleksni hisobga olgan holda bir qator favqulodda tadbirlar rejasi.",
      desciptionEn:
        "Each of us understands the obvious thing: understanding the essence of resource-saving technologies creates the need to include in the production plan a whole series of extraordinary events taking into account the complex of new principles for the formation of the material and technical and personnel base. Gentlemen, raising the level of civic consciousness plays a decisive role for standard approaches. A plan for a whole series of extraordinary events taking into account the complex.",
      rate: 4,
    },
    {
      id: 7,
      name: "Doston Mamaraimov",
      productRu: "Анализатор мочи MIND UA-66",
      date: "14.03.2023",
      desciptionRu:
        "Не следует, однако, забывать, что граница обучения кадров, а также свежий взгляд на привычные вещи — безусловно открывает новые горизонты для новых принципов формирования.",
      desciptionUz:
        "Ammo shuni unutmasligimiz kerakki, kadrlar tayyorlash chegarasi, shuningdek, tanish narsalarga yangicha qarash, albatta, shakllanishning yangi tamoyillari uchun yangi ufqlarni ochadi.",
      desciptionEn:
        "It should not be forgotten, however, that the boundaries of personnel training, as well as a fresh look at familiar things, certainly open up new horizons for new principles of formation.",
      rate: 5,
    },
    {
      id: 8,
      name: "Doniyor Mamaraimov",
      productRu: "Анализатор мочи MIND UA-66",
      date: "14.03.2023",
      desciptionRu:
        "Каждый из нас понимает очевидную вещь: понимание сути ресурсосберегающих технологий создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса новых принципов формирования материально-технической и кадровой базы. Господа, повышение уровня гражданского сознания играет определяющее значение для стандартных подходов. План целого ряда внеочередных мероприятий с учётом комплекса.",
      desciptionUz:
        "Har birimiz aniq narsani tushunamiz: resurslarni tejovchi texnologiyalarning mohiyatini tushunish moddiy-texnik va kadrlar bazasini shakllantirishning yangi tamoyillarini hisobga olgan holda ishlab chiqarish rejasiga bir qator favqulodda tadbirlarni kiritish zaruriyatini tug'diradi. . Janoblar, standart yondashuvlarda fuqarolik ongini oshirish hal qiluvchi rol o'ynaydi. Kompleksni hisobga olgan holda bir qator favqulodda tadbirlar rejasi.",
      desciptionEn:
        "Each of us understands the obvious thing: understanding the essence of resource-saving technologies creates the need to include in the production plan a whole series of extraordinary events taking into account the complex of new principles for the formation of the material and technical and personnel base. Gentlemen, raising the level of civic consciousness plays a decisive role for standard approaches. A plan for a whole series of extraordinary events taking into account the complex.",
      rate: 4,
    },
  ];
  const LocalStorageLang = localStorage.getItem("selectedLanguage") || "Ru";
  const [currentPage, setCurrentPage] = useState(1);
  const paginationRef = useRef(null);
  const startIndex = (currentPage - 1) * 6;
  const endIndex = startIndex + 6;
  const currentItems = reviewsItems.slice(startIndex, endIndex);

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
      <div className="px-5 py-2 lg:px-14">
        <BreadcrumbTwo currentPage="Отзывы" />
        <div className="mt-10 lg:mt-20">
          <Typography className="text-4xl sm:text-5xl">
            {t(`Отзывы`)}
          </Typography>
          <div className="mt-5">
            <Row gutter={[20, 20]}>
              {currentItems.map((items: IReviews) => (
                <Col span={24} md={12} key={items.id}>
                  <div className="border py-4 px-3 sm:px-4 lg:px-7 bg-white rounded-lg h-full">
                    <div className="flex justify-between">
                      <div className="flex gap-5 items-center">
                        <div className="bg-[#F8F7F3] rounded-full flex justify-center items-center w-10 h-10 sm:w-14 sm:h-14">
                          <Typography className="text-xl">T</Typography>
                        </div>
                        <div>
                          <Typography className="text-xl font-medium">
                            {items.name}
                          </Typography>
                          <Typography className="text-[#7A7687]">
                            {items.productRu}
                          </Typography>
                          <Rate
                            allowHalf
                            defaultValue={items.rate}
                            className="text-[15px] mt-1"
                          />
                        </div>
                      </div>
                      <Typography className="text-base hidden lg:flex">
                        {items.date}
                      </Typography>
                    </div>
                    <div className="mt-3">
                      <Typography className="sm:text-lg text-[#7A7687]">
                        {LocalStorageLang === "Ru"
                          ? items.desciptionRu
                          : LocalStorageLang === "En"
                          ? items.desciptionEn
                          : items.desciptionUz}
                      </Typography>
                    </div>
                    <Typography className="text-base block lg:hidden mt-5">
                      {items.date}
                    </Typography>
                  </div>
                </Col>
              ))}
            </Row>
            <StylePagination ref={paginationRef}>
              <Pagination
                current={currentPage}
                total={reviewsItems.length}
                pageSize={4}
                onChange={handlePageChange}
              />
            </StylePagination>
          </div>
        </div>
      </div>
      <div className="mb-24">
        <HomeForm />
      </div>
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
