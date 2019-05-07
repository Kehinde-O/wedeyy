export default function abbreviateNumber(number) {
  var SI_SYMBOL = ["", "k", "M", "G", "T", "P", "E"];
  // what tier? (determines SI symbol)
  var tier = (Math.log10(number) / 3) | 0;

  // if zero, we don't need a suffix
  if (tier == 0) return number;

  // get suffix and determine scale
  var suffix = SI_SYMBOL[tier];
  var scale = Math.pow(10, tier * 3);

  // scale the number
  var scaled = number / scale;

  // format number and add suffix
  return scaled.toFixed(1) + suffix;
}

export function randomNumber(min, max) {
  var random = Math.floor(Math.random() * (+max - +min)) + +min;
  return random;
}
