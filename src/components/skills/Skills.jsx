import React, { useEffect } from 'react';
import { Knob } from 'primereact/knob';
import '../skills/Skills.css';
import { blue, blueGrey } from '@mui/material/colors';
import { useTranslation } from 'react-i18next';
const Skills = () => {
  const { t } = useTranslation();
  const skills = [
    { name: 'JavaScript', value: 80 },
    { name: 'HTML/CSS', value: 90 },
    { name: 'React', value: 90 },
    { name: 'Angular', value: 60 },
    { name: 'Dart', value: 60 },
    { name: 'Flutter', value: 80 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible'); // اضافه کردن کلاس "visible" به آیتم‌های دیده‌شده
        }
      });
    }, { threshold: 0.5 }); // 50% از آیتم باید دیده بشه تا انیمیشن فعال بشه

    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach((item) => observer.observe(item)); // آغاز مشاهده هر آیتم

    return () => {
      skillItems.forEach((item) => observer.unobserve(item)); // پاک کردن مشاهده وقتی که کامپوننت حذف می‌شه
    };
  }, []);

  return (
    <div className="skills-container">
      <h2>{t('skill')}</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <Knob value={skill.value} showValue={true} valueTemplate="{value}%" size={100} valueColor="#d3b0f5" />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
