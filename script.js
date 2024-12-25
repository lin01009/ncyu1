// 認證功能
window.authenticate = function() {
    const code = document.getElementById("auth-code").value;
    const displayedCode = document.getElementById("auth-code-display").textContent;
    const feedback = document.getElementById("auth-feedback");
    const content = document.getElementById("content");
    const authContainer = document.getElementById("auth-container");

    if (code === displayedCode) {
        feedback.textContent =// 認證功能
window.authenticate = function () {
    const code = document.getElementById("auth-code").value;
    const displayedCode = document.getElementById("auth-code-display").textContent;
    const feedback = document.getElementById("auth-feedback");
    const content = document.getElementById("content");
    const authContainer = document.getElementById("auth-container");

    if (code === displayedCode) {
        feedback.textContent = "認證成功！";
        feedback.style.color = "green";
        authContainer.style.display = "none";
        content.style.display = "block";
    } else {
        feedback.textContent = "認證失敗，請重新輸入！";
        feedback.style.color = "red";
    }
};

// 圖片輪播功能
const images = [
    "https://upload.wikimedia.org/wikipedia/zh/thumb/4/49/National_Chiayi_University_seal.svg/1200px-National_Chiayi_University_seal.svg.png",
    "https://www.ncyu.edu.tw/ncyu/ServerFile/GetByKindEditor/459f4bd3-ba75-4acd-a36b-ed775326fd8b?subjectId=74" ,
    "https://www.ncyu.edu.tw/Uploads/Icon/9a1327b4-6f82-43c1-b994-425704ae0fe8.png"
    
];
let currentImageIndex = 0;

window.startSlideshow = function () {
    const slideshowImg = document.getElementById("slideshow-img");
    if (slideshowImg) {
        setInterval(() => {
            slideshowImg.src = images[currentImageIndex];
            currentImageIndex = (currentImageIndex + 1) % images.length;
        }, 2000);
    }
};

// 留言功能
let comment = document.getElementById("comment");
let btn = document.getElementById("btn");
let list = document.getElementById("list");

btn.addEventListener("click", () => {
    const newComment = document.createElement("div");
    newComment.classList.add("message");

    newComment.innerHTML = `
        <p>${comment.value}</p>
        <hr>
    `;

    list.insertBefore(newComment, list.firstChild);

    comment.value = "";
});

// 圖片變換功能（旅遊回憶區域）
let travelImages = [
    { id: "travel1", hoverSrc: "images/travel1-1.jpg", defaultSrc: "images/travel1.jpg" },
    { id: "travel2", hoverSrc: "images/travel2-1.jpg", defaultSrc: "images/travel2.jpg" },
    { id: "travel3", hoverSrc: "images/travel3-1.jpg", defaultSrc: "images/travel3.jpg" },
    { id: "travel4", hoverSrc: "images/travel4-1.jpg", defaultSrc: "images/travel4.jpg" }
];

travelImages.forEach(img => {
    let element = document.getElementById(img.id);
    element.addEventListener("mouseover", function () {
        this.src = img.hoverSrc;
    });
    element.addEventListener("mouseout", function () {
        this.src = img.defaultSrc;
    });
});
 "認證成功！";
        feedback.style.color = "green";
        authContainer.style.display = "none";
        content.style.display = "block";
    } else {
        feedback.textContent = "認證失敗，請重新輸入！";
        feedback.style.color = "red";
    }
};

// 圖片輪播功能
const images = [
    "https://upload.wikimedia.org/wikipedia/zh/thumb/4/49/National_Chiayi_University_seal.svg/1200px-National_Chiayi_University_seal.svg.png",
    "https://www.ncyu.edu.tw/ncyu/ServerFile/GetByKindEditor/459f4bd3-ba75-4acd-a36b-ed775326fd8b?subjectId=74",
    "https://www.ncyu.edu.tw/Uploads/Icon/9a1327b4-6f82-43c1-b994-425704ae0fe8.png"
];
let currentImageIndex = 0;

window.startSlideshow = function() {
    const slideshowImg = document.getElementById("slideshow-img");
    if (slideshowImg) {
        setInterval(() => {
            slideshowImg.src = images[currentImageIndex];
            currentImageIndex = (currentImageIndex + 1) % images.length;
        }, 2000);
    }
};

// 留言功能
let comment = document.getElementById("comment");
let btn = document.getElementById("btn");
let list = document.getElementById("list");

btn.addEventListener("click", () => {
    const newComment = document.createElement("div");
    newComment.classList.add("message");

    newComment.innerHTML = `
        <p>${comment.value}</p>
        <hr>
    `;

    list.insertBefore(newComment, list.firstChild);

    comment.value = "";
});
// 時鐘功能
function updateClock() {
    const clock = document.getElementById("clock");
    const now = new Date();
    clock.textContent = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock(); 

// 天氣資訊功能
async function fetchWeather() {
    const weatherDiv = document.getElementById("weather");
    try {
        const response = await fetch(
            "https://api.open-meteo.com/v1/forecast?latitude=23.5568&longitude=120.4255&current_weather=true"
        );
        const data = await response.json();
        const temperature = data.current_weather.temperature;
        const condition = data.current_weather.weathercode;

        
        const conditionDescriptions = {
            0: "晴朗",
            1: "主要是晴天",
            2: "部分多雲",
            3: "陰天",
            45: "薄霧",
            48: "霜霧",
            51: "輕微毛毛雨",
            53: "中度毛毛雨",
            55: "強烈毛毛雨",
            61: "小雨",
            63: "中雨",
            65: "大雨",
            71: "小雪",
            73: "中雪",
            75: "大雪",
            95: "雷陣雨"
        };

        const weatherDescription = conditionDescriptions[condition] || "未知天氣";
        weatherDiv.textContent = `當前溫度：${temperature}°C，天氣：${weatherDescription}`;
    } catch (error) {
        weatherDiv.textContent = "無法載入天氣資訊";
    }
}
fetchWeather();



document.getElementById("theme-toggle").addEventListener("click", function () {
    const body = document.body;
    body.classList.toggle("dark-mode");

    
    this.textContent = body.classList.contains("dark-mode")
        ? "切換為亮模式"
        : "切換為深色模式";
});


document.addEventListener("DOMContentLoaded", () => {
    const puzzleContainer = document.getElementById("puzzle-container");
    const dropZones = document.querySelectorAll(".drop-zone");
    const imageParts = [
        { src: "https://img.freepik.com/premium-photo/fuji-mountain-cherry-blossoms-spring-japan_252027-24.jpg", index: 0 },
        { src: "https://www.yamakei-online.com/new_images/yama-ya/column/3222/3222_b.jpg", index: 1 },
        { src: "https://tw.wamazing.com/media/wp-content/uploads/sites/4/2023/08/fujisanautumn_pixta_97045554_M-853x569.jpg.webp", index: 2 },
        { src: "https://www.fuji-net.co.jp/wp/wp-content/uploads/2024/02/0-1.jpg", index: 3 },
    ];

    
    const shuffledParts = [...imageParts].sort(() => Math.random() - 0.5);

    
    shuffledParts.forEach((part) => {
        const piece = document.createElement("div");
        piece.classList.add("puzzle-piece");
        piece.style.backgroundImage = `url(${part.src})`;
        piece.draggable = true;
        piece.dataset.index = part.index;
        puzzleContainer.appendChild(piece);

        
        piece.addEventListener("dragstart", (e) => {
            e.dataTransfer.setData("text/plain", e.target.dataset.index);
        });
    });

    
    dropZones.forEach((zone) => {
        zone.addEventListener("dragover", (e) => {
            e.preventDefault();
        });

        zone.addEventListener("drop", (e) => {
            e.preventDefault();
            const draggedIndex = e.dataTransfer.getData("text/plain");
            if (draggedIndex === zone.dataset.index) {
                const draggedPiece = document.querySelector(
                    `.puzzle-piece[data-index='${draggedIndex}']`
                );
                zone.appendChild(draggedPiece);
                zone.classList.add("success");
                checkPuzzleCompletion();
            } else {
                alert("片段位置錯誤，請重試！");
            }
        });
    });

    
    function checkPuzzleCompletion() {
        const isComplete = Array.from(dropZones).every(
            (zone) =>
                zone.children.length > 0 &&
                zone.children[0].dataset.index === zone.dataset.index
        );

        if (isComplete) {
            document.getElementById("completion-message").style.display = "block";
        }
    }
});