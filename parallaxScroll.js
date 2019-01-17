const parallaxScroll = document.querySelector(".name")
// const height = window.top.innerHeight;

window.addEventListener("scroll", function() {
  let offset = window.pageYOffset;
  console.log(offset);
  parallaxScroll.style.backgroundPositionY = offset * 0.8 + "px";
  parallaxScroll.style.opacity = 1 - (offset / 400);
})


const parallaxScrollFirst = document.querySelector(".first-card")

window.addEventListener("scroll", function() {
  let offset = window.pageYOffset;
  // console.log("Offset:" + offset * 0.7);
  parallaxScroll.style.PositionY = offset * 0.7 + "px";
})
