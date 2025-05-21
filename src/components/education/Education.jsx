import React from 'react';
import { Timeline } from 'primereact/timeline';
import { Card } from 'primereact/card';
import { Tag } from 'primereact/tag';
import { Avatar } from 'primereact/avatar';
import { useTranslation } from "react-i18next";
import "../education/Education.css";

const Education = () => {
  const { t, i18n } = useTranslation();

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

  const customizedContent = (item, index) => (
    <Card
      title={item.status}
      subTitle={item.date}
      className="w-full md:max-w-lg shadow-md"
    >
      <p className="font-semibold">{item.university}</p>
      <p className="text-gray-600">{item.description}</p>
      <Tag value={item.status} severity="success" className="mt-2" />
    </Card>
  );

  const isRtlMobile = i18n.language === 'fa';

  return (
    <div id="education" className="flex justify-center items-center py-16">
      <div className="w-full max-w-[70%]">
        <h2 className="text-2xl font-bold text-center mb-6">{t('ED6')}</h2>
        <Timeline
          value={events}
          align="alternate"
          marker={customizedMarker}
          content={customizedContent}
          className={`gap-4 customized-timeline ${isRtlMobile ? 'rtl' : ''}`}
        />
      </div>
    </div>
  );
};

export default Education;
