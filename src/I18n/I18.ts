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
        Аддрес: "Moscow, Moskovskaya St., 35", // Address
        Поиск: "Search...",
        РабочееВремя: "Mon-Fri 09:00-19:00",
        Отдых: "Sat-Sun - Closed",
        Войти: "Login",
        Избранное: "Favorites",
        Сравнить: "Compare",
        Корзина: "Cart",
        Каталог: "Catalog", // New translations
        Производители: "Manufacturers",
        КабинетыКлюч: "Turnkey Cabinets",
        Услуги: "Services",
        Акции: "Promotions",
        Покупателям: "For Customers",
        Контакты: "Contacts",
        Москва: "Moscow",
        ЗаказатьЗвонок: "Request a Call",
        ВсеКатегории: "all categories",
        ЗаголовокБаннераВПаруСтрок: "Banner Heading in a couple of lines",
        ЗапроситьЦену: "Request Price",
        ВКаталог: "To Catalog",
        ПопулярныеКатегории: "Popular categories",
        ДерматологическоеОборудование: "Dermatological equipment",
        ВетеринарноеОборудование: "Veterinary equipment",
        ОборудованиеДляАнастезиологии: "Equipment for anesthesiology",
        МебельДляМедицинскихЦелей: "Furniture for medical purposes",
        КомплексноеОснащениеКабинетов: "Comprehensive equipment of offices",
        ЭкспрессЛаборатория: "Express laboratory",
        ЛазернаяТерапия: "Laser Therapy",
        ОперационныйБлок: "Operating Unit",
        НоваяЛаборатория: "New Laboratory",
        БесплатнаяКонсультация: "Free Consultation",
        РассчитатьСтоимость: "Calculate Cost",
        ПочемуВыбираютНас: "Why Choose Us",
        БыстраяДоставка: "Fast delivery",
        ВесьТоварСертифицирован: "All products are certified",
        ГибкаяСистемаСкидок: "Flexible system of discounts",
        ЛетНаРынке: "Years on the market",
        ХитыПродаж: "Hity sale",
        Новинки: "New items",
        КаталогТоваров: "Product Catalog",
        "Анализатор Мочи MINDUA-66": "Urine Analyzer MINDUA66",
        Артикул: "Article",
        Вналичии: "In Stock",
        ДобавитьВкорзину: "Add to Cart",
        ВсеТовары: "All Products",
        НашиКлиенты: "Our Clients",
        БОЛЕЕ: "MORE",
        УСПЕШНЫХПРОЕКТОВ: "SUCCESSFUL PROJECTSs",
        "Медицина компетенций": "Medicine of competencies",
        "НМИЦ онкологии им. Н.Н. Блохина":
          "N.N. Blokhin National Medical Research Center of Oncology",
        "ФМБА России КЛИНИЧЕСКАЯ БОЛЬНИЦА 85":
          "FMBA of Russia CLINICAL HOSPITAL 85",
        "Эксклюзивные поставщики": "Exclusive suppliers",
        Бренды: "Brands",
        ИнформацияОкомпании: "InformationAbout the company",
        ПреимуществаСотрудников: "Employee Benefits",
        ДостиженияКомпании: "Company Achievements",
        КарьерныйРост: "Career Growth",
        ИнформацияОкомпанииДеск:
          "But synthetic testing, in its classical presentation, allows for the introduction of a step-by-step and consistent development of society. Within the framework of the specification of modern standards, supporters of totalitarianism in science will be functionally separated.",
        Новости: "News",
        компании: "companies",
        "Название новости": "News Title",
        НовостиДеск:
          "Allows for the introduction of a phased development of society.",
        ВсеНовости: "AllNews",
        Сертификаты: "Certificates",
        ОсталисьВопросы: "Questions Remain",
        ОсталисьВопросыНомер:
          "Ask them by phone number +7 (495) 000-00-00 or leave your coordinates and our manager will call you in 10 minutes.",
        ВашеИмя: "Your name",
        "Пожалуйста, введите ваш номер телефона":
          "Please enter your phone number",
        ВашТелефон: "Your Phone",
        "неправильный адрес электронной почты":
          "Please enter a valid email address",
        "Пожалуйста, введите свой адрес электронной почты":
          "Please enter your email",
        ВашEmail: "Your Email",
        "Пожалуйста, введите ваш вопрос": "Please enter your question",
        ВашВопрос: "Your Question",
        Отправить: "Send",
        НажимаяОтправить: `By clicking "Send", I agree to the processing of personal data under the terms`,
        "Политики конфиденциальности": "Privacy Policies",
        Подпишитесь: "Subscribe and stay updated",
        "Акции, скидки, распродажи ждут": "Promotions, discounts, sales await",
        ВведитеEmail: "Enter email",
        Подписаться: "Subscribe",
        "Я даю согласие на обработку своих персональных данных":
          "I agree to the processing of my personal data",
        Вакансии: "Vacancies",
        Возврат: "Returns",
        FAQ: "FAQ",
        Лизинг: "Leasing",
        Отзывы: "Reviews",
        Реанимация: "Reanimation",
        Хирургия: "Surgery",
        Офтальмология: "Ophthalmology",
        ЛабораторнаяДиагностика: "Laboratory Diagnosis",
        АкушерствоИГинекология: "Obstetrics and Gynecology",
        Гистология: "Histology",
        Косметология: "Cosmetology",
        Орториноларингология: "Otorhinolaryngology",
        РентгенологияИТомография: "Radiology and Tomography",
        Стрерилизация: "Sterilization",
        ФизиотерапияИРеабилитация: "Physiotherapy and Rehabilitation",
        ФункциональнаяДиагностика: "Functional Diagnostics",
        Эндоскопия: "Endoscopy",
        Распродажи: "Sales",
        СкачатьКаталог: "Download Catalog",
        Адрес: "Address",
        КартаПроезда: "Directions Map",
        ГрафикРаботы: "Work Schedule",
        "ООО «ГЛОБАЛ МЕДИКАЛ ТРЕЙД»": "OOO «GLOBAL MEDICAL TRADE LLC»",
        МыВСоцсетях: "We are in social networks",
        ПартнерскаяПрограмма: "Affiliate Program",
        ОптовыеПродажи: "Wholesale Sales",
        Реквизиты: "Details",
        ПолитикаКонфиденциальности: "Privacy Policy",
        УсловияСоглашения: "Terms of Agreement",
        КартаСайта: "Site Map",
        СпособыОплаты: "Payment Methods",
        Медоборудование: "Medical equipment",
        ВсеПраваЗащищены: "All Rights Reserved",
        ИнформацияФоотер:
          "The information on this site is for reference only and is not a public offer as defined by the provisions of Article 437 of the Civil Code of the Russian Federation",
      },
    },
    Uz: {
      translation: {
        Окомпании: "Biz haqimizda",
        Доставка: "Yetkazib berish",
        Оплата: "To'lov",
        Гарантии: "Kafolatlar",
        Блог: "Blog",
        Аддрес: "Moskva, Moskovskaya ko'chasi, 35", // Address
        Поиск: "Qidirish...",
        РабочееВремя: "Dushanba-Juma 09:00-19:00",
        Отдых: "Shanba-Yakshanba - Dam olish",
        Войти: "Kirish",
        Избранное: "Sevimlilar",
        Сравнить: "Taqqoslash",
        Корзина: "Savat",
        Каталог: "Katalog", // New translations
        Производители: "Ishlab chiqaruvchi",
        КабинетыКлюч: "Kalit kabinetlari",
        Услуги: "Xizmatlar",
        Акции: "Aksiyalar",
        Покупателям: "Xaridorlar uchun",
        Контакты: "Aloqa",
        Москва: "Moskva",
        ЗаказатьЗвонок: "Buyurtma Qo'ng'irog'i",
        ВсеКатегории: "Barcha kategoriyalar",
        ЗаголовокБаннераВПаруСтрок: "Banner sarlavhasi bir necha qator",
        ЗапроситьЦену: "Narxni so'rang",
        ВКаталог: "Katalogga",
        ПопулярныеКатегории: "Ommabop toifalar",
        ДерматологическоеОборудование: "Dermatologik uskunalar",
        ВетеринарноеОборудование: "Veterinariya uskunalari",
        ОборудованиеДляАнастезиологии: "Anesteziologiya uchun uskunalar",
        МебельДляМедицинскихЦелей: "Tibbiy maqsadlar uchun mebel",
        КомплексноеОснащениеКабинетов: "Ofislarning murakkab jihozlari",
        ЭкспрессЛаборатория: "Ekspress laboratoriya",
        ЛазернаяТерапия: "Lazer terapiyasi",
        ОперационныйБлок: "Operatsion birligi",
        НоваяЛаборатория: "Yangi laboratoriya",
        БесплатнаяКонсультация: "Bepul konsultatsiya",
        РассчитатьСтоимость: "Narxni hisoblash",
        ПочемуВыбираютНас: "Nima uchun bizni tanlaysiz",
        БыстраяДоставка: "Tez yetkazib berish",
        ВесьТоварСертифицирован: "Barcha mahsulotlar sertifikatlangan",
        ГибкаяСистемаСкидок: "Moslashuvchan chegirma tizimi",
        ЛетНаРынке: "Bozorda yillar",
        ХитыПродаж: "Bozori yaxshilar",
        Новинки: "Yangi elementlar",
        КаталогТоваров: "Mahsulotlar katalogi",
        "Анализатор Мочи MINDUA-66": "Peshop analizatori MINDUA66",
        Артикул: "Maqola",
        Вналичии: "Mavjudligi",
        ДобавитьВкорзину: "Savatchaga qo'shish",
        ВсеТовары: "Barcha mahsulotlar",
        НашиКлиенты: "Bizning mijozlarimiz",
        БОЛЕЕ: "KO'PROQ",
        УСПЕШНЫХПРОЕКТОВ: "Muvaffaqiyatli loyihalar",
        "Медицина компетенций": "Tibbiyot kompetensiyalari",
        "НМИЦ онкологии им. Н.Н. Блохина":
          "N.N. Blokhina nomidagi Onkologiya Milliy Tibbiyot Ilmiy Markazi. ",
        "ФМБА России КЛИНИЧЕСКАЯ БОЛЬНИЦА 85":
          "Rossiya FMBA 85-KLINIK shifoxonasi",
        "Эксклюзивные поставщики": "Eksklyuziv etkazib beruvchilar",
        Бренды: "Brendlar",
        ИнформацияОкомпании: "Kompaniya haqida ma'lumot",
        ПреимуществаСотрудников: "Xodimlarga beriladigan imtiyozlar",
        ДостиженияКомпании: "Kompaniya yutuqlari",
        КарьерныйРост: "Karyera o'sishi",
        ИнформацияОкомпанииДеск: `Ammo sintetik test o'zining klassik taqdimotida jamiyatning bosqichma-bosqich va izchil rivojlanishini joriy etish imkonini beradi. Zamonaviy standartlarning spetsifikatsiyasi doirasida fanda totalitarizm tarafdorlari funktsional jihatdan ajratiladi.`,
        Новости: "Yangiliklar",
        компании: "kompaniyalar",
        "Название новости": "Yangilik sarlavhasi",
        НовостиДеск:
          "Jamiyatning bosqichma-bosqich va rivojlanishini joriy etishga imkon beradi.",
        ВсеНовости: "Barcha yangiliklar",
        Сертификаты: "Sertifikatlar",
        ОсталисьВопросы: "Qolgan savollar",
        ОсталисьВопросыНомер:
          "Ulardan +7 (495) 000-00-00 telefon raqami orqali so'rang yoki koordinatalaringizni qoldiring va menejerimiz sizga 10 daqiqadan so'ng qo'ng'iroq qiladi.",
        ВашеИмя: "Sizning ismingiz",
        "Пожалуйста, введите ваш номер телефона":
          "Iltimos, telefon raqamingizni kiriting",
        ВашТелефон: "Telefoningiz",
        "неправильный адрес электронной почты":
          "Iltimos, to'g'ri e-pochta manzilini kiriting",
        "Пожалуйста, введите свой адрес электронной почты":
          "Iltimos, elektron pochtangizni kiriting",
        ВашEmail: "Sizning elektron pochtangiz",
        "Пожалуйста, введите ваш вопрос": "Iltimos, savolingizni kiriting",
        ВашВопрос: "Sizning savolingiz",
        Отправить: "Yuborish",
        НажимаяОтправить: `“Yuborish” tugmasini bosish orqali men shaxsiy ma’lumotlarning shartlar asosida qayta ishlanishiga rozilik bildiraman`,
        "Политики конфиденциальности": "Maxfiylik siyosati",
        Подпишитесь: "Obuna bo'ling va yangilanib turing",
        "Акции, скидки, распродажи ждут":
          "Aktsiyalar, chegirmalar, sotuvlar kutmoqda",
        ВведитеEmail: "Elektron pochtani kiriting",
        Подписаться: "Obuna boʻling",
        "Я даю согласие на обработку своих персональных данных":
          "Men shaxsiy ma'lumotlarimni qayta ishlashga rozilik beraman",
        Вакансии: "Bo'sh ish o'rinlari",
        Возврат: "Qaytarish",
        FAQ: "FAQ",
        Лизинг: "Linzing",
        Отзывы: "Sharhlar",
        Реанимация: "Reanimatsiya",
        Хирургия: "Jarrohlik",
        Офтальмология: "Oftalmologiya",
        ЛабораторнаяДиагностика: "Laboratoriya diagnostikasi",
        АкушерствоИГинекология: "Akusherlik va Ginekologiya",
        Гистология: "Gistologiya",
        Косметология: "Kosmetologiya",
        Орториноларингология: "Otorinolaringologiya",
        РентгенологияИТомография: "Rentgenologiya va tomografiya",
        Стрерилизация: "Sterilizatsiya",
        ФизиотерапияИРеабилитация: "Fizioterapiya va reabilitatsiya",
        ФункциональнаяДиагностика: "Funktsional diagnostika	",
        Эндоскопия: "Endoskopiya",
        Распродажи: "Sotuvlar",
        Адрес: "Manzil",
        СкачатьКаталог: "Katalo‘gni yuklab olish",
        КартаПроезда: "Yo'nalishlar xaritasi",
        ГрафикРаботы: "Ish jadvali",
        "ООО «ГЛОБАЛ МЕДИКАЛ ТРЕЙД»": "OOO «GLOBAL MEDICAL TRADE MChJ»",
        МыВСоцсетях: "Biz ijtimoiy tarmoqlardamiz",
        ПартнерскаяПрограмма: "Hamkorlik dasturi",
        ОптовыеПродажи: "Ulgurji savdo",
        Реквизиты: "Tafsilotlar",
        ПолитикаКонфиденциальности: "Maxfiylik siyosati",
        УсловияСоглашения: "Shartnoma shartlari",
        КартаСайта: "Sayt xaritasi",
        СпособыОплаты: "To'lov usullari",
        Медоборудование: "Tibbiy asbob-uskunalar",
        ВсеПраваЗащищены: "Barcha huquqlar himoyalangan",
        ИнформацияФоотер: `Ushbu veb-saytdagi ma'lumotlar faqat ma'lumot olish uchun mo'ljallangan va uni tashkil etmaydi
 Fuqarolik kodeksining 437-moddasi qoidalari bilan belgilanadigan ommaviy taklif
 Rossiya Federatsiyasi kodeksi`,
      },
    },
    Ru: {
      translation: {
        Окомпании: "О компании",
        Доставка: "Доставка",
        Оплата: "Оплата",
        Гарантии: "Гарантии",
        Блог: "Блог",
        Аддрес: "г. Москва, ул. Московская, д. 35", // Address
        Поиск: "Поиск...",
        РабочееВремя: "Пн-Пт с 09:00-19:00",
        Отдых: "Сб-Вс - выходной",
        Войти: "Войти",
        Избранное: "Избранное",
        Сравнить: "Сравнить",
        Корзина: "Корзина",
        Каталог: "Каталог", // New translations
        Производители: "Производители",
        КабинетыКлюч: "Кабинеты ключ",
        Услуги: "Услуги",
        Акции: "Акции",
        Покупателям: "Покупателям",
        Контакты: "Контакты",
        Москва: "Москва",
        ЗаказатьЗвонок: "Заказать звонок",
        ВсеКатегории: "Все категории",
        ЗаголовокБаннераВПаруСтрок: "Заголовок баннера в пару строк",
        ЗапроситьЦену: "Запросить цену",
        ВКаталог: "В каталог",
        ПопулярныеКатегории: "Популярные категории",
        ДерматологическоеОборудование: "Дерматологическое оборудование",
        ВетеринарноеОборудование: "Ветеринарное оборудование",
        ОборудованиеДляАнастезиологии: "Оборудование для анастезиологии",
        МебельДляМедицинскихЦелей: "Мебель для медецинских целей",
        КомплексноеОснащениеКабинетов: "Комплексное оснащение кабинетов",
        ЭкспрессЛаборатория: "Экспресс лаборатория",
        ЛазернаяТерапия: "Лазерная терапия",
        ОперационныйБлок: "Операционный блок",
        НоваяЛаборатория: "Новая лаборатория",
        БесплатнаяКонсультация: "Бесплатная консультация",
        РассчитатьСтоимость: "Рассчитать стоимость",
        ПочемуВыбираютНас: "Почему выбирают нас",
        БыстраяДоставка: "Быстрая доставка",
        ВесьТоварСертифицирован: "Весь товар сертифицирован",
        ГибкаяСистемаСкидок: "Гибкая система скидок",
        ЛетНаРынке: "Лет на рынке",
        ХитыПродаж: "Хиты продаж",
        Новинки: "Новинки",
        КаталогТоваров: "Каталог Товаров",
        "Анализатор Мочи MINDUA-66": "Анализатор Мочи MINDUA-66",
        Артикул: "Артикул",
        Вналичии: "В наличии",
        ДобавитьВкорзину: "Добавить В корзину",
        ВсеТовары: "Все Товары",
        НашиКлиенты: "Наши Клиенты",
        БОЛЕЕ: "БОЛЕЕ",
        УСПЕШНЫХПРОЕКТОВ: "УСПЕШНЫХ ПРОЕКТОВ",
        "Медицина компетенций": "Медицина компетенций",
        "НМИЦ онкологии им. Н.Н. Блохина": "НМИЦ онкологии им. Н.Н. Блохина",
        "ФМБА России КЛИНИЧЕСКАЯ БОЛЬНИЦА 85":
          "ФМБА России КЛИНИЧЕСКАЯ БОЛЬНИЦА 85",
        "Эксклюзивные поставщики": "Эксклюзивные поставщики",
        Бренды: "Бренды",
        ИнформацияОкомпании: "Информация О компании",
        ПреимуществаСотрудников: "Преимущества Сотрудников",
        ДостиженияКомпании: "Достижения Компании",
        КарьерныйРост: "Карьерный Рост",
        ИнформацияОкомпанииДеск:
          "Но синтетическое тестирование, в своём классическом представлении, допускает внедрение поэтапного и последовательного развития общества.   В рамках спецификации современных стандартов, сторонники тоталитаризма в науке будут функционально разнесены.",
        Новости: "Новости",
        компании: "компании",
        "Название новости": "Название новости",
        НовостиДеск: "Допускает внедрение поэтапного и развития общества.",
        ВсеНовости: "Все новости",
        Сертификаты: "Сертификаты",
        ОсталисьВопросы: "Остались вопросы",
        ОсталисьВопросыНомер:
          "Задайте их по номеру телефона +7 (495) 000-00-00 или оставьте свои координаты и наш менеджер перезвонит вам через 10 минут",
        ВашеИмя: "Ваше имя",
        "Пожалуйста, введите ваш номер телефона":
          "Пожалуйста, введите ваш номер телефона",
        ВашТелефон: "Ваш телефон",
        "неправильный адрес электронной почты":
          "Пожалуйста, введите действительный адрес электронной почты",
        "Пожалуйста, введите свой адрес электронной почты":
          "Пожалуйста, введите свой адрес электронной почты",
        ВашEmail: "Ваш email",
        "Пожалуйста, введите ваш вопрос": "Пожалуйста, введите ваш вопрос",
        ВашВопрос: "Ваш вопрос",
        Отправить: "Отправить",
        НажимаяОтправить:
          "Нажимая «Отправить», я соглашаюсь c обработкой персональных данных на условиях",
        "Политики конфиденциальности": "Политики конфиденциальности",
        Подпишитесь: "Подпишитесь и будьте в курсе",
        "Акции, скидки, распродажи ждут": "Акции, скидки, распродажи ждут",
        ВведитеEmail: "Введите email",
        Подписаться: "Подписаться",
        "Я даю согласие на обработку своих персональных данных":
          "Я даю согласие на обработку своих персональных данных",
        Вакансии: "Вакансии",
        Возврат: "Возврат",
        FAQ: "FAQ",
        Лизинг: "Лизинг",
        Отзывы: "Отзывы",
        Реанимация: "Реанимация",
        Хирургия: "Хирургия",
        Офтальмология: "Офтальмология",
        ЛабораторнаяДиагностика: "Лабораторная диагностика",
        АкушерствоИГинекология: "Акушерство и Гинекология",
        Гистология: "Гистология",
        Косметология: "Косметология",
        Орториноларингология: "Орториноларингология	",
        РентгенологияИТомография: "Рентгенология и томография	",
        Стрерилизация: "Стрерилизация",
        ФизиотерапияИРеабилитация: "Физиотерапия и реабилитация",
        ФункциональнаяДиагностика: "Функциональная диагностика",
        Эндоскопия: "Эндоскопия",
        Распродажи: "Распродажи",
        Адрес: "Адрес",
        СкачатьКаталог: "Скачать каталог",
        КартаПроезда: "Карта проезда",
        ГрафикРаботы: "График паботы",
        "ООО «ГЛОБАЛ МЕДИКАЛ ТРЕЙД»": "ООО «ГЛОБАЛ МЕДИКАЛ ТРЕЙД»",
        МыВСоцсетях: "Мы в соцсетях",
        ПартнерскаяПрограмма: "Партнерская программа",
        ОптовыеПродажи: "Оптовые продажи",
        Реквизиты: "Реквизиты",
        ПолитикаКонфиденциальности: "Политика конфиденциальности",
        УсловияСоглашения: "Условия соглашения",
        КартаСайта: "Карта сайта",
        СпособыОплаты: "Способы оплаты",
        Медоборудование: "Медоборудование",
        ВсеПраваЗащищены: "Все права защищены",
        ИнформацияФоотер: `Информация на данном сайте носит справочный характер и не является
            публичной офертой, определяемой положениями Статьи 437 Гражданского
            кодекса Российской Федерации`,
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
