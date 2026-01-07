export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 flex items-center justify-center p-8">
      <div className="max-w-md w-full">
        <div className="bg-slate-800 border-2 border-slate-700 rounded-2xl p-8 hover:border-emerald-500 transition-all duration-300">
          
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center">
              <svg className="w-7 h-7 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
            <div className="h-1 w-12 bg-emerald-500 rounded"></div>
          </div>
          
          <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">
            Next.js Cloud Deployment
          </h1>
          
          <div className="mt-6 pt-6 border-t border-slate-700">
            <p className="text-sm text-slate-400 mb-2 font-medium uppercase tracking-wider">
              App Name
            </p>
            <p className="text-xl text-emerald-400 font-semibold">
              {process.env.APP_NAME || 'Not Set'}
            </p>
          </div>
          
          <div className="mt-6 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-sm text-slate-400">Active</span>
          </div>
          
        </div>
      </div>
    </main>
  );
}