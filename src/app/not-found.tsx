import Link from 'next/link';
import { SvayamLogo } from '@/components/SvayamLogo';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-slate-50">
      <SvayamLogo size="lg" className="mb-6" />
      <h1 className="text-4xl font-extrabold text-[#031B33] font-heading mb-2">404 - Page Not Found</h1>
      <p className="text-slate-600 mb-8 max-w-md">
        The page you are looking for doesn’t exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-xl bg-[#0062E6] text-white font-bold text-sm inline-flex items-center gap-2 shadow-md hover:bg-[#0050BD] transition-all"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Return to Homepage</span>
      </Link>
    </div>
  );
}
