import { useContext } from 'react';
import {LocalThemeContext} from "../context/themeContext.ts";
import Faqs from "../components/Faqs.tsx";
import PopularDestinations from "../components/PopularDestinations.tsx";
import PopularFlights from "../components/PopularFlights.tsx";
import Footer from "../components/Footer.tsx";
import BestDealTools from "../components/BestDealTools.tsx";
import StaticBg from '../assets/images/staticmap.png'
import FlightSearch from "../components/FlightSearch.tsx";

const GoogleFlightsClone = () => {
    const theme = useContext(LocalThemeContext);

    return (
      <div className={`min-h-screen bg-bg-white dark:bg-bg-dark transition-all duration-300`}>
          <div className="mx-auto mb-[40px] h-[24vw] max-h-[298px] min-h-[136px] max-w-[1248px] relative">
              <div className={`h-full w-full left-1/2 absolute top-0 -translate-x-1/2 translate-y-0 translate-z-0 content-["url()"] inline-block content-["Hello world"]`}>
                  <img
                    src={theme === 'light' ?
                      'https://www.gstatic.com/travel-frontend/animation/hero/flights_nc_4.svg'
                      : 'https://www.gstatic.com/travel-frontend/animation/hero/flights_nc_dark_theme_4.svg'
                    }
                    alt="Hero Image"
                    className="h-full w-full object-cover"
                  />
              </div>
              <div className={`absolute text-gray-900 dark:text-white w-full bottom-0 z-1 font-display text-center text-xl md:text-2xl lg:text-6xl`}>
                  Flights
              </div>
          </div>
          {/* Main Content */}
          <main className="max-w-[1024px] my-0 mx-auto px-4 sm:px-6 lg:px-8 py-0 lg:py-8">
              <FlightSearch />
              <div className="mt-4 mb-12">
                  <h2 className={`text-2xl font-bold text-gray-900 dark:text-white mb-2`}>
                      Find cheap flights from Nigeria to anywhere
                  </h2>
                  <div
                    className="flex overflow-x-hidden items-center space-x-3 md:space-x-6 text-sm text-primary dark:text-primary-dark mb-5">
                      <div
                        className={`p-0 px-3 border border-gray-200 dark:border-gray-700 rounded-full gap-2 font-semibold`}>
                          Lagos
                      </div>
                      <div
                        className={`p-0 px-3 border border-gray-200 dark:border-gray-700 rounded-full gap-2  font-semibold`}>
                          Abuja
                      </div>
                      <div
                        className={`p-0 px-3 border border-gray-200 dark:border-gray-700 rounded-full gap-2  font-semibold whitespace-pre`}>
                          Port Harcourt
                      </div>
                      <div
                        className={`p-0 px-3 border border-gray-200 dark:border-gray-700 rounded-full gap-2  font-semibold`}>
                          Kano
                      </div>
                  </div>
                  <div className="relative box-border flex h-[180px] md:h-[240px] lg:h-[300px] mt-4 relative">
                      <div
                        className="bg-center bg-no-repeat rounded-lg bg-size-cover rounded-lg cursor-pointer flex-1 hover:contrast-70"
                        role="button"
                        tabIndex="0"
                        aria-label="Explore more destinations from Lagos"
                        style={{ backgroundImage: `url("${StaticBg}")`}}
                      />

                      <button className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white dark:bg-gray-800 dark:backdrop-blur-sm text-primary font-medium dark:text-primary-dark py-1 text-sm px-5 rounded-full"> Explore Destinations</button>
                  </div>
              </div>
              <BestDealTools/>
              <PopularDestinations/>
              <Faqs/>
              <PopularFlights/>
              <Footer/>
          </main>

      </div>
    );
};

export default GoogleFlightsClone;