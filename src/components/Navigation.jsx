function Navigation() {
  const navItems = [
    { id: "#about", label: "About" },
    { id: "#projects", label: "Projects" },
    { id: "#contact", label: "Contact" },
  ];
  return (
    <nav className="flex justify-between text-2xl py-5 ">
      <a href="#" className=" font-semibold hover:text-blue-700">
        Cedy
      </a>
      <ul className="flex gap-5">
        {navItems.map((item) => (
          <li key={item.id}>
            <a href={item.id} className="hover:text-blue-700">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
