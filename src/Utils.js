window.INFO ={};
window.COUNT = 1 ;

const setCookie =(c_name, value, exdays) => {
    
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value = escape(value) +  "; expires=Sun, 16 Jul 3567 06:23:41 GMT";
    document.cookie = c_name + "=" + c_value;
}

 const getCookie = (c_name) => {
    var i, x, y, ARRcookies = document.cookie.split(";");
    for (i = 0; i < ARRcookies.length; i++) {
        x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
        y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
        x = x.replace(/^\s+|\s+$/g, "");
        if (x == c_name) {
            return unescape(y);
        }
    }
}


export const setJsonMain = () => {
    
    setCookie('bestapp_value',JSON.stringify(window.INFO),30);  
 };

 export const getJsonMain = () => {
    
    let list = getCookie('bestapp_value');

    if(list == "undefined" || list == undefined){
        window.INFO ={list:[]}
        setJsonMain();
        return  window.INFO;
    }else{
        return JSON.parse(list);
    }

 };

 
 export const updateInList = ({title,negative,positive,just_update=false})=>{
    
    if(title == ""){
        return false;
    }
    
    var index = window.INFO.list.findIndex(o => o['title'] === title);
    
    if (index === -1) {
      window.INFO.list.push({title:title,negative:negative,positive:positive});
    }
    else {
        if(just_update == false)
            return false;
      window.INFO.list[index] = {title:title,negative:negative,positive:positive};
        
    }

    
    window.INFO.updater = true;
  }      
      
  export const deleteinlist = ({title})=>{

    let index = window.INFO.list.findIndex(o => o['title'] === title);
    if (index !== -1)  window.INFO.list.splice(index, 1);
  
    window.INFO.updater = true;
  }    

  export const deleteAllList = ()=>{
    debugger
    window.INFO.list =[]; 
    window.INFO.updater = true;

  }
  
  export const resetCount = ()=>{
    for(let item of  window.INFO.list){
        item.negative = 0;
        item.positive=0;
    } 
    
    window.INFO.updater = true;

  }    



