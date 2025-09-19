import React from "react";      

import Button from "@/components/atoms/buttons";
import Heading from "@/components/atoms/headings";
import Description from "@/components/atoms/description";
const AboutUs = () => { return (

<>
    
    
    <section>
        
        
      <div className="mx-auto max-w-7xl px-10">


        <div className="  flex   gap-16 ">
 <div className="flex gap-2">
  <div className="w-[9px] h-[9px] mt-2 rounded-full bg-[#E47817] align-baseline"></div>
  <h3 className=" font-normal text-[20px] whitespace-nowrap">WHO WE ARE</h3>
  
</div>
         
         
          <Heading text="Pixeative design studio is a full-service creative agency blending strategy, innovation, and design to build powerful brand experiences. Since 2020, we’ve helped businesses stand out with future-ready, emotionally engaging, and results-driven solutions." size="medium" className=" !text-[46px]" />   


      </div>
        <div className="" >
    <div className="flex justify-end">
      <div className="flex flex-col items-start gap-10" style={{ maxWidth: 412 }}>
        <Description text="Started in 2020, Pixeative has grown from a bold idea into a full-scale creative force. With 15+ successful collaborations, we’ve crafted stories that move people and elevate brands. We're passionate about design that resonates—and lasts." />
        <Button text=" More About Us" className="" />
      </div>
    </div>
  </div>
    
        </div>
        </section>

        <section>



        </section>
    </>


)


    
 }
 export default AboutUs