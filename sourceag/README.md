# Welcome to your Source AG Expo app 👋

This is an [Expo]() project created for Source AG test assignment.

## To run app

1. Install dependencies, please run below command in terminal

   npm install

## To test app

1. to Start the app, please run below command in terminal

   npm start

In the output, you'll find options to open the app in a

- [Android emulator]()
- [iOS simulator]()
- [Expo Go](), a limited sandbox for trying out app development with Expo

## Technical Stack

Used framework or libraries listed below for this project.

1. Expo - Official React Native team recommends Expo as a framework to begin the project.
2. Typescript - programming language
3. Expo Router - file based navigation, for screen navigation
4. Axios - to call backend REST APIs
5. SVG - Scaler vector graphics, are used to generate tree stems and nodes.

## Code Standard

ESlint was used for code standards; no Lint issues were discovered.
![Lint run result](assets/images/support/lint_result.png)

## Unit testing

For unit testing, the Jest and React testing libraries were used. No major issue found.
![Unit test Result](assets/images/support/UnitTestResult.png)

## Project Structure

![Project's files structure](assets/images/support/ProjectFileStructure.png)

## Testing done

1. App will work in portrait mode only.
2. Enabled for tablets, by enabling in app.json
   "ios": {
   "supportsTablet": true
   },
   To support Android, need to manages from Play Store
3. All testing done on iPhone 15 with Expo Go (due to no tablet device available)

## How solution works

1. On mount (manged by useEffect) of Home screen, the App will call the backend API for stem detail using the StemId parameter.
2. While waiting for a response, the app will display the app loading indicator.
3. After receiving a response from the backend, the component will save API response data in the component state (using by useState) as stemDetail.
4. The Home component will pass as props stem detail to the DigitalTwinTree component, which will render the tree.
5. The DigitalTwinTree component calculates all tree stem coordinates.
6. Once DigitalTwinTree has completed all calculations, the component will render all stems using Scaler Vector Graphics (SVG).
7. DigitalTwinTree renders stems, joints node with childId, and fruits.
8. To update the fruit development stage, the user can press the fruit, and a side drawer will appear from the right (using React Native Animated for animation).
9. The drawer will display all development stages; the user will select any new development stage.
10. When the new development stage button is pressed, the App will request the backend API to update stem information using the StemId and updated JSON.
11. After successfully updating the development stage on backend, API will provide updated stem detail.
12. The app will refresh the home screen with updated stem information.
