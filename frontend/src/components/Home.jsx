
import { Link } from 'react-router-dom';
import React from 'react';

function Home() {


    return (

        <div className="row justify-content-center m-0 pb-5">
            <div className="col-10 col-md-2">   
                <Link to="/calculate">  
                    <button   type="button" class="btn btn-custom-main">Start here</button>
                </Link>            
            </div>
        </div>
    );
}


export default Home