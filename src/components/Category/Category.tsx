import { Col, Row, Typography } from "antd";
import { useTranslation } from "react-i18next";
import { PrimaryButton } from "../buttons/index";

const CategoryHome = () => {
  const { t } = useTranslation();
  return (
    <div className="mt-96 xs:mt-[450px] md:mt-24 lg:mt-24 mp:mt-[450px] ">
      <div className="flex justify-between items-center !pt-0 sm:pt-10 ">
        <Typography.Title level={2} className="!m-0">
          {t(`ПопулярныеКатегории`)}
        </Typography.Title>
        <div className="hidden md:flex">
          <PrimaryButton text={t(`ВсеКатегории`)} />
        </div>
      </div>
      <div className="mt-10 ">
        <Row gutter={[20, 20]}>
          <Col xl={6} lg={8} md={8} sm={12} xs={12}>
            <Row gutter={[20, 20]}>
              <Col span={24}>
                <div className="border rounded-xl" style={{ height: "44vh" }}>
                  <div className="bg-white rounded-tl-xl rounded-tr-xl">
                    <img
                      src="https://s3-alpha-sig.figma.com/img/443a/df0a/0f5efbf1e358d300d90229a39cb8e16c?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SIKSSvad0Bgt1sZoOhjcSFk2o95vEFsBxI6hvpLegzvQAeebU5of37YurpO2qEZE5BfBTN5pUG23xXWIdrrWEetEOuiXHXrO5c5cLxJRn3drPqp8ZJo8W8o~DivRW6Xx45JPiGeO8ILBiaaA59HMHnnamMvvZerTDJ~TTDN1l-DZJi3UeDZbFkHCwxTWCm00-1ObloHLIl-bD3SAccgLwFW06c73sm51~fXHv08gO6RQmW0ZUvhh5MghmGZTzjfUODSiDMH6ncUL0TQJPOEzvjQjmEeNxP4DcOdcJGlUlJpwWgQw~qMraoWcAF9l0iXPlTX~zuZPATJiHZFW2ZXhgw__"
                      alt=""
                      className="rounded-tr-xl rounded-tl-xl"
                      style={{
                        height: "230px",
                        width: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                  <div className="lg:p-5 mp:p-3 px-7 border-t-2">
                    <Typography.Title level={5} className="lg:pe-10 mp:pe-0">
                      {" "}
                      {t("ДерматологическоеОборудование")}
                    </Typography.Title>
                  </div>
                </div>
              </Col>
              <Col span={24}>
                <div className="border rounded-xl" style={{ height: "44vh" }}>
                  <div className="bg-white rounded-tl-xl rounded-tr-xl">
                    <img
                      src="https://s3-alpha-sig.figma.com/img/a7fc/77f0/0a4a44e456b52c0aece1ce64da976df8?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=laU9sgUozz6Kg6OzQhwCe6-hNFd2SXMpUz0834pEhVJk4yM3bU-XSS0j3RuJrV1kDjRrZTj6yS36w7UYEKD6nckHR-6UGujuB72V0uZTJYHPW4EPBtpUEByIR6VdUKZh0388ybK-TO7Wkgan3oxmZYvpcPClOE4PKnvgUGyRMBEeJvcIq3ztSGjanI9axt67dCXA5ku~TnDuLIgszEhDSKVBwKjMj-uFuJ6DNO3NzYl7aS5tb27HT58ZtLOep6bqYF8po3T~WzISrSv9mteNsXxuaWF8TA8l1L7EetkU7RyC~TEO1YYJpl3N1MN-0uzzMPwBCSDXc-e8hxom1khRVQ__"
                      alt=""
                      className="rounded-tr-xl rounded-tl-xl"
                      style={{
                        height: "230px",
                        width: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                  <div className="lg:p-5 mp:p-3 px-7 border-t-2">
                    <Typography.Title level={5} className="lg:pe-10 mp:pe-0">
                      {" "}
                      {t(`ВетеринарноеОборудование`)}
                    </Typography.Title>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col xl={6} lg={8} md={8} sm={12} xs={12}>
            <Row>
              <Col span={24}>
                <div className="border rounded-xl ">
                  <div className="bg-white rounded-tl-xl rounded-tr-xl overflow-hidden">
                    <img
                      src="https://s3-alpha-sig.figma.com/img/122b/026c/71cb144ee8b206b9ff0b172930f31d18?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Hqn6FlbkCEs2mN2PjAvqF8NEyAA~x4LFXpc2i62QueKV5jyjva8nu4wMy~HtzpHL72qh8~Ifwfn8dRwzJuxhRUOGjEQWbzijFECVCZZJVUe7zLhwBlPAkm7EtT3kor~VATCqhYo615X7AX~eMKgotRCHsrEkjU4NIwo5ARpP1AnjeUNep2qZexdHM450dmcUeTPSDFHOH1k-KkOzvGsSyiagocNzpJ0totsULQF9cMer5FoqqDwwnFxq9ffl-keYpNBuoZVIjof2uDBXF5WNX7mxX78tlwGv~7Fc5d2YZyoH6yiFIUyK67TRnbYdp7Yn4e8BWopST8aw0SDn9QNXew__"
                      alt=""
                      className="rounded-tr-xl rounded-tl-xl"
                      style={{
                        height: "560px",
                        width: "100%",
                        objectFit: "contain",
                        transform: "rotate(90deg) scale(1.5)",
                        transformOrigin: "center",
                      }}
                    />
                  </div>

                  <div
                    className="lg:p-5 mp:px-3 border-t-2 rounded-b-xl"
                    style={{ height: "91px" }}
                  >
                    <Typography.Title level={5} className="lg:pe-14 mp:pe-2">
                      {t(`ДерматологическоеОборудование`)}
                    </Typography.Title>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col xl={6} lg={8} md={8} sm={12} xs={12}>
            <Row gutter={[20, 20]}>
              <Col span={24}>
                <div className="border rounded-xl" style={{ height: "44vh" }}>
                  <div className="bg-white rounded-tl-xl rounded-tr-xl">
                    <img
                      src="https://s3-alpha-sig.figma.com/img/911a/8ff1/725e2a20227c48fcf043206f0122ac3f?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qnqJbU~fEOUm~Hg6VWWfZhBMqGZWsnjJdmIDnwa8SQvX4HWCQ8OltU6YjOrmVJhcU5m5iZJclyK8pOctWqAB-qaJ5VaZTeyHx1V3NJExkudrd85je4Bu6OyI~WN2rll4NZFHZhJSWJDEYAuIOCLRHPe1xEsZIhd2SGg~CDXiet2IORolT92kTpYGqUCglQcF2j~4TbDt3guJo9K7qQjD2j0qSVtiXLsmgovWXElg9yhKi3VsC~Jabox4iB4RARlivDNc-0REdZEwiAVRzD7GbrTp-2184CpKYAj7zRB~GZ9E~Wh3jKiJUGSa7fs~Xbm3GWAX8AYQeUY7AAhTTOtZ6g__"
                      alt=""
                      className="rounded-tr-xl rounded-tl-xl"
                      style={{
                        height: "230px",
                        width: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                  <div className="lg:p-5 mp:px-3  border-t-2">
                    <Typography.Title level={5} className="lg:pe-10 mp:pe-0">
                      {t(`ОборудованиеДляАнастезиологии`)}
                    </Typography.Title>
                  </div>
                </div>
              </Col>
              <Col span={24}>
                <div className="border rounded-xl" style={{ height: "44vh" }}>
                  <div className="bg-white rounded-tl-xl rounded-tr-xl">
                    <img
                      src="https://s3-alpha-sig.figma.com/img/98d6/ce68/ca05465aa55ba84ace8005d1e27d304e?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UxcjmvFJT6J0FYPnAumUUcMdaohx7Q8HOLN394wK17ns8IHCpr~oVoSLTQR4uFnc3E34HT-9ZObVjs5JhSzTObPN9J818b-gjYZkutO0vfixhkQOu8InQ4VBFL8kxsTOPjp9rIvC3lhAHcFdRk~d09xtPY0pKThq9k6Gv5m2VvEYCcAXAFrZA652JCukrYzRmpFtTiAfd~nnSGI1JpIB1xoGREW5ZZuCUMQ8V4krwfpmsh40KtMd0GHBjuS7h3gSXDLFGE2fXcU4OKAzhXxCf5iMpMYkEYcc5~KgQZb46D7k90ZIRF~xZiiWX70BB7KEOGN0Z0iDpvGoYXujbIuYmQ__"
                      alt=""
                      className="rounded-tr-xl rounded-tl-xl"
                      style={{
                        height: "230px",
                        width: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                  <div className="lg:p-5 mp:px-3 border-t-2">
                    <Typography.Title level={5} className="lg:pe-10 mp:pe-0">
                      {t(`ОборудованиеДляАнастезиологии`)}
                    </Typography.Title>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col xl={6} lg={16} md={16} sm={12} xs={12}>
            <Row gutter={[20, 20]}>
              <Col xl={24} lg={12} md={12}>
                <div className="border rounded-xl" style={{ height: "44vh" }}>
                  <div className="bg-white rounded-tl-xl rounded-tr-xl">
                    <img
                      src="https://s3-alpha-sig.figma.com/img/d2e6/71b1/8132204915c34ae4aa933a3947a30dfe?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hOnAItXkFxd3611MjgcO4vE4cx6rOaq~klyutFHfRkBjnpfYNO3E7sR7Q0Ch4wHt1ToNLvKYR8Oozbj0DJ7BNjFbOJQ6B-NpM9qKwxQBXDQXSEtn27N8AiY9NQlLGK7-xpWHHFDmkv3fJsD-LZ2Vv17pqgQF-s9J7YB5ap481gjqHeMwdGYgaIiQgCOfZVclwzWFY0G1Ugu3onJKBVg769AwmKun1Ow6anwcKAa6KhLrbMX5YQic9T8puMybi-TFgw4MYn41Opesi2TSiygKSB~UvVi4F4QHoGjGizllHlseAfqK3OjWEZbuV82NbUa1NtK2CfRs3YZYlhkIrDJtuQ__"
                      alt=""
                      className="rounded-tr-xl rounded-tl-xl"
                      style={{
                        height: "230px",
                        width: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </div>

                  <div className="lg:p-5 mp:px-3 border-t-2">
                    <Typography.Title level={5} className="lg:pe-28 mp:pe-0">
                      {t(`МебельДляМедицинскихЦелей`)}
                    </Typography.Title>
                  </div>
                </div>
              </Col>
              <Col xl={24} lg={12} md={12}>
                <div className="border rounded-xl" style={{ height: "44vh" }}>
                  <div className="bg-white rounded-tl-xl rounded-tr-xl">
                    <img
                      src="https://s3-alpha-sig.figma.com/img/122b/026c/71cb144ee8b206b9ff0b172930f31d18?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Hqn6FlbkCEs2mN2PjAvqF8NEyAA~x4LFXpc2i62QueKV5jyjva8nu4wMy~HtzpHL72qh8~Ifwfn8dRwzJuxhRUOGjEQWbzijFECVCZZJVUe7zLhwBlPAkm7EtT3kor~VATCqhYo615X7AX~eMKgotRCHsrEkjU4NIwo5ARpP1AnjeUNep2qZexdHM450dmcUeTPSDFHOH1k-KkOzvGsSyiagocNzpJ0totsULQF9cMer5FoqqDwwnFxq9ffl-keYpNBuoZVIjof2uDBXF5WNX7mxX78tlwGv~7Fc5d2YZyoH6yiFIUyK67TRnbYdp7Yn4e8BWopST8aw0SDn9QNXew__"
                      alt=""
                      className="rounded-tr-xl rounded-tl-xl"
                      style={{
                        height: "230px",
                        width: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </div>

                  <div className="lg:p-5 mp:px-3 border-t-2">
                    <Typography.Title level={5} className="lg:pe-10 mp:pe-0">
                      {t(`ДерматологическоеОборудование`)}
                    </Typography.Title>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <div className="md:hidden flex justify-center mt-10">
        <PrimaryButton text={t(`ВсеКатегории`)} />
      </div>
    </div>
  );
};

export default CategoryHome;
