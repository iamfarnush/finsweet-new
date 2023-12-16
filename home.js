let authors = [
    {
        authorImage: "./images/authors/man-in-yellow-button-up-shirt-wearing-black-framed-eyeglasses-7562313.svg",
        authorName: "Floyd Miles",
        position: "Content Writer @Company",
        socialMedia: "./images/authors/facebook.svg",
        socialMedia2: "./images/authors/twiter.svg",
        socialMedia3: "./images/authors/insta.svg",
        socialMedia4: "./images/authors/linkedIn.svg",
    },
    {
        authorImage: "./images/authors/woman-in-white-and-black-striped-shirt-wearing-black-sunglasses-3671083.svg",
        authorName: "Dianne Russell",
        position: "Content Writer @Company",
        socialMedia: "./images/authors/facebook.svg",
        socialMedia2: "./images/authors/twiter.svg",
        socialMedia3: "./images/authors/insta.svg",
        socialMedia4: "./images/authors/linkedIn.svg", 
    },
    {
        authorImage: "./images/authors/fashion-woman-cute-shoes-5704849.svg",
        authorName: "Jenny Wilson",
        position: "Content Writer @Company",
        socialMedia: "./images/authors/facebook.svg", 
        socialMedia2: "./images/authors/twiter.svg",
        socialMedia3: "./images/authors/insta.svg",
        socialMedia4: "./images/authors/linkedIn.svg",
    },
    {
        authorImage: "./images/authors/content-baker-with-delicious-puff-in-cafeteria-6205509.svg",
        authorName: "Leslie Alexander",
        position: "Content Writer @Company",
        socialMedia: "./images/authors/facebook.svg", 
        socialMedia2: "./images/authors/twiter.svg",
        socialMedia3: "./images/authors/insta.svg",
        socialMedia4: "./images/authors/linkedIn.svg",
    },
];
let essentialDiv = document.getElementById("authorsHtml");
for(let element of authors){
    let authorDiv = document.createElement("div")
    essentialDiv.appendChild(authorDiv);
    authorDiv.className = "boxes"

    let suratTag = document.createElement("img")
    authorDiv.appendChild(suratTag);
    suratTag.src = element.authorImage

    let authorTag = document.createElement("h2")
    authorDiv.appendChild(authorTag);
    authorTag.textContent = element.authorName
    authorTag.className = "authorsNames"

    let positionTag = document.createElement("p")
    authorDiv.appendChild(positionTag);
    positionTag.textContent = element.position
    positionTag.className = "textUnderName"

    let imagesTag = document.createElement("img")
    authorDiv.appendChild(imagesTag);
    imagesTag.src = element.socialMedia
    imagesTag.className = "smallImages"

    let imagesTag2 = document.createElement("img")
    authorDiv.appendChild(imagesTag2);
    imagesTag2.src = element.socialMedia2
    imagesTag2.className = "smallImages"

    let imagesTag3 = document.createElement("img")
    authorDiv.appendChild(imagesTag3);
    imagesTag3.src = element.socialMedia3
    imagesTag3.className = "smallImages"

    let imagesTag4 = document.createElement("img")
    authorDiv.appendChild(imagesTag4);
    imagesTag4.src = element.socialMedia4
    imagesTag4.className = "smallImages"
};

let catigoriya = [
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