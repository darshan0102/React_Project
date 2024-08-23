import React from "react";
import blog from "../assets/blog.jpg";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog3.jpg";
import blog4 from "../assets/blog4.jpg";

const BlogPage = () => {
  return (
    <div>
      <div className="">
        <div>
          <h1 className="mt-10 text-black mb-4 ml-4">Blog</h1>
          <img src={blog} className="ml-4 rounded-lg" />
          <a href="" className="ml-4">
            Smartphone
          </a>
          <h3 className="text-black ml-4">
            What Is a Smartphone? A Mobile Phone and Computer In One Device
          </h3>
          <p className="ml-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            pretium mollis ex, faucibus sit amet. Proin tempor purus ac suscipit
            sagittis …
          </p>
          <p className="ml-4">BY Andrew Feb 27, 2024</p>
        </div>
        <div>
          <img src={blog2} className="ml-4 rounded-lg" />
          <a href="" className="ml-4">
          Swartwatches
          </a>
          <h3 className="text-black ml-4">
            What Is a Smartphone? A Mobile Phone and Computer In One Device
          </h3>
          <p className="ml-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            pretium mollis ex, faucibus sit amet. Proin tempor purus ac suscipit
            sagittis …
          </p>
          <p className="ml-4">BY Andrew Feb 27, 2024</p>
        </div>

        <img src={blog3} className="ml-4 rounded-lg" />
        <a href="" className="ml-4">
          Games
        </a>
        <h3 className="text-black ml-4">
          What Is a Smartphone? A Mobile Phone and Computer In One Device
        </h3>
        <p className="ml-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          pretium mollis ex, faucibus sit amet. Proin tempor purus ac suscipit
          sagittis …
        </p>
        <p className="ml-4">BY Andrew Feb 27, 2024</p>
        <blockquote>
        <div className="bg-blue-200">
        <p className="p-5">
        The rise of smartphones has transformed the way we live, work, and communicate. As of 2023, there are over 4.6 billion active mobile devices worldwide, making it the second most popular form of personal communication device after telephones. In 2021, mobile phones accounted for 90% of the global mobile internet traffic.
        </p>
        </div>
        </blockquote>
        <p className="ml-4">BY Andrew Feb 27, 2024</p>
        </div>
        <div>
          <img src={blog4} className="ml-4 rounded-lg" />
          <a href="" className="ml-4">
          Computer
          </a>
          <h3 className="text-black ml-4">
          New or Refurbished Computer? It's a Matter of Dollars and Sense
          </h3>
          <p className="ml-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            pretium mollis ex, faucibus sit amet. Proin tempor purus ac suscipit
            sagittis …
          </p>
      </div>
    </div>
    
  );
};

export default BlogPage;
