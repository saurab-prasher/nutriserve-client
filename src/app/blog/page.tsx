"use client";
import React from "react";
import { useState, useEffect } from "react";

const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/blogPosts"); // Replace with your API endpoint
        const data = await response.json();
        setBlogPosts(data);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='bg-gray-100 min-h-screen p-8'>
      <div className='max-w-4xl mx-auto'>
        <h1 className='text-4xl font-bold text-gray-800 mb-12'>
          NutriServe Blog
        </h1>
        {blogPosts.map((post: any) => (
          <div
            key={post?._id}
            className='bg-white p-6 rounded-lg shadow-md mb-8'
          >
            <h2 className='text-2xl font-semibold text-gray-700 mb-3'>
              {post?.title}
            </h2>
            <p className='text-gray-600 mb-4'>{post?.summary}</p>
            <div className='text-gray-500 text-sm'>{post?.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
