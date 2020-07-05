
    window.onscroll = function() {changeMenu()};
    const header = document.getElementById("header");

    const changeMenu = () => {
        if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
            header.className = "header header__scroll"
        } else {
            header.className = "header header__static"
        }
    }