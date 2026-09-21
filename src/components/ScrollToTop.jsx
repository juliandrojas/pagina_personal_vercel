import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionPreference.matches) return undefined;

    const root = document.documentElement;
    const revealItems = document.querySelectorAll("[data-reveal]");
    let frameId;

    root.classList.add("scroll-effects-ready");

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8%" },
    );

    revealItems.forEach((item) => revealObserver.observe(item));

    const updateParallax = () => {
      frameId = undefined;
      const scrollY = window.scrollY;
      root.style.setProperty("--parallax-far", `${scrollY * -0.035}px`);
      root.style.setProperty("--parallax-near", `${scrollY * -0.09}px`);
    };

    const handleScroll = () => {
      if (!frameId) frameId = window.requestAnimationFrame(updateParallax);
    };

    updateParallax();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      revealObserver.disconnect();
      window.removeEventListener("scroll", handleScroll);
      if (frameId) window.cancelAnimationFrame(frameId);
      root.classList.remove("scroll-effects-ready");
      root.style.removeProperty("--parallax-far");
      root.style.removeProperty("--parallax-near");
    };
  }, [pathname]);

  return (
    <>
      <div className="parallax-scene" aria-hidden="true">
        <span className="parallax-orb parallax-orb-far" />
        <span className="parallax-orb parallax-orb-near" />
      </div>
      <Outlet />
    </>
  );
}
