const purchasePlus =
  document.querySelector<HTMLButtonElement>('.purchase-plus')!;
const purchaseMinus =
  document.querySelector<HTMLButtonElement>('.purchase-minus')!;
const qtyElement = document.querySelector<HTMLButtonElement>('.purchase-qty')!;

purchaseMinus.addEventListener('click', () => handleQty('-'));
purchasePlus.addEventListener('click', () => handleQty('+'));

function handleQty(operation: '-' | '+') {
  let currentQty = +qtyElement.innerText;
  currentQty += operation === '-' ? -1 : +1;
  if (currentQty === 0) return;
  qtyElement.innerText = currentQty.toString();
}
