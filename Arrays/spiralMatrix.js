function spiralOrder (matrix) {
  // If there's nothing in the matrix, the code will get caught defining colEnd trying to find the length of something that's undefined, so just take care of this edge case right off the bat
  if (!matrix.length || !matrix[0].length) {
    return [];
  }

  // Define the outside corners of the matrix and the empty array to be printed
  let rowBegin = 0;
  let rowEnd = matrix.length - 1;
  let colBegin = 0;
  let colEnd = matrix[0].length - 1;
  let printedArray = [];

  // While the beginnings of the rows and columns are less than the ends, run the following code to active the spiral. Once the beginnings progress past the ends, we know we've printed the entire spiral and can stop running the code
  while (rowBegin <= rowEnd && colBegin <= colEnd) {
    // Start by iterating over the top row from the beginning of the remaining columns to the end
    for (let i = colBegin; i <= colEnd; i++) {
      // Push the variable onto the printed array (remember, the first value identifies the row, and the second ones identifies the column. We know we're on the top row, but we're iterating over the columns)
      printedArray.push(matrix[rowBegin][i]);
    }
    // Increment the row so we don't see it again
    rowBegin++;

    // Now start iterating over the right hand column and move down the rows
    for (let i = rowBegin; i <= rowEnd; i++) {
      // (Here, we're iterating down the rows, but we know we're in the right hand column)
      printedArray.push(matrix[i][colEnd]);
    }
    // Decrement the column so it moves inwards
    colEnd--;

    // If we haven't printed the last row (this ensures we stay inbounds when we get to the middle of the matrix)
    if (rowBegin <= rowEnd) {
      // Iterate over the bottom row
      for (let i = colEnd; i >= colBegin; i--) {
        printedArray.push(matrix[rowEnd][i]);
      }
    }
    // Move the bottom row up
    rowEnd--;

    // If we haven't printed the last column
    if (colBegin <= colEnd) {
      // Iterate over the left hand column
      for (let i = rowEnd; i >= rowBegin; i--) {
        printedArray.push(matrix[i][colBegin]);
      }
    }
    // Move the left hand column inwards
    colBegin++;
  }

  // Return the final array!
  return printedArray;
};
