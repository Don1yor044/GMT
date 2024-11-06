import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
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
          КабинетыКлюч: "Turnkey offices",
          Услуги: "Services",
          Акции: "Promotions",
          Покупателям: "For Customers",
          Контакты: "Contacts",
          Москва: "Moscow",
          ЗаказатьЗвонок: "Request a Call",
          ВсеКатегории: "All categories",
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
          "ФМБА России КЛИНИЧЕСКАЯ БОЛЬНИЦА":
            "FMBA of Russia CLINICAL HOSPITAL",
          "Эксклюзивные поставщики": "Exclusive suppliers",
          Бренды: "Brands",
          ИнформацияОкомпании: "Information About the company",
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
          "Акции, скидки, распродажи ждут":
            "Promotions, discounts, sales await",
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
          Новинка: "Новинка",
          ХитПродаж: "Bestseller",
          Главная: "Home",
          ГлобалМедикалТрейд: "Global Medical Trade",
          УчитываяСтремительное: `Given the rapid development of global medical technologies, doctors in the Russian Federation and neighboring countries are faced with the challenge of upgrading equipment in various areas, from CT scanners to ultrasound scanners and ENT combines. The transition to a fully digital platform for diagnosing and treating diseases has also become a serious challenge for most hospitals and private clinics.`,
          КомпанияОООГлобалМедикалТрейд:
            "The company OOO Global Medical Trade considers it its duty to provide specialists with all necessary assistance in the matter of supplying medical equipment. Our catalog includes advanced equipment from the best manufacturers in Russia, Europe, Asia and the USA.",
          ЦифрыИФакты: "Numbers Facts",
          "Мы работаем на результат и продаём": "We work for results and sell",
          "только качественную продукцию": "only quality products",
          лет: "years",
          нарынке: "on the market",
          "оригинальной продукции со всего мира":
            "original products from all over the world",
          "международных сертификатов качества":
            "international quality certificates",
          "товаров всегда в наличии": "goods always in stock",
          НашиПартнёры: "Our partners",
          "Нашими партнёрами являются наиболее серьёзные игроки на мировом  рынке профильного оборудования. Это позволяет нам наладить долгосрочное и успешное сотрудничество, добиться лучших  цен для государственных учреждений здравоохранения, медицинских  центров, лабораторий, а также ветеринарных клиник и кабинетов.  Купить нужную вам технику по оптимальным ценам, выбрать подходящую  модель устройства в рамках бюджета в нашей компании окажется  намного проще. Мы поддерживаем скидки и особые предложения  для наших партнёров, предлагаем оформление аппаратов в лизинг  и готовы предоставить системы в рассрочку на выгодных условиях":
            "Our partners are the most serious players in the global market of specialized equipment. This allows us to establish long-term and successful cooperation, achieve the best prices for government healthcare institutions, medical centers, laboratories, as well as veterinary clinics and offices. Buying the equipment you need at the best prices, choosing the right model of the device within the budget will be much easier in our company. We support discounts and special offers for our partners, offer leasing of devices and are ready to provide systems in installments on favorable terms",
          "Опытные сотрудники из": "Experienced staff from",
          "производственных компаний": "manufacturing companies",
          "Наши сотрудники имеют огромный опыт работы в сложных условиях,в том числе в разгар пандемии COVID–19. В этот период мы осуществили поставки медицинских аппаратов в новейшие клиники Минобороны в различных регионах страны":
            "Our employees have extensive experience working in difficult conditions, including during the height of the COVID-19 pandemic. During this period, we delivered medical equipment to the newest clinics of the Ministry of Defense in various regions of the country.",
          Константин: "Konstantin",
          Алексей: "Alexey",
          Наталья: "Natalia",
          ОсновательКомпании: "Founder of the Company",
          ДиректорПоМаркетингу: "Marketing Director",
          ГлавныйИнженер: "Chief Engineer",
          ИнформацияОдоставке: "Shipping Information",
          ПунктВыдачи: "Pick-up Point",
          "Учитывая стремительное развитие мировых медицинских технологий,врачи в Российской Федерации и соседних странах столкнулись с вызовом, требующим обновления приборов в различных направлениях,от установок компьютерной томографии до ультразвуковых сканеров и ЛОР комбайнов. Переход на полностью цифровую платформу при диагностике и лечении заболеваний также стал серьёзным испытанием для большинства больниц и частных клиник":
            "Given the rapid development of global medical technologies, doctors in the Russian Federation and neighboring countries are faced with the challenge of upgrading their equipment in various areas, from CT scanners to ultrasound scanners and ENT combines. The transition to a fully digital platform for diagnosing and treating diseases has also become a serious challenge for most hospitals and private clinics.",
          "С нами выгодно и удобно": "It is profitable and convenient with us",
          ДоставкаПоВсейРоссииИУзбекистану:
            "Delivery throughout Russia and Uzbekistan.",
          СобственныйСкладСПродукцией: "Own Warehouse with Products",
          БезопасныеСпособыОплаты: "Safe Payment Methods",
          ПроверитьСтатусДоставки: "Check delivery status",
          "Правила получения товара в пункте выдачи":
            "Rules for receiving goods at the pick-up point",
          "Учитывая стремительное развитие мировых медицинских технологий, врачи в Российской Федерации и соседних странах столкнулись с вызовом, требующим обновления приборов":
            "Given the rapid development of global medical technologies, doctors in the Russian Federation and neighboring countries are faced with the challenge of upgrading their equipment.",
          ПодготовитьДокументы: "Prepare Documents",
          ПроверкаУпаковки: "Checking the Packaging",
          ПроверкаТовара: "Product Check",
          "Предварительно ознакомиться с условиями выдачи грузов на сайте и подготовьте нужные документы":
            "Please familiarize yourself with the terms of cargo delivery on the website and prepare the necessary documents.",
          "При получении необходимо внимательно осмотреть упаковку груза на наличие механических повреждений и нарушений целостности упаковки":
            "Upon receipt, it is necessary to carefully inspect the cargo packaging for mechanical damage and violations of the integrity of the packaging.",
          "Вскрыть каждую упаковку и проверите товар по количеству согласно накладной поставщика и на наличие повреждений товара внутри тары":
            "Open each package and check the goods for quantity according to the supplier's invoice and for damage to the goods inside the container.",
          "Вы сможете забрать оборудование":
            "You will be able to pick up the equipment",
          самостоятельно: "on one's own ",
          " из нашего офиса": "from our office",
          РежимРаботы: "Operating Mode",
          ПостроитьМаршрут: "Build a Route",
          "Документы, необходимые для получения груза":
            "Documents required to receive cargo",
          "По копиям доверенностей и доверенностям с незаполненными обязательными реквизитами отгрузка не производится":
            "Shipments are not made based on copies of powers of attorney and powers of attorney with unfilled mandatory details.",
          ЮридическиеЛица: "Legal Entities",
          ИндивидуальныеПредприниматели: "Individual Entrepreneurs",
          ФизическиеЛица: "Individuals",
          "Но синтетическое тестирование, в своём классическом представлении, допускает внедрение поэтапного и последовательного развития общества. В рамках спецификации современных стандартов, сторонники тоталитаризма в науке будут функционально разнесены":
            "But synthetic testing, in its classical presentation, allows for the introduction of a step-by-step and consistent development of society. Within the framework of the specification of modern standards, supporters of totalitarianism in science will be functionally separated",
          ВамНужнаКонсультация: "You Need a Consultation",
          "Задайте их по номеру телефона": "Ask them by phone number",
          "или оставьте свои координаты и наш менеджер перезвонит вам через 10 минут":
            "or leave your contact details and our manager will call you back in 10 minutes",
          наПродукцию: "for products",
          "Учитывая стремительное развитие мировых медицинских технологий, врачи в Российской Федерации и соседних странах столкнулись с вызовом, требующим обновления приборов в различных направлениях, от установок компьютерной томографии до ультразвуковых сканеров и ЛОР комбайнов.":
            "Given the rapid development of global medical technologies, doctors in the Russian Federation and neighboring countries are faced with the challenge of upgrading equipment in various areas, from CT scanners to ultrasound scanners and ENT combines.",
          "Порядок возврата денежных средств": "Refund procedure",
          УсловияПоставок: "Delivery terms",
          ОплатаНаличными: "Payment in Cash",
          БезналичныйРасчет: "Cashless Payment",
          ОплатаБанковскойКартой: "Payment by Bank Card",
          "Также как постоянное обеспечение нашей деятельности требует определения":
            "Just as the continuous provision of our activities requires the definition",
          "Требующим обновления приборов в различных направлениях, от установок компьютерной томографии":
            "Requiring an update of devices in various areas, from computer tomography installations",
          "Также как постоянное обеспечение нашей":
            "As well as the constant provision of our",
          "Также как постоянное": "Also as a permanent",
          "Также как постоянное обеспечение": "Also as a permanent provision",
          "При оплате наличными": "When paying in cash",
          "При оплате банковской картой": "When paying by credit card",
          Рассрочка: "Installment plan",
          "Регулярное сервисное обслуживание медицинской техники – залог ее надежной, беспроблемной эксплуатации, а также продолжительного срока службы. Периодическая диагностика позволяет выявить любые неисправности, отклонения от нормального рабочего режима на самых ранних сроках. Это предотвратит серьезные поломки, приводящие к дорогостоящим ремонтам":
            "Regular maintenance of medical equipment is the key to its reliable, trouble-free operation, as well as a long service life. Periodic diagnostics allow you to identify any malfunctions, deviations from the normal operating mode at the earliest possible stages. This will prevent serious breakdowns that lead to expensive repairs.",
          "Являясь авторизованным дилером брендов, продукция которых представлена в каталоге, компания":
            "As an authorized dealer of the brands whose products are presented in the catalog, the company",
          "Предоставляет услуги сервисного и гарантийного обслуживания":
            "Provides service and warranty maintenance services",
          "Осуществляет поставку оригинальных запчастей и комплектующих":
            "Provides supply of original spare parts and components",
          "Обучает медицинский персонал работе с современным высокотехнологичным оборудованием":
            "Trains medical personnel to work with modern high-tech equipment",
          "Глобал Медикал Трейд является надежным поставщиком медицинского оборудовани, предлагая своим клиентам качественную продукцию по лучшей цене. Наша компания гарантирует всем клиентам возможность воспользоваться услугами квалифицированных мастеров в установке, пуско-наладке, сервисном и техническом обслуживании приобретенного оборудования":
            "Global Medical Trade is a reliable supplier of medical equipment, offering its customers quality products at the best price. Our company guarantees all customers the opportunity to use the services of qualified technicians in installation, commissioning, service and maintenance of the purchased equipment.",
          ПереченьГарантийныхУслуг: "List of Warranty Services",
          "Установка, настройка и пуско-наладка медтехники":
            "Installation, configuration and commissioning of medical equipment",
          "Сервисное обслуживание медицинской техники любой комплектации":
            "Service maintenance of medical equipment of any configuration",
          "Гарантийное и постгарантийное обслуживание":
            "Warranty and post-warranty service",
          "Диагностика и проведение профилактических работ":
            "Diagnostics and preventive maintenance",
          ГарантийныйСлучай: "Warranty Case",
          ЗаменаТовара: "Replacement of Goods",
          Внимание: "Attention",
          "Рассмотрение заявки на замену товара осуществляется в срок до 30 дней со дня её регистрации согласно п. 1 ст. 12 Закона № 59-ФЗ, при условии предоставления документов, перечисленных в договоре":
            "The application for replacement of goods is considered within 30 days from the date of its registration in accordance with paragraph 1 of Article 12 of Law No. 59-FZ, subject to the provision of the documents listed in the agreement.",
          "Оформление гарантийного случая осуществляется согласно Гражданскому кодексу РФ, при условии предоставления документов, перечисленных в договоре и при наличии заявления с указанием причины возврата, оформленного надлежащим образом":
            "Registration of a warranty case is carried out in accordance with the Civil Code of the Russian Federation, subject to the provision of documents listed in the contract and the presence of an application indicating the reason for the return, duly executed",
          Апробация: "Approbation",
          "Помощь в подборе оборудования":
            "Assistance in selection of equipment",
          "Помощь инженеров в настройке": "Help from engineers in setting up",
          "Пуско-наладочные работы": "Commissioning works",
          "Обучение работе с оборудованием": "Training in equipment operation",
          "Подменный аппарат": "Replacement device",
          "Работа с учебными центрами повышения квалификации медицинского персонала":
            "Working with training centers for advanced training of medical personnel",
          "Организация обучения врачей на собственной территории":
            "Organization of training of doctors on our own territory",
          ОписаниеУслуги: "Description of Service",
          "Также как постоянное информационно-пропагандистское обеспечение нашей деятельности требует определения и уточнения распределения внутренних резервов и ресурсов.":
            "Just as constant information and propaganda support of our activities requires the definition and clarification of the distribution of internal reserves and resources.",
          "Также как постоянное информационно-пропагандистское обеспечение нашей деятельности требует определения.":
            "Just as the constant information and propaganda support of our activities requires definition.",
          Заказать: "Order",
          ВыСможете: "You Can Do It ",
          оставитьЗаявку: "leave a request",
          "на услуги и скачать бланк для заполнения":
            "for services and download the form to fill out",
          БланкДляЗаполнения: "Form To Fill Out",
          ЗаполненнаяФорма: "Completed Form",
          ОставитьЗаявку: "Leave a Request",
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
          "ФМБА России КЛИНИЧЕСКАЯ БОЛЬНИЦА":
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
          Новинка: "Yangi",
          ХитПродаж: "Eng yaxshi sotilgan",
          Главная: "Uy",
          ГлобалМедикалТрейд: "Global tibbiy savdo",
          УчитываяСтремительное:
            "Jahon tibbiyoti texnologiyalarining jadal rivojlanishini hisobga olgan holda, Rossiya Federatsiyasi va qo'shni mamlakatlar shifokorlari kompyuter tomografiyasi bo'linmalaridan tortib, ultratovush skanerlari va LOR bo'limlarigacha bo'lgan turli sohalardagi uskunalarni yangilashni talab qiladigan muammoga duch kelishmoqda. Kasalliklarni tashxislash va davolash uchun to‘liq raqamli platformaga o‘tish ham aksariyat shifoxonalar va xususiy klinikalar uchun jiddiy sinovga aylandi.",
          КомпанияОООГлобалМедикалТрейд: `"Global Medical Trade" MChJ kompaniyasi buni o'z burchi deb biladi
 ta'minot biznesida mutaxassislarga barcha zarur yordamni ko'rsatish
 tibbiy asbob-uskunalar. Bizning katalogimiz eng so'nggi yangiliklarni o'z ichiga oladi
 Rossiya, Evropa, Osiyodagi eng yaxshi ishlab chiqaruvchilarning uskunalari
 va AQSh`,
          ЦифрыИФакты: "Raqamlar va faktlar",
          "Мы работаем на результат и продаём":
            "Biz natijalar uchun ishlaymiz va sotamiz",
          "только качественную продукцию": "faqat sifatli mahsulotlar",
          лет: "yillar",
          нарынке: "bozorda",
          "оригинальной продукции со всего мира":
            "butun dunyodan original mahsulotlar",
          "международных сертификатов качества": "xalqaro sifat sertifikatlari",
          "товаров всегда в наличии": "tovarlar doimo zaxirada",
          НашиПартнёры: "Bizning hamkorlarimiz",
          "Нашими партнёрами являются наиболее серьёзные игроки на мировом  рынке профильного оборудования. Это позволяет нам наладить долгосрочное и успешное сотрудничество, добиться лучших  цен для государственных учреждений здравоохранения, медицинских  центров, лабораторий, а также ветеринарных клиник и кабинетов.  Купить нужную вам технику по оптимальным ценам, выбрать подходящую  модель устройства в рамках бюджета в нашей компании окажется  намного проще. Мы поддерживаем скидки и особые предложения  для наших партнёров, предлагаем оформление аппаратов в лизинг  и готовы предоставить системы в рассрочку на выгодных условиях":
            "Bizning hamkorlarimiz ixtisoslashtirilgan uskunalar uchun jahon bozoridagi eng jiddiy o'yinchilardir. Bu bizga uzoq muddatli va muvaffaqiyatli hamkorlikni yo‘lga qo‘yish, davlat sog‘liqni saqlash muassasalari, tibbiyot markazlari, laboratoriyalar, shuningdek, veterinariya klinikalari va idoralari uchun eng yaxshi narxlarga erishish imkonini beradi. Bizning kompaniyamizda sizga kerak bo'lgan uskunani eng yaxshi narxlarda sotib olish va byudjetingiz doirasida mos qurilma modelini tanlash ancha oson bo'ladi. Biz hamkorlarimiz uchun chegirmalar va maxsus takliflarni qo'llab-quvvatlaymiz, qurilmalar lizingini taklif qilamiz va tizimlarni qulay shartlarda bo'lib-bo'lib taqdim etishga tayyormiz.",
          "Опытные сотрудники из": "Ishlab chiqarish korxonalarining",
          "производственных компаний": "tajribali xodimlari",
          "Наши сотрудники имеют огромный опыт работы в сложных условиях,в том числе в разгар пандемии COVID–19. В этот период мы осуществили поставки медицинских аппаратов в новейшие клиники Минобороны в различных регионах страны":
            "Xodimlarimiz og‘ir sharoitlarda, jumladan, COVID-19 pandemiyasi davrida ishlashda katta tajribaga ega. Bu davrda mamlakatimizning turli hududlaridagi Mudofaa vazirligining eng yangi klinikalarini tibbiy asbob-uskunalar bilan ta’minladik.",
          Константин: "Konstantin",
          Алексей: "Aleksey",
          Наталья: "Natalya",
          ОсновательКомпании: "Kompaniya asoschisi",
          ДиректорПоМаркетингу: "Marketing direktori",
          ГлавныйИнженер: "Bosh muhandis",
          ИнформацияОдоставке: "Yetkazib berish haqida ma'lumot",
          ПунктВыдачи: "Qabul qilish punkti",
          "Учитывая стремительное развитие мировых медицинских технологий,врачи в Российской Федерации и соседних странах столкнулись с вызовом, требующим обновления приборов в различных направлениях,от установок компьютерной томографии до ультразвуковых сканеров и ЛОР комбайнов. Переход на полностью цифровую платформу при диагностике и лечении заболеваний также стал серьёзным испытанием для большинства больниц и частных клиник":
            "Jahon tibbiyoti texnologiyalarining jadal rivojlanishini hisobga olgan holda, Rossiya Federatsiyasi va qo'shni mamlakatlar shifokorlari kompyuter tomografiyasi bo'linmalaridan tortib, ultratovush skanerlari va LOR kombinatlarigacha bo'lgan turli sohalardagi qurilmalarni yangilashni talab qiladigan muammoga duch kelishmoqda. Kasalliklarni tashxislash va davolash uchun to'liq raqamli platformaga o'tish ham ko'pchilik shifoxonalar va xususiy klinikalar uchun jiddiy sinovga aylandi.",
          "С нами выгодно и удобно": "Bu biz bilan foydali va qulay",
          ДоставкаПоВсейРоссииИУзбекистану:
            "Butun Rossiya va Uzbekiston bo'ylab yetkazib berish",
          СобственныйСкладСПродукцией: "Mahsulotlar bilan shaxsiy ombor",
          БезопасныеСпособыОплаты: "Xavfsiz to'lov usullari",
          ПроверитьСтатусДоставки: "Yetkazib berish holatini tekshiring",
          "Правила получения товара в пункте выдачи":
            "Emissiya joyida tovarlarni qabul qilish qoidalari",
          "Учитывая стремительное развитие мировых медицинских технологий, врачи в Российской Федерации и соседних странах столкнулись с вызовом, требующим обновления приборов":
            "Jahon tibbiyot texnologiyalarining jadal rivojlanishini hisobga olgan holda, Rossiya Federatsiyasi va qo'shni mamlakatlar shifokorlari uskunalarni yangilashni talab qiladigan muammoga duch kelishmoqda.",
          ПодготовитьДокументы: "Hujjatlarni tayyorlang",
          ПроверкаУпаковки: "Paket tekshiruvi",
          ПроверкаТовара: "Mahsulotni tekshirish",
          "Предварительно ознакомиться с условиями выдачи грузов на сайте и подготовьте нужные документы":
            "Veb-saytda yuklarni etkazib berish shartlarini oldindan o'qing va kerakli hujjatlarni tayyorlang",
          "При получении необходимо внимательно осмотреть упаковку груза на наличие механических повреждений и нарушений целостности упаковки":
            "Qabul qilgandan so'ng, siz yuk qadoqlarini mexanik shikastlanish va qadoqning yaxlitligini buzish uchun ehtiyotkorlik bilan tekshirishingiz kerak.",
          "Вскрыть каждую упаковку и проверите товар по количеству согласно накладной поставщика и на наличие повреждений товара внутри тары":
            "Har bir o'ramni oching va etkazib beruvchining hisob-fakturasiga ko'ra miqdori bo'yicha tovarlarni tekshiring va idish ichidagi tovarlarga shikast etkazing.",
          "Вы сможете забрать оборудование": "Uskunani o'zingiz",
          самостоятельно: "ofisimizdan ",
          " из нашего офиса": "olishingiz mumkin",
          РежимРаботы: "Ishlash tartibi",
          ПостроитьМаршрут: "Yo'nalish qurish",
          "Документы, необходимые для получения груза":
            "Yukni qabul qilish uchun zarur bo'lgan hujjatlar",
          "По копиям доверенностей и доверенностям с незаполненными обязательными реквизитами отгрузка не производится":
            "To'ldirilmagan majburiy rekvizitlari ko'rsatilgan ishonchnomalar va ishonchnomalarning nusxalari yuborilmaydi.",
          ЮридическиеЛица: "Yuridik shaxslar",
          ИндивидуальныеПредприниматели: "Yakka tartibdagi tadbirkorlar",
          ФизическиеЛица: "Jismoniy shaxslar",
          "Но синтетическое тестирование, в своём классическом представлении, допускает внедрение поэтапного и последовательного развития общества. В рамках спецификации современных стандартов, сторонники тоталитаризма в науке будут функционально разнесены":
            "Ammo sintetik test o'zining klassik taqdimotida jamiyatning bosqichma-bosqich va izchil rivojlanishini joriy etish imkonini beradi. Zamonaviy standartlarning spetsifikatsiyasi doirasida fanda totalitarizm tarafdorlari funktsional jihatdan ajratiladi",
          ВамНужнаКонсультация: "Sizga maslahat kerakmi?",
          "Задайте их по номеру телефона":
            "Ulardan telefon raqami orqali so'rang",
          "или оставьте свои координаты и наш менеджер перезвонит вам через 10 минут":
            "yoki koordinatalaringizni qoldiring va menejerimiz sizga 10 daqiqadan so'ng qo'ng'iroq qiladi",
          наПродукцию: "mahsulotlar uchun",
          "Учитывая стремительное развитие мировых медицинских технологий, врачи в Российской Федерации и соседних странах столкнулись с вызовом, требующим обновления приборов в различных направлениях, от установок компьютерной томографии до ультразвуковых сканеров и ЛОР комбайнов.":
            "Jahon tibbiyot texnologiyalarining jadal rivojlanishini hisobga olgan holda, Rossiya Federatsiyasi va qo'shni mamlakatlar shifokorlari kompyuter tomografiyasi qurilmalaridan tortib, ultratovushli skanerlar va LOR bo'limlarigacha bo'lgan turli sohalardagi uskunalarni yangilashni talab qiladigan muammoga duch kelishmoqda.",
          "Порядок возврата денежных средств": "To'lovni qaytarish tartibi",
          УсловияПоставок: "Yetkazib berish shartlari",
          ОплатаНаличными: "Naqd pulda to'lash",
          БезналичныйРасчет: "Naqd pulsiz to'lov",
          ОплатаБанковскойКартой: "Bank kartasi orqali to'lov",
          "Также как постоянное обеспечение нашей деятельности требует определения":
            "Faoliyatimizni doimiy ta'minlash qat'iyatni talab qilganidek",
          "Требующим обновления приборов в различных направлениях, от установок компьютерной томографии":
            "Kompyuter tomografiyasi qurilmalaridan tortib, turli yo'nalishlarda jihozlarni yangilashni talab qilish",
          "Также как постоянное обеспечение нашей":
            "Xuddi bizning doimiy ta'minlanganimiz kabi",
          "Также как постоянное": "Xuddi doimiy kabi",
          "Также как постоянное обеспечение": "Xuddi doimiy ta'minot kabi",
          "При оплате наличными": "When paying in cash",
          "При оплате банковской картой": "Bank kartasi orqali to'lashda",
          Рассрочка: "To'lov rejasi",
          "Регулярное сервисное обслуживание медицинской техники – залог ее надежной, беспроблемной эксплуатации, а также продолжительного срока службы. Периодическая диагностика позволяет выявить любые неисправности, отклонения от нормального рабочего режима на самых ранних сроках. Это предотвратит серьезные поломки, приводящие к дорогостоящим ремонтам":
            "Tibbiy asbob-uskunalarga muntazam texnik xizmat ko'rsatish uning ishonchli, muammosiz ishlashi, shuningdek, uzoq xizmat muddatining kalitidir. Davriy diagnostika har qanday nosozliklar yoki normal ish sharoitidan og'ishlarni imkon qadar erta aniqlash imkonini beradi. Bu qimmat ta'mirlashga olib keladigan jiddiy zararni oldini oladi.",
          "Являясь авторизованным дилером брендов, продукция которых представлена в каталоге, компания":
            "Mahsulotlari katalogda taqdim etilgan brendlarning vakolatli dileri bo'lgan kompaniya",
          "Предоставляет услуги сервисного и гарантийного обслуживания":
            "Xizmat va kafolat xizmatlarini taqdim etadi",
          "Осуществляет поставку оригинальных запчастей и комплектующих":
            "Asl ehtiyot qismlar va butlovchi qismlarni yetkazib beradi",
          "Обучает медицинский персонал работе с современным высокотехнологичным оборудованием":
            "Tibbiyot xodimlarini zamonaviy yuqori texnologiyali uskunalar bilan ishlashga o‘rgatadi",
          "Глобал Медикал Трейд является надежным поставщиком медицинского оборудовани, предлагая своим клиентам качественную продукцию по лучшей цене. Наша компания гарантирует всем клиентам возможность воспользоваться услугами квалифицированных мастеров в установке, пуско-наладке, сервисном и техническом обслуживании приобретенного оборудования":
            "Global Medical Trade tibbiy asbob-uskunalarning ishonchli yetkazib beruvchisi bo'lib, o'z mijozlariga eng yaxshi narxlarda sifatli mahsulotlarni taklif etadi. Kompaniyamiz barcha mijozlarga sotib olingan uskunani o'rnatish, ishga tushirish, xizmat ko'rsatish va texnik xizmat ko'rsatishda malakali ustalarning xizmatlaridan foydalanish imkoniyatini kafolatlaydi.",
          ПереченьГарантийныхУслуг: "Kafolat bo'yicha xizmatlar ro'yxati",
          "Установка, настройка и пуско-наладка медтехники":
            "Tibbiy asbob-uskunalarni o'rnatish, sozlash va ishga tushirish",
          "Сервисное обслуживание медицинской техники любой комплектации":
            "Har qanday konfiguratsiyadagi tibbiy asbob-uskunalarga xizmat ko'rsatish",
          "Гарантийное и постгарантийное обслуживание":
            "Kafolat va kafolatdan keyingi xizmat ko'rsatish",
          "Диагностика и проведение профилактических работ":
            "Diagnostika va profilaktika ishlari",
          ГарантийныйСлучай: "Kafolat ishi",
          ЗаменаТовара: "Mahsulotni almashtirish",
          Внимание: "Diqqat",
          "Рассмотрение заявки на замену товара осуществляется в срок до 30 дней со дня её регистрации согласно п. 1 ст. 12 Закона № 59-ФЗ, при условии предоставления документов, перечисленных в договоре":
            "Tovarlarni almashtirish to'g'risidagi arizani ko'rib chiqish San'atning 1-bandiga muvofiq ro'yxatga olingan kundan boshlab 30 kun ichida amalga oshiriladi. 59-FZ-sonli Qonunning 12-moddasi, shartnomada ko'rsatilgan hujjatlarni taqdim etish sharti bilan",
          "Оформление гарантийного случая осуществляется согласно Гражданскому кодексу РФ, при условии предоставления документов, перечисленных в договоре и при наличии заявления с указанием причины возврата, оформленного надлежащим образом":
            "Kafolat ishini ro'yxatdan o'tkazish Rossiya Federatsiyasi Fuqarolik Kodeksiga muvofiq, shartnomada sanab o'tilgan hujjatlar taqdim etilgan taqdirda va tegishli ravishda rasmiylashtirilgan qaytarib berish sababini ko'rsatadigan ariza mavjud bo'lganda amalga oshiriladi.",
          Апробация: "Aprobatsiya",
          "Помощь в подборе оборудования": "Uskunani tanlashda yordam bering",
          "Помощь инженеров в настройке": "Muhandislar sozlashda yordam beradi",
          "Пуско-наладочные работы": "Ishga tushirish ishlari",
          "Обучение работе с оборудованием": "Uskunalarni tayyorlash",
          "Подменный аппарат": "O'zgartirish moslamasi",
          "Работа с учебными центрами повышения квалификации медицинского персонала":
            "Tibbiyot xodimlarining malakasini oshirish bo'yicha o'quv markazlari bilan ishlash",
          "Организация обучения врачей на собственной территории":
            "O'z hududida shifokorlar tayyorlashni tashkil etish",
          ОписаниеУслуги: "Xizmatlar tavsifi",
          "Также как постоянное информационно-пропагандистское обеспечение нашей деятельности требует определения и уточнения распределения внутренних резервов и ресурсов.":
            "Faoliyatimizni doimiy ravishda axborot va targ‘ibot-tashviqot bilan ta’minlash ichki zaxira va resurslar taqsimotini aniqlash va oydinlashtirishni taqozo etganidek.",
          "Также как постоянное информационно-пропагандистское обеспечение нашей деятельности требует определения.":
            "Faoliyatimizni doimiy ravishda axborot va targ'ibot-tashviqot bilan ta'minlash ta'rifni talab qilganidek.",
          Заказать: "Buyurtma",
          ВыСможете: "Siz xizmatlarga ",
          оставитьЗаявку: "so'rov qoldirishingiz",
          "на услуги и скачать бланк для заполнения":
            "va to'ldirish uchun shaklni yuklab olishingiz mumkin",
          БланкДляЗаполнения: "To'ldirish uchun shakl",
          ЗаполненнаяФорма: "Tugallangan shakl",
          ОставитьЗаявку: "So'rov qoldiring",
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
          "ФМБА России КЛИНИЧЕСКАЯ БОЛЬНИЦА":
            "ФМБА России КЛИНИЧЕСКАЯ БОЛЬНИЦА",
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
          Новинка: "Новинка",
          ХитПродаж: "Хит продаж",
          Главная: "Главная",
          ГлобалМедикалТрейд: "Глобал медикал трейд",
          УчитываяСтремительное: `Учитывая cтремительное развитие мировых медицинских технологий, врачи в Российской Федерации и соседних странах столкнулись с вызовом, требующим обновления приборов в различных направлениях, от установок компьютерной томографии до ультразвуковых сканеров и ЛОР комбайнов. Переход на полностью цифровую платформу при диагностике и лечении заболеваний также стал серьёзным испытанием для большинства больниц и частных клиник.`,
          КомпанияОООГлобалМедикалТрейд: `Компания ООО «Глобал Медикал Трейд» считает своим долгом
                  оказать специалистам всю необходимую помощь в деле поставок
                  медицинского оборудования. Наш каталог включает передовое
                  оборудование от лучших производителей России, Европы, Азии
                  и США.`,
          ЦифрыИФакты: "Цифры и факты",
          "Мы работаем на результат и продаём":
            "Мы работаем на результат и продаём",
          "только качественную продукцию": "только качественную продукцию",
          лет: "лет",
          нарынке: "на рынке",
          "оригинальной продукции со всего мира":
            "оригинальной продукции со всего мира",
          "международных сертификатов качества":
            "международных сертификатов качества",
          "товаров всегда в наличии": "товаров всегда в наличии",
          НашиПартнёры: "Наши партнёры",
          "Нашими партнёрами являются наиболее серьёзные игроки на мировом  рынке профильного оборудования. Это позволяет нам наладить долгосрочное и успешное сотрудничество, добиться лучших  цен для государственных учреждений здравоохранения, медицинских  центров, лабораторий, а также ветеринарных клиник и кабинетов.  Купить нужную вам технику по оптимальным ценам, выбрать подходящую  модель устройства в рамках бюджета в нашей компании окажется  намного проще. Мы поддерживаем скидки и особые предложения  для наших партнёров, предлагаем оформление аппаратов в лизинг  и готовы предоставить системы в рассрочку на выгодных условиях":
            "Нашими партнёрами являются наиболее серьёзные игроки на мировом  рынке профильного оборудования. Это позволяет нам наладить долгосрочное и успешное сотрудничество, добиться лучших  цен для государственных учреждений здравоохранения, медицинских  центров, лабораторий, а также ветеринарных клиник и кабинетов.  Купить нужную вам технику по оптимальным ценам, выбрать подходящую  модель устройства в рамках бюджета в нашей компании окажется  намного проще. Мы поддерживаем скидки и особые предложения  для наших партнёров, предлагаем оформление аппаратов в лизинг  и готовы предоставить системы в рассрочку на выгодных условиях",
          "Опытные сотрудники из": "Опытные сотрудники из",
          "производственных компаний": "производственных компаний",
          "Наши сотрудники имеют огромный опыт работы в сложных условиях, в том числе в разгар пандемии COVID–19. В этот периодмы осуществили поставки медицинских аппаратов в новейшие клиники Минобороны в различных регионах страны":
            "Наши сотрудники имеют огромный опыт работы в сложных условиях,  в том числе в разгар пандемии COVID–19. В этот период мы осуществили поставки медицинских аппаратов в новейшие клиники Минобороны в различных регионах страны",
          Константин: "Константин",
          Алексей: "Алексей",
          Наталья: "Наталья",
          ОсновательКомпании: "Основатель компании",
          ДиректорПоМаркетингу: "Директор по маркетингу",
          ГлавныйИнженер: "Главный инженер",
          ИнформацияОдоставке: "Информация о доставке",
          ПунктВыдачи: "Пункт выдачи",
          "Учитывая стремительное развитие мировых медицинских технологий,врачи в Российской Федерации и соседних странах столкнулись с вызовом, требующим обновления приборов в различных направлениях,от установок компьютерной томографии до ультразвуковых сканеров и ЛОР комбайнов. Переход на полностью цифровую платформу при диагностике и лечении заболеваний также стал серьёзным испытанием для большинства больниц и частных клиник":
            "Учитывая стремительное развитие мировых медицинских технологий,врачи в Российской Федерации и соседних странах столкнулись с вызовом, требующим обновления приборов в различных направлениях,от установок компьютерной томографии до ультразвуковых сканеров и ЛОР комбайнов. Переход на полностью цифровую платформу при диагностике и лечении заболеваний также стал серьёзным испытанием для большинства больниц и частных клиник",
          "С нами выгодно и удобно": "С нами выгодно и удобно",
          ДоставкаПоВсейРоссииИУзбекистану:
            "Доставка по всей России и Узбекистану.",
          СобственныйСкладСПродукцией: "Собственный Склад С Продукцией",
          БезопасныеСпособыОплаты: "Безопасные Способы Оплаты",
          ПроверитьСтатусДоставки: "Проверить статус доставки",
          "Правила получения товара в пункте выдачи":
            "Правила получения товара в пункте выдачи",
          "Учитывая стремительное развитие мировых медицинских технологий, врачи в Российской Федерации и соседних странах столкнулись с вызовом, требующим обновления приборов":
            "Учитывая стремительное развитие мировых медицинских технологий, врачи в Российской Федерации и соседних странах столкнулись с вызовом, требующим обновления приборов",
          ПодготовитьДокументы: "Подготовить документы",
          ПроверкаУпаковки: "Проверка упаковки",
          ПроверкаТовара: "Проверка товара",
          "Предварительно ознакомиться с условиями выдачи грузов на сайте и подготовьте нужные документы":
            "Предварительно ознакомиться с условиями выдачи грузов на сайте и подготовьте нужные документы",
          "При получении необходимо внимательно осмотреть упаковку груза на наличие механических повреждений и нарушений целостности упаковки":
            "При получении необходимо внимательно осмотреть упаковку груза на наличие механических повреждений и нарушений целостности упаковки",
          "Вскрыть каждую упаковку и проверите товар по количеству согласно накладной поставщика и на наличие повреждений товара внутри тары":
            "Вскрыть каждую упаковку и проверите товар по количеству согласно накладной поставщика и на наличие повреждений товара внутри тары",
          "Вы сможете забрать оборудование": "Вы сможете забрать оборудование",
          самостоятельно: "самостоятельно",
          " из нашего офиса": " из нашего офиса",
          РежимРаботы: "Режим работы",
          ПостроитьМаршрут: "Построить маршрут",
          "Документы, необходимые для получения груза":
            "Документы, необходимые для получения груза",
          "По копиям доверенностей и доверенностям с незаполненными обязательными реквизитами отгрузка не производится":
            "По копиям доверенностей и доверенностям с незаполненными обязательными реквизитами отгрузка не производится",
          ЮридическиеЛица: "Юридические лица",
          ИндивидуальныеПредприниматели: "Индивидуальные предприниматели",
          ФизическиеЛица: "Физические лица",
          "Но синтетическое тестирование, в своём классическом представлении, допускает внедрение поэтапного и последовательного развития общества. В рамках спецификации современных стандартов, сторонники тоталитаризма в науке будут функционально разнесены":
            "Но синтетическое тестирование, в своём классическом представлении, допускает внедрение поэтапного и последовательного развития общества. В рамках спецификации современных стандартов, сторонники тоталитаризма в науке будут функционально разнесены",
          ВамНужнаКонсультация: "Вам нужна консультация",
          "Задайте их по номеру телефона": "Задайте их по номеру телефона",
          "или оставьте свои координаты и наш менеджер перезвонит вам через 10 минут":
            "или оставьте свои координаты и наш менеджер перезвонит вам через 10 минут",
          наПродукцию: "на продукцию",
          "Учитывая стремительное развитие мировых медицинских технологий, врачи в Российской Федерации и соседних странах столкнулись с вызовом, требующим обновления приборов в различных направлениях, от установок компьютерной томографии до ультразвуковых сканеров и ЛОР комбайнов.":
            "Учитывая стремительное развитие мировых медицинских технологий, врачи в Российской Федерации и соседних странах столкнулись с вызовом, требующим обновления приборов в различных направлениях, от установок компьютерной томографии до ультразвуковых сканеров и ЛОР комбайнов.",
          "Порядок возврата денежных средств":
            "Порядок возврата денежных средств",
          УсловияПоставок: "Условия поставок",
          ОплатаНаличными: "Оплата наличными",
          БезналичныйРасчет: "Безналичный расчет",
          ОплатаБанковскойКартой: "Оплата банковской картой",
          "Также как постоянное обеспечение нашей деятельности требует определения":
            "Также как постоянное обеспечение нашей деятельности требует определения",
          "Требующим обновления приборов в различных направлениях, от установок компьютерной томографии":
            "Требующим обновления приборов в различных направлениях, от установок компьютерной томографии",
          "Также как постоянное обеспечение нашей":
            "Также как постоянное обеспечение нашей",
          "Также как постоянное": "Также как постоянное",
          "Также как постоянное обеспечение":
            "Также как постоянное обеспечение",
          "При оплате наличными": "При оплате наличными",
          "При оплате банковской картой": "При оплате банковской картой",
          Рассрочка: "Рассрочка",
          "Регулярное сервисное обслуживание медицинской техники – залог ее надежной, беспроблемной эксплуатации, а также продолжительного срока службы. Периодическая диагностика позволяет выявить любые неисправности, отклонения от нормального рабочего режима на самых ранних сроках. Это предотвратит серьезные поломки, приводящие к дорогостоящим ремонтам":
            "Регулярное сервисное обслуживание медицинской техники – залог ее надежной, беспроблемной эксплуатации, а также продолжительного срока службы. Периодическая диагностика позволяет выявить любые неисправности, отклонения от нормального рабочего режима на самых ранних сроках. Это предотвратит серьезные поломки, приводящие к дорогостоящим ремонтам",
          "Являясь авторизованным дилером брендов, продукция которых представлена в каталоге, компания":
            "Являясь авторизованным дилером брендов, продукция которых представлена в каталоге, компания",
          "Предоставляет услуги сервисного и гарантийного обслуживания":
            "Предоставляет услуги сервисного и гарантийного обслуживания",
          "Осуществляет поставку оригинальных запчастей и комплектующих":
            "Осуществляет поставку оригинальных запчастей и комплектующих",
          "Обучает медицинский персонал работе с современным высокотехнологичным оборудованием":
            "Обучает медицинский персонал работе с современным высокотехнологичным оборудованием",
          "Глобал Медикал Трейд является надежным поставщиком медицинского оборудовани, предлагая своим клиентам качественную продукцию по лучшей цене. Наша компания гарантирует всем клиентам возможность воспользоваться услугами квалифицированных мастеров в установке, пуско-наладке, сервисном и техническом обслуживании приобретенного оборудования":
            "Глобал Медикал Трейд является надежным поставщиком медицинского оборудовани, предлагая своим клиентам качественную продукцию по лучшей цене. Наша компания гарантирует всем клиентам возможность воспользоваться услугами квалифицированных мастеров в установке, пуско-наладке, сервисном и техническом обслуживании приобретенного оборудования",
          ПереченьГарантийныхУслуг: "Перечень гарантийных услуг",
          "Установка, настройка и пуско-наладка медтехники":
            "Установка, настройка и пуско-наладка медтехники",
          "Сервисное обслуживание медицинской техники любой комплектации":
            "Сервисное обслуживание медицинской техники любой комплектации",
          "Гарантийное и постгарантийное обслуживание":
            "Гарантийное и постгарантийное обслуживание",
          "Диагностика и проведение профилактических работ":
            "Диагностика и проведение профилактических работ",
          ГарантийныйСлучай: "Гарантийный случай",
          ЗаменаТовара: "Замена товара",
          Внимание: "Внимание",
          "Рассмотрение заявки на замену товара осуществляется в срок до 30 дней со дня её регистрации согласно п. 1 ст. 12 Закона № 59-ФЗ, при условии предоставления документов, перечисленных в договоре":
            "Рассмотрение заявки на замену товара осуществляется в срок до 30 дней со дня её регистрации согласно п. 1 ст. 12 Закона № 59-ФЗ, при условии предоставления документов, перечисленных в договоре",
          "Оформление гарантийного случая осуществляется согласно Гражданскому кодексу РФ, при условии предоставления документов, перечисленных в договоре и при наличии заявления с указанием причины возврата, оформленного надлежащим образом":
            "Оформление гарантийного случая осуществляется согласно Гражданскому кодексу РФ, при условии предоставления документов, перечисленных в договоре и при наличии заявления с указанием причины возврата, оформленного надлежащим образом",
          Апробация: "Апробация",
          "Помощь в подборе оборудования": "Помощь в подборе оборудования",
          "Помощь инженеров в настройке": "Помощь инженеров в настройке",
          "Пуско-наладочные работы": "Пуско-наладочные работы",
          "Обучение работе с оборудованием": "Обучение работе с оборудованием",
          "Подменный аппарат": "Подменный аппарат",
          "Работа с учебными центрами повышения квалификации медицинского персонала":
            "Работа с учебными центрами повышения квалификации медицинского персонала",
          "Организация обучения врачей на собственной территории":
            "Организация обучения врачей на собственной территории",
          ОписаниеУслуги: "Описание услуги",
          "Также как постоянное информационно-пропагандистское обеспечение нашей деятельности требует определения и уточнения распределения внутренних резервов и ресурсов.":
            "Также как постоянное информационно-пропагандистское обеспечение нашей деятельности требует определения и уточнения распределения внутренних резервов и ресурсов.",
          "Также как постоянное информационно-пропагандистское обеспечение нашей деятельности требует определения.":
            "Также как постоянное информационно-пропагандистское обеспечение нашей деятельности требует определения.",
          Заказать: "Заказать",
          ВыСможете: "Вы С можете ",
          оставитьЗаявку: "оставить заявку",
          "на услуги и скачать бланк для заполнения":
            "на услуги и скачать бланк для заполнения",
          БланкДляЗаполнения: "Бланк для заполнения",
          ЗаполненнаяФорма: "Заполненная форма",
          ОставитьЗаявку: "Оставить заявку",
        },
      },
    },
    lng: localStorage.getItem("selectedLanguage") || "Ru",
    fallbackLng: "Ru",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
