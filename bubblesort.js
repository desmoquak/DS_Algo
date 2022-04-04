// Bubble sort algorithm
// create a bubbleSort function
function bubbleSort(arr) {
	let i, j;
	let len = arr.length;

	let isSwapped = false;

	for (i = 0; i < len; i++) {
		isSwapped = false;

		for (j = 0; j < len; j++) {
			if (arr[j] > arr[j + 1]) {
				var temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
				isSwapped = true;
			}
		}
		// If no two elements were swapped by the inner loop, then break
		if (!isSwapped) {
			break;
		}
	}
	console.log(arr);
}

let arr = [243, 45, 23, 356, 3, 5346, 35, 5];
// calling the bubbleSort function
bubbleSort(arr);
