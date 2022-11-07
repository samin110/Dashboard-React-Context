import { MdSpaceDashboard, MdOutlineWorkOutline, MdPersonSearch } from "react-icons/md";
import { AiOutlineAppstore, AiOutlineBarChart } from "react-icons/ai";
import { HiOutlineCube, HiOutlineDatabase } from "react-icons/hi";
import { BsCpu, BsLayoutSidebar, BsSearch, BsCardList, BsPieChart } from "react-icons/bs";
import { TbMessageCircle2 } from "react-icons/tb";
import { FiSettings } from "react-icons/fi";
import { BiChevronLeft, BiVideo } from "react-icons/bi";
import { IoAnalyticsOutline, IoFootball } from "react-icons/io5";
import { HiOutlineMapPin, HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";
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
