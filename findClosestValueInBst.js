// Initiate the function with a closest value that can be passed down in recursion, set the default to the rootNode tree.value
function findClosestValueInBst(tree, target, closestVal = tree.value) {
  // If the node being examined doesn't exist, just return the closest value already identified
  if (tree === null) return closestVal;
  // If the current value being examined is closer to the target value that the last identified closest value, reassign the closest value
  if (Math.abs(target - closestVal) > Math.abs(target - tree.value)) {
    closestVal = tree.value;
  }

  // If the target is on the left side of the tree, continue running this function on the left ndoe
  if (target < tree.value) {
    return findClosestValueInBst(tree.left, target, closestVal);
  } else if (target > tree.value) {
    // If the target belogns on the right side of the tree, run this function on the right node
    return findClosestValueInBst(tree.right, target, closestVal);
  } else {
    // If the two numbers are equal, return the closest value
    return closestVal;
  }
}
