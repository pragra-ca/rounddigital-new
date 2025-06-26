import React from 'react';
import {
    blog1,
    blog2,
    blog3,
    blog4,
    blog5,
    blog6
  } from '../constant'

const blogData = [
  {
    tag: 'BRANDING',
    title: 'What is the branding, and what we need it?',
    desc: 'On the other hand, we denounce with righteous indignation and...',
    image: blog1,
  },
  {
    tag: 'TIKTOK',
    title: 'What is the branding, and what we need it?',
    desc: 'On the other hand, we denounce with righteous indignation and...',
    image: blog2,
  },
  {
    tag: 'LOGO DESIGN',
    title: 'What is the branding, and what we need it?',
    desc: 'On the other hand, we denounce with righteous indignation and...',
    image: blog3,
  },
  {
    tag: 'FB',
    title: 'What is the branding, and what we need it?',
    desc: 'On the other hand, we denounce with righteous indignation and...',
    image: blog4,
  },
  {
    tag: 'AI',
    title: 'What is the branding, and what we need it?',
    desc: 'On the other hand, we denounce with righteous indignation and...',
    image: blog5,
  },
  {
    tag: 'NFT',
    title: 'What is the branding, and what we need it?',
    desc: 'On the other hand, we denounce with righteous indignation and...',
    image: blog6,
  },
];

const BlogsCard = () => {
  return (
    <div>
      <div className=" grid md:grid-cols-2 gap-6">
        {blogData.map((item, i) => (
          <div
            key={i}
            className="flex items-center bg-[#1e1e1e] border border-red-500 rounded-[16px] overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.tag}
              className="w-[40%] h-full object-cover rounded-[16px]"
            />
            <div className="p-4 text-white">
              <p className="text-sm text-red-500 font-semibold mb-2">{item.tag}</p>
              <h3 className="font-bold text-lg mb-2 leading-snug">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsCard;
