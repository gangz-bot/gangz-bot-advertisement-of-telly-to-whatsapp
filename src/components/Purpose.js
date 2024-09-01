import "./purpose.css"
import leftimg from "../backimg/WhatDo-list-left-img.jpg"
import rightimg from "../backimg/WhatDo-list-right-img.jpg"
import centerimg from "../backimg/WhatDo-list-center-img.jpg"

function Purpose(){
    return(
        <>
        
        <div className="WhatDo">
            <h1>What We Do</h1>
            </div> 
            <div className="WhatDo-list">
            <div className="WhatDo-list-left">
                <h4>Create GST Bills for customers and share them online</h4>
                <p>trekOtour billing software helps you set up a professional brand identity with useful GST billing features. Unlike most accounting softwares, trekOtour enables you to create invoices within minutes. The best part is that your won't require hours of rigorous training as it is an easy process.</p>
                </div> 
                <div className="leftimg1">
                <img src={leftimg}  alt="gst" />
                </div>
            </div> 



            <div className="WhatDo-list2">
            <div className="WhatDo-list-center">
                <h4>Create GST Bills for customers and share them online</h4>
                <p>trekOtour billing software helps you set up a professional brand identity with useful GST billing features. Unlike most accounting softwares, trekOtour enables you to create invoices within minutes. The best part is that your won't require hours of rigorous training as it is an easy process.</p>
                </div> 
                <div className="centerimg1">
                <img src={centerimg}  alt="gst" />
                </div>
            </div> 



            <div className="WhatDo-list3">
            <div className="WhatDo-list-right">
                <h4>Create GST Bills for customers and share them online</h4>
                <p>trekOtour billing software helps you set up a professional brand identity with useful GST billing features. Unlike most accounting softwares, trekOtour enables you to create invoices within minutes. The best part is that your won't require hours of rigorous training as it is an easy process.</p>
                </div> 
                <div className="rightimg1">
                <img src={rightimg}  alt="gst" />
                </div>
            </div> 
           
        
        </>
    );
}

export default Purpose;