export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Doctor {
  id: string;
  name: string;
  specialization: string;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  text: string;
  author: string;
}

export interface NavItem {
  label: string;
  path: string;
}
