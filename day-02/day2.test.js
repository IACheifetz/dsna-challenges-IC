function map(arr, fn) {
    const mapped = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (!arr.hasOwnProperty(i)) continue;
      const mapping = fn(arr[i], i, arr);
      mapped.push(mapping);
    }
  
    return mapped;
  }

  test('maps an array', () => {
    const arr = [1, 6, 5];
  
    const actual = map(arr, (n) => n ** 2);
  
    expect(actual).toEqual([1, 36, 25]);
  });
  
  test('maps skips holes', () => {
    const arr = [1, , , 5];
  
    const actual = map(arr, (n) => n);
  
    expect(actual).toEqual([1, 5]);
  });