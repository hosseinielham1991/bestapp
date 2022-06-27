import React, { useState , useEffect } from 'react';
import {updateInList,deleteinlist} from '../Utils.js';

function Inputs(props){
    
    let negative_value = props.data.negative,
    positive_value =  props.data.positive,
    lock = props.data.lock;

    const [negative,  setnegative] = useState(props.data.negative);
    const [positive, setpositive] = useState(props.data.positive);
    
    useEffect(() => {
        negative_value = negative;
        positive_value  = positive ;
        updateInList({title:props.data.title,negative:negative,positive:positive,lock:lock,just_update:true});
     }, [negative,positive]);

    const deleteinputs = ()=>{
        deleteinlist({title:props.data.title});
    }

    const changelock = ()=>{
        debugger
        updateInList({title:props.data.title,negative:negative,positive:positive,lock:!lock,just_update:true});
    }

    return  <div className="row">
                 <div className=" col-12 ">
                    <div  className="card mt-2 was-validated">
                        <div className="card-body bg-light bg-gradient">
                            <div className="row">
                                <div className=" col-12 ">
                                    <div className="mb-3 d-flex justify-content-between align-items-center ">
                                        <label className="col-form-label flex-fill">{props.data.title}</label>
                                        <label className='inputs-lock-btn mx-2 cursor-pointer' onClick={()=>{changelock()}} ><i className={'bi bi-'+(lock==false?'unlock-fill':'lock-fill')}  ></i></label>
                                        <label className='inputs-delete-btn cursor-pointer' onClick={()=>{deleteinputs()}} ><i className="bi bi-trash-fill  text-danger " ></i></label>
                                           </div>
                                </div>
                                <div className=" col-lg-6 col-6">
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="basic-addon1">-</span>
                                        <input  type="number" min="0"  value={negative_value}  name="negative"  onChange={(ev)=>setnegative (ev.target.value)}     className="form-control"  aria-label="Username" aria-describedby="basic-addon1"/>
                                    </div>
                                </div>
                                <div className=" col-lg-6 col-6">
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="basic-addon1">+</span>
                                        <input  type="number" min="0"  value={positive_value}  name="positive" onChange={(ev)=>{setpositive(ev.target.value)}}  className="form-control"  aria-label="Username" aria-describedby="basic-addon1"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

}



export default Inputs;
