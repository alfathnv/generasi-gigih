const API_url = "https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json"

function myFunction() {
    alert("Ini Alert");
}

function get_api(url) {
    
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)})
      .catch((err) => {
        alert("Request Failed", err);
    });
}

get_api(API_url);