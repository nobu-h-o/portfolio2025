import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chatbot',
  description: 'Chat with an AI assistant on Nobuhiro Oto\'s portfolio',
};

export default function ChatbotLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}