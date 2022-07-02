import React, { useState ,createContext, useEffect } from 'react';
import {setJsonMain,updateInList} from '../Utils.js';
import './chart.css';

function Chart(props) {


    const PlusOrMinus =(item,type)=>{
   
        item[type] = parseInt(item[type]) + 1;
        item['just_update'] = true;
        updateInList(item);
    }
    

    return  <>{ window.INFO.list.map((item )=> {
        let sum =parseInt( item.negative)+parseInt(item.positive);
        if(item.lock == false ){
            sum = ' - ('+sum+')'
        }else{
            sum = (sum == 0?'':' - ('+sum+')');
        }
                  return  <div className='row mb-3 cursor-pointer' key={'chart_'+item.title}   onClick={()=>{if(item.lock){ PlusOrMinus(item,'positive')}}}>
                        <div className='col-12'>
                            <div className='align-items-center chart_holder_main rounded-3 px-2 d-flex justify-content-between '>
                                <label className={(item.lock==true?'d-none':'d-flex') + ' align-items-center'}  onClick={()=>{PlusOrMinus(item,'negative')}}>
                                    <i  className='bi bi-dash-circle chart-btn  cursor-pointer'></i>
                                    <span className="px-2">{item.negative}</span>
                                </label>
                                <label className="flex-fill text-center">{item.title + sum}</label>
                                <label  className={(item.lock==true?'d-none':'d-flex') + ' align-items-center'}  onClick={()=>{PlusOrMinus(item,'positive')}}>
                                    <span className="px-2">{item.positive}</span>
                                    <i className='bi bi-plus-circle chart-btn  cursor-pointer' ></i>
                                </label>
                            </div>
                        </div>
                    </div>
                 })} 
            </> 
//    <div className='row' key={'chart_'+item.title}>
//    <div className='col-12'>
//        <div className="input-group mb-3">
//            <button className="btn btn-outline-secondary"  onClick={()=>{PlusOrMinus(item,'negative')}} type="button" id="button-addon1">-</button>
//            <div className="input-group-text flex-fill d-flex align-self-center justify-content-center">
//                <div className='col-3 text-start'>{item.negative}</div>
//                <div className='col-6 '>{item.title}</div>
//                <div className='col-3 text-end' >{item.positive}</div>
//            </div>
//            <button className="btn btn-outline-secondary"  onClick={()=>{PlusOrMinus(item,'positive')}} type="button" id="button-addon1">+</button>
//        </div>
//    </div>
// </div>
}

export default Chart;
