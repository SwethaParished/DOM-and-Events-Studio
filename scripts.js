// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function(){
    const takeOff = this.document.getElementById("takeoff");
    const landing = this.document.getElementById("landing");
    const missionAbort = this.document.getElementById("missionAbort");
    const flightStatus = this.document.getElementById("flightStatus");
    const bgcolor = this.document.getElementById("shuttleBackground");
    const shuttleHeight = this.document.getElementById("spaceShuttleHeight");
    let offsetDown = 0;
    takeOff.addEventListener("click", function(){
        let userInput = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if(userInput){
            flightStatus.innerHTML = "Shuttle in flight."
            bgcolor.style.backgroundColor = 'blue';
            shuttleHeight.innerHTML = 10000;
        }
    })
    landing.addEventListener("click", function(){
        let userInput = window.confirm("The shuttle is landing. Landing gear engaged.");
        if(userInput){
            flightStatus.innerHTML = "The shuttle has landed."
            bgcolor.style.backgroundColor = 'green';
            shuttleHeight.innerHTML = 0;
        }
    })
    missionAbort.addEventListener("click", function(){
        let userInput = window.confirm("Confirm that you want to abort the mission.");
        if(userInput){
            flightStatus.innerHTML = "Mission aborted."
            bgcolor.style.backgroundColor = 'green';
            shuttleHeight.innerHTML = 0;
        }
    })
    document.getElementById("up").onclick = function() {  
        document.getElementById("up").style.backgroundColor = 'grey';  

    }
    up.addEventListener("click", function(){
        document.getElementById("up").onclick = function() {  
            
        let up = parseInt(rocket.style.up);
       rocket.style.position = "relative";
       rocket.style.up = (upbtn+10)+"px";
        }
    })
    down.addEventListener("click", function(){
        
        offsetDown += 10;
        let down = parseInt(rocket.style.down);
        rocket.style.position = "relative";
        rocket.style.down = (offsetDown)+"px";
        e.preventDefault();
     })
   
})