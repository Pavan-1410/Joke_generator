let btn1 = document.querySelector(".btn");
var jock = document.querySelector("#jock")
var limit = 3;
const apikey = "ZoSK2QVi9jrNCisIVmvw1w==U3GLQKvrj5Le4dQc";
const options={
  method : "GET",
  headers : {
    'X-Api-Key' : apikey,
  },
};
const apiurl = "https://api.api-ninjas.com/v1/dadjokes" ;
async function getjocks(){
  jock.innerText = "Updating !!!";
  btn1.disable = true;
  btn1.innerText = "wait";
    const response =await fetch(apiurl,options);
    const data = await response.json();
    // console.log(data[0].joke);
    jock.innerText = data[0].joke;
    btn1.disable = false;
    btn1.innerText = "Tell me a joke";
}
btn1.addEventListener("click",getjocks)
// changes