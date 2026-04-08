import Calendar from 'react-calendar';
import "./DashboardCalendar.css";
import { useState } from 'react';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const DashboardCalendar = () => {
    const [value, setValue] = useState<Value>(new Date());

    return (
        <div className='w-100 mt-4'>
            <Calendar className="text-white justify-center" tileClassName={({ activeStartDate, date, view }) => {
                if(date.getMonth() != activeStartDate.getMonth()){
                    return "text-gray-500"
                }
                
                return "text-white";
            }} view='month' value={value} onChange={(value, event) => {
                setValue(value);
                }}/>
        </div>
    )
}


export default DashboardCalendar;