import React from 'react';
import Image from 'next/image';
import card from '../../../../public/assets/atmcard.png';
import { FaMoneyBill } from 'react-icons/fa';

const SideBar = () => {
  return (
    <div className='flex flex-col gap-4 text-black'>
      <div className='flex flex-col gap-2 items-center justify-center bg-[#cac4c4] rounded-lg p-3'>
        <h3 className='font-semibold text-[24px]'>My Cards</h3>
        <Image src={card} alt='atm card' />
      </div>
      <div className='flex gap-2 w-f'>
        <button className='border w-[50%] text-[14px] py-[12px] rounded-md'>
          Add New Card
        </button>
        <button className='border w-[50%] text-[14px] py-[12px] rounded-md'>
          Edit Card
        </button>
      </div>
      <div className='w-full flex items-center justify-center gap-2 py-2 text-white bg-blue-500 rounded-md'>
        <button className='flex items-center gap-2 p-7 text-[23px]'>
          <span className=''>
            <FaMoneyBill />
          </span>{' '}
          <span className=''>Withdraw</span>
        </button>
      </div>
    </div>
  );
};

export default SideBar;
