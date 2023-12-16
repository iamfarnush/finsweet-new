let people = [
    {
        Image: "./images/Page 2 images/two-women-in-front-of-dry-erase-board-1181533.svg",
    },
    {
        Image: "./images/Page 2 images/photo-of-people-doing-handshakes-3183197.png"
    },
    {
        Image: "./images/Page 2 images/photo-of-woman-looking-at-man-3183173.svg",

    },
    {
        Image: "./images/Page 2 images/photo-of-people-walking-on-hallway-3182811.svg",
    },
    {
        Image: "./images/Page 2 images/two-women-in-front-of-dry-erase-board-1181533.svg",
    }
];
let parentDiv = document.getElementById("suratDiv");
for (element of people) {
    let peopleDiv = document.createElement("div")
    parentDiv.appendChild(peopleDiv)
    peopleDiv.className = "boxes"

    let suratenTag = document.createElement("img")
    peopleDiv.appendChild(suratenTag)
    suratenTag.src = element.Image

    let titleTag = document.createElement("h3")
    peopleDiv.appendChild(titleTag)
    titleTag.textContent = element.title

    let informTag = document.createElement("h1")
    peopleDiv.appendChild(informTag)
    informTag.textContent = element.inform

    let textTag = document.createElement("p")
    peopleDiv.appendChild(textTag)
    textTag.textContent = element.text
};
let information = [
    {
        title: "STARTUP",
        inform: "Design tips for designers that cover everything you need",
        text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
    },
    {
          title: "BUSINESS",
        inform: "How to build rapport with your web design clients",
        text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
    },
    {
          title: "STARTUP",
        inform: "Logo design trends to avoid in 2022",
        text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
    },
    {
        title: "TECHNOLOGY",
        inform: "8 Figma design systems you can download for free today",
        text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    },
    {
          title: "ECONOMY",
        inform: "Font sizes in UI design: The complete guide to follow",
        text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
    },
]
let texts = document.getElementById("textDiv");
for (element of information) {
    let titleDiv = document.createElement("div")
    texts.appendChild(titleDiv)
    titleDiv.className = "boksen"
    

    let titleTag = document.createElement("h3")
    titleDiv.appendChild(titleTag)
    titleTag.textContent = element.title


    let informTag = document.createElement("h1")
    titleDiv.appendChild(informTag)
    informTag.textContent = element.inform
    informTag.className = "informTAG"

    let textTag = document.createElement("p")
    titleDiv.appendChild(textTag)
    textTag.textContent = element.text
    textTag.className = "textTAG"
}let catigoriya = [
    {
        icon: "./images/Icons/Group 9206.svg",
        title: "Business",    
        info: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    },
    {
        icon: "./images/Icons/Group 9204.svg",
        title: "Startup",    
        info: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    },
    {
        icon: "./images/Icons/Group 9205.svg",
        title: "Economy",    
        info: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    },
    {
        icon: "./images/Icons/Group 9207.svg",
        title: "Technology",    
        info: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    },
];
let divFromHtml = document.getElementById("catigories");
for(element of catigoriya){
let mainDiv = document.createElement("div");
 divFromHtml.appendChild(mainDiv);
 mainDiv.className = "catigories";

 let iconTag = document.createElement("img");
 mainDiv.appendChild(iconTag);
 iconTag.src = element.icon;

 let titleTag = document.createElement("a"); 
mainDiv.appendChild(titleTag); 
titleTag.textContent = element.title;
 titleTag.className = "titles";

 let infoTag = document.createElement("p");
 mainDiv.appendChild(infoTag);
 infoTag.textContent = element.info;
 infoTag.className = "inform";
};
