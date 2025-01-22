import Image from "next/image";
import React from "react";
import Link from "next/link";
import footerLogoImg from "../../../../public/assets/Group 39232.png";

export default function Footer() {
  const site_links = [
    { id: 1, link_name: "About Us", navigate: "/about-us" },
    { id: 2, link_name: "Reviews", navigate: "/reviews" },
    { id: 3, link_name: "Terms of Service", navigate: "/terms-of-service" },
    { id: 4, link_name: "FAQ", navigate: "/faq" },
    { id: 5, link_name: "Contact Us", navigate: "/contact-us" },
  ];

  return (
    <div className="w-full py-6 lg:py-12 flex flex-col justify-center bg-[#2877EA]">
      <div className="w-[80%] mx-auto flex flex-col lg:flex-row gap-5 justify-between pb-12">
        <div className="w-fit h-fit">
          <Link href={"/"}>
            <Image
              src={footerLogoImg}
              alt=""
              className="w-[200px] h-[50px] object-cover"
            />
          </Link>
        </div>

        {/* Site Links */}
        <div className="grid grid-cols-3 lg:grid-cols-2 lg:w-[50%]">
          {site_links.map((link) => (
            <Link
              key={link.id}
              href={link.navigate}
              className="text-sm tracking-wide text-white transition"
            >
              {link.link_name}
            </Link>
          ))}
        </div>
      </div>

      <hr className="w-[80%] mx-auto border border-white" />
      <p className="w-[80%] mx-auto mt-4 text-white">
        C 2024 AltBucks. All right reserved
      </p>
    </div>
  );
}
