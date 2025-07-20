const popularRoutes = [
  'Flights from New York to London',
  'Flights from New York to Paris',
  'Flights from London to Paris',
  'Flights from New York to Rome',
  'Flights from Montreal to Paris',
  'Flights from London to Milan',
  'Flights from Toronto to London',
  'Flights from New York to Milan',
  'Flights from London to Dubai',
  'Flights from London to Tokyo',
  'Flights from Madrid to Rome',
  'Flights from London to Delhi',
  'Flights from New York to Los Angeles',
  'Flights from Paris to Marrakech',
  'Flights from Sao Paulo to London',
  'Flights from London to Istanbul',
  'Flights from Paris to Bangkok',
  'Flights from New York to Orlando',
  'Flights from London to Berlin',
  'Flights from Chicago to Paris',
  'Flights from Melbourne to London'
];

const PopularFlights = () => {
  return (
  <div className="mb-12">
    <h2 className={`text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6`}>
      Find cheap flights on popular routes
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {popularRoutes.map((route, index) => (
        <a key={index} href="#" className={`px-3 block`}>
          <span className={`text-primary dark:text-primary-dark text-sm hover:text-blue-600 transition-colors`}>{route}</span>
        </a>
      ))}
    </div>
  </div>
  )
}
export default PopularFlights;