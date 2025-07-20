import {useState, useRef, useEffect, useContext} from 'react';
import {LocalThemeContext} from "../context/themeContext.ts";
import {
    AirlineSeatIndividualSuite, Apps, ChatBubble, Check,
    DarkMode,
    Flight, HelpOutline,
    Language, LightMode, LocalAtm, LocationOn,
    Luggage,
    Menu as MenuIcon, Settings, Timeline,
    TravelExplore
} from '@mui/icons-material'



const navItems = [
    {
        label: 'Travel',
        icon: (<Luggage fontSize="small" />),
        href: '#travel'
    },
    {
        label: 'Explore',
        icon: (<TravelExplore fontSize="small" />),
        href: '#explore'
    },
    {
        label: 'Flights',
        icon: (<Flight fontSize="small" />),
        href: '#flights'
    },
    {
        label: 'Hotels',
        icon: (<AirlineSeatIndividualSuite fontSize="small" />),
        href: '#hotels'
    },
    {
        label: 'Vacation rentals',
        icon: (<Timeline fontSize="small" />),
        href: '#vacation-rentals'
    }
];

const navItems2 = [
    {
        label: 'Tracked flight prices',
        icon: (<Luggage fontSize="small" />),
        href: '#tracked-flights'
    },
    {
        label: 'Change language',
        icon: (<Language fontSize="small" />),
        href: '#change-location'
    },
    {
        label: 'Change currency',
        icon: (<LocalAtm fontSize="small" />),
        href: '#change-currency'
    },
    {
        label: 'Change location',
        icon: (<LocationOn fontSize="small" />),
        href: '#change-location'
    }
];

const navItems3 = [
    {
        label: 'Flight settings',
        icon: (<Settings fontSize="small" />),
        href: '#flight-settings'
    },
    {
        label: 'Feedback',
        icon: (<ChatBubble fontSize="small" />),
        href: '#feedback'
    },
    {
        label: 'Help',
        icon: (<HelpOutline fontSize="small" />),
        href: '#help'
    },

]

const NavbarNew = ({ toggleTheme }: {toggleTheme: ()=>void}) => {
    const theme = useContext(LocalThemeContext);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [appearanceOpen, setAppearanceOpen] = useState(false);

    const appearanceRef = useRef(null);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleAppearanceToggle = () => {
        setAppearanceOpen(!appearanceOpen);
    };

    const handleThemeSelect = () => {
        toggleTheme();
        setAppearanceOpen(false);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (appearanceRef.current && !appearanceRef.current.contains(event.target)) {
                setAppearanceOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const themeOptions = [
        {
            id: 'dark',
            label: 'Dark theme',
        },
        {
            id: 'light',
            label: 'Light theme',
        }
    ];

    return (
      <>
          <nav className="bg-white dark:bg-gray-800 dark:backdrop-blur-sm shadow-lg border-b border-gray-200 dark:border-gray-700 sticky top-0 z-40">
              <div className="px-2 lg:px-4">
                  <div className="flex justify-between items-center h-16">
                      <div className="flex items-center">
                          <button
                            onClick={handleDrawerToggle}
                            className="p-2 mr-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-full transition-colors"
                            aria-label="menu"
                          >
                              <MenuIcon />
                          </button>
                          <div className="flex items-center mr-8">
                <span className="text-2xl font-normal" style={{ fontFamily: 'Arial, sans-serif' }}>
                  <span style={{ color: `${theme==='dark' ? '#FFFFFF' : '#4285f4'}` }}>G</span>
                  <span style={{ color: `${theme==='dark' ? '#FFFFFF' : '#ea4335'}` }}>o</span>
                  <span style={{ color: `${theme === 'dark' ? '#FFFFFF' : '#fbbc05'}` }}>o</span>
                  <span style={{ color: `${theme==='dark' ? '#FFFFFF' : '#4285f4'}` }}>g</span>
                  <span style={{ color: `${theme==='dark' ? '#FFFFFF' : '#34a853'}` }}>l</span>
                  <span style={{ color: `${theme==='dark' ? '#FFFFFF' : '#ea4335'}` }}>e</span>
                </span>
                          </div>
                      </div>
                      <div className="hidden lg:flex flex-1 items-center justify-start gap-3">
                          {navItems.map((item) => (
                            <a
                              key={item.label}
                              href={item.href}
                              className="p-2 px-3 border border-gray-200 dark:border-gray-700 rounded-full gap-2 flex items-center font-medium text-black dark:text-white text-sm"
                            >
                                <span className="text-primary dark:text-primary-dark">{item.icon}</span>
                                {item.label}
                            </a>
                          ))}
                      </div>


                      <div className="flex items-center ml-auto">
                          <div className="relative" ref={appearanceRef}>
                              <button
                                onClick={handleAppearanceToggle}
                                className="p-2 mr-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-full transition-colors"
                                title="Change appearance"
                              >
                                  {theme === 'light' ? <DarkMode className="w-5 h-5" /> : <LightMode className="w-5 h-5" />}
                              </button>

                              {/* Appearance Dropdown */}
                              {appearanceOpen && (
                                <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                                    <div className="px-4 py-3 border-b border-gray-200">
                                        <p className="text-sm font-medium px-4 text-gray-600">Appearance</p>
                                    </div>

                                    {themeOptions.map((option) => (
                                      <button
                                        key={option.label}
                                        onClick={() => handleThemeSelect()}
                                        className="w-full flex items-center px-4 py-3 text-left hover:bg-gray-50 transition-colors"
                                      >
                                          <span className="block w-7 text-primary dark:text-primary-dark">
                                              {theme === option.id && <Check />}
                                          </span>
                                          <span className="font-medium text-gray-700 flex-1">{option.label}</span>
                                      </button>
                                    ))}
                                </div>
                              )}
                          </div>


                          <button className="p-2 mr-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-full transition-colors">
                              <Apps />
                          </button>

                          {/* Profile Avatar */}
                          <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center cursor-pointer hover:shadow-md transition-shadow">
                              <span className="text-white text-sm font-medium">A</span>
                          </div>
                      </div>
                  </div>
              </div>
          </nav>
          {/* Mobile Drawer Overlay */}
          {mobileOpen && (
            <div className="fixed inset-0 z-50 lg:hidden top-[65px]">
                <div
                  className="fixed left-0 top-[65px] w-80 max-w-[250px] bg-white shadow-xl transform transition-transform duration-300 ease-in-out bg-white dark:bg-gray-800 min-h-[calc(100vh-65px)] flex flex-col h-max-[calc(100vh-65px)] overflow-scroll">
                    <div className="flex-1">
                        <div className="py-4">
                            {navItems.map((item) => (
                              <a
                                key={item.label}
                                href={item.href}
                                onClick={handleDrawerToggle}
                                className={`flex items-center px-4 py-3 text-black dark:text-white  hover:bg-gray-50 transition-colors ${item.label === 'Flights' ? 'bg-gray-200 dark:bg-gray-700 rounded-tr-full rounded-br-full text-primary dark:text-primary-dark' : ''}`}
                              >
                                  <span className="mr-4">{item.icon}</span>
                                  <span className="font-medium">{item.label}</span>
                              </a>
                            ))}
                        </div>
                        <div className="py-4 border-t border-gray-200 dark:border-gray-700">
                            {navItems2.map((item) => (
                              <a
                                key={item.label}
                                href={item.href}
                                onClick={handleDrawerToggle}
                                className={`flex items-center px-4 py-3 text-black dark:text-white  hover:bg-gray-50 transition-colors ${item.label === 'Flights' ? 'bg-gray-200 dark:bg-gray-700 rounded-tr-full rounded-br-full text-primary dark:text-primary-dark' : ''}`}
                              >
                                  <span className="mr-4">{item.icon}</span>
                                  <span className="font-medium">{item.label}</span>
                              </a>
                            ))}
                        </div>
                    </div>
                    <div className="py-4 border-t border-gray-200 dark:border-gray-700">
                        {navItems3.map((item) => (
                          <a
                            key={item.label}
                            href={item.href}
                            onClick={handleDrawerToggle}
                            className={`flex items-center px-4 py-3 text-black dark:text-white  hover:bg-gray-50 transition-colors ${item.label === 'Flights' ? 'bg-gray-200 dark:bg-gray-700 rounded-tr-full rounded-br-full text-primary dark:text-primary-dark' : ''}`}
                          >
                              <span className="mr-4">{item.icon}</span>
                              <span className="font-medium">{item.label}</span>
                          </a>
                        ))}
                    </div>
                </div>
            </div>
          )}
      </>
    );
};

export default NavbarNew;