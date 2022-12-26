const parallax = (event) => {
  bg = document.querySelector(".bg");
  const x = (window.innerWidth + event.pageX * 10) / 90;
  const y = (window.innerHeight + event.pageY * 10) / 90;

  bg.style.transform = `translateX(calc(-50% + ${x}px)) translateY(calc(-50% + ${y}px))`;
};

document.addEventListener("mousemove", parallax);
