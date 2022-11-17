let count = 0;

let price = 0;

let warning1 = "Firstly Add Conatiner!";

function holder() {
  var ele = document.getElementsByName("besteling");

  for (i = 0; i < ele.length; i++) {
    let imgid = ele[i].id + "img";

    let toggleimg = document.getElementById(imgid);

    if (ele[i].checked) {
      document.getElementById("warning1").innerHTML = "";

      if (ele[i].id == "potje") {
        if (price == 0) {
          price += 0.45;
        } else {
          price += 0.2;
        }
      }

      if (ele[i].id == "hoorntje") {
        if (price == 0) {
          price += 0.25;
        } else {
          price -= 0.2;
        }
      }
    }
  }

  for (i = 0; i < ele.length; i++) {
    let imgid = ele[i].id + "img";

    let toggleimg = document.getElementById(imgid);

    if (ele[i].checked) {
      document.getElementById("namee3").innerHTML =
        "container type: " + ele[i].value;

      toggleimg.style.visibility = "visible";
    } else {
      toggleimg.style.visibility = "hidden";
    }
  }

  totalPrice(price);
}

// function k{

// handleclickmin();

// }

function tt(par) {}

function handleclickplus() {
  let topimg = document.getElementById("top1");
  let topimg1 = document.getElementById("top2");
  let topimg2 = document.getElementById("top3");
  let topimg3 = document.getElementById("top4");
  let topimg4 = document.getElementById("top5");

  if (price == 0) {
    document.getElementById("warning1").innerHTML = warning1;
  } else {
    if (topimg.style.visibility == "hidden" && count < 5) {
      topimg.style.visibility = "visible";
      count++;
      price += 1.5;
    } else if (topimg1.style.visibility == "hidden" && count < 5) {
      topimg1.style.visibility = "visible";
      count++;
      price += 1.5;
    } else if (topimg2.style.visibility == "hidden" && count < 5) {
      topimg2.style.visibility = "visible";
      count++;
      price += 1.5;
    } else if (topimg3.style.visibility == "hidden" && count < 5) {
      topimg3.style.visibility = "visible";
      count++;
      price += 1.5;
    } else if (topimg4.style.visibility == "hidden" && count < 5) {
      topimg4.style.visibility = "visible";
      count++;
      price += 1.5;
    }
  }

  total(count);

  totalPrice(price);
}

function handleclickmin() {
  let topimg = document.getElementById("top1");
  let topimg1 = document.getElementById("top2");
  let topimg2 = document.getElementById("top3");
  let topimg3 = document.getElementById("top4");
  let topimg4 = document.getElementById("top5");

  if (topimg4.style.visibility == "visible") {
    topimg4.style.visibility = "hidden";
    count--;
    price -= 1.5;
  } else if (topimg3.style.visibility == "visible") {
    topimg3.style.visibility = "hidden";
    count--;
    price -= 1.5;
  } else if (topimg2.style.visibility == "visible") {
    topimg2.style.visibility = "hidden";
    count--;
    price -= 1.5;
  } else if (topimg1.style.visibility == "visible") {
    topimg1.style.visibility = "hidden";
    count--;
    price -= 1.5;
  } else if (topimg.style.visibility == "visible") {
    topimg.style.visibility = "hidden";
    count--;
    price -= 1.5;
  }

  total(count);

  totalPrice(price);
}

function handleclickplus2() {
  let topimgg = document.getElementById("topp1");
  let topimgg1 = document.getElementById("topp2");
  let topimgg2 = document.getElementById("topp3");
  let topimgg3 = document.getElementById("topp4");
  let topimgg4 = document.getElementById("topp5");

  if (price == 0) {
    document.getElementById("warning1").innerHTML = warning1;
  } else {
    if (topimgg.style.visibility == "hidden" && count < 5) {
      topimgg.style.visibility = "visible";
      count++;
      price += 1.75;
    } else if (topimgg1.style.visibility == "hidden" && count < 5) {
      topimgg1.style.visibility = "visible";
      count++;
      price += 1.75;
    } else if (topimgg2.style.visibility == "hidden" && count < 5) {
      topimgg2.style.visibility = "visible";
      count++;
      price += 1.75;
    } else if (topimgg3.style.visibility == "hidden" && count < 5) {
      topimgg3.style.visibility = "visible";
      count++;
      price += 1.75;
    } else if (topimgg4.style.visibility == "hidden" && count < 5) {
      topimgg4.style.visibility = "visible";
      count++;
      price += 1.75;
    }
  }

  total(count);
  totalPrice(price);
}

function handleclickmin2() {
  let topimgg = document.getElementById("topp1");
  let topimgg1 = document.getElementById("topp2");
  let topimgg2 = document.getElementById("topp3");
  let topimgg3 = document.getElementById("topp4");
  let topimgg4 = document.getElementById("topp5");

  if (topimgg4.style.visibility == "visible") {
    topimgg4.style.visibility = "hidden";
    count--;
    price -= 1.75;
  } else if (topimgg3.style.visibility == "visible") {
    topimgg3.style.visibility = "hidden";
    count--;
    price -= 1.75;
  } else if (topimgg2.style.visibility == "visible") {
    topimgg2.style.visibility = "hidden";
    count--;
    price -= 1.75;
  } else if (topimgg1.style.visibility == "visible") {
    topimgg1.style.visibility = "hidden";
    count--;
    price -= 1.75;
  } else if (topimgg.style.visibility == "visible") {
    topimgg.style.visibility = "hidden";
    count--;
    price -= 1.75;
  }

  total(count);
  totalPrice(price);
}

function handleclickplus3() {
  let topimggg = document.getElementById("toppp1");
  let topimggg1 = document.getElementById("toppp2");
  let topimggg2 = document.getElementById("toppp3");
  let topimggg3 = document.getElementById("toppp4");
  let topimggg4 = document.getElementById("toppp5");

  if (price == 0) {
    document.getElementById("warning1").innerHTML = warning1;
  } else {
    if (topimggg.style.visibility == "hidden" && count < 5) {
      topimggg.style.visibility = "visible";
      count++;
      price += 1.25;
    } else if (topimggg1.style.visibility == "hidden" && count < 5) {
      topimggg1.style.visibility = "visible";
      count++;
      price += 1.25;
    } else if (topimggg2.style.visibility == "hidden" && count < 5) {
      topimggg2.style.visibility = "visible";
      count++;
      price += 1.25;
    } else if (topimggg3.style.visibility == "hidden" && count < 5) {
      topimggg3.style.visibility = "visible";
      count++;
      price += 1.25;
    } else if (topimggg4.style.visibility == "hidden" && count < 5) {
      topimggg4.style.visibility = "visible";
      count++;
      price += 1.25;
    }
  }

  totalPrice(price);
  total(count);
}

function handleclickmin3() {
  let topimggg = document.getElementById("toppp1");
  let topimggg1 = document.getElementById("toppp2");
  let topimggg2 = document.getElementById("toppp3");
  let topimggg3 = document.getElementById("toppp4");
  let topimggg4 = document.getElementById("toppp5");

  if (topimggg4.style.visibility == "visible") {
    topimggg4.style.visibility = "hidden";
    count--;
    price -= 1.25;
  } else if (topimggg3.style.visibility == "visible") {
    topimggg3.style.visibility = "hidden";
    count--;
    price -= 1.25;
  } else if (topimggg2.style.visibility == "visible") {
    topimggg2.style.visibility = "hidden";
    count--;
    price -= 1.25;
  } else if (topimggg1.style.visibility == "visible") {
    topimggg1.style.visibility = "hidden";
    count--;
    price -= 1.25;
  } else if (topimggg.style.visibility == "visible") {
    topimggg.style.visibility = "hidden";
    count--;
    price -= 1.25;
  }

  total(count);
  totalPrice(price);
}

function total(x) {
  document.getElementById("aantal").innerHTML = "number of chosen balls: " + x;

  if (x == 5) {
    document.getElementById("warning").innerHTML =
      "you can choose only 5 balls!";
  } else {
    document.getElementById("warning").innerHTML =
      "selectable number of balls: " + (5 - x);
  }
}

function totalPrice(p) {
  document.getElementById("price").innerHTML =
    "Total Price: " + Math.round(p * 1000) / 1000 + " €";
}

function handleclick() {
  let vAantal = document.getElementById("vanille-aantalkiezer").value;
  let aAantal = document.getElementById("aardbei-aantalkiezer").value;
  let cAantal = document.getElementById("chocolade-aantalkiezer").value;

  document.getElementById("namee2").value =
    document.getElementById("namee").value;
  console.log(document.getElementById("namee2").value);
  aantalbollen = document.getElementById("namee2").value;
  document.getElementById("namee2").innerHTML = aantalbollen;
  console.log(aantalbollen + "bollen");

  document.getElementById("weergever").value =
    document.getElementById("aantalkiezer").value;
  console.log(document.getElementById("weergever").value);
  aantalbollen = document.getElementById("weergever").value;
  document.getElementById("weergever").innerHTML = aantalbollen + " bollen";
  console.log(aantalbollen);

  let topimg = document.getElementById("top1");
  let topimg1 = document.getElementById("top2");
  let topimg2 = document.getElementById("top3");
  let topimg3 = document.getElementById("top4");
  let topimg4 = document.getElementById("top5");

  let topimgg = document.getElementById("topp1");
  let topimgg1 = document.getElementById("topp2");
  let topimgg2 = document.getElementById("topp3");
  let topimgg3 = document.getElementById("topp4");
  let topimgg4 = document.getElementById("topp5");

  let topimggg = document.getElementById("toppp1");
  let topimggg1 = document.getElementById("toppp2");
  let topimggg2 = document.getElementById("toppp3");
  let topimggg3 = document.getElementById("toppp4");
  let topimggg4 = document.getElementById("toppp5");
}
