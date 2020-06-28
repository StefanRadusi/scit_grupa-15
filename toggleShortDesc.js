
const button=document.getElementById("preview");
const paragraph=document.getElementById("first");


button.addEventListener("click",previewDesc);

function previewDesc(e){
    paragraph.classList.toggle("article-selected-read");
    
    if(button.innerText==="Hide Desc")
    button.innerText="Short Desc";

    else button.innerText="Hide Desc";

    e.stopPropagation();

}



const Button2=document.getElementById("preview2");
const Button3=document.getElementById("preview3");

const paragraph2=document.getElementById("second");
const paragraph3=document.getElementById("third");



Button2.addEventListener("click",function(e){
    paragraph2.classList.toggle("article-selected-read");
   
    if(Button2.innerText==="Hide Desc")
    Button2.innerText="Short Desc";

    else Button2.innerText="Hide Desc";
    e.stopPropagation();

    

});



Button3.addEventListener("click",function(e){
    paragraph3.classList.toggle("article-selected-read");
   
    if(Button3.innerText==="Hide Desc")
    Button3.innerText="Short Desc";

    else Button3.innerText="Hide Desc";

    e.stopPropagation();

});


