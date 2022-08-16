import React from "react"
import html2canvas from 'html2canvas';
import QRCode from "react-qr-code"
import { useState } from "react";
import "./index.css"

const Generate = () => {
    const printRef = React.useRef();
  const [fname, setfname] = useState('');
  const [lname, setlname] = useState('');
  const [id, setid] = useState('');
  const handleDownloadImage = async (e) => {
    e.preventDefault();
    const element = printRef.current;
    const canvas = await html2canvas(element);

    const data = canvas.toDataURL('image/jpg');
    const link = document.createElement('a');

    if (typeof link.download === 'string') {
      link.href = data;
      link.download = 'image.jpg';

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(data);
    }
  };
  

  return (
    <div className="Generate">
      <h2>Add your info</h2>
      <form>
        <label>Add your first name:</label>
        <input 
          type="text" 
          required 
          value={fname}
          onChange={(e) => setfname(e.target.value)}
        />
        <label>Add your last name:</label>
        <input
        type="text"
          required
          value={lname}
          onChange={(e) => setlname(e.target.value)}
        />
        <label>Add your id :</label>
        <input
          type="text"
          required
          value={id}
          onChange={(e) => setid(e.target.value)}
        />
        <button type="buttton" onClick={handleDownloadImage}>Download QR </button>
        <div id="qrcode" ref={printRef}>
        <QRCode value={"first name is "+fname+" last name is "+lname+" and the id is "+id } />
        </div>
        </form>
       </div>
  )
       } 
 
export default Generate;






