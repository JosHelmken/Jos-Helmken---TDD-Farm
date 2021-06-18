// crops [ {crop { name , yield } , numCrops } ]
const getYieldForPlant = plant => plant.yield; // gives back a number 
const getYieldForCrop = crop => getYieldForPlant(crop.crop) * crop.numCrops;

const getTotalYield= cropArray => {
  
  const cropYield = cropArray.crops.map( x => getYieldForCrop(x));
  const totalYield = cropYield.reduce((a,b) => a + b);


  return totalYield;
}











module.exports = {
  getYieldForPlant,
  getYieldForCrop,
  getTotalYield
  };