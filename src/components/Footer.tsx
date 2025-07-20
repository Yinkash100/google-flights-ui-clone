import {Language, LocalAtm, LocationOnOutlined} from'@mui/icons-material'

const Footer = () => {
  return (
    <footer
      className={`bg-white dark:bg-gray-800 dark:backdrop-blur-sm border-t border-gray-200 dark:border-gray-700 mt-12`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3 md:gap- text-sm items-centesr justify-center text-primary dark:text-primary-dark">
            <div className={`p-0 px-3 border border-gray-200 dark:border-gray-700 rounded-full gap-2 flex items-center font-medium`}>
              <Language />
              <span>Language · English (United States)</span>
            </div>
            <div className={`p-0 px-3 border border-gray-200 dark:border-gray-700 rounded-full gap-2 flex items-center font-medium`}>
              <LocationOnOutlined />
              <span>Location · Nigeria</span>
            </div>
            <div className={`p-0 px-3 border border-gray-200 dark:border-gray-700 rounded-full gap-2 flex items-center font-medium`}>
              <LocalAtm />
              <span>Currency · NGN</span>
            </div>
          </div>
          <div className="mt-8 mb-12 text-sm text-gray-600 dark:text-gray-300">
            <p>Current language and currency options applied: English (United States) - Nigeria - NGN</p>
            <p>Displayed currencies may differ from the currencies used to purchase flights. <a href="#">Learn more</a></p>
          </div>
          <div className="flex flex-wrap items-center space-x-6 text-sm items-centesr justify-center">
            <a href="#" className={` text-primary dark:text-primary-dark hover:text-blue-600 transition-colors`}>About</a>
            <a href="#"
               className={` text-primary dark:text-primary-dark hover:text-blue-600 transition-colors`}>Privacy</a>
            <a href="#" className={` text-primary dark:text-primary-dark hover:text-blue-600 transition-colors`}>Terms</a>
            <a href="#" className={` text-primary dark:text-primary-dark hover:text-blue-600 transition-colors`}>Join user studies</a>
            <a href="#" className={` text-primary dark:text-primary-dark hover:text-blue-600 transition-colors`}>Feedback</a>
            <a href="#" className={` text-primary dark:text-primary-dark hover:text-blue-600 transition-colors`}>Help
              Center</a>
          </div>
        </div>
      </div>
      <div className={`bg-white dark:bg-gray-800 dark:backdrop-blur-sm border-t border-gray-200 dark:border-gray-700 mt-12`}>

      </div>
    </footer>
  )
}

export default Footer;