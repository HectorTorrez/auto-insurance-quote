export const getBrandIncrement = (brand) => {
  let increment

  switch (brand) {
    case '1':
      increment = 1.30;
      break
    case '2':
      increment = 1.15;
      break
    case '3':
      increment = 1.05;
      break
    default:
      break
  }

  return increment
}