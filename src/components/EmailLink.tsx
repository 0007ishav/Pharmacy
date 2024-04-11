import React from 'react';

interface EmailLinkProps {
  email: string;
}

const EmailLink: React.FC<EmailLinkProps> = ({ email }) => {
  return (
    <a href={`mailto:${email}`} style={{ cursor: 'pointer' }} className="hover:text-green-400 transition-colors duration-300">
      Email ↗️
    </a>
  );
};

export default EmailLink;
