
fetch('java/json/data3.json')
    .then(res => res.json())
    .then(data3 => callback(data3));


function callback(data3) {

    const w = document.querySelector('.scroll');
  

    tagList = '';

    data3.work.forEach(function (v, k) {

    tagList += `<div class="w-${k + 2}">
                        <p>
                            <span><b>${v.name}</b><br> <b>${v.location}</b></span><br><br>
                            ${v.detail}
                        </p>
                        <figure><img src="${v.img}"alt="15"></figure>
                    </div>
                    `;

    });

    w.innerHTML = tagList;



    const winHei = window.innerHeight;

    const elImg = document.querySelectorAll('.scroll > div > figure');
    let elHei;


    window.addEventListener('scroll', function (e) {
        for (let i = 0; i < elImg.length; i++) {
            elHei = elImg[i].offsetTop;

            if (elHei - winHei <= window.scrollY) {
                elImg[i].classList.add('active');
               

            }
        }
    })


    const elP = document.querySelectorAll('.scroll > div > p');
    let elHei2;
    let j;
    window.addEventListener('scroll', function () {
        for (let j = 0; j < elP.length; j++){
            elHei2 = elP[j].offsetTop;
            if (elHei2 - winHei <= window.scrollY) {
               
                elP[j].classList.add('active');
                
            }
        }
            

        

    });









}







































