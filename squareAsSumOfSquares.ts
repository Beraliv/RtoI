/**
 * Given N a function returns an array of numbers [N_1, ..., N_m]
 * where N_1 * N_1 + ... + N_m * N_m === N * N
 * 
 * If there is no such array of numbers, it returns null
 */
export const squareAsSumOfSquares = (n: number): number[] | null => {
  const squareAsSumOfSquaresWithIndex = (rest: number, index: number, currentResult = []) => {
    if (index < 0) {
      return null;
    }

    if (index * index > rest) {
      return squareAsSumOfSquaresWithIndex(rest, index - 1, currentResult);
    }


    if (index * index === rest) {
      return [index, ...currentResult];
    }

    // index * index < rest

    const localAnswer = squareAsSumOfSquaresWithIndex(rest - index * index, index - 1, [index, ...currentResult]);
    if (localAnswer === null) {
      return squareAsSumOfSquaresWithIndex(rest, index - 1, currentResult);         
    }

    return localAnswer;
  }

  return squareAsSumOfSquaresWithIndex(n * n, n - 1);
}