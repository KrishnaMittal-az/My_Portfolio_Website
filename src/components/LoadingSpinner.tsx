
export const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-gray-700 border-t-cyan-400 rounded-full animate-spin"></div>
          <div className="w-12 h-12 border-4 border-gray-700 border-t-green-400 rounded-full animate-spin absolute top-2 left-2 animation-delay-200"></div>
        </div>
        <p className="text-cyan-400 mt-4 text-lg font-semibold">Loading DevOps Portfolio...</p>
        <div className="flex justify-center space-x-1 mt-2">
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce animation-delay-100"></div>
          <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce animation-delay-200"></div>
        </div>
      </div>
    </div>
  );
};
