function getAdvice(){
axios.request({
    method : "GET",
    url: "	https://api.adviceslip.com/advice"
}).then(adviceFound).catch(adviceFailed);
}
// success function 
function adviceFound(response){
    console.log("The call was a success");
    console.log(response);
    console.log(response.data);
    let quote = response.data.slip.advice;
    console.log(quote);
    document.getElementById('quote').innerText = quote;

}
// failed function
function adviceFailed(error){
    console.log("The call was a failure");
    console.log(error);
}

document.getElementById('newAdvice').addEventListener('click', getAdvice);