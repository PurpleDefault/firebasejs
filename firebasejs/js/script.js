const button = document.querySelector('#click_event');
const items = document.querySelector('.items');
let status;
button.addEventListener("click", showhide)

function showhide() {
  if (status) {
    items.className = "hide";
    return status = false;
  } else {
    items.className = "flex items";
    return status = true;
  }
}
