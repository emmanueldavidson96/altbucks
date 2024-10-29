import React from 'react';
import blue from '../asset/blue-arrow.png'
import white from '../asset/white-arrow.png'
import Image from 'next/image';

const page = () => {
  return (
    <>
      <main>
        <section className='hero-section flex justify-center items-center'>
          <div className='term-of-service'></div>
          <div className='overlay-div flex justify-center items-center text-center'>
            <p className='text-[#F2994A]'>Terms Of Service</p>
          </div>
        </section>

        <section className='p-3 md:p-16'>
          <h5 className='text-[#828282] text-[24px] font-bold'>
            AGREEMENT TO TERMS
          </h5>
          <p className='text-[#828282] text-[20px] font-normal py-6'>
            Welcome to <span className='text-[#F2994A]'>ALTBUCKS</span>! By
            accessing or using our platform, you agree to be bound by our Terms
            of Service, which govern your use of the site and its features.
            These terms outline the conditions under which you may participate
            in tasks, earn rewards, and receive payments. They also detail
            important guidelines around account usage, eligibility, payment
            processes, and referral programs. We are committed to transparency,
            and it's important that you fully understand your rights and
            obligations when using our platform. By agreeing to these terms, you
            confirm that you will use{' '}
            <span className='text-[#F2994A]'>ALTBUCKS</span> in compliance with
            all applicable laws and our platform rules. Please take the time to
            read through our Terms of Service carefully to ensure that your
            experience with us remains smooth, fair, and enjoyable.
          </p>
        </section>

        <section className='px-3 md:px-16'>
          <div>
            <h5 className='text-[#828282] text-[24px] font-bold'>
              USER REPRESENTATIONS
            </h5>
            <p className='text-[#828282] text-[20px] font-normal'>
              By using this site, you represent and warrant that:
            </p>
          </div>
          <ol className='list-decimal text-[#828282] text-[20px] font-normal md:py-6 md:px-5'>
            <li>
              All registration information you provide is accurate, current, and
              complete;
            </li>
            <li>
              You will maintain and promptly update such information as needed;
            </li>
            <li>
              You have legal capacity to agree to and comply with these Terms of
              Service;
            </li>
            <li>
              You are not a minor in the jurisdiction in which you reside;
            </li>
            <li>
              You will not access site through automated or non-human methods,
              such as bots, scripts, or other automated tools.
            </li>
          </ol>
        </section>

        <section className='px-3 md:p-16 text-[#828282] text-[20px] font-normal'>
          <p>
            If any of this informaton provided to be false , inaccurate,
            outdated, or incomplete, we reserve the right to<br/> suspend or
            terminate your account and deny future access to the site(or any
            part of it).
          </p>
        </section>

        <section className='text-[18px] text-[#BBBBBB] italic px-16'>
          <p>For any questions or clarifications regarding the terms, feel free to contact our support team.</p>
        </section>
        <section className='flex items-center gap-5 px-16 pt-7'>
          <button className='btn-1 text-[14px]'>Decline</button>
          <button className='btn-3'>I agree with terms</button>
        </section>

        <section className='mx-7 md:mx-20 lg:mx-52 mt-28 bg-[#ffffff] border-2 p-2'>
            <div className='bg-[#2877EA] p-2 md:p-10 lg:p-20 lg:flex items-center justify-between w-[100%]'>
              <div className='lg:w-[40%]'>
                <h4 className='text-[29.46px] font-bold'>Earn rewards from the comfort of your home.</h4>
                <p className='pt-6'>At ALTBUCKS, we make it easy for you to earn real cash online by completing simple tasks that fit into your everyday routine.</p>
              </div>
              <div className='flex items-center gap-5'>
                <div className='flex items-center gap-4 bg-white' role='button'>
                  <div className='text-black'>Browse tasks</div>
                  <div><Image src={blue} alt='redirect'/></div>
                </div>
                <div className='flex items-center gap-4 border-2 border-white ' role='button'>
                  <div className='text-black'>Browse tasks</div>
                  <div><Image src={white} alt='redirect'/></div>
                </div>
              </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default page;
