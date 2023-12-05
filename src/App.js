// import React from 'react'
// import './App.css'
// import img from './images/download (1).jpg'
// const App = () => {
  
//   return (
//     <>
//     <div className="title">
//     <h1>SRI KRISHNA COLLEGE OF ENGINEERING AND TECHNOLOGY</h1>
//     </div>
//     <div className="text">
//         <h2>POOJA</h2>
//         <h2>CSE CYBER SECURITY</h2>
//         </div>
//         <div className="image">
//         <img src={img} alt="skcet"></img>
    
//         <p>For more info <a target="blank" href="https://www.skcet.ac.in/">www.skcet.com</a></p></div>
//         <div className="text">
//         <iframe width="560" height="315" src="https://www.youtube.com/embed/JVK5rQ_gX6w?si=_X13Ja1ilQf_Nexc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
//         <p><u>Top depts in SKCET:</u></p>
//         <ol>
//             <li>CSE</li>
//             <li>IT</li>
//             <li>CYS</li>
//             <li>CSD</li>
//         </ol>
//         <p>Also some other depts in SKECT</p>
//         <ul>
//             <li>CSBS</li>
//             <li>MTECH CSE</li>
//             <li>ECE</li>
//             <li>EEE</li>
//             <li>CIVIL</li>
//         </ul>
//         <dl>
//         <dt>Emerging department of the year</dt>
//         <dd>cybersecurity</dd>
//         </dl>
//   </div>
//     </>
//   )
// }


// export default App
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import CounterComponent from './CounterComponent';
const App = () => (
 <Provider store={store}>
 <CounterComponent />
 </Provider>
);
export default App;