import React from "react";
import Contact from "../../Contact/Contact";
import Navigation from "../../Shared/Navigation/Navigation";
import Testmonials from "../../Testmonials/Testmonials";
import AppointmentBanner from "../AppointmentBanner/AppointmentBanner";
import Banner from "../Banner/Banner";
import Doctors from "../Doctors/Doctors";
import Services from "../Services/Services";
import Treatment from "../Treatment/Treatment";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Banner></Banner>
      <Services></Services>
      <Treatment></Treatment>
      <AppointmentBanner></AppointmentBanner>
      <Testmonials></Testmonials>
      <Doctors></Doctors>
      <Contact></Contact>
    </div>
  );
};

export default Home;
