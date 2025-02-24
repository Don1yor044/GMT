import { Col, Row, Typography } from "antd";
import { useTranslation } from "react-i18next";

export const ArticleInfo = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="mt-20 bg-white border rounded-lg">
        <div className="p-3 sm:p-7">
          <Typography className="text-3xl sm:text-5xl">
            {t(`Информационная статья`)}
          </Typography>
          <div className="flex gap-2 mt-5">
            <Typography className="text-[#7A7687]">{t(`Автор`)}: </Typography>
            <Typography className="text-[#7A7687]">
              {t(`Иванов Р`)}.{" "}
            </Typography>
          </div>
          <div className="mt-5">
            <Typography className="text-2xl font-medium my-3">
              {t(`Содержание`)}:{" "}
            </Typography>
            <Typography className="text-[#7A7687] mt-1 sm:text-base">
              1. {t(`Новая модель организационной деятельности`)}{" "}
            </Typography>
            <Typography className="text-[#7A7687] mt-1 sm:text-base">
              2. {t(`Мы вынуждены отталкиваться от того, что курс`)}{" "}
            </Typography>
            <Typography className="text-[#7A7687] mt-1 sm:text-base">
              3. {t(`Новая модель организационной деятельности`)}
            </Typography>
            <Typography className="text-[#7A7687] mt-1 sm:text-base">
              4. {t(`Мы вынуждены отталкиваться от того, что курс`)}{" "}
            </Typography>
          </div>
          <div className="mt-10">
            <Typography className="text-xl sm:text-3xl">
              {t(`Новая модель организационной деятельности`)}
            </Typography>
            <Typography className="lg:w-[62%] sm:text-base mt-5">
              {t(
                `Равным образом, внедрение современных методик однозначно фиксирует необходимость поэтапного и последовательного развития общества. В частности, постоянное информационно-пропагандистское обеспечение нашей деятельности, а также свежий взгляд на привычные вещи —  безусловно открывает новые горизонты для стандартных подходов.  Каждый из нас понимает очевидную вещь: постоянный количественный  рост и сфера нашей активности создаёт предпосылки для   соответствующих условий активизации.`
              )}
            </Typography>
            <Row className="mt-10 h-[90%]" gutter={[10, 10]}>
              <Col span={24} sm={12}>
                <img
                  src="../Rectangle (63).png"
                  className="w-full object-cover"
                  alt=""
                />
              </Col>
              <Col span={24} sm={12}>
                <img
                  src="../Rectangle (64).png"
                  className="w-full object-cover"
                  alt=""
                />
              </Col>
            </Row>
          </div>
          <div className="mt-10">
            <Typography className="text-xl sm:text-3xl">
              {t(`Новая модель организационной деятельности`)}
            </Typography>
            <Typography className="lg:w-[62%] sm:text-base mt-5">
              {t(
                `Равным образом, внедрение современных методик однозначно фиксирует необходимость поэтапного и последовательного развития общества. В частности, постоянное информационно-пропагандистское обеспечение нашей деятельности, а также свежий взгляд на привычные вещи —  безусловно открывает новые горизонты для стандартных подходов.  Каждый из нас понимает очевидную вещь: постоянный количественный  рост и сфера нашей активности создаёт предпосылки для   соответствующих условий активизации.`
              )}
            </Typography>
          </div>
        </div>
        <div className=" bg-[#E1EFE6] w-full sm:px-7 sm:py-2 p-3">
          <Typography className="lg:w-[62%] sm:text-base my-5">
            {t(
              `Равным образом, внедрение современных методик однозначно фиксирует необходимость поэтапного и последовательного развития общества. В частности, постоянное информационно-пропагандистское обеспечение нашей деятельности, а также свежий взгляд на привычные вещи —  безусловно открывает новые горизонты для стандартных подходов.  Каждый из нас понимает очевидную вещь: постоянный количественный  рост и сфера нашей активности создаёт предпосылки для   соответствующих условий активизации.`
            )}
          </Typography>
        </div>
        <div className="p-3 sm:p-7">
          <div className="mt-10">
            <Typography className="text-xl sm:text-3xl">
              {t(`Новая модель организационной деятельности`)}
            </Typography>
            <Typography className="lg:w-[62%] sm:text-base mt-5">
              {t(
                `Равным образом, внедрение современных методик однозначно фиксирует необходимость поэтапного и последовательного развития общества. В частности, постоянное информационно-пропагандистское обеспечение нашей деятельности, а также свежий взгляд на привычные вещи —  безусловно открывает новые горизонты для стандартных подходов.  Каждый из нас понимает очевидную вещь: постоянный количественный  рост и сфера нашей активности создаёт предпосылки для   соответствующих условий активизации.`
              )}
            </Typography>
            <Row className="mt-10 h-[90%]" gutter={[10, 10]}>
              <Col span={24} sm={12}>
                <img
                  src="../Rectangle (65).png"
                  className="w-full object-cover"
                  alt=""
                />
              </Col>
              <Col span={24} sm={12}>
                <img
                  src="../Rectangle (66).png"
                  className="w-full object-cover"
                  alt=""
                />
              </Col>
            </Row>
          </div>
          <div className="mt-10">
            <Typography className="text-xl sm:text-3xl">
              {t(`Новая модель организационной деятельности`)}
            </Typography>
            <Typography className="lg:w-[62%] sm:text-base mt-5">
              {t(
                `Равным образом, внедрение современных методик однозначно фиксирует необходимость поэтапного и последовательного развития общества. В частности, постоянное информационно-пропагандистское обеспечение нашей деятельности, а также свежий взгляд на привычные вещи —  безусловно открывает новые горизонты для стандартных подходов.  Каждый из нас понимает очевидную вещь: постоянный количественный  рост и сфера нашей активности создаёт предпосылки для   соответствующих условий активизации.`
              )}
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
};
