import React from "react";
// import React, { useEffect, useState } from 'react';
import '../All_sections_css/Products_grid_section.css';
import '../All_sections_css/Media_queries.css';
import ManSection from '../component/ManSection'
import WomenSection from '../component/WomenSection'
import BeautySection from '../component/BeautySection'
import BrandsSection from '../component/BrandsSection'
import KidsSection from '../component/KidsSection'

export const HomePage = () => {
    return(
      <section className="cust_Products_grid_section">
        < ManSection />
        <WomenSection />
        <BeautySection />
        <BrandsSection />
        <KidsSection />
      </section>
    )
}

export default HomePage;