import React from 'react'
import './Form.css'
const Form = () => {
  return (<><div id='wh'>
    <div id='fhead'> Join Us</div>
    <form id='fwork'
    method="POST" 
    action="https://script.google.com/macros/s/AKfycbwgwRUxxL-pG8Knas8UGSi-5tr5hoORkChd-WF-ot8q2lsKNM2bIZwr2PRr0cXwizJqaw/exec"
  >
    <label id='lemail'>Email : </label>
    <input name="Email" type="email" placeholder="Email" required id='email'/><br/>
    <label id='lname'>Name : </label>
    
    <input name="Name" type="text" placeholder="Name" required id='name'/><br/>
    <label id='lnumber'> Number : </label>
    <input name='Integer' type='integer' placeholder='Number' required id='integer'/><br/>
    <div>
      <input type="radio" id="contactChoice1" name="contact" value="chef" />
      <label for="contactChoice1">Chef</label>

      <input type="radio" id="contactChoice2" name="contact" value="employee" />
      <label for="contactChoice2">Employee</label>

    </div>
    <label id='lnumber4'> Number of Referral: </label>
    <input name="Referral" type="text" placeholder="Refferal Phone Number" id='name'/><br/>
    
    <div>
    </div>
    <button  type="submit" id='send'>Submit</button>
  </form>
  </div>
  </>
  )
}

export default Form