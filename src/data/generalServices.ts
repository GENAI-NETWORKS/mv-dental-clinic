import { Shield, Sparkles, Droplet, Activity, Scissors, Crown, ActivitySquare, Stethoscope, Asterisk } from 'lucide-react';

export const generalServices = [
  {
    id: 'prev-care',
    title: 'Preventive Care',
    description: 'Scaling · Fluorides · Sealants',
    icon: Shield,
  },
  {
    id: 'restorations',
    title: 'Restorations',
    description: 'Caries restoration · Esthetic anterior composites',
    icon: Sparkles,
  },
  {
    id: 'fluorosis',
    title: 'Fluorosis Management',
    description: 'Bleaching · Microabrasion techniques',
    icon: Droplet,
  },
  {
    id: 'rct',
    title: 'Root Canal Treatment',
    description: 'Single/multi-visit RCT',
    icon: Activity,
  },
  {
    id: 'extractions',
    title: 'Extractions',
    description: 'Grossly decayed teeth',
    icon: Scissors,
  },
  {
    id: 'crowns',
    title: 'Crowns & Veneers',
    description: 'Metal · PFM · Zirconia crowns · Veneers',
    icon: Crown,
  },
  {
    id: 'perio',
    title: 'Periodontics',
    description: 'Gingival & periodontal therapies',
    icon: ActivitySquare,
  },
  {
    id: 'oral-surgery',
    title: 'Oral Surgery',
    description: 'Frenectomy · Impacted tooth removal',
    icon: Stethoscope,
  },
  {
    id: 'implants',
    title: 'Implants',
    description: 'Single & multiple tooth implants',
    icon: Asterisk,
  },
];
