export default function AuthLayout({ children }) {
  return (
    <>
      <div className="grid-container border-y border-border">
        {/* Top row */}
        <div className="md:block hidden border-r border-b border-border"></div>
        <div className="border-b border-border h-10"></div>
        <div className="md:block hidden border-l border-b border-border"></div>

        {/* Middle row */}
        <div className="border-r border-b border-border"></div>
        <div className="grid grid-cols-[15px_1fr_15px] md:grid-cols-[40px_1fr_40px] border-b border-border">
          <div className="border-r border-border tilt-lines"></div>
          <div>
            <div className="h-[83px] down-border"></div>
            {children}
          </div>
          <div className="border-l border-border tilt-lines "></div>
        </div>
        <div className="border-l border-b border-border"></div>

        {/* Bottom row */}
        <div className="md:block hidden border-r border-b border-border"></div>
        <div className="border-b border-border h-[83px]"></div>
        <div className="md:block hidden border-l border-b border-border"></div>
        {/* Bottom row 2 */}
        <div className="md:block hidden border-r border-b border-border"></div>
        <div className="border-b border-border h-10"></div>
        <div className="md:block hidden border-l border-b border-border"></div>
      </div>
    </>
  );
}
