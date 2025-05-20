import React, { useEffect, useRef, useState } from "react";
import "./Work.css";
import { useTranslation } from "react-i18next";
import i18n from "../../i18next";

const WorkExperience = () => {
  const { t } = useTranslation();
  const currentLang = i18n.language || "fa"; 
  const isRTL = currentLang.startsWith("fa");

  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); 
        }
      },
      { threshold: 0.1 } 
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="background" id="work">
      <div
        ref={containerRef}
        className={`work-experience-container ${isRTL ? "rtl" : "ltr"} ${
          visible ? "fade-in" : "hidden"
        }`}
        dir={isRTL ? "rtl" : "ltr"}
      >
        <h2 className="section-title">{t("work")}</h2>
        <div className="experience-item">
          <div className="experience-title">{t("faragamara")}</div>
          <div className="vertical-line"></div>
          <div className="experience-details">
            <p>{t("descwork")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
