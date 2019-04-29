//show menu when clicking on hamburger icon
function showMenu() {

    const showMenuIcon = document.getElementById("show-menu-icon");
    const navLinkGroup = document.getElementsByClassName("nav-link");
    const navList = document.getElementById("nav-list");

    const openMenu = function() {

        for (let i=0; i<navLinkGroup.length; i++) {

            let navLinkElement = navLinkGroup[i];
            const sublist = navLinkElement.querySelector('.sublist');
            const dropdownIconGroup = navLinkElement.getElementsByClassName('dropdown-icon');

            navLinkElement.classList.toggle("list-mobile-visible");

            if (sublist) {

                sublist.classList.remove("sublist-mobile-visible");

                for (let j=0; j<dropdownIconGroup.length; j++) {

                    let dropdownIconElement = dropdownIconGroup[j];

                    dropdownIconElement.classList.remove("fa-angle-up");
                    dropdownIconElement.classList.add("fa-angle-down");
                }
            }
        }

        navList.classList.toggle("short-nav-list");
        showMenuIcon.classList.toggle("fa-bars");
        showMenuIcon.classList.toggle("fa-times");

        showSubMenu();
    };

    //call the function when clicking at the icon
    showMenuIcon.addEventListener("click", openMenu);

} showMenu();


//show submenu when clicking on angle-down icon
function showSubMenu() {

    const makeSublistVisibleGroup = document.getElementsByClassName("make-sublist-visible");

    const openSubmenu = function() {

        let sublistGroup = document.getElementsByClassName("sublist");
        let dropdownIconGroup = document.getElementsByClassName("dropdown-icon");
        let thisSublist = this.parentElement.parentElement.querySelector('.sublist');
        let thisDropdownIcon = this.parentElement.parentElement.querySelector('.dropdown-icon');

        //if thisSublist contains sublist-mobile-visible
        if (thisSublist.classList.contains('sublist-mobile-visible')) {

            thisSublist.classList.remove('sublist-mobile-visible');
            thisDropdownIcon.classList.remove('fa-angle-up');
            thisDropdownIcon.classList.add('fa-angle-down');

        } else { //if not contains

            //remove sublist-mobile-visible class from every sublist
            for (let j=0; j<sublistGroup.length; j++) {

                sublistGroup[j].classList.remove("sublist-mobile-visible");
            }

            //add proper icons for every sublist
            for (let j=0; j<dropdownIconGroup.length; j++) {

                let dropdownIconElement = dropdownIconGroup[j];

                dropdownIconElement.classList.remove("fa-angle-up");
                dropdownIconElement.classList.add("fa-angle-down");
            }

            thisSublist.classList.add("sublist-mobile-visible");
            thisDropdownIcon.classList.add("fa-angle-up");
            thisDropdownIcon.classList.remove("fa-angle-down");
        }
    };

    for (let i=0; i<makeSublistVisibleGroup.length; i++) {

        let makeSublistVisibleElement = makeSublistVisibleGroup[i];
        let elementIcon = makeSublistVisibleElement.querySelector('.dropdown-icon');

        //call the function when clicking at the icon
        elementIcon.addEventListener("click", openSubmenu);
    }
}