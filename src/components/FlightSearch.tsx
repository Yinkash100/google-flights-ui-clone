import {Menu, MenuItem, Select} from "@mui/material";
import {Search, SyncAlt} from "@mui/icons-material";
import PassengerSelect from "./PassengerSelect.tsx";
import AirportSearch from "./AirportSearch.tsx";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DemoContainer} from "@mui/x-date-pickers/internals/demo";
import {DateRangePicker} from "@mui/x-date-pickers-pro/DateRangePicker";
import {MultiInputDateRangeField} from "@mui/x-date-pickers-pro/MultiInputDateRangeField";
import {MouseEvent, useRef, useState} from "react";
import type {AirportI, PassengerTypeI} from "../interaces";

const FlightSearch = () => {
  const [tripType, setTripType] = useState('round-trip');
  const [passengers, setPassengers] = useState<PassengerTypeI[]>([
    {
      id: 0,
      name: 'Adults',
      category: '',
      number: 1,
    },
    {
      id: 1,
      name: 'Children',
      category: 'Aged 2-11',
      number: 0,
    },
    {
      id: 2,
      name: 'Infants',
      category: 'In seat',
      number: 0,
    },
    {
      id: 3,
      name: 'Infants',
      category: 'In lap',
      number: 0,
    },
  ]);
  const [travelClass, setTravelClass] = useState('Economy');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const showPassengerDropdown = Boolean(anchorEl);
  const handleShowPassengerSelect = (event: MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget);
  const handleClosePassengerSelect = () => setAnchorEl(null);
  const passengerCount = passengers.reduce((accumulator, currentValue) => accumulator + currentValue.number, 0)
  const [selectedLocation, setSelectedLocation] = useState<AirportI | null>();
  const [selectedDestination, setSelectedDestination] = useState<AirportI | null>();
  const [dateRange, setDateRange] = useState<AirportI | null>();
  const locationInputRef = useRef<HTMLInputElement|null>(null);

  const canProceed = selectedLocation || selectedDestination

  const handleExplore = ()=>{
    if(!canProceed){
      if(locationInputRef.current) locationInputRef.current.focus()
    } else {
      console.log({
        location: selectedLocation,
        destination: selectedDestination,
        dateRange
      });
    }
  }

  return (
    <div
      className={`bg-white dark:bg-gray-800 dark:backdrop-blur-sm rounded-2xl shadow-xl p-6 mb-8 border border-gray-200 dark:border-gray-799 relative`}>
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 mb-6">
        <div className="flex flex-wrap items-center space-x-4">
          <Select
            startDecorator={<SyncAlt/>}
            variant="standard"
            sx={{m: 1, minWidth: 140}}
            value={tripType}
            onChange={(e) => setTripType(e.target.value)}
            size="small"
          >
            <MenuItem value="round-trip">Round trip</MenuItem>
            <MenuItem value="one-way">One way</MenuItem>
            <MenuItem value="multi-city">Multi-city</MenuItem>
          </Select>
          <span
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleShowPassengerSelect}
          >
                                <Select
                                  variant="standard"
                                  sx={{m: 1, minWidth: 80}}
                                  value={passengerCount}
                                  size="small"
                                  readOnly
                                >
                                    <MenuItem value={passengerCount}>{passengerCount}</MenuItem>
                                </Select>
                            </span>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={showPassengerDropdown}
            onClose={handleClosePassengerSelect}
            slotProps={{
              list: {
                'aria-labelledby': 'basic-button',
              },
            }}
          >
            <PassengerSelect
              passengers={passengers}
              updatePassengers={(pass) => setPassengers(pass)}
              onClose={handleClosePassengerSelect}
            />
          </Menu>
          <Select
            variant="standard"
            sx={{m: 1, minWidth: 100}}
            size="small"
            value={travelClass}
            onChange={(e) => setTravelClass(e.target.value)}
          >
            <MenuItem value="Economy">Economy</MenuItem>
            <MenuItem value="Premium Economy">Premium Economy</MenuItem>
            <MenuItem value="Business">Business</MenuItem>
            <MenuItem value="First">First</MenuItem>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-4 mb-6">
        <AirportSearch ref={locationInputRef} setSelectedAirport={setSelectedLocation}/>
        <AirportSearch setSelectedAirport={setSelectedDestination}/>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['MultiInputDateRangeField']}>
            <DateRangePicker
              slots={{field: MultiInputDateRangeField}}
              value={dateRange}
              onChange={(val) => setDateRange(val)}
            />
          </DemoContainer>
        </LocalizationProvider>
      </div>

      <div className="absolute -bottom-[20px] left-1/2 -translate-x-1/2">
        <button
          className={`bg-[#1a73e8] dark:bg-[#8ab4f8] hover:bg-blue-700 dark:hover:bg-blue-700 text-white font-display py-2 px-5 rounded-full font-semibold flex items-center space-x-2 hover:scale-105 transition-transform duration-200 text-sm`}
          onClick={handleExplore}
        >
          <Search size={24}/>
          <span>{canProceed ? 'Explore' : 'Search'}</span>
        </button>
      </div>
    </div>
  )
}

export default FlightSearch;