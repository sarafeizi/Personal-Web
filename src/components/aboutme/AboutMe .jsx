import React, { useEffect, useRef, useState } from "react";
import { Message } from "primereact/message";
import { useTranslation } from "react-i18next";
import i18n from "../../i18next";
import myImage from '../../assets/5.jpg';

import "../aboutme/AboutMe.css";

const AboutMe = () => {
  const [visible, setVisible] = useState(false);
  const containerRef = useRef(null);

  const { t } = useTranslation();
  const currentLang = i18n.language || "fa";
  const isRTL = currentLang.startsWith("fa");

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
    <div
      id="about-me"
      ref={containerRef}
      className={`about-me-container ${isRTL ? "rtl" : "ltr"} ${visible ? "fade-in" : "hidden"}`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <Message
        severity="info"
        text={t("welcome2")}
        style={{ textAlign: isRTL ? "right" : "left", direction: isRTL ? "rtl" : "ltr" }}
      />
      <h2>{t("aboutme")}</h2>
      <div className={`centered-container ${isRTL ? "rtl" : "ltr"}`} dir={isRTL ? "rtl" : "ltr"}>
        <img src={myImage} alt="my image" className="responsive-image" />
        <p className="responsive-text">{t("description")}</p>
      </div>
    </div>
  );
};

export default AboutMe;
