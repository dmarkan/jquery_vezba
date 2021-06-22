$(document).ready(function () {
    $('body').keyup(function (e) {
        let tagovi = document.querySelector(".tagovi");
        let tag = document.querySelector(".tag");
        if (e.keyCode == 32) {
            $(".tagovi").append("<p>" + tag.value + "</p>");
            $('.tag').val('');
        }
    })
});

$(document).ready(function () {
    $(".tagovi").click(function (e) {
        $(e.target).remove();
    })
});

$(document).ready(function () {
    $("p").mouseover(function (e) {
        $(e.target).css("background-color", "yellow");
    })
});

$(document).ready(function () {
    let ponisti = document.querySelector(".ponisti");
    $(".ponisti").click(function () {
        $('.tag').val('');
        $('.tagovi').empty();
    })
});

$(document).ready(function () {
    $(".generisi").click(function () {
        let generisi = document.querySelector(".generisi");
        let slucajan = document.querySelector(".slucajan");
        let broj = document.querySelector(".broj");
        let min = document.querySelector(".min").value;
        let max = document.querySelector(".max").value;
        min = Math.ceil(min);
        max = Math.floor(max);
        let random = Math.floor(Math.random() * (max - min + 1) + min)
        $(".broj").text(random);
        if (min < 0 || max > 10 || min > max) {
            alert("broj mora biti u opsegu od 0-10!");
            $(".broj").text("");
        }
    })
});