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

}

const quick_sort = () => {

}