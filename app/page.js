import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";
import Sidebar from "./Sidebar";

import styles from "./page.module.css";

export default function Page() {
  return (
    <div className="site container bg-white my-6 py-6 drop-shadow-sm rounded-lg">
      <Header />
      <Nav />
      <Content />
      <Sidebar />
      <Footer />
    </div>
  );
}
