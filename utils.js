/* document.getElementById("login_form").onsubmit = function () {
  event.preventDefault();
  // animation
  document.getElementById("login_process_state").classList.remove("hidden");
  document.getElementById("login_process_state").classList.add("animate-pulse");

  document.getElementById("login_default_state").classList.add("hidden");
};

let current_count = parseInt(document.getElementById("item_count").value);
let subtotal = parseInt(5);

function plus() {
  document.getElementById("item_count").value = ++current_count;
  document.getElementById("subtotal").innerHTML = ` $${
    subtotal * document.getElementById("item_count").value
  }`;
}

function minus() {
  if (current_count < 2) {
    current_count = 1;
    document.getElementById("item_count").value = 1;
    document.getElementById("subtotal").innerHTML = ` $${
      subtotal * document.getElementById("item_count").value
    }`;
  } else {
    document.getElementById("item_count").value = --current_count;
    document.getElementById("subtotal").innerHTML = ` $${
      subtotal * document.getElementById("item_count").value
    }`;
  }
}
 */
// Function to fill the select element with the current year sorted to 1900
/*   function populateYears() {
    var n = new Date().getFullYear();
    var select = document.getElementById("selectYear");
    for (var i = n; i >= 1900; i--) select.options.add(new Option(i, i));
  }
  window.onload = populateYears; */

