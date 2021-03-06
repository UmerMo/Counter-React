export default function Range(start, count) {
  return Array.apply(0, Array(count)).map(function(element, index) {
    return index + start;
  });
}
