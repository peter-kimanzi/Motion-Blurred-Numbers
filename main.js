(() => {

    const hide = `.labs-follow-me{display: none !important}`;
    const disableAnimations = `
      *, *:before, *:after {animation-play-state: paused !important; --base-speed: 0s; }
      
    `;
  
    const embed = new URLSearchParams(window.location.search).has("labs-embed");
    const style = document.createElement("style");
    if (embed) {
      style.innerHTML = hide;
    } else {
      style.innerHTML = styleContent;
    }
    document.head.appendChild(style);
  
    if (embed) {
      setTimeout(() => {
        const style2 = document.createElement("style");
        style2.innerHTML = disableAnimations;
        document.head.appendChild(style2);
        window.clearInterval(0);
        window.clearInterval(1);
        window.clearInterval(2);
        window.setTimeout = window.setInterval = window.requestAnimationFrame = () => {};
        document
          .querySelectorAll("animate")
          .forEach((node) => node.setAttribute("dur", "0s"));
      }, 5000);
    }
  

  })();