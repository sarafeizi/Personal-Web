import React, { useState } from "react";
import { Carousel } from "primereact/carousel";
import { Button } from "primereact/button";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./Project.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Rating from "@mui/material/Rating";
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t } = useTranslation();
  const [ratings, setRatings] = useState({}); // منتقل شد به بیرون

  const projects = [
    { id: 1, title: t('Shopping cart'), link: "https://github.com/sarafeizi/sabad-kharid" },
    { id: 2, title: t('Web messaging app'), link: "https://github.com/sarafeizi/saragram" },
    { id: 3, title: t('Cooking site'), link: "https://github.com/sarafeizi/Sweet-taste" },
    { id: 4, title: t('Validation form'), link: "https://github.com/sarafeizi/validation-form" },
    { id: 5, title: t('Search'), link: "https://github.com/sarafeizi/search-coin" },
    { id: 6, title: t('Weather App'), link: "https://github.com/sarafeizi/WeatherApp" },
    { id: 7, title: t('Karnama'), link: "https://www.faragamara.ir/" },
    { id: 8, title: t('Fap Android Software'), link: "https://www.faragamara.ir/" }
  ];

  const handleRatingChange = (projectId, value) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [projectId]: value,
    }));
  };

  const projectTemplate = (project) => {
    return (
      <div className="project-card">
        <h3>{project.title}</h3>
        <Button
          label={t("viewproject")}
          icon="pi pi-external-link"
          className="p-button-outlined p-button-rounded"
          onClick={() => window.open(project.link, "_blank")}
        />
        <div className="rating-container">
          <Rating
            name={`rating-${project.id}`}
            value={ratings[project.id] || 0}
            onChange={(event, newValue) => handleRatingChange(project.id, newValue)}
            getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
            precision={0.5}
            icon={<FavoriteIcon fontSize="inherit" sx={{ color: "red" }} />}
            emptyIcon={<FavoriteBorderIcon fontSize="inherit" sx={{ color: "red" }} />}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="projects-container" id="projects">
      <h2>{t('project')}</h2>
      <Carousel
        value={projects}
        itemTemplate={projectTemplate}
        numVisible={3}
        numScroll={1}
        circular
        autoplayInterval={3000}
        responsiveOptions={[
          { breakpoint: '1024px', numVisible: 3, numScroll: 3 },
          { breakpoint: '768px', numVisible: 2, numScroll: 2 },
          { breakpoint: '560px', numVisible: 1, numScroll: 1 }
        ]}
      />
    </div>
  );
};

export default Projects;
