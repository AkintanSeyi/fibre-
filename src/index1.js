import React, {useState, useEffect, useRef , useReducer} from "react";
import {VscChevronUp , VscChevronDown , VscChevronLeft, VscChevronRight} from "react-icons/vsc"
import {BsPeopleFill } from 'react-icons/bs';
import {FaHome , FaTwitter} from 'react-icons/fa';
import {GrFacebookOption} from 'react-icons/gr'

import {IoLogoInstagram} from 'react-icons/io'
import { Link } from "react-router-dom";
import Word2 from "./try";

const Index1 = () => {

  const [j , setj] = useState(0);



      const stateReducer = {
       state1 : 1,
       state2: 2,
       state3: 0,
       sentence : 'You can easily book a tour of your prospective home online. Our neighbourhood reps are readily available to show you around at no cost to you.',
       sentence2: ' You can rent your future home in a few clicks. We\'ve streamlined the entire process to get you moved in, faster.'


      }
     // console.log(stateReducer);
     // console.log(j);

      const reducer = (state, action) => {
        if (action.type === 'RIGHT1') {
            let r = state.state1 + 1;
            if (r >= h.length) {
        return {...state, state1 : 0}
            }
            return {...state, state1 : r}
        }

        if (action.type === 'RIGHT2') {
            
          let r = state.state2 + 1;
          if (r >= h.length) {
            return {...state, state2: 0}
          }
          return {...state, state2: r}

        }

        if (action.type === 'RIGHT3') {
          let r = state.state3 + 1;
          if (r >= h.length) {
            return {...state , state3 : 0}
          }
          return {...state, state3: r}

        }

        if (action.type === 'LEFT1') {
          let r = state.state1 - 1
          if (r < 0) {
            return {...state, state1: h.length - 1}
          }

          return {...state, state1 : r}
        }

        if (action.type === 'LEFT3') {
          let r = state.state2 - 1;
          if (r < 0) {
            return {...state, state2 : h.length - 1}
          }

          return {...state, state2: r}


        }

        
        if (action.type === 'LEFT2') {
          let r = state.state3 - 1;
          if (r < 0) {
            return {...state, state3 : h.length - 1}
          }

          return {...state, state3: r}


        }

       



           
           return state
      }

    const [a , setA] = useState('section-head')
    const [b, setB] = useState('');
    const [c , setC] = useState(true);
    const [d , setD] = useState('first-body__placeHolder-show');
    const [f, setF] = useState([])
    const [h, setH] = useState([
      'img-1.png'  , 'img-3.png' , 'img-4.png' ]);
    const [m, setM] = useState(false);
    const [k, setK] = useState('We offer flexible options, designed around your needs. Browse shared or entire homes by where you want to live and how frequently you want to pay')
    const [o, setO] = useState(false);
    const [q, setQ] = useState(false)
    const [r , setR] = useState('fourth-body__button')
    const [w, setW] = useState('')
    const [z, setZ] = useState("sixth-body__head")
    const [x, setX] = useState(false)
    const [aa, setAA] = useState(' Enter your email address to receive the latest information about Fibre properties')
    const [ab, setAB] = useState("sixth-body__form")
   
    const [ac, setAC] = useState('section-head__part3-ul')
    const [ad, setAD] = useState(false)


    const [state, dispatch] = useReducer(reducer , stateReducer);

   
    
   
   




      
   

   // const container = useRef(null)
   const Left = () => {
     console.log('hello');
       
     setj((e) => {
       let r = e - 1;
       if (r < 0) {
        return h.length - 1
      } 
       return r
      
     })
   }

   const Right = () => {
    // console.log('hello world');

    setj((e) => {
      let r = e + 1;

      if (r >= h.length) {
        return 0
      }


      return r
    })   
  }

  useEffect(() => {
      setInterval(() => {
        Right()
       
        dispatch({type: 'RIGHT1'})
        dispatch({type: 'RIGHT2'})
        dispatch({type: 'RIGHT3'})
        
      }, 3000);
      return () => clearInterval()
  } , [h])




    const handleSubmit = (e) => {
      
         e.preventDefault();
         console.log(b);
        
        /* const tempBtn = e.target.getBoundingClientRect()
         console.log(tempBtn); */
         if (b) {
          setF([b])
           console.log(f);   
         }
    }
    const changeIcon = () => {
        setC(!c)
    }

    const Btn = () => {
        setA("section-head amend")
    }

    const defaultState = {
      people: [],
      isModalOpen: false,
      modalContent: '',
    };
    const Index = () => {


     } 

     const ChangeBtn = () => {
       setM(!m)
     }


     const ChangeBtn2 = () => {
      setO(!o)
    }

    const ChangeBtn3 = () => {
      setQ(!q)
    }

    
   
    const Run = (e) => {
        e.preventDefault()

      
     if (w) {
       eee()
       setAA("Thanks for subscribing to our newsletter, we'll sure send you the latest information about Fibre properties directly in your email address")
      setAB('sixth-body__form-hidden')
     
      }

              
         
       

        
      }

      const eee = () => {
       
        setX(true)

       
        
    }

    const eeee = () => {
       
      setX(false)

     
      
  }

  const SetAppear = () => {
     
  setAD(!ad)






  }



     

      
     
     

     

     
     


    
    
     

      
     return (

       <div className = 'section'>
           <section className={a} onClick = {Btn}>
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

           <section className="first-body">
              <div className="first-body__holder">
              <article className = "first-body__one">
                 <div className="first-body__holder2">
                 <h1 className = "first-body__h1">A better way to rent in Lagos.</h1>
               <p className = "first-body__p">Search our listings for entire or shared homes with flexible durations and payments plans.</p>
               </div>
                <form className = "first-body__form" onSubmit = {handleSubmit}>
                  <input type="text"
                  className = "first-body__input"
                  id = 'name'
                  name = "text"
                  placeholder = "where do you want to live" 
                  value = {b}
                  onChange = {(e) => setB(e.target.value)} /> 
                  <div className = "first-body__btn1" onClick = {changeIcon}> {c ? <VscChevronUp className = "first-body__icon"></VscChevronUp> 
                   : <VscChevronDown className = "first-body__icon"> </VscChevronDown >  }      </div>
                  <button className = "first-body__btn2" >  browse home     </button>
                </form>
                <div className={` ${c  ? 'first-body__placeHolder-show' : 'first-body__placeHolder'  } ` }>
                  <p className="first-body__placeholder-p1 first-body__placeholder-p1-hold">any location</p>
                  <p className="first-body__placeholder-p2"> lekki phase 1</p>
                  {
                    f.map((g) => 
                        <p className = 'first-body__placeholder-p2'>{g}</p>
                    )
                  }
                </div>
       
                 


             </article>
             <article  className="first-body__two">
               <div className="first-body__div-two">
                  <img className="first-body__div-img" src= 'https://fibre.ng/877237138dc107fa448d7be1f31ebd08.png' alt="" />
               </div>

             </article>
              </div>
           </section>


           <section className="second-body">
             <div className="second-body__head">
                <h2 className="second-body__h1">Explore by neighborhood</h2>
                <h3 className = 'second-body__h3'>We provide living options in popular neighborhoods. Browse by location:

</h3>             
                <div className="second-body__second">
                  <ul className="second-body__ul">
                    <li className="second-body__li">
                   
                    <VscChevronLeft className = 'second-body__move1' onClick = {Left} /> 
                      <Link to ='/faqs' className="second-body__link">
                      <figure className="section-body__fig">
                          <img className="second-body__img" src= {`./img/${h[j]}`} alt="" />
                          <figcaption className="second-body__caption">lekki phase 1 </figcaption>

                      </figure>  
                        
                      </Link>
                      <VscChevronRight className = 'second-body__move2' onClick = {Right} />
                     
                    </li>
                    <li className="second-body__li">
                    <VscChevronLeft className = 'second-body__move1' onClick = {() => dispatch({type: 'LEFT1'})} /> 
                   
                   <Link to ='/faqs' className="second-body__link">
                   <figure  className="section-body__fig">
                       <img className="second-body__img" src= {`./img/${h[state.state1]}`} alt="" />
                       <figcaption className="second-body__caption">victoria island</figcaption>
                   </figure>
                    
                   </Link>

                   <VscChevronRight className = 'second-body__move2' onClick = {() => dispatch({type: 'RIGHT1'})} />
                     
                   
                 </li>

                 <li className="second-body__li">
                 <VscChevronLeft className = 'second-body__move1' onClick = {() => dispatch({type: 'LEFT2'})} /> 
                
                   
                   <Link to ='/faqs' className="second-body__link">
                   <figure className="section-body__fig">
                  
                       <img className="second-body__img" src= {`./img/${h[state.state3]}`} alt="" />
                       <figcaption className="second-body__caption">ikoyi</figcaption>
                       
                   </figure>
                     
                   </Link>
                   <VscChevronRight className = 'second-body__move2' onClick = {() => dispatch({type: 'RIGHT3'})} />
                   
                  

                 </li>

                 <li className="second-body__li">
                 <VscChevronLeft className = 'second-body__move1' onClick = {() => dispatch({type: 'LEFT3'})} /> 
                
                   <Link to ='/faqs' className="second-body__link">
                   <figure className="section-body__fig"> 
                       
                       <img className="second-body__img" src= {`./img/${h[state.state2]}`} alt="" />
                       <figcaption className="second-body__caption">lekki</figcaption>
                       
                   </figure>
                     
                   </Link>
                   <VscChevronRight className = 'second-body__move2' onClick = {() => dispatch({type: 'RIGHT2'})} />

                  

                 </li>


                  </ul>
                </div>
     
             </div>
           </section>

          
            <section className="third-body">
               <div className="third-body__holder">
              
                  <div className="third-body__head">
                     <h2 className="third-body__h2">
                        You're three steps away from your perfect home
                      </h2>
                  </div>

                  <div className="third-body__body">
                    <ul className="third-body__ul">
                      <li className="third-body__li">
                            <figure className ='third-body__figure'>
                                <img src="	https://fibre.ng/e311e36811aa37a843fa933d42d1a110.png" alt="" className="third-body__img" />
                              <figcaption className="third-body__caption">
                              FLEXIBLE OPTIONS
                              </figcaption>
                            </figure>
                            <h2 className="third-body__li-head1">
                            Find the home you need
                            </h2>

                            <p className="third-body__para">
                             {
                               m ? k : k.substring(0, 100) 
                             }
                            </p>
                            <button className="third-body__button" onClick = {ChangeBtn}>
                              {
                                m ? 'show-less' : 'show-more'
                              }
                            </button>
                      </li>

                      <li className="third-body__li">
                            <figure className ='third-body__figure'>
                                <img src="https://fibre.ng/90c0408bcd6b448216ef77b507f9de05.png" alt="" className="third-body__img" />
                              <figcaption className="third-body__caption">
                              ONLINE BOOKING
                              </figcaption>
                            </figure>
                            <h2 className="third-body__li-head1">
                            Schedule a visit
                            </h2>

                            <p className="third-body__para">
                               {
                                o ? state.sentence : state.sentence.substring(0, 100)
                               }
                            </p>

                            <button className="third-body__button" onClick = {ChangeBtn2}>
                              {
                                o ? 'show-less' : 'show-more'
                              }
                            </button>
                      </li>

                      <li className="third-body__li">
                            <figure className ='third-body__figure'>
                                <img src="https://fibre.ng/7577218c9791e283635764e2d5ff4914.png" alt="" className="third-body__img" />
                              <figcaption className="third-body__caption">
                              STREAMLINED PROCESS
                              </figcaption>
                            </figure>
                            <h2 className="third-body__li-head1">
                            Book in minutes, not days
                            </h2>

                            <p className="third-body__para">
                             {
                                q ? state.sentence2 : state.sentence2.substring(0, 100)
                             }
                            </p>

                            <button className="third-body__button" onClick = {ChangeBtn3}>
                              {
                                q ? 'show-less' : 'show-more'
                              }
                            </button>
                      </li>
                    </ul>











                  </div>

              </div>
            </section>

            <section className="fourth-body">
              <div className="fourth-body__holder">
                <ul className="fourth-body__ul">
                  <li className="fourth-body__li1">
                      <h2 className="fourth-body__h2">

                      Designed
for every
budget





                      </h2>

                      <div className="fourth-body__line">
                             
                      </div>

                  </li>


                  <li className="fourth-body__li2">
                        <div className="fourth-body__icon-holder">
                           <BsPeopleFill className="fourth-body__icon" />
                           
                        </div>
                        <h3 className="fourth-body__h3">
                        Shared homes
                        </h3>
                        <p className="fourth-body__para">
                        Rent a private room in a shared home with furnished common areas like living room and kitchen.
                        </p>

                        <button className = 'fourth-body__button'>
                          browse shared homes
                        </button>


                  </li>

                  <li className="fourth-body__li3">
                        <div className="fourth-body__icon-holder">
                             <FaHome  className="fourth-body__icon" />
                        </div>
                        <h3 className="fourth-body__h3">
                        Entire homes
                        </h3>
                        <p className="fourth-body__para">
                        Rent a furnished or unfurnished apartment or house, with options fit for a single tenant or families.
                        </p>

                        <button className = {r} >
                          browse entire homes
                        </button>


                  </li>

                </ul>

              </div>

            </section>

            <section className="fifth-body">
                 <div className="fifth-body__holder">
                   <h2 className="fifth-body__h2">






                   Are you a landlord? 








                   </h2>

                   <p className="fifth-body__para">
                   Join our partner landlords who have earned over ₦600M in rental
income from the best tenants in Nigeria. Get started today!
                   </p>
                     


                     
                   <button style ={{width: '10rem' }} className = {r} >
                         learn more
                        </button>


                 </div>





            </section>

            

            <section className="sixth-body">
                {
                  x && <Word2 runn = {eeee} />
                }
               
                <section className="sixth-body__holder">

                   <h2 className="sixth-body__h2">

                   Email Newsletter

                   </h2>

                   <p className="sixth-body__para">
                     {aa}
                   </p>
                           

                   <form className= {ab} onSubmit = {Run}>

                     <input type="email"
                     id = 'name1'
                     name = 'name1'
                     value = {w} 
                     placeholder = 'enter email address'
                    
                     className= "sixth-body__input" 
                     onChange = {(e) => setW(e.target.value)} />

<button style ={{width: '10rem' , height : '4rem' }} className = {r} 
                 onSubmit = {() => Run()}   >
                         subscribe
                        </button>
                   </form>
                </section>
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





















       </div>
     )
     
}

export default Index1





