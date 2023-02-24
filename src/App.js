import React, { Component } from 'react';
import './App.css';
import { useState } from 'react';

export default function App() {
  // const [tileTitle, settileTitle] = useState('');
  // const [tileBody, setTileBody] = useState('');
  // const [isEditing, setIsEditing] = useState(false);

  return (
    <div className='app'>
      <div className='heading'>
        <h1>Idea Board</h1>
      </div>

      <div className='button'>
        <button>New Idea</button>
      </div>
      <div className='cardList'>
        <div className='card'>
          <form>
            <div>
              <input className='tileTitle' type='text' />
              <button className='tileButton'>x</button>
            </div>
            <input className='tileBody' type='text' />
          </form>
        </div>
        <div className='card'>
          <form>
            <div>
              <input className='tileTitle' type='text' />
              <button className='tileButton'>x</button>
            </div>
            <input className='tileBody' type='text' />
          </form>
        </div>
      </div>
    </div>
  );
}

// export default class App extends Component {

// console.log()

//   render()
//   {
//     return (
//       <div className='app'>
//         <div className='heading'>
//           <h1>Idea Board</h1>
//         </div>

//         <div className='button'>
//           <button>New Idea</button>
//         </div>
//         <div className='cardList'>
//           <div className='card'>
//             <form>
//               <div>
//                 <input className='tileTitle' type='text' />
//                 <button>x</button>
//               </div>
//               <input className='tileBody' type='text' />
//             </form>
//           </div>
//           <div className='card'>
//             <form>
//               <div>
//                 <input className='tileTitle' type='text' />
//                 <button>x</button>
//               </div>
//               <input className='tileBody' type='text' />
//             </form>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
