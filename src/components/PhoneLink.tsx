'use client'

interface PhoneLinkProps {
  phoneNumber: string;
}

const PhoneLink: React.FC<PhoneLinkProps> = ({ phoneNumber }) => {
  const handleClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <p onClick={handleClick} style={{ cursor: 'pointer' }}>
      Phone Number ↗️
    </p>
  );
};

export default PhoneLink;
