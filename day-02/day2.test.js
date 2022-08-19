function map(arr, fn) {
    const mapped = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (!arr.hasOwnProperty(i)) continue;
      const mapping = fn(arr[i], i, arr);
      mapped.push(mapping);
    }
  
    return mapped;
  }

  function filter(arr, predicate) {
    const filtered = [];
  
    for (let i = 0; i < arr.length; i++) {
      const index = arr[i];
      if (predicate(index, i, arr)) filtered.push(index);
    }
  
    return filtered;
  }

  const addPunctuation = (punctuation) => (phrase) => phrase + punctuation;

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

  test('filter an array', () => {
    expect(filter([2, 6, 5], (n) => n % 2 === 0)).toEqual([2, 6]);
  });

test('addPunctuation', () => {
  const addExcitement = addPunctuation('!!!');
  expect(addExcitement('pikachu')).toBe('pikachu!!!');
  expect(addExcitement('alchemy')).toBe('alchemy!!!');})