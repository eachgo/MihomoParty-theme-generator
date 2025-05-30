

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    // REMOVE <Navbar /> and <Footer />
    // Just return the children, or wrap them in a simple main tag if needed
    // Assuming the main tag will be handled by Home/index.tsx directly now.
    <>{children}</>
  );
}
