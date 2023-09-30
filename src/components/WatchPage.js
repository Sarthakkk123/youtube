import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const [searchParam] = useSearchParams();
  const videoId = searchParam.get("v");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  // Construct the URL for the embedded video based on the videoId
  const videoSrc = `https://www.youtube.com/embed/${videoId}?si=xM7ZwSoQhXA-Ges8`;

  return (
    <>
      <div>
        <iframe
          width="900"
          height="450"
          src={videoSrc}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
};

export default WatchPage;
