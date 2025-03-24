export interface ServiceDetails {
  duration: string;
  price: number;
  description: string;
  includes: string[];
  customization?: string[];
  afterCare?: string[];
}

export interface Service {
  id: string;
  category: string;
  name: string;
  price: number;
  duration: number;
  details?: ServiceDetails;
}

export interface Appointment {
  service: Service;
  date: Date;
  time: string;
  name: string;
  phone: string;
  email: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  service: string;
}