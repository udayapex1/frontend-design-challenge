const Shimmer = ({ className }) => (
  <div className={`relative overflow-hidden bg-gray-200 dark:bg-gray-800 rounded-lg ${className}`}>
    <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
  </div>
);

// Dashboard Skeleton
export const DashboardSkeleton = () => (
  <div className="p-4 lg:p-6 space-y-4">

    <div className="bg-white dark:bg-[#141414] border border-gray-200 dark:border-gray-800 rounded-xl px-6 py-4">
      <div className="flex gap-6 mb-5">
        {[...Array(6)].map((_, i) => (
          <Shimmer key={i} className="h-4 w-24" />
        ))}
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 space-y-3">
            <div className="flex justify-between">
              <Shimmer className="h-3 w-24" />
              <Shimmer className="h-6 w-6 rounded-full" />
            </div>
            <Shimmer className="h-8 w-16" />
            <Shimmer className="h-3 w-32" />
          </div>
        ))}
      </div>
    </div>

    <div className="bg-white dark:bg-[#141414] border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
      {/* Toolbar */}
      <div className="p-4 flex gap-3 border-b border-gray-200 dark:border-gray-800">
        <Shimmer className="h-9 flex-1" />
        <Shimmer className="h-9 w-20" />
        <Shimmer className="h-9 w-20" />
        <Shimmer className="h-9 w-24" />
      </div>

      <div className="flex gap-4 px-4 py-3 border-b border-gray-100 dark:border-gray-800">
        {["w-32", "w-20", "w-20", "w-28", "w-28", "w-16"].map((w, i) => (
          <Shimmer key={i} className={`h-3 ${w}`} />
        ))}
      </div>

      {[...Array(8)].map((_, i) => (
        <div key={i} className="flex items-center gap-4 px-4 py-3.5 border-b border-gray-100 dark:border-gray-800">
          <Shimmer className="h-4 w-32" />
          <Shimmer className="h-4 w-16" />
          <Shimmer className="h-6 w-20 rounded-full" />
          <Shimmer className="h-2 w-28 rounded-full" />
          <div className="flex gap-1 ml-auto">
            {[...Array(4)].map((_, j) => (
              <Shimmer key={j} className="h-7 w-7 rounded" />
            ))}
          </div>
          <Shimmer className="h-4 w-12" />
        </div>
      ))}
    </div>
  </div>
);

// ScanDetail Skeleton
export const ScanDetailSkeleton = () => (
  <div className="p-4 lg:p-6 space-y-4">

    <div className="bg-white dark:bg-[#141414] border border-gray-200 dark:border-gray-800 rounded-xl p-6">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Circle */}
        <Shimmer className="w-28 h-28 rounded-full flex-shrink-0" />
        <div className="flex-1 space-y-6">
          {/* Steps */}
          <div className="flex gap-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <Shimmer className="w-9 h-9 rounded-full" />
                <Shimmer className="h-3 w-16" />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 lg:grid-cols-6 gap-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="space-y-2">
                <Shimmer className="h-3 w-16" />
                <Shimmer className="h-4 w-20" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {/* Console */}
      <div className="bg-white dark:bg-[#141414] border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-800 flex gap-3">
          <Shimmer className="h-4 w-32" />
          <Shimmer className="h-4 w-20 ml-auto" />
        </div>
        <div className="flex gap-4 px-4 py-2 border-b border-gray-200 dark:border-gray-800">
          <Shimmer className="h-3 w-20" />
          <Shimmer className="h-3 w-28" />
        </div>
        <div className="p-4 space-y-3">
          {[...Array(7)].map((_, i) => (
            <Shimmer key={i} className={`h-3 ${i % 3 === 0 ? "w-full" : i % 3 === 1 ? "w-4/5" : "w-3/5"}`} />
          ))}
        </div>
      </div>

      <div className="bg-white dark:bg-[#141414] border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-800">
          <Shimmer className="h-4 w-24" />
        </div>
        <div className="p-4 space-y-3">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="border border-gray-100 dark:border-gray-800 rounded-xl p-4 space-y-2">
              <div className="flex justify-between">
                <Shimmer className="h-6 w-16 rounded-full" />
                <Shimmer className="h-4 w-16" />
              </div>
              <Shimmer className="h-4 w-48" />
              <Shimmer className="h-3 w-32" />
              <Shimmer className="h-3 w-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);