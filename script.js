document.addEventListener("DOMContentLoaded", function () {
	gsap.registerPlugin(ScrollTrigger)

	gsap.from(
		".person-container, .person-container img, .person-container h1, .person-container p",
		{
			duration: 1,
			x: "-100%",
			opacity: 0,
			scale: 0,
			ease: "power3.out",
			delay: 0.5,
			stagger: 0.4,
		}
	)

	gsap.from(
		".socials-buttons-container, .socials-buttons-container .buttons, .socials-buttons-container .socials",
		{
			duration: 1,
			y: "100%",
			opacity: 0,
			scale: 0,
			ease: "power3.out",
			delay: 1.5,
			stagger: 0.4,
		}
	)

	gsap.from(".about, .skills", {
		opacity: 0,
		y: "-300px",
		scale: 1.3,
		duration: 1,
		ease: "power3.out",
		delay: 3,
		stagger: 0.4,
	})

	gsap.utils
		.toArray(".services, .counters, .portfolio, .contact-form, .cta")
		.forEach(section => {
			gsap.from(section, {
				scrollTrigger: {
					trigger: section,
					start: "top 80%",
				},
				opacity: 0,
				scale: 1.3,
				y: 50,
				duration: 1,
				ease: "power3.out",
			})
		})

	gsap.from(".footer", {
		scrollTrigger: {
			trigger: ".cta",
			start: "top 90%",
		},
		opacity: 0,
		y: 50,
		duration: 1,
		delay: 1,
		ease: "power3.out",
	})
})
