import React from "react"
import "./smoothScroller.css"

// class SmoothScroller2 extends React.Component{

//     constructor(){

//         super();

//         // this.scrollDoneHandler = scrollDoneHandler;
//         // this.speed = 5;
//         // this.targetPosition = 0;
//         // this.position = 0;
//         // this.timerID = 0;
//     }

//     componentDidMount(){

//     }
   
//     start(targetPosition){

//         this.position = window.pageXOffset;
//         this.targetPosition = targetPosition;

//         clearInterval(this.timerID);

//         this.timerID = setInterval(this.move.bind(this), 1);

//         console.log("scroll start "+window.pageXOffset + " , "+this.targetPosition);
//     }

//     move(){

//          window.scrollTo(0,this.position+=this.speed);

//          if (this.position >= this.targetPosition){

//             clearInterval(this.timerID);
 
//             this.scrollDoneHandler();

//             console.log("Scroll done");
//          }
//     }

//     onScroll(event) {

//         console.log(window.pageYOffset);
//     }

//     render()
//     {
//         return(

//             <div className = "TEST">
//                 <p>HELLO</p>
//                 <p>HELLO</p>
//                 <p>HELLO</p>
//                 <p>HELLO</p>
//                 <p>HELLO</p>
//                 <p>HELLO</p>
//                 <p>HELLO</p>
//                 <p>HELLO</p>
//                 <p>HELLO</p>
//                 <p>HELLO</p>
//                 <p>HELLO</p>
//                 <p>HELLO</p>
//                 <p>HELLO</p>
//                 <p>HELLO</p>
//                 <p>HELLO</p>
//                 <p>HELLO</p>
//                 <p>HELLO</p>
//                 <p>HELLO</p>
//                 <p>HELLO</p>
//                 <p>HELLO</p>
//             </div>
  
//         )
//     }

// }

    


// var scrollDoneHandler,curPos,targetPos,speed;
// var timerID,polarity, pos1,pos2;

// function smoothScrolling(target,handler){

//     let temp;

//     speed = 5;
//     timerID = 0;
//     polarity = 1;

//     curPos = window.pageYOffset;
//     targetPos = target.current.offsetTop;
//     scrollDoneHandler = handler;

//     pos1 = curPos;
//     pos2 = targetPos;

//     console.log("smoothScrolling " + Math.trunc(curPos) +  " , " + targetPos + " , " + speed);

//     if (curPos > targetPos){

//         polarity = -1;

//         pos1 = targetPos;
//         pos2 = curPos;
//     }

//   //  window.addEventListener('scroll', onScroll);

//     clearInterval(timerID);

//     timerID = setInterval(move, 1);
// }

// function move(){

//     speed = (targetPos - curPos)/20;

//     if (speed < 1 && polarity === 1){
//         speed = 1;
//     }

//     if (speed > -1 && polarity === -1){
//         speed = -1;
//     }

//     curPos += speed;

//     curPos = Math.trunc(curPos);

//     window.scrollTo(0,curPos);

//    // console.log(curPos +  " , " + targetPos + " , " + speed);

//     if (polarity > 0){
//         pos1 = curPos;
//         pos2 = targetPos;
//     }else{
//         pos1 = targetPos;
//         pos2 = curPos;
//     }

//     if (pos1 >= pos2){

//         clearInterval(timerID);

//         window.removeEventListener('scroll', this.onScroll);

//         scrollDoneHandler();
//     }
// }

// function onScroll(event){

//     console.log(window.pageYOffset + " , "+ targetPos);
// }


//export default smoothScrolling;


// var scrollDoneHandler,startPos,targetPos,duration,startTime,animationID;
// var polarity,pos1,pos2,stepCount,valueIncrement,sinValueIncrement,currentValue,currentSinValue;


// function StartScrolling(target,handler){

//     duration = 400;

//     scrollDoneHandler = handler;

//     startPos = window.scrollY;
//     targetPos = target.current.getBoundingClientRect().top +window.scrollY;

//     startTime = null;

//     polarity = 1;
//     pos1 = startPos;
//     pos2 = targetPos;

//     if (startPos > targetPos){
        
//          polarity = -1;
        
//          pos1 = targetPos;
//          pos2 = startPos;
//     }

//     stepCount = duration / 16;
//     valueIncrement = (targetPos - startPos) / stepCount;
//     sinValueIncrement = Math.PI / stepCount;
//     currentValue = startPos;
//     currentSinValue = 0;

//     window.addEventListener('scroll', onScroll);

//     console.log("curPos " + window.pageYOffset + " targetPos " + target.current.offsetTop);
//     console.log("pos1 = " + pos1 + " pos2 = "+pos2);

//     animationID = requestAnimationFrame(move2);

//    // window.scrollTo({duration :2000, delay : 0 , smooth : "easeInOutQuart", offset:100}, targetPos);
// }

// function onScroll(event){

//     //console.log(window.pageYOffset + " , "+ targetPos);
// }

// function easeQuadIn(t,b,c,d){

//     let result = 0;

//     result = ( c* (t/=d)*(t)+(b));

//     return result;
// }

// function move2(timeStamp){

//     currentSinValue += sinValueIncrement;
//     currentValue += valueIncrement * (Math.sin(currentSinValue) ** 2) * 2;
    
//     if (currentSinValue < Math.PI) {
//         window.scroll(0, currentValue);
//         requestAnimationFrame(move2);
//     } else {
//         window.scroll(0, targetPos);
//         scrollDoneHandler();
//     }
// }

// function move(timeStamp){

//     let elapsedTime;
//     let tempPos;

//     if (startTime === null){
//         startTime = timeStamp;
//     }

//     elapsedTime = (timeStamp - startTime) /duration;
//     elapsedTime = Math.min(elapsedTime.toFixed(2),1);

//     elapsedTime += 0.1;

//     if (polarity === -1){
//         elapsedTime = Math.min(1 - elapsedTime);
//     }

//     tempPos = easeQuadIn(elapsedTime , pos1 , pos2 , 1);

//     window.scrollTo(0,tempPos);

//     console.log("scroll to " + tempPos + " elapsedTime " + elapsedTime);

//     if ((polarity === 1 && elapsedTime <= 1) || (polarity === -1 && elapsedTime !==0)){
//         requestAnimationFrame(move);
//     }else{

//         console.log("scroll done :  polarity " + polarity + " elapsedTime " +elapsedTime);
//        // window.removeEventListener('scroll', onScroll);
//         scrollDoneHandler();
//     }
// }


var scrollDoneHandler,startPos,targetPos,duration,startTime,animationID;
var polarity,pos1,pos2,stepCount,valueIncrement,sinValueIncrement,currentValue,currentSinValue;


function StartScrolling(target,handler){

    duration = 500;

    scrollDoneHandler = handler;

    startPos = window.scrollY;
    targetPos = target.current.getBoundingClientRect().top +window.scrollY;

    startTime = null;

    polarity = 1;
    pos1 = startPos;
    pos2 = targetPos;

    if (startPos > targetPos){
        
         polarity = -1;
        
         pos1 = targetPos;
         pos2 = startPos;
    }

    stepCount = duration / 16;
    valueIncrement = (targetPos - startPos) / stepCount;
    sinValueIncrement = Math.PI / stepCount;
    currentValue = startPos;
    currentSinValue = 0;

    window.addEventListener('scroll', onScroll);

    console.log("curPos " + window.pageYOffset + " targetPos " + target.current.offsetTop);
    console.log("pos1 = " + pos1 + " pos2 = "+pos2);

    animationID = requestAnimationFrame(move2);
}

function onScroll(event){

    //console.log(window.pageYOffset + " , "+ targetPos);
}

function easeQuadIn(t,b,c,d){

    let result = 0;

    result = ( c* (t/=d)*(t)+(b));

    return result;
}

function move2(timeStamp){

    currentSinValue += sinValueIncrement;
    currentValue += valueIncrement * (Math.sin(currentSinValue) ** 2) * 2;
    
    if (currentSinValue < Math.PI) {
        window.scroll(0, currentValue);
        requestAnimationFrame(move2);
    } else {
        window.scroll(0, targetPos);
        scrollDoneHandler();
    }
}

function move(timeStamp){

    let elapsedTime;
    let tempPos;

    if (startTime === null){
        startTime = timeStamp;
    }

    elapsedTime = (timeStamp - startTime) /duration;
    elapsedTime = Math.min(elapsedTime.toFixed(2),1);

    elapsedTime += 0.1;

    if (polarity === -1){
        elapsedTime = Math.min(1 - elapsedTime);
    }

    tempPos = easeQuadIn(elapsedTime , pos1 , pos2 , 1);

    window.scrollTo(0,tempPos);

    console.log("scroll to " + tempPos + " elapsedTime " + elapsedTime);

    if ((polarity === 1 && elapsedTime <= 1) || (polarity === -1 && elapsedTime !==0)){
        requestAnimationFrame(move);
    }else{

        console.log("scroll done :  polarity " + polarity + " elapsedTime " +elapsedTime);
       // window.removeEventListener('scroll', onScroll);
        scrollDoneHandler();
    }
}


export default StartScrolling;