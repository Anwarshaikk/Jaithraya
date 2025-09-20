import 'server-only';
import admin from 'firebase-admin';

const initializeFirebaseAdmin = () => {
  if (admin.apps.length) {
    return;
  }

  let serviceAccount;
  if (process.env.FIREBASE_SERVICE_ACCOUNT_KEY) {
    try {
      serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);
    } catch (e: any) {
      throw new Error(`Failed to parse FIREBASE_SERVICE_ACCOUNT_KEY: ${e.message}`);
    }
  } else {
    // This is a fallback for local development and should not run in Vercel.
    // The server-only package prevents this from being a build-time issue.
    try {
      serviceAccount = require('../../serviceAccountKey.json');
    } catch (e) {
      throw new Error(
        'FIREBASE_SERVICE_ACCOUNT_KEY is not set and serviceAccountKey.json was not found for local development.'
      );
    }
  }

  try {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
    console.log('Firebase Admin SDK initialized successfully.');
  } catch (error: any) {
    throw new Error(`Firebase Admin SDK initialization error: ${error.message}`);
  }
};

// Initialize the app
try {
  initializeFirebaseAdmin();
} catch (e: any) {
  // Log the specific initialization error during runtime
  console.error(`Firebase Admin initialization failed: ${e.message}`);
}

// Export null if the app didn't initialize, to be checked in API routes
const authAdmin = admin.apps.length ? admin.auth() : null;
const dbAdmin = admin.apps.length ? admin.firestore() : null;

export { authAdmin, dbAdmin };
