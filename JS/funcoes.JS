class MobileVavBar {
    constructor(menuMobile, navBarRight, navBarLinks) {
        this.menuMobile = document.querySelector(menuMobile);
        this.navBarRight = document.querySelector(navBarRight);
        this.navBarLinks = document.querySelectorAll(navBarLinks);
        this.navBar = document.querySelector('.navBar');
        this.activeClass = "active";
        this.darkClass = "dark";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.navBarLinks.forEach((link, index) => {
            link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = `navLinkFade .5s ease forwards ${index / 7 + .3}s`);
        });
    }

    handleClick() {
        this.navBarRight.classList.toggle(this.activeClass);
        this.menuMobile.classList.toggle(this.activeClass);
        this.navBar.classList.toggle(this.darkClass);
        this.animateLinks();
    }

    addClickEvent() {
        this.menuMobile.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.menuMobile) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileVavBar = new MobileVavBar(
    ".menu-mobile",
    ".navBarRight",
    ".navBarRight li"
);

mobileVavBar.init();

const date = new Date();
const ano = date.getFullYear();

document.querySelector('.copy').textContent = ano;