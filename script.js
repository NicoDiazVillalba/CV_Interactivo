$(document).ready(function () {
    $('#btn-theme-toggle').click(function () {
        $('body').toggleClass('dark-theme');

    });

});

document.addEventListener("DOMContentLoaded", function () {
    const barras = document.querySelectorAll(".circular-progress");

    barras.forEach(barra => {
        let progressValue = barra.querySelector(".progress-value");
        let progressStartValue = 0;
        let progressEndValue = parseInt(barra.getAttribute("data-valor"));
        let speed = 70;

        let progress = setInterval(() => {
            progressStartValue++;
            progressValue.textContent = `${progressStartValue}%`;
            barra.style.background = `conic-gradient(#11e4cb ${progressStartValue * 3.6}deg, #ededed 0deg)`;

            if (progressStartValue == progressEndValue) {
                clearInterval(progress);
            }
        }, speed);
    });
});


$(document).ready(function () {
    var btnScrollTop = $('#btn-scroll-top');


    $(window).scroll(function () {
        if ($(window).scrollTop() > 200) {
            btnScrollTop.addClass('show');
        } else {
            btnScrollTop.removeClass('show');
        }
    });

    btnScrollTop.click(function () {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    });
});





