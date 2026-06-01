import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '../ui/Button';

const formSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  phone: z.string().min(10, 'Valid phone number is required'),
  email: z.string().email('Valid email is required').optional().or(z.literal('')),
  service: z.string().min(1, 'Please select a service'),
  date: z.string().min(1, 'Preferred date is required'),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export const ContactSection = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    const phoneNumber = '918870185063';
    const text = `*New Appointment Request*
*Name:* ${data.name}
*Phone:* ${data.phone}
*Email:* ${data.email || 'N/A'}
*Service:* ${data.service}
*Date:* ${data.date}
*Message:* ${data.message || 'N/A'}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-24 bg-surface relative overflow-hidden" id="contact">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 rounded-l-full -z-10 transform translate-x-1/2"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-3">Get In Touch</h2>
          <h3 className="text-4xl md:text-5xl font-display font-black text-dark mb-6">
            Book Your Appointment
          </h3>
        </div>

        <div className="flex flex-col-reverse lg:flex-row-reverse gap-12 bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">

          {/* Right (Visual): Contact Info */}
          <div className="w-full lg:w-5/12 bg-dark text-white p-10 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full filter blur-[100px] opacity-30 -z-10"></div>

            <h4 className="text-2xl font-display font-bold mb-8 text-white">Contact Information</h4>

            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-white shrink-0 mt-1" />
                <div>
                  <div className="font-bold mb-1">Address</div>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Mv Dental Clinic, 32, Vidhyalaya Road,<br />
                    Seerangapalayam E St, opp. TRS Kalyana Mandapam,<br />
                    Salem, Tamil Nadu 636007
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-white shrink-0" />
                <div>
                  <div className="font-bold mb-1">Phone</div>
                  <p className="text-white/80 text-sm">88701 85063</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-white shrink-0" />
                <div>
                  <div className="font-bold mb-1">Email</div>
                  <p className="text-white/80 text-sm">mvdentalpedo@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 rounded-xl p-6 border border-white/10 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-5 h-5 text-white" />
                <h5 className="font-bold text-white">Working Hours</h5>
              </div>
              <ul className="space-y-2 text-sm text-white/80">
                <li className="flex justify-between items-start">
                  <span>Mon - Sat</span>
                  <span className="text-right">10:00 AM - 2:00 PM<br/>4:30 PM - 8:30 PM</span>
                </li>
                <li className="flex justify-between text-red-400 font-medium">
                  <span>Sunday</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right: Form */}
          <div className="w-full lg:w-7/12 p-10 md:p-12">
            <h4 className="text-2xl font-display font-bold text-dark mb-6">Request an Appointment</h4>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-dark mb-2">Full Name *</label>
                  <input {...register('name')} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-surface" placeholder="John Doe" />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-bold text-dark mb-2">Phone Number *</label>
                  <input {...register('phone')} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-surface" placeholder="+91 98765 43210" />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-dark mb-2">Service Type *</label>
                  <select {...register('service')} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-surface">
                    <option value="">Select a service</option>
                    <option value="pediatric">Pediatric Dentistry</option>
                    <option value="general">General Dentistry</option>
                    <option value="consultation">General Consultation</option>
                  </select>
                  {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-bold text-dark mb-2">Preferred Date *</label>
                  <input type="date" {...register('date')} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-surface" />
                  {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date.message}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-dark mb-2">Message / Complaint</label>
                <textarea {...register('message')} rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-surface" placeholder="How can we help you?"></textarea>
              </div>

              <Button type="submit" variant="accent" size="lg" className="w-fit shadow-lg shadow-accent/20">
                Request Appointment
              </Button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};
