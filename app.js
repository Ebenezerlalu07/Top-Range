document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ICONS
    ====================================================== */

    lucide.createIcons();


    /* =====================================================
       MOTION CHECK
    ====================================================== */

    const reduceMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


    /* =====================================================
       MOBILE NAV
    ====================================================== */

    const menuButton =
        document.getElementById("menuButton");

    const mobileMenu =
        document.getElementById("mobileMenu");

    let menuOpen = false;


    function renderMenuIcon() {

        menuButton.innerHTML =
            menuOpen
                ? '<i data-lucide="x" class="h-5 w-5"></i>'
                : '<i data-lucide="menu" class="h-5 w-5"></i>';

        lucide.createIcons();

    }


    menuButton?.addEventListener(
        "click",
        () => {

            menuOpen = !menuOpen;

            mobileMenu.classList.toggle(
                "active",
                menuOpen
            );

            renderMenuIcon();

        }
    );


    document
        .querySelectorAll(".mobile-link")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    menuOpen = false;

                    mobileMenu.classList.remove(
                        "active"
                    );

                    renderMenuIcon();

                }
            );

        });


    /* =====================================================
       HERO WORD COUNTER
    ====================================================== */

    const wordSlider =
        document.getElementById("wordSlider");


    if (wordSlider && !reduceMotion) {

        const words = 4;

        let current = 0;


        setInterval(() => {

            current++;

            wordSlider.style.transition =
                "transform 700ms cubic-bezier(.76,0,.24,1)";

            wordSlider.style.transform =
                `translateY(-${current * 1.05}em)`;


            if (current === words) {

                setTimeout(() => {

                    wordSlider.style.transition =
                        "none";

                    current = 0;

                    wordSlider.style.transform =
                        "translateY(0)";

                }, 740);

            }

        }, 2400);

    }


    /* =====================================================
       GSAP
    ====================================================== */

    gsap.registerPlugin(
        ScrollTrigger
    );


    if (reduceMotion) {

        document
            .querySelectorAll(
                "[data-reveal], [data-reveal-left], [data-reveal-right]"
            )
            .forEach(element => {

                element.style.opacity = 1;

                element.style.transform =
                    "none";

            });

        return;

    }


    /* =====================================================
       SCROLL PROGRESS
    ====================================================== */

    gsap.to(
        "#scrollProgress",
        {

            scaleX: 1,

            ease: "none",

            scrollTrigger: {

                trigger:
                    document.documentElement,

                start:
                    "top top",

                end:
                    "bottom bottom",

                scrub:
                    0.2

            }

        }
    );


    /* =====================================================
       HERO INTRO
    ====================================================== */

    const heroTimeline =
        gsap.timeline({

            defaults: {
                ease:
                    "power4.out"
            }

        });


    heroTimeline

        .from(
            ".hero-intro",
            {
                opacity: 0,
                y: 18,
                duration: .8
            }
        )

        .from(
            ".hero-title",
            {
                opacity: 0,
                y: 70,
                duration: 1.1
            },
            "-=.45"
        )

        .from(
            ".hero-copy",
            {
                opacity: 0,
                y: 30,
                duration: .8
            },
            "-=.6"
        )

        .from(
            ".hero-actions",
            {
                opacity: 0,
                y: 25,
                duration: .8
            },
            "-=.55"
        )

        .from(
            ".hero-card",
            {
                opacity: 0,
                x: 70,
                scale: .95,
                duration: 1
            },
            "-=.9"
        )

        .from(
            ".hero-brands",
            {
                opacity: 0,
                y: 25,
                duration: .8
            },
            "-=.65"
        )

        .from(
            ".hero-stats > div",
            {
                opacity: 0,
                y: 15,
                stagger: .08,
                duration: .6
            },
            "-=.5"
        );


    /* =====================================================
       HERO SCROLL PARALLAX
    ====================================================== */

    gsap.fromTo(
        ".hero-bg",

        {
            scale: 1
        },

        {
            scale: 1.12,

            yPercent: 7,

            ease: "none",

            scrollTrigger: {

                trigger:
                    "#home",

                start:
                    "top top",

                end:
                    "bottom top",

                scrub:
                    1.1

            }

        }
    );


    gsap.to(
        ".hero-title",
        {

            yPercent: -10,

            opacity: .45,

            ease: "none",

            scrollTrigger: {

                trigger:
                    "#home",

                start:
                    "45% top",

                end:
                    "bottom top",

                scrub:
                    true

            }

        }
    );


    /* =====================================================
       STANDARD REVEALS
    ====================================================== */

    gsap.utils
        .toArray("[data-reveal]")
        .forEach(element => {

            gsap.to(
                element,
                {

                    opacity: 1,

                    y: 0,

                    duration: 1,

                    ease:
                        "power4.out",

                    scrollTrigger: {

                        trigger:
                            element,

                        start:
                            "top 88%",

                        once:
                            true

                    }

                }
            );

        });


    gsap.utils
        .toArray("[data-reveal-left]")
        .forEach(element => {

            gsap.to(
                element,
                {

                    opacity: 1,

                    x: 0,

                    duration: 1.15,

                    ease:
                        "power4.out",

                    scrollTrigger: {

                        trigger:
                            element,

                        start:
                            "top 86%",

                        once:
                            true

                    }

                }
            );

        });


    gsap.utils
        .toArray("[data-reveal-right]")
        .forEach(element => {

            gsap.to(
                element,
                {

                    opacity: 1,

                    x: 0,

                    duration: 1.15,

                    ease:
                        "power4.out",

                    scrollTrigger: {

                        trigger:
                            element,

                        start:
                            "top 86%",

                        once:
                            true

                    }

                }
            );

        });


    /* =====================================================
       STAGGER GROUPS
    ====================================================== */

    gsap.utils
        .toArray("[data-stagger]")
        .forEach(container => {

            gsap.from(
                Array.from(
                    container.children
                ),
                {

                    opacity: 0,

                    y: 55,

                    scale: .975,

                    duration: .9,

                    stagger: .09,

                    ease:
                        "power4.out",

                    scrollTrigger: {

                        trigger:
                            container,

                        start:
                            "top 88%",

                        once:
                            true

                    }

                }
            );

        });


    /* =====================================================
       LINE REVEALS
    ====================================================== */

    gsap.utils
        .toArray(".reveal-line-inner")
        .forEach(line => {

            gsap.to(
                line,
                {

                    y: 0,

                    duration: 1.15,

                    ease:
                        "power4.out",

                    scrollTrigger: {

                        trigger:
                            line,

                        start:
                            "top 90%",

                        once:
                            true

                    }

                }
            );

        });


    /* =====================================================
       IMAGE MASK REVEAL
    ====================================================== */

    gsap.utils
        .toArray("[data-image-reveal]")
        .forEach(container => {

            const image =
                container.querySelector(
                    "img"
                );


            const timeline =
                gsap.timeline({

                    scrollTrigger: {

                        trigger:
                            container,

                        start:
                            "top 90%",

                        once:
                            true

                    }

                });


            timeline.to(
                container,
                {

                    clipPath:
                        "inset(0% 0% 0% 0% round 32px)",

                    duration:
                        1.25,

                    ease:
                        "power4.inOut"

                }
            );


            if (image) {

                timeline.to(
                    image,
                    {

                        scale:
                            1,

                        duration:
                            1.45,

                        ease:
                            "power4.out"

                    },

                    "-=1"
                );

            }

        });


    /* =====================================================
       PARALLAX IMAGES
    ====================================================== */

    gsap.utils
        .toArray("[data-parallax]")
        .forEach(image => {

            gsap.fromTo(
                image,

                {
                    yPercent: -5
                },

                {
                    yPercent: 5,

                    ease: "none",

                    scrollTrigger: {

                        trigger:
                            image.parentElement,

                        start:
                            "top bottom",

                        end:
                            "bottom top",

                        scrub:
                            1.2

                    }

                }
            );

        });


    /* =====================================================
       FLOATING ELEMENTS
    ====================================================== */

    gsap.utils
        .toArray("[data-float]")
        .forEach(element => {

            gsap.fromTo(
                element,

                {
                    y: 10
                },

                {
                    y: -18,

                    ease: "none",

                    scrollTrigger: {

                        trigger:
                            element.parentElement,

                        start:
                            "top bottom",

                        end:
                            "bottom top",

                        scrub:
                            1.4

                    }

                }
            );

        });


    /* =====================================================
       STICKY STORY
    ====================================================== */

    const storySteps =
        document.querySelectorAll(
            ".story-step"
        );

    const storyImages =
        document.querySelectorAll(
            ".story-image"
        );

    const storyNumber =
        document.getElementById(
            "storyNumber"
        );

    const storyLabel =
        document.getElementById(
            "storyLabel"
        );


    function setStory(index) {

        storySteps.forEach(
            (step, stepIndex) => {

                step.classList.toggle(
                    "active",
                    stepIndex === index
                );

            }
        );


        storyImages.forEach(
            (image, imageIndex) => {

                if (
                    imageIndex === index
                ) {

                    gsap.to(
                        image,
                        {

                            opacity:
                                1,

                            scale:
                                1,

                            duration:
                                .9,

                            ease:
                                "power3.out",

                            overwrite:
                                true

                        }
                    );

                } else {

                    gsap.to(
                        image,
                        {

                            opacity:
                                0,

                            scale:
                                1.08,

                            duration:
                                .65,

                            ease:
                                "power2.out",

                            overwrite:
                                true

                        }
                    );

                }

            }
        );


        if (storyNumber) {

            storyNumber.textContent =
                String(
                    index + 1
                ).padStart(
                    2,
                    "0"
                );

        }


        if (storyLabel) {

            storyLabel.textContent =
                storySteps[index]
                    .dataset
                    .label;

        }

    }


    ScrollTrigger.matchMedia({

        "(min-width: 1024px)": () => {

            storySteps.forEach(
                (step, index) => {

                    ScrollTrigger.create({

                        trigger:
                            step,

                        start:
                            "top 56%",

                        end:
                            "bottom 44%",

                        onEnter:
                            () =>
                                setStory(
                                    index
                                ),

                        onEnterBack:
                            () =>
                                setStory(
                                    index
                                )

                    });

                }
            );

        }

    });


    /* =====================================================
       HORIZONTAL PINNED SCROLL
    ====================================================== */

    gsap.matchMedia()
        .add(
            "(min-width: 768px)",
            () => {

                const section =
                    document.getElementById(
                        "materialShowcase"
                    );

                const track =
                    section?.querySelector(
                        ".horizontal-track"
                    );


                if (
                    !section ||
                    !track
                ) {
                    return;
                }


                const distance =
                    () =>
                        Math.max(
                            0,
                            track.scrollWidth -
                            window.innerWidth +
                            80
                        );


                const tween =
                    gsap.to(
                        track,
                        {

                            x:
                                () =>
                                    -distance(),

                            ease:
                                "none"

                        }
                    );


                ScrollTrigger.create({

                    trigger:
                        section,

                    start:
                        "top top",

                    end:
                        () =>
                            `+=${Math.max(
                                distance() + 500,
                                900
                            )}`,

                    animation:
                        tween,

                    pin:
                        true,

                    scrub:
                        1,

                    anticipatePin:
                        1,

                    invalidateOnRefresh:
                        true

                });

            }
        );


    /* =====================================================
       COUNTERS
    ====================================================== */

    document
        .querySelectorAll(
            "[data-counter]"
        )
        .forEach(counter => {

            const end =
                Number(
                    counter.dataset.counter
                );

            const state = {
                value: 0
            };


            gsap.to(
                state,
                {

                    value:
                        end,

                    duration:
                        2,

                    ease:
                        "power3.out",

                    scrollTrigger: {

                        trigger:
                            counter,

                        start:
                            "top 88%",

                        once:
                            true

                    },

                    onUpdate:
                        () => {

                            counter.textContent =
                                Math.floor(
                                    state.value
                                );

                        }

                }
            );

        });


    /* =====================================================
       QUOTE TIMELINE
    ====================================================== */

    const processLine =
        document.getElementById(
            "processLine"
        );


    if (processLine) {

        gsap.from(
            processLine,
            {

                scaleY:
                    0,

                transformOrigin:
                    "top center",

                ease:
                    "none",

                scrollTrigger: {

                    trigger:
                        processLine.parentElement,

                    start:
                        "top 72%",

                    end:
                        "bottom 58%",

                    scrub:
                        1

                }

            }
        );

    }


    /* =====================================================
       NAVBAR MORPH
    ====================================================== */

    const navbar =
        document.getElementById(
            "mainNavbar"
        );

    const header =
        document.getElementById(
            "siteHeader"
        );


    let lastScroll =
        window.scrollY;


    ScrollTrigger.create({

        start:
            80,

        end:
            "max",

        onUpdate:
            self => {

                const current =
                    self.scroll();


                if (
                    current > 80
                ) {

                    navbar.classList.add(
                        "bg-[#0B100D]/90"
                    );

                    navbar.classList.remove(
                        "bg-black/20"
                    );

                } else {

                    navbar.classList.remove(
                        "bg-[#0B100D]/90"
                    );

                    navbar.classList.add(
                        "bg-black/20"
                    );

                }


                if (
                    current > lastScroll &&
                    current > 350 &&
                    !menuOpen
                ) {

                    gsap.to(
                        header,
                        {

                            yPercent:
                                -125,

                            duration:
                                .32,

                            ease:
                                "power2.out",

                            overwrite:
                                true

                        }
                    );

                } else {

                    gsap.to(
                        header,
                        {

                            yPercent:
                                0,

                            duration:
                                .32,

                            ease:
                                "power2.out",

                            overwrite:
                                true

                        }
                    );

                }


                lastScroll =
                    current;

            }

    });


    /* =====================================================
       MAGNETIC BUTTONS
    ====================================================== */

    if (
        window.matchMedia(
            "(pointer: fine)"
        ).matches
    ) {

        document
            .querySelectorAll(
                "[data-magnetic]"
            )
            .forEach(element => {

                element.addEventListener(
                    "mousemove",
                    event => {

                        const rect =
                            element.getBoundingClientRect();

                        const x =
                            event.clientX -
                            rect.left -
                            rect.width / 2;

                        const y =
                            event.clientY -
                            rect.top -
                            rect.height / 2;


                        gsap.to(
                            element,
                            {

                                x:
                                    x * .12,

                                y:
                                    y * .12,

                                duration:
                                    .3,

                                ease:
                                    "power2.out"

                            }
                        );

                    }
                );


                element.addEventListener(
                    "mouseleave",
                    () => {

                        gsap.to(
                            element,
                            {

                                x:
                                    0,

                                y:
                                    0,

                                duration:
                                    .55,

                                ease:
                                    "elastic.out(1,.35)"

                            }
                        );

                    }
                );

            });

    }


    /* =====================================================
       SUBTLE 3D TILT
    ====================================================== */

    if (
        window.matchMedia(
            "(pointer: fine)"
        ).matches
    ) {

        document
            .querySelectorAll(
                "[data-tilt]"
            )
            .forEach(card => {

                card.addEventListener(
                    "mousemove",
                    event => {

                        const rect =
                            card.getBoundingClientRect();

                        const x =
                            (
                                event.clientX -
                                rect.left
                            ) /
                            rect.width;

                        const y =
                            (
                                event.clientY -
                                rect.top
                            ) /
                            rect.height;


                        const rotateY =
                            (
                                x - .5
                            ) * 4;

                        const rotateX =
                            (
                                .5 - y
                            ) * 4;


                        gsap.to(
                            card,
                            {

                                rotateX:
                                    rotateX,

                                rotateY:
                                    rotateY,

                                transformPerspective:
                                    900,

                                duration:
                                    .35,

                                ease:
                                    "power2.out"

                            }
                        );

                    }
                );


                card.addEventListener(
                    "mouseleave",
                    () => {

                        gsap.to(
                            card,
                            {

                                rotateX:
                                    0,

                                rotateY:
                                    0,

                                duration:
                                    .6,

                                ease:
                                    "power3.out"

                            }
                        );

                    }
                );

            });

    }


    /* =====================================================
       REFRESH
    ====================================================== */

    window.addEventListener(
        "load",
        () => {

            lucide.createIcons();

            ScrollTrigger.refresh();

        }
    );

});

const quickFilters =
    document.querySelectorAll(".quick-filter");

const categoryFilter =
    document.getElementById("categoryFilter");


quickFilters.forEach(button => {

    button.addEventListener("click", () => {

        quickFilters.forEach(item => {
            item.classList.remove("active");
        });


        button.classList.add("active");


        const filter =
            button.dataset.filter;


        categoryFilter.value =
            filter === "all"
                ? ""
                : filter;

    });

});


