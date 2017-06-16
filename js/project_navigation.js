/**
 * Created by psweeney on 6/15/17.
 */

var impressionistSlide = 0, impressionistSlideCount = 8, donationSlide = 0, donationSlideCount = 9;
var fadeDuration = 600, fadeEasing = "swing";

function projectTabSetup(){
    impressionistSlide = 0;
    donationSlide = 0;

    var impressionistImageUrl = getImageUrlForProjectPanelState("impressionist", 0);
    var donationImageUrl = getImageUrlForProjectPanelState("donation", 0);

    $("#impressionistProjectImage").attr("url", impressionistImageUrl);
    $("#impressionistProjectBackgroundImage").attr("url", impressionistImageUrl);
    $("#donationProjectImage").attr("url", donationImageUrl);
    $("#donationProjectBackgroundImage").attr("url", donationImageUrl);
    $("#impressionistProjectText").html(getTextForProjectPanelState("impressionist", 0));
    $("#donationProjectText").html(getTextForProjectPanelState("donation", 0));
}

function getImageUrlForProjectPanelState(projectId, slideNum){
    var urlString = "images/";

    switch (projectId){
        case "impressionist":
            urlString += "impressionist/";
            switch (slideNum){
                case 0:
                    urlString += "norman_start.png";
                    break;
                case 1:
                    urlString += "norman_loaded.png";
                    break;
                case 2:
                    urlString += "norman_options.png";
                    break;
                case 3:
                    urlString += "norman_draw_start.png";
                    break;
                case 4:
                    urlString += "norman_draw_end.png";
                    break;
                case 5:
                    urlString += "bath_spraypaint_1.png";
                    break;
                case 6:
                    urlString += "bath_spraypaint_2.png";
                    break;
                case 7:
                    urlString += "bath_end.png";
                    break;
                default:
                    urlString = "images/img_src_error.jpg";
                    break;
            }
            break;
        case "donation":
            urlString += "donation/";
            switch (slideNum){
                case 0:
                    urlString += "login.png";
                    break;
                case 1:
                    urlString += "home.png";
                    break;
                case 2:
                    urlString += "user_feed.png";
                    break;
                case 3:
                    urlString += "user_post.png";
                    break;
                case 4:
                    urlString += "friend_feed.png";
                    break;
                case 5:
                    urlString += "charity_feed.png";
                    break;
                case 6:
                    urlString += "charity_profile.png";
                    break;
                case 7:
                    urlString += "charity_data.png";
                    break;
                case 8:
                    urlString += "charity_personal_overview.png";
                    break;
                default:
                    urlString = "images/img_src_error.jpg";
                    break;
            }
            break;
        default:
            urlString = "images/img_src_error.jpg";
            break;
    }

    return urlString;
}

function getTextForProjectPanelState(projectId, slideNum){
    if(slideNum < 0) return "Error; slide < 0";
    if((projectId === "impressionist" && slideNum < impressionistSlideCount) ||
        (projectId === "donation" && slideNum < donationSlideCount)){
        return getFragment("fragments/text/project_slide_captions/" + projectId + (slideNum) + ".txt");
    }
}

function updateButtonsForProject(projectId){
    var slideNumber = 0, slideCount = 1, leftButton = null, rightButton = null;

    switch (projectId){
        case "impressionist":
            slideNumber = impressionistSlide;
            slideCount = impressionistSlideCount;
            leftButton = $("#impressionistLeftButton");
            rightButton = $("#impressionistRightButton");
            break;
        case "donation":
            slideNumber = donationSlide;
            slideCount = donationSlideCount;
            leftButton = $("#donationLeftButton");
            rightButton = $("#donationRightButton");
            break;
    }

    if(leftButton === null || rightButton === null) return;

    if(slideNumber === 0){
        leftButton.prop('disabled', true);
    } else {
        leftButton.prop('disabled', false);
    }

    if(slideNumber === slideCount - 1){
        rightButton.prop('disabled', true);
    } else {
        rightButton.prop('disabled', false);
    }
}


function imageElementFadeTransition(imgElement, backgroundImgElement, nextImgUrl){
    imgElement.attr("src", nextImgUrl);
    backgroundImgElement.fadeOut(fadeDuration, fadeEasing, function () {
        backgroundImgElement.attr("src", nextImgUrl);
        backgroundImgElement.fadeIn(0, fadeEasing);
    });
}

function textElementFadeTransition(textElement, newText){
    textElement.fadeOut(fadeDuration/2, fadeEasing, function () {
        textElement.html(newText);
        textElement.fadeIn(fadeDuration/2, fadeEasing);
    })
}

function loadNextSlide(projectId){
    switch (projectId){
        case "impressionist":
            impressionistSlide += 1;
            if(impressionistSlide > impressionistSlideCount - 1){
                impressionistSlide = impressionistSlideCount - 1;
            }

            var imgElement = $("#impressionistProjectImage"), textElement = $("#impressionistProjectText");
            var backgroundImgElement = $("#impressionistProjectBackgroundImage");
            imageElementFadeTransition(imgElement, backgroundImgElement,
                getImageUrlForProjectPanelState(projectId, impressionistSlide));
            textElementFadeTransition(textElement, getTextForProjectPanelState(projectId, impressionistSlide));
            break;
        case "donation":
            donationSlide += 1;
            if(donationSlide > donationSlideCount - 1){
                donationSlide = donationSlideCount - 1;
            }

            imgElement = $("#donationProjectImage");
            textElement = $("#donationProjectText");
            backgroundImgElement = $("#donationProjectBackgroundImage");
            imageElementFadeTransition(imgElement, backgroundImgElement,
                getImageUrlForProjectPanelState(projectId, donationSlide));
            textElementFadeTransition(textElement, getTextForProjectPanelState(projectId, donationSlide));
            break;
    }

    updateButtonsForProject(projectId);
}


function loadPrevSlide(projectId){
    switch (projectId){
        case "impressionist":
            impressionistSlide -= 1;
            if(impressionistSlide < 0){
                impressionistSlide = 0;
            }

            var imgElement = $("#impressionistProjectImage"), textElement = $("#impressionistProjectText");
            var backgroundImgElement = $("#impressionistProjectBackgroundImage");

            imageElementFadeTransition(imgElement, backgroundImgElement,
                getImageUrlForProjectPanelState(projectId, impressionistSlide));
            textElementFadeTransition(textElement, getTextForProjectPanelState(projectId, impressionistSlide));
            break;
        case "donation":
            donationSlide -= 1;
            if(donationSlide < 0){
                donationSlide = 0;
            }

            imgElement = $("#donationProjectImage");
            textElement = $("#donationProjectText");
            backgroundImgElement = $("#donationProjectBackgroundImage");
            imageElementFadeTransition(imgElement, backgroundImgElement,
                getImageUrlForProjectPanelState(projectId, donationSlide));
            textElementFadeTransition(textElement, getTextForProjectPanelState(projectId, donationSlide));
            break;
    }

    updateButtonsForProject(projectId);
}