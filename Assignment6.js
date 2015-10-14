var stepInfo= new Map();
stepInfo.set("location","order");
stepInfo.set("order","billing");
stepInfo.set("billing","invoice");
stepInfo.set("invoice","location");

document.addEventListener("DOMContentLoaded", intilize, false);



 function intilize(){
     console.log("start app");
    //initlize view
     document.getElementById("order").style.display="none";
     document.getElementById("billing").style.display="none";
     document.getElementById("invoice").style.display="none";
     document.getElementById("addtypetext").style.display="none";
     
    //initlize Mouse Event
     var btnlocation=document.getElementById("btnlocation");
     btnlocation.addEventListener("click",swap,false);
     
     var btnorder=document.getElementById("btnorder");
     btnorder.addEventListener("click",swap,false);
     
    var btnbilling=document.getElementById("btnbilling");
     btnbilling.addEventListener("click",swap,false);
     
     var btninvoice=document.getElementById("btninvoice");
     btninvoice.addEventListener("click",swap,false);
     
     var addtype=document.getElementById("addtype");
     addtype.addEventListener("change",addinput,false);
}

function validation(){
    
    var obj=document.getElementById("uname");
    console.log("user name is "+ obj.value);
    
    return true;
}

function addinput(){
    var selectval=document.getElementById(this.getAttribute("id")).value;
    console.log("you home type is "+ selectval);
    if(selectval=="other"){
        document.getElementById("addtypetext").style.display="block";
    }else{
        document.getElementById("addtypetext").style.display="none";
    }
}

function swap(){
    var currSectionId=document.getElementById(this.getAttribute("id")).getAttribute("id").slice(3);
    var nextSectionId=stepInfo.get(currSectionId);
    console.log("current sectionId is "+ currSectionId);
    console.log("next sectionId is " + nextSectionId);
  if(validation()){ 
     document.getElementById("location").style.display="none";
     document.getElementById("order").style.display="none";
     document.getElementById("billing").style.display="none";
     document.getElementById("invoice").style.display="none";
    document.getElementById(nextSectionId).style.display="block";
  }
}