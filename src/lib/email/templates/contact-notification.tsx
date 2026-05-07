import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Text,
  Section,
} from '@react-email/components';
import type { ContactFormData } from '@/lib/validations/schemas';

interface ContactNotificationProps {
  data: ContactFormData;
}

export default function ContactNotification({ data }: ContactNotificationProps) {
  const interestLabels: Record<string, string> = {
    'hrtbeat': 'HRTBeat AI',
    'custom-ai': 'Custom AI Solutions',
    'consulting': 'AI Consulting',
    'other': 'Other',
  };

  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>New Contact Form Submission</Heading>
          <Text style={text}>
            You have received a new contact form submission from <strong>{data.name}</strong>.
          </Text>

          <Section style={section}>
            <Text style={label}>Name:</Text>
            <Text style={value}>{data.name}</Text>
          </Section>

          <Section style={section}>
            <Text style={label}>Email:</Text>
            <Text style={value}>{data.email}</Text>
          </Section>

          {data.company && (
            <Section style={section}>
              <Text style={label}>Company:</Text>
              <Text style={value}>{data.company}</Text>
            </Section>
          )}

          {data.phone && (
            <Section style={section}>
              <Text style={label}>Phone:</Text>
              <Text style={value}>{data.phone}</Text>
            </Section>
          )}

          {data.interest && (
            <Section style={section}>
              <Text style={label}>Area of Interest:</Text>
              <Text style={value}>{interestLabels[data.interest] || data.interest}</Text>
            </Section>
          )}

          <Section style={section}>
            <Text style={label}>Message:</Text>
            <Text style={messageValue}>{data.message}</Text>
          </Section>

          <Text style={footer}>
            Reply directly to this email to respond to {data.name}.
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
  margin: '0 0 24px',
};

const section = {
  margin: '24px 0',
};

const label = {
  color: '#737373',
  fontSize: '14px',
  fontWeight: '600',
  margin: '0 0 8px',
};

const value = {
  color: '#171717',
  fontSize: '16px',
  margin: '0 0 16px',
};

const messageValue = {
  color: '#171717',
  fontSize: '16px',
  margin: '0 0 16px',
  padding: '16px',
  backgroundColor: '#f5f5f5',
  borderRadius: '6px',
  whiteSpace: 'pre-wrap' as const,
};

const footer = {
  color: '#737373',
  fontSize: '14px',
  lineHeight: '20px',
  margin: '32px 0 0',
  paddingTop: '24px',
  borderTop: '1px solid #e5e5e5',
};
