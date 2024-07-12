const Footer = () => {
  return (
    <footer className="pt-8 space-y-4 lg:space-y-0 lg:flex lg:justify-between lg:items-center">
      <p className="text-[#A0AEC0] text-center text-xs">
        @ 2021, Made with ❤️ by
        <span className="text-[#4FD1C5] font-bold"> Creative Tim</span> &
        <span className="text-[#4FD1C5] font-bold"> Simmmple</span> for a better
        web
      </p>

      {/* Foot Links */}
      <ul className="text-[#A0AEC0] flex items-center text-xs gap-x-4 justify-center lg:justify-start">
        <li>Creative Tim</li>
        <li>Simmmple</li>
        <li>Blog</li>
        <li>License</li>
      </ul>
    </footer>
  );
};

export default Footer;
