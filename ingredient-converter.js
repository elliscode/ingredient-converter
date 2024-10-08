const units = { // unit: ml
  'cup': { type: 'mL', value: 236.588, displayName: 'cup' },
  'quart|qt': { type: 'mL', value: 946.353, displayName: 'quart'},
  'tsp|teaspoon|tspoon': { type: 'mL', value: 4.92892, displayName: 'tsp' },
  'TBSP|tablespoon|tbspoon': { type: 'mL', value: 14.78676, displayName: 'TBSP' },
  'mL|milliliter|mililiter|milileter': { type: 'mL', value: 1, displayName: 'mL' },
  'L|liter|leter': { type: 'mL', value: 1000, displayName: 'L' },
  'gal|gallon': { type: 'mL', value: 3785.41, displayName: 'gal' },
  'fl oz|fl[\\.\\s]*oz|fluid oz|fluid ounce|fl[\\.\\s]*ounce': { type: 'mL', value: 29.5735, displayName: 'fl oz' },
  'oz': { type: 'g', value: 28.3495, displayName: 'oz' },
  'lb|pound': { type: 'g', value: 453.592, displayName: 'lb' },
  'kg|kilogram': { type: 'g', value: 1000, displayName: 'kg' },
  'mg|milligram|miligram': { type: 'g', value: 0.001, displayName: 'mg' },
  'g|gram': { type: 'g', value: 1, displayName: 'g' }
};
const foodSpecificUnits = {
  'Butter': { 'stick|stk': { type: 'g', value: 113.398, displayName: 'stick' } }
}
const densityValues = { // g / ml
  'Agave syrup': { displayName: 'Agave syrup', density: 336 / 236.588 },
  'all[\\-\\s]purpose flour|flour|All-Purpose Flour': { displayName: 'All-Purpose Flour', density: 120 / 236.588 },
  'Almond Flour': { displayName: 'Almond Flour', density: 96 / 236.588 },
  'Apple juice concentrate': { displayName: 'Apple juice concentrate', density: 280 / 236.588 },
  'apple': { displayName: 'Apples', density: 113 / 236.588 },
  'Applesauce': { displayName: 'Applesauce', density: 255 / 236.588 },
  'baker[\']*s special sugar|baker[\']*s sugar|superfine sugar|castor sugar': { displayName: 'Castor Sugar', density: 190 / 236.588 },
  'Baking powder': { displayName: 'Baking powder', density: 192 / 236.588 },
  'Baking soda': { displayName: 'Baking soda', density: 288 / 236.588 },
  'Banana': { displayName: 'Bananas', density: 227 / 236.588 },
  'Bread crumbs': { displayName: 'Bread crumbs', density: 112 / 236.588 },
  'panko|panko Bread crumbs': { displayName: 'panko bread crumbs', density: 50 / 236.588 },
  'Bread Flour': { displayName: 'Bread Flour', density: 120 / 236.588 },
  'Brown rice flour': { displayName: 'Brown rice flour', density: 128 / 236.588 },
  'Brown sugar': { displayName: 'Brown sugar', density: 213 / 236.588 },
  'Butter': { displayName: 'Butter', density: 226 / 236.588 },
  'Buttermilk': { displayName: 'Buttermilk', density: 227 / 236.588 },
  'Caramel': { displayName: 'Caramel', density: 284 / 236.588 },
  'feta|feta Cheese': { displayName: 'Feta Cheese', density: 114 / 236.588 },
  'Parmesan|Parmesan cheese': { displayName: 'Parmesan', density: 100 / 236.588 },
  'Ricotta|Ricotta cheese': { displayName: 'Ricotta', density: 227 / 236.588 },
  'cheese': { displayName: 'cheese', density: 113 / 236.588 },
  'Chocolate Chips': { displayName: 'Chocolate Chips', density: 170 / 236.588 },
  'Chocolate Chunks': { displayName: 'Chocolate Chunks', density: 170 / 236.588 },
  'Chocolate': { displayName: 'Chocolate', density: 170 / 236.588 },
  'Cocoa': { displayName: 'Cocoa', density: 84 / 236.588 },
  'toasted Coconut': { displayName: 'toasted Coconut', density: 85 / 236.588 },
  'desiccated Coconut': { displayName: 'desiccated Coconut', density: 85 / 236.588 },
  'Coconut flakes': { displayName: 'Coconut flakes', density: 60 / 236.588 },
  'shredded Coconut': { displayName: 'shredded Coconut', density: 53 / 236.588 },
  'Coconut cream': { displayName: 'Coconut cream', density: 284 / 236.588 },
  'Coconut Flour': { displayName: 'Coconut Flour', density: 128 / 236.588 },
  'Coconut milk; canned, well shaken': { displayName: 'Coconut milk; canned, well shaken', density: 241 / 236.588 },
  'Coconut milk, evaporated': { displayName: 'Coconut milk, evaporated', density: 242 / 236.588 },
  'Coconut Milk Powder': { displayName: 'Coconut Milk Powder', density: 114 / 236.588 },
  'Coconut oil': { displayName: 'Coconut oil', density: 226 / 236.588 },
  'Coconut sugar': { displayName: 'Coconut sugar', density: 154 / 236.588 },
  'powdered sugar|Confectioner[\'s]* sugar': { displayName: 'Powdered Sugar', density: 113.5 / 236.588 },
  'popcorn|popped corn|corn, popped': { displayName: 'popcorn', density: 5.25 / 236.588 },
  'Corn syrup': { displayName: 'Corn syrup', density: 312 / 236.588 },
  'Cornmeal': { displayName: 'Cornmeal', density: 156 / 236.588 },
  'corn starch|Cornstarch': { displayName: 'Cornstarch', density: 112 / 236.588 },
  'corn': { displayName: 'corn', density: 152 / 236.588 },
  'heavy cream': { displayName: 'Heavy Cream', density: 227 / 236.588 },
  'light cream': { displayName: 'Light Cream', density: 227 / 236.588 },
  'cream': { displayName: 'Cream', density: 227 / 236.588 },
  'half and half|half[\\s&]*half': { displayName: 'Half & Half', density: 227 / 236.588 },
  'Cream cheese': { displayName: 'Cream cheese', density: 227 / 236.588 },
  'Durum Flour': { displayName: 'Durum Flour', density: 124 / 236.588 },
  'Egg': { displayName: 'Eggs', density: 232.8 / 236.588 },
  'Egg white': { displayName: 'Egg whites', density: 223.2 / 236.588 },
  'Egg white powder': { displayName: 'Egg White Powder', density: 176 / 236.588 },
  'Egg yolk': { displayName: 'Egg yolks', density: 273.6 / 236.588 },
  'Espresso Powder': { displayName: 'Espresso Powder', density: 112 / 236.588 },
  'Everything Bagel Seasoning|Everything Bagel Topping': { displayName: 'Everything Bagel Topping', density: 140 / 236.588 },
  'Flax meal': { displayName: 'Flax meal', density: 100 / 236.588 },
  'Flaxseed': { displayName: 'Flaxseed', density: 140 / 236.588 },
  'Ghee': { displayName: 'Ghee', density: 176 / 236.588 },
  'rice flour': { displayName: 'rice flour', density: 120 / 236.588 },
  'Honey': { displayName: 'Honey', density: 336 / 236.588 },
  'Jam': { displayName: 'Jam', density: 340 / 236.588 },
  'Lard': { displayName: 'Lard', density: 226 / 236.588 },
  'Lemon juice': { displayName: 'Lemon juice', density: 224 / 236.588 },
  'Malt syrup': { displayName: 'Malt syrup', density: 344 / 236.588 },
  'Malted Milk Powder': { displayName: 'Malted Milk Powder', density: 140 / 236.588 },
  'Malted Wheat Flakes': { displayName: 'Malted Wheat Flakes', density: 128 / 236.588 },
  'Maple sugar': { displayName: 'Maple sugar', density: 156 / 236.588 },
  'Maple syrup': { displayName: 'Maple syrup', density: 312 / 236.588 },
  'Marshmallow spread': { displayName: 'Marshmallow spread', density: 123 / 236.588 },
  'Marshmallow Fluff': { displayName: 'Marshmallow Fluff', density: 128 / 236.588 },
  'Marshmallow': { displayName: 'Marshmallow', density: 43 / 236.588 },
  'Marzipan': { displayName: 'Marzipan', density: 290 / 236.588 },
  'Mascarpone cheese': { displayName: 'Mascarpone cheese', density: 227 / 236.588 },
  'Mashed potatoes': { displayName: 'Mashed potatoes', density: 213 / 236.588 },
  'Mashed sweet potatoes': { displayName: 'Mashed sweet potatoes', density: 240 / 236.588 },
  'Mayonnaise': { displayName: 'Mayonnaise', density: 226 / 236.588 },
  'Medium Rye Flour': { displayName: 'Medium Rye Flour', density: 106 / 236.588 },
  'Meringue powder': { displayName: 'Meringue powder', density: 172 / 236.588 },
  'whole milk|milk': { displayName: 'Milk', density: 227 / 236.588 },
  'Molasses': { displayName: 'Molasses', density: 340 / 236.588 },
  'Oat flour': { displayName: 'Oat flour', density: 92 / 236.588 },
  'Oats': { displayName: 'Oats', density: 89 / 236.588 },
  'Olive oil': { displayName: 'Olive oil', density: 200 / 236.588 },
  'Onion': { displayName: 'Onion', density: 142 / 236.588 },
  'Palm shortening': { displayName: 'Palm shortening', density: 180 / 236.588 },
  'Peanut butter': { displayName: 'Peanut butter', density: 270 / 236.588 },
  'Pear': { displayName: 'Pears', density: 163 / 236.588 },
  'Pecan': { displayName: 'Pecan', density: 114 / 236.588 },
  'Pine nuts': { displayName: 'Pine nuts', density: 142 / 236.588 },
  'Pistachio': { displayName: 'Pistachio', density: 120 / 236.588 },
  'Pizza sauce': { displayName: 'Pizza sauce', density: 228 / 236.588 },
  'Polenta': { displayName: 'Polenta', density: 163 / 236.588 },
  'Poppy seeds': { displayName: 'Poppy seeds', density: 144 / 236.588 },
  'Potato Flour': { displayName: 'Potato Flour', density: 184 / 236.588 },
  'Potato starch': { displayName: 'Potato starch', density: 152 / 236.588 },
  'Pumpernickel Flour': { displayName: 'Pumpernickel Flour', density: 106 / 236.588 },
  'Pumpkin pur[ée]e': { displayName: 'Pumpkin purée', density: 227 / 236.588 },
  'Quinoa': { displayName: 'Quinoa', density: 177 / 236.588 },
  'Raisins': { displayName: 'Raisins', density: 170 / 236.588 },
  'Raspberrie|raspberry': { displayName: 'Raspberries', density: 120 / 236.588 },
  'Rhubarb': { displayName: 'Rhubarb', density: 120 / 236.588 },
  'Rice': { displayName: 'Rice', density: 198 / 236.588 },
  'Rice flour': { displayName: 'Rice flour', density: 142 / 236.588 },
  'Rice Krispies': { displayName: 'Rice Krispies', density: 28 / 236.588 },
  'kosher salt': { displayName: 'Kosher Salt', density: 256 / 236.588 },
  'Salt': { displayName: 'Salt', density: 288 / 236.588 },
  'Self-Rising Flour': { displayName: 'Self-Rising Flour', density: 113 / 236.588 },
  'Semolina Flour': { displayName: 'Semolina Flour', density: 163 / 236.588 },
  'Sesame seeds': { displayName: 'Sesame seeds', density: 142 / 236.588 },
  'Shallots': { displayName: 'Shallots', density: 156 / 236.588 },
  'Sorghum flour': { displayName: 'Sorghum flour', density: 138 / 236.588 },
  'Sour cream': { displayName: 'Sour cream', density: 227 / 236.588 },
  'Soy flour': { displayName: 'Soy flour', density: 140 / 236.588 },
  'Sparkling Sugar': { displayName: 'Sparkling Sugar', density: 228 / 236.588 },
  'Spelt Flour': { displayName: 'Spelt Flour', density: 99 / 236.588 },
  'Sprouted Wheat Flour': { displayName: 'Sprouted Wheat Flour', density: 113 / 236.588 },
  'Strawberrie|strawberry': { displayName: 'Strawberries', density: 167 / 236.588 },
  'sugar|White Sugar|granulated sugar': { displayName: 'sugar', density: 200 / 236.588 },
  'Splenda': { displayName: 'Sugar substitute, Splenda', density: 25 / 236.588 },
  'sun dried tomatoes|Sundried tomatoes': { displayName: 'Sundried tomatoes', density: 170 / 236.588 },
  'Sunflower seeds': { displayName: 'Sunflower seeds', density: 140 / 236.588 },
  'Sweetened condensed coconut milk': { displayName: 'Sweetened condensed coconut milk', density: 288 / 236.588 },
  'Sweetened condensed milk': { displayName: 'Sweetened condensed milk', density: 312 / 236.588 },
  'Tahini paste': { displayName: 'Tahini paste', density: 256 / 236.588 },
  'Tapioca starch|tapioca flour': { displayName: 'Tapioca starch', density: 113 / 236.588 },
  'Tapioca': { displayName: 'Tapioca', density: 168 / 236.588 },
  'Toasted Almond Flour': { displayName: 'Toasted Almond Flour', density: 96 / 236.588 },
  'Tomato paste': { displayName: 'Tomato paste', density: 232 / 236.588 },
  'Turbinado': { displayName: 'Turbinado', density: 180 / 236.588 },
  'Vanilla Extract': { displayName: 'Vanilla Extract', density: 224 / 236.588 },
  'Vegetable oil': { displayName: 'Vegetable oil', density: 198 / 236.588 },
  'Vegetable shortening': { displayName: 'Vegetable shortening', density: 184 / 236.588 },
  'Vital Wheat Gluten|gluten': { displayName: 'Vital Wheat Gluten', density: 144 / 236.588 },
  'Walnuts': { displayName: 'Walnuts', density: 128 / 236.588 },
  'Water': { displayName: 'Water', density: 1 / 1 },
  'Wheat bran': { displayName: 'Wheat bran', density: 64 / 236.588 },
  'Wheat germ': { displayName: 'Wheat germ', density: 112 / 236.588 },
  'White Chocolate Chips': { displayName: 'White Chocolate Chips', density: 170 / 236.588 },
  'White Rye Flour': { displayName: 'White Rye Flour', density: 106 / 236.588 },
  'White Whole Wheat Flour': { displayName: 'White Whole Wheat Flour', density: 113 / 236.588 },
  'Whole Grain Flour Blend': { displayName: 'Whole Grain Flour Blend', density: 113 / 236.588 },
  'Whole Wheat Flour, Premium 100%': { displayName: 'Whole Wheat Flour, Premium 100%', density: 113 / 236.588 },
  'Whole Wheat Pastry Flour / Graham Flour': { displayName: 'Whole Wheat Pastry Flour / Graham Flour', density: 96 / 236.588 },
  'Yeast': { displayName: 'Yeast', density: 144 / 236.588 },
  'Yogurt': { displayName: 'Yogurt', density: 227 / 236.588 },
  'Oil': { displayName: 'Oil', density: 198 / 236.588 },
  'Peanut': { displayName: 'Peanut', density: 142 / 236.588 }
};
const fractionalNumberRegex = /([0-9]*)[+\s]*([0-9]+)[\s]*\/[\s]*([0-9]+)/;
const decimalRegex = /([0-9]+\.[0-9]+)/;
const integerRegex = /([0-9]+)/;
const toRegex = /to\s+(.*)/;
const generateFractionMap = () => {
  const fractionMap = {};
  const denominatorList = [2, 3, 4, 8, 16];
  for (let denominatorIndex = 0; denominatorIndex < denominatorList.length; denominatorIndex++) {
    const i = denominatorList[denominatorIndex];
    for (let j = 1; j < i; j++) {
      const roundedValue = (j / i).toFixed(5).toString();
      if (fractionMap.hasOwnProperty(roundedValue)) {
        continue;
      }
      const fractionString = j.toString() + '/' + i.toString();
      fractionMap[roundedValue] = fractionString;
    }
  }
  return fractionMap;
};
const fractionMap = generateFractionMap();
const toFractionIfApplicable = (value) => {
  if (isNaN(value)) {
    return '???';
  }
  const roundedValue = Math.round(value * 1e5) / 1e5;
  const key = value.toFixed(5);
  if (fractionMap.hasOwnProperty(key)) {
    return fractionMap[key];
  }
  let output = roundedValue.toString();
  if (output.includes('.')) {
    const firstPart = output.substring(0, output.indexOf('.'));
    const decimalPoints = Math.max(0, 3 - firstPart.length);
    output = roundedValue.toFixed(decimalPoints);
  }
  if (output.endsWith('.00')) {
    output = output.substring(0, output.length - 3);
  } else if (output.includes('.') && output.endsWith('0')) {
    output = output.substring(0, output.length - 1);
  }
  return output;
};
const parseIngredients = () => {
  const results = document.getElementById('results');
  while (results.firstElementChild) {
    results.firstElementChild.remove();
  }
  const ul = document.createElement('ul');
  results.appendChild(ul);
  const input = document.getElementById('input');
  const text = input.value;
  window.localStorage.setItem('text', text);
  const textLines = text.split(/[\r\n]+/);
  for (let i = 0; i < textLines.length; i++) {
    const textLine = textLines[i];
    let startIndex = 0;
    let value = 1;
    // first look for a number
    const fractionalNumberResult = fractionalNumberRegex.exec(textLine);
    if (fractionalNumberResult) {
      let integer = parseInt(fractionalNumberResult[1]);
      if (!integer) {
        integer = 0;
      }
      let numerator = parseInt(fractionalNumberResult[2]);
      if (!numerator) {
        numerator = 0;
      }
      let denominator = parseInt(fractionalNumberResult[3]);
      if (!denominator) {
        denominator = 1;
      }
      value = integer + (numerator / denominator);
      startIndex = fractionalNumberResult.index + fractionalNumberResult[0].length;
    } else if (decimalRegex.exec(textLine)) {
      const decimalResult = decimalRegex.exec(textLine);
      value = parseFloat(decimalResult[1]);
      startIndex = decimalResult.index + decimalResult[0].length;
    } else if (integerRegex.exec(textLine)) {
      const integerResult = integerRegex.exec(textLine);
      value = parseInt(integerResult[1]);
      startIndex = integerResult.index + integerResult[0].length;
    }
    // console.log(value);
    const noNumber = textLine.substring(startIndex).trim().toLowerCase();
    // then look for "to"
    const toResult = toRegex.exec(noNumber);
    let endIndex = noNumber.length;
    let toValue = '';
    if (toResult) {
      toValue = toResult[1].toLowerCase();
      endIndex = toResult.index;
    }
    const centerPart = noNumber.substring(0, endIndex).trim().toLowerCase();
    // console.log(centerPart);
    // console.log(toValue);
    // look for a unit
    // check if there's any mass units in there
    const frontValue = matchUnitAndFood(centerPart);
    const backValue = matchUnit(toValue);
    let backUnit = undefined;
    if (backValue) {
      backUnit = backValue.unit;
    }
    if (frontValue) {
      const li = document.createElement("li");
      li.innerText = value + ' ' + frontValue.unit.displayName + ' ' + frontValue.food.displayName;
      if (backUnit) {
        const factor = determineFactor(frontValue, backUnit);
        li.innerText += ' ';
        li.innerHTML += '&rarr;';
        const conversionResult = toFractionIfApplicable(value * factor);
        li.innerText += ' ' + conversionResult + ' ' + backUnit.displayName;
        if ('???' == conversionResult) {
          li.innerText += ' (No density found for ' + frontValue.food.displayName + ')'
        }
      }
      ul.appendChild(li);
    }
  }
};
const matchUnitAndFood = (text) => {
  let matchedUnit = matchUnit(text);
  if (matchedUnit) {
    // determine the food
    const foodPart = text.substring(matchedUnit.end).replace(/^\s*of\s+/, '').trim();
    const densityKeys = Object.keys(densityValues);
    for (let i = 0; i < densityKeys.length; i++) {
      const food = densityKeys[i];
      const foodRegex = new RegExp('(^|\\b)(' + food.toLowerCase() + ')[es]{0,2}(\\b|$)');
      const result = foodRegex.exec(foodPart);
      if (result) {
        return { 'food': densityValues[food], 'unit': matchedUnit.unit };
      }
    }
    return { 'food': { displayName: foodPart, density: undefined }, 'unit': matchedUnit.unit };
  } else {
    const foodSpecificUnitsKeys = Object.keys(foodSpecificUnits);
    for (let i = 0; i < foodSpecificUnitsKeys.length; i++) {
      const food = foodSpecificUnitsKeys[i];
      // search for food
      const foodRegex = new RegExp('(^|\\b)(' + food.toLowerCase() + ')[es]{0,2}(\\b|$)');
      if (foodRegex.exec(text)) {
        // its that food
        // console.log(food);
        // then check for special units
        const specialUnitsKeys = Object.keys(foodSpecificUnits[food]);
        for (let j = 0; j < specialUnitsKeys.length; j++) {
          const specialUnit = specialUnitsKeys[j];
          const unitRegex = new RegExp('(^|\\b)(' + specialUnit.toLowerCase() + ')[es]{0,2}(\\b|$)');
          const result = unitRegex.exec(text);
          if (result) {
            return { 'food': densityValues[food], 'unit': foodSpecificUnits[food][specialUnit] };
            break;
          }
        }
      }
    }
  }
  return undefined;
};
const matchUnit = (text) => {
  const unitKeys = Object.keys(units);
  for (let i = 0; i < unitKeys.length; i++) {
    const unit = unitKeys[i];
    const unitRegex = new RegExp('(^|\\b)(' + unit.toLowerCase() + ')[es]{0,2}(\\b|$)');
    const result = unitRegex.exec(text);
    if (result) {
      return { 'unit': units[unit], 'end': result.index + result[0].length };
    }
  }
  return undefined;
};
const determineFactor = (frontValue, backUnit) => {
  const frontUnit = frontValue.unit;
  if (frontUnit.type == backUnit.type) {
    return frontUnit.value / backUnit.value
  } else if (frontUnit.type == 'g' && backUnit.type == 'mL') {
    return (frontUnit.value * (1 / frontValue.food.density)) / backUnit.value;
  } else if (frontUnit.type == 'mL' && backUnit.type == 'g') {
    return (frontUnit.value * (frontValue.food.density)) / backUnit.value;
  }
  return NaN;
};
let parseTimeout = undefined;
const delayedParse = () => {
  if (parseTimeout) {
    clearTimeout(parseTimeout);
  }
  parseTimeout = setTimeout(parseIngredients, 250);
};
const loadFromLocalStorage = () => {
  let oldText = window.localStorage.getItem('text');
  if (!oldText) {
    oldText = '150 g sugar to cups\n1 1/2 sticks butter to grams\n236 ml milk to cups\n1 1/4 cups flour to g';
  }
  document.getElementById('input').value = oldText;
};
const clearText = () => {
  document.getElementById('input').value = '';
  parseIngredients();
};
loadFromLocalStorage();
parseIngredients();
if (navigator.userAgent.includes('KAIOS/')) {
  // input.focus();
}