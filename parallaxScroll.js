const parallaxScroll = document.querySelector(".name")
const parallaxScrollFirst = document.querySelector(".first-card")
const parallaxScrollBis = document.querySelector(".astro")
const parallaxScrollBisBis = document.querySelector(".astro2")
// const height = window.top.innerHeight;

window.addEventListener("scroll", function() {
  let offset = window.pageYOffset;
  parallaxScroll.style.backgroundPositionY = offset * 0.8 + "px";
  parallaxScroll.style.opacity = 1 - (offset / 400);
  parallaxScrollBisBis.style.backgroundPositionY = (offset + height - 465) * 0.65 + "px"
  // console.log(offset)
})



// window.addEventListener("scroll", function() {
//   let offset = window.pageYOffset;
//   // console.log("Offset:" + offset * 0.7);
//   parallaxScroll.style.PositionY = offset * 0.7 + "px";
// })


  window.addEventListener("scroll", function() {
  let offsetBis = window.pageYOffset - height;
  console.log(offsetBis);
  parallaxScrollBis.style.backgroundPositionY = offsetBis * 0.65 + "px";
})
