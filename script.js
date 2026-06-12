window.addEventListener("DOMContentLoaded", () => {
    if (window.lucide) {
        window.lucide.createIcons();
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const header = document.querySelector(".site-header");
    const glow = document.querySelector(".cursor-glow");

    document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener("click", (event) => {
            const target = document.querySelector(link.getAttribute("href"));

            if (!target) {
                return;
            }

            event.preventDefault();
            target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
        });
    });

    if (reduceMotion || !window.gsap) {
        document.body.classList.add("is-ready");
        return;
    }

    const hasScrollTrigger = Boolean(window.ScrollTrigger);

    if (hasScrollTrigger) {
        gsap.registerPlugin(ScrollTrigger);
    }

    gsap.set([".eyebrow", ".hero h1", ".hero-text", ".hero-actions", ".hero-panel"], {
        autoAlpha: 0,
        y: 28
    });

    gsap.timeline({ defaults: { ease: "power3.out", duration: 0.9 } })
        .from(header, { autoAlpha: 0, y: -24, duration: 0.65 })
        .to(".hero .eyebrow", { autoAlpha: 1, y: 0 }, "-=0.15")
        .to(".hero h1", { autoAlpha: 1, y: 0 }, "-=0.55")
        .to(".hero-text", { autoAlpha: 1, y: 0 }, "-=0.48")
        .to(".hero-actions", { autoAlpha: 1, y: 0 }, "-=0.45")
        .to(".hero-panel", { autoAlpha: 1, y: 0 }, "-=0.7");

    gsap.to(".signal-line", {
        backgroundPosition: "260px 0",
        duration: 5,
        ease: "none",
        repeat: -1
    });

    gsap.utils.toArray(".section:not(.hero)").forEach((section) => {
        const animation = {
            autoAlpha: 0,
            y: 34,
            duration: 0.85,
            ease: "power3.out",
            stagger: 0.08
        };

        if (hasScrollTrigger) {
            animation.scrollTrigger = {
                trigger: section,
                start: "top 78%"
            };
        }

        gsap.from(section.children, animation);
    });

    gsap.utils.toArray(".project-card, .song-card").forEach((card) => {
        card.addEventListener("mouseenter", () => {
            gsap.to(card, { y: -8, duration: 0.25, ease: "power2.out" });
        });

        card.addEventListener("mouseleave", () => {
            gsap.to(card, { y: 0, duration: 0.25, ease: "power2.out" });
        });
    });

    window.addEventListener("mousemove", (event) => {
        gsap.to(glow, {
            x: event.clientX,
            y: event.clientY,
            duration: 0.55,
            ease: "power2.out"
        });
    });
});
