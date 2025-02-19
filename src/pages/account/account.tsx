import { Button, Typography } from "antd";
import { BreadcrumbTwo, TertiaryButton } from "components";
import { AiOutlineEdit } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

export const Account = () => {
  return (
    <div className="px-4 py-2 lg:px-14">
      <BreadcrumbTwo currentPage="Личный кабинет" />
      <div className="mt-5 md:mt-10 lg:mt-20">
        <div className="flex gap-5 w-[60%] justify-between">
          <div className="h-[210px] w-[210px] bg-[#E1EFE6] rounded-full flex justify-center items-center">
            <span className="text-7xl">K</span>
          </div>
          <div>
            <Typography className="text-4xl mt-8">
              Константин Константинопольский
            </Typography>
            <div className="flex mt-5">
              <Button type="text">
                <FaTelegram size={20} />
              </Button>
              <Button type="text">
                <RiInstagramFill size={20} />
              </Button>
            </div>
            <div className="flex gap-2 mt-10">
              <TertiaryButton text="Изменить персональную информацию" />
              <TertiaryButton text="Изменить пароль" />
            </div>
            <div>
              <div className="flex gap-3">
                <Typography className="font-medium">
                  +998 97 277-49-44
                </Typography>
                <AiOutlineEdit />
              </div>
              <div>2</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
