 function myFunction() {
     document.getElementById("nav").classList.toggle("show");
 }

function getActivity (){
    axios.request ({
        method : "GET",
        url : "http://www.boredapi.com/api/activity/",
        
    }).then(activityFound).catch(activityFailed);
}
// success function
function activityFound(response){
    console.log(response);
    console.log("call was a sucess");
    let random = response.data.activity;
    console.log(random);
    document.getElementById('text').innerText = random;
}


// failed function 
function activityFailed(error){
    console.log(error);
    console.log("call failed");
}

function getParticipants (){
    axios.request({
        method : "GET",
        url : "http://www.boredapi.com/api/activity?participants=1",

    }).then(participantsFound).catch(participantsFailed);
}


// success function 
function participantsFound(response){
    console.log(response);
    console.log("call was a success");
    let random2 = response.data.activity;
    console.log(random2);
   document.getElementById('activity2').innerText = random2;
    
    
}


// failed function 
function participantsFailed(error){
    console.log(error);
    console.log(" call failed");
}

document.getElementById('clickMe').addEventListener('click' , getActivity);
 
document.getElementById('participants').addEventListener('click' ,getParticipants );
document.getElementById('participants2').addEventListener('click' ,getParticipants );
document.getElementById('participants3').addEventListener('click' ,getParticipants );
document.getElementById('participants4').addEventListener('click' ,getParticipants );
