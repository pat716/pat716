/**
 * Created by psweeney on 6/29/17.
 */

var modalFadeDuration = 200, modalFadeEasing = "swing";

function showModalImage(){
    var modalContainer = $("#modalImageContainer");
    modalContainer.css("display", "block");
    modalContainer.fadeOut(0, modalFadeEasing, function () {
        modalContainer.fadeIn(modalFadeDuration, modalFadeEasing);
    });
}

function hideModalImage(){
    var modalContainer = $("#modalImageContainer");
    modalContainer.fadeOut(modalFadeDuration, modalFadeEasing, function () {
        modalContainer.css("display", "none");
    });
}

function updateModalImageContainerProperties(){
    var visibleContainer = $("#modalImageVisibleContainer");
    var availableSpace = $(window).height() - visibleContainer.height();
    visibleContainer.css("margin-top", availableSpace/4);
}