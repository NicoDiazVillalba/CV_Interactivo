//Lista habilidades
document.addEventListener("DOMContentLoaded", function () {
    const barras = document.querySelectorAll(".progreso");

    barras.forEach(barra => {
        let valor = barra.getAttribute("data-valor");
        barra.style.width = valor + "%";
    });
});

$(document).ready(function () {
    $('#btn-theme-toggle').click(function () {


        let isDark = $("body").hasClass("dark-theme");

        if (!isDark) {
            // Aplicar tema oscuro
            $("body").css({
                "background-color": "#121212",
                "color": "#e0e0e0"
            });

            $(".profile").css({
                "background": "linear-gradient(135deg, #0d1b2a, #1b263b)",
                "color": "#ffffff"
            });

            $(".nombre").css({
                "color": "#ffffff"
            });

            $(".profesion").css({
                "color": "#bbbbbb"
            });

            $(".descripcion").css({
                "color": "#bbbbbb"
            });

            $(".container").css({
                "background": "#1e1e1e",
                "border-bottom": "2px solid #0f4c75"
            });

            $(".redes-sociales").css({
                "background-color": "#252525"
            });

            $(".redes-enlaces a").css({
                "color": "#d1d1d1"
            });

            $(".redes-enlaces a:hover").css({
                "color": "#57a5ff"
            });

            $("footer").css({
                "background": "linear-gradient(135deg, #0d1b2a, #1b263b)",
                "color": "#57a5ff"
            });

            $(".footer-text").css({
                "color": "#ffffff"
            })

            $("h3").css({
                "color": "#ffffff"
            })


            $(".item-educacion, .item-certificacion, .Funciones").css({
                "background": "#1b262c",
                "color": "#ffffff"
            });

            $(".institucion, .Empresa").css({
                "color": "#ffffff"
            });

            $(".habilidad").css({
                "background": "#1b262c",
                "color": "#ffeb99"
            });

            $(".barra").css({
                "background": "#333333"
            });

            $(".progreso").css({
                "background": "linear-gradient(90deg, #57a5ff, #1e88e5)"
            });


            localStorage.setItem("theme", "dark");


            $('#btn-theme-toggle').text("Pasar a Modo Claro");

        } else {
            // Volver a tema claro
            $("body").css({
                "background-color": "#eef2f3",
                "color": "#333"
            });

            $(".profile").css({
                "background": "linear-gradient(135deg, #1b6a9e, #3282b8)",
                "color": "white"
            });

            $(".nombre").css({
                "color": "#fff"
            });

            $(".profesion").css({
                "color": "#dbeafe"
            });

            $(".descripcion").css({
                "color": "#666666"
            });

            $(".container").css({
                "background": "#ffffff",
                "border-bottom": "2px solid #0f4c75"
            });

            $(".redes-sociales").css({
                "background-color": "#938686"
            });

            $(".redes-enlaces a").css({
                "color": "#000000"
            });

            $(".redes-enlaces a:hover").css({
                "color": "#0f4c75"
            });

            $("footer").css({
                "background": "linear-gradient(135deg, #1b6a9e, #3282b8)",
                "color": "#bbe1fa"
            });

            $(".footer-text").css({
                "color": "white"
            })

            $(".habilidad").css({
                "background": "#ffffff",
                "color": "#333"
            });

            $("h3").css({
                "color": "#1b262c"
            })

            $(".item-educacion, .item-certificacion, .Funciones").css({
                "background": "#e3f2fd",
                "color": "#555"
            });

            $(".institucion, .Empresa").css({
                "color": "#555"
            });

            $(".barra").css({
                "background": "#cfd8dc"
            });

            $(".progreso").css({
                "background": "linear-gradient(90deg, #0f4c75, #3282b8)"
            });

            // Guardar preferencia en localStorage
            localStorage.setItem("theme", "light");

            // Cambiar el texto del botón
            $('#btn-theme-toggle').text("Pasar a Modo Oscuro");
        }

        // Alternar clase en body para mantener consistencia
        $("body").toggleClass("dark-theme");
    });

    // Aplicar el tema guardado al cargar la página
    if (localStorage.getItem("theme") === "dark") {
        $("#btn-theme-toggle").trigger("click");
    }
});





