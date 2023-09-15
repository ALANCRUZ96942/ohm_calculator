import {React,useState} from 'react';
import OhmValueCalculator from './OhmValueCalculator';
import {  animated } from '@react-spring/web'

function Resistence() {
    const [toleranceband, setToleranceband] = useState(4);

    const numBands = ['4','5','6'];

    function handleBand(a) {
        console.log(a);
        setToleranceband(a);
    }

    return (

        <div className="row justify-content-center m-0 mt-5 pt-3 pb-5">
            <div className='col-12'>
            <h3 className='text-white'>Select the number of bands (ussualy 4-5)</h3>
            <animated.select className='input-custom-select' onChange={(e) => handleBand(e.target.value)}>
            {numBands.map((band, index) => (
                <option key={index} value={`${band}`} > 
                    {band}
                </option>
            ))}
            
            </animated.select>

            </div>
            <div className="col-12 pl-3 pr-3"> 
                <OhmValueCalculator tolerance={toleranceband}/>
            </div>
        </div>
    );
}


export default Resistence