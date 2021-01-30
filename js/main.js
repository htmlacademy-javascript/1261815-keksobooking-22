const randomFloat = function (from, to, signsQuantity) {
  if(from > to || from == to) {
    return 'Значение "от" не может быть больше или равнятся значению "до"!';
  }

  if (from < 0 || to < 0 ) {
    return 'Значения не могут быть меньше нуля!';
  }

  let rand = from + Math.random() * (to - from);
  return rand.toFixed(signsQuantity);

}

randomFloat(30, 203, 4);
