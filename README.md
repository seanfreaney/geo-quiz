# Geo Quiz

Geo Quiz is an interactive geography quiz. Geo quiz tests the user's knowledge of capital cities, languages and populations of numerous countries. On clicking the 'start' button, a country is randomly generated and the user must asnwer with the country's capital city, language(s) and select the correct population. Ultimately, I would like to expand the list of countries included and enhance the interactivity of the site.

## Existing Features

### Game Logic
- Countires array lists numerous objects. These objects have key-value pairs representing different attributes of the object;
  - 'name': name of the country,
  - 'capital': capital city of the country, 
  - 'language': array containing the language(s) spoken in the country, and
  - 'population': rounded population value.

- When the user hits 'start';
  - an object is randomly selected from the countries array,
  - the 'name' of the object is displayed to the DOM,
  - the 'population' value of the object is increased and reduced by 10% and all three values are displayed to the DOM. These values are displayed randomly across three elements in the DOM to ensure the user can't simply select the same button for correct population each time, and
  - the user's cursor is brought to the input field for 'Capital City'.

- The user then enters answers in the input fields for 'Capital City' and 'Language' and clicks one of the population values.

- When the user hits 'submit';
  - the user receives an alert informing them if their answer was correct. If the answer is incorrect they receive the correct answer(s).
  - the count of correct or incorrect answers tally in the bottom of the screen, and
  - the game re-runs displaying another randomly selected country.

### Interactive User Interface
- __Button Colours__ 
  - 'start', 'submit' and population buttons change colour on hover.
  - IMAGES

- __Mouse Clicks & Keyboard Input__
  - 'start', 'submit' and population buttons are all responsive to mouse clicks;
    -'start' runs game and focuses cursor to input field,
    -'population' provides user's answer to checkAnswer function,
    -'submit' shows alter, tallies score, re-runs game and focuses cursor to input field.
  - 'submit' button is also responsive to 'Enter' keyboard input.
  _IMAGES

-__Cursor Focus__
  - Cursor focus is used to bring the user to the first input field to enhance user experience.

-__Display Data to the DOM__
  - Object name is displayed to the DOM,
  - Object population, population +10% and population -10% is displayed randomly across three different spans. This ensures that the correct population value is not always displayed to the same element.

### Simple Layout and Background  
-__Background__
  - Simple background image was used which shows an aesthetically pleasing world map.
  - IMAGE
  - Simple display boxes and buttons use opacity to ensure adequate contrast while complementing the image.
  - display boxes IMAGE

### Answer Validation
- __Feature 2__

  - Point1.
  - Point2.
  - Image

### Score Tracking 
- __Feature 3__

  - Point1.
  - Point2.
  - Image


### Additional Features 
- __Time Sensitivity__

  - I would like to add an egg timer which would start to countdown on click of 'start' button.
  - I would like the user to select 'easy', 'medium' or 'hard' to determine the amount of time allotted.

- __Increase Countries Array__

  - I would like to increase the countries array to include more countries.

- __Select Continent to be tested__

  - Once the countries array is complete (includes all countries), I would like to add a 'continent' value to the countries array.
  - I would then like to change the HTML and Javascript to allow the user to select the continent to be tested.

- __Automatically updating data__

 - I would like to figure out how I could add more values to the countries array and have them update automatically. This would be really cool to keep the population data up to date with the most recent census but also include things like 'current president' etc.
  




## Testing

### Testing Table TBU

| Action    | Expectation | Result | 
| ---------|:-------------------:|----------|
| Enter URL | Arrive at Home | Pass |
| Click Logo | Arrive at Home | Pass |
| Click Home | Arrive at Home | Pass |
| Click Home | Arrive at Home, Home link underlined | Pass |
| Click Long Game | Arrive at Long Game | Pass |
| Click Long Game | Arrive at Long Game, Long Game underlined | Pass |
| Click Short Game | Arrive at Short Game | Pass |
| Click Short Game | Arrive at Short Game, Short Game underlined | Pass |
| Click Facebook Logo | Arrive at Facebook Home | Pass |
| Click X Logo | Arrive at X Home | Pass |
| Click Instagram Logo | Arrive at Instagram Home | Pass |
| Click Youtube Logo | Arrive at Youtube Home | Pass |
| Click Videos (Long Game) | Video plays | Pass |
| Click Videos Fullscreen (Long Game) | Video plays Fullscreen | Pass |
| Click Videos (Short Game) | Video plays | Pass |
| Click Videos Fullscreen (Short Game) | Video plays | Pass |
| Header Responsivity | Change for screen size | Pass |
| Footer Responsivity | Change for screen size | Pass |
| Text Responsivity | Change for screen size | Pass |
| Video container Responsivity | Change for screen size | Pass |

  

### Validator Testing
- __HTML__
  - No errors returend through W3C validator.
  - Screenshot

- __CSS__
  - No errors returned through jigsaw validator.
  - Screenshot

- __Javascript__
  - No errors returned through jshint validator.
  - Screenshot

### Unfixed Bugs / Issues
- __Population value Spans__
  - When the page is first loaded, the spans which hold the population values display empty. This is a little bit unsightly and I didn't have time to figure out how to only have these elements displayed once the 'start' button is selected.

- __Submitting empty fields__
  - Currently, if the user doesn't select a population value and hits 'submit' they receive a message saying 'Please ensure all answers are filled in.'. I'm sure there is a better way to handle users not entering data but this was an easy fix to address the user not answering all questions ie if they haven't selected a population, they haven't answered all questions. This is addressed in the checkAnswer function.


## Deployment

- The site was deployed to GitHub pages. The steps to deploy are as follows:
  - In the GitHub repository, navigate to the Settings tab
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

- The live link can be found here: <https://seanfreaney.github.io/geo-quiz/>

## Credits

### Multiple TBU here
W3C Schools


### Font Awesome
- __Link__
  - Youtube
  - <https://www.youtube.com/watch?v=8-VRIEaIKqI>

### Icons8
- __Icon__
  - Icon from Icons8.

### Media
- __Population data__
  - Populations (Note here on intent to update) - https://www.worldometers.info/population/countries-in-europe-by-population/
- __Images__
  - __Freepik.com__
  - Background image.
 