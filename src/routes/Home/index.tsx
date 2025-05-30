import Configuration from "components/configuration";
import Info from "components/info";
import { Layout } from "components/layout"; // Import the simplified Layout
import { Showcase } from "components/showcase";

export default function Home() {
  return (
    // We can now directly wrap the content with the main container
    // or keep Layout and it will just render its children
    <Layout> {/* Layout is now just a passthrough */}
      <main className="max-w-7xl mx-auto px-6 my-12">
        <Info />
        <div className="flex flex-col md:flex-row gap-6">
          <Configuration />
          <Showcase />
        </div>
      </main>
    </Layout>
  );
}