/**
 * Created by psweeney on 3/28/17.
 */

function onClickNavbarElement(elementId){
    var former = $(".navbar-active"), current = $("#" + elementId);
    former.addClass("navbar-inactive");
    former.removeClass("navbar-active");
    current.removeClass("navbar-inactive");
    current.addClass("navbar-active");

    loadPageContent(elementId);
}

function loadPageContent(elementId){
    console.log(elementId);
    var mainContent = "", mainContentContainer = $("#mainContentContainer");
    switch(elementId){
        case "navBarHome":
            mainContent = getMainContentElement(getHomeContent());
            break;
        case "navBarAbout":
            mainContent = getMainContentElement(getAboutContent());
            break;
        case "navBarProjects":
            mainContent = getMainContentElement(getProjectsContent());
            break;
        case "navBarContact":
            mainContent = getMainContentElement(getContactContent());
            break;
    }

    mainContentContainer.empty();
    mainContentContainer.append(mainContent);

}

function getMainContentElement(innerElement){
    return "<div id='mainContent'>" + innerElement + "</div>";
}

function getHomeContent(){
    return "<p>Home</p>";
}

function getAboutContent(){
    return "<p>About</p>";
}

function getProjectsContent(){
    return "<p>Projects</p>";
}

function getContactContent(){
    return "<p>Contact</p>";
}

