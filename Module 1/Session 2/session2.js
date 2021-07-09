const API_url = "https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json"

function myFunction() {
    alert("Ini Alert");
}

// function get_api(url) {  
//     fetch(url)
//         .then((response) => response.json())
//         .then((data) => {
//             show(data);
//             console.log(data);
//         })
//         .catch((err) => {
//             alert("Ini Alert Failed", err);
//         });
// }

function get_api(url) {  
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                Promise.reject("There is an error fetching the data"); //Keluar error kalau ada typo di request url
            }
        console.log("status ok, response");
        return response.json();
        })
        .then((data) => {
            console.log("resolved", data);
            show(data);
        })
        .catch((err) => {
            console.log("rejected:", err);
            alert("Ini Alert Failed", err);
        });
};

function show(data) {
    let playlist =
        `<img src= ${data.album.images[0].url} alt="image"><br>
        <p>Title</p>
        <p>${data.name}</p><br>
        <p>Artists</p>
        <p>${data.artists[0].name}</p><br>
        <p>Albums</p>
        <p>${data.album.name}</p><br>
        <button>Click</button>`;

    document.getElementById("playlist-session").innerHTML = playlist;
}

get_api(API_url);