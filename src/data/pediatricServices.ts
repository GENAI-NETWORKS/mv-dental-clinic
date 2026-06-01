import { Shield, Syringe, Zap, Pill, Crown, Droplet, Braces, Stethoscope, Smile, Scissors, Moon } from 'lucide-react';

export const pediatricServices = [
  {
    id: 'prev-care',
    title: 'Preventive Care',
    description: 'Oral prophylaxis · Topical fluorides · Dental sealants',
    icon: Shield,
  },
  {
    id: 'caries',
    title: 'Caries Restoration',
    description: 'Primary tooth restoration · Esthetic restorations',
    icon: Zap,
  },
  {
    id: 'trauma',
    title: 'Trauma & Emergency',
    description: 'Fall injuries · Sports injuries · RTA management',
    icon: Stethoscope,
  },
  {
    id: 'pulp',
    title: 'Pulp Therapy',
    description: 'Pulpotomy · Apexification · Root Canal Treatment',
    icon: Syringe,
  },
  {
    id: 'crowns',
    title: 'Crowns',
    description: 'Stainless steel crowns · Esthetic pediatric crowns',
    icon: Crown,
  },
  {
    id: 'extractions',
    title: 'Extractions',
    description: 'Severely carious primary tooth extractions',
    icon: Scissors,
  },
  {
    id: 'space-mgt',
    title: 'Space Management',
    description: 'Space maintainers · Space regainers',
    icon: Braces,
  },
  {
    id: 'habits',
    title: 'Habit Appliances',
    description: 'Habit breaking appliances',
    icon: Smile,
  },
  {
    id: 'ortho',
    title: 'Orthodontics',
    description: 'Fixed appliances · Clear aligners',
    icon: Braces,
  },
  {
    id: 'oral-surgery',
    title: 'Minor Oral Surgery',
    description: 'Frenectomy · Tongue-tie · Mucocele excision',
    icon: Droplet,
  },
  {
    id: 'sedation',
    title: 'Sedation Dentistry',
    description: 'Chairside sedation · NOIS · General Anaesthesia (ECC & special needs children)',
    icon: Moon,
  },
];
