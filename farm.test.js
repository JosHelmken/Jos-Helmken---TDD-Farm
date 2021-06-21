const { 
  getYieldForPlant, 
  getYieldForCrop, 
  getTotalYield, 
  getCostsForCrop, 
  getRevenueForCrop,
  getProfitForCrop,
  getTotalProfit
 } = require("./farm");

describe("getTotalProfit", () => {
  
    test("Get the Total Profit", () => {

      const corn = {
        name: "corn",
        cost: 1,
        price: 3,
        yield: 3,
      };

      const pumpkin = {
        name: "pumpkin",
        cost: 3,
        price: 3,
        yield: 4,
      };

      const crops = [
        { crop: corn, numCrops: 5 },
        { crop: pumpkin, numCrops: 2 },
      ];

      const expectedProfit = 58;
      const calculatedProfit = getTotalProfit(crops);
    
    expect(calculatedProfit).toEqual(expectedProfit);
    
    });
});

describe("getProfitForCrop", () => {
  
    test("Get the Profit for Crop", () => {

      const corn = {
        name: "corn",
        cost: 1,
        price: 3,
        yield: 3,
      };

      const pumpkin = {
        name: "pumpkin",
        cost: 3,
        price: 3,
        yield: 4,
      };

      const crops = [
        { crop: corn, numCrops: 5 },
        { crop: pumpkin, numCrops: 2 },
      ];

      const expectedProfit = [40, 18];
      const cropProfit = crops.map(plant => getProfitForCrop(plant));
    
    expect(cropProfit).toEqual(expectedProfit);
    
    });
});

describe("getRevenueForCrop", () => {
  
    test("Get the Revenue for Crop", () => {

      const corn = {
        name: "corn",
        cost: 1,
        price: 3,
        yield: 3,
      };

      const pumpkin = {
        name: "pumpkin",
        cost: 3,
        price: 3,
        yield: 4,
      };

      const crops = [
        { crop: corn, numCrops: 5 },
        { crop: pumpkin, numCrops: 2 },
      ];

      const expectedRevenue = [45, 24];
      const cropRevenue = crops.map(plant => getRevenueForCrop(plant));
    
    expect(cropRevenue).toEqual(expectedRevenue);
    
    });
});

describe("getCostsForCrop", () => {
  
    test("Get the Cost for Crop", () => {

      const corn = {
        name: "corn",
        cost: 1,
        yield: 3,
      };

      const pumpkin = {
        name: "pumpkin",
        cost: 3,
        yield: 4,
      };

      const crops = [
        { crop: corn, numCrops: 5 },
        { crop: pumpkin, numCrops: 2 },
      ];

      const expectedCost = [5, 6];
      const cropCost = crops.map(plant => getCostsForCrop(plant));
    
    expect(cropCost).toEqual(expectedCost);
    
    });
});

// Original given tests //
describe("getYieldForPlant", () => {
    const corn = {
        name: "corn",
        yield: 30,
    };

    test("Get yield for plant with no environment factors", () => {
        expect(getYieldForPlant(corn)).toBe(30);
    });
});

describe("getYieldForCrop", () => {
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
});

 describe("getTotalYield", () => {
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