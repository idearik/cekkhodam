const khodamList = [
    {
        "name": "Ular Putih",
        "description": "Kamu dijaga oleh ular putih mistis yang selalu hadir untuk melindungi dan membantumu. Dengan kebijaksanaan dan kekuatannya, ular ini memastikan keselamatanmu dan memberikan ketenangan dalam setiap langkah yang kamu ambil.",
        "image": "khodam_ular_putih.jpg",
    },
    {
        "name": "Naga Putih",
        "description": "Kamu dilindungi oleh naga putih legendaris yang selalu setia menemanimu. Dengan sayap perkasa dan napas sakti, naga putih ini menjaga keselamatanmu dan memberikan rasa aman dalam setiap perjalanan yang kamu tempuh",
        "image": "khodam_naga_putih.jpg",
    },
    {
        "name": "Kera Putih",
        "description": "Kamu ditemani oleh kera putih ajaib yang setia menjaga dan membantumu. Dengan kecerdikan dan ketangkasannya, kera putih ini selalu memastikan keselamatanmu dan memberikan kenyamanan dalam setiap petualanganmu.",
        "image": "khodam_naga_putih.jpg",
    },
    {
        "name": "Macan Putih",
        "description": "Kamu dilindungi oleh macan putih yang gagah dan penuh kharisma. Dengan kekuatannya yang luar biasa dan ketajaman indranya, macan putih ini selalu siap menjaga keselamatanmu dan memberikan rasa percaya diri dalam setiap langkah yang kamu ambil.",
        "image": "khodam_naga_putih.jpg",
    },
    {
        "name": "Kera Marah",
        "description": "Kamu ditemani oleh kera merah yang penuh energi dan keberanian. Dengan ketangkasan dan keberaniannya, kera merah ini selalu menjaga keselamatanmu dan memberikan semangat dalam setiap tantangan yang kamu hadapi",
        "image": "khodam_naga_putih.jpg",
    },
    {
        "name": "Naga Merah",
        "description": "Kamu dilindungi oleh naga merah yang kuat dan penuh semangat. Dengan kekuatan api dan sayap megahnya, naga merah ini selalu memastikan keselamatanmu dan memberikan perlindungan dalam setiap rintangan yang kamu lalui",
        "image": "khodam_naga_putih.jpg",
    },
    // Add more khodam objects here
];

const nameInput = document.getElementById("nameInput");
const khodam_name = document.getElementById("khodam_name");
const khodam_description = document.getElementById("khodam_description");
const khodam_image = document.getElementById("khodam_image");
const loadingScreen = document.getElementById("loading-screen");
const mainContent = document.getElementById("main-content");

function showLoadingScreen() {
    loadingScreen.style.display = "flex";
    mainContent.style.display = "none";
}

function hideLoadingScreen() {
    loadingScreen.style.display = "none";
    mainContent.style.display = "block";
}

function getKhodam() {
    const name = nameInput.value;

    if (name.length > 0) {
        showLoadingScreen();
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * khodamList.length);
            const randomKhodam = khodamList[randomIndex];

            khodam_name.innerHTML = randomKhodam.name;
            khodam_description.innerHTML = randomKhodam.description;
            khodam_image.src = randomKhodam.image;
            khodam_image.alt = randomKhodam.name;
            khodam_image.style.display = "block";
            
            hideLoadingScreen();
        }, 3000);
    } else {
        khodam_name.innerHTML = "";
        khodam_description.innerHTML = "";
        khodam_image.style.display = "none";

        alert("Please enter name!!");
    }
}

// Initially hide the loading screen
hideLoadingScreen();
