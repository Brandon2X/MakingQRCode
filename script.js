let isDragging = false;
let offsetX, offsetY;

const moveableBox = document.getElementById("moveable-box");

moveableBox.addEventListener("mousedown", (e) => {
    isDragging = true;
    offsetX = e.clientX - moveableBox.getBoundingClientRect().left;
    offsetY = e.clientY - moveableBox.getBoundingClientRect().top;
    moveableBox.style.cursor = "grabbing";
});

document.addEventListener("mousemove", (e) => {
    if (isDragging) {
        const x = e.clientX - offsetX;
        const y = e.clientY - offsetY;
        moveableBox.style.left = `${x}px`;
        moveableBox.style.top = `${y}px`;
    }
});

document.addEventListener("mouseup", () => {
    isDragging = false;
    moveableBox.style.cursor = "grab";
});
