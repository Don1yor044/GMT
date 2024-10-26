import { Button, Checkbox, Col, Input, Row, Space, Typography } from "antd";
import { PrimaryButton } from "../Buttons";

const HomeSubscription = () => {
  return (
    <div className="bg-[#E5E4ED] px-14">
      <Row>
        <Col span={12}>
          <div>
            <img src="../../Vector (4).png" alt="" />
          </div>
        </Col>
        <Col span={12}>
          <div className="pt-10">
            <Typography.Title level={2}>
              Подпишитесь и будьте в курсе!
            </Typography.Title>
            <Typography.Title
              level={5}
              className="!text-[#7A7687] !m-0"
              style={{ fontWeight: 400 }}
            >
              Акции, скидки, распродажи ждут!
            </Typography.Title>
            <div>
              <div className="flex items-center mt-12" style={{ width: "70%" }}>
                <input
                  placeholder="Введите email"
                  className="rounded-full py-2 px-5 flex-grow"
                />
                <div className="-ml-8">
                  <PrimaryButton text="Подписаться" size={100} />
                </div>
              </div>
              <div className="flex items-center mt-4 ms-2">
                <Checkbox className="mr-3" />
                <label htmlFor="consent" className="text-sm text-black">
                  Я даю согласие на обработку своих персональных данных.
                </label>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default HomeSubscription;
