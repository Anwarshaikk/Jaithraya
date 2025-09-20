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
  } else if (process.env.NODE_ENV !== 'production') {
    try {
      serviceAccount = eval('require')('../../serviceAccountKey.json');
    } catch (e) {
      // This will not run in Vercel build, but good practice
      throw new Error('Failed to load serviceAccountKey.json for development');
    }
  } else {
    throw new Error('FIREBASE_SERVICE_ACCOUNT_KEY is not set for production environment.');
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

try {
  initializeFirebaseAdmin();
} catch (e: any) {
  console.error(e.message);
}

const authAdmin = admin.apps.length ? admin.auth() : null;
const dbAdmin = admin.apps.length ? admin.firestore() : null;

export { authAdmin, dbAdmin };
