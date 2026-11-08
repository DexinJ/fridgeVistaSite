export type Locale = "en" | "zh";

const englishForm = "https://forms.gle/bLcumMVMQak9A3H99";
const chineseForm = "https://forms.gle/8kr1TrdPfExXGjr78";

export const site = {
  email: "support.pantrio@gmail.com",
  appStoreUrl: "",
  iconUrl: "/fridgevista-icon.png?v=e83b2142",
  forms: {
    en: englishForm,
    zh: chineseForm,
  },
} as const;

export const labels = {
  en: {
    home: "Home",
    features: "Features",
    howItWorks: "How it works",
    pricing: "Pricing",
    support: "Help center",
    privacy: "Privacy Policy",
    terms: "Terms of Use",
    deletion: "Account deletion",
    subprocessors: "Sub-processors",
    licenses: "Licences",
    getApp: "Get the app",
    language: "中文",
  },
  zh: {
    home: "首页",
    features: "功能",
    howItWorks: "怎么用",
    pricing: "价格",
    support: "帮助中心",
    privacy: "隐私政策",
    terms: "使用条款",
    deletion: "删除账号",
    subprocessors: "数据处理服务商",
    licenses: "开源许可",
    getApp: "获取 App",
    language: "English",
  },
} as const;

export function routes(locale: Locale) {
  const prefix = locale === "zh" ? "/zh" : "";

  return {
    home: prefix || "/",
    features: `${prefix}/features/`,
    pricing: `${prefix}/pricing/`,
    support: `${prefix}/support/`,
    privacy: `${prefix}/privacy/`,
    terms: `${prefix}/terms/`,
    deletion: `${prefix}/support/delete-account/`,
    subprocessors: `${prefix}/subprocessors/`,
    licenses: `${prefix}/licenses/`,
  };
}

export function alternatePath(pathname: string) {
  if (pathname === "/zh/" || pathname === "/zh") {
    return "/";
  }

  if (pathname.startsWith("/zh/")) {
    return pathname.slice(3);
  }

  return pathname === "/" ? "/zh/" : `/zh${pathname}`;
}
