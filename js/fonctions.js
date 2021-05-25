function menu() {
    var menu = document.getElementById("menu");
    var corpsScrollTop = document.documentElement.scrollTop;
    var headerOffsetHeight = document.getElementById("header").offsetHeight;
    if (corpsScrollTop > headerOffsetHeight) {
        menu.classList.remove("menu-normal");
        menu.classList.add("menu-top");
    } else {
        menu.classList.add("menu-normal");
        menu.classList.remove("menu-top");
    }
}

function hautPage() {
    document.documentElement.scrollTop = 0;
}
