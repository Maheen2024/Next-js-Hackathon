import React, { useState } from 'react';

const RentalProcess: React.FC = () => {
  const [selectedMethod, setSelectedMethod] = useState<string>('creditCard');

  return (
    <div className="bg-gray-100 p-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <BillingInfo />
          <RentalInfo />
          <PaymentMethod selectedMethod={selectedMethod} setSelectedMethod={setSelectedMethod} />
          <ConfirmationRental />
        </div>
        <RentalSummary />
      </div>
    </div>
  );
};

const BillingInfo: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Billing Info</h2>
        <span className="text-sm text-gray-500">Step 1 of 4</span>
      </div>
      <p className="text-sm text-gray-500 mb-8">Please enter your billing info</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
          <input
            type="text"
            placeholder="Your name"
            className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
          <input
            type="text"
            placeholder="Phone number"
            className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Address</label>
          <input
            type="text"
            placeholder="Address"
            className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Town / City</label>
          <input
            type="text"
            placeholder="Town or city"
            className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
  );
};

const RentalInfo: React.FC = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[20px] font-bold text-gray-800 leading-[150%]">Rental Info</h2>
        <span className="text-[14px] font-medium text-gray-500 leading-[150%]">Step 2 of 4</span>
      </div>
      <p className="text-[14px] text-gray-500 mb-6 leading-[150%]">Please select your rental date</p>
      <div className="space-y-6">
        <div>
          <div className="flex items-center mb-2">
            <input type="radio" name="rentalType" id="pickUp" className="mr-2" />
            <label htmlFor="pickUp" className="text-[16px] font-semibold text-gray-800">Pick - Up</label>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-[16px] text-gray-600 mb-1">Locations</label>
              <select className="w-full p-2 border rounded bg-gray-50 text-gray-600">
                <option>Select your city</option>
              </select>
            </div>
            <div>
              <label className="block text-[16px] text-gray-600 mb-1">Date</label>
              <select className="w-full p-2 border rounded bg-gray-50 text-gray-600">
                <option>Select your date</option>
              </select>
            </div>
            <div>
              <label className="block text-[16px] text-gray-600 mb-1">Time</label>
              <select className="w-full p-2 border rounded bg-gray-50 text-gray-600">
                <option>Select your time</option>
              </select>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center mb-2">
            <input type="radio" name="rentalType" id="dropOff" className="mr-2" />
            <label htmlFor="dropOff" className="text-[16px] font-semibold text-gray-800">Drop - Off</label>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-[16px] text-gray-600 mb-1">Locations</label>
              <select className="w-full p-2 border rounded bg-gray-50 text-gray-600">
                <option>Select your city</option>
              </select>
            </div>
            <div>
              <label className="block text-[16px] text-gray-600 mb-1">Date</label>
              <select className="w-full p-2 border rounded bg-gray-50 text-gray-600">
                <option>Select your date</option>
              </select>
            </div>
            <div>
              <label className="block text-[16px] text-gray-600 mb-1">Time</label>
              <select className="w-full p-2 border rounded bg-gray-50 text-gray-600">
                <option>Select your time</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PaymentMethod: React.FC<{ selectedMethod: string, setSelectedMethod: (method: string) => void }> = ({ selectedMethod, setSelectedMethod }) => {
  const styles = {
    container: "max-w-xl mx-auto p-4",
    header: "flex justify-between items-center mb-4",
    title: "text-xl font-semibold",
    step: "text-sm text-gray-500",
    description: "text-gray-500 mb-6",
    card: "bg-white shadow-md rounded-lg p-6",
    radioLabel: "flex items-center cursor-pointer",
    radioInput: "form-radio text-blue-600",
    radioText: "ml-2 text-lg font-medium",
    radioImage: "ml-auto h-6",
    inputGroup: "mt-4 grid grid-cols-2 gap-4",
    input: "border rounded-lg p-2 w-full",
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Payment Method</h2>
        <span className={styles.step}>Step 3 of 4</span>
      </div>
      <p className={styles.description}>Please enter your payment method</p>
      <div className={styles.card}>
        <div className="mb-4">
          <label className={styles.radioLabel}>
            <input
              type="radio"
              name="paymentMethod"
              value="creditCard"
              checked={selectedMethod === 'creditCard'}
              onChange={() => setSelectedMethod('creditCard')}
              className={styles.radioInput}
            />
            <span className={styles.radioText}>Credit Card</span>
            <img
              src="https://dashboard.codeparrot.ai/api/assets/Z1WcTowTRzcMVVsK"
              alt="Visa and MasterCard"
              className={styles.radioImage}
            />
          </label>
          {selectedMethod === 'creditCard' && (
            <div className={styles.inputGroup}>
              <input
                type="text"
                placeholder="Card number"
                className={styles.input}
              />
              <input
                type="text"
                placeholder="DD / MM / YY"
                className={styles.input}
              />
              <input
                type="text"
                placeholder="Card holder"
                className={styles.input}
              />
              <input
                type="text"
                placeholder="CVC"
                className={styles.input}
              />
            </div>
          )}
        </div>
        <div className="mb-4">
          <label className={styles.radioLabel}>
            <input
              type="radio"
              name="paymentMethod"
              value="paypal"
              checked={selectedMethod === 'paypal'}
              onChange={() => setSelectedMethod('paypal')}
              className={styles.radioInput}
            />
            <span className={styles.radioText}>PayPal</span>
            <img
              src="https://dashboard.codeparrot.ai/api/assets/Z1WcTowTRzcMVVsL"
              alt="PayPal"
              className={styles.radioImage}
            />
          </label>
        </div>
        <div className="mb-4">
          <label className={styles.radioLabel}>
            <input
              type="radio"
              name="paymentMethod"
              value="bitcoin"
              checked={selectedMethod === 'bitcoin'}
              onChange={() => setSelectedMethod('bitcoin')}
              className={styles.radioInput}
            />
            <span className={styles.radioText}>Bitcoin</span>
            <img
              src="https://dashboard.codeparrot.ai/api/assets/Z1WcTowTRzcMVVsM"
              alt="Bitcoin"
              className={styles.radioImage}
            />
          </label>
        </div>
      </div>
    </div>
  );
};

const ConfirmationRental: React.FC = () => {
  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-lg">
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">Confirmation</h1>
        <p className="text-sm text-gray-500">We are getting to the end. Just few clicks and your rental is ready!</p>
      </div>
      <p className="text-right text-sm text-gray-400 mb-6">Step 4 of 4</p>
      <div className="mb-4">
        <label className="flex items-center bg-gray-100 p-4 rounded-md mb-2">
          <input type="checkbox" className="mr-2" />
          <span className="text-gray-800">I agree with sending an Marketing and newsletter emails. No spam, promissed!</span>
        </label>
        <label className="flex items-center bg-gray-100 p-4 rounded-md">
          <input type="checkbox" className="mr-2" />
          <span className="text-gray-800">I agree with our terms and conditions and privacy policy.</span>
        </label>
      </div>
      <button className="bg-blue-600 text-white py-3 px-5 rounded-md mb-6">Rent Now</button>
      <div className="flex items-center mb-2">
        <img src="https://dashboard.codeparrot.ai/api/assets/Z1WcTowTRzcMVVsN" alt="Secure" width="32" height="32" className="mr-2" />
        <h2 className="text-lg font-semibold text-gray-900">All your data are safe</h2>
      </div>
      <p className="text-sm text-gray-400">We are using the most advanced security to provide you the best experience ever.</p>
    </div>
  );
};

const RentalSummary: React.FC = () => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-2">Rental Summary</h2>
      <p className="text-sm text-gray-500 mb-4">
        Prices may change depending on the length of the rental and the price of your rental car.
      </p>
      <div className="flex items-center mb-4">
        <img
          src="https://dashboard.codeparrot.ai/api/assets/Z1WcT4wTRzcMVVsO"
          alt="Car"
          className="w-32 h-28 rounded-md mr-4"
        />
        <div>
          <h3 className="text-lg font-semibold">Nissan GT – R</h3>
          <div className="flex items-center">
            <div className="flex items-center text-yellow-500">
              <span>★ ★ ★ ★ ☆</span>
            </div>
            <span className="text-sm text-gray-500 ml-2">440+ Reviewer</span>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 pt-4">
        <div className="flex justify-between mb-2">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-semibold">$80.00</span>
        </div>
        <div className="flex justify-between mb-4">
          <span className="text-gray-600">Tax</span>
          <span className="font-semibold">$0</span>
        </div>
        <div className="flex justify-between items-center mb-4">
          <input
            type="text"
            placeholder="Apply promo code"
            className="border border-gray-300 rounded-md p-2 w-full mr-2"
          />
          <button className="bg-blue-500 text-white rounded-md px-4 py-2">
            Apply now
          </button>
        </div>
        <div className="border-t border-gray-200 pt-4">
          <div className="flex justify-between">
            <span className="text-lg font-semibold">Total Rental Price</span>
            <span className="text-2xl font-bold">$80.00</span>
          </div>
          <p className="text-sm text-gray-500">
            Overall price and includes rental discount
          </p>
        </div>
      </div>
    </div>
  );
};

export default RentalProcess;
