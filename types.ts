import React from 'react';

export interface ResearchCardProps {
  title: string;
  description: string | React.ReactNode;
}

export interface ProductProps {
  category: string;
  name: string;
  badge: string;
  description: string;
  specs?: string;
}