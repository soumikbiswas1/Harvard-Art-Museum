const APIURL =
    "https://api.harvardartmuseums.org/exhibition?apikey=30b5ee64-35ca-4e04-b4e6-58b89964370f";
//const IMGPATH = "";
const SEARCHAPI =
    "https://api.harvardartmuseums.org/exhibition?apikey=30b5ee64-35ca-4e04-b4e6-58b89964370f&exact_title=";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");


getImages(APIURL);

async function getImages(url) {
    const resp = await fetch(url);
    const respData = await resp.json();

    console.log(respData);

    //showImages(respData.results);
}

//function showImages(Images) {
    
    //main.innerHTML = "";

    //Images.forEach((Image) => {
        //const { poster_path, title, overview } = Image;

        //const imageEl = document.createElement("div");
        //movieEl.classList.add("Image");

        //imageEl.innerHTML = `
            //<img
                //src="${"https://www.harvardartmuseums.org/visit/exhibitions/4176" }"
                //alt="${title}"
           // />
            //<div class="image-info">
             //   <h3>${title}</h3>
                
            //</div>
            //<div class="overview">
                //<h3>Overview:</h3>
               // ${overview}
            //</div>
        //`;

        //main.appendChild(imageEl);
   // });
//}



form.addEventListener("submit", (e) => {
    e.preventDefault();

    const searchTerm = search.value;

    if (searchTerm) {
        getImages(SEARCHAPI + searchTerm);

        search.value = "";
    }
});