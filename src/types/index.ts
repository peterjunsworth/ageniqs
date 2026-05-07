export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export interface Product {
  name: string;
  slug: string;
  description: string;
  href: string;
}
