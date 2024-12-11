import styled from "@emotion/styled";
import { Col, Row } from "antd";
import { useState } from "react";
import { Filter } from "./filter";
import { Products } from "./products";
import { css } from "@emotion/react";
import { useTranslation } from "react-i18next";
interface Items {
  id: number;
  name: string;
}

export const Equipment = () => {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);
  const items: Items[] = [
    { id: 1, name: "Дерматологическое оборудование" },
    { id: 2, name: "Ветеринарное оборудование" },
    { id: 3, name: "Мебель медицинская" },
    { id: 4, name: "Анестезиология" },
    { id: 5, name: "Мебель медицинская" },
    { id: 6, name: "Лабораторное" },
    { id: 7, name: "Ветеринарное оборудование" },
  ];
  const visibleItems = show ? items : items.slice(0, 4);

  return (
    <>
      <div className="mt-10">
        <div
          css={noScrollbar}
          className="flex gap-3 w-full flex-nowrap overflow-auto"
        >
          {visibleItems.map((item: Items) => (
            <ButtonStyled key={item.id}>{item.name}</ButtonStyled>
          ))}
          <ButtonStyledDefault onClick={() => setShow(!show)}>
            {show ? t("Скрыть") : t("Показать все")}
          </ButtonStyledDefault>
        </div>
        <div className="mt-8">
          <Row gutter={[20, 20]}>
            <Col span={24} lg={6} md={8}>
              <Filter />
            </Col>
            <Col span={24} lg={18} md={16}>
              <Products />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

const ButtonStyled = styled.button`
  padding: 8px 30px;
  border: 1px solid #d5d1e1;
  background-color: white;
  border-radius: 30px;
  white-space: nowrap; /* Yozuvlarni bir qatorda saqlash */
  flex-shrink: 0; /* Tugma hajmini siqib qo‘ymaslik */
`;
const ButtonStyledDefault = styled.button`
  padding: 8px 30px;
  border: 1px solid #d5d1e1;
  background-color: inherit;
  border-radius: 30px;
  color: #088269;
  font-weight: 500;
  white-space: nowrap;
  flex-shrink: 0;
`;

const noScrollbar = css`
  overflow-x: auto;
  display: flex;
  gap: 12px;
  flex-wrap: nowrap;

  /* Scrollbar’ni yashirish uchun */
  &::-webkit-scrollbar {
    display: none; /* Webkit brauzerlarda yashirish */
  }

  -ms-overflow-style: none; /* IE va Edge uchun */
  scrollbar-width: none; /* Firefox uchun */
`;
