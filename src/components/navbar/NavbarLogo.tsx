const NavbarLogo = () => {
  return (
    <div>
      {/* This will be visible on medium screens and up */}
      <h1 className="text-white font-medium text-lg hidden md:block tracking-wide">
        Kavu Maithri's <span className="text-cyan-400 font-bold">chalknotes</span>
      </h1>
      {/* This will be visible on small screens only */}
      <h1 className="text-white font-medium text-lg block md:hidden">
        <span className="text-cyan-400 font-bold">chalknotes</span>
      </h1>
    </div>
  );
};

export default NavbarLogo;
