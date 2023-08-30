const accessKey = 'PgCwEhgU8jyAQk8lDJplJ9mDpPNV9vf_BpyvWVLWqh8'

const inputSearch = document.querySelector('.search-input')
const form = document.querySelector('.search-form')
const searchButton = document.querySelector('.search-button')
const searchResults = document.querySelector('.search-results')
const showMore = document.getElementById('show-more')

let inputData = ""
page =1

async function searchImage() {
    inputData = inputSearch.value
    const url = `https://api.unsplash.com/search/photos/?page=${page}&query=${inputData}&client_id=${accessKey}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data,"thisisi")
    const results = data.results

    if (page == 1) {
        searchResults.innerHTML = "" //If first page then remove static content and add new
    }
    results.map((result)=>{
        // CREATING SEARCH RESULT DIC
        const imageWrapper = document.createElement ("div") ;
        imageWrapper.classList.add("search-result");
        const image = document.createElement ("img") ;
        image.src = result.urls.small;
        image.alt = result.alt_description;
        const imageLink = document.createElement ("a") ;
        imageLink.href = result.links.html;
        imageLink.target=" blank";
        imageLink.textContent= result.alt_description;
        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
        searchResults.appendChild(imageWrapper);
    })
    page++;
    
}

form.addEventListener("submit",(event) =>{
    event.preventDefault();
    page=1;
    searchImage();
})


showMore.addEventListener("click",(event) =>{
    event.preventDefault();
    searchImage();
})