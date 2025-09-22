import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Text,
  Preview,
} from '@react-email/components';
import * as React from 'react';

interface ProspectConfirmationProps {
  name: string;
}

export const ProspectConfirmation = ({ name }: ProspectConfirmationProps) => (
  <Html>
    <Head />
    <Preview>Thank you for your consultation request</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Thank You for Your Request</Heading>
        <Text style={text}>
          Hello {name},
        </Text>
        <Text style={text}>
          Thank you for reaching out for a consultation. We have successfully received your form submission.
        </Text>
        <Text style={text}>
          Our team is reviewing your information and will get back to you within 1-2 business days to schedule a meeting.
        </Text>
        <Text style={text}>
          We look forward to speaking with you.
        </Text>
        <Text style={text}>
          Best,
          <br />
          The Jaithraya Team
        </Text>
      </Container>
    </Body>
  </Html>
);

export default ProspectConfirmation;

const main = {
  backgroundColor: '#f6f9fc',
  padding: '20px',
  fontFamily: 'Helvetica, Arial, sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  border: '1px solid #f0f0f0',
  borderRadius: '5px',
  padding: '40px',
  margin: '0 auto',
  width: '600px',
};

const h1 = {
  color: '#333',
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '0 0 20px',
  textAlign: 'center' as const,
};

const text = {
  color: '#555',
  fontSize: '16px',
  lineHeight: '26px',
  margin: '0 0 20px',
};
