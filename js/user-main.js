var marginLeft = '280px',
    restMarginLeft = '-280px',
    marginRight = '220px',
    restMarginRight = '-220px';

/* Start NEW Variables */
var isHeaderScrollActive = false;

/* Start preloader */
$(window).on("load", function () {
    $("#loader-container").fadeOut(1000);
  });
  /* End preloader */

/* Style Scroll Effect */
if (isHeaderScrollActive) {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            // Show header
            document.getElementById("header").style.top = "0";
            document.getElementById("header-sm").style.top = "0";
        } else {
            // hide header
            document.getElementById("header").style.top = "-81px";
            document.getElementById("header-sm").style.top = "-81px";

        }
        prevScrollpos = currentScrollPos;
    }

}

$(document).ready(function() {
    $('.search').on('keyup', function() {
        var searchTerm = $(this).val().toLowerCase();
        $('#userTbl tbody tr').each(function() {
            var lineStr = $(this).text().toLowerCase();
            if (lineStr.indexOf(searchTerm) === -1) {
                $(this).hide();
            } else {
                $(this).show();
            }
        });
    });
});

$('#search').keyup(function() {
    $('html, body').animate({
        scrollTop: $("#sort-container").offset().top - 100
    }, 1000);

});

