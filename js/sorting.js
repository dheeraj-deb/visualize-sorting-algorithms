const barContainer = document.getElementById('bar_container');
const newArrayBtn = document.getElementById('new_array');
const bubbleSort = document.getElementById('bubble');

let bars = new Array()
let divs = new Array()

function swap(el1, el2) {
    // el1.style.background = "black"
    // el2.style.background = "black"

    return new Promise(resolve => setTimeout(() => {
        const style1 = window.getComputedStyle(el1);
        const style2 = window.getComputedStyle(el2);

        const transform1 = style1.getPropertyValue("height");
        const transform2 = style2.getPropertyValue("height");

        console.log(transform1)

        el1.style.height = transform2;
        el2.style.height = transform1;

        el1.style.background = "green"
        el2.style.background = "green"
        resolve()
    }, 1000))
}

function start() {
    for (let i = 0; i <= 100; i++) {
        bars.push(Math.floor(Math.random() * 500))
    }

    for (let i = 0; i < 20; i++) {
        const div = document.createElement('div');
        div.className = 'bar';
        div.style.height = `${bars[i]}px`;
        barContainer.appendChild(div);
        divs.push(div);
    }
}
start()

newArrayBtn.addEventListener("click", () => {
    barContainer.innerHTML = ''
    bars = [];
    start()
})

bubbleSort.addEventListener('click', async () => {
})