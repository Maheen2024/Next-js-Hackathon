// import React from 'react';

// interface CarCardProps {
//   imageId: string;
//   name: string;
//   type: string;
//   specifications: {
//     fuelCapacity: string;
//     transmission: string;
//     capacity: string;
//   };
//   price: string;
// }

// const CarCard: React.FC<CarCardProps> = ({ imageId, name, type, specifications, price }) => {
//   return (
//     <div className="max-w-xs rounded-lg overflow-hidden shadow-lg p-4 bg-white ">
//       <div className="flex justify-between items-center mb-2 ">
//         <div>
//           <h2 className="text-xl font-bold text-gray-900">{name}</h2>
//           <p className="text-sm text-gray-500">{type}</p>
//         </div>
//         <div className="text-red-500">
//           <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
//             <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
//           </svg>
//         </div>
//       </div>
//       <img className="w-full h-40 object-cover mb-4" src={`https://placeholder.pics/svg?${imageId}`} alt={name} />
//       <div className="flex justify-between text-sm text-gray-600 mb-4">
//         <div className="flex items-center">
//           <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="16" height="16" className="mr-1">
//             <path d="M3 3h18v2H3V3zm0 4h18v2H3V7zm0 4h18v2H3v-2zm0 4h18v2H3v-2zm0 4h18v2H3v-2z" />
//           </svg>
//           {specifications.fuelCapacity}
//         </div>
//         <div className="flex items-center">
//           <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="16" height="16" className="mr-1">
//             <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
//           </svg>
//           {specifications.transmission}
//         </div>
//         <div className="flex items-center">
//           <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="16" height="16" className="mr-1">
//             <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
//           </svg>
//           {specifications.capacity}
//         </div>
//       </div>
//       <div className="flex justify-between items-center">
//         <div className="text-lg font-bold text-gray-900">${price}/day</div>
//         <button className="bg-blue-500 text-white px-4 py-2 rounded">Rent Now</button>
//       </div>
//     </div>
//   );
// };

// const FilterSection: React.FC = () => {
//   return (
//     <div className="flex flex-col bg-white rounded-lg p-4 w-[582px]">
//       <div className="flex items-center space-x-6 mb-4">
//         <div className="flex items-center space-x-2">
//           <img src="https://dashboard.codeparrot.ai/api/assets/Z1WaCIwTRzcMVVr2" alt="mark" className="w-4 h-4" />
//           <span className="text-lg font-semibold text-gray-900">Pick - Up</span>
//         </div>
//       </div>
//       <div className="flex space-x-8">
//         <div className="flex flex-col">
//           <label className="text-sm font-bold text-gray-900">Locations</label>
//           <div className="flex items-center mt-1">
//             <span className="text-xs font-medium text-gray-500">Select your city</span>
//             <img src="https://dashboard.codeparrot.ai/api/assets/Z1WaCIwTRzcMVVr3" alt="arrow-down" className="w-3.5 h-3.5 ml-2" />
//           </div>
//         </div>
//         <div className="flex flex-col">
//           <label className="text-sm font-bold text-gray-900">Date</label>
//           <div className="flex items-center mt-1">
//             <span className="text-xs font-medium text-gray-500">Select your date</span>
//             <img src="https://dashboard.codeparrot.ai/api/assets/Z1WaCIwTRzcMVVr4" alt="arrow-down" className="w-3.5 h-3.5 ml-2" />
//           </div>
//         </div>
//         <div className="flex flex-col">
//           <label className="text-sm font-bold text-gray-900">Time</label>
//           <div className="flex items-center mt-1">
//             <span className="text-xs font-medium text-gray-500">Select your time</span>
//             <img src="https://dashboard.codeparrot.ai/api/assets/Z1WaCYwTRzcMVVr5" alt="arrow-down" className="w-3.5 h-3.5 ml-2" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const AdvertisementBanner: React.FC = () => {
//   return (
//     <div className="bg-[#54a6ff] text-white p-8 rounded-lg flex items-center justify-between">
//       <div className="flex flex-col gap-4">
//         <h1 className="text-[32px] font-semibold leading-[150%] tracking-[-0.96px]">
//           The Best Platform for Car Rental
//         </h1>
//         <p className="text-[16px] font-medium leading-[150%] tracking-[-0.32px]">
//           Ease of doing a car rental safely and reliably. Of course at a low price.
//         </p>
//         <button className="bg-[#3563e9] hover:bg-blue-800 text-white font-semibold py-2 px-5 rounded">
//           Rental Car
//         </button>
//       </div>
//       <img 
//         src="https://dashboard.codeparrot.ai/api/assets/Z1WaCYwTRzcMVVr6" 
//         alt="Car" 
//         className="w-[320px] h-auto rounded-lg"
//       />
//     </div>
//   );
// };

// const CarRentalComponent: React.FC = () => {
//   return (
//     <div className="p-8 bg-gray-100 min-h-screen">
//       <div className="grid grid-cols-2 gap-8 mb-8">
//         <AdvertisementBanner />
//         <AdvertisementBanner />
//       </div>
//       <div className="flex justify-between items-center mb-8">
//         <FilterSection />
//         <div className="flex items-center justify-center bg-blue-500 text-white w-12 h-12 rounded-full">
//           <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
//             <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.66-.67 3.16-1.76 4.24l1.42 1.42C19.07 15.91 20 14.06 20 12c0-4.42-3.58-8-8-8zm-6 8c0-1.66.67-3.16 1.76-4.24L6.34 6.34C4.93 7.75 4 9.6 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3c-3.31 0-6-2.69-6-6z" />
//           </svg>
//         </div>
//         <FilterSection />
//       </div>
//       <div className="mb-4 text-lg font-semibold text-gray-900">Popular Car</div>
//       <div className="grid grid-cols-4 gap-4 mb-8">
//         <CarCard 
//           imageId="35:6863" 
//           name="Koenigsegg" 
//           type="Sport" 
//           specifications={{ fuelCapacity: '90L', transmission: 'Manual', capacity: '2 People' }} 
//           price="99.00" 
//         />
//         <CarCard 
//           imageId="35:6864" 
//           name="Nissan GT - R" 
//           type="Sport" 
//           specifications={{ fuelCapacity: '80L', transmission: 'Manual', capacity: '2 People' }} 
//           price="80.00" 
//         />
//         <CarCard 
//           imageId="35:6865" 
//           name="Rolls - Royce" 
//           type="Sedan" 
//           specifications={{ fuelCapacity: '70L', transmission: 'Manual', capacity: '4 People' }} 
//           price="96.00" 
//         />
//         <CarCard 
//           imageId="35:6864" 
//           name="Nissan GT - R" 
//           type="Sport" 
//           specifications={{ fuelCapacity: '80L', transmission: 'Manual', capacity: '2 People' }} 
//           price="80.00" 
//         />
//       </div>
//       <div className="mb-4 text-lg font-semibold text-gray-900">Recommendation Car</div>
//       <div className="grid grid-cols-4 gap-4 mb-8">
//         <CarCard 
//           imageId="35:6866" 
//           name="All New Rush" 
//           type="SUV" 
//           specifications={{ fuelCapacity: '70L', transmission: 'Manual', capacity: '6 People' }} 
//           price="72.00" 
//         />
//         <CarCard 
//           imageId="35:6867" 
//           name="CR - V" 
//           type="SUV" 
//           specifications={{ fuelCapacity: '80L', transmission: 'Manual', capacity: '6 People' }} 
//           price="80.00" 
//         />
//         <CarCard 
//           imageId="35:6868" 
//           name="All New Terios" 
//           type="SUV" 
//           specifications={{ fuelCapacity: '90L', transmission: 'Manual', capacity: '6 People' }} 
//           price="74.00" 
//         />
//         <CarCard 
//           imageId="35:6867" 
//           name="CR - V" 
//           type="SUV" 
//           specifications={{ fuelCapacity: '80L', transmission: 'Manual', capacity: '6 People' }} 
//           price="80.00" 
//         />
//       </div>
//       <div className="flex justify-center">
//         <button className="bg-blue-500 text-white px-6 py-2 rounded">Show more car</button>
//       </div>
//     </div>
//   );
// };

// export default CarRentalComponent;

import React from 'react';
import Link from 'next/link';
interface CarCardProps {
  imageId: string;
  name: string;
  type: string;
  specifications: {
    fuelCapacity: string;
    transmission: string;
    capacity: string;
  };
  price: string;
}

const CarCard: React.FC<CarCardProps> = ({ imageId, name, type, specifications, price }) => {
  return (
    <div className="max-w-xs rounded-lg overflow-hidden shadow-lg p-4 bg-white">
      <div className="flex justify-between items-center mb-2">
        <div>
          <h2 className="text-xl font-bold text-gray-900">{name}</h2>
          <p className="text-sm text-gray-500">{type}</p>
        </div>
        <div className="text-red-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>
      </div>
      <img className="w-full h-40 object-cover mb-4" src={`https://placeholder.pics/svg?${imageId}`} alt={name} />
      <div className="flex justify-between text-sm text-gray-600 mb-4">
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="16" height="16" className="mr-1">
            <path d="M3 3h18v2H3V3zm0 4h18v2H3V7zm0 4h18v2H3v-2zm0 4h18v2H3v-2zm0 4h18v2H3v-2z" />
          </svg>
          {specifications.fuelCapacity}
        </div>
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="16" height="16" className="mr-1">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
          </svg>
          {specifications.transmission}
        </div>
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="16" height="16" className="mr-1">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
          </svg>
          {specifications.capacity}
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="text-lg font-bold text-gray-900">${price}/day</div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Rent Now</button>
      </div>
    </div>
  );
};

const FilterSection: React.FC = () => {
  return (
    <div className="flex flex-col bg-white rounded-lg p-4 w-full lg:w-[582px]">
      <div className="flex items-center space-x-6 mb-4">
        <div className="flex items-center space-x-2">
          <img src="https://dashboard.codeparrot.ai/api/assets/Z1WaCIwTRzcMVVr2" alt="mark" className="w-4 h-4" />
          <span className="text-lg font-semibold text-gray-900">Pick - Up</span>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:space-x-8">
        <div className="flex flex-col mb-4 lg:mb-0">
          <label className="text-sm font-bold text-gray-900">Locations</label>
          <div className="flex items-center mt-1">
            <span className="text-xs font-medium text-gray-500">Select your city</span>
            <img src="https://dashboard.codeparrot.ai/api/assets/Z1WaCIwTRzcMVVr3" alt="arrow-down" className="w-3.5 h-3.5 ml-2" />
          </div>
        </div>
        <div className="flex flex-col mb-4 lg:mb-0">
          <label className="text-sm font-bold text-gray-900">Date</label>
          <div className="flex items-center mt-1">
            <span className="text-xs font-medium text-gray-500">Select your date</span>
            <img src="https://dashboard.codeparrot.ai/api/assets/Z1WaCIwTRzcMVVr4" alt="arrow-down" className="w-3.5 h-3.5 ml-2" />
          </div>
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-bold text-gray-900">Time</label>
          <div className="flex items-center mt-1">
            <span className="text-xs font-medium text-gray-500">Select your time</span>
            <img src="https://dashboard.codeparrot.ai/api/assets/Z1WaCYwTRzcMVVr5" alt="arrow-down" className="w-3.5 h-3.5 ml-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

const AdvertisementBanner: React.FC = () => {
  return (
    <div className="bg-[#54a6ff] text-white p-8 rounded-lg flex flex-col lg:flex-row items-center justify-between">
      <div className="flex flex-col gap-4">
        <h1 className="text-[24px] md:text-[32px] font-semibold leading-[150%] tracking-[-0.96px]">
          The Best Platform for Car Rental
        </h1>
        <p className="text-[14px] md:text-[16px] font-medium leading-[150%] tracking-[-0.32px]">
          Ease of doing a car rental safely and reliably. Of course at a low price.
        </p>
        <button className="bg-[#3563e9] hover:bg-blue-800 text-white font-semibold py-2 px-5 rounded">
          Rental Car
        </button>
      </div>
      <img
        src="https://dashboard.codeparrot.ai/api/assets/Z1WaCYwTRzcMVVr6"
        alt="Car"
        className="w-full lg:w-[320px] h-auto rounded-lg mt-4 lg:mt-0"
      />
    </div>
  );
};

const CarRentalComponent: React.FC = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <AdvertisementBanner />
        <AdvertisementBanner />
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 space-y-4 lg:space-y-0 lg:space-x-8">
        <FilterSection />
        <div className="flex items-center justify-center bg-blue-500 text-white w-12 h-12 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
            <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.66-.67 3.16-1.76 4.24l1.42 1.42C19.07 15.91 20 14.06 20 12c0-4.42-3.58-8-8-8zm-6 8c0-1.66.67-3.16 1.76-4.24L6.34 6.34C4.93 7.75 4 9.6 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3c-3.31 0-6-2.69-6-6z" />
          </svg>
        </div>
        <FilterSection />
      </div>
      <div className="mb-4 text-lg font-semibold text-gray-900">Popular Car</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
        <CarCard
          imageId="35:6863"
          name="Koenigsegg"
          type="Sport"
          specifications={{ fuelCapacity: '90L', transmission: 'Manual', capacity: '2 People' }}
          price="99.00"
        />
        <CarCard
          imageId="35:6864"
          name="Nissan GT - R"
          type="Sport"
          specifications={{ fuelCapacity: '80L', transmission: 'Manual', capacity: '2 People' }}
          price="80.00"
        />
        <CarCard
          imageId="35:6865"
          name="Rolls - Royce"
          type="Sedan"
          specifications={{ fuelCapacity: '70L', transmission: 'Manual', capacity: '4 People' }}
          price="96.00"
        />
        <CarCard
          imageId="35:6864"
          name="Nissan GT - R"
          type="Sport"
          specifications={{ fuelCapacity: '80L', transmission: 'Manual', capacity: '2 People' }}
          price="80.00"
        />
      </div>
      <div className="mb-4 text-lg font-semibold text-gray-900">Recommendation Car</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
        <CarCard
          imageId="35:6866"
          name="All New Rush"
          type="SUV"
          specifications={{ fuelCapacity: '70L', transmission: 'Manual', capacity: '6 People' }}
          price="72.00"
        />
        <CarCard
          imageId="35:6867"
          name="CR - V"
          type="SUV"
          specifications={{ fuelCapacity: '80L', transmission: 'Manual', capacity: '6 People' }}
          price="80.00"
        />
        <CarCard
          imageId="35:6868"
          name="All New Terios"
          type="SUV"
          specifications={{ fuelCapacity: '90L', transmission: 'Manual', capacity: '6 People' }}
          price="74.00"
        />
        <CarCard
          imageId="35:6867"
          name="CR - V"
          type="SUV"
          specifications={{ fuelCapacity: '80L', transmission: 'Manual', capacity: '6 People' }}
          price="80.00"
        />
      </div>
      <div className="flex justify-center">
      <Link href={"/categories"}>
          <button className="bg-[#3563e9] px-4 py-2 text-white rounded-md mt-5">
            Show More Cars
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CarRentalComponent;
