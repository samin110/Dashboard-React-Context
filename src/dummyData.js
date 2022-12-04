import { MdSpaceDashboard, MdOutlineWorkOutline, MdPersonSearch } from "react-icons/md";
import { AiOutlineAppstore, AiOutlineBarChart } from "react-icons/ai";
import { HiOutlineCube, HiOutlineDatabase } from "react-icons/hi";
import { BsCpu, BsLayoutSidebar, BsSearch, BsCardList, BsPieChart } from "react-icons/bs";
import { TbMessageCircle2 } from "react-icons/tb";
import { FiSettings } from "react-icons/fi";
import { BiChevronLeft, BiVideo } from "react-icons/bi";
import { IoAnalyticsOutline, IoFootball } from "react-icons/io5";
import { HiOutlineMapPin, HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";
import { HiDotsVertical } from "react-icons/hi";
import { TbFileInvoice } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { GiChart } from "react-icons/gi";

export const sidebarTopIcons = [
  { name: "dashboards", icon: <MdSpaceDashboard /> },
  { name: "apps", icon: <AiOutlineAppstore /> },
  { name: "list", icon: <HiOutlineCube /> },
  { name: "charts", icon: <BsCpu /> },
  { name: "chat", icon: <TbMessageCircle2 /> },
];

export const sidebarBottomIcons = [{ name: <BsLayoutSidebar /> }, { name: <BsSearch /> }, { name: <FiSettings /> }];

export const drawerMenuDashboardsLinks = [
  {
    faName: "تجاری",
    enName: "official",
    icon: <BiChevronLeft />,
    subTitle: [
      {
        icon: <IoAnalyticsOutline />,
        name: "تجزیه و تحلیل",
        url: "analytics",
      },
      {
        icon: <MdOutlineWorkOutline />,
        name: "استخدام",
        url: "hiring",
      },
      {
        icon: <MdPersonSearch />,
        name: " منابع انسانی",
        url: "human-resource",
      },
    ],
  },
  {
    faName: "سرگرمی",
    enName: "hobby",
    icon: <BiChevronLeft />,
    subTitle: [
      {
        icon: <BiVideo />,
        name: "ویدیو",
        url: "video",
      },
      {
        icon: <IoFootball />,
        name: "فوتبال",
        url: "football",
      },
    ],
  },
];

export const drawerMenuApp_Data_ChartLinks = [
  {
    title: "اپلیکیشن ها",
    enName: "apps",
    links: [
      { name: "حسابداری", icon: <TbFileInvoice />, url: "accounting" },
      { name: "نقشه", icon: <HiOutlineMapPin />, url: "map" },
      { name: "پیامرسان", icon: <HiOutlineChatBubbleBottomCenterText />, url: "chat" },
    ],
  },
  {
    title: "لیست ها",
    enName: "list",
    links: [
      { name: "اطلاعات", icon: <HiOutlineDatabase />, url: "list-of-data" },
      { name: "جدول داده", icon: <BsCardList />, url: "data-table" },
      { name: "پروفایل کاربر", icon: <CgProfile />, url: "user-profile" },
    ],
  },
  {
    title: `چارت ها`,
    enName: "charts",
    links: [
      { name: "مستطیلی", icon: <AiOutlineBarChart />, url: "" },
      { name: "دایره ای", icon: <BsPieChart />, url: "" },
      { name: "لاین چارت", icon: <GiChart />, url: "" },
    ],
  },
];

export const personalProjects = [
  {
    topic: "illustratorproject",
    background_Image: "./assets/Images/1.jpg",
    frameworkImage: "./assets/Images/illustrator.svg",
    title: "پروژه‌ی اپلیکیشن ارسال مرسوله",
    updateTime: "بروزرسانی ۳۰ دقیقه‌ی پیش",
    personsImages: [
      { url: "./assets/Images/18.jpg" },
      { url: "./assets/Images/16.jpg" },
      { url: "./assets/Images/23.jpg" },
    ],
    icon: <HiDotsVertical />,
  },
  {
    topic: "reactproject",
    background_Image: "./assets/Images/2.png",
    frameworkImage: "./assets/Images/reactjs.svg",
    title: "داشبرد سلامت و فیتنس",
    updateTime: "بروزرسانی 5 ساعت پیش",
    personsImages: [
      { url: "./assets/Images/18.jpg" },
      { url: "./assets/Images/16.jpg" },
      { url: "./assets/Images/23.jpg" },
    ],
    icon: <HiDotsVertical />,
  },
  {
    topic: "angularproject",
    background_Image: "./assets/Images/3.png",
    frameworkImage: "./assets/Images/angular.svg",
    title: "داشبرد آموزشی و یادگیری",
    updateTime: "بروزرسانی 7 ساعت پیش",
    personsImages: [
      { url: "./assets/Images/18.jpg" },
      { url: "./assets/Images/16.jpg" },
      { url: "./assets/Images/23.jpg" },
    ],
    icon: <HiDotsVertical />,
  },
  {
    topic: "javascriptproject",
    background_Image: "./assets/Images/4.png",
    frameworkImage: "./assets/Images/js.svg",
    title: "داشبرد برای اپلیکیشن حسابداری",
    updateTime: "بروزرسانی 10 ساعت پیش",
    personsImages: [
      { url: "./assets/Images/18.jpg" },
      { url: "./assets/Images/16.jpg" },
      { url: "./assets/Images/23.jpg" },
    ],
    icon: <HiDotsVertical />,
  },
];

export const myTeamData = [
  {
    image: "./assets/Images/18.jpg",
    name: "بیل گیتس",
    jobTitle: "طراح رابط کاربری و تجربه کاربری",
  },
  {
    shortName: "SC",
    style: { backgroundColor: "#ffe7db", color: "#ffa880" },
    name: "ملیسا مایر",
    jobTitle: "طراح رابط کاربری و تجربه کاربری",
  },
  {
    image: "./assets/Images/13.jpg",
    name: "الیزابت چرچیل",
    jobTitle: "طراح رابط کاربری و تجربه کاربری",
  },
  {
    shortName: "NL",
    style: { backgroundColor: "#c3fdee", color: "#05d69e" },
    name: "جووانی شاتول",
    jobTitle: "توسعه دهنده‌ی رابط کاربری",
  },
];

export const myTaskList = [
  { taskTitle: "تماس با آقای تیم کوک", taskSubject: "مرور طراحی‌های اولیه برای پروژه" },
  { taskTitle: "اتمام طراحی‌های اولیه", taskSubject: "تمامی تغییرات خواسته شده اعمال شود" },
  { taskTitle: "بروزرسانی زمانبندی‌ها", taskSubject: "بروزرسانی‌های همه‌ی زمانبندی‌های تیم طراحی" },
  { taskTitle: "درخواست واریز وجه", taskSubject: "ارسال فاکتور پروژه به مشتری و درخواست هزینه" },
];
export const notificationData = [
  { username: "آلیس", notification: "یک کامنت گذاشت.", time: "1 ساعت پیش", image_url: "./assets/Images/18.jpg" },
  {
    username: "آرنولد اینشتین",
    notification: " فایلی را آپلود کرد.",
    time: "2 ساعت پیش",
    image_url: "./assets/Images/16.jpg",
  },
  {
    username: "الیزابت چرچیل",
    notification: "پیغامی را برای شما ارسال کرد.",
    time: "2 ساعت پیش",
    image_url: "./assets/Images/13.jpg",
  },
  { username: "ملانی", notification: "یک کامنت گذاشت.", time: "3 ساعت پیش", image_url: "./assets/Images/23.jpg" },
];
// Data For Charts
export const AreaChartData = {
  options: {
    series: [
      {
        name: "در انتظار",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: "پایان یافته",
        data: [11, 32, 45, 32, 34, 52, 41],
      },
      {
        name: "متوقف شده",
        data: [100, 40, 28, 40, 30, 10, 0],
      },
    ],
    chart: {
      height: 350,
      fontFamily: "vazir-fd",
      type: "area",
      toolbar: {
        show: false,
      },
    },
    theme: {
      palette: "palette2",
    },
    legend: {
      position: "top",
      fontFamily: "vazir-light",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 1,
    },
    yaxis: {
      opposite: true,
    },
    xaxis: {
      type: "datetime",
      datetimeFormatter: {
        month: "MMM 'yy",
      },
      categories: ["20 sep", "21 sep", "22 sep", "23 sep", "24 sep", "25 sep"],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  },
};

export const columnChartData = {
  series: [
    {
      name: "طراحی",
      data: [-4, -10, -7, -12, -9, -14, -31, -15, -26].reverse(),
    },
    {
      name: "توسعه",
      data: [24, 44, 21, 35, 17, 28, 31, 15, 6].reverse(),
    },
    {
      name: "مدیریت",
      data: [-35, -29, -34, -44, -25, -22, -18, -17, -29],
    },
  ],
  options: {
    chart: {
      fontFamily: "vazir-fd",
      toolbar: {
        show: false,
      },
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      position: "top",
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["اسفند", "بهمن", "دی", "آذر", "آبان", "مهر", "شهریور", "مرداد", "تیر"],
    },
    colors: ["#797bf2", "#8168b1", "#94e189"],
    yaxis: {
      opposite: true,
      labels: {
        formatter: function (y) {
          return y - 10;
        },
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + "ساعت";
        },
      },
    },
  },
};
