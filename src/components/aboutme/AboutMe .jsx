import React, { useState } from "react";
import { Message } from "primereact/message";
import { useTranslation } from "react-i18next";
import i18n from "../../i18next"; // اطمینان از مسیر صحیح ایمپورت

import "../aboutme/AboutMe.css";

const AboutMe = () => {
  const [expanded, setExpanded] = useState(false);
  const { t } = useTranslation();
  const currentLang = i18n.language || "fa"; // مقدار پیش‌فرض فارسی
  const isRTL = currentLang.startsWith("fa"); // بررسی فارسی بودن زبان

  return (
    <div id="about-me" className={`about-me-container ${isRTL ? "rtl" : "ltr"}`} dir={isRTL ? "rtl" : "ltr"}>
      <Message
        severity="info"
        text={t("welcome2")}
        style={{ textAlign: isRTL ? "right" : "left", direction: isRTL ? "rtl" : "ltr" }}/>
      <h2>{t("aboutme")}</h2>
      <p>{t("description")}</p>
    </div>
  );
};

export default AboutMe;