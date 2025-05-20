import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Editor } from 'primereact/editor';
import { Button } from 'primereact/button';
import { Message } from 'primereact/message';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import QRCode from "react-qr-code";
import 'leaflet/dist/leaflet.css';
import { FaLinkedin, FaGithub, FaInstagram, FaMicrosoft } from 'react-icons/fa';
import { Steps } from "primereact/steps";
import '../contact/Contact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { useTranslation } from 'react-i18next';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'fa';

  const steps = [
    { label: t("namee") },
    { label: t("email") },
    { label: t("message") },
  ];

  const handleNext = () => {
    if (activeIndex < steps.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (!isNextDisabled && activeIndex < steps.length - 1) {
        handleNext();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && email.trim() && message.trim()) {
      setSubmitted(true);
      const templateParams = {
        from_name: name,
        from_email: email,
        message: message,
      };

      emailjs
        .send('service_e8i43fe', 'template_ybpxix6', templateParams, 'LG3YyICqYO0suRUf1')
        .then((response) => {
          console.log('Success:', response);

          const thankYouParams = {
            to_name: name,
            to_email: email,
          };

          emailjs
            .send('service_e8i43fe', 'thank_you_template_id', thankYouParams, 'LG3YyICqYO0suRUf1')
            .then(
              (response) => {
                console.log('Auto-reply sent:', response);
              },
              (error) => {
                console.log('Error sending auto-reply:', error);
              }
            );
        }, (error) => {
          console.log('Error:', error);
        });

      setName("");
      setEmail("");
      setMessage("");
      setActiveIndex(0);
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isNextDisabled =
    (activeIndex === 0 && !name.trim()) ||
    (activeIndex === 1 && (!email.trim() || !isValidEmail(email))) ||
    (activeIndex === 2 && !message.trim());

  const isSendDisabled = !name.trim() || !isValidEmail(email) || !message.trim();

  return (
    <div className="contact-container" id="contact">
      <h2>{t("tamas")}</h2>
      {submitted && <Message severity="success" text={t("done")} />}
      <Steps model={steps} activeIndex={activeIndex} readOnly={isNextDisabled}  className={isRTL ? "rtl-steps" : "ltr-steps"}/>

      <form onSubmit={handleSubmit}>
        {activeIndex === 0 && (
          <div className="p-field">
            <InputText
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder={t("getname")}
              onKeyDown={handleKeyDown}
            />
          </div>
        )}
        {activeIndex === 1 && (
          <div className="p-field email-field">
            <InputText
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder={t("getemail")}
              className={email && !isValidEmail(email) ? "p-invalid" : ""}
              onKeyDown={handleKeyDown}
            />
            {email && !isValidEmail(email) && (
              <small className="p-error">{t("invalidEmail")}</small>
            )}
          </div>
        )}
        {activeIndex === 2 && (
          <div className="p-field-editor">
            <Editor
              id="message"
              value={message}
              onTextChange={(e) => setMessage(e.textValue)}
              style={{ height: "350px" }}
              required
            />
          </div>
        )}

        <div className="step-buttons" style={{ marginTop: "20px" }}>
          {activeIndex > 0 && (
            <Button
              label={t("previous")}
              icon="pi pi-chevron-left"
              onClick={handlePrev}
              className="p-button-secondary"
            />
          )}
          {activeIndex < steps.length - 1 ? (
            <Button
              label={t("next")}
              icon="pi pi-chevron-right"
              onClick={handleNext}
              className="p-button-primary"
              disabled={isNextDisabled}
            />
          ) : (
            <Button
              label={t("send")}
              icon="pi pi-send"
              type="submit"
              className="p-button-success"
              disabled={isSendDisabled}
            />
          )}
        </div>
      </form>

      <div className="map-container">
        <h4>{t('loc')}</h4>
        <MapContainer center={[35.748104, 51.450577]} zoom={12} scrollWheelZoom={false} style={{ height: '300px', width: '50%', margin: '0 auto' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[35.748104, 51.450577]}>
            <Popup>{t('tehran')}</Popup>
          </Marker>
        </MapContainer>
      </div>

      <div className="qr-code-container">
        <h4>{t('get')}</h4>
        <QRCode value="https://drive.google.com/file/d/1LNQO7sCmqyCFlifHFB5rIfD5VIBV2swV/view?usp=sharing" size={120} />
        <div style={{ marginTop: "10px" }}>
          <a
            href="https://drive.google.com/file/d/1LNQO7sCmqyCFlifHFB5rIfD5VIBV2swV/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer" className='link'
          >
            {'https://drive.google.com/ ...'}
          </a>
        </div>
      </div>

      <div className="social-section">
        <h4>{t('follow')}</h4>
        <div className="social-links">
          <Button icon={<FaLinkedin />} tooltip={t('linkdin')} className="p-button-link" onClick={() => window.open("https://www.linkedin.com/in/sara-feyzi-ba88b6238/", "_blank")} />
          <Button icon={<FaGithub />} tooltip={t('github')} className="p-button-link" onClick={() => window.open("https://github.com/sarafeizi", "_blank")} />
          <Button icon={<FaInstagram />} tooltip={t('instagram')} className="p-button-link" onClick={() => window.open("https://www.instagram.com/sarafz99", "_blank")} />
          <Button icon={<FaMicrosoft />} tooltip={t('teams')} className="p-button-link" onClick={() => window.open("https://teams.microsoft.com/l/chat/0/0?users=sarafz9978@gmail.com", "_blank")} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
