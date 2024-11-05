import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { RiArrowRightSLine } from "react-icons/ri";
import { Col, Row, Typography } from "antd";
import HomeForm from "../../components/Form/Form";
import Footer from "../../components/Footer";

const Payment = () => {
  const sections = [
    {
      title: "Оплата",
      description:
        "Учитывая стремительное развитие мировых медицинских технологий, врачи в Российской Федерации и соседних странах столкнулись с вызовом, требующим обновления приборов в различных направлениях, от установок компьютерной томографии до ультразвуковых сканеров и ЛОР комбайнов.",
      items: [
        {
          title: "Оплата наличными",
          description: [
            "Также как постоянное обеспечение нашей деятельности требует определения",
            "Требующим обновления приборов в различных направлениях, от установок компьютерной томографии",
            "Также как постоянное обеспечение нашей",
          ],
        },
        {
          title: "Безналичный расчет",
          description: [
            "Также как постоянное обеспечение нашей деятельности требует определения ",
            "Также как постоянное обеспечение нашей ",
            "Также как постоянное",
          ],
        },
        {
          title: "Оплата банковской картой",
          description: [
            "Требующим обновления приборов в различных направлениях, от установок компьютерной томографии",
            "Также как постоянное обеспечение нашей",
            "Также как постоянное",
            "Также как постоянное обеспечение",
          ],
        },
      ],
    },
    {
      title: "Порядок возврата денежных средств",
      description:
        "Учитывая стремительное развитие мировых медицинских технологий, врачи в Российской Федерации и соседних странах столкнулись с вызовом, требующим обновления приборов в различных направлениях, от установок компьютерной томографии до ультразвуковых сканеров и ЛОР комбайнов.",
      items: [
        {
          title: "При оплате наличными",
          description: [
            "Также как постоянное обеспечение нашей деятельности требует определения ",
            "Требующим обновления приборов в различных направлениях, от установок компьютерной томографии",
          ],
        },
        {
          title: "При оплате банковской картой",
          description: [
            "Также как постоянное обеспечение нашей деятельности требует определения ",
            "Также как постоянное обеспечение нашей ",
            "Требующим обновления приборов в различных направлениях, от установок компьютерной томографии ",
          ],
        },
      ],
    },
    {
      title: "Условия поставок",
      description:
        "Учитывая стремительное развитие мировых медицинских технологий, врачи в Российской Федерации и соседних странах столкнулись с вызовом, требующим обновления приборов в различных направлениях, от установок компьютерной томографии до ультразвуковых сканеров и ЛОР комбайнов.",
      items: [
        {
          title: "Лизинг",
          description: [
            "Также как постоянное обеспечение нашей деятельности требует определения ",
            "Также как постоянное",
            "Требующим обновления приборов в различных направлениях, от установок компьютерной томографии ",
          ],
        },
        {
          title: "Рассрочка",
          description: [
            "Требующим обновления приборов в различных направлениях, от установок компьютерной томографии ",
            "Также как постоянное ",
            "Также как постоянное обеспечение нашей ",
          ],
        },
      ],
    },
  ];
  return (
    <>
      <Header />
      <div className="px-5 py-2 lg:px-14">
        <div className="flex gap-3 items-center py-2">
          <Link to={"/"} className="text-[#7A7687]">
            Главная
          </Link>
          <div className="text-[#7A7687]">
            <RiArrowRightSLine size={20} />{" "}
          </div>
          <Typography className="font-semibold">Оплата</Typography>
        </div>
        <div>
          {sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="my-5 md:mt-10 lg:mt-20">
              <Typography className="!mb-10 text-2xl sm:text-4xl lg:text-5xl font-semibold">
                {section.title}
              </Typography>
              <div>
                <Typography className="text-sm md:text-xl xl:w-[55%] lg:w-[65%] md:w-[70%] w-[100%]">
                  {section.description}
                </Typography>
              </div>
              <div className="mt-10">
                <Row gutter={[20, 20]}>
                  {section.items.map((item, itemIndex) => (
                    <Col xl={8} lg={12} md={12} span={24} key={itemIndex}>
                      <div className="bg-white p-5 min-h-60 lg:h-70 xl:min-h-60 2xl:h-60 rounded-lg border py-8">
                        <Typography className="text-2xl mb-2 md:font-semibold">
                          {item.title}
                        </Typography>
                        <ol className="list-decimal list-outside text-base text-[#7A7687] px-4">
                          {item.description.map((desc, i) => (
                            <li key={i}>{desc}</li>
                          ))}
                        </ol>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            </div>
          ))}
        </div>
      </div>
      <HomeForm />
      <div className="mt-16">
        <Footer />
      </div>{" "}
    </>
  );
};

export default Payment;