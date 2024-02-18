# Geo Quiz

Placeholder for intro

## Existing Features

### Feature 1
- __Feature 1__

  - Point1.
  - Point2.
  - Image
  

### Feature 2
- __Feature 2__

  - Point1.
  - Point2.
  - Image

### Feature 3 
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
 