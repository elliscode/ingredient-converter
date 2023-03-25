# Ingredient Converter

There are two types of units in this calculator: mass units, and volume units. 

## Mass Units

- kg
- mg
- g
- lb
- oz

## Volume units

- cup
- tsp
- TBSP
- mL
- L
- gal
- fl oz

## Conversion

Conversion between the same type of unit, for example kg to lb, or cups to mL, happens regardless of whether the food has a known density or not.

Converting between a mass unit and a volume unit is made possible by the dictionary of food densities, stored in the `densityValues` json object. Each key in this `densityValues` json is a regular expression pattern.