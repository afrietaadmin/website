"use strict";

/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
};

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
};

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
  const sldierContainer = currentSlider.querySelector(
    "[data-slider-container]"
  );
  const sliderPrevBtn = currentSlider.querySelector("[data-slider-prev]");
  const sliderNextBtn = currentSlider.querySelector("[data-slider-next]");

  let currentSlidePos = 0;

  const moveSliderItem = function () {
    sldierContainer.style.transform = `translateX(-${sldierContainer.children[currentSlidePos].offsetLeft}px)`;
  };

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
  };

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
  };

  sliderPrevBtn.addEventListener("click", slidePrev);

  const dontHaveExtraItem = sldierContainer.childElementCount <= 1;
  if (dontHaveExtraItem) {
    sliderNextBtn.style.display = "none";
    sliderPrevBtn.style.display = "none";
  }
};

for (let i = 0, len = sliders.length; i < len; i++) {
  initSlider(sliders[i]);
}

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
  };

  accordionBtn.addEventListener("click", expandAccordion);
};

for (let i = 0, len = accordions.length; i < len; i++) {
  initAccordion(accordions[i]);
}

function openModal(service) {
  const modal = document.getElementById("serviceModal");
  const modalTitle = document.getElementById("modal-title");
  const modalDescription = document.getElementById("modal-description");

  // Set modal content based on the service type
  if (service === "wifi") {
    modalTitle.innerHTML =
      "<h4>Bad Wi-Fi Doesn’t Just Slow You Down—It Holds You Back</h4>";
    modalDescription.innerHTML = `
     <p> When Wi-Fi isn’t tailored to your home, it leads to everyday frustrations that interfere with the things that matter most. Here’s what poorly optimized Wi-Fi often means:</p>
<ul class="default">
<li><strong>Dead Zones & Weak Signals:</strong> Standard setups can leave parts of your home with weak or no signal. This means that while one room might be fine, other spaces—like a home office or living room—struggle to stay connected.</li>
<li><strong>Lag & Buffering:</strong>  Ever had a movie stop to buffer right in the middle of an intense scene or a video call freeze just as you're trying to make an important point? Lag and buffering can disrupt your entertainment and productivity making what should be enjoyable or efficient tasks frustrating and time-consuming.</li>
<li><strong>Limited Device Support:</strong> As smart devices multiply, poorly optimized Wi-Fi struggles, leading to slow responses and frequent disconnections </li>
<li><strong>Stress & Frustration:</strong> Persistent connectivity issues can be frustrating, stressful and limit your ability to enjoy or complete tasks efficiently. </li>

</ul><p>To truly optimize your Wi-Fi experience, it’s essential to have a setup designed for your home’s specific needs, ensuring fast, reliable, and secure connections throughout.</p>
      `;
  } else if (service === "fibre") {
    modalTitle.innerHTML =
      "<h4>Connectivity Built to Meet Your Needs, No Matter Where You Are</h4>";
    modalDescription.innerHTML = `<p>At Afrieta, we offer different ways to bring fast, dependable internet directly to your home, tailored to fit where you live and how you use the internet.</p>

     <ul class="default">
     <li><strong>Fiber Connection:</strong> If your home is in a fiber-ready area, we bring a high-speed fiber connection directly to you. Fiber is perfect for households that need the ultimate in speed and stability, handling everything from streaming in ultra-high-definition to gaming without a hitch.</li>
     <li><strong>Wireless Connection:</strong> Wireless Connection: For homes not yet in fiber-ready areas, our advanced wireless solution ensures you still get fast and reliable internet access. Our wireless technology is designed to deliver consistent speeds and broad coverage, so you can enjoy seamless connectivity, whether you’re working from home, streaming your favorite shows, or staying connected with friends and family.

</li>
     <li><strong>Customized Support:</strong> At Afrieta, we understand that every household has unique needs. Our team works closely with you to find the best solution for your location and lifestyle, ensuring you’re always connected with the speed and reliability you deserve. Whether it’s fiber or wireless, our mission is to keep you online without interruptions.
.</li>
<p>Discover the Afrieta difference and experience connectivity that’s truly built around you</p>
     </ul>
      `;
  }

  // Show the modal
  modal.style.display = "block";
}

function closeModal1() {
  document.getElementById("serviceModal").style.display = "none";
}

// Close modal when clicking outside of it
window.onclick = function (event) {
  const modal = document.getElementById("serviceModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

const plans = {
  "Sebokeng/Evaton/Tshepong": [
    {
      name: "20Mbps/20Mbps Advanced Wireless",
      price: "R449",
      link: "https://prospects.afrieta.com/",
    },
    {
      name: "25Mbps/25Mbps Advanced Wireless",
      price: "R580",
      link: "https://prospects.afrieta.com/",
    },
    {
      name: "50Mbps/25Mbps Advanced Wireless",
      price: "R750",
      link: "https://prospects.afrieta.com/",
    },
  ],
  Meyerton: [
    {
      name: "20Mbps/20Mbps Advanced Wireless",
      price: "R449",
      link: "https://meyerton.afrieta.com/",
    },
    {
      name: "25Mbps/25Mbps Advanced Wireless",
      price: "R580",
      link: "https://meyerton.afrieta.com/",
    },
    {
      name: "50Mbps/25Mbps Advanced Wireless",
      price: "R750",
      link: "https://meyerton.afrieta.com/",
    },
  ],
  Milpark: [
    {
      name: "15Mbps/15Mbps Fibre Uncapped",
      price: "R399",
      link: "https://milparkmews.afrieta.com/",
    },
    {
      name: "30Mbps/30Mbps Fibre Uncapped",
      price: "R489",
      link: "https://milparkmews.afrieta.com/",
    },
    {
      name: "60Mbps/60Mbps Fibre Uncapped",
      price: "R589",
      link: "https://milparkmews.afrieta.com/",
    },
  ],
  Roshnee: [
    {
      name: "20Mbps/20Mbps Advanced Wireless",
      price: "R449",
      link: "https://signup.afrieta.com/",
    },
    {
      name: "25Mbps/25Mbps Advanced Wireless",
      price: "R580",
      link: "https://signup.afrieta.com/",
    },
    {
      name: "50Mbps/25Mbps Advanced Wireless",
      price: "R750",
      link: "https://signup.afrieta.com/",
    },
  ],
  Rustervaal: [
    {
      name: "20Mbps/20Mbps Advanced Wireless",
      price: "R449",
      link: "https://signup.afrieta.com/",
    },
    {
      name: "25Mbps/25Mbps Advanced Wireless",
      price: "R580",
      link: "https://signup.afrieta.com/",
    },
    {
      name: "50Mbps/25Mbps Advanced Wireless",
      price: "R750",
      link: "https://signup.afrieta.com/",
    },
  ],
  Fibre: [
    {
      name: "Premium OS 50Mbps/50Mbps Symmetrical Fibre",
      price: "R750",
      link: "https://fibre.afrieta.com",
    },
    {
      name: "Premium OS 100Mbps/100Mbps Symmetrical Fibre",
      price: "R990",
      link: "https://fibre.afrieta.com",
    },
    {
      name: "50Mbps/100Mbps Afrieta Fibre OS",
      price: "R1,099",
      link: "https://fibre.afrieta.com",
    },
    {
      name: "Premium OS 300Mbps/150Mbps Symmetrical Fibre",
      price: "R1,249",
      link: "https://fibre.afrieta.com",
    },
  ],
};

function showPlans(location) {
  const modal = document.getElementById("planModal");
  const title = document.getElementById("modal-title");
  const tableBody = document.getElementById("plan-table-body");
  const signupButton = document.getElementById("signup-button");
  // Set modal title
  title.textContent = `${location} Packages`;

  // Clear the table body
  tableBody.innerHTML = "";

  // Populate the table with plans
  plans[location].forEach((plan) => {
    const row = document.createElement("tr");

    // Name column
    const nameCell = document.createElement("td");
    nameCell.textContent = plan.name;
    row.appendChild(nameCell);

    // Price column
    const priceCell = document.createElement("td");
    priceCell.textContent = plan.price;
    row.appendChild(priceCell);

    // Append row to table body
    tableBody.appendChild(row);
  });

  if (location === "Sebokeng/Evaton/Tshepong") {
    signupButton.innerText = "Pre-register";
  } else {
    signupButton.innerText = "Sign Up";
  }
  // Set the button link to the first plan's link or a generic link
  if (plans[location].length > 0) {
    signupButton.href = plans[location][0].link; // Link to the first plan
  } else {
    signupButton.href = "#"; // Default link if no plans available
  }

  // Show the modal
  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("planModal");
  modal.style.display = "none";
}

// Close the modal when clicking outside of it
window.onclick = function (event) {
  const modal = document.getElementById("planModal");
  if (event.target === modal) {
    closeModal();
  }
};

// Multi Step Form

let currentStep = 1;
const totalSteps = document.querySelectorAll(".form-step").length;

const stepNumberEl = document.getElementById("step-number");
const steps = document.querySelectorAll(".step");
const formSteps = document.querySelectorAll(".form-step");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function showStep(step) {
  formSteps.forEach((formStep, index) => {
    formStep.classList.toggle("active", index + 1 === step);
  });

  steps.forEach((stepEl, index) => {
    stepEl.classList.toggle("active", index + 1 === step);
  });

  stepNumberEl.textContent = `${step} of ${totalSteps}`;

  prevBtn.style.display = step === 1 ? "none" : "inline-block";
  nextBtn.textContent = step === totalSteps ? "Submit" : "Next Step";
}

function validateStep() {
  let isValid = true;
  const currentStepFields = formSteps[currentStep - 1].querySelectorAll("[required]");

  currentStepFields.forEach(field => {
    if (field.offsetParent !== null) { // Only validate visible fields
      if (!field.value.trim()) {
        isValid = false;
        field.classList.add("error");
      } else {
        field.classList.remove("error");
      }
    }
  });

  return isValid;
}


nextBtn.addEventListener("click", function () {
  // if (validateStep()) {
  if (currentStep < totalSteps) {
    currentStep++;
    showStep(currentStep);
  } else {
    alert("Form submitted successfully!");
  }
  // }
});
prevBtn.addEventListener("click", function () {
  if (currentStep > 1) {
    currentStep--;
    showStep(currentStep);
  }
});

showStep(currentStep);

const applicationType = document.getElementById("applicationType");
const individualFields = document.getElementById("individualFields");
const companyFields = document.getElementById("companyFields");

applicationType.addEventListener("change", function () {
  if (this.value === "Company") {
    individualFields.style.display = "none";
    companyFields.style.display = "block";
  } else {
    individualFields.style.display = "block";
    companyFields.style.display = "none";
  }
});

const locationSelect = document.getElementById("locationSelect");
const agreementType1 = document.getElementById("agreementType1");
const agreementType2 = document.getElementById("agreementType2");
const agreementType3 = document.getElementById("agreementType3");

locationSelect.addEventListener("change", function () {
  const selectedLocation = locationSelect.value;
  agreementType1.style.display = selectedLocation === "Milpark Mews" ? "block" : "none";
  agreementType2.style.display = selectedLocation === "Roshnee / Rustervaal / Meyerton" ? "block" : "none";
  agreementType3.style.display = selectedLocation === "Fibre" ? "block" : "none";
  termsType1.style.display = selectedLocation === "Milpark Mews" ? "block" : "none";
  termsType2.style.display = selectedLocation === "Roshnee / Rustervaal / Meyerton" ? "block" : "none";
  termsType3.style.display = selectedLocation === "Fibre" ? "block" : "none";
});

const signedDate = document.getElementById("signedDate");
const signedPlace = document.getElementById("signedPlace");

// Signature Pad Initialization
const canvas = document.getElementById("signature-pad");
const signaturePad = new SignaturePad(canvas);
const clearButton = document.getElementById("clear-signature");

clearButton.addEventListener("click", () => {
  signaturePad.clear();
});

// Prefill Signed Date with the Current Date
const today = new Date().toISOString().split("T")[0];
signedDate.value = today;

// Prefill Signed Place with Province from Step 1
const provinceField = document.querySelector("input[name='state']"); // Assuming "state" is the name of the province field in Step 1
signedPlace.value = provinceField ? provinceField.value : "";

const companyYes = document.getElementById("companyYes");
const companyNo = document.getElementById("companyNo");
const companyDetails = document.getElementById("companyDetails");

function toggleCompanyFields() {
  if (companyYes.checked) {
    companyDetails.classList.remove("hidden");
  } else {
    companyDetails.classList.add("hidden");
  }
}

// Listen for changes on radio buttons
companyYes.addEventListener("change", toggleCompanyFields);
companyNo.addEventListener("change", toggleCompanyFields);