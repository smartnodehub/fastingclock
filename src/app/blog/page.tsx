import BlogList from "@/components/BlogList";

export const metadata = {
  title: "Fasting Clock Blog - Latest Posts",
  description: "Read the latest posts about intermittent fasting, health tips, and wellness insights.",
};

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Latest from the Fasting Clock Blog</h1>
        <p className="text-gray-300 text-lg">
          Discover tips, insights, and guides to help you succeed with intermittent fasting
        </p>
      </div>
      
      <BlogList />
    </div>
  );
}
