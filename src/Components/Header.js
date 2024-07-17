import React from "react";
import img from "../assets/logo.png";
import img2 from "../assets/puzzle-piece.png"
const Header = () => {
  return (
    <div className="header" id="myHeader">
      <div style={{display:"flex",flexDirection:"column",height:"60px"}}>
        <img src={img2} alt="" className="image" style={{rotate:"90deg"}} />
        <img src={img2} alt="" className="image" style={{rotate:"120deg"}} />
        <img src={img2} alt="" className="image" style={{rotate:"-30deg"}} />
        <img src={img2} alt="" className="image" style={{rotate:"-20deg"}} />
      </div>
      <div style={{display:"flex",flexDirection:"column",height:"60px"}}>
        <img src={img2} alt="" className="image" style={{rotate:"-90deg"}} />
        <img src={img2} alt="" className="image" style={{rotate:"-120deg"}} />
        <img src={img2} alt="" className="image" style={{rotate:"30deg"}} />
        <img src={img2} alt="" className="image" style={{rotate:"20deg"}} />
      </div>
      
      <div style={{display:"flex",flexDirection:"column",height:"60px"}}>
        <img src={img2} alt="" className="image" />
        <img src={img2} alt="" className="image" style={{rotate:"180deg"}} />
      </div>
      <div style={{display:"flex",flexDirection:"column",height:"60px"}}>
        <img src={img2} alt="" className="image" style={{rotate:"-90deg"}} />
        <img src={img2} alt="" className="image" style={{rotate:"-120deg"}} />
        <img src={img2} alt="" className="image" style={{rotate:"30deg"}} />
        <img src={img2} alt="" className="image" style={{rotate:"20deg"}} />
      </div>
      <div style={{display:"flex",flexDirection:"column",height:"60px"}}>
        <img src={img2} alt="" className="image" style={{rotate:"40deg"}} />
        <img src={img2} alt="" className="image" style={{rotate:"-60deg"}} />
        <img src={img2} alt="" className="image" />
      </div>
      <div style={{display:"flex",flexDirection:"column",height:"60px"}}>
        <img src={img2} alt="" className="image" />
        <img src={img2} alt="" className="image" />
      </div>
      <div style={{display:"flex",flexDirection:"column",height:"60px"}}>
        <img src={img2} alt="" className="image" />
      </div>
      <div style={{display:"flex",flexDirection:"column",height:"60px"}}>
        <img src={img2} alt="" className="image" />
        <img src={img2} alt="" className="image" style={{rotate:"-180deg"}} />
        <img src={img2} alt="" className="image" />
      </div>
      <div style={{display:"flex",flexDirection:"column",height:"60px"}}>
        <img src={img2} alt="" className="image" style={{rotate:"-70deg"}} />
      </div>
      <div style={{display:"flex",flexDirection:"column",height:"60px"}}>
        <img src={img2} alt="" className="image" style={{rotate:"-90deg"}} />
      </div>
      <div style={{display:"flex",flexDirection:"column",height:"60px"}}>
        <img src={img2} alt="" className="image" style={{rotate:"-180deg"}} />
      </div>
     
    {/* main logo */}
      <div className="main-logo">
        <img src={img} alt="" />
      </div>
      <div style={{display:"flex",flexDirection:"column",height:"60px"}}>
        <img src={img2} alt="" className="image" />
        <img src={img2} alt="" className="image" style={{rotate:"-90deg"}} />
      </div>
      <div style={{display:"flex",flexDirection:"column",height:"60px"}}>
        <img src={img2} alt="" className="image" />
        <img src={img2} alt="" className="image" style={{rotate:"180deg"}} />
        <img src={img2} alt="" className="image" />
      </div>
      <div style={{display:"flex",flexDirection:"column",height:"60px"}}>
        <img src={img2} alt="" className="image" style={{rotate:"-90deg"}} />
      </div>
      <div style={{display:"flex",flexDirection:"column",height:"60px"}}>
        <img src={img2} alt="" className="image" style={{rotate:"90deg"}} />
      </div>
      <div style={{display:"flex",flexDirection:"column",height:"60px"}}>
        <img src={img2} alt="" className="image" />
      </div>
      <div style={{display:"flex",flexDirection:"column",height:"60px"}}>
        <img src={img2} alt="" className="image" />
        <img src={img2} alt="" className="image" style={{rotate:"120deg"}} />
      </div>
      <div>
        <img src={img2} alt="" className="image" style={{rotate:"50deg"}} />
        <img src={img2} alt="" className="image" />
      </div>
      <div style={{display:"flex",flexDirection:"column",height:"60px"}}>
        <img src={img2} alt="" className="image" />
        <img src={img2} alt="" className="image" style={{rotate:"10deg"}} />
      </div>
      <div>
        <img src={img2} alt="" className="image" style={{rotate:"20deg"}} />
        <img src={img2} alt="" className="image" />
      </div>
    </div>
  );
};

export default Header;
