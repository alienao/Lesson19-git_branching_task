function recMinPosNumb(arr, min = Infinity) {
    if (arr.length === 0) {
      return min === Infinity ? -1 : min;
    }
    const [first, ...rest] = arr;
    if (first < min && first >= 0) {
      min = first;
    }
    return recMinPosNumb(rest, min);
  }
  console.log(recMinPosNumb(negNumb));