import React , {useEffect,useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {getJsonMain,setJsonMain} from './Utils';
import Window from './component/window.js';
import  Chart from './component/chart';


const root = ReactDOM.createRoot(document.getElementById('root'));

function Templatepp() {

    window.INFO = getJsonMain();
    
    let today = new Date().toLocaleDateString('fa-IR');

    Object.defineProperty( window.INFO, 'updater', {
      set(value) {
        setJsonMain();
        
        setrerender(!rerender);
      }
    });
  
    let value=0
    const[rerender, setrerender] = useState(value);
    
  
    return <React.Fragment>
            <header className="navbar navbar-expand-md navbar-dark bd-navbar">
              <nav className="container-xxl flex-wrap flex-md-nowrap" aria-label="Main navigation">
                  {/* <a className="navbar-brand mr-0 mt-2" href="/" aria-label="Bootstrap"><svg className="d-block" width="36" height="36" viewBox="0 0 612 612" xmlns="http://www.w3.org/2000/svg" focusable="false"><title>Bootstrap</title><path fill="currentColor" d="M510 8a94.3 94.3 0 0 1 94 94v408a94.3 94.3 0 0 1-94 94H102a94.3 94.3 0 0 1-94-94V102a94.3 94.3 0 0 1 94-94h408m0-8H102C45.9 0 0 45.9 0 102v408c0 56.1 45.9 102 102 102h408c56.1 0 102-45.9 102-102V102C612 45.9 566.1 0 510 0z"></path><path fill="currentColor" d="M196.77 471.5V154.43h124.15c54.27 0 91 31.64 91 79.1 0 33-24.17 63.72-54.71 69.21v1.76c43.07 5.49 70.75 35.82 70.75 78 0 55.81-40 89-107.45 89zm39.55-180.4h63.28c46.8 0 72.29-18.68 72.29-53 0-31.42-21.53-48.78-60-48.78h-75.57zm78.22 145.46c47.68 0 72.73-19.34 72.73-56s-25.93-55.37-76.46-55.37h-74.49v111.4z"></path></svg>
                  </a> */}
                  You are the best!!
                  <div className="navbar-nav-scrolle" id="bdNavbar">
                      <ul className="navbar-nav bd-navbar-nav flex-row">
                          <li className="nav-item">
                              <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#setting-form">
                              Setting
                              </button>
                          </li>
                      </ul>
                  </div>
              </nav>
            </header>
            <main className="main h-100">
              <div className='container'>
                <div className="row">
                  <div className='col-sm-3'></div>
                  <div className='col-sm-6 col-xs-12 mb-2 mt-2'>
                    <div  className="card mt-2 bestapp-holer-chart was-validated">
                      <div className="card-body  background-color  ">
                        <label className="w-100 text-center">{today}</label>
                        <Chart />
                      </div>
                    </div>
                  </div>
                  <div className='col-sm-3'></div>
                </div>
              </div>    
            </main>
          <Window />
        </React.Fragment>
}
  

root.render(
 
    <Templatepp/>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
