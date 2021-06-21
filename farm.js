// crops [ {crop { name , yield } , numCrops } ]
const getYieldForPlant = plant => plant.yield; // gives back a number 
const getYieldForCrop = crop => getYieldForPlant(crop.crop) * crop.numCrops;

const getTotalYield = cropArray => {
  const cropYield = cropArray.crops.map( x => getYieldForCrop(x));
  const totalYield = cropYield.reduce((acum, value) => acum + value);
  return totalYield;
}

const getCostsForCrop = crop => {
  const cost = crop.crop.cost;
  const crops = crop.numCrops;

  return Math.round(cost * crops);

}

const getRevenueForCrop = crop => {
  const price = crop.crop.price;
  const cropYield = getYieldForCrop(crop);

  return Math.round(price * cropYield);
}

const getProfitForCrop = crop => {
  const price = getCostsForCrop(crop);
  const revenue = getRevenueForCrop(crop);

  return Math.round(revenue - price);
}

const getTotalProfit = crops => {
  const cropProfit = crops.map(crop => getProfitForCrop(crop));
  const totalProfit = cropProfit.reduce((acum, value) => acum + value);

  return Math.round(totalProfit);


}






module.exports = {
  getYieldForPlant,
  getYieldForCrop,
  getTotalYield,
  getCostsForCrop,
  getRevenueForCrop,
  getProfitForCrop,
  getTotalProfit
  };