'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { navItems } from '@/app/NavItems/page'; // Ensure this import is correct
import '@/app/DropDown.css';

const DropDown = () => {
  const [heading, setHeading] = useState('');
  const [subHeading, setSubHeading] = useState('');

  return (
    <>
      {navItems.map((link) => (
        <div key={link.name}>
          <div className="px-3 text-left md:cursor-pointer group">
            <h1
              className="py-7 flex justify-between items-center md:pr-0 pr-5 group"
              onClick={() => {
                setHeading(heading !== link.name ? link.name : '');
                setSubHeading('');
              }}
            >
              {link.name}
              <span className="text-xl md:hidden inline">
                <ion-icon
                  name={`${heading === link.name ? 'chevron-up' : 'chevron-down'}`}
                ></ion-icon>
              </span>
              <span className="text-xl md:mt-1 md:ml-2 md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                <ion-icon name="chevron-down"></ion-icon>
              </span>
            </h1>
            {link.submenu && (
              <div>
                <div className="absolute top-20 hidden group-hover:md:block hover:md:block">
                  <div className="py-3">
                    <div className="w-4 h-4 left-3 absolute mt-1 bg-gray-600 rotate-45"></div>
                  </div>
                  <div className="bg-gray-600 p-12 grid grid-cols-1 gap-10">
                    {link.sublinks.map((mysublinks) => (
                      <div key={mysublinks.Head}>
                        <h1 className="text-lg font-semibold">{mysublinks.Head}</h1>
                        {mysublinks.sublink.map((slink) => (
                          <li key={slink.name} className="text-sm text-white my-2.5">
                            <Link href={slink.link}>
                              {slink.name} {/* Display the name of the link */}
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div className={`${heading === link.name ? 'md:hidden' : 'hidden'}`}>
            {/* sublinks */}
            {link.sublinks.map((slinks) => (
              <div key={slinks.Head}>
                <div>
                  <h1
                    onClick={() =>
                      setSubHeading(subHeading !== slinks.Head ? slinks.Head : '')
                    }
                    className="py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center"
                  >
                    {slinks.Head}
                    <span className="text-xl md:mt-1 md:ml-2 inline">
                      <ion-icon
                        name={`${subHeading === slinks.Head ? 'chevron-up' : 'chevron-down'}`}
                      ></ion-icon>
                    </span>
                  </h1>
                  <div className={`${subHeading === slinks.Head ? 'md:hidden' : 'hidden'}`}>
                    {slinks.sublink.map((slink) => (
                      <li key={slink.name} className="py-3 pl-14">
                        <Link href={slink.link}>
                          {slink.name} {/* Display the name of the link */}
                        </Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default DropDown;
