import React, {useState, useEffect, useRef, useReducer} from "react";
import { Link } from "react-router-dom";
import {GiFactory } from 'react-icons/gi';
import people from "./data";

import Try from "./try2";


    
  

const Index3 = () => {
     const [a , setA] = useState('section-head2');
     const [b , setB] = useState(false)
     const [c , setC] = useState(false)
     const [d, setD] = useState(false)
     const [e, setE] = useState(false)
     const [ac, setAC] = useState('section-head__part3-ul')
    const [ad, setAD] = useState(false)

     
     const MainRef = useRef(null)

     
     const Btn = (e) => {

      setB(true)
      
      const target = e.target.getBoundingClientRect();
      const control = (target.left + target.right) / 2;
      const bottom = target.bottom - 3;
      
      
    }

    const Btn2 = (e) => {

      setC(true)
      
      const target = e.target.getBoundingClientRect();
      const control = (target.left + target.right) / 2;
      const bottom = target.bottom - 3;
      
      
    }

    const Btn3 = (e) => {

      setD(true)
      
      const target = e.target.getBoundingClientRect();
      const control = (target.left + target.right) / 2;
      const bottom = target.bottom - 3;
      
      
    }

    const Btn4 = (e) => {

      setE(true)
      
      const target = e.target.getBoundingClientRect();
      const control = (target.left + target.right) / 2;
      const bottom = target.bottom - 3;
      
      
    }





    const Remove = () => {
     setTimeout(() => {
           setB(false)
      }, 200);

      
    }

    const Remove2 = () => {
      setTimeout(() => {
            setC(false)
       }, 10);
 
       
     }

     const Remove3 = () => {
      setTimeout(() => {
            setD(false)
       }, 10);
 
       
     }

     const Remove4 = () => {
      setTimeout(() => {
            setE(false)
       }, 10);
 
       
     }
    
    
     const SetAppear = () => {
     
      setAD(!ad)
    
    
    
    
    
    
      }
    
    
    





   
  return <div className="section2">
       
       <section className={a}>
            

           <div className="section-head2__holder">
           <div className="section-head2__part1">
              <h2 className="section-head2__h1" ><Link className = 'section-head__h1-link' to = '/'>Fibre</Link></h2>
              </div>
              <div className="section-head2__part2" >
                <ul className = 'section-head2__ul' >
                   <li className="section-head2__list" >
                     <Link className = 'section-head2__link' to = '/apartment'>browse home</Link>
                   </li>
                   <li className="section-head2__list">
                     <Link className = 'section-head2__link' to = '/patner'>list of homes</Link>
                   </li>
                   <li className="section-head2__list">
                     <Link className = 'section-head2__link' to = '/faqs'>faqs</Link>
                   </li>
                   <li className="section-head2__list">
                     <Link className = 'section-head2__link section-head__amend' to = '/login'>logins</Link>
                   </li>
                   <li className="section-head2__list section-head2__list-amend">
                     <Link className = 'section-head2__link section-head2__amend2' to = '/get-started'>get started</Link>
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




           </div>

           <div className="section-head2__main2">
                <ul className = "section-head2__ul2">
                     <li  className="section-head2__list2"  onMouseMove =  {Btn}  onMouseLeave = {Remove}>
                        
                     <div className="section-head2__list2-div1">
                              <p className="section-head2__list2-p1">
                                location
                              </p>
                              <div className="section-head2__list2-div2">
                                   {

                                     b && <Try  remove = {Remove} />

                                   }
                              </div>
                     </div>
                     </li>
                     <li className="section-head2__list3">
                     <span className="section-head2__span">entire home </span>  <div className="section-head2__line"></div>  <span className="section-head2__span2">shared home </span> 
                     </li>
                     <li className="section-head2__list2" onMouseMove =  {Btn2}  onMouseLeave = {Remove2}>
                     <div className="section-head2__list2-div1">
                              <p className="section-head2__list2-p1">
                                furnished
                              </p>
                              <div className="section-head2__list2-div2">
                                   {

                                     c && <Try2  remove = {Remove2} />

                                   }
                              </div>
                     </div>
                     </li>
                     <li className="section-head2__list2"  onMouseMove =  {Btn3}  onMouseLeave = {Remove3}>
                     <div className="section-head2__list2-div1">
                              <p className="section-head2__list2-p1">
                                price
                              </p>
                              <div className="section-head2__list2-div2">
                                   {

                                     d && <Try3  remove = {Remove3} />

                                   }
                              </div>
                     </div> 
                     </li>
                     
                     <li className="section-head2__list2"  onMouseMove =  {Btn4}  onMouseLeave = {Remove4}>
                     <div className="section-head2__list2-div1">
                              <p className="section-head2__list2-p1">
                                payment plan
                              </p>
                              <div className="section-head2__list2-div2">
                                   {

                                     e && <Try4  remove = {Remove4} />

                                   }
                              </div>
                     </div> 
                     </li>
                     
                </ul>
           </div>
     </section>


     <section className="first-body2">
       <div className="first-body2__holder">
         <div className="first-body2__main1">

           <section className="first-body2__main1-holder">

             <header className="first-body2__main1-header">

                    <article className = 'first-body2__main1-icon-holder'>
                      <GiFactory  className = 'first-body2__main1-icon' />
                         
                    </article>
                   
                   <p className="first-body2__main1-header-p">
                     <span className="first-body2__main1-header-span">
                       Let us know your preference 
                     </span>
                     so we'll alert you as new homes comes online
                   </p>
             </header>

             <article className="first-body2__main1-main">
               <section className="first-body2__main1-main-holder">

                 {

                   people.map((e) => {
                      const {id, about, more , image, location, price , avaluable} = e;

                      return <div className = 'first-body2__cannot-believe'> 

                      <figure className = 'first-body2__main1-main-figure'>
                        <img src={image} alt="" className = 'first-body2__main1-main-img' />
                        <figcaption className = 'first-body2__main1-main-fig-cap1 '>

                          <Link to = './'  className = 'first-body2__main1-main-link '>
                            join waitList
                          </Link>



                        </figcaption>
   
                          <figcaption className = 'first-body2__main1-main-fig-cap2'>{avaluable}</figcaption>
   
                      </figure> 
                      <p className="first-body2__main1-main-p1">
                            {about}
                      </p>
                      <p className="first-body2__main1-main-p2">
                            {location}
                      </p>
                      <p className="first-body2__main1-main-p3">
                            {more}
                      </p>
                      <p className="first-body2__main1-main-p4">
                            <span className="first-body2__main1-main-span"> {price}</span> rent per annum
                      </p>


                      
                      </div>

                   })










                 }














               </section>







             </article>






           </section>
              















         </div>
         <div className = 'first-body2__main2'>
               <div className="first-body2__main2-div">
               <section className="first-body2__main2-p1">
                    map
                 </section>
                 <section className="first-body2__main2-p2">
                     satellite
                 </section>
               </div>
               
         </div>

































       </div>































     </section>






























       
  </div>
}







export default Index3



const Try2 = ({remove}) => {

   
  return <aside className = 'section-head2__aside-main1'>

    <div className = 'section-head2__aside1'>
       <h3 className="section-head2__asideh3">
       Find homes that are furnished
       </h3>
       <p className="section-head2__aside1p">
       Some of our apartments are furnished, while some are available with fully equiped kithen.
       </p>
    </div>
        
    <div className="section-head2__center">
    <div className="section-head2__hold">
  <input type="checkbox" name="ratio" id=""  className="section-head2__input1"  /> <p className="section-head2__input-para1">any apartment</p>
  <input type="checkbox" name="ratio" id="" className="section-head2__input1" />  <p className="section-head2__input-para1">lekki phase 1</p>
  <input type="checkbox" name="ratio" id="" className="section-head2__input1" />  <p className="section-head2__input-para1">lekki phase 1</p>
     
   
  </div>
    </div>
    

   </aside>

}

const Try3 = ({remove}) => {

  return <aside className = 'section-head2__aside-main1'>

  <div className = 'section-head2__aside1'>
     <h3 className="section-head2__asideh3">
     Find homes that are furnished
     </h3>
     <p className="section-head2__aside1p">
     Some of our apartments are furnished, while some are available with fully equiped kithen.
     </p>
  </div>
      
  <div className="section-head2__center">
  <div className="section-head2__hold">
<input type="checkbox" name="ratio" id=""  className="section-head2__input1"  /> <p className="section-head2__input-para1">any apartment</p>
<input type="checkbox" name="ratio" id="" className="section-head2__input1" />  <p className="section-head2__input-para1">lekki phase 1</p>
<input type="checkbox" name="ratio" id="" className="section-head2__input1" />  <p className="section-head2__input-para1">lekki phase 1</p>
   
 
</div>
  </div>
  

 </aside>


}

const Try4 = ({remove}) => {

  return <aside className = 'section-head2__aside-main2'>

  <div className = 'section-head2__aside1'>
     <h3 className="section-head2__asideh3">
     Find homes with payment plans
     </h3>
     <p className="section-head2__aside1p">
     Some units have payment plans available, allowing you to pay for your home monthly or quarterly.
     </p>
  </div>
      
  <div className="section-head2__center">
  <div className="section-head2__hold">
<input type="checkbox" name="ratio" id=""  className="section-head2__input1"  /> <p className="section-head2__input-para2">Monthly payments available
(3 units)
</p>
<input type="checkbox" name="ratio" id="" className="section-head2__input1" />  <p className="section-head2__input-para2">quarterly payments available
(133 units)</p>

 
</div>
  </div>
  

 </aside>


}