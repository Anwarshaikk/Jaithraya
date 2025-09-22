import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Text,
  Preview,
  Row,
  Column,
  Hr,
} from '@react-email/components';
import * as React from 'react';
import { ConsultationFormData } from '../lib/types';

export const InternalNotification = (data: ConsultationFormData) => (
  <Html>
    <Head />
    <Preview>New Consultation Request Submitted</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New Consultation Request</Heading>
        <Text style={text}>A new consultation form has been submitted. Here are the details:</Text>
        
        <Hr style={hr} />

        <Row style={row}>
          <Column style={label}>Name</Column>
          <Column style={value}>{data.name}</Column>
        </Row>
        <Row style={row}>
          <Column style={label}>Email</Column>
          <Column style={value}>{data.email}</Column>
        </Row>
        <Row style={row}>
          <Column style={label}>Phone</Column>
          <Column style={value}>{data.phone}</Column>
        </Row>
        <Row style={row}>
          <Column style={label}>Company</Column>
          <Column style={value}>{data.company}</Column>
        </Row>
        <Row style={row}>
          <Column style={label}>Business Type</Column>
          <Column style={value}>{data.businessType}</Column>
        </Row>
        <Row style={row}>
          <Column style={label}>Current Challenges</Column>
          <Column style={value}>{data.currentChallenges}</Column>
        </Row>
        <Row style={row}>
          <Column style={label}>Budget</Column>
          <Column style={value}>{data.budget}</Column>
        </Row>
        <Row style={row}>
          <Column style={label}>Timeline</Column>
          <Column style={value}>{data.timeline}</Column>
        </Row>
        <Row style={row}>
          <Column style={label}>Preferred Contact Method</Column>
          <Column style={value}>{data.preferredContact}</Column>
        </Row>
        <Row style={row}>
          <Column style={label}>Additional Information</Column>
          <Column style={value}>{data.additionalInfo}</Column>
        </Row>

      </Container>
    </Body>
  </Html>
);

export default InternalNotification;

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

const hr = {
  borderColor: '#cccccc',
  margin: '20px 0',
};

const row = {
  margin: '0 0 10px',
};

const label = {
  color: '#333',
  fontSize: '16px',
  fontWeight: 'bold',
  width: '200px',
};

const value = {
  color: '#555',
  fontSize: '16px',
};
