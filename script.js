const khodamList = [
    {
        "name": "ular putih",
        "description": "kamu dijaga oleh ular putih",
        "image": "khodam_ular_putih.jpg",
    },
    {
        "name": "naga putih",
        "description": "kamu dijaga oleh naga putih",
        "image": "khodam_naga_putih.jpg",
    },
    // Add more khodam objects here
];

const nameInput = document.getElementById("nameInput");
const khodam_name = document.getElementById("khodam_name");
const khodam_description = document.getElementById("khodam_description");

function getKhodam() {
    const name = nameInput.value;

    if (name.length > 0) {
        const randomIndex = Math.floor(Math.random() * khodamList.length);
        const randomKhodam = khodamList[randomIndex];

        khodam_name.innerHTML = randomKhodam.name;
        khodam_description.innerHTML = randomKhodam.description;
    } else {
        khodam_name.innerHTML = "";
        khodam_description.innerHTML = "";

        alert("Please enter name!!");
    }
}
