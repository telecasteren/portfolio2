export const OpenMobileMenu = ({
  menuOpen,
  openMenu,
}: {
  menuOpen: boolean;
  openMenu: () => void;
}) => {
  return (
    <button
      type="button"
      className="w-fit p-2 text-text md:hidden"
      onClick={openMenu}
      aria-label={menuOpen ? "Close menue" : "Open menu"}
      aria-controls="mobile-menu"
      aria-expanded={menuOpen}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        role="img"
        aria-label="Menu icon"
        aria-hidden="true"
      >
        {menuOpen ? (
          <>
            <line x1="6" y1="6" x2="18" y2="18" />
            <line x1="6" y1="18" x2="18" y2="6" />
          </>
        ) : (
          <>
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </>
        )}
      </svg>
    </button>
  );
};
