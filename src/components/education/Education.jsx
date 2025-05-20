import React, { useEffect, useRef, useState } from 'react';
import { Timeline } from 'primereact/timeline';
import { Card } from 'primereact/card';
import { Tag } from 'primereact/tag';
import { Avatar } from 'primereact/avatar';
import { useTranslation } from "react-i18next";
import "../education/Education.css";

const Education = () => {
  const { t } = useTranslation();
  const [visibleItems, setVisibleItems] = useState([]);
  const itemRefs = useRef([]);

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

  useEffect(() => {
    itemRefs.current = itemRefs.current.slice(0, events.length);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => {
              const newVisible = [...prev];
              newVisible[index] = true;
              return newVisible;
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [events.length]);

  const customizedMarker = (item) => {
    return (
      <Avatar
        icon={item.icon}
        shape="circle"
        className="p-mr-2 bg-green-500 text-white shadow-md"
      />
    );
  };

  const customizedContent = (item, index) => {
    const position = index % 2 === 0 ? "left" : "right";
    const visible = visibleItems[index] ? "fade-in" : "hidden";
    return (
      <div
        ref={(el) => (itemRefs.current[index] = el)}
        className={`animated-card ${position} ${visible}`}
      >
        <Card title={item.status} subTitle={item.date} className="w-full md:max-w-lg shadow-md">
          <p className="font-semibold">{item.university}</p>
          <p className="text-gray-600">{item.description}</p>
          <Tag value={item.status} severity="success" className="mt-2" />
        </Card>
      </div>
    );
  };
  

  return (
    <div id="education" className="container mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold text-center mb-6">{t('ED6')}</h2>
      <Timeline
        value={events}
        align="alternate md:left"
        marker={customizedMarker}
        content={(item, index) => customizedContent(item, index)}
        className="gap-4"
      />
    </div>
  );
};

export default Education;
