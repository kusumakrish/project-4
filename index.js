function clock(){
    let hours=document.querySelector(".child-wrapper-two .boxes-wrapper .box1 #hours");
    let minutes=document.querySelector(".child-wrapper-two .boxes-wrapper .box1 #minutes");
    let seconds=document.querySelector(".child-wrapper-two .boxes-wrapper .box1 #seconds");
    let meridian=document.querySelector(".child-wrapper-two .boxes-wrapper .box2 #meridian");


    //object for date method
    let obj=new Date();
    var h=obj.getHours();
    let m=obj.getMinutes();
    let s=obj.getSeconds();

    //meridian condition for AM and PM
    if(h==12){
        meridian.textContent="PM";
    }
    else if(h==24){
        meridian.textContent="AM";
    }
    else if(h>12){
        h=h-12;
        meridian.textContent="PM";
    }
    else{
        meridian.textContent="AM";
    }

    hours.textContent=zeroAppend(h);
    minutes.textContent=zeroAppend(m);
    seconds.textContent=zeroAppend(s);

}
setInterval(clock,1000);

function zeroAppend(val){
    if(val<10){
        val="0"+val;
    }
    return val;
}
/* function for clock */
/* function for alarm */
function alarm(){
        let morningDrop=document.querySelector("#morning-dropdown");
        let lunchDrop=document.querySelector("#afternoon-dropdown");
        let napDrop=document.querySelector("#nap-dropdown");
        let nightDrop=document.querySelector("#night-dropdown");
        let morningValue=morningDrop.options[morningDrop.selectedIndex].value;
        let lunchValue=lunchDrop.options[lunchDrop.selectedIndex].value;
        let napValue=napDrop.options[napDrop.selectedIndex].value;
        let nightValue=nightDrop.options[nightDrop.selectedIndex].value;
        
        let hourValue=new Date().getHours();
        let displayMor=document.querySelector("#display-morning");
        let displayLun=document.querySelector("#display-lunch");
        let displaynap=document.querySelector("#display-nap");
        let displayNigh=document.querySelector("#display-night");

        displayMor.textContent=morningDrop.options[morningDrop.selectedIndex].text;
        displayLun.textContent=lunchDrop.options[lunchDrop.selectedIndex].text;
        displaynap.textContent=napDrop.options[napDrop.selectedIndex].text;
        displayNigh.textContent=nightDrop.options[nightDrop.selectedIndex].text;

        let message=document.querySelector("#message");
        let messageImage=document.querySelector("#message-image");
        let alarmMessage=document.querySelector("#display-message");
        //morning display
        if(morningValue==hourValue){
            message.textContent="GRAB SOME HEALTHY BREAKFAST";
            alarmMessage.textContent="GOOD MORNING !"   
            messageImage.style.cssText="background-image:url('morning.png')";
        }

        //afternoon display
        if(lunchValue==hourValue){
            message.textContent="GOOD AFTERNOON ! TAKE A SIESTA !";
            alarmMessage.textContent="GOOD AFTERNOON !"   
            messageImage.style.cssText="background-image:url('afternoon.png')"
        }

        //evening display
        if(napValue==hourValue){
            message.textContent="LET'S GRAB A CUP OF COFFEE !";
            alarmMessage.textContent="GOOD EVENING !"   
            messageImage.style.cssText="background-image:url(lunch.png);"
        }

        //night display
        if(nightValue==hourValue){
            message.textContent="SWEET DREAMS !";
            alarmMessage.textContent="GOOD NIGHT !"   
            messageImage.style.cssText="background-image:url(night.png);"
        }
}
/* function for alarm */
/* function for default display */
function def(){
    let message=document.querySelector("#message");
    let messageImage=document.querySelector("#message-image");
    let alarmMessage=document.querySelector("#display-message");
    
    message.textContent="GRAB SOME HEALTHY BREAK FAST";
    alarmMessage.textContent="GOOD MORNING!!!WAKE UP!!"   
    messageImage.style.cssText="background-image:url(morning.png);"
}


