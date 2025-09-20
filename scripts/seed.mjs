import admin from 'firebase-admin';
import { readFileSync } from 'fs';
import { faker } from '@faker-js/faker';

// Load environment variables for development
import { config } from 'dotenv';
config({ path: '.env.development' });

// Load the service account key
const serviceAccount = JSON.parse(readFileSync('./serviceAccountKey.json', 'utf8'));

// Initialize the Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: `https://${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}.firebaseio.com`
});

const db = admin.firestore();

const seedDatabase = async (count = 15) => {
  console.log('Starting to seed database...');
  const consultationsCollection = db.collection('consultations');
  const batch = db.batch();

  for (let i = 0; i < count; i++) {
    const docRef = consultationsCollection.doc();
    batch.set(docRef, {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      phone: faker.phone.number(),
      company: faker.company.name(),
      businessType: faker.commerce.department(),
      currentChallenges: faker.lorem.paragraph(),
      budget: faker.helpers.arrayElement(['$2,500 - $5,000', '$5,000 - $10,000', '$10,000+']),
      timeline: faker.helpers.arrayElement(['1-2 Weeks', '1 Month', '2-3 Months']),
      preferredContact: faker.helpers.arrayElement(['email', 'phone']),
      additionalInfo: faker.lorem.sentence(),
      submittedAt: faker.date.past().toISOString(),
    });
  }

  await batch.commit();
  console.log(`Successfully seeded ${count} consultations.`);
  process.exit(0);
};

seedDatabase();
