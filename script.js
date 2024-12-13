function mincost(arr)
{ 
//write your code here
// return the min cost
	  if (arr.length <= 1) return 0; // No cost if there's 0 or 1 rope

  let totalCost = 0;

  // Continue until only one rope remains
  while (arr.length > 1) {
    // Sort the array to get the two smallest ropes
    arr.sort((a, b) => a - b);

    // Take the two smallest ropes
    const rope1 = arr.shift(); // Remove the smallest element
    const rope2 = arr.shift(); // Remove the second smallest element

    const cost = rope1 + rope2; // Combine the ropes
    totalCost += cost;

    // Add the combined rope back into the array
    arr.push(cost);
  }

  return totalCost;
  
}

module.exports=mincost;
