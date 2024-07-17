import React, { useEffect, useState } from 'react'
import img from "../assets/puzzle-piece.png";

const Home = () => {
    const [color00,setColor00]=useState("white");
    const [color01,setColor01]=useState("white");
    const [color02,setColor02]=useState("white");
    const [color10,setColor10]=useState("white");
    const [color11,setColor11]=useState("white");
    const [color12,setColor12]=useState("white");
    const [color20,setColor20]=useState("white");
    const [color21,setColor21]=useState("white");
    const [color22,setColor22]=useState("white");
    const [arr , setArr] = useState([]);
    const handleClick = () =>{
        setArr(Array.from(new Set(arr))); 
        for (let i = 0; i < arr.length; i++) {
            if(arr[i]==="00"){
                setTimeout(() => {
                    setColor00("orange");
                }, (i+1)*1000);
            }   
            if(arr[i]==="01"){
                setTimeout(() => {
                    setColor01("orange");
                }, (i+1)*1000);
            }   
            if(arr[i]==="02"){
                setTimeout(() => {
                    setColor02("orange");
                }, (i+1)*1000);
            }   
            if(arr[i]==="10"){
                setTimeout(() => {
                    setColor10("orange");
                }, (i+1)*1000);
            }   
            if(arr[i]==="11"){
                setTimeout(() => {
                    setColor11("orange");
                }, (i+1)*1000);
            }   
            if(arr[i]==="12"){
                setTimeout(() => {
                    setColor12("orange");
                }, (i+1)*1000);
            }   
            if(arr[i]==="20"){
                setTimeout(() => {
                    setColor20("orange");
                }, (i+1)*1000);
            }   
            if(arr[i]==="21"){
                setTimeout(() => {
                    setColor21("orange");
                }, (i+1)*1000);
            }   
            if(arr[i]==="22"){
                setTimeout(() => {
                    setColor22("orange");
                }, (i+1)*1000);
            }   
        }
    }
  return (
    <>
    <div className='home'>
        <section>
            <div className='row'>
                <div>
                        <div className='container shadow-out'>
                            <div className="row">
                                <div className="col shadow-in" style={{backgroundColor:color00}} onClick={
                                    ()=>{
                                        setColor00("greenyellow");
                                        arr.push("00");
                                        if(arr.length===9){
                                            handleClick();
                                        }
                                    }
                                }></div>
                                <div className="col shadow-in" style={{backgroundColor:color01}} onClick={
                                    ()=>{
                                        setColor01("greenyellow");
                                        arr.push("01");
                                        if(arr.length===9){
                                            handleClick();
                                        }
                                    }
                                }></div>
                                <div className="col shadow-in" style={{backgroundColor:color02}} onClick={
                                    ()=>{
                                        setColor02("greenyellow");
                                        arr.push("02");
                                        if(arr.length===9){
                                            handleClick();
                                        }
                                    }
                                }></div>
                            </div>
                            <div className="row">
                                <div className="col shadow-in" style={{backgroundColor:color10}} onClick={
                                    ()=>{
                                        setColor10("greenyellow");
                                        arr.push("10");
                                        if(arr.length===9){
                                            handleClick();
                                        }
                                    }
                                }></div>
                                <div className="col shadow-in" style={{backgroundColor:color11}} onClick={
                                    ()=>{
                                        setColor11("greenyellow");
                                        arr.push("11");
                                        if(arr.length===9){
                                            handleClick();
                                        }
                                    }
                                }></div>
                                <div className="col shadow-in" style={{backgroundColor:color12}} onClick={
                                    ()=>{
                                        setColor12("greenyellow");
                                        arr.push("12");
                                        if(arr.length===9){
                                            handleClick();
                                        }
                                    }
                                }></div>
                            </div>
                            <div className="row">
                                <div className="col shadow-in" style={{backgroundColor:color20}} onClick={
                                    ()=>{
                                        setColor20("greenyellow");
                                        arr.push("20");
                                        if(arr.length===9){
                                            handleClick();
                                        }
                                    }
                                }></div>
                                <div className="col shadow-in" style={{backgroundColor:color21}} onClick={
                                    ()=>{
                                        setColor21("greenyellow");
                                        arr.push("21");
                                        if(arr.length===9){
                                            handleClick();
                                        }
                                    }
                                }></div>
                                <div className="col shadow-in" style={{backgroundColor:color22}} onClick={
                                    ()=>{
                                        setColor22("greenyellow");
                                        arr.push("22");
                                        if(arr.length===9){
                                            handleClick();
                                        }
                                    }
                                }></div>
                            </div>
                        </div>
                        <button className='shadow-out' onClick={()=>window.location.reload()} >Reset</button>
                </div>
            </div>
        </section>
        <section >
            <div className='details'>
                <div className='about' >
                    <div className='detail-heading'>About</div>
                    <div className='description shadow-left' >
                        This matrix game is a sequence following game. It traces the path that you have covered one-by-one until the last box. And then it will follow the same path by changing the color.
                    </div>
                </div>
                <div className='detail'>
                    <div className='count'>I</div>
                    <div className='desc'>First you will have to select all the boxes that are present in cube.</div>
                </div>
                <div className='detail'>
                    <div className='count'>II..</div>
                    <div className='desc'>You can also remember the sequence that you followed in filling these boxes with green color</div>
                </div>
                <div className='detail'>
                    <div className='count'>III.</div>
                    <div className='desc'>After filling boxes when you fill the last remaining box the automatic filling of the boxes with orange color will began.</div>
                </div>
                <div className='detail'>
                    <div className='count'>IV</div>
                    <div className='desc'>This automatic filling will follow the exact sequence that you have followed when you were filling them with green color.</div>
                </div>
            </div>
        </section>
    </div>
    </>
  )
}

export default Home
