# DS_Algo
#100 days of code. day #1

This is my journey as a recent bootcamp grad, who is interning @ABAEngine working with the dev team @ Marsella &Co. LCC.   I am currently learning bubble sort algorithms. 

 

Explanation: 

 

Compare adjacent items in a list of an array  [5, 1, 4, 2, 8] 

Swap said items that are out of order( in this case when a > b) 

Repeat  first two steps until we reach the end of the array 

These comparisons are achieved by  repeatedly swapping adjacent elements if they are in the wrong order. 

 

Example: 

First Pass: 

(51428) -> (15428), Here, the algorithm compares the first two elements, and swaps since  5 > 1. 

(15428) -> (14528), Swap since 5 > 4 

(14528) -> (14258), Swap since 5 > 2 

(14258) -> (14258), Since 5 < 8  and these elements are already in order, then there is no need to swap them.   

Second Pass: 

(14258) -> (14258) 

(14258) -> (12458), Swap since 4 > 2 

(12458) -> (12458) 

(12458) -> (12458) 

Third Pass:   

The array is sorted, but the algorithm does not know if it is completed, and needs one more Whole pass, without any swaps to know that it is completely sorted.  Although this is a very inefficient way of sorting, it is the most basic of sort algorithms.   

 

Here is my explanation in JavaScript.   

 

// Bubble sort algorithm 

// create a bubbleSort function 

function bubbleSort(arr) { 

let i, j; 

let len = arr.length; 

 
 

let isSwapped = false; 

 
 

for (i = 0; i < len; i++) { 

isSwapped = false; 

 
 

for (j = 0; j < len; j++) { 

// Last i elements are already in place 

 
 

if (arr[j] > arr[j + 1]) { 

// If the condition is true then swap them 

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

 
 

let arr = [5, 1, 4, 2, 8]; 

// calling the bubbleSort function 

bubbleSort(arr); 
