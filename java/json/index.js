fetch('java/json/data.json')
.then(res => res.json())
.then(data => callback(data));

function callback(data){
    const o4 =document.querySelector(".o-4");

    tagList='';
    data.slide.forEach(function(v) {
        tagList +=` <div class="o-4">
        <figure>
            <a href="#"> <img src="img/bali/e1.jpg" alt="1"></a>
            <a href="#"> <img src="img/bali/e2.jpg" alt="2"></a>
            <a href="#"> <img src="img/bali/e3.jpg" alt="3"></a>
            <a href="#"> <img src="img/bali/e4.jpg" alt="4"></a>
            <a href="#"> <img src="img/bali/e5.jpg" alt="5"></a>
            <a href="#"> <img src="img/bali/e6.jpg" alt="6"></a>
            <a href="#"> <img src="img/bali/e1.jpg" alt="7"></a>
            <a href="#"> <img src="img/bali/e2.jpg" alt="8"></a>
            <a href="#"> <img src="img/bali/e3.jpg" alt="9"></a>
        </figure>


    </div>`


    });
    o4.innerHTML=tagList;
    


}




const o1 = document.querySelector('.o-1');
window.addEventListener('scroll',function(){
    let elHei = o1.offsetTop;
    let winHei = window.innerHeight;
    if(elHei-winHei <= window.scrollY){
        o1.classList.add('active');
        
    }
});


const o5 = document.querySelector('.o-5');
window.addEventListener('scroll',function(){
    let elHei = o5.offsetTop;
    let winHei = window.innerHeight;
    if(elHei-winHei <= window.scrollY){
        o5.classList.add('active');
        
    }
});


const f1=document.querySelector(".book")



const r1=document.querySelector(".r-1")
const r3=document.querySelector(".r-3")
const rr3=document.querySelector(".r-3 li")
let domwi=r1.offsetTop;
let domwi2=r3.clientWidth;
console.log(domwi)
    

r3.addEventListener('scroll',function(){
    console.log( r3.offsetX );
    
    if(domwi2 > domwi){
        rr3.style.opacity="0";
    }
});






