const tours = [
    {
      id: 1,
      title: "New Your in One day",
      price: 1500.99,
      img: 'https://images.unsplash.com/flagged/photo-1575597255483-55f2afb6f42c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
     
    },
    {
      id: 2,
      title: "Eiffel Tower Summit",
     price: 1343.99,
      img:  'https://images.unsplash.com/photo-1576519818621-041ec8dce302?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      
    },
    {
      id: 3,
      title: "Panama Tour",
      category: "shakes",
      price: 3566.99,
      img: 'https://images.unsplash.com/photo-1475066392170-59d55d96fe51?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
     
    }
]
const toursItems=document.querySelector(".tours-items")
window.addEventListener("DOMContentLoaded", function () {
    displayMenuItems(tours);
   });
  
  function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {

  
      return `<article class="menu-item">
            <img src=${item.img} alt=${item.title} class="photo" />
            <div class="item-info">
              <div>
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
              </div>
              
            </div>
          </article>`;
    });
    displayMenu = displayMenu.join("");

  
    toursItems.innerHTML = displayMenu;
  }

// ********** set date ************
const date=document.getElementById("date")
date.innerHTML=new Date().getFullYear()

// ********** close links ************
const navToggle=document.querySelector(".nav-toggle");
const linksContainer=document.querySelector(".links-container")
const links=document.querySelector(".links");

navToggle.addEventListener("click",function(){
    const containerHeight=linksContainer.getBoundingClientRect().height
    const linksHeight=links.getBoundingClientRect().height;
    
    if(containerHeight===0){
        linksContainer.style.height=`${linksHeight}px`;

    }
    else{
        linksContainer.style.height=0
    }
})
// ********** fixed navbar ************
 const navbar=document.getElementById("nav");
 const topLink=document.querySelector(".top-link");
 window.addEventListener("scroll",function(){
    const scrollHeight=window.pageYOffset;
    const navHeight=navbar.getBoundingClientRect().height;
    if(scrollHeight>navHeight){
        navbar.classList.add("fixed-nav")
    }
    else{
        navbar.classList.remove("fixed-nav")
    }
    if(scrollHeight>500){
        topLink.classList.add("show-link")
    }
    else{
        topLink.classList.remove("show-link")
    }
 })

// ********** smooth scroll ************
// select links
const scrollLinks=document.querySelectorAll(".scroll-link")
scrollLinks.forEach(function(link){
    link.addEventListener("click",function(e){
        e.preventDefault();
        const id=e.currentTarget.getAttribute("href").slice(1);
        const element=document.getElementById(id)
        const navHeight=navbar.getBoundingClientRect().height
        const containerHeight=linksContainer.getBoundingClientRect().height;
        const fixedNav=navbar.classList.contains("fixed-nav");
        let position=element.offsetTop-navHeight
        
        if(!fixedNav){
            position=position-navHeight
        }

        if(navHeight >82){
            position=position+containerHeight;
        }
        window.scrollTo({
            left:0,
            top:position
        });
        linksContainer.style.height=0;
    })
})

