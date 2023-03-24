export const particles = {
    fullScreen: {
        enable: true
    },
    fpsLimit: 120,
    particles: {
        number: {
            value: 400,
            density: {
                enable: true,
            },
        },
        color: {
            value: "#7e98c2",
        },
        line_linked: {
            enable: true
        },
        shape: {
            type: "circle",
        },
        opacity: {
            value: 0.9,
            random: false,
            anim: {
                enable: false,
                speed: 5,
                opacity_min: 0.3,
                sync: false,
            },
        },
        size: {
            value: 4,
            random: true,
            anim: {
                enable: false,
                speed: 2,
                size_min: 0.1,
                sync: true,
            },
        },
        move: {
            enable: true,
            speed: 8,
            random: true,
            direction: "none",
            bounce: true,
            out_mode: "bounce",
            attract: {
                enable: true,
            },
            grab: {
                distance: 100,
                line_linked: {
                    opacity: 1
                }
            }
        }
    },
    interactivity: {
        events: {
            onhover: {
                enable: false,
                mode: "repulse",
            },
            onclick: {
                enable: false,
                mode: "push",
            },
            resize: true,
        },
        modes: {
            grab: {
                distance: 800,
                line_linked: {
                    opacity: 1,
                },
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 0.8,
                speed: 3,
            },
            repulse: {
                distance: 200,
            },
            push: {
                particles_nb: 4,
            },
            remove: {
                particles_nb: 2,
            },
        },
    },
    retina_detect: true,
    background: {
    },
};
