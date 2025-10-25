// src/features/home_page/homepage.jsx

import React from 'react';
import HeroBanner from './components/HeroBanner';
import TutorList from './components/TutorList';

const vipTutorsData = [
  { id: 1, name: 'Cô Minh Anh', imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500', avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=50', isOnline: true, isTeaching: false, price: 150, rating: 4.9, subject: 'Toán 12' },
  { id: 2, name: 'Thầy Hoàng', imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500', avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50', isOnline: true, isTeaching: true, price: 200, rating: 5.0, subject: 'Lý 11' },
  { id: 3, name: 'An Nhiên', imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500', avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=50', isOnline: false, isTeaching: false, price: 100, rating: 4.8, subject: 'Hóa 10' },
  { id: 4, name: 'Bảo Trân', imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500', avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50', isOnline: true, isTeaching: false, price: 120, rating: 4.7, subject: 'Tiếng Anh' },
  { id: 5, name: 'Khánh Vy', imageUrl: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?w=500', avatarUrl: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?w=50', isOnline: true, isTeaching: false, price: 130, rating: 4.9, subject: 'Văn' },
  { id: 6, name: 'Đức Mạnh', imageUrl: 'https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?w=500', avatarUrl: 'https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?w=50', isOnline: false, isTeaching: false, price: 180, rating: 4.5, subject: 'Vật Lý 12' },
];
const onlineTutorsData = [
  { id: 7, name: 'Khánh Vy', imageUrl: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?w=500', avatarUrl: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?w=50', isOnline: true, isTeaching: false, price: 130, rating: 4.9, subject: 'Văn' },
  { id: 8, name: 'Cô Minh Anh', imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500', avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=50', isOnline: true, isTeaching: false, price: 150, rating: 4.9, subject: 'Toán 12' },
  { id: 9, name: 'Bảo Trân', imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500', avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50', isOnline: true, isTeaching: false, price: 120, rating: 4.7, subject: 'Tiếng Anh' },
  { id: 10, name: 'Đức Mạnh', imageUrl: 'https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?w=500', avatarUrl: 'https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?w=50', isOnline: true, isTeaching: false, price: 180, rating: 4.5, subject: 'Vật Lý 12' },
];


function HomePage() {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <HeroBanner />
      
      <TutorList 
        title="Top gia sư" 
        tutors={vipTutorsData} 
        layout="scroll" 
      />
      
      <TutorList 
        title="Gia sư đang online" 
        tutors={onlineTutorsData} 
      />
    </div>
  );
}

export default HomePage;