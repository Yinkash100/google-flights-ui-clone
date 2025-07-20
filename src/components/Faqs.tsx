import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

const faqs = [
  {
    id: 0,
    title: 'What are the most popular airports in Europe?',
    text: `The most popular flight destinations in Europe are London, Istanbul, Frankfurt am Main, Madrid, Amsterdam and Paris.`,
  },
  {
    id: 1,
    title: 'What are the most popular airports in Europe?',
    text: `
                <div>
                    <p>Some of the most popular airports in Europe are:</p>
                    <ul>
                        <li>Heathrow Airport (LHR) in London</li>
                        <li>Istanbul Airport (IST) in Istanbul</li>
                        <li>Frankfurt Airport (FRA) in Frankfurt am Main</li>
                        <li>Adolfo Suárez Madrid–Barajas Airport (MAD) in Madrid</li>
                        <li>Amsterdam Airport Schiphol (AMS) in Amsterdam</li>
                        <li>Paris Charles de Gaulle Airport (CDG) in Paris</li>
                        <li>Josep Tarradellas Barcelona-El Prat Airport (BCN) in Barcelona</li>
                        <li>Munich International Airport (MUC) in Munich</li>
                        <li>Leonardo da Vinci International Airport (FCO) in Rome</li>
                        <li>Humberto Delgado Airport (LIS) in Lisbon</li>
                    </ul>
                </div>
            `,
  },
  {
    id: 2,
    title: 'How can I find cheap flights to Europe?',
    text: `
            <div>
                <p>
                    Finding flights deals to Europe is easy on Google Flights. Get inspired by and select one of the recommendations at the top of the page.
                </p>
                <p>
                    Or, if you already have a city in mind, just enter it in the destination field in the form above. Then, open the calendar to see the cheapest days to fly. If you don't yet have a destination in mind, don't worry! Just leave Europe in the destination field and select Explore to easily compare the cheapest flights across multiple destinations in Europe.
                </p>
                <p>
                    To find the cheapest fares, it’s usually best to book at least a few weeks in advance for domestic flights and a few months in advance for international travel.
                </p>
            </div>
            `,
  },
  {
    id: 3,
    title: 'Can I use Google Flights to find multi-city trips within Europe?',
    text: 'Absolutely. You can easily use Google Flights to plan multi-city trips within Europe. Select the Multi-city tab at the top of the page, enter the cities you want to visit within Europe, and adjust the dates accordingly. Google Flights will then display available flight options, so you can plan a seamless itinerary for your journey within Europe.',
  },
  {
    id: 4,
    title: 'What are the cheapest days to fly to Europe?',
    text: 'When booking a flight to Europe, play around with flight options and dates in the map to identify the cheapest times to travel. Price history and real-time insights can also tell you if a fare is lower or higher than usual. If you already have a specific destination in mind, you can track prices and get notified if the fare drops. So, you don\'t have to worry about paying too much or missing out on the cheapest time to book. Off-peak travel is often more budget-friendly, so planning your trip during these times can lead to significant savings.',
  }
];


const Faqs = () => {
  return (
    <div className="mb-12">
      <h2 className={`text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 md:mb-4`}>
        Frequently asked questions
      </h2>
      <div>
        {faqs.map((faq) => (
          <Accordion key={faq.id}>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span" className="text-sm md:text-lg">{faq.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography dangerouslySetInnerHTML={{__html: faq.text}} >
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  )
}
export default Faqs;