// Scroll-reveal helper: observes an element and adds `reveal-in` once it
// intersects, matching the vanilla-JS behaviour in shared_script.js.
export function useReveal() {
  function observe(el: Element) {
    if (typeof IntersectionObserver === 'undefined') {
      el.classList.add('reveal-in')
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-in')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    )
    io.observe(el)
  }

  return { observe }
}
