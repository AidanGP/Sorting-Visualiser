// Algorithms

const bubble_sort = () => {
    let comparison_idxs = []

    let arr_len = array.length;
    for (let i = 0; i < arr_len; i++) {
        swapped = false;
        for (let j = 0; j < arr_len - 1 - i; j++) {

            if (array[j] > array[j + 1]) {
                comparison_idxs.push([j, j + 1, true]);
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;

                swapped = true;
            } else {
                comparison_idxs.push([j, j + 1, false]);
            }
        }
        comparison_idxs.push([arr_len - 1 - i]);
        if (swapped === false) {
            break
        }
    }
    animate_sort(comparison_idxs);
}


const insertion_sort = () => {

    let comparison_idxs = []

    let i = 1;
    while (i < array.length) {
        j = i;
        while (j >= 0 && array[j - 1] > array[j]) {
            comparison_idxs.push([j, j - 1, true]);
            let temp = array[j];
            array[j] = array[j - 1];
            array[j - 1] = temp;
            j -= 1;
        }
        i += 1;
    }
    animate_sort(comparison_idxs);
}

const selection_sort = () => {
    let comparison_idxs = [];

    for (let i = 0; i < array.length - 1; i++) {
        jMin = i;
        for (let j = i + 1; j < array.length; j++) {
            comparison_idxs.push([j, jMin, false]);
            if (array[j] < array[jMin]) {

                jMin = j;
            }
        }
        if (jMin != i) {
            comparison_idxs.push([i, jMin, true]);
            let temp = array[i];
            array[i] = array[jMin];
            array[jMin] = temp;

        }
        comparison_idxs.push([i]);
    }
    animate_sort(comparison_idxs);
}