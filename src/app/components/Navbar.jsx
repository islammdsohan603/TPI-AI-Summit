'use client';

import { authClient } from '@/lib/auth-client';
import Link from 'next/link';

export default function Navbar() {
  const { data: session, isPending } = authClient.useSession();

  const user = session?.user;

  const handlDelateAccount = async () => {
    await authClient.signOut();
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#050816]/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-cyan-400">AI Summit</h1>

        <div className="hidden md:flex gap-8 text-gray-300">
          <a href="#schedule" className="hover:text-cyan-400">
            Schedule
          </a>
          <a href="#speakers" className="hover:text-cyan-400">
            Speakers
          </a>
          <a href="#pricing" className="hover:text-cyan-400">
            Pricing
          </a>
          <a href="#contact" className="hover:text-cyan-400">
            Contact
          </a>
        </div>

        {isPending ? (
          <div className="w-20 h-8 bg-gray-700 animate-pulse rounded-lg">
            <h1>Loading..</h1>
          </div>
        ) : user ? (
          <div className="flex items-center gap-3">
            <h1 className="text-white font-semibold">{user.name}</h1>
            <Link onClick={handlDelateAccount} href={`/`}>
              LogOut
            </Link>
          </div>
        ) : (
          <Link href="/signup">
            <button className="bg-cyan-500 px-6 py-3 rounded-xl hover:bg-cyan-600 transition">
              Book Ticket
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
}
