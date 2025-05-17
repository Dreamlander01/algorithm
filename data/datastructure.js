// Function to calculate the dot product of two vectors
function dotProduct(v1, v2) {
  // Ensure both vectors have the same length
  if (v1.length !== v2.length) {
    throw new Error("Vectors must be of the same length");
  }

  let product = 0;

  // Calculate the dot product by summing the product of corresponding elements
  for (let i = 0; i < v1.length; i++) {
    product += v1[i] * v2[i];
  }

  return product;
}

// Function to check if two vectors are orthogonal (dot product = 0)
function checkOrthogonal(v1, v2) {
  if (dotProduct(v1, v2) === 0) {
    return true; // Vectors are orthogonal
  } else {
    return false; // Vectors are not orthogonal
  }
}

// Example usage:
const v1 = [1, 2, 3];
const v2 = [-3, 2, 1];

console.log("Dot product of v1 and v2:", dotProduct(v1, v2));
console.log("Are the vectors orthogonal?", checkOrthogonal(v1, v2));

// Example for orthogonal vectors:
const v3 = [1, 1];
const v4 = [-1, 1];
console.log("Are v3 and v4 orthogonal?", checkOrthogonal(v3, v4));
