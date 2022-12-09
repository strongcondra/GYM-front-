import React, { Fragment } from 'react';
import { Routes, Route } from "react-router-dom";
import UserAnalysis from '../views/home-pages/UserAnalysis';
import Training from '../views/home-pages/Training';
import Shop from '../views/home-pages/Shop';
import Contact from '../views/home-pages/Contact';
import Booking from '../views/home-pages/Booking';
import PersonalTraining from '../views/inner-pages/PersonalTraining';
import MartialArts from '../views/inner-pages/MartialArts';
import Boxing from '../views/inner-pages/Boxing';
import BoxingDetails from '../views/inner-pages/BoxingDetails';
import MartialDetails from '../views/inner-pages/MartialDetails';
import WeightDetails from '../views/inner-pages/WeightDetails';
import NotFound from "../views/NotFound";
import GoToTop from "../components/GoToTop";
const AppRouter = () => {
  return (
    <Fragment>
      <GoToTop/>
      <Routes>
        <Route path="/" element={<UserAnalysis />} />
        <Route path="/training" element={<Training />} />
        <Route path="/personaltraining" element={<PersonalTraining />} />
        <Route path="/martialarts" element={<MartialArts />} />
        <Route path="/boxing" element={<Boxing />} />
        <Route path="/boxing-details" element={<BoxingDetails />} />
        <Route path="/weight-details" element={<WeightDetails />} />
        <Route path="/martial-details" element={<MartialDetails />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Fragment>
  )
}
export default AppRouter