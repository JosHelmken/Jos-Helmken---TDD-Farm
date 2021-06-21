const { 
  getYieldForPlant, 
  getYieldForCrop, 
  getTotalYield, 
  getCostsForCrop, 
  getRevenueForCrop,
  getProfitForCrop,
  getTotalProfit
 } = require("./farm");

// Variables //
const corn = {
  name: 'corn',
  yield: 30,
  cost: 1,
  price: 3,
  factors: {
    sun: {
      low: -50,
      medium: 0,
      high: 50,
    },
  },
};

const pumpkin = {
  name: 'pumpkin',
  yield: 8,
  cost: 3,
  price: 3,
  
  factors: {
    sun: {
      low: -50,
      medium: 0,
      high: 20,
    },
    temp: {
      low: -100,
      medium: 25,
      high: 100,
    },
  },
};

const yieldFactors = {
  sun: 'low',
  temp: 'high'
};



 // --- Testing suite --- //
 
describe("Tests without Environments factors", () => {
  
    test("Get the Total Profit", () => {

      const crops = [
        { crop: corn, numCrops: 5 },
        { crop: pumpkin, numCrops: 2 },
      ];

      const expectedProfit = 487;
      const calculatedProfit = getTotalProfit(crops);
    
    expect(calculatedProfit).toEqual(expectedProfit);
    
    });

    test("Get the Profit for Crop", () => {

    const crops = [
        { crop: corn, numCrops: 5 },
        { crop: pumpkin, numCrops: 2 },
      ];

      const expectedProfit = [445, 42];
      const cropProfit = crops.map(plant => getProfitForCrop(plant));
    
    expect(cropProfit).toEqual(expectedProfit);
    
    });

    test("Get the Revenue for Crop", () => {

    const crops = [
        { crop: corn, numCrops: 5 },
        { crop: pumpkin, numCrops: 2 },
      ];

      const expectedRevenue = [450, 48];
      const cropRevenue = crops.map(plant => getRevenueForCrop(plant));
    
    expect(cropRevenue).toEqual(expectedRevenue);
    
    });

    test("Get the Cost for Crop", () => {

    const crops = [
        { crop: corn, numCrops: 5 },
        { crop: pumpkin, numCrops: 2 },
      ];

      const expectedCost = [5, 6];
      const cropCost = crops.map(plant => getCostsForCrop(plant));
    
    expect(cropCost).toEqual(expectedCost);
    
    });

});

describe("Tests with Environment factors", () => {

  test("Get yield for plant with no environment factors", () => {
          
    expect(getYieldForPlant(pumpkin, yieldFactors)).toBe(8);
    expect(getYieldForPlant(corn, yieldFactors)).toBe(15);
    });

  test("Get yield for crop, simple", () => {
      const corn = {
        name: "corn",
        yield: 3,
      };
      const crop = {
        crop: corn,
        numCrops: 10,
      };

    expect(getYieldForCrop(crop, yieldFactors)).toBe(30);
    });
  
  test("Calculate total yield with multiple crops", () => {
        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 2 },
        ];
        expect(getTotalYield({ crops, yieldFactors })).toBe(166);
    });

  test("Get the Revenue for Crop", () => {

    const crops = [
        { crop: corn, numCrops: 5 },
        { crop: pumpkin, numCrops: 2 },
      ];

      const expectedRevenue = [225, 48];
      const cropRevenue = crops.map(plant => getRevenueForCrop(plant, yieldFactors));
    
    expect(cropRevenue).toEqual(expectedRevenue);
    
    });

    test("Get the Profit for Crop", () => {

    const crops = [
        { crop: corn, numCrops: 5 },
        { crop: pumpkin, numCrops: 4 },
      ];

      const expectedProfit = [220, 84];
      const cropProfit = crops.map(plant => getProfitForCrop(plant, yieldFactors));
    
    expect(cropProfit).toEqual(expectedProfit);
    
    });

    test("Get the Total Profit", () => {

      const crops = [
        { crop: corn, numCrops: 7 },
        { crop: pumpkin, numCrops: 3 },
      ];

      const expectedProfit = 686;
      const calculatedProfit = getTotalProfit(crops, yieldFactors);
    
    expect(calculatedProfit).toEqual(expectedProfit);
    
    });



});

// Original given tests //
describe("Original Tests", () => {

    test("Get yield for plant with no environment factors", () => {
      const corn = {
        name: "corn",
        yield: 30,
      };
    
    expect(getYieldForPlant(corn)).toBe(30);
    });

    test("Get yield for crop, simple", () => {
      const corn = {
        name: "corn",
        yield: 3,
      };
      const input = {
        crop: corn,
        numCrops: 10,
      };

    expect(getYieldForCrop(input)).toBe(30);
    });
    
    test("Calculate total yield with multiple crops", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
        };
        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 2 },
        ];
        expect(getTotalYield({ crops })).toBe(23);
    });

    test("Calculate total yield with 0 amount", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const crops = [{ crop: corn, numCrops: 0 }];
        expect(getTotalYield({ crops })).toBe(0);
    });

});