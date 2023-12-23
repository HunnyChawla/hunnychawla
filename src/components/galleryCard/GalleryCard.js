import React from "react";
import "./AchievementCard.scss";

export default function GalleryCard({cardInfo, isDark}) {

  return (
        <img
          src={cardInfo.image}
          alt={cardInfo.imageAlt || "Card Thumbnail"}
          className="card-image"
        ></img>
  );
}
