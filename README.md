Coffee-Beans
================

Coffee, that liquid black gold that most developers are completely hooked on and without it would not be able to function properly. Coffea arabica, or Arabica coffee, is known all around the world for it great taste. Lesser known is the fact that Arabica coffee is not just one type of bean, but that it’s a species that has many, many varieties. This projects tries to inform us about different varieties of espresso.

## Demo
Check out the live [demo](http://my-coffee-beans.ksulourgeio.gr)

## Project setup
1. Clone the project
1. In a terminal type ```yarn``` install dependencies
1. In a terminal type ```yarn start``` to run the project
1. A new browser window will be opene to the port specified in your .env
1. In a terminal type ```yarn test``` to run your tests
1. In a terminal type ```yarn flow``` to check for flow errors
1. In a terminal type ```yarn elsint``` to check for lint mistakes
1. In a terminal type ```yarn build``` to make a production ready build

## Project's Stack
This project was created with Create React apps with no build configuration
Uses Redux for the project's state management, Styled-Components for the styling,
Font Awesome for ui and Flow for Type checking:

- [Creating an App](https://github.com/facebook/create-react-app/) – How to create a new app.
- [User Guide](https://facebook.github.io/create-react-app/) – How to develop apps bootstrapped with Create React App.
- [Redux](https://redux.js.org/)
- [Styled-Components](https://styled-components.com)
- [Flow](https://flow.org)
- [Font Awesome](https://fontawesome.com/)

## Project's Best Practices and Architect
#### Motivations
- Styled-Components, if it's planned smart the components exported to a package to used in different projects (reusability)
- Redux, to handle all the business logic no you can have the same logic with different components just by using the created reducer (reusability, refactoring, maintainace)
- Create React App to have a PWA ready project

### Best Practices
1. Single responsibility
1. Small Stateless Components instead of big Classes
1. Composable Components
1. Reusable
1. Meaningful
1. Declarative FP with Pure or Almost-Pure functions
1. Try to keep the Component's methods styles in the same folder

## ESLint
Yes, we lint our files.   
Lint will ensure that so best practices are followed. Search the error messages and learn with that.   
Make sure that all your .js files are passing the lint check before open a PR.      
There is pre-commit hook that won't allow you to commit without fixing the lint alerts.

## Unit Test
Following TDD you need first to write a small story, with an empty component and the unit tests and then we develop the component.   
Test stack consist of [jest](https://jestjs.io), [Enzyme](http://airbnb.io/enzyme/docs/) and [Sinon](http://sinonjs.org).  
The test are attached with an addon to the component story. You can follow the tests results directly through Storybook at the right panel under the specification tab.