import React from 'react'
import { FaMobile } from "react-icons/fa6";
import { AiOutlineCopyright } from "react-icons/ai";
import { FiArrowUpRight } from "react-icons/fi";

const page = () => {
  return (
    <div>

      <div className='flex justify-between px-20 py-9'>
        {/* LOGO */}
        <div>
          ALTBUCKS
        </div>

        {/* Navigations */}
        <nav className='flex items-center'>
          <ul className='flex gap-5'>
            <li>About Us</li>
            <li>Reviews</li>
            <li>Terms of Service</li>
            <li>Contact Us</li>
          </ul>
        </nav>

        {/* AUTHENTICATION */}
        <div className='flex gap-5'>
          <button className='border border-black px-3 py-2 rounded-md '>Log In</button>
          <button className='bg-blue-600 px-5 py-2 rounded-md text-white'>Sign Up</button>
        </div>
      </div>


      <div className='bg-blue-600 p-40'>
        <div className='text-center '>
          <h2 className='text-3xl text-orange-400 font-bold'>Frequently Asked Questions</h2>
          <p className='text-white pt-5'>Check the answers to common queries</p>
        </div>
      </div>


      <div>

        {/* FREQUENTLY ASKED QUESTIONS */}
        <div className='w-3/4 m-auto my-20'>
          <div className='flex flex-col lg:flex-row gap-5 my-5 lg:my-10'>
            <div className='flex gap-4 w-2/4 rounded-lg shadow-lg shadow-gray-300 p-3'>
              <div className='bg-gray-300 text-customBlue h-fit p-1 rounded-lg'>
                <FaMobile size={20} />
              </div>
              <div>
                <h3 className='text-customBlue font-bold text-lg lg:text-xl'>What is Alt Bucks?</h3>
                <p className='mt-3 text-sm lg:text-base'>Alt Bucks is a platform where users can earn rewards by completing various tasks, such as taking surveys, watching videos, and engaging with content.</p>
              </div>
            </div>
            <div className='flex gap-4 w-2/4 rounded-lg shadow-lg shadow-gray-300 p-3'>
              <div className='bg-gray-300 text-customBlue h-fit p-1 rounded-lg'>
                <FaMobile size={20} />
              </div>
              <div>
                <h3 className='text-customBlue font-bold text-lg lg:text-xl'>How do I earn with Alt Bucks?</h3>
                <p className='mt-3 text-sm lg:text-base'>You can earn by completing tasks such as filling out surverys, watching videos, trying out apps, or participating in offers. Each task has a specific reward.</p>
              </div>
            </div>
          </div>

          <div className='flex flex-col lg:flex-row gap-5 my-5 lg:my-10'>
            <div className='flex gap-4 w-2/4 rounded-lg shadow-lg shadow-gray-300 p-3'>
              <div className='bg-gray-300 text-customBlue h-fit p-1 rounded-lg'>
                <FaMobile size={20} />
              </div>
              <div>
                <h3 className='text-customBlue font-bold text-lg lg:text-xl'>How do I track my earnings?</h3>
                <p className='mt-3 text-sm lg:text-base'>You can track your earnings by logging into your account and viewing your "Earnings Dashboard", which shows completed tasks and accumulated rewards.</p>
              </div>
            </div>
            <div className='flex gap-4 w-2/4 rounded-lg shadow-lg shadow-gray-300 p-3'>
              <div className='bg-gray-300 text-customBlue h-fit p-1 rounded-lg'>
                <FaMobile size={20} />
              </div>
              <div>
                <h3 className='text-customBlue font-bold text-lg lg:text-xl'>How are my earnings paid out?</h3>
                <p className='mt-3 text-sm lg:text-base'>You can redeem your earnings through options like PayPal, gift cards, or direct bank transfers. The available payment methods may vary depending on your location.</p>
              </div>
            </div>
          </div>
          

          <div className='flex flex-col lg:flex-row gap-5 my-5 lg:my-10'>
            <div className='flex gap-4 w-2/4 rounded-lg shadow-lg shadow-gray-300 p-3'>
              <div className='bg-gray-300 text-customBlue h-fit p-1 rounded-lg'>
                <FaMobile size={20} />
              </div>
              <div>
                <h3 className='text-customBlue font-bold text-lg lg:text-xl'>Can I use Alt Bucks on mobile?</h3>
                <p className='mt-3 text-sm lg:text-base'>Yes, Alt Bucks is fully accessible through mobile browsers, and we also offer a dedicated mobile app for an even smoother experience.</p>
              </div>
            </div>
            <div className='flex gap-4 w-2/4 rounded-lg shadow-lg shadow-gray-300 p-3'>
              <div className='bg-gray-300 text-customBlue h-fit p-1 rounded-lg'>
                <FaMobile size={20} />
              </div>
              <div>
                <h3 className='text-customBlue font-bold text-lg lg:text-xl'>Is Alt Bucks available worldwide?</h3>
                <p className='mt-3 text-sm lg:text-base'>Yes, Alt Bucks is available in most countries, though some tasks or offers may be region-specific.</p>
              </div>
            </div>
          </div>

          <div className='flex flex-col lg:flex-row gap-5 my-5 lg:my-10'>
            <div className='flex gap-4 w-2/4 rounded-lg shadow-lg shadow-gray-300 p-3'>
              <div className='bg-gray-300 text-customBlue h-fit p-1 rounded-lg'>
                <FaMobile size={20} />
              </div>
              <div>
                <h3 className='text-customBlue font-bold text-lg lg:text-xl'>Is there a referral program?</h3>
                <p className='mt-3 text-sm lg:text-base'>Yes, you can earn extra rewards by referring friends to Alt Bucks. For each referral that signs up and completes tasks, you'll earn bonus points.</p>
              </div>
            </div>
            <div className='flex gap-4 w-2/4 rounded-lg shadow-lg shadow-gray-300 p-3'>
              <div className='bg-gray-300 text-customBlue h-fit p-1 rounded-lg'>
                <FaMobile size={20} />
              </div>
              <div>
                <h3 className='text-customBlue font-bold text-lg lg:text-xl'>Can I have multiple accounts?</h3>
                <p className='mt-3 text-sm lg:text-base'>No, users are only allowed to have one Alt Bucks account. Creating multiple accounts may result in suspension or banning from the platform.</p>
              </div>
            </div>
          </div>

          <div className='flex flex-col lg:flex-row gap-5 my-5 lg:my-10'>
            <div className='flex flex-1 gap-4 w-2/4 rounded-lg shadow-lg shadow-gray-300 p-3'>
              <div className='bg-gray-300 text-customBlue h-fit p-1 rounded-lg'>
                <FaMobile size={20} />
              </div>
              <div className='flex flex-col justify-between h-full'>
                <h3 className='text-customBlue font-bold text-lg lg:text-xl'>Is my Info safe?</h3>
                <p className='mt-3 text-sm lg:text-base'>
                  Yes, we take data privacy seriously. Your information is stored securely, and we never share personal details with third parties without your consent.
                </p>
              </div>
            </div>

            <div className='flex flex-1 gap-4 w-2/4 rounded-lg shadow-lg shadow-gray-300 p-3'>
              <div className='bg-gray-300 text-customBlue h-fit p-1 rounded-lg'>
                <FaMobile size={20} />
              </div>
              <div className='flex flex-col justify-between h-full'>
                <h3 className='text-customBlue font-bold text-lg lg:text-xl'>Is there an age limit?</h3>
                <p className=' text-sm lg:text-base'>
                  You must be 18+ to join. Under 18 may need parental consent, depending on local laws.
                </p>
              </div>
            </div>
          </div>


          <div className='border rounded-2xl mt-20'>
            <div className='flex justify-between bg-customBlue mx-5 my-7 px-7 py-10 rounded-xl'>
              <div className='w-2/5'>
                <h2 className='text-2xl text-white w-3/4'>Earn rewards from the comfort of your home.</h2>
                <p className='text-white text-sm mt-3'>At ALTBUCKS, we make it easy for you to earn real cash online by completing simple tasks that fit into your everyday routine.</p>
              </div>
              <div className='w-2/5 flex items-center gap-5'>
                <div className='bg-white px-2 py-6 rounded-lg w-44 text-customBlue flex items-center gap-5'>
                  <p>Browse Tasks</p>
                  <FiArrowUpRight />
                </div>
                <div className='text-white border border-white px-2 py-6 rounded-lg w-44 flex items-center gap-5'>
                  <p>Post Tasks</p>
                  <FiArrowUpRight />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>


      <div className='bg-customBlue'>
        {/* FOOTER */}
        <div className='flex justify-between w-3/4 m-auto py-10'>
          <div>
            <h2 className='text-white'>ALTBUCKS</h2>
          </div>
          <div>
            <ul className='flex flex-col gap-5'>
              <li className='text-white'>About Us</li>
              <li className='text-white'>Contact Us</li>
              <li className='text-white'>View Reviews</li>
            </ul>
          </div>

          <div>
            <ul className='flex flex-col gap-5'>
              <li className='text-white'>Terms of Service</li>
              <li className='text-white'>FAQ</li>
            </ul>
          </div>
        </div>

        <div className="w-3/4 m-auto py-3 flex items-center gap-2 border-t border-white ">
          <AiOutlineCopyright className="text-white mr-1" />
          <p className="text-white">2024 AltBucks. All rights reserved</p>
        </div>

      </div>
    </div>
  )
}

export default page