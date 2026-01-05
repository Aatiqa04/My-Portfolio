export default function ProjectsLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Skeleton */}
        <div className="text-center mb-12">
          <div className="skeleton h-12 w-64 mx-auto mb-4" />
          <div className="skeleton h-4 w-96 mx-auto" />
        </div>

        {/* Search Skeleton */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="skeleton h-12 flex-1 rounded-xl" />
          <div className="skeleton h-12 w-40 rounded-xl" />
        </div>

        {/* Stats Skeleton */}
        <div className="flex gap-4 mb-8">
          <div className="skeleton h-10 w-32 rounded-lg" />
          <div className="skeleton h-10 w-32 rounded-lg" />
          <div className="skeleton h-10 w-32 rounded-lg" />
        </div>

        {/* Projects Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <div className="skeleton h-6 w-3/4 mb-2" />
              <div className="skeleton h-4 w-1/4 mb-4" />
              <div className="skeleton h-4 w-full mb-2" />
              <div className="skeleton h-4 w-5/6 mb-4" />
              <div className="flex gap-2 mb-4">
                <div className="skeleton h-6 w-16 rounded-full" />
                <div className="skeleton h-6 w-16 rounded-full" />
              </div>
              <div className="flex justify-between pt-4 border-t border-gray-800">
                <div className="skeleton h-4 w-24" />
                <div className="skeleton h-5 w-5 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
