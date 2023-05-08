import React from "react";
import "./App.css";

const SlotM = (props) => {
    // let x = '😀';
    // let y = '😀';
    // let z = '😘';

    if((props.x===props.y) && (props.y===props.z)){
      return (
        <>
        <div className="slot_inner">
              <h1>
                {" "}
                {props.x} {props.y} {props.z} {" "}
                </h1>
                <h1> This is Matching </h1>
        </div>
        </>
      )
    }else{
        return (
            <>
            <div className="slot_inner">
            <h1>
                {" "}
                {props.x} {props.y} {props.z} {" "}
                </h1>
                    <h1> Try again with best wishes</h1>
            </div>
            </>
          ) 
    }
}

const SlotMachine = () => {
    return (
         <>
        <h1 className='hed'> 🎰  Welcome To <span className="main-hd"> Slot Machine </span> 🎰 </h1>
        <hr></hr>

           <h6 className='hed'>
            <SlotM x = '😀' y = '😀' z = '😀' />
            <hr></hr>
            <SlotM x = '😀' y = '😁' z = '😀' />
            <hr></hr>
            <SlotM x = '😀' y = '😀' z = '😛' />
            <hr></hr>
            <SlotM x = '🍕' y = '🍟' z = '🌮' />
            <hr></hr>
            <SlotM x = '🍓' y = '🍓' z = '🍓' />
            <hr></hr>
            </h6>

         </> 
    );
}

export default SlotMachine;