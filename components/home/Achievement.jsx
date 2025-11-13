export default function Achievement() {
  return (
    <div className="grid-container  border-y border-border">
      <div className="md:block hidden border-r border-b border-border"></div>
      <div className="grid grid-cols-1 md:grid-cols-[40px_1fr_40px] border-b border-border">
        <div className="md:block hidden border-r border-border tilt-lines"></div>
        <div className="px-4">
          <div className="h-[250px] down-border">Achievement 1</div>
          <div className="h-[400px] down-border">Achievement 2</div>
          <div className="h-[600px]">Achievement 3</div>
        </div>
        <div className="md:block hidden border-l border-border tilt-lines "></div>
      </div>
      <div className="md:block hidden border-l border-b border-border"></div>
    </div>
  );
}
