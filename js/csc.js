const dropDowns = document.querySelectorAll(".drop__down-content");

dropDowns.forEach(function (courseDropDown) {
    // console.log(courseDropDown);
    const btn = courseDropDown.querySelector(".course__arrow");

    // console.log(btn)

    btn.addEventListener("click", function () {
        dropDowns.forEach(function (item) {
            if(item !== courseDropDown){
                item.classList.remove("show-text");
            }
        });
        courseDropDown.classList.toggle("show-text");
    });
});

// show profile details on click
const profileBtn = document.querySelector(".users__profileURL");
const dropDown = document.querySelector(".user__info");


profileBtn.addEventListener("click", () => {
dropDown.classList.toggle("show-dropdown");
});




// change active class on click

// courseOutline = document.querySelector(".course__outline").querySelectorAll("a");
// console.log(courseOutline);

// courseOutline.forEach(link => {
//     link.addEventListener("click", () => {
//         courseOutline.forEach(nav=>nav.classList.remove("active"))

//             this.classList.add("active");
//     }); 
// });


// const currentLocation = location.href;
// const menuItem = document.querySelectorAll(".course__outline a")
// console.log(menuItem);
// const menuLength = menuItem.length;

// for(let i = 0; i < menuLength; i++){
//     if(menuItem[i].href === currentLocation){
//         menuItem.className = "active"
//     }
// }

// let header = document.querySelector(".course__outline");
// let links = header.getElementByClassName("active__nav");

// for(let i = 0; i < links.length; i++) {
//     links[i].addEventListener("click", function () {
//         let current = document.getElementByClassName("active");
//         current[0].className = current[0].className.replace("active", "");
//         this.className += " active" ;
//     });

// }


// let links = document.querySelectorAll(".active__nav");

// links.forEach( li => {
//     li.addEventListener('click', () => {
//         resetLink();
//         li.classList.add('active');
//     });
// });

// function resetLink(){
//     links.forEach(li => {
//         li.classList.remove("active");
//     });
// };


window.onload = () => {
    const tab_switchers = document.querySelectorAll('[data-switcher]');

    for (let i = 0; i < tab_switchers.length; i++){
        const tab_switcher = tab_switchers[i];
        const page_id = tab_switcher.dataset.tab;


        tab_switcher.addEventListener('click', () => {
            document.querySelector(".course__outline .active__nav.is-active").classList.remove('is-active');
        
            tab_switcher.parentNode.classList.add('is-active');
        

            switchPage(page_id);
        });

    }
}


function switchPage (page_id) {
    const current_page = document.querySelector('.pages .page.is-active');
    current_page.classList.remove("is-active");
    
    const next_page = document.querySelector(`.pages .page[data-page="${page_id}"]`)

    next_page.classList.add("is-active");
}