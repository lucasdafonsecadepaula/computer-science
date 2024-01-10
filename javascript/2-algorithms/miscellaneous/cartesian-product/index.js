// Cartesian product
// Problem - Given two finite non-empty sets, find their Cartesian Product.
// In mathematics, specifically set theory, the Cartesian product of two sets A and B, denoted AxB,
// is the set of all ordered pairs (a, b) where a is in A and b is in B
// const A = [1, 2]
// const B = [3, 4]
// AxB = [ [1, 3], [1, 4], [2, 3], [2, 4] ]
// const C = [1, 2]
// const D = [3, 4, 5]
// CXD = [ [1, 3], [1, 4], [1, 5], [2, 3], [2, 4], [2, 5] ]

function cartesianProduct(planeA, planeB) {
  const plane = [];
  for (let i = 0; i < planeA.length; i++) {
    for (let j = 0; j < planeB.length; j++) {
      plane.push([planeA[i], planeB[j]]);
    }
  }
  return plane;
}

console.log(cartesianProduct([1, 2], [3, 4]));
