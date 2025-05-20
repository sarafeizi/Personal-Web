import React, { useRef } from 'react';
import { SpeedDial } from 'primereact/speeddial';
import { Toast } from 'primereact/toast';
import '../header/Header.css';
import { useTranslation } from 'react-i18next';
import { Button } from 'primereact/button';

export default function QuarterCircleDemo() {
  const toast = useRef(null);
  const { t, i18n } = useTranslation();
  const items = [
    { tooltip: t('aboutme'), icon: 'pi pi-user', command: () => document.getElementById('about-me')?.scrollIntoView({ behavior: 'smooth' }) },
    { tooltip: t('projects'), icon: 'pi pi-briefcase', command: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) },
    { tooltip: t('education'), icon: 'pi pi-book', command: () => document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' }) },
    { tooltip: t('workexperience'), icon: 'pi pi-briefcase', command: () => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' }) },
    { tooltip: t('contact'), icon: 'pi pi-envelope', command: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }
  ];

  return (
    <div className="card">
      <main className="main-content">
        {/* <h1>{t('welcome')}</h1>
        <p>{t('name')}</p> */}
        <div className='buttonlan'>
        <Button label="فارسی"  raised onClick={() => i18n.changeLanguage('fa')}/>
        <Button label="English"  raised onClick={() => i18n.changeLanguage('en')}/>
        </div>
      </main>
      <div style={{ position: 'relative', height: '500px' }}>
        <Toast ref={toast} />
        <SpeedDial model={items} radius={150} type="quarter-circle" direction="down-right" style={{ left: '1%', top: '2%' }} className="custom-speed-dial" showTooltip
          pt={{ action: { tooltip: '' } }} />
      </div>
    </div>
  );
}
