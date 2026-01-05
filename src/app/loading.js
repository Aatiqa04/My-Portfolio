export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black flex items-center justify-center">
      <div className="text-center">
        {/* Animated Logo/Loader */}
        <div className="relative w-20 h-20 mx-auto mb-6">
          {/* Outer spinning ring */}
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-purple-500 animate-spin" />
          {/* Inner spinning ring */}
          <div className="absolute inset-2 rounded-full border-4 border-transparent border-b-blue-500 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1s' }} />
          {/* Center dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse" />
          </div>
        </div>

        {/* Loading text */}
        <p className="text-gray-400 text-sm animate-pulse">Loading...</p>
      </div>
    </div>
  );
}
