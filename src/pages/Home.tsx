export default function Home() {
  return (
    <div className="bg-white text-gray-800">
      {/* 🌟 Hero Section */}
      <section id="home" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Empowering Students, Guiding Parents, Transforming Futures.
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          At JJLearnings, we nurture confidence, creativity, and focus in every learner.
        </p>
        <button className="mt-8 bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-200 transition">
          Get Started
        </button>
      </section>

      {/* 🌿 About Us */}
      <section id="about" className="py-16 px-6 md:px-20 text-center bg-gray-50">
        <h2 className="text-3xl font-bold text-blue-700 mb-6">About Us</h2>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed">
          At <span className="font-semibold">JJLearnings</span>, we nurture students, parents, and young professionals 
          through holistic training and counseling. From building academic focus to enhancing communication and creativity, 
          we believe in shaping confident individuals ready for life’s challenges.
        </p>
      </section>

     {/* 📘 Our Programs */}
<section id="programs" className="py-20 px-6 md:px-20 bg-gradient-to-b from-blue-50 to-white text-center">
  <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-12">
    Our Programs
  </h2>

  <div className="grid md:grid-cols-3 gap-8">
    {/* 🎯 Counseling Services */}
    <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-xl transition duration-300 border-t-4 border-blue-400">
      <div className="text-5xl mb-4">💬</div>
      <h3 className="text-2xl font-semibold mb-4 text-gray-800">Counseling Services</h3>
      <ul className="text-gray-600 text-left list-disc list-inside space-y-2">
        <li>Student Counseling – focus issues, stress, career planning</li>
        <li>Parent Counseling – guidance, handling academic pressure</li>
        <li>Career & Academic Planning</li>
        <li>Life & Emotional Well-being</li>
      </ul>
    </div>

    {/* 🎓 Student Training */}
    <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-xl transition duration-300 border-t-4 border-green-400">
      <div className="text-5xl mb-4">🎓</div>
      <h3 className="text-2xl font-semibold mb-4 text-gray-800">Student Training</h3>
      <ul className="text-gray-600 text-left list-disc list-inside space-y-2">
        <li>Study Skills & Academic Success</li>
        <li>Communication & Confidence Building</li>
        <li>Interview & Career Preparation</li>
        <li>Technical Training (IT & professional skills)</li>
      </ul>
    </div>

    {/* 🎨 Creativity Labs */}
    <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-xl transition duration-300 border-t-4 border-purple-400">
      <div className="text-5xl mb-4">🎨</div>
      <h3 className="text-2xl font-semibold mb-4 text-gray-800">Creativity Labs</h3>
      <ul className="text-gray-600 text-left list-disc list-inside space-y-2">
        <li>Creative & Fundamental Skills</li>
        <li>Handwriting Improvement</li>
        <li>Memory Building & Concentration</li>
        <li>Arts & Crafts for Creativity</li>
      </ul>
    </div>
  </div>

  {/* Optional call-to-action */}
  <div className="mt-12">
  <button
    onClick={() => {
      const section = document.getElementById("detailed-programs");
      section?.scrollIntoView({ behavior: "smooth" });
    }}
    className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition"
  >
    Explore All Programs
  </button>
</div>

</section>

{/* 🧾 Detailed Programs */}
<section
  id="detailed-programs"
  className="py-20 px-6 md:px-20 bg-white text-center"
>
  <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-10">
    Explore All Programs
  </h2>

  <div className="space-y-12 max-w-4xl mx-auto text-left">
    {/* ✍ Handwriting Improvement */}
    <div className="p-8 bg-blue-50 rounded-2xl shadow">
      <h3 className="text-2xl font-semibold text-blue-700 mb-3">
        ✍ Handwriting Improvement
      </h3>
      <p className="text-gray-700 leading-relaxed">
        A specialized program to help children and students develop clear,
        confident, and presentable handwriting that boosts academic performance
        and self-esteem.
      </p>
    </div>

    {/* 🧠 Memory Building */}
    <div className="p-8 bg-green-50 rounded-2xl shadow">
      <h3 className="text-2xl font-semibold text-green-700 mb-3">
        🧠 Memory Building & Concentration
      </h3>
      <p className="text-gray-700 leading-relaxed">
        Engaging exercises, brain games, and study techniques designed to
        strengthen memory, focus, and recall ability for students of all levels.
      </p>
    </div>

    {/* 🎨 Arts & Crafts */}
    <div className="p-8 bg-purple-50 rounded-2xl shadow">
      <h3 className="text-2xl font-semibold text-purple-700 mb-3">
        🎨 Arts & Crafts for Creativity
      </h3>
      <p className="text-gray-700 leading-relaxed">
        Creative activities that inspire imagination, problem-solving, and
        innovation while providing a fun outlet for self-expression.
      </p>
    </div>

    {/* 🗣 Communication Skills */}
    <div className="p-8 bg-yellow-50 rounded-2xl shadow">
      <h3 className="text-2xl font-semibold text-yellow-700 mb-3">
        🗣 Communication & Confidence Building
      </h3>
      <p className="text-gray-700 leading-relaxed">
        Structured training programs that help students and young adults
        communicate effectively, build confidence, and overcome stage fear.
      </p>
    </div>

    {/* 💼 Interview & Career */}
    <div className="p-8 bg-pink-50 rounded-2xl shadow">
      <h3 className="text-2xl font-semibold text-pink-700 mb-3">
        💼 Interview & Career Preparation
      </h3>
      <p className="text-gray-700 leading-relaxed">
        Focused workshops and mock sessions to prepare students and professionals
        for interviews, presentations, and professional communication.
      </p>
    </div>

    {/* 💻 Technical Training */}
    <div className="p-8 bg-teal-50 rounded-2xl shadow">
      <h3 className="text-2xl font-semibold text-teal-700 mb-3">
        💻 Technical Training
      </h3>
      <p className="text-gray-700 leading-relaxed">
        Practical IT and professional skill training programs to help learners
        adapt to modern tools, software, and career paths.
      </p>
    </div>
  </div>
</section>

      {/* 💎 Why Choose Us */}
<section id="why-choose-us" className="py-16 px-6 md:px-20 bg-blue-50 text-center">
  <h2 className="text-3xl font-bold text-blue-700 mb-10">Why Choose Us</h2>

  <div className="grid md:grid-cols-3 gap-8 text-left">
    <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
      <h3 className="text-xl font-semibold text-blue-600 mb-3">Holistic Approach</h3>
      <p>We focus on academic, emotional, and creative growth to nurture balanced individuals.</p>
    </div>

    <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
      <h3 className="text-xl font-semibold text-blue-600 mb-3">Personalized Support</h3>
      <p>Each learner receives tailored guidance to match their unique strengths and challenges.</p>
    </div>

    <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
      <h3 className="text-xl font-semibold text-blue-600 mb-3">Expert Mentors</h3>
      <p>Our trainers and counselors are experienced professionals passionate about student growth.</p>
    </div>
  </div>
</section>

{/* 💬 Testimonials */}
<section id="Testimonials" className="py-16 px-6 md:px-20 text-center bg-white">
  <h2 className="text-3xl font-bold text-blue-700 mb-10">What Parents & Students Say</h2>

  <div className="grid md:grid-cols-3 gap-8">
    <div className="bg-gray-50 shadow-md rounded-2xl p-6">
      <p className="italic">“JJLearnings helped my child regain focus and confidence in studies!”</p>
      <p className="mt-4 font-semibold text-blue-600">– Parent of Grade 8 Student</p>
    </div>

    <div className="bg-gray-50 shadow-md rounded-2xl p-6">
      <p className="italic">“The creativity lab was so much fun! I love the art sessions.”</p>
      <p className="mt-4 font-semibold text-blue-600">– Student Participant</p>
    </div>

    <div className="bg-gray-50 shadow-md rounded-2xl p-6">
      <p className="italic">“Their communication program helped me overcome stage fear!”</p>
      <p className="mt-4 font-semibold text-blue-600">– College Student</p>
    </div>
  </div>
</section>

{/* 📞 Contact Us */}
<section id="contact" className="py-16 px-6 md:px-20 bg-gray-50 text-center">
  <h2 className="text-3xl font-bold text-blue-700 mb-10">Contact Us</h2>

  <form className="max-w-xl mx-auto bg-white shadow-lg rounded-2xl p-8 text-left">
    <div className="mb-4">
      <label className="block mb-2 font-semibold">Name</label>
      <input
        type="text"
        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Your Name"
      />
    </div>

    <div className="mb-4">
      <label className="block mb-2 font-semibold">Email</label>
      <input
        type="email"
        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Your Email"
      />
    </div>

    <div className="mb-4">
      <label className="block mb-2 font-semibold">Message</label>
      <textarea
        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Your Message"
        rows={4}
      ></textarea>
    </div>

    <button
      type="submit"
      className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
    >
      Send Message
    </button>
  </form>

  <div className="mt-10">
    <p className="text-lg mb-3 font-semibold">Or reach us directly:</p>
    <p>📞 +91-98765-43210</p>
    <a
      href="https://wa.me/919876543210"
      target="_blank"
      className="inline-block mt-4 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition"
    >
      💬 Chat on WhatsApp
    </a>
  </div>
</section>

    </div>
  );
}
