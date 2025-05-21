import React, { useEffect, useRef, useState } from 'react';
import { Timeline } from 'primereact/timeline';
import { Card } from 'primereact/card';
import { Tag } from 'primereact/tag';
import { Avatar } from 'primereact/avatar';
import { useTranslation } from "react-i18next";
import "../education/Education.css";

const Education = () => {
  const { t, i18n } = useTranslation();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 991);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const events = [
    {
      status: t('ED1'),
      date: t('ED7'),
      icon: 'pi pi-graduation-cap',
      university: t('ED2'),
      description: t('ED3'),
    },
    {
      status: t('ED4'),
      date: t('ED8'),
      icon: 'pi pi-book',
      university: t('ED9'),
      description: t('ED5'),
    }
  ];

  const customizedMarker = (item) => (
    <Avatar
      icon={item.icon}
      shape="circle"
      className="p-mr-2 bg-green-500 text-white shadow-md"
    />
  );

  const useVisibility = () => {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.1 }
      );
      if (ref.current) observer.observe(ref.current);
      return () => {
        if (ref.current) observer.unobserve(ref.current);
      };
    }, []);

    return [ref, visible];
  };

  const customizedContent = (item, index) => {
    const [ref, visible] = useVisibility();

    let animationClass = '';
    if (isMobile) {
      animationClass = 'fade-in-bottom';
    } else {
      animationClass = index % 2 === 0 ? 'fade-in-right' : 'fade-in-left';
    }

    return (
      <Card
        ref={ref}
        title={item.status}
        subTitle={item.date}
        className={`w-full md:max-w-lg shadow-md ${animationClass} ${visible ? 'visible' : ''}`}
      >
        <p className="font-semibold">{item.university}</p>
        <p className="text-gray-600">{item.description}</p>
        <Tag value={item.status} severity="success" className="mt-2" />
      </Card>
    );
  };

  const isRtlMobile = i18n.language === 'fa' && isMobile;

  return (
    <div id="education" className="flex justify-center items-center py-16">
      <div className={`w-full max-w-[70%] customized-timeline ${isRtlMobile ? 'rtl' : ''}`}>
        <h2 className="text-2xl font-bold text-center mb-6">{t('ED6')}</h2>
        <Timeline
          value={events}
          align="alternate"
          marker={customizedMarker}
          content={customizedContent}
          className="gap-4"
        />
      </div>
    </div>
  );
};

export default Education;
