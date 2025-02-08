"use client";

import Image from "next/image";
import PaymentMethodIcon from "../../../../public/assets/my_wallet/PaymentMethodIcon.png";
import Lines from "../../../../public/assets/my_wallet/Lines.png";
import PayPassIcon from "../../../../public/assets/my_wallet/PayPassIcon.png";

const CardSlider: React.FC = () => {
  return (
    <div className="relative w-full h-[220px] bg-gradient-to-br from-[#42307D] to-[#7F56D9] rounded-2xl shadow-lg p-6 overflow-hidden">
      {/* Background Lines */}
      <div className="absolute inset-0 z-40 top-12 right-0">
        <Image src={Lines} alt="Lines" width={100} height={100} layout="responsive" objectFit="cover" className="z-50" />
      </div>

      {/* card bottom */}
      <div className="flex justify-between gap-5 items-center absolute bottom-4 right-3">
        {/* Card Details */}
        <div className=" z-10 text-white ">
          {/* Name and Expiry Date */}
          <div className="flex justify-between items-center">
            <h2 className="text-sm font-medium tracking-widest">ADAM SMITH</h2>
            <span className="text-sm tracking-wider">06/24</span>
          </div>

          {/* Card Number */}
          <div className="text-xl tracking-[0.15em] font-semibold mt-1">
            1234 1234 1234 1234
          </div>
        </div>
        <Image
          src={PaymentMethodIcon}
          alt="Mastercard"
          width={50}
          height={30}
        />
      </div>

      {/* Contactless Icon */}
      <div className="absolute top-5 right-5">
        <Image src={PayPassIcon} alt="PayPassIcon" width={20} height={20} />
      </div>

      {/* Mastercard Logo */}
      {/* <div className="absolute bottom-4 right-5">
        <Image
          src={PaymentMethodIcon}
          alt="Mastercard"
          width={50}
          height={30}
        />
      </div> */}
    </div>
  );
};

export default CardSlider;
// "use client";

// import Image from "next/image";
// import PaymentMethodIcon from "../../../../public/assets/my_wallet/PaymentMethodIcon.png";
// import Lines from "../../../../public/assets/my_wallet/Lines.png";
// import PayPassIcon from "../../../../public/assets/my_wallet/PayPassIcon.png";

// const CardSlider: React.FC = () => {
//   return (
//     <div className="relative w-full h-[220px] bg-gradient-to-br from-[#42307D] to-[#7F56D9] rounded-2xl shadow-lg p-6 overflow-hidden">
//       {/* Background Lines */}
//       <div className="absolute inset-0 z-40 top-12 right-0">
//         <Image src={Lines} alt="Lines" width={100} height={100} layout="responsive" objectFit="cover" className="z-50" />
//       </div>

// {/* Card Details */}
// <div className="relative z-10 text-white">
//   {/* Name and Expiry Date */}
//   <div className="flex justify-between items-center mt-16">
//     <h2 className="text-lg font-medium tracking-widest">ADAM SMITH</h2>
//     <span className="text-md tracking-wider">06/24</span>
//   </div>

//   {/* Card Number */}
//   <div className="mt-4 text-2xl tracking-widest font-semibold">
//     1234 1234 1234 1234
//   </div>
// </div>

//       {/* Contactless Icon */}
//       <div className="absolute top-5 right-5">
//         <Image src={PayPassIcon} alt="PayPassIcon" width={20} height={20} />
//       </div>

//       {/* Mastercard Logo */}
//       <div className="absolute bottom-4 right-5">
//         <Image
//           src={PaymentMethodIcon}
//           alt="Mastercard"
//           width={50}
//           height={30}
//         />
//       </div>
//     </div>
//   );
// };

// export default CardSlider;
