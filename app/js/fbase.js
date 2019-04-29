const config = {
    apiKey: "AIzaSyD6FEnZSwCsaA08ZoeEnlR2ZfdT6kJbKBw",
    authDomain: "landing-page-newsletter.firebaseapp.com",
    databaseURL: "https://landing-page-newsletter.firebaseio.com",
    projectId: "landing-page-newsletter",
    storageBucket: "landing-page-newsletter.appspot.com",
    messagingSenderId: "333397294728"
};

firebase.initializeApp(config);

const mailsRef = firebase.database().ref('emails');