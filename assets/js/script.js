'use strict';



/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * NAVBAR TOGGLE FOR MOBILE
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);



/**
 * HEADER
 * active header when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});



/**
 * SLIDER
 */

const sliders = document.querySelectorAll("[data-slider]");

const initSlider = function (currentSlider) {

  const sldierContainer = currentSlider.querySelector("[data-slider-container]");
  const sliderPrevBtn = currentSlider.querySelector("[data-slider-prev]");
  const sliderNextBtn = currentSlider.querySelector("[data-slider-next]");

  let currentSlidePos = 0;

  const moveSliderItem = function () {
    sldierContainer.style.transform = `translateX(-${sldierContainer.children[currentSlidePos].offsetLeft}px)`;
  }

  /**
   * NEXT SLIDE
   */

  const slideNext = function () {
    const slideEnd = currentSlidePos >= sldierContainer.childElementCount - 1;

    if (slideEnd) {
      currentSlidePos = 0;
    } else {
      currentSlidePos++;
    }

    moveSliderItem();
  }

  sliderNextBtn.addEventListener("click", slideNext);

  /**
   * PREVIOUS SLIDE
   */

  const slidePrev = function () {

    if (currentSlidePos <= 0) {
      currentSlidePos = sldierContainer.childElementCount - 1;
    } else {
      currentSlidePos--;
    }

    moveSliderItem();
  }

  sliderPrevBtn.addEventListener("click", slidePrev);

  const dontHaveExtraItem = sldierContainer.childElementCount <= 1;
  if (dontHaveExtraItem) {
    sliderNextBtn.style.display = "none";
    sliderPrevBtn.style.display = "none";
  }

}

for (let i = 0, len = sliders.length; i < len; i++) { initSlider(sliders[i]); }



/**
 * ACCORDION
 */

const accordions = document.querySelectorAll("[data-accordion]");

let lastActiveAccordion = accordions[0];

const initAccordion = function (currentAccordion) {

  const accordionBtn = currentAccordion.querySelector("[data-accordion-btn]");

  const expandAccordion = function () {
    if (lastActiveAccordion && lastActiveAccordion !== currentAccordion) {
      lastActiveAccordion.classList.remove("expanded");
    }

    currentAccordion.classList.toggle("expanded");

    lastActiveAccordion = currentAccordion;
  }

  accordionBtn.addEventListener("click", expandAccordion);

}

for (let i = 0, len = accordions.length; i < len; i++) { initAccordion(accordions[i]); }

function openModal(service) {
  const modal = document.getElementById("serviceModal");
  const modalTitle = document.getElementById("modal-title");
  const modalDescription = document.getElementById("modal-description");

  // Set modal content based on the service type
  if (service === "wifi") {
    modalTitle.innerHTML = "<h4>Bad Wi-Fi Doesn’t Just Slow You Down—It Holds You Back</h4>";
    modalDescription.innerHTML =
      `
     <p> When Wi-Fi isn’t tailored to your home, it leads to everyday frustrations that interfere with the things that matter most. Here’s what poorly optimized Wi-Fi often means:</p>
<ul class="default">
<li><strong>Dead Zones & Weak Signals:</strong> Standard setups can leave parts of your home with weak or no signal. This means that while one room might be fine, other spaces—like a home office or living room—struggle to stay connected.</li>
<li><strong>Lag & Buffering:</strong>  Ever had a movie stop to buffer right</li>
</ul>
      `;
  } else if (service === "fibre") {
    modalTitle.innerHTML = "<h4>Connectivity Built to Meet Your Needs, No Matter Where You Are</h4>";
    modalDescription.innerHTML =
      `<p>At Afrieta, we offer two ways to bring fast, dependable internet directly to your home, tailored to fit where you live and how you use the internet.</p>

     <ul class="default">
     <li><strong>Fiber Connection:</strong> If your home is in a fiber-ready area, we bring a high-speed fiber connection directly to you. Fiber is perfect for households that need the ultimate in speed and stability, handling everything from streaming in ultra-high-definition to gaming without a hitch.</li>
     </ul>
      `;
  }



  // Show the modal
  modal.style.display = "block";
}

function closeModal() {
  document.getElementById("serviceModal").style.display = "none";
}

// Close modal when clicking outside of it
window.onclick = function (event) {
  const modal = document.getElementById("serviceModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
