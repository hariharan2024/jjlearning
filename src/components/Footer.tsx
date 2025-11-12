export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="container mx-auto text-center text-sm">
        <p>© {new Date().getFullYear()} JJLearnings. All rights reserved.</p>
        <p>Empowering Students, Guiding Parents, Transforming Futures.</p>
      </div>
    </footer>
  );
}
