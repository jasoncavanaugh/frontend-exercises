//Hamburger menu code

//On click for the hamburger menu
function onHamburgerMenuClick() {
  const hamburgerTabs = document.getElementsByClassName("hamburger-tab");
  // for (const ht of hamburgerTabs) {
  //   ht.classList.toggle("active");
  // }
  const options = document.getElementsByClassName("hamburger-menu-options")[0];
  options.classList.toggle("active");

}
const hamburgerMenu = document.getElementsByClassName("hamburger-menu")[0];
hamburgerMenu.addEventListener("click", onHamburgerMenuClick);

//On resize of the window
function onWindowResize() {

  const windowWidth = window.innerWidth;

  const tabs = ["gift-tab", "events-tab", "news-tab", "college-schools-tab", "admissions-tab"];
  const widths = [1140, 1060, 940, 850, 600];
  const numTabs = 5;
  let i = 0;
  for (; i < numTabs && windowWidth <= widths[i]; i++) {
    //Put these inside the hamburger menu
    const curTab = document.getElementById(tabs[i]);
    if (!curTab.classList.contains("hamburger-tab")) {
      curTab.classList.add("hamburger-tab");
    }
  }
  if (i > 0) {
    const hamburgerMenu = document.getElementsByClassName("hamburger-menu")[0];
    hamburgerMenu.classList.add("active");//Hamburger menu visible
  }
  //Remove these from the hamburger menu
  for (; i < tabs.length; i++) {
    const curTab = document.getElementById(tabs[i]);
    if (curTab.classList.contains("hamburger-tab")) {
      curTab.classList.remove("hamburger-tab");
      curTab.classList.remove("active");
    }
  }
}
onWindowResize();//on load

window.onresize = onWindowResize;
