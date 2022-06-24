import React, { useState ,useEffect}  from 'react';
import Inputs from './inputs.js';
import {updateInList,deleteAllList,resetCount} from '../Utils.js';

function Window(props) {

  let flag_no_item=window.INFO.list.length != 0?'none':'block',
  list_inputs = [];

  let generateList = function(){

    let list_of_control = [];

    for(var item of window.INFO.list){
      list_of_control.push(<Inputs data={item} key={'Getoneinfo_'+item.title}/>);
    }

    list_inputs = list_of_control;
    return list_of_control;
  
  }
 
  
  const [inputList, setInputList] = useState([generateList()]);
  const [new_title, setnewtitle] = useState('');    
  
  useEffect(()=>{

    setnewtitle('');
  },[inputList])


  const changeNewTitle = (ev)=>{
    setnewtitle(ev.target.value);
  }
        

        
  let AddNewItem = ()=>{
   if(updateInList({title:new_title,negative:0,positive:0})  == false)
      return;
    setInputList(inputList.concat(<Inputs data={{title:new_title,negative:0,positive:0}}  key={'Getoneinfo_'+window.COUNT} />));
    window.COUNT++;
    
  }

  let resetAll = ()=>{
    deleteAllList();
  }

 let resetcount = ()=>{
  resetCount();
  }

  console.log('re render')
  return <div className="modal fade " id="setting-form" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog ">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Setting</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
          <div className="row">
              <div className=" col-9 ">
                <input required  type="text" placeholder="title"  onChange={(ev)=>{changeNewTitle(ev)}} value={new_title}  className="form-control" />
                <div className="invalid-feedback">Please fill in the field</div>
              </div>
              <div className=" col-3 ">
                <button  type="button" onClick={(ev)=>{AddNewItem()}} className="btn  btn-outline-success">Add</button> 
              </div>
          </div>
          <div key="mthere_is_no_item" style={{'display':flag_no_item}}  className="card mt-2 was-validated">
            <div className="card-body bg-light bg-gradient">
                <label className='text-center w-100 '>there is no item. please click Add.</label>
            </div>
          </div>
          {list_inputs}
      </div>
      <div className="modal-footer">
        <button type="button" onClick={()=>{resetAll()}}   className="btn btn-primary" >Reset All</button>
        <button type="button" onClick={()=>{resetcount()}}  className="btn btn-primary">Reset Count</button>
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div> 
}

  export default Window;