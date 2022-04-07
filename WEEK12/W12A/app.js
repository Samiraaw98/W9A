function makePost(){
    axios.request({
        method : "POST",
        url : "https://jsonplaceholder.typicode.com/posts",
        headers :{
            'Content-Type' : 'application/json',
        }, 
    }).then(postSuccess).catch(postFailed);
}
function postSuccess (response){
    console.log(response);
    console.log(response.data);
    console.log("call was a success");
    Cookies =  response.data;
    document.getElementById('result').innerText = "Success";
    document.getElementById('result').style.color = "green";
}
function postFailed(error){
    console.log(error);
    console.log("call failed");
    document.getElementById('result').innerText = "please try again";
    document.getElementById('result').style.color = "red";

}

function updatedPost(){
    axios.request({
        method: "POST",
        url: "https://jsonplaceholder.typicode.com/posts/ ",
        headers : {
            'Content-Type' : 'application/json',
        },
        data:{
            title :"sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body : "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
            userId : 1,
        }
    }).then(updateSuccess).catch(updateFailed);
}
function updateSuccess(response){
        console.log(response);
        console.log(response.data.body);
        let post1 = response.data.body;
        document.getElementById('postUpdate').innerText = post1;
        console.log("call was a success");
        
}
function updateFailed(error){
    console.log(error);
    console.log("call failed");
}



 function deletePost(){
    axios.request({
        method : "DELETE",
        url : "https://jsonplaceholder.typicode.com/posts/1",
        headers :{
            'Content-Type' : 'application/json',
        }, 
        data:{
            title :"",
            body : "",
            userId : 1,
           
        }
    }).then(deleteSuccess).catch(deleteFailed);
}
function deleteSuccess(response){
    console.log(response);
    console.log(response.data.body);
    let deleted = response.data.body;
    document.getElementById('postUpdate').innerText = deleted;
    console.log("call was a success");
    
}
function deleteFailed(error){
    console.log(error);
}

 document.getElementById('submit').addEventListener('click', makePost);
 document.getElementById('update').addEventListener('click' , updatedPost);
 document.getElementById('delete').addEventListener('click' , deletePost);