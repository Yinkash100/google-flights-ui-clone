import {DetailedHTMLProps, HTMLAttributes, useState} from "react";
import type {PassengerTypeI} from "../interaces";
import { Add, Remove } from '@mui/icons-material'
import {Button} from "@mui/material";

interface PassengerPropsI extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    onClose: ()=> void;
    passengers: PassengerTypeI[];
    updatePassengers: (a: PassengerTypeI[])=> void;
}

interface PassengerItemPropsI {
    passenger: PassengerTypeI,
    increment: ()=>void;
    decrement: ()=>void
}

const PassengerItem = ({ passenger, increment, decrement }: PassengerItemPropsI) => {
    return (
        <div className="flex items-center justify-between py-4 px-4">
            <div className="flex-1 min-w-[100px]">
                <div className="text-black dark:text-white font-medium text-sm">
                    {passenger.name}
                </div>
                {passenger.category && (
                    <div className="text-gray-600 dark:text-gray-400 text-xs">
                        {passenger.category}
                    </div>
                )}
            </div>
            <div className="flex items-center gap-1">
                <Button
                    onClick={decrement}
                    disabled={passenger.number === 0}
                    variant="contained"
                    style={{maxWidth: '32px', maxHeight: '32px', minWidth: '32px', minHeight: '32px'}}
                    sx={{backgroundColor: "#99a1af"}}
                >
                    <Remove fontSize="small" />
                </Button>
                <div className="text-black dark:text-white w-8 text-center font-medium">
                    {passenger.number}
                </div>
                <Button
                    variant="contained"
                    onClick={increment}
                    style={{maxWidth: '32px', maxHeight: '32px', minWidth: '32px', minHeight: '32px'}}
                    sx={{backgroundColor: "#99a1af"}}
                >
                    <Add fontSize="small" />
                </Button>
            </div>
        </div>
    )
}

const PassengerSelect = ({ onClose, passengers, updatePassengers }: PassengerPropsI)=>{
    const [currentPassengers, setCurrentPassengers] = useState<PassengerTypeI[]>(passengers);

    const updatePassengerCount = (id: number, count: number) => {
        const passengerIndex = currentPassengers.findIndex(a=>a.id===id)
        if(passengerIndex === -1) return;
        const tempPassenger = [...currentPassengers];
        tempPassenger[passengerIndex] = {
            ...tempPassenger[passengerIndex],
            number: tempPassenger[passengerIndex].number + count
        }
        setCurrentPassengers(tempPassenger)
    }

    return(
        <>
            {
                currentPassengers.map((passenger) => (
                    <PassengerItem
                        increment={()=>updatePassengerCount(passenger.id, 1)}
                        decrement={()=>updatePassengerCount(passenger.id, -1)}
                        passenger={passenger}
                    />
                ))
            }
            <div className="flex mt-2 justify-end">
                <Button variant="text" onClick={onClose}>Cancel</Button>
                <Button
                  variant="text"
                  onClick={()=>{
                      updatePassengers(currentPassengers)
                      onClose()
                  }}>
                      Done
                  </Button>
            </div>
        </>
    )
}

export default PassengerSelect;