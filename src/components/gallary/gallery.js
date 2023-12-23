import React, {useContext} from "react";
import "./Achievement.scss";
// import AchievementCard from "../../components/achievementCard/AchievementCard";
import {gallerySection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import GalleryCard from "../../components/galleryCard/GalleryCard";
export default function Gallery() {
  const {isDark} = useContext(StyleContext);
  if (!gallerySection.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="achievements">
        <div className="achievement-main-div">
          <div className="achievement-header">
            <h1
              className={
                isDark
                  ? "dark-mode heading achievement-heading"
                  : "heading achievement-heading"
              }
            >
              {gallerySection.title}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle achievement-subtitle"
                  : "subTitle achievement-subtitle"
              }
            >
            </p>
          </div>
          <div className="achievement-cards-div">
            {gallerySection.achievementsCards.map((card, i) => {
              return (
                <GalleryCard
                  key={i}
                  isDark={isDark}
                  cardInfo={{
                    image: card.image,
                    imageAlt: card.imageAlt,
                    footer: card.footerLink
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
