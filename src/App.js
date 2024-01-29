import { Pai } from './styled';
import React from 'react';
import Headers from './Headers';
import Content from './Content';
import Footer from './Footer';



function App() {
   return (
      <Pai>
         <div>
            <Headers />
         </div>
         <div>
            <Content />
         </div>
         <div>
            <Footer />
         </div>
      </Pai>
   );
}

export default App;
