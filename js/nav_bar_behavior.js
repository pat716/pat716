/**
 * Created by psweeney on 3/28/17.
 */

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

    loadPageContent(elementId);
}

function loadPageContent(elementId){
    var mainContent = "", mainContentContainer = $("#mainContentContainer");
    switch(elementId){
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

    switch (elementId){
        case "navBarProjects":
            projectTabSetup();
            break;
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
