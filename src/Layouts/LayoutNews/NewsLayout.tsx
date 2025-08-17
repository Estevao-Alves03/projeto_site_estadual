// Layouts/NewsLayout.tsx
import SimpleNavbar from "../SimpleNavbar";
import Footer from "../Footer";

function NewsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SimpleNavbar />
      {children}
      <Footer />
    </>
  );
}

export default NewsLayout;