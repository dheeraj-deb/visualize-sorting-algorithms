const barContainer = document.getElementById('bar_container');
const newArrayBtn = document.getElementById('new_array');
const bubbleSort = document.getElementById('bubble');
const selectionSort = document.getElementById('selection');
const quickSort = document.getElementById('quick');

let bars = new Array();

function swap(el1, el2) {
    return new Promise(resolve => setTimeout(() => {
        const style1 = window.getComputedStyle(el1);
        const style2 = window.getComputedStyle(el2);

        const height1 = style1.getPropertyValue("height");
        const height2 = style2.getPropertyValue("height");

        el1.style.height = height2;
        el2.style.height = height1;

        el1.style.background = "red"
        el2.style.background = "red"
        resolve()
    }, 20))
}

function start() {
    for (let i = 0; i <= 100; i++) {
        bars.push(Math.floor(Math.random() * 200))
    }

    for (let i = 0; i < bars.length; i++) {
        const div = document.createElement('div');
        div.className = 'bar';
        div.style.height = `${bars[i]}px`;
        barContainer.appendChild(div);
    }
}

newArrayBtn.addEventListener("click", () => {
    barContainer.innerHTML = ''
    bars = [];
    start()
})

// bubble sort
bubbleSort.addEventListener('click', async () => {
    let nodes = barContainer.childNodes;
    let i, j;
    for (i = 0; i < nodes.length - 1; i++) {
        for (j = 1; j < nodes.length - i - 1; j++) {
            if (parseInt(nodes[j].style.height) > parseInt(nodes[j + 1].style.height)) {
                nodes[j].style.background = "black";
                nodes[j + 1].style.background = "black";
                await swap(nodes[j], nodes[j + 1])
                // nodes[j + 1].style.background = "green";
            } else {
                nodes[j].style.background = "red";
                nodes[j + 1].style.background = "red";
            }
        }
    }
})

// selection sort
selectionSort.addEventListener('click', async () => {
    let nodes = barContainer.childNodes;
    let i, j;
    for (i = 1; i < nodes.length; i++) {
        for (j = i; j < nodes.length; j++) {
            if (parseInt(nodes[i].style.height) > parseInt(nodes[j].style.height)) {
                nodes[i].style.background = "black";
                nodes[j].style.background = "black";
                await swap(nodes[i], nodes[j])
                // nodes[j + 1].style.background = "green";
            } else {
                nodes[i].style.background = "red";
                nodes[j].style.background = "red";
            }
        }
    }
})



start()