import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import "./BlogCarousel.css";
import { NavLink } from "react-router";

// Component to display a single blog card
const BlogCard = ({ post }) => {
  // const { name, description, image } = post;

  // // Format the date
  // // const date = new Date(publishedAt).toLocaleDateString("en-US", {
  // //   month: "long",
  // //   day: "numeric",
  // //   year: "numeric",
  // // });

  // // Safely get the image URL from the API response
  // const imageUrl = image?.data?.attributes?.url || "placeholder-image-url.jpg";

  const [Hoverd, setHoverd] = useState(false);
  return (
    <div className="blog-card  mx-2 rounded-lg overflow-hidden ">
      <div className="relative">
        <img
          src={`http://localhost:1337${post.image.formats.medium.url}`}
          alt={post.name}
          className="w-full h-[340px] object-cover"
        />
      </div>
      <div className="">
        <p className="text-xl text-red-500 font-semibold my-2">{post.date}</p>
        <h3 className="text-2xl font-bold mb-2 text-gray-800">{post.name}</h3>
        <p className="text-gray-600 text-l  mb-4 line-clamp-3">
          {post.description}
        </p>
        <NavLink to={`blogs/news/${post.documentId}`}>
          <button
            className="text-red-500 font-bold hover:underline"
            onMouseEnter={() => {
              setHoverd(true);
            }}
            onMouseLeave={() => {
              setHoverd(false);
            }}
            style={{ color: Hoverd ? "red" : "black" }}
          >
            READ MORE
          </button>
        </NavLink>
      </div>
    </div>
  );
};

// Custom Arrow Components for the Slider
const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-arrow slick-prev" onClick={onClick}>
      <BsArrowLeft className="text-gray-600 text-[50px] p-4 rounded-full bg-white cursor-pointer" />
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-arrow slick-next" onClick={onClick}>
      <BsArrowRight className="text-gray-600 text-[50px] p-4 rounded-full bg-white cursor-pointer  " />
    </div>
  );
};

// Main Carousel Component
const BlogCarousel = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:1337/api/blogs", {
          params: {
            populate: "*",
          },
        });
        setPosts(response.data.data);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
        setLoading(false);
      }
    };
    fetchPosts();
    console.log(posts);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  if (loading) {
    return <div className="text-center py-20">Loading...</div>;
  }

  return (
    <div className="bg-stone-100 py-20 my-30 flex items-center justify-center">
      <div className="container mx-auto px-4 relative">
        <h2 className="text-5xl font-bold text-center mb-8">Our Latest Blog</h2>
        <Slider {...settings}>
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BlogCarousel;
