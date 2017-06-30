/**
 * Created by psweeney on 6/15/17.
 */

var impressionistSlide = 0, impressionistSlideCount = 8, donationSlide = 0, donationSlideCount = 9;
var projectSlideFadeDuration = 400, projectSlideFadeEasing = "swing";

function projectTabSetup(){
    impressionistSlide = 0;
    donationSlide = 0;

    var impressionistImageUrl = getImageUrlForProjectPanelState("impressionist", 0, false);
    var donationImageUrl = getImageUrlForProjectPanelState("donation", 0, false);

    $("#impressionistProjectImage").attr("url", impressionistImageUrl);
    $("#impressionistProjectBackgroundImage").fadeOut(0, projectSlideFadeEasing);
    $("#donationProjectImage").attr("url", donationImageUrl);
    $("#donationProjectBackgroundImage").fadeOut(0, projectSlideFadeEasing);
    $("#impressionistProjectText").html(getTextForProjectPanelState("impressionist", 0));
    $("#donationProjectText").html(getTextForProjectPanelState("donation", 0));
}

function getImageSizeForWindowSize(){
    var windowWidth = $(window).width();
    if(windowWidth < 1600){
        return "medium";
    } else if(windowWidth < 1200){
        return "small";
    }
    return "large";
}

function getSlideNum(projectId){
    switch (projectId){
        case "impressionist":
            return impressionistSlide;
        case "donation":
            return donationSlide;
    }
    return 0;
}

function incrementSlide(projectId){
    switch (projectId){
        case "impressionist":
            impressionistSlide = getBoundedSlideNum(projectId, impressionistSlide + 1);
            break;
        case "donation":
            donationSlide = getBoundedSlideNum(projectId, donationSlide + 1);
            break;
    }
}

function decrementSlide(projectId){
    switch (projectId){
        case "impressionist":
            impressionistSlide = getBoundedSlideNum(projectId, impressionistSlide - 1);
            break;
        case "donation":
            donationSlide = getBoundedSlideNum(projectId, donationSlide - 1);
            break;
    }
}

function getSlideCount(projectId){
    switch (projectId){
        case "impressionist":
            return impressionistSlideCount;
        case "donation":
            return donationSlideCount;
    }
    return 0;
}

function getBoundedSlideNum(projectId, slideNum){
    return Math.max(0, Math.min(getSlideCount(projectId) - 1, slideNum));
}

function getImageUrlForProjectPanelState(projectId, slideNum, forceOriginal){
    var urlString = "images/";
    if (forceOriginal){
        urlString += "original/";
    } else {
        urlString += getImageSizeForWindowSize() + "/";
    }

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
    var slideNumber = getSlideNum(projectId), slideCount = getSlideCount(projectId),
        leftButton = $("#" + projectId + "LeftButton"),
        rightButton = $("#" + projectId + "RightButton");

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

function updateButtonVerticalMargins(){
    var impressionistImageHeight = $("#impressionistProjectImage").height(),
        donationImageHeight = $("#donationProjectImage").height();

    $("button.impressionist-button").each(function () {
        $(this).css("margin-top", impressionistImageHeight/2 - $(this).height());
    });
    $("button.donation-button").each(function () {
        $(this).css("margin-top", donationImageHeight/2 - $(this).height());
    });
}

function updateDonationTextTopMargin(){
    var donationImageHeight = $("#donationProjectImage").height(),
        donationTextElement = $("#donationProjectText");
    donationTextElement.css("margin-top", donationImageHeight/2 - donationTextElement.height()/2);
}

function updateProjectImageSize(){
    var availableHeight = $(window).height() - $("#bs-example-navbar-collapse-1").height();
    $(".project-image").css("max-height", availableHeight * 0.65);
    $(".background-image").css("max-height", availableHeight * 0.65);

    $("#impressionistProjectBackgroundImage").css("margin-left", $("#impressionistProjectImage").css("margin-left"));
    $("#donationProjectBackgroundImage").css("margin-left", $("#donationProjectImage").css("margin-left"));
}

function updateVerticalMargins(){
    updateButtonVerticalMargins();
    updateDonationTextTopMargin();
    updateProjectImageSize();
    updateProjectImageSize();
}

function changeProjectImage(projectId, direction){
    var imgElement = $("#" + projectId + "ProjectImage"),
        backgroundImgElement = $("#" + projectId + "ProjectBackgroundImage");
    var newSlideNum = getBoundedSlideNum(projectId, getSlideNum(projectId) + direction);
    var preloadSlideNum = getBoundedSlideNum(projectId, newSlideNum + 1);
    var newImgUrl = getImageUrlForProjectPanelState(projectId, newSlideNum, false),
        preloadImgUrl = getImageUrlForProjectPanelState(projectId, preloadSlideNum, false);

    if(backgroundImgElement.attr("src") !== newImgUrl){
        backgroundImgElement.attr("src", newImgUrl);
    }
    backgroundImgElement.fadeIn(projectSlideFadeDuration, projectSlideFadeEasing, function () {
        imgElement.attr("src", newImgUrl);
        backgroundImgElement.fadeOut(0, projectSlideFadeEasing);
        backgroundImgElement.attr("src", preloadImgUrl);
    });
}

function changeProjectText(projectId, direction){
    var textElement = $("#" + projectId + "ProjectText");
    var newText = getTextForProjectPanelState(projectId,
        getBoundedSlideNum(projectId, getSlideNum(projectId) + direction));
    textElement.fadeOut(projectSlideFadeDuration/2, projectSlideFadeEasing, function () {
        textElement.html(newText);
        if(projectId === "donation") updateDonationTextTopMargin(false);
        textElement.fadeIn(projectSlideFadeDuration/2, projectSlideFadeEasing);
    })
}

function loadNextSlide(projectId){
    changeProjectImage(projectId, 1);
    changeProjectText(projectId, 1);
    incrementSlide(projectId);
    updateButtonsForProject(projectId);
}


function loadPrevSlide(projectId){
    changeProjectImage(projectId, -1);
    changeProjectText(projectId, -1);
    decrementSlide(projectId);
    updateButtonsForProject(projectId);
}


function launchModalImageForCurrentSlide(projectId){
    $("#modalImage").attr("src", getImageUrlForProjectPanelState(projectId, getSlideNum(projectId), true));
    showModalImage();
}