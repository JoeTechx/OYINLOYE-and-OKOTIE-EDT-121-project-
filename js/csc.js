const dropDowns = document.querySelectorAll(".drop__down-content");

dropDowns.forEach(function (courseDropDown) {
    console.log(courseDropDown);
    const btn = courseDropDown.querySelector(".course__arrow");

    console.log(btn)

    btn.addEventListener("click", function () {
        dropDowns.forEach(function (item) {
            if(item !== courseDropDown){
                item.classList.remove("show-text");
            }
        });
        courseDropDown.classList.toggle("show-text");
    });
});


const profileBtn = document.querySelector(".users__profileURL");
const dropDown = document.querySelector(".user__info");

// if(profileBtn){

profileBtn.addEventListener("click", () => {
dropDown.classList.toggle("show-dropdown");
});

// }
