CS475- Senior Project

Aalayah Honablue aah16@hood.edu Software Engineer
Salman Alrashidi sa46@hood.edu Software Engineer

Our project Repository can be found at: https://github.com/Layahblue22/senior-sem

Project Overview:
"GoodEats," a cross plateform mobile application developed using React Native and Firebase is a restaurant goers dream! The purpose of this app is to provide food lovers with a platform to share their opinions about restaurants and discover new dining experiences. GoodEats is a combination of Yelp and Twitter, where users can post reviews and ratings of their favorite (or not so favorite) eateries. The app allows users to search for restaurants based on cuisine type and location.

Tech Stack:
-React Native
-Yelp API
-Google Places API
-Firebase(config information is set to Aalayah firebase account) 

Layout of app:
-Assest: Stores images
-components/home: reusable pieces of the app that are refrenced in the different screens.
-screens: Houses the different screens we have such as home screen, profile screen, and favorites screen.
-Navigation.js hold the flow of our app and how a user moves from one screen to the next by use of buttons. For example the heart icon on the bottom navigation will take the user to the favorites screen.

Login/Create account:
-Component "LoginForm" uses firebases authentication(email and password) to create a user if their email does not exist in our firestore database or logs them in if they are in the firestore database and their password is correct. 

To Begin:
1. Install yarn or npm install
2. yarn start/expo start/npm start to run 
3. open ios simulator or android studio 
