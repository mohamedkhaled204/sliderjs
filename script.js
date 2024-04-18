let slideimages = Array.from(document.querySelectorAll('.slide-container img'));
let slidenumberelement = document.getElementById('slide-number');
let slidescount = slideimages.length ;
let currentsilde = 1 ;
let nextbtn = document.getElementById('next');
let prevbtn = document.getElementById('prev');


let paginationelement = document.createElement('ul')
paginationelement.setAttribute('id' ,'pagination-ul')
for(i = 1 ; i <= slideimages.length ; i++){
    let paginationitem = document.createElement('li')
    paginationitem.setAttribute('data-index' , i)
    paginationitem.appendChild(document.createTextNode(i))
    paginationelement.appendChild(paginationitem);
}

document.getElementById('indicator').appendChild(paginationelement);

let paginationcreatedul = document.getElementById('pagination-ul')
let paginationbullets = Array.from(document.querySelectorAll('#pagination-ul li'))
checker()
function checker(){
    slidenumberelement.textContent = 'Slide #' + (currentsilde) + ' of ' + (slidescount);
    removeallactive()
    slideimages[currentsilde -1].classList.add('active')
    paginationcreatedul.children[currentsilde -1 ].classList.add('active')


    if(currentsilde == 1){
        prevbtn.classList.add('disabled')
    }else{
        prevbtn.classList.remove('disabled')
    }

    if(currentsilde == slidescount){
        nextbtn.classList.add('disabled')
    }else{
        nextbtn.classList.remove('disabled')
    }

}

for(var i =0 ; i< paginationbullets.length ; i++){
    paginationbullets[i].onclick = function(){
        currentsilde = parseInt(this.getAttribute('data-index'))
        checker()
    }
}


function removeallactive(){
    slideimages.forEach(function(img){
        img.classList.remove('active')
    })
    paginationbullets.forEach(function(bullet){
        bullet.classList.remove('active')
    })
}


nextbtn.onclick =function(){
    if(nextbtn.classList.contains('disabled')){
        return false;
    }else{
        currentsilde++;
        checker()
    }
}
prevbtn.onclick =function(){
    if(prevbtn.classList.contains('disabled')){
        return false;
    }else{
        currentsilde--;
        checker()
    }
}
