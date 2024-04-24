import React from 'react';
import bny from "../../Components/Assets/bnyComp.jpg";
import bnyimg from "../../Components/Assets/BNY.png";

const Bny = () => {
  return (
    <div className='bnyy' style={{ display: 'flex', flexDirection:"column", alignItems: 'center', margin:"10px", textDecoration:"none" }}>
        <div className="bny-intro" style={{ display: 'flex', alignItems: 'center' }}>
           <img src={bny} alt="" style={{ height: '400px', marginRight: '10px' }} />
           <p style={{ fontSize: '30px', marginLeft:'10px' }}>
           -  multinational universal bank. Barclays operates as two divisions, Barclays UK and Barclays International, supported by a service company, Barclays Execution Services.<br />
               <br />Company type: <b>Software</b>
           </p>
        </div>
        <div className='Stats' >
          <h2>Stats of Students placed in last 5 years</h2>
          <img src={bnyimg} alt="" style={{ height: '400px',display: 'flex', alignItems: 'center' }} />
        </div>
        <div>
            <p style={{ fontSize: '40px', marginLeft:'10px', textAlign: 'center' }}>
                Selection criteria: <b>7 / 7.5 GPA</b><br />
                No of students Placed total : <b>24</b><br />
                Packages: <b>9.69- 13.40 LPA</b><br />
            </p>
        </div>
    </div>
  );
};

export default Bny;