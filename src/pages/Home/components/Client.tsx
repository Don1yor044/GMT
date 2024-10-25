import { Col, Row, Typography } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";

const HomeClient = () => {
  const items = [
    {
      id: 1,
      title: "НМИЦ онкологии им. Н.Н. Блохина",
      imgSrc:
        "https://s3-alpha-sig.figma.com/img/95d8/45c9/32733e253c7b094e4316cf3ec7dfd454?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DAd8DNlRqSe5lu020nvkWMjBmZUpKJ2e230RXf~Lb3p~I~E1ETx6XxK-3oYsXS8sPCq7MjQGD7nPXLake~x7q9WIeNk2n4z6kRtUONEqS8YTz3UD2yuKD8WLWmY7M7mVQS0Wayotgi09eWinVuXH5CLy2h-AktCPo8rkbqoWQ3KKCZakpbMxpMLlaakIw4R072~iwcEELt8tJqTfH2UNTSjfdswan44pocwYZHl7Ip4UodTQN0yrsA86MxILefnfTpremaH8RyebU9F4E5CLzLR7tNjKPixlG4zkz8KnA6lP2CoXq5McoIikMSemZsZsJsAboHegs934Z95IG7lWqw__",
    },
    {
      id: 2,
      title: "НМИЦ онкологии им. Н.Н. Блохина",
      imgSrc:
        "https://s3-alpha-sig.figma.com/img/655f/43b2/b37eeb1b1231de790fb5b0342ee90da7?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U-KZXPhmrrYlHS3AQu0DjLF~l3abMt0htFKNvQl-QnWovT~0jKON7I7zbYvzcUSIdQnbANcfmh-2j~ItR1gzXDBWsePsTA~dsPoSZRAFHNdmkjFCrelHqdMnfEc3mp2k2ZEaOE2y6FhZzoV9RtNjCBdm~ahZ5uITssiTRRdUVcWCprruNtnvaiEUBFSFX9TFJXh0IraZiAI1oZswai9jRGBZi11hT29hgmn6hj~IG4KoSEcMULyZl3sI0ajnXjxwKvn-D5rM-MBvUjfGi60q-SGaoLOiMSpl3nnSv0GTiNKhUWBm25-o~ifjCQn76YTlJlWMTVyoBSdbziKg34pCpg__",
    },
    {
      id: 3,
      title: "НМИЦ онкологии им. Н.Н. Блохина",
      imgSrc:
        "https://s3-alpha-sig.figma.com/img/269f/7b57/72062ee5282c570d9d37ac37a542b200?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ozyv1wkflMtbFQ9t~c53ApFqOmhs2GcQj608KFBJYo2YXZarzOY0wPKi~xthgRau0Yr1b~ahJZpFsteckYkvQXSCbtreR2Dg9fMKwLn7C1wniWsBXv62x8LAI3VoxXeluG23hGoSlZGoYReACKaQxyh9rYUT549yjQd0b39zDtFs19DNIfeg4szFjCLWBK3Ozy-tczfhef-qilfJTBdKfIYntA80qOnUA3wseeV2q6E-VPgOpIh3VrAn-LzwogzUJetozZyTHWGAUdUWLRBxEPUnIVazHyCdGUg5PDG1NRPsEI6MxtXzfRPB3xzmk6KiHBoLL9T7PJaYAQv1d0Jq4Q__",
    },
    {
      id: 4,
      title: "НМИЦ онкологии им. Н.Н. Блохина",
      imgSrc:
        "https://s3-alpha-sig.figma.com/img/fa1b/09ee/f78f2dbaf45a20a661b013bcbabe35bc?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BgGIDCdKUu9NXFnNvwtWan7ketCfHW~txoRFK8FWRq9D2P7h-7VRvRBqokv9oYg59alb2~iLSk1i5hwAMh2htJgd7Y5fXcVXnKvE3PVKL1aGp7XNnup1Fmy4wCXojNhzWXZsIFVO6-qHDZ5YyPR7YsrPCY~LTV9QYiDxvFXR43trYH-rtuJR93HjJAar4UhWYhlUGVRgZE1z~qQrznRyWFiIDqPHve~0s2HoCPWzTe1acHxJ6lH9AVaPOYwEwLbk46gVtTgxa2hpikpItJq9zipU2Lo4nPjRLbZehDSWfsjKAdWX8K5dXQysk5TPrQ7C-CGGxw5-wbOhAU3Nd3f~oQ__",
    },
    {
      id: 5,
      title: "НМИЦ онкологии им. Н.Н. Блохина",
      imgSrc:
        "https://s3-alpha-sig.figma.com/img/655f/43b2/b37eeb1b1231de790fb5b0342ee90da7?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U-KZXPhmrrYlHS3AQu0DjLF~l3abMt0htFKNvQl-QnWovT~0jKON7I7zbYvzcUSIdQnbANcfmh-2j~ItR1gzXDBWsePsTA~dsPoSZRAFHNdmkjFCrelHqdMnfEc3mp2k2ZEaOE2y6FhZzoV9RtNjCBdm~ahZ5uITssiTRRdUVcWCprruNtnvaiEUBFSFX9TFJXh0IraZiAI1oZswai9jRGBZi11hT29hgmn6hj~IG4KoSEcMULyZl3sI0ajnXjxwKvn-D5rM-MBvUjfGi60q-SGaoLOiMSpl3nnSv0GTiNKhUWBm25-o~ifjCQn76YTlJlWMTVyoBSdbziKg34pCpg__",
    },
    // Qo'shimcha elementlar qo'shishingiz mumkin
  ];

  return (
    <div className="mt-24 bg-[#E5E4ED] py-16 ">
      <div className="px-14">
        <Row>
          <Col span={12}>
            <Typography.Title level={2}>Наши клиенты</Typography.Title>
          </Col>
          <Col span={12}>
            <Typography className="text-5xl">
              БОЛЕЕ <span className="text-[#088269]">5000</span> <br /> УСПЕШНЫХ
              ПРОЕКТОВ
            </Typography>
          </Col>
        </Row>
      </div>
      <div className="!mt-20 px-2">
        <Row gutter={[10, 20]}>
          <Col span={24}>
            <Swiper
              spaceBetween={10}
              slidesPerView={4.5}
              breakpoints={{
                640: {
                  slidesPerView: 1, // 640px dan kichik ekranlarda 1 slayd
                },
                768: {
                  slidesPerView: 2, // 768px dan kichik ekranlarda 2 slayd
                },
                1024: {
                  slidesPerView: 4.5, // 1024px dan katta ekranlarda 3 slayd
                },
              }}
            >
              {items.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="border rounded-xl">
                    <div className="bg-white rounded-tl-xl rounded-tr-xl flex justify-center">
                      <img
                        src={item.imgSrc}
                        alt=""
                        className="rounded-tr-xl rounded-tl-xl"
                        style={{
                          height: "200px",
                          width: "auto",
                          maxWidth: "65%",
                          objectFit: "contain",
                          margin: "auto",
                        }}
                      />
                    </div>
                    <div className="p-5 px-7 border-t-2 rounded-b-xl bg-[#F8F7F3]">
                      <Typography.Title level={5}>
                        {item.title}
                      </Typography.Title>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default HomeClient;
