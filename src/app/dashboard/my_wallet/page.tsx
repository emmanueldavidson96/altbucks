'use client';
import React, { useEffect } from 'react';
import Header from '../../components/My_Wallet_Component/Header';
import Main from '../../components/My_Wallet_Component/Main';
import SideBar from '../../components/My_Wallet_Component/SideBar';
import { useAuthStore } from '@/store/authStore';

const page = () => {
  const {isAuthenticated, user, profileAuth} = useAuthStore();

  useEffect(() => {
    profileAuth()
  }, [])
  return (
    <div className='bg-white min-h-screen overflow-hidden pb-6'>
      <nav >
        <Header />
      </nav>
      <main className='grid grid-cols-3 gap-4 px-20'>
        <div className='col-span-2'>
          <Main user={user}/>
        </div>
        <div >
          <SideBar />
        </div>
      </main>
    </div>
  );
};

export default page;
