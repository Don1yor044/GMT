import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    En: {
      translation: {
        Окомпании: "About Us",
        Доставка: "Delivery",
        Оплата: "Payment",
        Гарантии: "Guarantees",
        Блог: "Blog",
        "г. Москва, ул. Московская, д. 35": "Moscow, Moskovskaya St., 35", // Address
        "Поиск...": "Search...",
        "Пн-Пт с 09:00-19:00": "Mon-Fri 09:00-19:00",
        "Сб-Вс - выходной": "Sat-Sun - Closed",
        Войти: "Login",
        Избранное: "Favorites",
        Сравнить: "Compare",
        Корзина: "Cart",
        Каталог: "Catalog", // New translations
        Производители: "Manufacturers",
        "Кабинеты под ключ": "Turnkey Cabinets",
        Услуги: "Services",
        Акции: "Promotions",
        Покупателям: "For Customers",
        Контакты: "Contacts",
        Москва: "Moscow",
        "Заказать звонок": "Request a Call",
      },
    },
    Uz: {
      translation: {
        Окомпании: "Biz haqimizda",
        Доставка: "Yetkazib berish",
        Оплата: "To'lov",
        Гарантии: "Kafolatlar",
        Блог: "Blog",
        "г. Москва, ул. Московская, д. 35": "Moskva, Moskovskaya ko'chasi, 35", // Address
        "Поиск...": "Qidirish...",
        "Пн-Пт с 09:00-19:00": "Dushanba-Juma 09:00-19:00",
        "Сб-Вс - выходной": "Shanba-Yakshanba - Dam olish",
        Войти: "Kirish",
        Избранное: "Sevimlilar",
        Сравнить: "Taqqoslash",
        Корзина: "Savat",
        Каталог: "Katalog", // New translations
        Производители: "Ishlab chiqaruvchilar",
        "Кабинеты под ключ": "Kalit topshirish kabinetlari",
        Услуги: "Xizmatlar",
        Акции: "Aksiyalar",
        Покупателям: "Xaridorlar uchun",
        Контакты: "Aloqa",
        Москва: "Moskva",
        "Заказать звонок": "Buyurtma Qo'ng'irog'i",
      },
    },
    Ru: {
      translation: {
        Окомпании: "О компании",
        Доставка: "Доставка",
        Оплата: "Оплата",
        Гарантии: "Гарантии",
        Блог: "Блог",
        "г. Москва, ул. Московская, д. 35": "г. Москва, ул. Московская, д. 35", // Address
        "Поиск...": "Поиск...",
        "Пн-Пт с 09:00-19:00": "Пн-Пт с 09:00-19:00",
        "Сб-Вс - выходной": "Сб-Вс - выходной",
        Войти: "Войти",
        Избранное: "Избранное",
        Сравнить: "Сравнить",
        Корзина: "Корзина",
        Каталог: "Каталог", // New translations
        Производители: "Производители",
        "Кабинеты под ключ": "Кабинеты под ключ",
        Услуги: "Услуги",
        Акции: "Акции",
        Покупателям: "Покупателям",
        Контакты: "Контакты",
        Москва: "Москва",
        "Заказать звонок": "Заказать звонок",
      },
    },
  },
  lng: "Ru",
  fallbackLng: "Ru",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
