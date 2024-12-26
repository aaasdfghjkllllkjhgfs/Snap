function random() {
  let count = 0;
  setInterval(() => {
    count = count + Math.floor(Math.random()*20);
    if (count<100) {
      document.querySelector("#loader").innerHTML = count+"%"
    } else {
      count =100;
      
      document.querySelector("#loader").innerHTML = count+"%"
    }
  }, 70);
}
random();


let body = document.querySelector("body");
let btn = document.getElementById("btnmood");
let btncontainer = document.getElementById('btncontainer')
let footer = document.querySelectorAll("footer.footer h2");
let hero = document.getElementById("hero");
let mode = "dark";
btn.addEventListener("click", () => {
  if (mode === "dark") {
    body.style.backgroundColor = "black";
    body.style.color = "white";
    btncontainer.style.backgroundColor = "black"
    hero.style.backgroundColor = "black";
    hero.style.color = "white";
    btn.style.backgroundColor = "black";
    btn.style.color = "white";
    footer.forEach((h2) => (h2.style.color = "white"));

    mode = "light";
  } else {
    btn.style.backgroundColor = "";
    body.style.backgroundColor = "white";
    body.style.color = "white";
    btn.style.color = "black";
    btncontainer.style.backgroundColor = "#F2F2F2"
    hero.style.backgroundColor = "#F2F2F2";
    footer.forEach((h2) => (h2.style.color = ""));
    hero.style.color = "";

    mode = "dark";
  }
  console.log(mode);
});


//gsap start

let timeline = gsap.timeline();

timeline.to("#loader h2",{
  duration:0.7,
  delay:0.3,
  onstart:random()
})

timeline.to("#loader,#loader img",{
  duration:0.7,
 top:"-100vh"
})
timeline.from("#image,#headi,#input,#a,#nextbtn",{
  duration:0.6,
  opacity:0,
  stagger:0.3,
  })
  
