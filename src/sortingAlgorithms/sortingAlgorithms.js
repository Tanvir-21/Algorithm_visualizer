export function getMergeSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
}

function mergeSortHelper(mainArray, startIndex, endIndex, auxiliaryArray, animations, ) {
    if (startIndex === endIndex) return;
    const middleindex = Math.floor((startIndex + endIndex) / 2);
    mergeSortHelper(auxiliaryArray, startIndex, middleindex, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleindex + 1, endIndex, mainArray, animations);
    doMerge(mainArray, startIndex, middleindex, endIndex, auxiliaryArray, animations);
}

function doMerge(mainArray, startIndex, middleindex, endIndex, auxiliaryArray, animations, ) {
    let k = startIndex;
    let i = startIndex;
    let j = middleindex + 1;


    while (i <= middleindex && j <= endIndex) {
        //these are the values that we will compare and we push them once to change their color
        animations.push([i, j]);

        //we push them second time to revert their color
        animations.push([i, j]);
        if (auxiliaryArray[i] <= auxiliaryArray[j]) {
            //now we will overwrite the value index k in the original array with the value at index i in the auxiliary array
            animations.push([k, auxiliaryArray[i]]);
            mainArray[k++] = auxiliaryArray[i++];
        } else {
            //we overwrite the value at index k in the original array with value at index j in the auxiliary array
            animations.push([k, auxiliaryArray[j]]);
            mainArray[k++] = auxiliaryArray[j++];
        }
    }
    while (i <= middleindex) {
        animations.push([i, i]);
        animations.push([i, i]);
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
    }

    while (j <= endIndex) {
        animations.push([j, j]);
        animations.push([j, j]);
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
    }
}