import React, {useState, useEffect, useRef, useReducer} from "react";
import { Link } from "react-router-dom";

const Index7 = () => {
    const [a, setA] = useState('section-head');
    const [b , setB] = useState('')
    const [c, setC] = useState('')

    
    const [ac, setAC] = useState('section-head__part3-ul')
    const [ad, setAD] = useState(false)

    const SetAppear = () => {
     
      setAD(!ad)
      }
    











    return (
        <section className="section7">
          <div>
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

          
           <section style = {{padding: '3rem'}} className="first-body5">
           <div className="first-body5__holder">
           <div className="first-body5__div">
           
                  <section className="first-body5__div-holder">
                      
             
              <header className="first-body5__header">
                   <h2 className="first-body5__header-h2">

                   Sign up


                   </h2>

                   <p className="first-body5__header-p">
                   One step closer to finding your next home.


                   </p>
               </header>

             
                     <form  className="first-body5__form">
                     <input type="text" 
                      className = 'first-body5__input1'
        value = {b} 
        name = 'text' 
        placeholder = 'firstname' 
        onChange = {(e) => setB(e.target.value)}
        id = 'text' />
        
        <br /> 

            <input type="text" 
             className = 'first-body5__input1'
            name = 'text' 
            placeholder = 'lastname' 
            id = 'text' 
            value = {c} 
            onChange = {(e) => setC(e.target.value) } />
            <br />
            
            <input type="text" 
             className = 'first-body5__input1'
            name = 'text' 
            placeholder = 'email' 
            id = 'text' 
            value = {c} 
            onChange = {(e) => setC(e.target.value) } />
            <br />
            
            <input  type="text" 
             className = 'first-body5__input1'
            name = 'text' 
            placeholder = 'password' 
            id = 'text' 
            value = {c} 
            onChange = {(e) => setC(e.target.value) } />
            <br />
                 
                 <button style = {{display: 'flex' , alignItems: 'center', 
                 justifyContent: 'center' }}  className = 'first-body5__btn' type="submit">sign up </button>
                 <p style = {{display: 'none'}} className="first-body5__btn-p">forget password?</p>
                     </form>
                     <div className="first-body5__or">
                     <div className="first-body5__line"></div>
                     <p className="first-body5__p">or </p>
                     <div className="first-body5__line2"></div>
                     </div>

                     <div style = {{backgroundColor: 'white' , color: 'black', 
                      
                       }}  className="first-body5__btn first-body5__btn2">
                         <p className="first-body5__box-p">
                             Sign up with google
                         </p>
                     </div>

                     <p className="first-body5__last-p">
                     Already have an account? <span className="first-body5__span">
                         login
                     </span>
                     </p>



                      </section>

              </div>
           

           </div>
           </section>


























            </div>


















        </section>





















    )





}



export default Index7