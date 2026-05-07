import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Text,
} from '@react-email/components';

interface ContactConfirmationProps {
  name: string;
}

export default function ContactConfirmation({ name }: ContactConfirmationProps) {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Thank You for Reaching Out!</Heading>
          <Text style={text}>
            Hi {name},
          </Text>
          <Text style={text}>
            Thank you for contacting Ageniqs. We've received your message and one of our team members will get back to you within 1-2 business days.
          </Text>
          <Text style={text}>
            In the meantime, feel free to explore more about our solutions:
          </Text>
          <ul style={list}>
            <li style={listItem}>
              <Text style={listText}>
                <strong>HRTBeat AI:</strong> Transform HR operations with AI-powered insights and automation
              </Text>
            </li>
            <li style={listItem}>
              <Text style={listText}>
                <strong>Custom AI Solutions:</strong> Bespoke agentic AI systems tailored to your needs
              </Text>
            </li>
          </ul>
          <Text style={text}>
            If you have any urgent questions, please don't hesitate to reply to this email.
          </Text>
          <Text style={signature}>
            Best regards,<br />
            The Ageniqs Team
          </Text>
          <Text style={footer}>
            Ageniqs - The U.S. growth arm of{' '}
            <a href="https://www.thedatapoint.ai/" style={link}>The Data Point</a>
            <br />
            Email: <a href="mailto:hello@ageniqs.com" style={link}>hello@ageniqs.com</a>
            <br />
            Website: <a href="https://www.ageniqs.com" style={link}>www.ageniqs.com</a>
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '40px 20px',
  marginTop: '40px',
  marginBottom: '40px',
  borderRadius: '8px',
  maxWidth: '600px',
};

const h1 = {
  color: '#0A1F44',
  fontSize: '28px',
  fontWeight: 'bold',
  margin: '0 0 24px',
};

const text = {
  color: '#525252',
  fontSize: '16px',
  lineHeight: '24px',
  margin: '0 0 16px',
};

const list = {
  margin: '24px 0',
  paddingLeft: '20px',
};

const listItem = {
  margin: '12px 0',
};

const listText = {
  color: '#525252',
  fontSize: '16px',
  lineHeight: '24px',
  margin: '0',
};

const signature = {
  color: '#171717',
  fontSize: '16px',
  lineHeight: '24px',
  margin: '32px 0 0',
};

const footer = {
  color: '#737373',
  fontSize: '14px',
  lineHeight: '20px',
  margin: '32px 0 0',
  paddingTop: '24px',
  borderTop: '1px solid #e5e5e5',
};

const link = {
  color: '#2E6FFF',
  textDecoration: 'none',
};
