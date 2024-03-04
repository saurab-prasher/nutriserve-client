import React from "react";

// Placeholder data for blog posts
const blogPosts = [
  {
    id: 1,
    title: "The Benefits of Eating Healthy",
    summary:
      "Discover the long-term benefits of maintaining a healthy diet and how it can improve your overall well-being.",
    date: "March 1, 2024",
  },
  {
    id: 2,
    title: "5 Easy Recipes to Start Your Morning",
    summary:
      "Kickstart your day with these simple and nutritious breakfast ideas.",
    date: "March 5, 2024",
  },
  {
    id: 3,
    title: "Understanding Macronutrients",
    summary:
      "Learn about the roles of proteins, fats, and carbohydrates in your diet.",
    date: "March 10, 2024",
  },
  // Add more blog posts as needed
];

const BlogPage = () => {
  return (
    <div className='bg-gray-100 min-h-screen p-8'>
      <div className='max-w-4xl mx-auto'>
        <h1 className='text-4xl font-bold text-gray-800 mb-12'>
          NutriServe Blog
        </h1>
        {blogPosts.map((post) => (
          <div key={post.id} className='bg-white p-6 rounded-lg shadow-md mb-8'>
            <h2 className='text-2xl font-semibold text-gray-700 mb-3'>
              {post.title}
            </h2>
            <p className='text-gray-600 mb-4'>{post.summary}</p>
            <div className='text-gray-500 text-sm'>{post.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
