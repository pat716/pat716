/**
 * Created by psweeney on 3/28/17.
 */

var currentPageContent = "navBarAbout";

function onClickNavbarElement(elementId){
    var former = $(".active"), current = $("#" + elementId);
    former.removeClass("active");
    current.addClass("active");

    /*
    former.addClass("navbar-inactive");
    former.removeClass("navbar-active");
    current.removeClass("navbar-inactive");
    current.addClass("navbar-active");
    */

    currentPageContent = elementId;
    loadPageContent();
}

function loadPageContent(){
    var mainContent = "", mainContentContainer = $("#mainContentContainer");
    switch(currentPageContent){
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

    if(currentPageContent === "navBarProjects"){
        projectTabSetup();
    }
}

function getMainContentElement(innerElement){
    return "<div id='mainContent'>" + innerElement + "</div>";
}

function getFragment(url){
    return $.ajax({
        url: url,
        async: false
    }).responseText;
}

function getAboutContent(){
    return getFragment("fragments/html/about_mc_frag.html");
}

function getProjectsContent(){
    return getFragment("fragments/html/proj_mc_frag.html");
}

function getContactContent(){
    return getFragment("fragments/html/contact_mc_frag.html");
}
