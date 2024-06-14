import * as Enums from "./enums";
import * as Types from "./interfaces";

export const navLinks = [
  { name: "Bosh sahifa", route: "/" },
  { name: "Kurslar", route: "/courses/reactjs_id" },
];

export const levelMenu: Types.Menu.Level[] = [
  { route: "courses", name: "Kurslar", iconName: "Courses", id: Enums.Categories.Courses },
  { route: "books", name: "Kitoblar", iconName: "Books", id: Enums.Categories.Books },
];

export const company: Types.ICompany[] = [
  {
    name: "Amazon",
    width: 84,
    height: 26,
  },
  {
    name: "Amd",
    width: 83,
    height: 20,
  },
  {
    name: "Cisco",
    width: 74,
    height: 42,
  },
  {
    name: "Dropcam",
    width: 122,
    height: 24,
  },
  {
    name: "Logitech",
    width: 82,
    height: 25,
  },
  {
    name: "Spotify",
    width: 99,
    height: 30,
  },
];

export const timeLineList: Types.ITimeLine[] = [
  {
    iconName: "Typescript",
    title: "TypeScript",
    text: "TypeScript - bu JavaScript-ning yuqori to'plami bo'lgan dasturlash tili bo'lib, unga kompilyatsiya qilinadi. Turi tizimi va qo'shimcha funktsiyalar tufayli u sizga xizmat ko'rsatish va ishlab chiqish oson bo'lgan kattahajmli ilovalarni yozish imkonini beradi. Ishlash vaqtida xatolarni aniqlash o'rniga, siz kodingizning kompilyatsiya vaqtini tez tekshirasiz va tezkor kodlash uchun IDE bilan qattiq integratsiyaga ega bo'lasiz. Bunda siz ilovalaringizni bosqichma-bosqich TypeScript ga koʻchirishingiz mumkin, bu esa kod yozish va sifatini yaxshilaydi. Bugungi kunda TypeScript-dan foydalanmasdan ajoyib frontend yoki backend ilovasini topish qiyin. Til allaqachon rivojlanish standarti bo'lib, uni har qanday ramka bilan ishlatish mumkin.",
  },
  {
    iconName: "NextJs",
    title: "NextJS",
    text: "Next.js bugungi kunda eng mashhur JavaScript kutubxonasi boʻlgan React uchun ishlab chiqarishga tayyor framework hisoblanadi. Bu Server Side Rendering (SSR) va statik sahifa yaratishdan foydalangan holda yuqori samarali, SEOga mos veb-saytlarni ishlab chiqish imkonini beradi.",
  },
  {
    iconName: "Api",
    title: "Backend API",
    text: "NodeJS va ExpressJS framework yordamida loyihamizdagi backend qismini ko'taramiz. StartUp loyihani to'liq Backend qismini 0 dan ko'taramiz. Token, Foydalanuvchi Cookielar bilan ishlash, Google va Github yordamida avtorizatsiya qilish va API xafsiz tarifi.",
  },
  {
    iconName: "Stripe",
    title: "To'lov tizimlar. Visa, Mastercard & Subscription planlar",
    text: "StartUp loyihalarda bank kartalar yordamida to'lov tizimlar bilan ishlash hamda Subscription planlar, ya'ni foydalanuvchi bizdan oyiga 20$ qiymatga ega platformamizda VIP foydalunvchi sifatida kirish mumkin bo'ladi va xar oy biz uning kartasidan 20$ pul yechib olamiz. Va customerlar bilan ishlashni to'liq ko'rib chiqamiz ularning karta xizmatlari va hokazo..",
  },
  {
    iconName: "Dev",
    title: "UI",
    text: "Komponentlar kutubxonasi. 20 dan ortiq UI komponentlari, jumladan, portal modallari, ochiladigan menyular, sidebar, tematik tugmalar, skeleton loaderlar, popup oynalar, lazy images, drawer, avatarlar, vertikal va gorizontal steklar va boshqalar. Biz o'z echimlarimizni yozamiz va boshsiz kutubxonalarni sinab ko'ramiz. Biz barcha komponentlarni ochiq va semantik qilamiz.",
  },
  {
    iconName: "Architecture",
    title: "Arxitektura",
    text: "Loyiha Arxitekturasi. Modullar. Decomposition (Modullarni parchalash, bo'limlarga bo'lib chiqish). Komponentlarning Zaif aloqa va kuchli birlashish. Modullarni Qayta ishlatmoq. Real loyihalar.",
  },
  {
    iconName: "Error",
    title: "Xatolar",
    text: "Xatolarni qanday qilib to'g'ri hal qilishni va ErrorBoundary ni amalga oshirishni o'rganamiz. Amalda qanday ishlashini ko'rib chiqamiz.",
  },
  {
    iconName: "PullRequest",
    title: "So'rovlar va ma'lumotlar bilan ishlash",
    text: "Loyihalarimiz davomida biz Front-End va Back-End bilan bog'lash uchun so'rovlardan Axios dan foydalanib serverga so'rovlar yuboramiz, va Axios texnologiyasini o'zimizga configuratsiya qilib olamiz. Va albatta ma'lumotlarni saqlash uchun biz MongoDB ma'lumorlar bazasi bilan to'liq ishlashni o'rganamiz.",
  },
  {
    iconName: "Grid",
    title: "Grid system",
    text: "Xozirgi kunda murakkab web-dasturlardagi verstka qisimlari aynan grid system yordamida qilinadi, biz siz bilan loyihalarimiz davomida ajoyib interfacega ega web-dasturlar va murakkab css stillar bilan ishlaymiz. Mobil va Planshetlar uchun mos keladigon ya'ni bizning barcha loyihalarimiz responsive xolatda bo'ladi.",
  },
  {
    iconName: "Refactoring",
    title: "Refaktoring",
    text: "Rivojlanish oxirida biz olingan kodni tahlil qilamiz va uni qayta tiklashga harakat qilamiz, zaif tomonlarini tahlil qilamiz, ularni tuzatamiz va dasturda modullarni qanday ajratish va izolyatsiya qilishni aniq misollar bilan tushunamiz.",
  },
  {
    iconName: "Jest",
    title: "Jest Test",
    text: "Noldan boshlab biz React Testing Library yordamida birlik jest testlari va komponent testlari uchun sinov muhitini o'rnatamiz.",
  },
];
