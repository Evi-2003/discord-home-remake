/* Dat de sections binnen komen tijdens het scrollen 
 BRON: ChatGPT en https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver
*/ 
let secties = [...document.querySelectorAll('section')];

const scroller = new IntersectionObserver(
  (invoer) => {
    invoer.forEach((sectie) => {
      if (sectie.isIntersecting && sectie.target) {
        sectie.target.classList.add('fadein');
      }
    });
  },
  { drempel: 0.1 }
);

secties.slice(1).forEach(sectie => scroller.observe(sectie));


/* Om meer Perks te laten zien, door het klikken op een knop, en het weer verstoppen ervan */
var showPerksButton = document.querySelector('.nitro section:nth-of-type(3) button');
var perksSection = document.querySelector('.nitro section:nth-of-type(3) > section')
var isHidden = true;

if (window.location.href.endsWith('nitro.html')) {
  showPerksButton.addEventListener('click', function () {
    if(isHidden == true){
        perksSection.classList.remove('hidden');
        showPerksButton.textContent = "Hide Perks"
        isHidden = false;
    } else {
        perksSection.classList.add('hidden');
        showPerksButton.textContent = "Show Perks"
        isHidden = true;
    }
  })


/* Ik had Javascript nodig om de verschillende FAQ Tabs knoppen te laten werken */
var faqSectionHolder = document.querySelector('.nitro section:nth-of-type(5)');

var faqTabs = Array.from(faqSectionHolder.querySelectorAll('section section'));
var buttons = Array.from(faqSectionHolder.querySelectorAll('ul li button'));

function clearActiveState() {
  buttons.forEach((button) => {
    button.classList.remove('active');
  });

  faqTabs.forEach((section) => {
    section.classList.add('hidden');
  });
}

function showTab(index) {
  buttons[index].classList.add('active');
  faqTabs[index].classList.remove('hidden');
}

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    clearActiveState();
    showTab(index);
  });
});
}
/* NAV Menu */
var isMenuOpen = true;
var menuButton = document.querySelector('header nav button');
var sideMenu = document.querySelector('header nav ul');
var buttonInSideMenu = document.querySelector('header nav ul li:nth-of-type(1) button');

menuButton.addEventListener('click', function(){
  if(isMenuOpen == false){
    isMenuOpen = true;
    sideMenu.classList.remove('showMenu');
  } else {
    isMenuOpen = false;
    sideMenu.classList.add('showMenu');
  }
})

buttonInSideMenu.addEventListener('click', function(){
  if(isMenuOpen == false){
    isMenuOpen = true;
    sideMenu.classList.remove('showMenu');
  } else {
    isMenuOpen = false;
    sideMenu.classList.add('showMenu');
  }
})