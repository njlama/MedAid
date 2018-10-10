const carouselExampleSlidesOnly = document.querySelector("#carouselExampleControls");

var imageCarouselArray = [
    "../img/brooklyn.jpg",
    "../img/brooklynNight.jpg",
    "../img/brookly3rd.jpg"
]

let olCarousel = document.createElement("ol");
olCarousel.className = "carousel-indicators";
carouselExampleSlidesOnly.appendChild(olCarousel);

for (var i = 0; i<3; i++){
    let liCarousel = document.createElement("li");
    liCarousel.setAttribute("data-target", "#carouselExampleControls");
    liCarousel.setAttribute("data-slide-to", i.toString);

    if (i==0){
        liCarousel.className = "active";
    } 
    olCarousel.appendChild(liCarousel);
}


let divCarousel = document.createElement("div");
divCarousel.className = "carousel-inner";
carouselExampleSlidesOnly.appendChild(divCarousel);

for (var i = 0; i <3; i++) {
    let divCarouselItem = document.createElement("div");
    if (i == 0){
        divCarouselItem.className = "carousel-item active";
    } else {
        divCarouselItem.className = "carousel-item";
    }
    divCarousel.appendChild(divCarouselItem);

   

    let image = document.createElement("img");
    image.className = "d-block w-100";
    image.src = imageCarouselArray[i];
    image.alt = "first slide";
    image.setAttribute("style", "height: 500px")
    divCarouselItem.appendChild(image);
}

let previous = document.createElement("a");
previous.className = "carousel-control-prev";
previous.href = "#carouselExampleControls";
previous.setAttribute("role","button");
previous.setAttribute("data-slide","prev");
carouselExampleSlidesOnly.appendChild(previous);

let spanPrevious = document.createElement("span");
spanPrevious.className = "carousel-control-prev-icon";
spanPrevious.setAttribute("aria-hidden","true");
previous.appendChild(spanPrevious);

let span2Previous = document.createElement("span");
span2Previous.className = "sr-only";
span2Previous.innerHTML = "Previous";
previous.appendChild(span2Previous);

let next = document.createElement("a");
next.className = "carousel-control-next";
next.href = "#carouselExampleControls";
next.setAttribute("role","button");
next.setAttribute("data-slide","next");
carouselExampleSlidesOnly.appendChild(next);

let spanNext = document.createElement("span");
spanNext.className = "carousel-control-next-icon";
spanNext.setAttribute("aria-hidden","true");
next.appendChild(spanNext);

let span2Next = document.createElement("span");
span2Next.className = "sr-only";
span2Next.innerHTML = "next";
next.appendChild(span2Next);



