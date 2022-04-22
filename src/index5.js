import React, { useReducer, useState } from "react";
import { Link } from "react-router-dom";
import people4 from "./data4";
import { FaTwitter } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import {IoLogoInstagram} from 'react-icons/io';



const Index5 = () => {

    const setFunction = {
        b: true,
        c: true,
        d: true,
        e: true,
        f: true,
        g: true,
        h: true,
        i: true

    }
    
    const reducer = (state, action) => {

        if (action.type === 'JAY' ) {
             let r = !state.b;
             return {c: true, d: true , h: true , g: true , i: true, b : r, e: true,f: true}
            

        }

        if (action.type === 'JAY2') {
            let r = !state.c;
            return {b: true, d: true , h: true, g: true , i: true, c : r, e: true,f: true}
        }

        if (action.type === 'JAY3') {
            let r = !state.d;

            return {b:true, c: true  , h: true, g: true , i: true, d : r, e: true,f: true}
        }

        if (action.type === 'JAY4') {
            let r = !state.e;
            return {b: true, c: true , h: true , g: true , i: true, d: true, e: r, f: true}

        }

        if (action.type === 'JAY5') {
            let r = !state.f;
            return {b: true, c: true , h: true , g: true , i: true, d: true, e: true, f: r}
        }

        if (action.type === 'JAY6') {
            let r = !state.g
            return {b: true, c: true, h: true, d: true, e: true , i: true, f: true, g : r}
        }

        if (action.type === 'JAY7') {
            let r = !state.h
            return {b: true, c: true, d: true, e: true, f: true , i: true, g : true, h: r}
        }

        if (action.type === 'JAY8') {
            let r = !state.i;
            return {b: true, c: true, d: true, e: true, f: true, g : true, h: true, i : r}
        }








        return state

    }



    const [a, setA] = useState('section-head');
   
    const [ac, setAC] = useState('section-head__part3-ul')
    const [ad, setAD] = useState(false)
    const [state, dispatch] = useReducer(reducer, setFunction)

   


    const SetAppear = () => {
     
      setAD(!ad)
    
    
    
    
    
    
      }
    
    





    return <section className="section4">
          <section className={a}>
              <div className="section-head__part1">
              <h2 className="section-head__h1" ><Link className = 'section-head__h1-link' to = '/'>Fibre</Link></h2>
              </div>
              <div className="section-head__part2" >
                <ul className = 'section-head__ul' >
                   <li className="section-head__list">
                     <Link className = 'section-head__link' to = '/apartment'>browse home</Link>
                   </li>
                   <li className="section-head__list">
                     <Link className = 'section-head__link' to = '/patner'>list of homes</Link>
                   </li>
                   <li className="section-head__list">
                     <Link className = 'section-head__link' to = '/faqs'>faqs</Link>
                   </li>
                   <li className="section-head__list">
                     <Link className = 'section-head__link section-head__amend' to = '/login'>logins</Link>
                   </li>
                   <li className="section-head__list section-head__list-amend">
                     <Link className = 'section-head__link section-head__amend2' to = '/get-started'>get started</Link>
                   </li>
                  
                   
                </ul> 
              </div>

              <div className="section-head__part3">
                <section className="section-head__part3-holder">
                  <p className="section-head__part3-p" onClick = {SetAppear}>
                          
                  </p>
                  <ul className = {ad ? ac :  'section-head__part3-ul-block'} >
                   <li className="section-head__part3-list">
                     <Link className = 'section-head__part3-link' to = '/apartment'>Browse home</Link>
                   </li>
                   <li className="section-head__part3-list">
                     <Link className = 'section-head__part3-link' to = '/patner'>List of homes</Link>
                   </li>
                   <li className="section-head__part3-list">
                     <Link className = 'section-head__part3-link' to = '/faqs'>Faqs</Link>
                   </li>
                   <li className="section-head__part3-list">
                     <Link className = 'section-head__part3-link section-head__part3-amend' to = '/login'>Logins</Link>
                   </li>
                   <li className="section-head__part3-list2 section-head__list-amend">
                     <Link className = 'section-head__part3-link1 section-head__part3-amend2' to = '/get-started'>Get started</Link>
                   </li>
                  
                   
                </ul> 


                </section>
              </div>







           </section>



           <section className="header-part">
               <div className="header-part__holder">
                   <h2 className="header-part__h2">
                   Frequently Asked Questions       
                   </h2>
               </div>
           </section>


           <section className="first-body4">



               <div className="first-body4__holder">
 
                     <div className="first-body4__main">

                         
                   <section className="first-body4__main-part1">

<div className="first-body4__main-part1-holder">

    <section className="first-body4__main-part1-first">
            
            <h2 className="first-body4__main-part1-h2">
            General
            </h2>



    </section>

    
    <section className="first-body4__main-part1-second">
             
            <div className="first-body4__main-part1-second-holder">
            <section className="first-body4__main-part1-second-part1">
                <div className="first-body4__main-part1-second-part1-holder">
                <h2  onClick = {() =>dispatch({type: 'JAY'})}  className="first-body4__h2">
                 what is fibre 

</h2>
<p className={state.b ? "first-body4__para" : "first-body4__para1"}>
Fibre is the most secure and convenient online platform through which Nigerians can find and pay for rental accommodation. In a rental market where it takes over 200 days to find a home and for which customers have to pay up to two years rent in cash upfront, Fibre vets homes and makes it possible for young professionals to find these homes in under 7 days and pay more conveniently.
</p>
                </div>
                
                 </section>

                 <section className="first-body4__main-part1-second-part2">
                 <div className="first-body4__main-part1-second-part2-holder">
                 <h2   onClick = {() => dispatch({type: 'JAY2'})} className="first-body4__h2">
                 does fibre gives loan

</h2>
<p className= {state.c ? "first-body4__para" : "first-body4__para1"}>
While we are not a financial institution, we offer our members "Payment Plans". With our payment plans members can pay quarterly or monthly on eligible properties.
    
</p>         
</div>
                 </section>

                 <section   className="first-body4__main-part1-second-part3">
                 <div className="first-body4__main-part1-second-part2-holder">
                 <h2 onClick = {() => dispatch({type: 'JAY3'})} className="first-body4__h2">

                 does fibre own the property they rent

</h2>
<p  className=  {state.d ? "first-body4__para" : "first-body4__para1"} >
In most cases, we do not own the property that we rent. We partner with landlords and serve as an agent, helping them find a suitable occupant of their property. We also receive and remit rental income on behalf of our partner Landlords.
</p>
</div>
                 </section>

                 <section  className="first-body4__main-part1-second-part4">
                 <div className="first-body4__main-part1-second-part2-holder">
                 <h2 onClick = {() => dispatch({type: 'JAY4'})} className="first-body4__h2">
                 is fibre a short-let services
</h2>
<p className={state.e ? "first-body4__para" : "first-body4__para1"}>
No, Fibre isn't a short let service. Although, we offer monthly and quarterly Payment Plans you can only choose between 6 and 12 month durations
</p>

</div>
                 </section>

                 <section  className="first-body4__main-part1-second-part5">
                 <div className="first-body4__main-part1-second-part2-holder">
                 <h2 onClick = {() => dispatch({type: 'JAY5'})} className="first-body4__h2">
                 is fibre a facility management company
</h2>
<p className={state.f ?  "first-body4__para" : "first-body4__para1"}>
No, Fibre does not manage Facilities. We often recommend Facility Management companies to our partner landlords. These companies are responsible for repairs and maintenance in the property.
</p>

</div>
                 </section>


                 <section  className="first-body4__main-part1-second-part6">
                 <div className="first-body4__main-part1-second-part2-holder">
                 <h2 onClick = {() => dispatch({type: 'JAY6'})} className="first-body4__h2">
                 how does electricity get billed by fibre
</h2>
<p className= {state.g ? "first-body4__para" : "first-body4__para1"}>
The electricity billing system varies for each property. Electricity bills will be calculated through either pre-paid or post-paid metres where available. However, in some cases other methods may be used. We always communicate to you how the Facility (or Power) Management Company will calculate electricity.
</p>

</div>
                 </section>


                 <section  className="first-body4__main-part1-second-part7">
                 <div className="first-body4__main-part1-second-part2-holder">
                 <h2 onClick = {() => dispatch({type: 'JAY7'})} className="first-body4__h2">

                 what kind of house do fibre offer

</h2>
<p className={state.h ? "first-body4__para" : "first-body4__para1"}>
   
'We offer a mix of shared and entire homes. Members can choose to live in a private ensuite room in a shared home. This makes living costs more affordable for young professionals, as the cost of an entire house is split amongst all the occupants.

    
</p>

</div>
                 </section>

                 
                 <section    className="first-body4__main-part1-second-part8">
                 <div style = {{borderBottom: 'none'}} className="first-body4__main-part1-second-part2-holder">
                 <h2 onClick = {() =>dispatch({type: 'JAY8'})} className="first-body4__h2">

                 can i use fibre at my current apartment
</h2>
<p className={state.i ? "first-body4__para" : "first-body4__para1"}>
   
No, Fibre is only available at homes which we have vetted and in which we have a contract with the landlord  
</p>
</div>
                 </section>






            </div>
        


    </section>
    







</div>







</section>



















                     </div>























               </div>



























           </section>

           <footer style = {{ marginTop: '3rem'}} className = 'footer'>

              

<div className="footer__holder">

   
   <div className="footer__main1">
     
     <h2 className="footer__head">
        fibre
     </h2>

     <p className="footer__para1">
     A better way to rent in Lagos.
     </p>

     <p className="footer__para2">
     Give us a call:<span  className="footer__span">+234 818 000 0954</span> 
     <p className="footer__para2">  Email support:<span  className="footer__span"> info@fibre.ng</span> </p>
     </p>

     <div className="footer__icon-holder">
     <FaTwitter className = 'footer__icon-twitter' />
    <GrFacebookOption  className = 'footer__icon-facebook' />
     <IoLogoInstagram className = 'footer__icon-instagram' />
     </div>  




   </div>

   <div className="footer__main2">
     
       <div className="footer__main2-1">
             <ul className="footer__main2-ul1">
               <li className="footer__main2-li1">
                 company
               </li>

               <li className="footer__main2-li2">
                  <Link className = 'footer__link' to = '/faqs'>
                    about
                  </Link>
               </li>

               <li className="footer__main2-li3">
                  <Link  className = 'footer__link'  to = '/faqs'>
                   careers
                  </Link>
               </li>
             </ul>
       </div>

       <div className="footer__main2-2">
          <ul className="footer__main2-ul2">
               <li className="footer__main2-li4">
                  discover
               </li>

               <li className="footer__main2-li5">
                  <Link  className = 'footer__link'  to = '/faqs'>
                   browse home
                  </Link>
               </li>

               <li className="footer__main2-li6">
                  <Link  className = 'footer__link'  to = '/faqs'>
                  frequently asked questions
                  </Link> 
               </li>
               <li className="footer__main2-li7">
                  <Link  className = 'footer__link' to = '/faqs'>
                  for landlords
                  </Link>
               </li>
             </ul>
         
         </div>




   </div>



















</div>
</footer>

    </section>

}



export default Index5;