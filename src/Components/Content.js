import Sidebar from "./Content/Sidebar.js";

export default function Content() {
  return (
    <main id="content-container" className="grid grid-cols-12">
      <Sidebar></Sidebar>
    </main>
  );
}
