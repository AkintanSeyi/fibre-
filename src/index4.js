import React, { useState } from "react";
import { Link } from "react-router-dom";
import people from "./data";
import people1 from "./data2";

import { FaTwitter } from "react-icons/fa";

import {IoLogoInstagram} from 'react-icons/io';
import {GrFacebookOption} from 'react-icons/gr'

import people2 from "./data3";

const Index4 = () => {

    const [a, setA] = useState('section-head');
    const [r , setR] = useState('fourth-body__button')
    
    const [ac, setAC] = useState('section-head__part3-ul')
    const [ad, setAD] = useState(false)

    const SetAppear = () => {
     
      setAD(!ad)
      }
    
    
    
         
   
    return <section className="section3">


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


           <section className="first-body3">

               <div className="first-body3__holder">

                   <header className="first-body3__header">


                   PARTNER WITH US



                   </header>

                   <div className="first-body3__main">
                   <div className="first-body3__line"></div>
                       <h2 className="first-body3__main-head">
                       Become a Fibre landlord today
                       </h2>

                       <p className="first-body3__main-para">
                       With access to our network of thousands of vetted professionals, Fibre is the easiest way to generate income on your rental property.
                       </p>
                        <div className="first-body3__table-holder">
                        <div className="first-body3__table">
                              <div className="first-body3__table1">
                                  <p className="first-body3__table1-p1">
                                      10
                                  </p>
                                  <p className="first-body3__table1-p2">
                                  DAYS TO RENT
                                  </p>
                              </div>
                              <div className="first-body3__table1-line1"></div>
                              <div className="first-body3__table2">
                                  <p className="first-body3__table1-p1">
                                  ₦600M
                                  </p>
                                  <p className="first-body3__table1-p3">
                                  IN RENT BOOKED FOR LANDLORDS
                                  </p>
                              </div>
                              <div className="first-body3__table1-line2"></div>
                              <div className="first-body3__table3">
                                  <p className="first-body3__table1-p1">
                                  98%
                                  </p>
                                  <p className="first-body3__table1-p2">
                                  AVERAGE OCCUPANCY
                                  </p>
                              </div>
                         </div>
                        </div>

                   </div>

               </div>

           </section>

          











           <section className="second-body3">
               <div className="second-body3__holder">
                  <section className="second-body3__main1">
                  <div className="second-body3__main1-holder">


                      <header className="second-body3__main1-head">
                     <h2 className="second-body3__main1-h2">
                     Fibre finds you the best tenants, faster
                     </h2>
                      </header>

                      <section className="second-body3__main1-body" >
                          {
                              people1.map((e) => {
                                  const {head, head2} = e;

                                  return <div className="second-body3__cannot-believe2">
                                      <h2 className="second-body3__main1-body-h2">{head}</h2>
                                      <p className="second-body3__main1-body-p">{head2}</p>


                                  </div>

                              })
                          }

                          <p className="second-body3__main1-body-link-hold">
                              <Link to = '/faqs' className="second-body3__main1-body-link">
                                    Start listing your property now 
                              </Link>
                          </p>





                      </section>

                   </div>
    


                  </section>


                  <section className="second-body3__main2">

                      
                  <div className="second-body3__main2-holder">


                  <img className="second-body3__main2-img" src="https://fibre.ng/242679ca8af67478a9464321d33df761.png" alt="" />


                  </div>

                  </section>





               </div>



             </section>

             <section className="third-body3">

                 <div className="third-body3__holder">
                    <header className="third-body3__main1">
                    <h2 className="third-body3__h2">

How to partner with Fibre


</h2>

<p className="third-body3__head-p">
Take your property from vacant to occupied in four easy steps
</p>


                    </header>

                    <div className="third-body3__main2">

                     <section className="third-body3__main2-holder">

                         {



                people2.map((e) => {
                         

                    const {number, head, para} = e;


                    return <div className="third-body3__cannot-believe3">
                       <section className="third-body3__cannot-believe3-holder">
                       <p className="third-body3__main2-num">{number}</p>
                        <h2 className="third-body3__main2-head">{head}</h2>
                        <p className="third-body3__main2-para1">{para}</p>
                       </section>
                    </div>


                })
                              














                         }





                        




                      </section>
                    </div>
                 </div>
             </section>

             <section style = {{backgroundColor: 'transparent'}} className="fifth-body">
                 <div className="fifth-body__holder">
                   <h2 className="fifth-body__h2">






                   Ready to list your property?








                   </h2>

                   <p className="fifth-body__para">
                   Complete our 5-minute intake form to join our partner landlords who have earned over ₦600M in rental income from the best tenants in Nigeria.
                   </p>
                     


                     
                   <button style ={{width: '10rem' }} className = {r} >
                         start listing
                        </button>











                 </div>

















            </section>

            <footer className = 'footer'>

              

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






export default Index4