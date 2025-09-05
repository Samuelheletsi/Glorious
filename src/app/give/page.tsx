'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function GivePage() {
  const router = useRouter();
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
  const [amount, setAmount] = useState('');
  const [phone, setPhone] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');

  const paymentMethods = [
    { name: 'Momo', description: 'Pay via Mobile Money' },
    { name: 'Card', description: 'Pay with Visa/Mastercard' },
    { name: 'Paypal', description: 'Pay via Paypal' },
  ];

  const handlePayment = () => {
    // This is where you would call your payment API
    alert(`Processing ${selectedMethod} payment of $${amount}`);
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        padding: '2rem 1rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#f9f7ff',
      }}
    >
      <h1
        style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          color: '#3b3395',
          marginBottom: '1rem',
          textAlign: 'center',
        }}
      >
        Give / Donate
      </h1>
      <p
        style={{
          fontSize: '1rem',
          color: '#6B21A8',
          marginBottom: '2rem',
          textAlign: 'center',
        }}
      >
        Select your preferred payment method below.
      </p>

      {/* Payment Method Buttons */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          width: '100%',
          maxWidth: '400px',
        }}
      >
        {paymentMethods.map((method) => (
          <button
            key={method.name}
            style={{
              padding: '1rem',
              borderRadius: '0.5rem',
              fontWeight: 600,
              fontSize: '1rem',
              border: '2px solid #3b3395',
              backgroundColor:
                selectedMethod === method.name ? '#3b3395' : '#fff',
              color: selectedMethod === method.name ? '#fff' : '#3b3395',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
            onClick={() => setSelectedMethod(method.name)}
          >
            {method.name}
          </button>
        ))}
      </div>

      {/* Dynamic Form */}
      {selectedMethod && (
        <div
          style={{
            marginTop: '2rem',
            padding: '1.5rem',
            borderRadius: '0.5rem',
            width: '100%',
            maxWidth: '400px',
            backgroundColor: '#fff',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          <h2
            style={{
              fontSize: '1.25rem',
              fontWeight: 'bold',
              color: '#3b3395',
              textAlign: 'center',
            }}
          >
            {selectedMethod} Payment
          </h2>

          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            style={{
              padding: '0.75rem',
              borderRadius: '0.5rem',
              border: '1px solid #ccc',
              width: '100%',
            }}
          />

          {selectedMethod === 'Momo' && (
            <input
              type="tel"
              placeholder="Mobile Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              style={{
                padding: '0.75rem',
                borderRadius: '0.5rem',
                border: '1px solid #ccc',
                width: '100%',
              }}
            />
          )}

          {selectedMethod === 'Card' && (
            <>
              <input
                type="text"
                placeholder="Card Number"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                style={{
                  padding: '0.75rem',
                  borderRadius: '0.5rem',
                  border: '1px solid #ccc',
                  width: '100%',
                }}
              />
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <input
                  type="text"
                  placeholder="Expiry MM/YY"
                  value={expiry}
                  onChange={(e) => setExpiry(e.target.value)}
                  style={{
                    flex: 1,
                    padding: '0.75rem',
                    borderRadius: '0.5rem',
                    border: '1px solid #ccc',
                  }}
                />
                <input
                  type="text"
                  placeholder="CVV"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  style={{
                    flex: 1,
                    padding: '0.75rem',
                    borderRadius: '0.5rem',
                    border: '1px solid #ccc',
                  }}
                />
              </div>
            </>
          )}

          {selectedMethod === 'Paypal' && (
            <input
              type="email"
              placeholder="Paypal Email"
              style={{
                padding: '0.75rem',
                borderRadius: '0.5rem',
                border: '1px solid #ccc',
                width: '100%',
              }}
            />
          )}

          <button
            onClick={handlePayment}
            style={{
              padding: '0.75rem',
              borderRadius: '0.5rem',
              fontWeight: 600,
              backgroundColor: '#6B21A8',
              color: '#fff',
              cursor: 'pointer',
              marginTop: '1rem',
            }}
          >
            Pay Now
          </button>
        </div>
      )}

      <button
        style={{
          marginTop: '2rem',
          padding: '0.5rem 1rem',
          borderRadius: '0.5rem',
          fontWeight: 600,
          border: 'none',
          backgroundColor: '#3b3395',
          color: '#fff',
          cursor: 'pointer',
        }}
        onClick={() => router.push('/')}
      >
        Back to Home
      </button>
    </div>
  );
}
