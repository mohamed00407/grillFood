import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function BlogsNews() {
  const params = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `http://localhost:1337/api/blogs/${params.id}`,
          {
            params: {
              populate: "*",
            },
          }
        );
        setPost(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, [params.id]);

  if (loading) {
    return <div className="text-center py-20">Loading...</div>;
  }

  // Handle case where post is not found
  if (!post) {
    return <div className="text-center py-20">Post not found.</div>;
  }
  const { name, image, description } = post;
  const imageUrl = image.formats.medium.url;
  console.log(imageUrl);
  return (
    <div className="bg-stone-100 min-h-screen font-sans">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Post Header */}
        <header className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{name}</h1>
          <p className="text-gray-500 text-sm">
            <span className="font-semibold">MAY 12, 2025</span>
            <span className="mx-2">·</span>
            <span className="underline">Customers Developers</span>
          </p>
        </header>

        {/* Main Post Image */}
        <div className="mb-8">
          <img
            src={`http://localhost:1337${imageUrl}`}
            alt="Delicious Pizza and Burger"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Post Content */}
        <article className="prose lg:prose-xl mx-auto">
          {/* Section 1 */}
          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
              What makes fashion an exquisite form of art?
            </h2>
            <p className="text-gray-700 leading-relaxed">{description}</p>
          </section>

          {/* Section 2 */}
          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
              What role does fashion play in our lives?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              From the runway to the streets, fashion permeates every aspect of
              our lives. It is a reflection of society, culture, and
              individuality. Fashion has the power to communicate social status,
              political beliefs, and personal style. It serves as a form of
              self-expression, allowing us to showcase our unique personalities.
              For many, fashion is a source of joy and entertainment. The
              fashion industry, with its dazzling runway shows and avant-garde
              designs, captivates audiences worldwide. The vibrant colors,
              luxurious fabrics, and innovative silhouettes make fashion an art
              form that is a feast for the eyes.
            </p>
          </section>

          {/* Blockquote */}
          <blockquote className="border-l-4 border-gray-400 pl-4 py-2 my-8 text-gray-600 italic">
            <p>
              Fashion is a timeless art form because it transcends trends and
              fads. It is an ever-evolving expression of culture and
              individuality. Just as a classic novel or a masterpiece painting
              withstands the test of time, certain fashion pieces become iconic
              symbols of style and elegance.
            </p>
          </blockquote>

          {/* Section 3 */}
          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
              How can fashion empower individuals?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Fashion has the power to uplift our spirits and boost our
              confidence. It can be a tool for self-discovery and
              self-empowerment. By experimenting with different styles and
              trends, we can explore different facets of our personality and
              find what truly resonates with us.
            </p>
          </section>

          {/* Gallery Images */}
          <section className="my-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Working on a laptop"
                className="w-full h-auto rounded-lg shadow-md"
              />
              <img
                src="https://via.placeholder.com/300x200"
                alt="Pen on a blank notebook"
                className="w-full h-auto rounded-lg shadow-md"
              />
              <img
                src="https://via.placeholder.com/300x200"
                alt="Typing on a laptop"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
              What is the future of fashion?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The future of fashion is a fusion of technology, sustainability,
              and individuality. As the world becomes more conscious of the
              environmental impact of their choices, fashion designers are
              embracing eco-friendly materials and ethical practices. The future
              of fashion is a harmonious blend of creativity, technology, and
              social responsibility. To appreciate the beauty of a fashion piece
              is to understand its story.
            </p>
          </section>
        </article>
      </div>

      {/* Stay Connected Section */}
      <footer className="bg-white py-12">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
          <p className="text-gray-600 mb-6">
            Don't miss out on any of our latest creations and articles. Be sure
            to subscribe to our newsletter and follow us on social media. By
            staying connected, you'll never miss a beat in the world of fashion.
          </p>
        </div>
      </footer>
    </div>
  );
}
