const getYieldForPlant = (plant, factors) => {
  const getPlantFactors = plant.factors;
  const impactValue = [];
  
  if(factors && getPlantFactors) {

    Object.keys(getPlantFactors).forEach(keyword => {
      
      const factorKeyword = factors[keyword];
      const impact = getPlantFactors[keyword][factorKeyword];
      impactValue.push((100 + impact) / 100);
     
    });
    
    const newYield = impactValue.reduce((acum, value) => {    
      return acum * value;
    }, plant.yield);

    return Math.round(newYield);


  } else {
    return plant.yield; 
  }
};


const getYieldForCrop = (crop, factors) => getYieldForPlant(crop.crop, factors) * crop.numCrops;


const getTotalYield = (cropArray, factors) => {
  const cropYield = cropArray.crops.map( crop => getYieldForCrop(crop, factors));
  const totalYield = cropYield.reduce((acum, value) => acum + value);
  return totalYield;
}

const getCostsForCrop = crop => {
  const cost = crop.crop.cost;
  const crops = crop.numCrops;

  return Math.round(cost * crops);

}

const getRevenueForCrop = (crop, factors) => {
  const price = crop.crop.price;
  const cropYield = getYieldForCrop(crop, factors);

  return Math.round(price * cropYield);
}

const getProfitForCrop = (crop, factors) => {
  const price = getCostsForCrop(crop);
  const revenue = getRevenueForCrop(crop, factors);

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