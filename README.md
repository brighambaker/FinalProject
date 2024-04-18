# FinalProject

## Description
This is a simple database that allows you to store a Website's basic information. It receives input for a keyword or website name,
and the website URL. Then lists the entries by the keyword or Website Name. When those keywords are selected from the list
a Modal opens that displays the information taken.

## Author
- Brigham Baker

## Date
- 2024-04-17

## Application Structure
- **'App.js'**: Sets up the application's root component
- **'HomeScreen.js'**: Contains the logic for the main screen of the app where website information is gathered and listed
- **'db.js'**: Initializes and handles the database interactions
- **'ModalDialogue.js'**: Contains the logic for handling the modal
- **'master-style-sheet.js**: Contains and handles the styles for all files in the program
- **'app.json'**: Contains the Splash Screen, Icon, and APK handling for the app

## Dependencies
This project relies on the following Expo and React Native libraries:

expo: The framework and platform for universal React applications.
expo-av: Provides audio and video playback and recording functionalities.
react-native: The library used to develop the mobile application's UI.
expo-sqlite: The required library for utilizating the SQLite database

Ensure all dependencies are installed using npm/npx

## How to Use the App
This app is very straightforward to use. You enter the required details for a website in the Input Text Boxes.
The first box is for the Keyword or the Website name. The other input box is for the Website URL.
Fill out both of the text fields and press the Add Website Button. This will add the website information to the list found
at the bottom of the page. Click on an item from the list and a Modal Window will open displaying the Keyword and URL.
On the Modal Window there are two buttons. The first is a Close button which will close the Modal, and a Delete button, which 
will remove the entry from the database. This is a simple overview of this app.