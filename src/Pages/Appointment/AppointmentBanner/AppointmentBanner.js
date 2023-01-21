import chair from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
// import { format } from "date-fns";
import background from '../../../assets/images/bg.png';

const AppointmentBanner = ({selectedDate, setSelectedDate}) => {
   
  return (
    <header className="my-8"
    style={{
        background: `url( ${background})`,
        
      }}
    >
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            className="max-w-md rounded-lg shadow-2xl"
          alt="dentist chair " />
          <div className="mr-20">
                <DayPicker
                         mode ='single'
                         selected={selectedDate}
                         onSelect ={setSelectedDate}
                ></DayPicker>
                {/* <p>You have Selected date: {format(selectedDate, 'PP')}</p> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointmentBanner;
