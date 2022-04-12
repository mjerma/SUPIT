$("#btn-nv").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#nase-vrijednosti").offset().top - 100
    }, 50);
});

$("#btn-pov").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#povijest").offset().top - 100
    }, 50);
});

$("#btn-ag").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#algebra-grupa").offset().top - 100
    }, 50);
});

$("#btn-kdn").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#kako-do-nas").offset().top - 100
    }, 50);
});