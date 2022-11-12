import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import React from 'react'; 
import { BrowserRouter } from 'react-router-dom';
import './App.css';

const App = () => {
  const activeMenu = 'ture';
  return (
    // test buton login
    // <div>
    //   {/* <h1 className='underline text-3x1'>TeaScript</h1> */}
    //   <BrowserRouter>
    //     <div className="flex relative dark:bg-main-dark-bg">
    //       <div 
    //       className="fixed left-4 top-4"
    //       style={{ zIndex: '1000'}}>
    //         <TooltipComponent
    //           content="Login/Signup" position='BottomCenter'>
    //           <button type="button" className="text-6x1 p-3 hover:drop-shadow-x1 hover:bg-light-gray text-blue" style={{bakcground: 'blue', borderRadius: '50%'}}>
    //           Login/Signup 
    //           </button>
    //         </TooltipComponent>
    //       </div>
    //     </div> 
    //   </BrowserRouter>
    // </div>
    <div> 
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className='fixed right-4 bottom-4' style={{ zIndex: '1000'}}>
            <TooltipComponent 
              content="Settings" position='Top'>
              <button type="button" className="text-3x1 p-3 hover:drop-shadow-x1 hover:bg-light-gray text-black" style={{bakcground: 'green', borderRadius: '50%'}}>
                Settings
              </button>
            </TooltipComponent>
            </div>
            {activeMenu ? (
              <div>
                Sidebard
              </div>
            ) : (
              <div>
                Sidebard w-0
              </div>
                )}
          </div>
        </BrowserRouter>
      </div> 

  );
}

export default App;