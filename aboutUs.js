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
    {
        authorImage: "./images/authors/page 3/man-in-yellow-button-up-shirt-wearing-black-framed-eyeglasses-7562313.svg",
        authorName: "Guy Hawkins",
        position: "Content Writer @Company",
        socialMedia: "./images/authors/facebook.svg",
        socialMedia2: "./images/authors/twiter.svg",
        socialMedia3: "./images/authors/insta.svg",
        socialMedia4: "./images/authors/linkedIn.svg",
    },
    {
        authorImage: "./images/authors/page 3/woman-in-white-and-black-striped-shirt-wearing-black-sunglasses-3671083.svg",
        authorName: "Eleanor Pena",
        position: "Content Writer @Company",
        socialMedia: "./images/authors/facebook.svg",
        socialMedia2: "./images/authors/twiter.svg",
        socialMedia3: "./images/authors/insta.svg",
        socialMedia4: "./images/authors/linkedIn.svg",
    },
    {
        authorImage: "./images/authors/page 3/content-unshaven-man-covering-eye-with-yellow-flower-5262459.svg",
        authorName: "Robert Fox",
        position: "Content Writer @Company",
        socialMedia: "./images/authors/facebook.svg",
        socialMedia2: "./images/authors/twiter.svg",
        socialMedia3: "./images/authors/insta.svg",
        socialMedia4: "./images/authors/linkedIn.svg",
    },
    {
        authorImage: "./images/authors/page 3/cheerful-young-ethnic-male-millennial-standing-near-stone-wall-and-smiling-6147118.svg",
        authorName: "Jacob Jones",
        position: "Content Writer @Company",
        socialMedia: "./images/authors/facebook.svg",
        socialMedia2: "./images/authors/twiter.svg",
        socialMedia3: "./images/authors/insta.svg",
        socialMedia4: "./images/authors/linkedIn.svg",
    },
];
let essentialDiv = document.getElementById("authorsHtml");
for (let element of authors) {
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

// let authors2 = [
//     {
//         authorImage: "./images/authors/page 3/man-in-yellow-button-up-shirt-wearing-black-framed-eyeglasses-7562313.svg",
//         authorName: "Guy Hawkins",
//         position: "Content Writer @Company",
//         socialMedia: "./images/authors/facebook.svg",
//     },
//     {
//         authorImage: "./images/authors/page 3/woman-in-white-and-black-striped-shirt-wearing-black-sunglasses-3671083.svg",
//         authorName: "Eleanor Pena",
//         position: "Content Writer @Company",
//         socialMedia: "./images/authors/facebook.svg",
//     },
//     {
//         authorImage: "./images/authors/page 3/content-unshaven-man-covering-eye-with-yellow-flower-5262459.svg",
//         authorName: "Robert Fox",
//         position: "Content Writer @Company",
//         socialMedia: "./images/authors/facebook.svg",
//     },
//     {
//         authorImage: "./images/authors/page 3/cheerful-young-ethnic-male-millennial-standing-near-stone-wall-and-smiling-6147118.svg",
//         authorName: "Jacob Jones",
//         position: "Content Writer @Company",
//         socialMedia: "./images/authors/facebook.svg",
//     },
// ];
// let authorsBlog = document.getElementById("authorsHtml2");
// for (element of authors2) {
//     let manWoman = document.createElement("div")
//     authorsBlog.appendChild(manWoman)
//     manWoman.className = "blogers"

//     let wevSuraten = document.createElement("img")
//     manWoman.appendChild(wevSuraten)
//     wevSuraten.src = element.authorImage;

//     let wevNom = document.createElement("h2")
//     manWoman.appendChild(wevNom)
//     wevNom.textContent = element.authorName
//     wevNom.className = "theirName"

//     let wevPosition = document.createElement("p")
//     manWoman.appendChild(wevPosition)
//     wevPosition.textContent = element.position
//     wevPosition.className = "theirPosition"

//     let wevSocialMedia = document.createElement("img")
//     manWoman.appendChild(wevSocialMedia)
//     wevSocialMedia.src = element.socialMedia

// }