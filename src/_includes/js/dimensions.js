module.exports = function(input) {
  let dimensions = input || "x"
  let [width, height] = dimensions.split("x").map(n => (n ? parseInt(n): null))
  let aspectRatio;

  if(width && !height) height = width
  
  if(!width && !height) {
    aspectRatio = 1
  } else {
    aspectRatio = (width/height)
  }

  return { width, height, aspectRatio }
}