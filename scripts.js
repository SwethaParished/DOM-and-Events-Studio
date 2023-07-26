// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function(){
    const takeOff = document.getElementById("takeoff");
    const landing = document.getElementById("landing");
    const missionAbort = document.getElementById("missionAbort");
    const flightStatus = document.getElementById("flightStatus");
    const bgcolor = document.getElementById("shuttleBackground");
    const shuttleHeight = document.getElementById("spaceShuttleHeight");
    const rocket = document.getElementById("rocket");
    let rocketPosX = 0;
    let rocketPosY = 0;
    takeOff.addEventListener("click", function(){
        let userInput = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if(userInput){
            flightStatus.innerHTML = "Shuttle in flight."
            bgcolor.style.backgroundColor = 'blue';
            altitude = 10000;
            shuttleHeight.innerHTML = altitude;
            rocketPosY += 10;
            rocket.style.marginBottom = rocketPosY + 'px';
        }
    })
    landing.addEventListener("click", function(){
        alert("The shuttle is landing. Landing gear engaged.");
            flightStatus.innerHTML = "The shuttle has landed."
            resetBack();
           
    })
    missionAbort.addEventListener("click", function(){
        let userInput = window.confirm("Confirm that you want to abort the mission.");
        if(userInput){
            flightStatus.innerHTML = "Mission aborted."
            resetBack();
        }
    })
    document.addEventListener("click", function(event){
        let bkgWidth = parseInt(window.getComputedStyle(shuttleBackground).getPropertyValue('width'));
        console.log("Width: ", bkgWidth);
        if(event.target.id === "up" && altitude < 270000){
            rocketPosY += 10;
            rocket.style.marginBottom = rocketPosY + 'px';
            altitude += 10000;
            shuttleHeight.innerHTML = altitude;
        }
        if(event.target.id === "down" && altitude >0){
            rocketPosY -= 10;
            rocket.style.marginBottom = rocketPosY + 'px';
            altitude -= 10000;
            shuttleHeight.innerHTML = altitude;
        }
        if(event.target.id === "left" && rocketPosX > -(bkgWidth / 2) - 10){
            rocketPosX -= 10;
            rocket.style.marginLeft = rocketPosX + 'px';
        }
        if(event.target.id === "right" && rocketPosX < (bkgWidth / 2) - 10){
            rocketPosX += 10;
            rocket.style.marginLeft = rocketPosX + 'px';
        }
    })

    function resetBack(){
        bgcolor.style.backgroundColor = 'green';
        altitude = 0;
        shuttleHeight.innerHTML = altitude;
        rocketPosX = 0;
        rocketPosY = 0;
        rocket.style.marginBottom = rocketPosY + 'px';
        rocket.style.marginLeft = rocketPosX + 'px';
    }
   
})