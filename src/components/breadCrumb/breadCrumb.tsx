import React from "react";
import { Link } from "react-router-dom";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";
import { useTranslation } from "react-i18next";

interface BreadcrumbPropsThree {
  currentPage: string;
  twoPages: string;
}
interface BreadcrumbProps {
  currentPage: string;
}
interface BreadcrumbPropsFour {
  currentPage: string;
  twoPages: string;
  threePages: string;
}
export const BreadcrumbThree: React.FC<BreadcrumbPropsThree> = ({
  twoPages,
  currentPage,
}) => {
  const { t } = useTranslation();
  return (
    <>
      {/* Desktop ko'rinishi */}
      <div className="hidden sm:flex gap-3 items-center py-2">
        <Link to={"/"} className="text-[#7A7687]">
          {t(`Главная`)}
        </Link>
        <div className="text-[#7A7687]">
          <RiArrowRightSLine size={20} />
        </div>
        <Link to={`/${twoPages}`} className="text-[#7A7687]">
          {t(twoPages)}
        </Link>
        <div className="text-[#7A7687]">
          <RiArrowRightSLine size={20} />
        </div>
        <div className="font-semibold">{t(currentPage)}</div>
      </div>

      {/* Mobil ko'rinishi */}
      <div className="sm:hidden gap-1 items-center py-2 flex">
        <div className="text-[#7A7687]">
          <RiArrowLeftSLine size={20} />
        </div>
        <Link to={"/"} className="font-semibold">
          {t(`Главная`)}
        </Link>
      </div>
    </>
  );
};
export const BreadcrumbTwo: React.FC<BreadcrumbProps> = ({ currentPage }) => {
  const { t } = useTranslation();
  return (
    <>
      {/* Desktop ko'rinishi */}
      <div className="hidden sm:flex gap-3 items-center py-2">
        <Link to={"/"} className="text-[#7A7687]">
          {t(`Главная`)}
        </Link>
        <div className="text-[#7A7687]">
          <RiArrowRightSLine size={20} />
        </div>
        <div className="font-semibold">{t(currentPage)}</div>
      </div>

      {/* Mobil ko'rinishi */}
      <div className="sm:hidden gap-1 items-center py-2 flex">
        <div className="text-[#7A7687]">
          <RiArrowLeftSLine size={20} />
        </div>
        <Link to={"/"} className="font-semibold">
          {t(`Главная`)}
        </Link>
      </div>
    </>
  );
};
export const BreadcrumbFour: React.FC<BreadcrumbPropsFour> = ({
  twoPages,
  currentPage,
  threePages,
}) => {
  const { t } = useTranslation();
  return (
    <>
      {/* Desktop ko'rinishi */}
      <div className="hidden md:flex gap-3 items-center py-2">
        <Link to={"/"} className="text-[#7A7687]">
          {t(`Главная`)}
        </Link>
        <div className="text-[#7A7687]">
          <RiArrowRightSLine size={20} />
        </div>
        <Link to={``} className="text-[#7A7687]">
          {t(twoPages)}
        </Link>
        <div className="text-[#7A7687]">
          <RiArrowRightSLine size={20} />
        </div>
        <Link to={``} className="text-[#7A7687]">
          {t(currentPage)}
        </Link>
        <div className="text-[#7A7687]">
          <RiArrowRightSLine size={20} />
        </div>
        <div className="font-semibold">{t(threePages)}</div>
      </div>

      {/* Mobil ko'rinishi */}
      <div className="md:hidden gap-1 items-center py-2 flex">
        <div className="text-[#7A7687]">
          <RiArrowLeftSLine size={20} />
        </div>
        <Link to={"/"} className="font-semibold">
          {t(`Главная`)}
        </Link>
      </div>
    </>
  );
};
