import { useNavigate } from "react-router";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      
      {/* HERO SECTION */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT */}
        <div>
          <p className="text-violet-600 font-semibold tracking-wide uppercase mb-3">
            Welcome to BlogSphere
          </p>

          <h1 className="text-5xl font-extrabold text-stone-800 leading-tight">
            Share Ideas. <br />
            Inspire People.
          </h1>

          <p className="mt-6 text-stone-600 text-lg leading-relaxed">
            Explore articles from authors around the world,
            publish your own thoughts, and engage with a growing
            blogging community.
          </p>

          <div className="flex gap-4 mt-8">
            <button
              onClick={() => navigate("/register")}
              className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-lg font-medium transition"
            >
              Get Started
            </button>

            <button
              onClick={() => navigate("/login")}
              className="border border-stone-300 hover:border-violet-500 hover:text-violet-600 px-6 py-3 rounded-lg font-medium transition"
            >
              Login
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="bg-white rounded-3xl shadow-lg p-8 border border-stone-200">
          
          <div className="space-y-5">
            
            <div className="border-b pb-4">
              <p className="text-sm text-violet-600 font-medium">
                TECHNOLOGY
              </p>

              <h3 className="text-xl font-bold text-stone-800 mt-1">
                The Future of AI in Web Development
              </h3>

              <p className="text-stone-500 text-sm mt-2">
                Explore how AI tools are transforming the
                developer workflow and modern applications.
              </p>
            </div>

            <div className="border-b pb-4">
              <p className="text-sm text-violet-600 font-medium">
                PROGRAMMING
              </p>

              <h3 className="text-xl font-bold text-stone-800 mt-1">
                Why MERN Stack Still Matters in 2026
              </h3>

              <p className="text-stone-500 text-sm mt-2">
                Understand why developers continue choosing
                MongoDB, Express, React, and Node.js.
              </p>
            </div>

            <div>
              <p className="text-sm text-violet-600 font-medium">
                WEB DEVELOPMENT
              </p>

              <h3 className="text-xl font-bold text-stone-800 mt-1">
                Building Responsive Modern Interfaces
              </h3>

              <p className="text-stone-500 text-sm mt-2">
                Learn UI/UX principles for creating elegant
                and scalable frontend applications.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FEATURES */}
      <div className="grid md:grid-cols-3 gap-6 mt-20">
        
        <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
          <div className="text-3xl mb-4">✍️</div>

          <h3 className="text-xl font-bold text-stone-800 mb-2">
            Publish Articles
          </h3>

          <p className="text-stone-600 leading-relaxed">
            Create, edit, and manage articles with a smooth
            writing experience.
          </p>
        </div>

        <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
          <div className="text-3xl mb-4">💬</div>

          <h3 className="text-xl font-bold text-stone-800 mb-2">
            Interact & Comment
          </h3>

          <p className="text-stone-600 leading-relaxed">
            Readers can engage with articles and share their
            perspectives through comments.
          </p>
        </div>

        <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
          <div className="text-3xl mb-4">🚀</div>

          <h3 className="text-xl font-bold text-stone-800 mb-2">
            Modern Platform
          </h3>

          <p className="text-stone-600 leading-relaxed">
            Built with React, Zustand, MongoDB, Tailwind CSS,
            Render, and Vercel.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;