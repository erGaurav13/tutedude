import refer from "../CSS/refer.module.css";



export const ReferAndEarn=()=>{
    return <div id={refer.container}>
         <p>ui/ux {">"} Refer & Earn</p>
     
       <div id={refer.firstBox}>
          <div id={refer.f_left_box}>
                   <div id={refer.f_left_box_inner}>  
                         <div className={refer.number}>
                            <p>Referral Earning</p>
                            <p>₹ 2,500</p>
                         </div>
                         <div className={refer.number}>
                            <p>Total Referrals</p>
                            <p>7</p>
                         </div>
                         <div className={refer.number}>
                            <p>Wallet Balance</p>
                            <p>₹ 500</p>
                         </div>
                   </div>
                   <div >
                    <button id={refer.btn}>Withdraw Balance</button>

                   </div>
          </div> 
    
         <div id={refer.f_right_box}>
                  <p>Your Referral Code </p>
                  <p>EDCH54</p>
        </div>
       
        </div>
    </div>
}