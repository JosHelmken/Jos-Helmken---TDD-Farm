const getYieldForPlant = plant => plant.yield; // gives back a number
const getYieldForCrop = crop => getYieldForPlant(crop.crop) * crop.numCrops; 

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

        const arryA = { crops };

 const x = arryA.crops.map( x => getYieldForCrop(x));
 const y = x.reduce((a,b) => a + b);





console.log(arryA);

console.log('#####################################################################');

console.log(x);
console.log(y)





