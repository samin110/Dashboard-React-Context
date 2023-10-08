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
  { url: "/", name: "dashboards", icon: <MdSpaceDashboard /> },
  { name: "#", icon: <AiOutlineAppstore /> },
  { name: "#", icon: <HiOutlineCube /> },
  { name: "#", icon: <BsCpu /> },
  { name: "#", icon: <TbMessageCircle2 /> },
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
        url: "/analytics",
      },
      {
        icon: <MdOutlineWorkOutline />,
        name: "استخدام",
        url: "/hiring",
      },
      {
        icon: <MdPersonSearch />,
        name: " منابع انسانی",
        url: "/human-resource",
      },
    ],
  },
  // {
  //   faName: "سرگرمی",
  //   enName: "hobby",
  //   icon: <BiChevronLeft />,
  //   subTitle: [
  //     {
  //       icon: <BiVideo />,
  //       name: "ویدیو",
  //       url: "video",
  //     },
  //     {
  //       icon: <IoFootball />,
  //       name: "فوتبال",
  //       url: "football",
  //     },
  //   ],
  // },
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

export const jobFeatureData = [
  {
    title: "نوع استخدامی",
    features: [
      { subject: "شغل های تمام وقت ", quantity: 56 },
      { subject: "شغل های پاره وقت", quantity: 43 },
      { subject: "موقعیت های دورکاری", quantity: 24 },
      { subject: "موقعیت های کارورزی", quantity: 27 },
      { subject: "پیمانکاری", quantity: 76 },
      { subject: "مهارت آموزی", quantity: 28 },
    ],
  },
  {
    title: "سطح شغلی",
    features: [
      { subject: "سطح دانشجویی", quantity: 98 },
      { subject: "سطح تازه وارد", quantity: 44 },
      { subject: "سطح متوسط", quantity: 35 },
      { subject: "سطح ارشد", quantity: 29 },
      { subject: "مدیران", quantity: 26 },
      { subject: "سطح دانشجویی", quantity: 56 },
    ],
  },
  {
    title: "بازه حقوق",
    features: [
      { subject: "3 میلیون - 5 میلیون", quantity: 56 },
      { subject: "5 میلیون - 7 میلیون", quantity: 43 },
      { subject: "7 میلیون - 10 میلیون", quantity: 24 },
      { subject: "10 میلیون - 15 میلیون", quantity: 27 },
      { subject: "15 میلیون - 20 میلیون", quantity: 76 },
      { subject: "20 میلیون - 25 میلیون", quantity: 28 },
      { subject: "25 میلیون - 30 میلیون", quantity: 28 },
    ],
  },
];

export const jobPositionsCardsData = [
  { img_url: "./assets/Images/airbnb.svg", title: "طراح رابط کاربری و تجربه کاربری" },
  { img_url: "./assets/Images/atlassian.svg", title: "طراح محصول ارشد" },
  { img_url: "./assets/Images/dribbble.svg", title: "طراح رابط کاربری و تجربه کاربری" },
  { img_url: "./assets/Images/facebook.svg", title: "طراح محصول" },
  { img_url: "./assets/Images/github.svg", title: "طراح رابط کاربری و تجربه کاربری" },
  { img_url: "./assets/Images/gitlab.svg", title: "توسعه دهنده وب" },
  { img_url: "./assets/Images/google.svg", title: "طراح رابط کاربری" },
  { img_url: "./assets/Images/slack.svg", title: "طراح رابط کاربری و تجربه کاربری" },
  { img_url: "./assets/Images/tnw.svg", title: "طراح رابط کاربری و تجربه کاربری" },
];

export const recentRookiesUsersData = [
  {
    big_image: "./assets/Images/13.jpg",
    small_image: "./assets/Images/illustrator.svg",
    name: "تارا خاشقچی",
    job_field: "طراح رابط کاربری و تجربه کاربری",
    status_btn: "استخدام",
  },
  {
    big_image: "./assets/Images/37.jpg",
    small_image: "./assets/Images/france.svg",
    name: "اریک",
    job_field: "مدیر محصول",
    status_btn: "بررسی",
  },
  {
    big_image: "./assets/Images/25.jpg",
    small_image: "./assets/Images/js.svg",
    name: "ملانی",
    job_field: "توسعه دهنده‌ی وب",
    status_btn: "بررسی",
  },
];

export const hrTaskData = [
  { subject: "تماس با مایک", time: "در 8:30 صبح" },
  { subject: "تمام کردن بررسی مستندات", time: "در 11:30 صبح" },
  { subject: "ملاقات در خصوص پروژه", time: "در 12:00 ب.ظ" },
  { subject: "ملاقات با رضوان", time: "در 3:00 ب.ظ" },
  { subject: "بازبینی پیش‌نویس پایانی", time: "در 6:00 ب.ظ" },
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

export const lineChartDataAnalyticts = {
  series: [
    {
      name: "عایدی",
      data: [10835, 40214, 36257, 51411, 45697, 61221, 65295, 91512, 75648],
    },
  ],
  options: {
    chart: {
      fontFamily: "vazir-fd",
      toolbar: {
        show: false,
      },

      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    theme: {
      mode: "light",
      palette: "palette5",
      monochrome: {
        enabled: true,
        color: "#90EE7E",
        shadeTo: "light",
        shadeIntensity: 0.65,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    grid: {
      show: true,
    },
    yaxis: {
      opposite: true,
    },
    xaxis: {
      categories: ["اسفند", "بهمن", "دی", "آذر", "آبان", "مهر", "شهریور", "مرداد", "تیر"],
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + " " + "$";
        },
      },
    },
  },
};

export const circleChartData = {
  series: [86, 57],
  options: {
    stroke: {
      show: true,
      width: 0.5,
    },

    colors: ["#a2e499", "#9c9ef3"],
    chart: {
      height: 350,
      type: "radialBar",
      fontFamily: "vazir-fd",
    },
    plotOptions: {
      radialBar: {
        startAngle: -140,
        endAngle: 140,
        track: {
          strokeWidth: "100%",
        },
        hollow: {
          margin: 5,
          size: "70%",
        },
        dataLabels: {
          name: {
            fontSize: "10px",
          },
          value: {
            fontSize: "13px",
            fontFamily: "vazir-fd",
          },
          total: {
            show: true,
            label: "مجموع",
            formatter: function (w) {
              // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
              return "71.5%";
            },
          },
        },
      },
    },
    labels: ["کارایی", "سودمندی"],
  },
};

export const offSectioncircleChartData = {
  series: [65],
  options: {
    stroke: {
      show: true,
      width: 0.5,
    },

    colors: ["#989af3"],
    chart: {
      height: 350,
      type: "radialBar",
      fontFamily: "vazir-fd",
    },
    plotOptions: {
      radialBar: {
        startAngle: 0,
        endAngle: 360,
        track: {
          strokeWidth: "100%",
        },
        hollow: {
          margin: 5,
          size: "75%",
        },
        dataLabels: {
          name: {
            fontSize: "10px",
          },
          value: {
            fontSize: "13px",
            fontFamily: "vazir-fd",
          },
          total: {
            show: true,
            label: "رشد",
            formatter: function (w) {
              // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
              return "65%";
            },
          },
        },
      },
    },
  },
};

export const columnChartAnalytics = {
  series: [
    {
      name: "سوددهی اخیر",
      data: [-4, -10, -7, -12, -9, -14, -31, -15, -26].reverse(),
    },
    {
      name: "عایدی",
      data: [24, 44, 21, 35, 17, 28, 31, 15, 6].reverse(),
    },
    {
      name: "نقدینگی",
      data: [-35, -41, -36, -26, -45, -48, -52, -53, -41],
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
          return val;
        },
      },
    },
  },
};
