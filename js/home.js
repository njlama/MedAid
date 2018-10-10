

const courseContainer = document.querySelector("#courseContainer");
const modalTitle = document.querySelector("#modalTitle");
const modalDescription = document.querySelector("#modalDescription");


var courseArray = [
    {
        title: "Post-Operative Breast Cancer",
        presenter: "presented by Linda Miller",
        hours: "Approved for 2 hrs in NC",
        image: "../img/img1.jpg",
        description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est."
    },

    {
        title: "Basic Skills to manage Edema",
        presenter: "presented by John",
        hours: "Approved for 2 hrs in NC",
        image: "../img/img2.jpg",
        description: " Vestibulum erat wisi,condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum,elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui."
    },

    {
        title: "Low vision Client",
        presenter: "presented by Rick",
        hours: "Approved for 3 hrs in NC",
        image: "../img/img3.jpg",
        description: "Bright light, remove rugs. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
    },

    {
        title: "Core stability",
        presenter: "presented by Cockrum",
        hours: "Approved for 5 hrs in NC",
        image: "../img/woman.jpg", 
        description: "Core stability is essential for proper load balance within the spine, pelvis, and kinetic chain. The so-called core is the group of trunk muscles that surround the spine and abdominal viscera. Abdominal, gluteal, hip girdle, paraspinal, and other muscles work in concert to provide spinal stability."
    },

    {
        title: "Fall prevention",
        presenter: "presented by John",
        hours: "Approved for 2 hrs in NC",
        image: "../img/woman.jpg",
        description: "For the elderly, fall prevention means injury prevention. Ask your loved ones to help you ensure that your rooms and stairways are clutter-free and well-equipped with lighting, handrails, grab bars, and nonslip mats to help you avoid falling — all of which can go a long way toward keeping you safe in your home."
    },

    {
        title: "Stroke treatment",
        presenter: "presented by Marlene",
        hours: "Approved for 1 hrs in NC",
        image: "../img/woman.jpg",
        description: "Treatment is also aimed at other factors that put you at risk, including high blood pressure, diabetes, and high cholesterol. But it takes more than just your doctor's efforts. You also have an important role to play in preventing stroke."
    },
    {
        title: "Hip replacement",
        presenter: "presented by Marlene",
        hours: "Approved for 1 hrs in NC",
        image: "../img/woman.jpg",
        description: "Old woman, brittle bones and fall. Cause of death for woman > 60 year old."
    },

    {
        title: "Blood control",
        presenter: "presented by Marlene",
        hours: "Approved for 1 hrs in NC",
        image: "../img/woman.jpg",
        description: "Cholesterol is a waxy, fatlike substance that the body needs to function normally. Cholesterol is used as a building block for many structures as well as other chemicals and hormones that are essential for the body’s activities."
    },
    {
        title: "Knee Replacement",
        presenter: "presented by Marlene",
        hours: "Approved for 1 hrs in NC",
        image: "../img/woman.jpg",
        description: "Knee replacement surgery was first performed in 1968. Since then, improvements in surgical materials and techniques have greatly increased its effectiveness. Total knee replacements are one of the most successful procedures in all of medicine."
    }
]
 var x = 0;
var numberOfCourse = courseArray.length;
var numberOfRow = 0;

for (var y = 0; y < numberOfCourse; y++){

    if (y%3 == 0){
        numberOfRow++;
    }
}

for (var i = 0; i < numberOfRow; i++) {
    let courseRow = document.createElement("div");
    courseRow.className = "row";
    courseContainer.appendChild(courseRow);
    


    for (var n = 0; n < 3; n++) {
        
        if (x < numberOfCourse) {
            let div = document.createElement("div");
            div.className = "col-md m-4 text-left card px-0";
            div.style = "width: 18rem";
            courseRow.appendChild(div);

            let image = document.createElement("img");
            image.className = "card-img-top";
            image.alt = "image";
            image.src = courseArray[x].image;
            div.appendChild(image);

            let cardBody = document.createElement("div");
            cardBody.className = "card-body bg-info";
            div.appendChild(cardBody);
           

            let title = document.createElement("p");
            title.innerHTML = courseArray[x].title;
            title.className = "card-title";
            title.style.fontWeight = "bold";
            cardBody.appendChild(title);

            let presenter = document.createElement("p");
            presenter.innerHTML = courseArray[x].presenter;
            presenter.className = "card-text mb-0";
            presenter.style.color = "white";
            cardBody.appendChild(presenter);

            let hours = document.createElement("p");
            hours.innerHTML = courseArray[x].hours;
            hours.className = "card-text";
            hours.style.color = "white";
            cardBody.appendChild(hours);

            let line = document.createElement("hr");
            cardBody.appendChild(line);
            line.style.display = "none";

            let descriptionDisplayNone = document.createElement("p");
            descriptionDisplayNone.innerHTML = courseArray[x].description;
            cardBody.appendChild(descriptionDisplayNone);
            descriptionDisplayNone.style.display = "none";

            let divPlay = document.createElement("div");
            cardBody.appendChild(divPlay);
            divPlay.style.display = "none";

            let iconPlay = document.createElement("img");
            iconPlay.src = "play.png";
            iconPlay.alt = "play video";
            iconPlay.className = "pb-1";
            divPlay.appendChild(iconPlay);

            let preview = document.createElement("a");
            preview.innerHTML = "Preview Course";
            preview.setAttribute("style", "text-decoration: none");
            preview.href = "#myModal";
            preview.className = "pl-3"
            preview.setAttribute("data-toggle", "modal");
            divPlay.appendChild(preview);
            

            

            //Event listener 
            div.addEventListener("mouseover", () => {
                image.style.height = "290px";
                line.style.display = "block";
                divPlay.style.display = "block";      
            })

            div.addEventListener("mouseout", () => {
                image.style.height = "330px";
                line.style.display = "none";
                divPlay.style.display = "none";
            })

            preview.addEventListener("click", () => {
                console.log(title.innerHTML); 
                modalTitle.innerHTML = title.innerHTML;
                modalDescription.innerHTML = descriptionDisplayNone.innerHTML;
            })

            x = x + 1;



        }
    }



    
}




