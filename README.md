# pixelToOtherUnits

## Import

1. React

   1. useEffect

      1. variables
         1. `accumulatedCssCode`: A copy of inputCode to make inputCode immutable
         2. `ConvertedPropertyLineList`: Makes list of `expectedCssCode` so that it can be used when there is a invalid property name entered
         3. `regexMatchPropertyLine`: Is a regular expression object made by a `RegExp` constructor function with an argument `` `${property}: .+`, "g"``
         4. `propertyLine`: Matches property line according to `regexMatchPropertyLine`
         5. `cssUnitConvertedLine`: return value of `cssUnitConverter` function
         6. `expectedCssCode`: contains string where `propertyLine` is replaced by `cssUnitConvertedLine`
      2. logic
         1. rendering happens when ` [basePixel, cssUnit, inputCode, listOfProperties]` are changed
         2. listOfProperties string is converted to array and looped
         3. match the line which has the property
         4. convert all the px value to current cssUnit and set to `desiredCss` variable.

   2. useState

## App Component

### Variables

1. `cssUnit`: px,rem or em
2. `desiredCss`: css code that is shown in Result text-area
3. `inputCode`: code that is given by the user
4. `basePixel`: This variable defines how much is 1rem compared to pixel(usualy 1rem = 16px)
5. `listOfProperties`: properties that a user wants to change it's css unit

### Functions

1. `handleInputCode`: sets the inputCode variable
2. `handleBasePixelChange`: sets the basePixel variable
3. `handleAffectedPropertyChange`: sets the listOfProperties variable
4. `cssUnitConverter`: converts inputCode based on cssUnit

   1. logic only runs if `cssUnit` variable is not empty
   2. Find numbers that end with px
      1. Regex = `/([+-]?\d+\.?\d*)px/g`
   3. return $$matchedNumber* \frac 1 {basePixel}+ cssUnit$$

5. `expectedCssCodeGenerator`: sets the desiredCss variable to cssUnitConverter function return value

### UI

![](/ReadmeFiles/UI_of_px_to_Rem_app.png)
