function push(arr, item) {
    arr[arr.length] = item;
    return arr.length;
  }
  
  test('array push', () => {
    const arr = ['a', 'b', 'c'];
    const newLength = push(arr, 'd');
    expect(arr).toEqual(['a', 'b', 'c', 'd']);
    expect(newLength).toBe(4);
  });

  function pop(arr) {
    const last = arr[arr.length - 1];
    arr.length = arr.length - 1;
    return last;
  }
  
  test('array pop', () => {
    const arr = ["a", "b", "c"];
    expect(pop(arr)).toBe("c");
    expect(arr.length).toBe(2);
    expect(arr[1]).toBe("b");
  });
  
  function unshift(arr, item) {
    for (let i = arr.length; i > 0; i--) {
      arr[i] = arr[i - 1];
    }
    arr[0] = item;
    return arr.length;
  }
  
  `['a', 'b', 'c'], 'd'` | `4` | `['d', 'a', 'b', 'c']`;
  
  test('array unshift', () => {
    const arr = ['a', 'b', 'c'];
    const newLength = unshift(arr, 'd');
    expect(arr).toEqual(['d', 'a', 'b', 'c']);
    expect(newLength).toBe(4);
  });


  function shift(arr) {
    const firstItem = arr[0];
    for(let i = 1; i < arr.length; i++) {
        arr[i - 1] = arr[i];
    }
    arr.length = arr.length - 1;
    return firstItem;
}

it('array shift', () => {
    const arr = ['a', 'b', 'c'];
    expect(shift(arr)).toBe('a');
    expect(arr.length).toBe(2);
    expect(arr[0]).toBe('b');
    
  });