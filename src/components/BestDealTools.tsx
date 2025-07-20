import {useContext, useState} from 'react';
import { CalendarMonth, Timeline, NotificationAdd } from '@mui/icons-material'
import {LocalThemeContext} from "../context/themeContext.ts";

const cards = [
  {
    id: 0,
    icon: CalendarMonth,
    title: "Find the cheapest days to fly",
    description: "The Date grid and Price graph make it easy to see the best flight deals",
    color: "text-blue-400"
  },
  {
    id: 1,
    icon: Timeline,
    title: "See the whole picture with price insights",
    description: "Price history and trend data show you when to book to get the best price on your flight",
    color: "text-blue-400"
  },
  {
    id: 2,
    icon: NotificationAdd,
    title: "Track prices for a trip",
    description: "Not ready to book yet? Observe price changes for a route or flight and get notified when prices drop.",
    color: "text-blue-400"
  }
];

const BestDealTools = () => {
  const [activeCard, setActiveCard] = useState(0);
  const theme = useContext(LocalThemeContext);


  const rightContent = [
    {
      title: "Insightful tools help you choose your trip dates",
      description: "If your travel plans are flexible, use the form above to start searching for a specific trip. Then, play around with the Date grid and Price graph options on the Search page to find the cheapest days to get to your destination – and back again for round trips.",
      visualization: {
        dark: "https://www.gstatic.com/flights/app/lp/dates_benefits_dark.svg",
        light: "https://www.gstatic.com/flights/app/lp/dates_benefits_light.svg",
      }
    },
    {
      title: "Get smart insights about flight prices",
      description: "Real-time insights can tell you if a fare is lower or higher than usual, and if the fare you’re seeing is a good price. So, you don’t have to worry about paying too much for a flight or missing out on the cheapest time to book. On some routes, you might also see historical data that helps you better understand how flight prices vary over time.",
      visualization: {
        dark: "https://www.gstatic.com/flights/app/lp/price_insights_benefits_dark.svg",
        light: "https://www.gstatic.com/flights/app/lp/price_insights_benefits_light.svg",
      }
    },
    {
      title: "Monitor flight prices and make sure you never miss a price change",
      description: "Effortlessly track prices for specific travel dates or for any dates, if your plans are flexible, to uncover the best deals. You can easily set up tracking for multiple routes while searching for flights and opt-in to receive email updates when the price changes. Once that's done, you can come back to your Tracked Flights page to monitor prices whenever you like, or relax knowing you’ll never miss a flight deal.",
      visualization: {
        dark: "https://www.gstatic.com/flights/app/lp/tracking_prices_benefits_dark.svg",
        light: "https://www.gstatic.com/flights/app/lp/tracking_prices_benefits_light.svg",
      }
    }
  ];

  return (
    <div className="py-6 max-w-7xl mx-auto">
      <h2 className={`\`text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 md:mb-4`}>
        Useful tools to help you find the best deals
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
        <div className="flex-shrink-0 w-full space-y-4 lg:col-span-2">
          {cards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <div
                key={card.id}
                className={`relative w-full p-6 rounded-xl border border-gray-300 dark:border-gray-500 bg-gray-100 dark:bg-gray-700 cursor-pointer min-h-[180px]`}
                onClick={() => setActiveCard(index)}
              >
                <div className="flex items-start gap-4">
                  <div className={`${card.color} mt-1`}>
                    <IconComponent fontSize="large" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 dark:text-white font-medium">
                      {card.title}
                    </h3>
                    <p className="text-gray-900 dark:text-white text-sm leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>

                {activeCard === index && (
                  <div className="content-[''] h-0 w-[max-content] top-[calc(-130%+15px)] left-[calc(100%+15px)] block relative z-19">
                    <div className="relative h-[26px] w-[26px] border border-gray-300 dark:border-gray-500 bg-gray-100 dark:bg-gray-700 useful-tool-pointer before:content-['']"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div className="flex-1 ml-8  lg:col-span-2 hidden lg:block">
          <div className="space-y-6">
            <h2 className="text-gray-900 dark:text-white text-xl font-medium leading-tight">
              {rightContent[activeCard].title}
            </h2>

            <p className="text-gray-900 dark:text-white leading-relaxed text-sm">
              {rightContent[activeCard].description}
            </p>

            <div className="mt-8 h-[300px] w-[460px] bg-center bg-no-repeat bg-cover">
              <img src={rightContent[activeCard].visualization[theme]} alt="" className="rounded-lg h-full w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BestDealTools;