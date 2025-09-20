import admin from 'firebase-admin';

const initializeFirebaseAdmin = () => {
  if (admin.apps.length) {
    return;
  }

  let serviceAccount;
  if (process.env.FIREBASE_SERVICE_ACCOUNT_KEY) {
    try {
      serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);
    } catch (e) {
      console.error('Failed to parse FIREBASE_SERVICE_ACCOUNT_KEY', e);
      return;
    }
  } else if (process.env.NODE_ENV !== 'production') {
    try {
      serviceAccount = eval('require')('../../serviceAccountKey.json');
    } catch (e) {
      console.error('Failed to load serviceAccountKey.json', e);
      return;
    }
  } else {
    console.error('FIREBASE_SERVICE_ACCOUNT_KEY is not set for production environment.');
    return;
  }

  try {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
    console.log('Firebase Admin SDK initialized successfully.');
  } catch (error) {
    console.error('Firebase Admin SDK initialization error:', error);
  }
};

initializeFirebaseAdmin();

const authAdmin = admin.auth();
const dbAdmin = admin.firestore();

export { authAdmin, dbAdmin };
