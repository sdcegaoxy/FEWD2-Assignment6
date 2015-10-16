var stepInfo= new Map();
stepInfo.set("order","billing");
stepInfo.set("billing","invoice");
stepInfo.set("invoice","order");

//a.	If Hand Tossed Selected: Small ($9.99), Medium ($12.99), Large ($14.99) 
//b.	If Thin Crust Selected: Medium ($11.99), Large ($13.99)
//c.	If New York Style Selected: Large ($16.99), Extra Large ($19.99)
//d.	If Gluten Free Selected: Small ($10.99)
//

var Doughs=[
    {"name":"Hand Tossed","types":[{"size":"Small","price":"9.99"},
                           {"size":"Mediu","price":"12.99"},
                           {"size":"Large","price":"14.99"}
                          ]},
    {"name":"Thin Crust","types":[ {"size":"Mediu","price":"11.99"},
                           {"size":"Large","price":"13.99"}
                          ]},
    {"name":"New York Style","types":[ {"size":"Large","price":"16.99"},
                           {"size":"Extra Large","price":"19.99"}
                          ]},
    {"name":"Gluten Free","types":[{"size":"Small","price":"10.99"}
                          ]}
];



document.addEventListener("DOMContentLoaded", intilize, false);


 function intilize(){
     console.log("start app");
    //initlize view
     document.getElementById("billing").style.display="none";
     document.getElementById("invoice").style.display="none";
     document.getElementById("addtypetext").style.display="none";
     document.getElementById("baddtypetext").style.display="none";
     
    //initlize Mouse Event 
     var btnorder=document.getElementById("btnorder");
     btnorder.addEventListener("click",finishBPiza,false);
     
     var btninvoice=document.getElementById("btninvoice");
     btninvoice.addEventListener("click",finishBilling,false);
     
     var addtype=document.getElementById("addtype");
     addtype.addEventListener("change",addinput,false);
     
      var baddtype=document.getElementById("baddtype");
     baddtype.addEventListener("change",addinput,false);
     
     var doughtype=document.getElementsByName("dough");
     
     for(var i=0;i<doughtype.length;i++){
        doughtype[i].addEventListener("click",showDoughPrice,false);
     }
     
     var sameasD=document.getElementById("sameasd");
     sameasD.addEventListener("click",copyOrder2Bill,false);
     
     document.getElementById("expYear").innerHTML=genYear(10);
        
     ValidateCreaditCard();
}


function ValidateCreaditCard(){
   // var cardNo=document.getElementById("cardNo").value;
   var cardNo="451211301464 3252";
    cardNo=cardNo.replace(" ","");
    cardNo=cardNo.replace("-","");
    var cardNo_list=cardNo.split("");
     var sum="";
    for(var x in cardNo_list){ 
        if(x%2==0){
            sum=sum.concat(cardNo_list[x]*2);
        }else{
            sum=sum.concat(cardNo_list[x]);
        }
        console.log("x="+x+"||cardNo["+x+"]="+cardNo_list[x]+"||sum="+sum)
    }
}

function genYear(numb){
    var yearhtml="";
    var date=new Date();
    var year=date.getFullYear();
    console.log("this year is "+year);
    for (var i=0;i<numb;i++){
        yearhtml+="<option>"+year+"</option>";
        year++;
    }
    return yearhtml;
}

function copyOrder2Bill(){
    var btn_sameasd=document.getElementById("sameasd").checked;
    console.log("enter copyOrder2Bill  "+btn_sameasd);
    var inputlist=document.getElementsByTagName("input");
    for (var i=0;i<inputlist.length;i++){
        var inputID=inputlist[i].getAttribute("id");
        if(inputID!=null&&inputID.charAt(0)=="b"){
            document.getElementById(inputID).value=
                document.getElementById(inputID.slice(1)).value;
        }
    }
    
    document.getElementById("baddtype").value=
        document.getElementById("baddtype").value;
    
    
    
}
                              
function finishBPiza(){
    if(validation("order")){
        var confirmed=confirm("Are you sure you are done?");
        if(confirmed)swap("order");
    }
    
}

function finishBilling(){
    
    
    swap("billing");
}

function showDoughPrice(){
    console.log(this.getAttribute("value"));
    var type=this.getAttribute("value");
    var selectHtml="";
    
    for(var x in Doughs){
        console.log(Doughs[x]);
        var obj_dough=Doughs[x];
        if(type==obj_dough.name){
            selectHtml="<select>";
            for (var p in obj_dough.types){
                var type=obj_dough.types[p];
                selectHtml+="<option >"+type.size+"($"+type.price+")"+"</option>"
            }
            selectHtml+="</select>";
        }
    }
    
    console.log(selectHtml);
    document.getElementById("doughsize").innerHTML=selectHtml;
    
}

function validation(status){
//     var nameRegExp=/\d/g;
//     var zipRegExp=/(^\d{5}$)|(^\d{5}-\d{4}$)/g;
//     var mobileRegExp=/^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/g;
//     var emailRegExp=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)/g;
//        var stateRegExp=/[a-zA-Z]{2}/g;
//        var result=true;
//    
//    if(status=="order"){
//        if(result){result=doValidation("name",nameRegExp,false)}else {return false;}
//        console.log(result);
//        if(result){result=doValidation("state",stateRegExp,true)}else {return false;}
//        console.log(result);
//        if(result){result=doValidation("zipcode",zipRegExp,true)}else {return false;}
//        console.log(result);
//        if(result){result=doValidation("phone",mobileRegExp,true)}else {return false;}
//        console.log(result);
//        if(result){result=doValidation("email",emailRegExp,true)}else {return false;}
//        console.log(result);
//        return result;
//        
//    }else if(status=="billing"){
//        if(result){result=doValidation("bname",nameRegExp,false)}else {return false;}
//        console.log(result);
//        if(result){result=doValidation("bstate",stateRegExp,true)}else {return false;}
//        console.log(result);
//        if(result){result=doValidation("bzipcode",zipRegExp,true)}else {return false;}
//        console.log(result);
//        if(result){result=doValidation("bphone",mobileRegExp,true)}else {return false;}
//        console.log(result);
//        if(result){result=doValidation("bemail",emailRegExp,true)}else {return false;}
//        console.log(result);
//        return result;  
//         
//    }else if(status=="invoice"){
//        return true;
//    }
//    
////   return false;
    return true;
}

function doValidation(objID,regExp,expect){
    
    var objVal=document.getElementById(objID).value;
    console.log(objID + " value is "+objVal+ " value length is "+objVal.length); 
     
    if(objVal.length>0&&objVal.match(regExp)==null&&expect==false){return true;}
    if(objVal.length>0&&objVal.match(regExp)!=null&&expect==true){return true;}
    
    document.getElementById(objID).focus();
    return false;
}

function addinput(){
    var selectval=document.getElementById(this.getAttribute("id")).value;
    var type=this.getAttribute("id").charAt(0);
    var inputID="addtypetext";
    if(type=="b")inputID=type+inputID;
    console.log(inputID);
    
    if(selectval=="other"){
        document.getElementById(inputID).style.display="block";
    }else{
        document.getElementById(inputID).style.display="none";
    }
}

function swap(sectionid){
    var currSectionId=sectionid;
    var nextSectionId=stepInfo.get(currSectionId);
    console.log("current sectionId is "+ currSectionId);
    console.log("next sectionId is " + nextSectionId);
  if(validation(currSectionId)){ 
     document.getElementById("order").style.display="none";
     document.getElementById("billing").style.display="none";
     document.getElementById("invoice").style.display="none";
    document.getElementById(nextSectionId).style.display="block";
  }
    
}