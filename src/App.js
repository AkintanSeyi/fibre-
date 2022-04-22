import React from "react";
import Word from './index1';
import Word2 from './index3'
import Word3 from './index4'
import Word4 from './index5'
import Word5 from './index6'
import Word6 from './index7'
import { Routes, Route} from 'react-router-dom'





const App = () => {
    return (
     

          <Routes>
          <Route exact path = "/" element = {<Word />} />
          <Route path = "/apartment" element = {<Word2 />} />
          <Route path = "/patner" element = {<Word3 />} />
          <Route path = "/faqs" element = {<Word4 />} />
          <Route path = "/login" element = {<Word5 />} />
          <Route path = "/get-started" element = {<Word6 />} />
          <Route path = "*" element = {<Word />} />
          <Route path = "/hh" element = {<Word />} />
          
       
         </Routes>
         
            
           
      
    )
}

export default App