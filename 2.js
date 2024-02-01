/************** Exercise 2 ****************/

function hilsen() {
  /* Bruges til at finde det aktuelle tidspunkt */

  let time = new Date().getHours();

  /* hvis time er større end eller lig med 5, men mindre end 10 udskrives "Godmorgen" */
  if (time >= 5 && time < 10) {
    console.log("Godmorgen");

    /* hvis time er større end eller lig med 10, men mindre end 18 udskrives "Goddag" */
  } else if (time >= 10 && time < 18) {
    console.log("Goddag");

    /* hvis time er større end eller lig med 18, men mindre end 24 udskrives "Godaften" */
  } else if (time >= 18 && time < 24) {
    console.log("Godaften");

    /* hvis tiden ikke passer ind, så udskrives "Godnat" */
  } else {
    console.log("Godnat");
  }
}

hilsen();
