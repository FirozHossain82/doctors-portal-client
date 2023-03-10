import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, {useState } from 'react';
import Loading from '../../Shared/Loading/Loading';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOption from './AppointmentOption';

const AvailableAppointments = ({selectedDate}) => {
    // const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const date  = format(selectedDate, 'PP');  
    const { data : appointmentOptions = [], refetch, isLoading} = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: async() =>{
            const res = await fetch(`https://doctors-portal-server-delta-virid.vercel.app/appointmentOptions?date=${date}`);
            const data = await res.json();
            return data
        }
    });
    if(isLoading){
        return<Loading></Loading>
    }

/*   
// USEQUERY tae DataLoad korar jonno  async function OR Fetch Use kora jay

  const {data:appointmentOptions = []} = useQuery({
        queryKey: ['appointmentOptions'],
        queryFn: () =>fetch('https://doctors-portal-server-delta-virid.vercel.app/appointmentOptions')
        .then(res => res.json())
    });
 */
/*   
// React query use korle UseEffect and useState lage na USEQUERY thekei kaj hoy shob
  useEffect( ( ) => {
        fetch('https://doctors-portal-server-delta-virid.vercel.app/appointmentOptions')
        .then(res => res.json())
        .then(data => setAppointmentOptions(data))
    }, []) 
    
    */

    return (
        <section className='my-16'>
            <p className='text-center text-secondary font-bold'>Available Appointment on {format(selectedDate, 'PP')}</p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8x' >
                        {
                           appointmentOptions.map(option => <AppointmentOption
                            key={option._id}
                            appointmentOption ={option}
                            setTreatment ={setTreatment}
                            ></AppointmentOption>)
                        }
            </div>
            {
                treatment &&
                <BookingModal 
                selectedDate ={selectedDate}
                treatment ={treatment}
                setTreatment ={setTreatment}
                refetch = {refetch}
                ></BookingModal>
            }
        </section>
    );
};

export default AvailableAppointments;