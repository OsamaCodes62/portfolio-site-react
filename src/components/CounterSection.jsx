import React, { useState } from 'react'
import * as ai from 'react-icons/ai'
import * as bs from 'react-icons/bs'
import '../css/counter-section.css';
import CountUp from 'react-countup';

const CounterSection = () => {
    const [count,setCount] = useState(false);

    const countStart = ()=>{
        if(window.scrollY >= 1538){
            setCount(true);
        }else{
            setCount(false);
        }
    }
    window.addEventListener('scroll',countStart);
  return (
    <>
        <div className="counter">
            <div className="row">
                <div className="col-md-4 item">
                    <span><ai.AiOutlineUsergroupAdd /></span>
                    <div>
                        <h4>
                            {count &&
                            <CountUp start={0} end={3000} duration={3} />
}
                        </h4>
                        <span>Happy Customer</span>
                    </div>
                </div>
                <div className="col-md-4 item">
                    <span><bs.BsWallet /></span>
                    <div>
                        <h4>
                            {count &&
                            <CountUp start={0} end={320} duration={3} />
}
                        </h4>
                        <span>Projects Completed</span>
                    </div>
                </div>
                <div className="col-md-4 item">
                    <span><bs.BsCupStraw /></span>
                    <div>
                        <h4>
                            {count &&
                            <CountUp start={0} end={1000} duration={3} />
}
                        </h4>
                        <span>Cups of Cofee</span>
                    </div>
                </div>

            </div>
        </div>
    </>


  )
}

export default CounterSection