import { SearchOutlined } from "@ant-design/icons";
import { PrimaryButton, TertiaryButton } from "@components/buttons";
import { Checkbox, Input, Slider, Typography } from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export const Filter = () => {
  const [country, setCountry] = useState(true);
  const [price, setPrice] = useState(true);
  const [filter, setFilter] = useState(true);
  const [state, setState] = useState(true);
  const [selectedCountries] = useState<string[]>([
    "Австрия",
    "Беларусь",
    "Великобритания",
    "Израиль",
    "Испания",
  ]);
  const [searchQuery, setSearchQuery] = useState("");
  const { t } = useTranslation();

  const countries = [
    "Австралия",
    "Австрия",
    "Беларусь",
    "Бельгия",
    "Великобритания",
    "Германия",
    "Израиль",
    "Испания",
  ];

  const filteredCountries = countries.filter((country) =>
    t(country).toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <>
      {" "}
      <div className="p-3 border rounded-lg">
        <div className="flex justify-between items-center cursor-pointer">
          <Typography className="text-base font-semibold">
            {t(`Направления`)}
          </Typography>
          <IoIosArrowDown size={19} />
        </div>
      </div>
      <div className="p-3 border rounded-lg mt-2">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setFilter((prev) => !prev)}
        >
          <Typography className="text-base font-semibold">
            Фильтр по товарам
          </Typography>

          {country ? <IoIosArrowUp size={19} /> : <IoIosArrowDown size={19} />}
        </div>
        {filter && (
          <>
            <hr className="my-4" />
            <div>
              <div
                className="flex justify-between items-center cursor-pointer my-5"
                onClick={() => setPrice((prev) => !prev)}
              >
                <Typography className="text-sm font-medium">Цена</Typography>

                {price ? (
                  <IoIosArrowUp size={15} />
                ) : (
                  <IoIosArrowDown size={15} />
                )}
              </div>
              {price && (
                <div>
                  <div className="flex gap-5">
                    <div className="w-full">
                      <Typography>От:</Typography>
                      <Typography>20.000</Typography>
                      <hr className="my-2" />
                    </div>
                    <div className="w-full">
                      <Typography>До:</Typography>
                      <Typography>950.000</Typography>
                      <hr className="my-2" />
                    </div>
                  </div>
                  <Slider
                    range={{ draggableTrack: true }}
                    defaultValue={[20, 50]}
                  />
                </div>
              )}
            </div>
            <div>
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setCountry((prev) => !prev)}
              >
                <Typography className="text-sm font-medium">Страна</Typography>

                {country ? (
                  <IoIosArrowUp size={15} />
                ) : (
                  <IoIosArrowDown size={15} />
                )}
              </div>
              {country && (
                <div>
                  <div className="my-4">
                    <Input
                      placeholder={t(`ПоискПоСтране`)}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      suffix={
                        <SearchOutlined
                          style={{ color: "#aaa", fontSize: 18 }}
                        />
                      }
                      style={{
                        border: "1px solid #E5E2EE", // Remove border
                        boxShadow: "none", // Remove outline
                        padding: "8px 20px",
                        borderRadius: "20px", // Optional: Keep some roundness
                      }}
                    />
                  </div>
                  <div className="space-y-2 max-h-64 overflow-auto">
                    {filteredCountries.map((country) => (
                      <label
                        key={t(country)}
                        className="flex items-center space-x-3 rounded-lg text-base"
                      >
                        <Checkbox
                          checked={selectedCountries.includes(country)}
                        />
                        <span>{t(country)}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div>
              <div
                className="flex justify-between items-center cursor-pointer my-5"
                onClick={() => setState((prev) => !prev)}
              >
                <Typography className="text-sm font-medium">
                  Состояние
                </Typography>

                {state ? (
                  <IoIosArrowUp size={15} />
                ) : (
                  <IoIosArrowDown size={15} />
                )}
              </div>

              {state && (
                <div>
                  <div className="space-y-2 max-h-64 overflow-auto">
                    <label className="flex items-center space-x-3 rounded-lg text-base">
                      <Checkbox />
                      <span>Новый</span>
                    </label>
                    <label className="flex items-center space-x-3 rounded-lg text-base">
                      <Checkbox />
                      <span>Демонстрационный</span>
                    </label>
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </div>
      <div className="flex gap-3 mt-3">
        <TertiaryButton text="Сбросить" size={40} />
        <PrimaryButton text="Показать" size={60} />
      </div>
    </>
  );
};
