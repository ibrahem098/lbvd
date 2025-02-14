let movableElemnts = document.querySelectorAll("img")

let offsetX, offsetY;
let isDragging = false;
movableElemnts.forEach(elmnt => {
    elmnt.addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.clientX - elmnt.offsetLeft;
        offsetY = e.clientY - elmnt.offsetTop;
    });
    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            elmnt.style.left = `${e.clientX - offsetX}px`;
            elmnt.style.top = `${e.clientY - offsetY}px`;
            console.log(e)
        }
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
    });
})
