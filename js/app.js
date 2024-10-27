const toggleButton = document.getElementById("toggle-btn");
const sidebar = document.getElementById("sidebar");

function toggleSideBar() {
    sidebar.classList.toggle("close");
    toggleButton.classList.toggle("rotate");
}

fetch("../data.json")
    .then((respone) => respone.json())
    .then((data) => {
        const playerList = document.querySelector(".player-list");
        data.forEach((player) => {
            const playerItem = document.createElement("div");
            playerItem.classList.add("player-item");

            playerItem.innerHTML = `
                    <div class="images">
                        <img
                            src="${player.image}"
                            alt="${player.name}"
                        />
                    </div>
                    <div class="content">
                        <h2 class="heading">${player.name}</h2>
                        <p class="desc">${player.details}</p>
                        <a href="#!" class="btn">Vote</a>
                    </div>
            `;
            playerList.appendChild(playerItem);
        });
    })
    .catch((error) => console.error("Error fetching JSON:", error));
