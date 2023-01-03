import React from "react";
import CardPage from "./CardPage";
import HeroPage from "./HeroPage";

const MainPage = () => {
  return (
    <React.Fragment>
      <section>
        <div className=" md:w-2/3 md:mx-auto md:relative">
          <div>
            <HeroPage />
          </div>

          <div className="md:absolute bottom-14 left-14">
            <CardPage />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default MainPage;
