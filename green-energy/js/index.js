// Load your images on page-load
function preloader() {
    const imagesPaths = [
           "./img/solar.jpg",
           "./img/wind.jpg",
           "./img/hydro.jpg"
        ];
    const images = [];
        for (let i = 0; i < imagesPaths.length; i++) {
            images[i] = new Image();
            images[i].src = imagesPaths[i];
        }
    // Images ready to be used:
    console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
};
window.addEventListener("load", preloader);
let $content = document.querySelector(".content");

let btns = document.querySelectorAll('button');

let dataResource = [
    {
        heading: "Solar Water Heating",
        bodyText: "Solar water heaters use the sun to heat a reserve of water, which can then be pumped through your radiators or out your faucets or showerheads. This system is much cheaper than using gas or electricity to heat your water, and is easier to install than solar panels.  ",
        imgUrl: "./img/solar.jpg"
    },
    {
        heading: "Wind Turbines",
        bodyText: "Wind turbines are most commonly found in windfarms or floating offshore, but if you have enough real estate you can install a small wind turbine on your property to power your home.",
        imgUrl: "./img/wind.jpg"
    },
    {
         heading: "Hydro Power",
        bodyText: "This won't work for most people, but if your property contains a source of flowing water, you're in luck. You can divert some or all of the stream or river to flow through a turbine and power your home.",
        imgUrl: "./img/hydro.jpg"
    }
];



/* The first content from the
 resource-object will be loaded on the page load:
 `<h1>${headingContent}</h1>
  <img src="${imgUrl}" alt="${imgAlt}">
  <p>${bodyText}</p>` */
$content.innerHTML = `<h2>${dataResource[0].heading}</h2>
                      <div class="picture">
                        <img src="${dataResource[0].imgUrl}" alt="Solar Water Heating">
                      </div>
                      <div class="info">
                        <p>${dataResource[0].bodyText}</p>
                      </div>`;


function eventHandler(ev) {

    let clickedBtn = ev.currentTarget;
    let btnText = clickedBtn.dataset.btn;

    
    if (btnText === "sol1") {
        
        $content.innerHTML = `<h2>${dataResource[0].heading}</h2>
                              <div class = "picture"><img src="${dataResource[0].imgUrl}" alt="Solar Water Heating"></div>
                              <div class = "info">
                                <p>${dataResource[0].bodyText}</p></div>`;
    } else if (btnText === "sol2") {
        $content.innerHTML = `<h2>${dataResource[1].heading}</h2>
                              <div class = "picture2"><img src="${dataResource[1].imgUrl}" alt = "Wind Turbines"></div>
                              <div class = "info2">
                              <p>${dataResource[1].bodyText}</p></div>`;     
    } else {
        $content.innerHTML = `<h2>${dataResource[2].heading}</h2>
                              <div class = "picture3"><img src="${dataResource[2].imgUrl}" alt = "Hydro Power"></div>
                              <div class = "info3">
                              <p>${dataResource[2].bodyText}</p></div>`;
    }
    

}

/* Start your handleSelection function here. */
function handleEvent(ev) {
    /*  Remove the id active-button from the element that
        contains it prior to the click-event. 
        This will require the loop throught the NODE LIST of buttons. 
        Inside the loop, use conditional and the element object method
        hasAttribute() to check if the current button in the loop containes the id.
        If it does, use element-object property removeAttribute()
        to remove the id. */
    for (let i = 0; i < btns.length; i++) {
        if (btns[i].hasAttribute("id")) {
            btns[i].removeAttribute("id");
            console.log(btns[i]);
        }
    }

    let currentItem = ev.currentTarget;
    /*Use the element-object method setAttribute() to set the id active-button 
        to the currently clicked button. */
    currentItem.setAttribute("id", "active");
}

for (let btn of btns) {
    btn.addEventListener("click", handleEvent);
}

/* 
    Register all buttons to click event. The event-handler handleSelection will listen 
    for this event to happen. */
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", eventHandler);
}