const allcategory = document.querySelector(".categoryall");
function newsContent(data){
  return `<div class='mcard'>
  <div class='mtitle'>
  <h1>${data.title}</h1>
  </div>
  <div>
  <img src ="${data.imageUrl}" alt="Image1">
  </div>
  <div class='mcontent_info'>
  <p class='mcontent'> "${data.content}"</p>
  </div>
  <div>
  <a href= "${data.readMoreUrl}" target="_blank" class="link">Read more</a>
  <p class = "mauthor">Author:${data.author}</p>
  </div>
  <div class='mday'>
    <p class='mdate'> ${data.date}</p>
    </div>
    <div><p class='mtime'> Time:${data.time}</p></div>
  </div>
  <br><br>`
}
allcategory.addEventListener("click", async (event) => {
 let API = event.target.value
 let apiURL = `https://inshorts.deta.dev/news?category=${API}`
  console.log(API)
  
  try {
    const response = await axios.get(apiURL);
    console.log(response.data.data);

    const AO = response.data.data;
    AO.forEach(function(array){
      newsTemplate = newsContent(array);
      article.insertAdjacentHTML(
        "afterbegin",newsTemplate
      );
    });
  } catch (err) {
    // err.response.status == 404;
    console.log(err);
    window.alert("something went wrong.Please Try again!!")
  }
});
