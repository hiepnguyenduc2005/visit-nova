# PROJECT 3: Visit Nova

## Group Members
- Tyler Campbell
- Roger Nguyen

## Links
- **GitHub**: [Visit Nova Repository](https://github.com/hiepnguyenduc2005/visit-nova)
- **Project**: [Visit Nova on Expo](https://expo.dev/accounts/visit-nova/projects/visit-nova)

![](./recording.gif)

## Description
Designed with the React Native framework, the app **Visit Nova** is a self-guided campus tour app that provides an interactive way to explore key destinations on campus, both as listings and a region map powered by Google Maps API. 

Each stop on the tour includes detailed information, such as:
- The destination’s name
- A description
- A gallery of images to provide users with a richer understanding of the space

All destination data is securely stored in a Firebase database, ensuring up-to-date and reliable content.

Whether you're a prospective student, a visitor, or part of the Villanova community, **Visit Nova** makes it easy to navigate the campus and discover its highlights at your own pace.

## Technologies
- React Native
- Google Maps API
- Firebase

## Responsibilities
### Roger
- Connected the app with Google Maps API
- Designed the front end of the app

### Tyler
- Connected the app with Firebase database
- Prepared the data for each stop

## How to Run
1. Download the Expo app and clone the code.
2. Make sure to install all dependencies with `npm install`.
3. Run the app with `npm start`.
4. Scan the QR code to view the app. 

Once the app opens:
- The **home screen** will show two buttons:
  - One button navigates to the **list of stops**, where each stop can be clicked to view more information.
  - The other button navigates to the **map view**, where each stop is marked with a pin. Clicking on a pin provides additional details about the location.

## Challenges & Takeaways
### Roger
- The hardest part was figuring out how to change the default code provided by developers for the map view front end.  For instance, the default pins on the map were totally different from what was expected, both in terms of index and color appearance. Another challenge was designing the front end independently of the array fetched from Firebase. This approach highlighted the difference between a solo and a team project, as it required parallel work rather than waiting for one part to be completed.

### Tyler
- Setting up the Firestore database was relatively straightforward, but connecting it to the app required some trial and error. Firebase’s documentation was highly detailed and proved invaluable in discovering the correct solution. Once the connection hurdle was overcome, it became clear how useful databases are for storing information. Unlike hardcoded data, database-stored data can be updated easily without the need to interact with the code.
