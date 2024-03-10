const proxyUrl = "https://goo.su/5JumiC"; // 替换为您的代理服务器地址

const urls = [
    "https://goo.su/5JumiC",
    
];

function loadWebpage(url) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", proxyUrl + "?url=" + encodeURIComponent(url));
    xhr.onload = function () {
        if (xhr.status === 200) {
            const webpage = document.getElementById("webpage");
            webpage.innerHTML = xhr.responseText;
        } else {
            console.error("Error loading webpage:", xhr.statusText);
        }
    };
    xhr.send();
}

window.onload = function () {
    loadWebpage(urls[0]);

    const links = document.getElementsByTagName("a");
    for (const link of links) {
        link.onclick = function (event) {
            event.preventDefault();
            const href = link.getAttribute("href");
            loadWebpage(href);
        };
    }
};
