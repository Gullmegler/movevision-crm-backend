const translations = {
  en: {
    title: 'Services Offered',
    headers: ['Service', 'Price', 'Unit'],
    units: {
      'per hour': 'per hour',
      'per month': 'per month',
      'per item': 'per item',
      'per load': 'per load',
      'per service': 'per service',
      'custom': 'custom'
    },
    services: {
      'Moving Labor': 'Moving Labor',
      'Packing Service': 'Packing Service',
      'Storage Service': 'Storage Service',
      'Furniture Disassembly': 'Furniture Disassembly',
      'Waste Removal': 'Waste Removal',
      'Piano Moving': 'Piano Moving',
      'Move-out Cleaning': 'Move-out Cleaning',
      'Other': 'Other'
    }
  },
  no: {
    title: 'Tilgjengelige Tjenester',
    headers: ['Tjeneste', 'Pris', 'Enhet'],
    units: {
      'per hour': 'per time',
      'per month': 'per måned',
      'per item': 'per enhet',
      'per load': 'per lass',
      'per service': 'per tjeneste',
      'custom': 'annet'
    },
    services: {
      'Moving Labor': 'Flyttehjelp',
      'Packing Service': 'Pakketjeneste',
      'Storage Service': 'Lagringstjeneste',
      'Furniture Disassembly': 'Demontering av møbler',
      'Waste Removal': 'Søppelfjerning',
      'Piano Moving': 'Flytting av piano',
      'Move-out Cleaning': 'Flyttevask',
      'Other': 'Annet'
    }
  }
};

const locale = navigator.language.startsWith('no') ? 'no' : 'en';
const t = translations[locale];
