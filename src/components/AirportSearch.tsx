import {Flight, LocationOn} from "@mui/icons-material";
import {Dispatch, forwardRef, SetStateAction, useEffect, useState} from "react";
import {useDebounce} from "../utils";
import {SearchAirports} from "../apis/api.ts";
import {useMutation} from "@tanstack/react-query";
import {CircularProgress} from "@mui/material";
import type {AirportI} from "../interaces";

interface AirportSearchPropsI {
  setSelectedAirport: Dispatch<SetStateAction<AirportI>>
}

const AirportSearch = forwardRef(({ setSelectedAirport }: AirportSearchPropsI, ref) => {
  const [inputValue, setInputValue] = useState('');
  const [debouncedValue, setDebouncedValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);

  const setDebounceVa = useDebounce((val)=>{
    setDebouncedValue(val)
  }, 1000)

  useEffect(() => {
    if(debouncedValue && debouncedValue.length > 2){
      searchAirportsMutation.mutate(debouncedValue)
    }
  }, [debouncedValue, searchAirportsMutation]);

  const searchAirportsMutation = useMutation({
    mutationFn: (query: string)=> SearchAirports(query),
    onSuccess: (data) => {
      setSearchResults(data.data);
      setShowSearchResults(true)
    },
    onError: (err)=> {
      console.error(err);
      throw err;
    },

  })

  const handleSelectAirport = (airport: AirportI) => {
    setSelectedAirport(airport)
    setInputValue(airport.presentation.title)
    setShowSearchResults(false)
  }

  return (
    <div className="relative">
      <div className="relative" id="location-search">
        <LocationOn className={`absolute left-3 top-3 w-5 h-5 text-gray-600 dark:text-gray-300 `}/>
        <input
          ref={ref}
          type="text"
          placeholder="Where from?"
          className={`bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-500 text-gray-900 dark:text-white w-full pl-10 pr-10 pr-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value)
            setDebounceVa(e.target.value)
          }}
        />
        <div className="absolute right-3 top-4">
          {searchAirportsMutation.isPending && <CircularProgress size={20} />}
        </div>
      </div>
      <div className="absolute top-[55px] w-full max-h-[250px] bg-white dark:bg-gray-800 shadow-lg rounded-lg h-auto overflow-y-auto z-100 text-gray-900 dark:text-white">
        <div className="w-full">
          {
            showSearchResults && searchResults.map((airport)=>(
              <div
                className="w-full border-b border-gray-200 dark:border-gray-700 flex gap-3 py-3 px-5 hover:cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700"
                onClick={() => handleSelectAirport(airport)}
              >
                <Flight />
                <div className="">
                  <div className="">{airport.presentation.title}</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">{airport.presentation.subtitle}</div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
})
export default AirportSearch;