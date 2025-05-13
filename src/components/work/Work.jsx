import React from "react";
import "./Work.css";
import { useTranslation } from "react-i18next";
import i18n from "../../i18next"; // مسیر را بررسی کن که درست باشد

const WorkExperience = () => {
  const { t } = useTranslation();
  const currentLang = i18n.language || "fa"; // مقدار پیش‌فرض
  const isRTL = currentLang.startsWith("fa"); // بررسی فارسی بودن زبان

  return (
    <div className={`work-experience-container ${isRTL ? "rtl" : "ltr"}`} dir={isRTL ? "rtl" : "ltr"} id="work">
      <h2 className="section-title">{t("work")}</h2>
      <div className="experience-item">
        <div className="experience-title">{t("faragamara")}</div>
        <div className="vertical-line"></div>
        <div className="experience-details">
          <p>{t("descwork")}</p>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
