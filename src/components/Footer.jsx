const Footer = () => {
  return (
    <div className="bg-blue-950 text-white w-full rounded-2xl">
      <div className="p-4 md:p-8 flex flex-col md:flex-row items-center justify-center md:justify-evenly gap-4 md:gap-8">
        {/* Logo */}
        <img
          className="w-20 md:w-32 rounded-3xl cursor-pointer"
          src="https://bcassetcdn.com/social/mqq5q1q02g/preview.png"
          alt="Logo"
        />

        {/* Copyright Text */}
        <span className="text-center md:text-left text-sm md:text-2xl">
          <p>
            Made with Love by{" "}
            <span className="text-green-300 font-semibold">SagarBastola</span> &copy; 2026 ||
            All rights reserved
          </p>
        </span>
      </div>
    </div>
  );
};

export default Footer;
