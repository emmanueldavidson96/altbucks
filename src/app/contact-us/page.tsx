import React from 'react';
import chat from '../asset/chat.svg';
import Image from 'next/image';
import dialer from '../asset/dialer.svg';
import mail from '../asset/mail.svg';
import location from '../asset/location.svg';
import blue from '../asset/blue-arrow.png';
import white from '../asset/white-arrow.png';

export default function contactUs() {
  return (
    <>
      <main>
        {/* hero section */}
        <section className='contact-hero flex justify-center items-center'>
          <div className='term-of-service'></div>
          <div className='contact-overlay-div flex flex-col justify-center items-center text-center'>
            <h6 className='text-[#F2994A] text-[48px] font-bold'>Contact Us</h6>
            <p className='text[##FFFFFF]'>
              Ask a question, place an order or just send us feedback - we’re
              here for you.
            </p>
          </div>
        </section>

        {/* card section */}
        <section className='px-6 pb-7 lg:mt-[-3rem] text-black relative z-10'>
          <div className='card-container flex flex-wrap items-center justify-around lg:mt-[-60px]'>
            <div className='card flex flex-col gap-4 lg:items-start bg-white border-2 p-3 rounded-md'>
              <Image src={chat} alt='chat' />
              <div>
                <h6 className='text-[16px] font-bold'>Chat with Us</h6>
                <p className='text-[16px]'>Speak with our friendly team</p>
              </div>
              <button className='border-2 rounded px-2 text-[16px]'>
                sales@altbucks.com
              </button>
            </div>
            <div className='card flex flex-col gap-4 bg-white items-center lg:items-start border-2 p-3 rounded-md'>
              <Image src={mail} alt='chat' />
              <div>
                <h6 className='text-[16px] font-bold'>Chat with Us</h6>
                <p className='text-[16px]'>Speak with our friendly team</p>
              </div>
              <button className='border-2 rounded px-2 text-[16px]'>
                sales@altbucks.com
              </button>
            </div>
            <div className='card flex flex-col gap-4 bg-white items-center lg:items-start border-2 p-3 rounded-md'>
              <Image src={location} alt='chat' />
              <div className='text-center'>
                <h6 className='text-[16px] font-bold'>Chat with Us</h6>
                <p className='text-[16px]'>Speak with our friendly team</p>
              </div>
              <button className='border-2 rounded px-2 text-[16px]'>
                View on googlemaps
              </button>
            </div>
            <div className='card flex flex-col gap-4 bg-white items-center lg:items-start border-2 p-3 rounded-md'>
              <Image src={dialer} alt='chat' />
              <div className='md:text-center'>
                <h6 className='text-[16px] font-bold'>Chat with Us</h6>
                <p className='text-[16px]'>Speak with our friendly team</p>
              </div>
              <button className='border-2 rounded px-2 text-[16px]'>
                +(233) 555 555 555
              </button>
            </div>
          </div>
        </section>

        <section className='lg:pt-20 lg:px-32'>
          <div className='lg:flex items-center justify-between p-4 lg:w-[100%] border-2 rounded-md'>
            <div className='flex flex-col items-start justify-center lg:w-[48%] text-black'>
              <h6 className='text-[20px] font-bold'>Still have questions?</h6>
              <p className='text-[20px] font-bold'>
                Can’t find the answer you’re looking for? Please get in touch.
              </p>
            </div>
            <button className='lg:[30%] btn-6 text-[16px] font-bold'>
              Get In Touch
            </button>
          </div>
        </section>

        <section className='reward-card bg-[#ffffff] border-2 p-3 rounded-xl'>
          <div className='inner-card bg-[#2877EA] lg:flex items-center justify-between w-[100%] rounded-md'>
            <div className='lg:w-[40%]'>
              <h4 className='font-bold'>
                Earn rewards from the comfort of your home.
              </h4>
              <p className='pt-3 '>
                At ALTBUCKS, we make it easy for you to earn real cash online by
                completing simple tasks that fit into your everyday routine.
              </p>
            </div>
            <div className='flex items-center max-[1024px]:justify-center gap-5 max-[1024px]:py-4'>
              <div
                className='flex items-end gap-4 bg-white btn-4'
                role='button'
              >
                <div className='text-[#2877EA]'>Browse Tasks</div>
                <div>
                  <Image src={blue} alt='redirect' />
                </div>
              </div>
              <div
                className='flex items-end gap-4 border-2 border-white btn-5'
                role='button'
              >
                <div className='text-white'>Post Tasks</div>
                <div>
                  <Image src={white} alt='redirect' />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
