import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faFire,
  faThumbsUp,
  faHistory,
  faBookOpen,
  faClock,
  faMusic,
  faFootballBall,
  faGamepad,
  faFilm,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="section">
        <h1 className="section-title">Main</h1>
        <ul className="subscription-list">
          <li>
            <FontAwesomeIcon icon={faHome} /> Home
          </li>
          <li>
            <FontAwesomeIcon icon={faFire} /> Trending
          </li>
          <li>
            <FontAwesomeIcon icon={faThumbsUp} /> Subscriptions
          </li>
          <li>
            <FontAwesomeIcon icon={faBookOpen} /> Library
          </li>
          <li>
            <FontAwesomeIcon icon={faHistory} /> History
          </li>
        </ul>
      </div>
      <div className="section">
        <h1 className="section-title">Best of YouTube</h1>
        <ul className="subscription-list">
          <li>
            <FontAwesomeIcon icon={faMusic} /> Music
          </li>
          <li>
            <FontAwesomeIcon icon={faFootballBall} /> Sports
          </li>
          <li>
            <FontAwesomeIcon icon={faGamepad} /> Gaming
          </li>
          <li>
            <FontAwesomeIcon icon={faFilm} /> Movies
          </li>
          <li>
            <FontAwesomeIcon icon={faNewspaper} /> News
          </li>
        </ul>
      </div>
      <div className="section">
        <h1 className="section-title">Library</h1>
        <ul className="subscription-list">
          <li>
            <FontAwesomeIcon icon={faHistory} /> History
          </li>
          <li>
            <FontAwesomeIcon icon={faClock} /> Watch Later
          </li>
          <li>
            <FontAwesomeIcon icon={faThumbsUp} /> Liked Videos
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
