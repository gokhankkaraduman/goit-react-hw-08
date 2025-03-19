import React from 'react';
import Lottie from 'lottie-react'; 
import css from "./NotFoundPage.module.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const NotFoundPage = () => {
  return (
    <div className={css.container}>
        <DotLottieReact
          src="https://lottie.host/1313594c-db25-44bb-92e1-44614d2174b6/oqVb7lOYG2.lottie"
          loop
          autoplay
        />
    </div>
  );
};

export default NotFoundPage;
