import React, { useState } from 'react';
import { MapPin, Wrench, Building2, PhoneCall, CheckCircle2, Navigation } from 'lucide-react';
import { useInsuranceContext } from '../context/InsuranceContext';

const cities = ['Bengaluru', 'Delhi-NCR', 'Mumbai', 'Hyderabad', 'Pune', 'Chennai'];

const networkData = {
  garages: {
    Bengaluru: [
      { name: 'Kalyani Motors (Maruti Suzuki)', location: 'Bannerghatta Road', distance: '2.4 km', note: 'Maruti Suzuki, Nexa', badge: 'Doorstep pick-up', contact: '080-4912-3400' },
      { name: 'Prerana Motors (Tata)', location: 'HSR Layout', distance: '1.8 km', note: 'Tata EV and petrol/diesel', badge: 'Instant repair', contact: '080-6712-4500' },
      { name: 'Hyundai Motor Plaza', location: 'Koramangala', distance: '3.1 km', note: 'All Hyundai models', badge: 'Priority claim desk', contact: '080-2553-8900' }
    ],
    'Delhi-NCR': [
      { name: 'Jasper Auto (Kia)', location: 'Okhla Phase 2', distance: '2.9 km', note: 'Kia Seltos, Sonet, Carens', badge: 'Doorstep pick-up', contact: '011-4155-2200' },
      { name: 'Sai Service (Maruti Suzuki)', location: 'Gurugram Sector 18', distance: '4.0 km', note: 'Maruti Suzuki, Nexa', badge: 'Instant repair', contact: '0124-455-8800' },
      { name: 'Mahindra Body Care', location: 'Noida Sector 63', distance: '5.2 km', note: 'Mahindra SUVs', badge: 'Original parts', contact: '0120-678-4100' }
    ],
    Mumbai: [
      { name: 'Wasan Motors (Tata)', location: 'Andheri East', distance: '3.3 km', note: 'Tata cars and EVs', badge: 'Instant repair', contact: '022-4890-1100' },
      { name: 'Kia Prime Service', location: 'Thane West', distance: '6.1 km', note: 'All Kia models', badge: 'Priority claim desk', contact: '022-6120-3300' },
      { name: 'Hyundai Plaza Vashi', location: 'Navi Mumbai', distance: '7.4 km', note: 'All Hyundai models', badge: 'Doorstep pick-up', contact: '022-2789-5500' }
    ],
    Hyderabad: [
      { name: 'Kun Auto (Honda)', location: 'Banjara Hills', distance: '2.2 km', note: 'Honda City, Amaze, Elevate', badge: 'Priority claim desk', contact: '040-6677-1200' },
      { name: 'Ramesh Motors (Maruti Suzuki)', location: 'Madhapur', distance: '3.6 km', note: 'Maruti Suzuki, Nexa', badge: 'Doorstep pick-up', contact: '040-4455-9000' },
      { name: 'Tata Hitech Hub', location: 'Gachibowli', distance: '4.1 km', note: 'Tata EV and ICE', badge: 'Instant repair', contact: '040-3311-7700' }
    ],
    Pune: [
      { name: 'Ventura Motors (Hyundai)', location: 'Baner', distance: '2.7 km', note: 'All Hyundai models', badge: 'Doorstep pick-up', contact: '020-6789-2100' },
      { name: 'Ganga Auto (Toyota)', location: 'Kothrud', distance: '3.8 km', note: 'Toyota Innova, Fortuner', badge: 'Original parts', contact: '020-2544-8800' },
      { name: 'Mahindra Express Service', location: 'Hinjewadi', distance: '5.0 km', note: 'Mahindra SUVs', badge: 'Instant repair', contact: '020-7100-3400' }
    ],
    Chennai: [
      { name: 'Sundaram Motors (Maruti Suzuki)', location: 'Guindy', distance: '2.0 km', note: 'Maruti Suzuki, Nexa', badge: 'Priority claim desk', contact: '044-4220-5500' },
      { name: 'Hyundai Plaza OMR', location: 'Sholinganallur', distance: '4.4 km', note: 'All Hyundai models', badge: 'Doorstep pick-up', contact: '044-6677-3300' },
      { name: 'Tata Adyar Hub', location: 'Adyar', distance: '3.2 km', note: 'Tata cars and EVs', badge: 'Instant repair', contact: '044-2491-6600' }
    ]
  },
  hospitals: {
    Bengaluru: [
      { name: 'Manipal Hospital', location: 'Old Airport Road', distance: '3.5 km', note: 'Multi-specialty, cardiology', badge: '100% cashless', contact: '1800-102-5555' },
      { name: 'Apollo Hospital', location: 'Bannerghatta Road', distance: '2.8 km', note: 'Trauma and oncology', badge: 'Admission in 15 min', contact: '080-2630-4050' },
      { name: 'Fortis Hospital', location: 'Cunningham Road', distance: '4.2 km', note: 'Orthopaedics, surgery', badge: 'Pre-auth desk', contact: '080-4199-4444' }
    ],
    'Delhi-NCR': [
      { name: 'Max Super Speciality', location: 'Saket', distance: '3.0 km', note: 'Cardiac and neuro care', badge: '100% cashless', contact: '011-4055-4055' },
      { name: 'Medanta', location: 'Gurugram Sector 38', distance: '5.5 km', note: 'Multi-specialty', badge: 'Pre-auth desk', contact: '0124-414-1414' },
      { name: 'Fortis Escorts', location: 'Okhla', distance: '4.1 km', note: 'Cardiology', badge: 'Admission in 15 min', contact: '011-4713-5000' }
    ],
    Mumbai: [
      { name: 'Kokilaben Hospital', location: 'Andheri West', distance: '3.4 km', note: 'Multi-specialty', badge: '100% cashless', contact: '022-4269-6969' },
      { name: 'Lilavati Hospital', location: 'Bandra West', distance: '5.2 km', note: 'Emergency and trauma', badge: 'Admission in 15 min', contact: '022-2675-1000' },
      { name: 'Hiranandani Hospital', location: 'Powai', distance: '6.0 km', note: 'Maternity, paediatrics', badge: 'Pre-auth desk', contact: '022-2576-3300' }
    ],
    Hyderabad: [
      { name: 'Apollo Hospitals', location: 'Jubilee Hills', distance: '2.6 km', note: 'Multi-specialty', badge: '100% cashless', contact: '040-2360-7777' },
      { name: 'Yashoda Hospital', location: 'Somajiguda', distance: '3.9 km', note: 'Cardiac and oncology', badge: 'Pre-auth desk', contact: '040-4567-4567' },
      { name: 'KIMS Hospital', location: 'Secunderabad', distance: '6.3 km', note: 'Orthopaedics', badge: 'Admission in 15 min', contact: '040-4488-5000' }
    ],
    Pune: [
      { name: 'Ruby Hall Clinic', location: 'Sassoon Road', distance: '3.1 km', note: 'Multi-specialty', badge: '100% cashless', contact: '020-6645-5100' },
      { name: 'Jehangir Hospital', location: 'Sangamvadi', distance: '3.7 km', note: 'Emergency care', badge: 'Admission in 15 min', contact: '020-6681-9999' },
      { name: 'Sahyadri Hospital', location: 'Kothrud', distance: '4.8 km', note: 'Orthopaedics, neuro', badge: 'Pre-auth desk', contact: '020-6721-3000' }
    ],
    Chennai: [
      { name: 'Apollo Greams Road', location: 'Thousand Lights', distance: '2.9 km', note: 'Multi-specialty', badge: '100% cashless', contact: '044-2829-3333' },
      { name: 'MIOT International', location: 'Manapakkam', distance: '5.6 km', note: 'Orthopaedics, transplant', badge: 'Pre-auth desk', contact: '044-4200-0000' },
      { name: 'Fortis Malar', location: 'Adyar', distance: '3.5 km', note: 'Cardiology', badge: 'Admission in 15 min', contact: '044-4289-2222' }
    ]
  }
};

export default function NetworkLocator() {
  const { showToast } = useInsuranceContext();
  const [activeTab, setActiveTab] = useState('garages');
  const [selectedCity, setSelectedCity] = useState('Bengaluru');

  const currentList = networkData[activeTab][selectedCity];
  const isGarage = activeTab === 'garages';

  return (
    <section className="bg-white py-16 sm:py-20 border-b border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left: controls */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold mb-4 border border-indigo-100">
              <MapPin className="w-3.5 h-3.5 text-indigo-600" />
              <span>Cashless partner network</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-[1.1]">
              Cashless care, <span className="text-[#6332ec]">close to you</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-500 mt-3 font-medium max-w-md">
              Choose your city and find a partner garage or hospital nearby. You pay nothing at the counter.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3 max-w-md">
              <button
                onClick={() => setActiveTab('garages')}
                className={`text-left rounded-2xl p-4 border transition ${isGarage ? 'bg-gray-950 text-white border-gray-950' : 'bg-white text-gray-900 border-gray-200 hover:border-gray-400'}`}
              >
                <Wrench className={`w-5 h-5 ${isGarage ? 'text-indigo-300' : 'text-indigo-600'}`} />
                <div className="text-2xl font-black mt-2">7,200+</div>
                <div className={`text-xs font-semibold ${isGarage ? 'text-gray-400' : 'text-gray-500'}`}>Cashless garages</div>
              </button>
              <button
                onClick={() => setActiveTab('hospitals')}
                className={`text-left rounded-2xl p-4 border transition ${!isGarage ? 'bg-gray-950 text-white border-gray-950' : 'bg-white text-gray-900 border-gray-200 hover:border-gray-400'}`}
              >
                <Building2 className={`w-5 h-5 ${!isGarage ? 'text-rose-300' : 'text-rose-600'}`} />
                <div className="text-2xl font-black mt-2">7,100+</div>
                <div className={`text-xs font-semibold ${!isGarage ? 'text-gray-400' : 'text-gray-500'}`}>Cashless hospitals</div>
              </button>
            </div>

            <div className="mt-6">
              <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">City</div>
              <div className="flex flex-wrap gap-2">
                {cities.map((city) => (
                  <button
                    key={city}
                    onClick={() => {
                      setSelectedCity(city);
                      showToast(`Showing cashless ${activeTab} in ${city}`);
                    }}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold transition ${
                      selectedCity === city
                        ? 'bg-[#6332ec] text-white'
                        : 'bg-gray-50 text-gray-600 border border-gray-200 hover:bg-gray-100'
                    }`}
                  >
                    {city}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: list */}
          <div className="lg:col-span-7 space-y-3">
            {currentList.map((item) => (
              <div
                key={item.name}
                className="rounded-3xl border border-gray-200 bg-slate-50/60 hover:bg-white hover:border-indigo-300 hover:shadow-lg transition-all p-5 flex items-center gap-4 group"
              >
                <div className={`w-12 h-12 shrink-0 rounded-2xl flex items-center justify-center ${isGarage ? 'bg-indigo-50 text-indigo-600' : 'bg-rose-50 text-rose-600'}`}>
                  {isGarage ? <Wrench className="w-5 h-5" /> : <Building2 className="w-5 h-5" />}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h4 className="text-sm sm:text-base font-extrabold text-gray-900 group-hover:text-indigo-600 transition-colors">{item.name}</h4>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-2 py-0.5 rounded-full whitespace-nowrap">{item.badge}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                    {item.location}, {selectedCity} • <span className="font-semibold">{item.distance} away</span>
                  </p>
                  <p className="text-xs text-indigo-700 font-semibold mt-1">{item.note}</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 shrink-0">
                  <button
                    onClick={() => showToast(`Calling ${item.contact}`)}
                    aria-label={`Call ${item.name}`}
                    className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-600 hover:bg-gray-950 hover:text-white hover:border-gray-950 transition"
                  >
                    <PhoneCall className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => showToast(`Cashless visit requested: ${item.name}`)}
                    className="px-4 h-10 rounded-full bg-gray-950 hover:bg-[#6332ec] text-white text-xs font-bold flex items-center justify-center gap-1.5 transition whitespace-nowrap"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" /> Book visit
                  </button>
                </div>
              </div>
            ))}

            <button
              onClick={() => showToast('Locating partners near you...')}
              className="w-full rounded-2xl border border-dashed border-indigo-200 text-indigo-700 text-xs font-bold py-3 flex items-center justify-center gap-2 hover:bg-indigo-50 transition"
            >
              <Navigation className="w-4 h-4" /> Use my current location
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
