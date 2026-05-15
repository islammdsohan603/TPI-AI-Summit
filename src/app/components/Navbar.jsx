'use client';

import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

const navItems = ['schedule', 'speakers', 'pricing', 'contact'];

export default function Navbar() {
  const { data: session, isPending } = authClient.useSession();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);

  const user = session?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
    setDropOpen(false);
  };

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/8 bg-[#050816]/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-400 text-base font-semibold text-slate-950">
            AI
          </span>
          <span className="text-sm font-semibold tracking-[0.24em] text-white/90">AI SUMMIT</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="relative text-sm font-medium capitalize text-slate-300 transition-colors hover:text-cyan-300"
            >
              {section}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {isPending ? (
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 animate-pulse rounded-full bg-slate-700" />
              <div className="hidden h-4 w-20 animate-pulse rounded-md bg-slate-700 md:block" />
            </div>
          ) : user ? (
            <div className="relative">
              <button
                onClick={() => setDropOpen((v) => !v)}
                className="flex cursor-pointer items-center gap-2 rounded-full border border-white/10 bg-white/5 py-1 pl-1 pr-4 transition-all duration-200 hover:bg-white/10"
              >
                {user.image ? (
                  <Image
                    src={user.image}
                    alt={user.name}
                    width={32}
                    height={32}
                    className="rounded-full object-cover ring-2 ring-cyan-400/80"
                  />
                ) : (
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500 text-sm font-bold text-slate-950 ring-2 ring-cyan-400/80">
                    {user.name?.charAt(0).toUpperCase()}
                  </div>
                )}
                <span className="hidden max-w-[120px] truncate text-sm font-medium text-white md:block">
                  {user.name}
                </span>
                <ChevronDown className={`h-4 w-4 text-slate-400 transition-transform duration-200 ${dropOpen ? 'rotate-180' : ''}`} />
              </button>

              {dropOpen && (
                <div className="absolute right-0 mt-2 w-52 overflow-hidden rounded-lg border border-white/10 bg-[#0f172a] shadow-2xl shadow-black/40">
                  <div className="border-b border-white/10 px-4 py-3">
                    <p className="truncate text-sm font-semibold text-white">{user.name}</p>
                    <p className="mt-0.5 truncate text-xs text-slate-400">{user.email}</p>
                  </div>
                  <Link
                    href="/profile"
                    onClick={() => setDropOpen(false)}
                    className="flex items-center gap-2 px-4 py-3 text-sm text-slate-300 transition-colors hover:bg-white/5 hover:text-cyan-300"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    My Profile
                  </Link>
                  <button
                    onClick={handleSignOut}
                    className="flex w-full cursor-pointer items-center gap-2 px-4 py-3 text-sm text-red-400 transition-colors hover:bg-red-500/10"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link href="/signup">
              <button className="rounded-lg bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition-all duration-200 hover:bg-cyan-300">
                Book Ticket
              </button>
            </Link>
          )}

          <button
            className="text-slate-400 transition-colors hover:text-white md:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-[#050816]/95 px-6 py-4 text-sm text-slate-300 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-4">
            {navItems.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                onClick={() => setMenuOpen(false)}
                className="capitalize transition-colors hover:text-cyan-300"
              >
                {section}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
