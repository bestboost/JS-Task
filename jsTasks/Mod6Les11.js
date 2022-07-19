// Visualize sort
const pause = (n) => {
    for (let i = 0; i < n * 999_999_999_999; i++);
}

const sort = (arr, compare, swap) => {
    arr = [...arr]
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            const rez = compare(arr[i], arr[j])
            if (rez > 0) {
                console.log('swap', { i, j, arr_i: arr[i], arr_j: arr[j] })
                swap(arr, i, j);
            }
        }
    }
    return arr;
}


const arr = [8, 3, 6, 2, 4, 9, 1];

const getSpan = (n) => `<span style="margin: 10px;">${n}</span>`;

const elementsMarkup = arr.map(getSpan).join('');

console.log(elementsMarkup);

document.body.insertAdjacentHTML("afterbegin", `<div id="sort">${elementsMarkup}</div>`);

const div = document.getElementById("sort");
const elems = div.childNodes;
console.log(elems.forEach(console.log));

const compare = (a, b) => Number(a.textContent) - Number(b.textContent);

const swap = (nodeList, i, j) => {
    const c = nodeList[i].textContent;
    nodeList[i].textContent = nodeList[j].textContent;
    nodeList[j].textContent = c;
}

sort(elems, compare, swap);

console.log(Number(div.childNodes[0].textContent));

