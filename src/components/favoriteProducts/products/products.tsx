import { Typography } from "antd";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { RxDashboard, RxHamburgerMenu } from "react-icons/rx";
import { ListProducts } from "./fListProduct";
import { MenuProducts } from "./fMenuProduct";
import { PrimaryButton } from "components";
import { catalogTovar } from "types/types";
import baseURL from "utils/api";

export const FavoriteProducts = () => {
  const [dataCourse, setDataCourse] = useState<catalogTovar[]>([]);
  const [popularity, setPopularity] = useState(false);
  const [list, setList] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await baseURL.get(`CategoryItems`);
        setDataCourse(res.data);
        console.log(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="p-2 sm:p-3 border rounded-lg ">
        <div className="flex justify-between px-1">
          <div
            className="flex justify-between items-center cursor-pointer gap-2 sm:gap-3 "
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
          <div className="flex gap-3 sm:gap-3 items-center">
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
          <ListProducts itemsProduct={dataCourse} />
        </>
      ) : (
        <>
          <MenuProducts itemsProduct={dataCourse} />
        </>
      )}
      <div className="flex justify-center  md:justify-end mt-10">
        <PrimaryButton text={t("ВКаталог")} />
      </div>
    </>
  );
};
