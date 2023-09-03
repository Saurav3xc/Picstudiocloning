let open=document.getElementById("open");
let close=document.getElementById("close");
let open_ul=document.getElementById("open-ul");
open.addEventListener("click",()=>{
  if(open_ul.style.left!="0px"){
    open_ul.style.left="0px"
  }
});
close.addEventListener("click",()=>{

if(open_ul.style.left="0px"){
    open_ul.style.left="-1000px"
  
}
});



document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".testimonial-slider");
    const testimonials = document.querySelectorAll(".testimonial");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    let currentIndex = 0;

    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            if (i === index) {
                testimonial.style.display = "block";
            } else {
                testimonial.style.display = "none";
            }
        });
    }

    function nextTestimonial() {
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
    }

    function prevTestimonial() {
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        showTestimonial(currentIndex);
    }

    nextBtn.addEventListener("click", nextTestimonial);
    prevBtn.addEventListener("click", prevTestimonial);

    // Automatic slider interval (every 5 seconds)
    setInterval(nextTestimonial, 2000);

    // Initialize by showing the first testimonial
    showTestimonial(currentIndex);
});