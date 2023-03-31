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

// const courseBtn = document.querySelector("");
// const courseNav = document.querySelector(".left__course-outline");


//   const courseNav = document.querySelector(".left__course-outline");
//   const courseBtn = document.getElementById(".open-icon");
//   const closeBtn = document.getElementById(".close-icon");

//   if (courseBtn) {
//     courseBtn.addEventListener("click", () => {
//         courseNav.classList.add("show-course");
//         courseBtn.classList.add("show-Btn");
//         closeBtn.classList.add("show-menuBtn");
//     });
//   }

//   if (closeBtn) {
//     closeBtn.addEventListener("click", () => {
//         courseNav.classList.remove("show-course");
//       closeBtn.classList.remove("show-Btn");
//       menuBtn.classList.remove("show-menuBtn");
//     });
//   }

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