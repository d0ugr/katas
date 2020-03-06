const blocksAway = function(directions) {

  // A turn is 90 degrees, and is expressed as radians for use with the Math functions:
  const turnRadians = 90 * Math.PI / 180;

  // Set the initial heading according to the first turn:
  //    Always assuming the car is heading north at the southwest corner of the grid
  //    doesn't work since apparently (according to the expected output)
  //    a left turn means head north, while a right turn means head east.
  //    Therefore, right should change north to east (0 to 90 degrees),
  //    and left should change east to north (90 to 0 degrees).
  let heading = (directions[0] === "right" ? 0 : turnRadians);
  let result = {
    east:  0,
    north: 0
  };

  for (let i = 0; i < directions.length; i += 2) {
    heading += (directions[i] === "right" ? turnRadians : -turnRadians);
    result.east  += Math.round(Math.sin(heading)) * directions[i + 1];
    result.north += Math.round(Math.cos(heading)) * directions[i + 1];
  }

  return result;

};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));
