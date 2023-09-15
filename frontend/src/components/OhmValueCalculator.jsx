import {React,useEffect,useState} from 'react';
import { useSpring, animated } from '@react-spring/web'
import {getResistorsByTolerance,getResistorsByColor} from '../services/api'
function OhmValueCalculator(props) {
    const [selectedButton, setSelectedButton] = useState(null);
    const [leftposition, setLeftposition] = useState(null);
    const [topposition, setTopposition] = useState(null);
    const [colors, setColors] = useState([]);
    const [tolerances, setTolerances] = useState([]);
    const [divStyles, setDivStyles] = useState({}); // Estado para mantener los estilos de los divs

    useEffect(() => {

        (function changeStyleOfClass (){
            const elements = document.querySelectorAll('.band'); 
            elements.forEach((element) => {
              element.style.backgroundColor = '#a9a69c'; 
            });
        })();

        (async function fetchColors() {
            try {
              const data = await getResistorsByColor();
              console.log(data);
              setColors(data);
            } catch (error) {
              console.error('Error fetching resistors:', error);
            }
        })();

        (async function fetchTolerances() {
                try {
                const data = await getResistorsByTolerance();
                console.log(data);
                setTolerances(data);
                } catch (error) {
                console.error('Error fetching resistors:', error);
                }
        })();

    }, [props.tolerance]);
    let numBands =  Array.from({ length: props.tolerance-1 }, (_, index) => index);
    

    const selectAnimation = useSpring({
      opacity: selectedButton !== null ? 1 : 0,
      height: selectedButton !== null ? 'auto' : 0,
      position: 'absolute',
      left: leftposition,
      top: topposition,
      overflow: 'hidden',
    });

    function handleClick(event,bandId) {
        const x = event.clientX; 
        const y = event.clientY; 
        setLeftposition(x-30);
        setTopposition(y+30);
        setSelectedButton(selectedButton === bandId ? null : bandId);
    }

    function handleColor(e,bandId) {
        let element = JSON.parse(e);
        const newDivStyles = {
        ...divStyles, 
        [bandId]: {
          backgroundColor: element.color, 
        },
      };
  
      setDivStyles(newDivStyles);
       
    }
    
   

    return (
        <div className='pt-5'>

            <h3 className='text-white mb-5'>{(selectedButton) ? 'Band selected ' + selectedButton : 'Please click on a band'} </h3>

            <div className='row'>
                <div className='col-2 wire'>
                </div>
                <div className='col-8'>
                    <div className='resistor d-flex justify-content-center'>
                        <animated.select className="input-custom-select"  style={selectAnimation} onChange={(event) => handleColor(event.target.value,selectedButton)}>
                        {(selectedButton === props.tolerance) ? 
                            tolerances.map((color, index) => (
                                <option key={index} value={JSON.stringify(color)}>
                                    {color.name}
                                </option>
                            )) : colors.map((color, index) => (
                                <option key={index} value={JSON.stringify(color)}>
                                    {color.name}
                                </option>
                        ))}
                        </animated.select>
                        {numBands.map((item, index) => (
                            <div className='col-1 band' style={divStyles[index+1]} key={index} onClick={(event) => handleClick(event,index+1)}>
                            </div>    
                        ))}
                        <div className='col-1 band' style={divStyles[props.tolerance]}  onClick={(event) => handleClick(event,props.tolerance)}>
                        </div>
                                
                    </div>
                </div>
                <div className='col-2 wire'>
                </div>
            </div>

        </div>
    );
}


export default OhmValueCalculator