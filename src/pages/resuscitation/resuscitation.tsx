import { BreadcrumbFour, HomeForm, About, TurnkeyForm } from "components";
import { Typography } from "antd";
import { useTranslation } from "react-i18next";
import { ResuscitationTabs } from "./resuscitationTabs/resuscitationTabs";

export const Resuscitation = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="px-5 py-2 lg:px-14">
        <BreadcrumbFour
          twoPages="Кабинет ключ"
          currentPage="Реанимация"
          threePages="Палата реанимации и интенсивной терапии"
        />
        <div className="mt-5 md:mt-10 lg:mt-20">
          <Typography className="md:text-5xl sm:text-3xl text-xl">
            {t(`Комплексное оснащение палаты`)}{" "}
            <br className="hidden sm:flex" />
            {t(`реанимации и интенсивной терапии`)}
          </Typography>
          <div className="mt-10 sm:h-[55vh]">
            <img
              src="https://s3-alpha-sig.figma.com/img/0dc4/c444/bdaca8de4498374c57042b14b13c5638?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X-iQFXo338RXGUVjvk6UizjBhkOSYy1ZFnBQdXQOW2ionzJXzWzyMff848vdoRUatMDe-p2xN8569dkReEhAXdNTyQheUyNrx4KxIdbmrqxY9vExLSuXuCRc4MW~RvyzePU3jj~rO4j7jDqOLhefYrA9R38hXj0ViFPSWOIsgh8BGObqFU3l78ihNxaubKr3s0GNs8iWUgT9LGDriHUa8K59iPoXdvXvDYmVbHnWqm3kR15ucYQMd~GrpkHqf4MWqs1QMbcw5uAcYQ60gOnfr8TVY7Ol89uPPPxIWhiBcg8naMTfoDN34mXaugzC7VyHl5xO7w9UpoAlSipfmVg0Pg__"
              alt=""
              className="h-full w-full object-cover rounded-xl"
            />
          </div>
          <div className="flex lg:justify-end ">
            <div className="w-full md:max-w-[46%]">
              <Typography className="bg-none my-10 text-sm sm:text-base font-medium">
                {t(
                  `Учитывая стремительное развитие мировых медицинских технологий, врачи в Российской Федерации и соседних странах столкнулись с вызовом, требующим обновления приборов в различных направлениях, от установок компьютерной томографии до ультразвуковых сканеров и ЛОР комбайнов. Переход на полностью цифровую платформу при диагностике и лечении заболеваний также стал серьёзным испытанием для большинства больниц и частных клиник.`
                )}
              </Typography>
            </div>
          </div>
          <div className="mt-20">
            <ResuscitationTabs />
          </div>
          <TurnkeyForm />
        </div>
      </div>
      <About />
      <div className="mb-24">
        <HomeForm />
      </div>
    </>
  );
};
