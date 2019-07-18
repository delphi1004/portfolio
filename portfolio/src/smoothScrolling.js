var scrollDoneHandler,startPos,targetPos,duration,startTime;
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

    requestAnimationFrame(move2);
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

    console.log("scroll to " + currentSinValue);
    
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