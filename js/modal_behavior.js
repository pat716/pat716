/**
 * Created by psweeney on 6/29/17.
 */


var modalFadeDuration = 200, modalFadeEasing = "swing";
var modalMargin = 20, modalPadding = 10;

function showModalImage(){
    var modalContainer = $("#modalImageContainer");
    modalContainer.css("display", "block");
    modalContainer.finish();
    modalContainer.fadeOut(0, modalFadeEasing, function () {
        modalContainer.fadeIn(modalFadeDuration, modalFadeEasing);
    });
}

function hideModalImage(){
    var modalContainer = $("#modalImageContainer");
    modalContainer.finish();
    modalContainer.fadeOut(modalFadeDuration, modalFadeEasing, function () {
        modalContainer.css("display", "none");
        modalContainer.attr("src", "");
    });
}

function updateModalImageContainerProperties(){
    var windowElement = $(window), visibleContainer = $("#modalImageVisibleContainer"), imageElement = $("#modalImage");
    var windowWidth = windowElement.width(), windowHeight = windowElement.height();
    var maxContainerWidth = windowWidth - modalMargin * 2, maxContainerHeight = windowHeight - modalMargin * 2;
    var sourceImageWidth = imageElement.get(0).naturalWidth, sourceImageHeight = imageElement.get(0).naturalHeight;
    var windowAspectRatio = windowWidth/windowHeight;
    var maxContainerAspectRatio = maxContainerWidth/maxContainerHeight;
    var imageAspectRatio = sourceImageWidth/sourceImageHeight;

    var newContainerWidth = maxContainerWidth, newContainerHeight = maxContainerHeight;
    var newModalMargin = modalMargin;
    if(maxContainerAspectRatio > imageAspectRatio){
        newContainerHeight = maxContainerHeight;
        newContainerWidth = Math.min(maxContainerWidth, (newContainerHeight - modalPadding * 2) * imageAspectRatio + modalPadding * 2);
    } else {
        newContainerWidth = maxContainerWidth;
        newContainerHeight = Math.min(maxContainerHeight, (newContainerWidth - modalPadding * 2) / imageAspectRatio + modalPadding * 2);
        newModalMargin = (windowHeight - newContainerHeight)/2;
    }

    imageElement.width(newContainerWidth - modalPadding * 2);
    imageElement.height(newContainerHeight - modalPadding * 2);

    visibleContainer.width(newContainerWidth);
    visibleContainer.height(newContainerHeight);

    visibleContainer.css("margin-top", newModalMargin);
    visibleContainer.css("padding-top", modalPadding);

}