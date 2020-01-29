/**
 * Given N a function returns an array of numbers [N_1, ..., N_m]
 * where N_1 * N_1 + ... + N_m * N_m === N * N
 * 
 * If there is no such array of numbers, it returns null
 */
export const squareAsSumOfSquares = (n: number): number[] | null => {
  const squareAsSumOfSquaresWithIndex = (rest: number, index: number, currentResult = []) => {
    let repeat = true;
    let saved = [];

    while (repeat) {
      repeat = false;

      if (index < 0) {
        if (saved.length > 0) {
          const lastSaved = saved.pop();
          rest = lastSaved.rest;
          currentResult = lastSaved.currentResult;
          index = lastSaved.index;

          repeat = true;
          continue;
        }

        return null;
      }

      if (index * index > rest) {
        index = index - 1;
        repeat = true;
        continue;
      }


      if (index * index === rest) {
        return [index, ...currentResult];
      }

      // index * index < rest

      saved.push({
        rest,
        index: index - 1,
        currentResult,
      });

      rest = rest - index * index;
      currentResult = [index, ...currentResult];
      index = index - 1;
      repeat = true;
    }
  }

  return squareAsSumOfSquaresWithIndex(n * n, n - 1);
}