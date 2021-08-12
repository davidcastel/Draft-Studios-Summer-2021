(function ($) {
  "use strict";

  const fade_in = function () {
    let faders = document.querySelectorAll(".section2");

    const appearOptions = {
      threshold: 0,
      rootMargin: "0px 0px -250px 0px",
    };

    const appearOnScroll = new IntersectionObserver(function (
      entries,
      appearOnScroll
    ) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        } else {
          entry.target.classList.add("appear");
          appearOnScroll.unobserve(entry.target);
        }
      });
    },
    appearOptions);

    faders.forEach((fader) => {
      appearOnScroll.observe(fader);
    });
  };

  (function ssInit() {
    fade_in();
  })();
})(jQuery);
