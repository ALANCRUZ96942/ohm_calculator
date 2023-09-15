import {React,useEffect,useState} from 'react';
import { useSpring, animated } from '@react-spring/web'
import {getResistorsByTolerance,getResistorsByFigure,getResistorsByMultipler} from '../services/api'
function OhmValueCalculator(props) {
    const [selectedButton, setSelectedButton] = useState(null);
    const [leftposition, setLeftposition] = useState(null);
    const [topposition, setTopposition] = useState(null);
    const [colors, setColors] = useState([]);
    const [mults, seetMults] = useState([]);
    const [tolerances, setTolerances] = useState([]);
    const [divStyles, setDivStyles] = useState({}); 
    const [values, setValues] = useState(Array.from({ length: props.tolerance },  (_, index) => null)); 

    const [finalResult, setfinalResult] = useState(null);
    const [finalTolerance, setfinalTolerance] = useState(null);


    useEffect(() => {
        setfinalResult(null);
        (function changeStyleOfClass (){
            const elements = document.querySelectorAll('.band'); 
            elements.forEach((element) => {
              element.style.backgroundColor = '#a9a69c'; 
            });
        })();
        
        (async function fetchMultiplers() {
            try {
              const data = await getResistorsByMultipler();
              console.log(data);
              seetMults(data);
            } catch (error) {
              console.error('Error fetching resistors:', error);
            }
        })();

        (async function fetchColors() {
            try {
              const data = await getResistorsByFigure();
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
    
    useEffect(() => {
        const allFill = values.every((elemento) => elemento !== null);

        if (allFill) {
            console.log(values);
            CalculateOhmValue(values);
        } 
        
    }, [values]);
    let numBands =  Array.from({ length: props.tolerance-1 }, (_, index) => index);
    

    function CalculateOhmValue(bands){
        const long = bands.length;
        let concat = '0';
        let res,tolerance;
        bands.forEach((element,index) => {
            if(index < long-2){
                 concat = concat + element.toString();
            }
            else if(index === long-2){
                res = parseFloat(concat) * element;
            }
            else{
                 tolerance = element;
            }
            setfinalResult(res);
            setfinalTolerance(tolerance);
        });
    }

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
        console.log(element);
        let newArr = [...values];
        if(element.tolerance){
            newArr[bandId-1] = element.tolerance;
        }
        else{
            if(bandId === props.tolerance-1){
                newArr[bandId-1] = element.multipler;
            }
            else{
                newArr[bandId-1] = Math.log10(element.multipler);
            }
        }
        setValues(newArr);

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
                    
                        <animated.select className="input-custom-select" style={selectAnimation} onChange={(event) => handleColor(event.target.value,selectedButton)}>
                        
                        {
                            (selectedButton === props.tolerance ) ? 
                                tolerances.map((tolerance, index) => (
                                    <option key={index} value={JSON.stringify(tolerance)}>
                                        {tolerance.name}
                                    </option>
                                )) : (selectedButton === props.tolerance -1) ?
                                mults.map((mult, index) => (
                                    <option key={index} value={JSON.stringify(mult)}>
                                        {mult.name}
                                    </option>
                                ))
                                : colors.map((color, index) => (
                                    <option key={index} value={JSON.stringify(color)}>
                                        {color.name}
                                    </option>
                            ))
                        }
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

            <div className='row pt-5'>
                <h3 className='text-white'>
                    {finalResult !== null? 'Resistance: '+finalResult+'Ω ± '+finalTolerance : ''}
                </h3>
            </div>

        </div>
    );
}


export default OhmValueCalculator