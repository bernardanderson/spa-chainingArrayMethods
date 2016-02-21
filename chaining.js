var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

console.log(integers
  .sort(
    function(first, second) {
      return second - first;
    })
  .filter(
    function(element, index, array ){
      if (element < 20) {
      return element;
      }
    }
  )
);