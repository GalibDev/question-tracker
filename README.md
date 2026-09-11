# Question Tracker

A lightweight, browser-only question tracker for SS-2106 Bangladesh Studies.

Open `index.html` in any modern browser. Progress and the exam date are stored in that browser's localStorage, so no account or backend is needed.

## Firebase login and admin panel

The app is ready for Firebase Authentication and Cloud Firestore. To activate it:

1. Create a Firebase project and add a Web app.
2. Enable **Email/Password** under Authentication > Sign-in method.
3. Create a Firestore database, then paste `firestore.rules` into Firestore > Rules and publish.
4. Copy your Web app configuration into `firebase-config.js`.
5. Create your account in the app. In Firestore, create the document `admins/YOUR_UID` (an empty document is enough). Only that account can open the Admin panel.

Firebase web configuration is intended for browser use. Never place a Firebase Admin SDK or service-account credential in this repository.

## Included

- 52 questions extracted from `Suggestions-for-Final-Examination.pdf`
- Solved/unsolved tracking with completion and remaining counts
- Exam-date countdown
- Subject and status filters plus text search
- Responsive mobile and desktop layout
