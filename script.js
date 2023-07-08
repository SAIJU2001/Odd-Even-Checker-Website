const textinput = document.querySelector("#text");
console.log(textinput);
const result = document.getElementById("output");
const checkbtn = document.getElementById("btn");

function textfxn() 
{
    result.innerHTML = "";
    let text = document.getElementById("text").value;
    let newtext = text.replace(/[^0-9]/g, '');
    let alphatext = text.replace(/[0-9]/g, '');
    console.log(newtext, alphatext);

    if (newtext && !alphatext) 
    {
        checkbtn.addEventListener("click", check);
    }
    else 
    {
        alert("Please Enter a Positive Value");
    }
}

function check() 
{
    let text = document.getElementById("text").value;
    let newtext = text.replace(/[^0-9]/g, '');

  if (newtext === "") 
  {
        result.innerHTML = "";
        return;
    }

  let isPrime = true;
    if (newtext % 2 == 0) 
    {
        result.innerHTML = `${newtext} is an Even number.`;
    }
    else 
    {
        result.innerHTML = `${newtext} is an odd number.`;
    }
}

