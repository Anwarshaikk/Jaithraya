import ContactHero from '@/components/sections/contact/ContactHero';
import ContactForm from '@/components/sections/contact/ContactForm';
import ContactInfo from '@/components/sections/contact/ContactInfo';
import ContactMap from '@/components/sections/contact/ContactMap';
import ContactFAQ from '@/components/sections/contact/ContactFAQ';

export default function Contact() {
  return (
    <main>
      <ContactHero />
      <ContactForm />
      <ContactInfo />
      <ContactMap />
      <ContactFAQ />
    </main>
  );
}
