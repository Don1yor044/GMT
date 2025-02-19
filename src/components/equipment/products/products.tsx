import { Typography } from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { RxDashboard, RxHamburgerMenu } from "react-icons/rx";
import { ListProducts } from "./eListProduct/eListProduct";
import { MenuProducts } from "./eMenuProduct/eMenuProduct";

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
    status: "ХитПродаж",
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
    status: "ХитПродаж",
  },
];
export const Products = () => {
  const [popularity, setPopularity] = useState(false);
  const [list, setList] = useState(false);
  const { t } = useTranslation();
  return (
    <>
      <div className="p-1 sm:p-3 border rounded-lg flex">
        <div className="flex w-[80%] justify-between">
          <div
            className="flex justify-between items-center cursor-pointer gap-1 sm:gap-3 "
            onClick={() => setPopularity((prev) => !prev)}
          >
            <Typography className="text-xs sm:text-sm font-medium">
              {t(`По популярности`)}
            </Typography>

            {popularity ? (
              <IoIosArrowUp size={15} />
            ) : (
              <IoIosArrowDown size={15} />
            )}
          </div>
          <div
            className="flex justify-between items-center cursor-pointer gap-1 sm:gap-3"
            onClick={() => setPopularity((prev) => !prev)}
          >
            <Typography className="text-xs sm:text-sm font-medium">
              {t(`Показать`)}
            </Typography>
            <div className="flex gap-1 items-center">
              <Typography className="text-sm">36</Typography>

              {popularity ? (
                <IoIosArrowUp size={15} />
              ) : (
                <IoIosArrowDown size={15} />
              )}
            </div>
          </div>
        </div>
        <div className="w-[20%] flex justify-end pe-3">
          <div className="flex gap-2 sm:gap-3 items-center">
            <RxHamburgerMenu
              size={17}
              onClick={() => setList(true)}
              className={`cursor-pointer ${
                list ? "text-[#088269]" : "text-gray-400"
              }`}
            />
            <RxDashboard
              size={17}
              onClick={() => setList(false)}
              className={`cursor-pointer ${
                list ? "text-gray-400" : "text-[#088269]"
              }`}
            />
          </div>
        </div>
      </div>
      {list ? (
        <>
          <ListProducts itemsProduct={itemsProduct} />
        </>
      ) : (
        <>
          <MenuProducts itemsProduct={itemsProduct} />
        </>
      )}
    </>
  );
};
