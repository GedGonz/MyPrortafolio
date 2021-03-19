document.addEventListener(
    "DOMContentLoaded",
    function() {
        new SweetScroll({}),
            particlesJS("particles-js", {
                particles: {
                    number: { value: 100, density: { enable: !0, value_area: 800 } },
                    color: { value: "#ffffff" },
                    shape: {
                        type: "polygon",
                        stroke: { width: 0, color: "#000000" },
                        polygon: { nb_sides: 5 },
                        image: { src: "img/github.svg", width: 100, height: 100 },
                    },
                    opacity: {
                        value: 0.5,
                        random: !1,
                        anim: { enable: !1, speed: 1, opacity_min: 0.1, sync: !1 },
                    },
                    size: {
                        value: 3,
                        random: !0,
                        anim: {
                            enable: !1,
                            speed: 19.18081918081918,
                            size_min: 0.1,
                            sync: !1,
                        },
                    },
                    line_linked: {
                        enable: !0,
                        distance: 150,
                        color: "#ffffff",
                        opacity: 0.4,
                        width: 1,
                    },
                    move: {
                        enable: !0,
                        speed: 4,
                        direction: "none",
                        random: !0,
                        straight: !1,
                        out_mode: "out",
                        bounce: !1,
                        attract: { enable: !1, rotateX: 600, rotateY: 1200 },
                    },
                    nb: 80,
                },
                interactivity: {
                    detect_on: "canvas",
                    events: {
                        onhover: { enable: !1, mode: "grab" },
                        onclick: { enable: !0, mode: "push" },
                        resize: !0,
                    },
                    modes: {
                        grab: { distance: 400, line_linked: { opacity: 1 } },
                        bubble: {
                            distance: 400,
                            size: 40,
                            duration: 2,
                            opacity: 8,
                            speed: 3,
                        },
                        repulse: { distance: 200, duration: 0.4 },
                        push: { particles_nb: 4 },
                        remove: { particles_nb: 2 },
                    },
                },
                retina_detect: !0,
            });
    }, !1
);

function calularEdad() {
    var Meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    var FechaString = "05/07/1991";

    var FechaNacimiento = new Date(FechaString);
    var FechaActual = new Date();
    var anios = (FechaActual.getFullYear() - FechaNacimiento.getFullYear());
    var mes = new Date().getMonth();
    var Es_o_Ya_Paso_CumpleaAnio = EsoYaPasoCumpleAnios(FechaNacimiento, FechaActual);

    var edad = (Es_o_Ya_Paso_CumpleaAnio) ? anios : (--anios);


    if (EsCumpleAnios(FechaNacimiento, FechaActual)) {
        $('#greet').modal('show');
        $('#BodyHappy').append('Hoy ' + (mes + 1) + ' de ' + Meses[mes] + ' cumple ' + edad + ' de edad');
        $('#BodyHappy').append('<br><br>Felicidades!! 😇');

    }

    edad = (edad).toString();
    $("#edad").text(edad + " años");
}

function EsoYaPasoCumpleAnios(FechaNacimiento, FechaActual) {

    var Es_o_Ya_Paso_CumpleaAnio = false;
    var YaPasoMesCumpleaños = ((FechaActual.getMonth() + 1) > (FechaNacimiento.getMonth() + 1));
    var EsMesCumpleaños = ((FechaActual.getMonth() + 1) == (FechaNacimiento.getMonth() + 1));
    var YaPasoDiaCumpelaños = (FechaActual.getDate() >= FechaNacimiento.getDate());

    if (YaPasoMesCumpleaños) {
        Es_o_Ya_Paso_CumpleaAnio = true;
    } else if (EsMesCumpleaños && YaPasoDiaCumpelaños) {
        Es_o_Ya_Paso_CumpleaAnio = true;
    }
    return Es_o_Ya_Paso_CumpleaAnio;
}

function EsCumpleAnios(FechaNacimiento, FechaActual) {

    var Es_CumpleaAnios = false;

    var EsMesCumpleaños = ((FechaActual.getMonth() + 1) == (FechaNacimiento.getMonth() + 1));
    var EsDiaCumpelaños = (FechaActual.getDate() === FechaNacimiento.getDate());

    if (EsMesCumpleaños && EsDiaCumpelaños) {
        Es_CumpleaAnios = true;
    }
    return Es_CumpleaAnios;
}