import React, { useState } from 'react';
import { MapPin, Wrench, Building2, PhoneCall, CheckCircle2, Navigation } from 'lucide-react';
import { useInsuranceContext } from '../context/InsuranceContext';

const cities = ['Bengaluru', 'Delhi-NCR', 'Mumbai', 'Hyderabad', 'Pune', 'Chennai'];

const networkData = {
  garages: {
    Bengaluru: [
      { name: 'Sample Partner Garage 1', location: 'Bannerghatta Road', distance: '2.4 km', note: 'Cars and SUVs', badge: 'Doorstep pick-up' },
      { name: 'Sample Partner Garage 2', location: 'HSR Layout', distance: '1.8 km', note: 'Hatchbacks and sedans', badge: 'Instant repair' },
      { name: 'Sample Partner Garage 3', location: 'Koramangala', distance: '3.1 km', note: 'Petrol, diesel and EV', badge: 'Priority claim desk' }
    ],
    'Delhi-NCR': [
      { name: 'Sample Partner Garage 1', location: 'Okhla Phase 2', distance: '2.9 km', note: 'Cars and SUVs', badge: 'Doorstep pick-up' },
      { name: 'Sample Partner Garage 2', location: 'Gurugram Sector 18', distance: '4.0 km', note: 'Hatchbacks and sedans', badge: 'Instant repair' },
      { name: 'Sample Partner Garage 3', location: 'Noida Sector 63', distance: '5.2 km', note: 'Petrol, diesel and EV', badge: 'Original parts' }
    ],
    Mumbai: [
      { name: 'Sample Partner Garage 1', location: 'Andheri East', distance: '3.3 km', note: 'Cars and SUVs', badge: 'Instant repair' },
      { name: 'Sample Partner Garage 2', location: 'Thane West', distance: '6.1 km', note: 'Hatchbacks and sedans', badge: 'Priority claim desk' },
      { name: 'Sample Partner Garage 3', location: 'Navi Mumbai', distance: '7.4 km', note: 'Petrol, diesel and EV', badge: 'Doorstep pick-up' }
    ],
    Hyderabad: [
      { name: 'Sample Partner Garage 1', location: 'Banjara Hills', distance: '2.2 km', note: 'Cars and SUVs', badge: 'Priority claim desk' },
      { name: 'Sample Partner Garage 2', location: 'Madhapur', distance: '3.6 km', note: 'Hatchbacks and sedans', badge: 'Doorstep pick-up' },
      { name: 'Sample Partner Garage 3', location: 'Gachibowli', distance: '4.1 km', note: 'Petrol, diesel and EV', badge: 'Instant repair' }
    ],
    Pune: [
      { name: 'Sample Partner Garage 1', location: 'Baner', distance: '2.7 km', note: 'Cars and SUVs', badge: 'Doorstep pick-up' },
      { name: 'Sample Partner Garage 2', location: 'Kothrud', distance: '3.8 km', note: 'Hatchbacks and sedans', badge: 'Original parts' },
      { name: 'Sample Partner Garage 3', location: 'Hinjewadi', distance: '5.0 km', note: 'Petrol, diesel and EV', badge: 'Instant repair' }
    ],
    Chennai: [
      { name: 'Sample Partner Garage 1', location: 'Guindy', distance: '2.0 km', note: 'Cars and SUVs', badge: 'Priority claim desk' },
      { name: 'Sample Partner Garage 2', location: 'Sholinganallur', distance: '4.4 km', note: 'Hatchbacks and sedans', badge: 'Doorstep pick-up' },
      { name: 'Sample Partner Garage 3', location: 'Adyar', distance: '3.2 km', note: 'Petrol, diesel and EV', badge: 'Instant repair' }
    ]
  },
  hospitals: {
    Bengaluru: [
      { name: 'Sample Partner Hospital 1', location: 'Old Airport Road', distance: '3.5 km', note: 'Multi-specialty care', badge: '100% cashless' },
      { name: 'Sample Partner Hospital 2', location: 'Bannerghatta Road', distance: '2.8 km', note: 'Emergency and trauma', badge: 'Admission in 15 min' },
      { name: 'Sample Partner Hospital 3', location: 'Cunningham Road', distance: '4.2 km', note: 'Cardiology and orthopaedics', badge: 'Pre-auth desk' }
    ],
    'Delhi-NCR': [
      { name: 'Sample Partner Hospital 1', location: 'Saket', distance: '3.0 km', note: 'Multi-specialty care', badge: '100% cashless' },
      { name: 'Sample Partner Hospital 2', location: 'Gurugram Sector 38', distance: '5.5 km', note: 'Emergency and trauma', badge: 'Pre-auth desk' },
      { name: 'Sample Partner Hospital 3', location: 'Okhla', distance: '4.1 km', note: 'Cardiology and orthopaedics', badge: 'Admission in 15 min' }
    ],
    Mumbai: [
      { name: 'Sample Partner Hospital 1', location: 'Andheri West', distance: '3.4 km', note: 'Multi-specialty care', badge: '100% cashless' },
      { name: 'Sample Partner Hospital 2', location: 'Bandra West', distance: '5.2 km', note: 'Emergency and trauma', badge: 'Admission in 15 min' },
      { name: 'Sample Partner Hospital 3', location: 'Powai', distance: '6.0 km', note: 'Cardiology and orthopaedics', badge: 'Pre-auth desk' }
    ],
    Hyderabad: [
      { name: 'Sample Partner Hospital 1', location: 'Jubilee Hills', distance: '2.6 km', note: 'Multi-specialty care', badge: '100% cashless' },
      { name: 'Sample Partner Hospital 2', location: 'Somajiguda', distance: '3.9 km', note: 'Emergency and trauma', badge: 'Pre-auth desk' },
      { name: 'Sample Partner Hospital 3', location: 'Secunderabad', distance: '6.3 km', note: 'Cardiology and orthopaedics', badge: 'Admission in 15 min' }
    ],
    Pune: [
      { name: 'Sample Partner Hospital 1', location: 'Sassoon Road', distance: '3.1 km', note: 'Multi-specialty care', badge: '100% cashless' },
      { name: 'Sample Partner Hospital 2', location: 'Sangamvadi', distance: '3.7 km', note: 'Emergency and trauma', badge: 'Admission in 15 min' },
      { name: 'Sample Partner Hospital 3', location: 'Kothrud', distance: '4.8 km', note: 'Cardiology and orthopaedics', badge: 'Pre-auth desk' }
    ],
    Chennai: [
      { name: 'Sample Partner Hospital 1', location: 'Thousand Lights', distance: '2.9 km', note: 'Multi-specialty care', badge: '100% cashless' },
      { name: 'Sample Partner Hospital 2', location: 'Manapakkam', distance: '5.6 km', note: 'Emergency and trauma', badge: 'Pre-auth desk' },
      { name: 'Sample Partner Hospital 3', location: 'Adyar', distance: '3.5 km', note: 'Cardiology and orthopaedics', badge: 'Admission in 15 min' }
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
      <div className="w-full px-[4%]">
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
              Choose a city to preview how partner garage and hospital listings will look. Listings shown here are samples for illustration only.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3 max-w-md">
              <button
                onClick={() => setActiveTab('garages')}
                className={`text-left rounded-2xl p-4 border transition ${isGarage ? 'bg-gray-950 text-white border-gray-950' : 'bg-white text-gray-900 border-gray-200 hover:border-gray-400'}`}
              >
                <Wrench className={`w-5 h-5 ${isGarage ? 'text-indigo-300' : 'text-indigo-600'}`} />
                <div className="text-2xl font-black mt-2">Garages</div>
                <div className={`text-xs font-semibold ${isGarage ? 'text-gray-400' : 'text-gray-500'}`}>Sample listings</div>
              </button>
              <button
                onClick={() => setActiveTab('hospitals')}
                className={`text-left rounded-2xl p-4 border transition ${!isGarage ? 'bg-gray-950 text-white border-gray-950' : 'bg-white text-gray-900 border-gray-200 hover:border-gray-400'}`}
              >
                <Building2 className={`w-5 h-5 ${!isGarage ? 'text-rose-300' : 'text-rose-600'}`} />
                <div className="text-2xl font-black mt-2">Hospitals</div>
                <div className={`text-xs font-semibold ${!isGarage ? 'text-gray-400' : 'text-gray-500'}`}>Sample listings</div>
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
                className="rounded-3xl border border-gray-200 bg-slate-50/60 hover:bg-white hover:border-indigo-300 hover:shadow-lg transition-all p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center gap-4 group"
              >
                <div className="flex items-start sm:items-center gap-4 flex-1 min-w-0">
                <div className={`w-12 h-12 shrink-0 rounded-2xl flex items-center justify-center ${isGarage ? 'bg-indigo-50 text-indigo-600' : 'bg-rose-50 text-rose-600'}`}>
                  {isGarage ? <Wrench className="w-5 h-5" /> : <Building2 className="w-5 h-5" />}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h4 className="text-sm sm:text-base font-extrabold text-gray-900 group-hover:text-indigo-600 transition-colors">{item.name}</h4>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-2 py-0.5 rounded-full whitespace-nowrap">{item.badge}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1.5 flex flex-wrap items-center gap-x-1.5 gap-y-0.5">
                    <MapPin className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                    <span>{item.location}, {selectedCity}</span>
                    <span className="font-semibold whitespace-nowrap">• {item.distance} away</span>
                  </p>
                  <p className="text-xs text-indigo-700 font-semibold mt-1">{item.note}</p>
                </div>
                </div>

                <div className="flex flex-row gap-2 shrink-0 w-full sm:w-auto">
                  <button
                    onClick={() => showToast('Demo listing: no call is placed.')}
                    aria-label={`Call ${item.name}`}
                    className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-600 hover:bg-gray-950 hover:text-white hover:border-gray-950 transition"
                  >
                    <PhoneCall className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => showToast('Demo only: booking is not available.')}
                    className="flex-1 sm:flex-none px-4 h-10 rounded-full bg-gray-950 hover:bg-[#6332ec] text-white text-xs font-bold flex items-center justify-center gap-1.5 transition whitespace-nowrap"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" /> Book visit
                  </button>
                </div>
              </div>
            ))}

            <button
              onClick={() => showToast('Demo only: location search is not available.')}
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
