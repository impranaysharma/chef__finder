import React from 'react'
import "./Pos.css"
import pos1 from "../assests/pos1.webp"
import pos2 from "../assests/pos2.webp"
import pos3 from "../assests/pos3.webp"
import pos4 from "../assests/pos4.webp"

const Pos = () => {
  return (<>
  <div className='wpos'>
    <div id='poshead'>A restaurant POS made for all your needs</div>
    <div id='posline'> A quick and easy-to-use restaurant billing software that <br/>makes managing high order volumes butter smooth</div>
    <br/><br/>
   <div className='v1'>
    <div className='h1'>
        <img src={pos1} id='pos1'/>
    
    <div><div className='v11'><div id='pos1h'>A quick 3-click restaurant billing software</div><div id='pos1l'>Take orders, punch bills and generate KOT. Accept payments either by splitting bill or merging tables. Easily apply discounts and coupons. All of this, and more, is easy and quick with Petpooja's restaurant POS.</div></div></div></div>
    <div className='h2' > <img src={pos2} id='pos2' /><div><div id='pos2h'>Restaurant Inventory management made easier</div><div id='pos2l'>Do inventory management the smart way. Put your inventory on the item-wise auto deduction, get low-stock alters, day-end inventory reports and more with Petpooja restaurant POS</div></div></div>
   <div className='h3'><img src={pos3} id='pos3'/><div><div id='pos3h'> Get real-time restaurant Reports</div><div id='pos3l'>Automate your restaurant reports and go paper free! Let Petpooja POS automatically track your business activities and provide you error free reports on your restaurant’s day-end sales, online orders, staff actions, inventory consumption, and various 80+ essential business reports</div>
   </div>
   </div>
   <div className='h4'><img src={pos4} id='pos4'/><div><div id='pos4h'> A single Online Ordering System to manage all your orders</div><div id='pos4l'>Accept online orders, manage online menu, mark food ready, collect payment and check revenue without shuffling between multiple screens</div></div>
   
   
   
   </div>
   </div>
   </div>
    </>
  )
}

export default Pos