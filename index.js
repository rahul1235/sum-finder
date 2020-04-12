function sumArrayIndex(numbers, sum) {
    if (numbers.length < 2) {
      return false;
    }
    const result = [];
    const hash = {};
    for (let i = 0; i < numbers.length; i += 1) {
      const data = sum - numbers[i];
      if (hash[data] !== undefined) {
        result.push([i, hash[data]]);
      } else {
        hash[numbers[i]] = i;
      }
    }
    return !(result.length === 0);
}

console.log(sumArrayIndex([8, 8, 4, 45, 6, 10], 14));
