//Main JS File

let array = []
const DEFAULT_ARR_LENGTH = 50;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const randomIntFromInterval = (min, max) => {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const init_sorting_area = (len) => {

    array = []
    for (let i = 0; i < len; i++) {
        array.push(randomIntFromInterval(3, 250));
    }

    const table = document.getElementById("sorting-area");
    table.innerHTML = "";

    for (let i = 0; i < len; i++) {

        const header = document.createElement("TH");
        table.appendChild(header);

        const column = document.createElement("div");
        column.style.height = (array[i] * 1.5).toString() + 'px';
        column.className = "column";
        column.id = i;

        header.appendChild(column);
    }
};

const toggle_btns = (disabled) => {
    const range = document.getElementById("range");
    const generate = document.getElementById("generate");
    const sort = document.getElementById("navbarDropdownMenuLink");

    if (disabled) {
        range.disabled = true;
        generate.classList.add("disabled");
        sort.classList.add("disabled");
    } else {
        range.disabled = false;
        generate.classList.remove("disabled");
        sort.classList.remove("disabled");
    }

}

async function animate_sort(comparison_idxs) {
    toggle_btns(disabled = true);
    const array_len = array.length;
    for (let i = 0; i < comparison_idxs.length; i++) {
        const to_animate = comparison_idxs[i];
        if (to_animate.length > 1) {
            [idx1, idx2, swapping] = to_animate;
            c1 = document.getElementById(idx1);
            c2 = document.getElementById(idx2);
            c1.className = "compare";
            c2.className = "compare";

            if (swapping) {
                await sleep(1000 / array_len);
                c1.className = "swap";
                c2.className = "swap";


                let temp = c1.style.height;
                c1.style.height = c2.style.height;
                c2.style.height = temp;

                await sleep(1000 / array_len);
                c1.className = "compare";
                c2.className = "compare";
            }

            await sleep(1000 / array_len);
            c1.className = "column";
            c2.className = "column";
        } else {
            col = document.getElementById(to_animate[0]);
            col.className = "in-place";
        }
    }
    for (let i = 0; i < array_len; i++) {
        document.getElementById(i).className = "done";
    }
    toggle_btns(disabled = false);
}


init_sorting_area(DEFAULT_ARR_LENGTH);