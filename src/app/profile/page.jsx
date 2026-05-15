'use client';

import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ProfilePage() {
  const { data: session, isPending: sessionLoading } = authClient.useSession();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (!sessionLoading && !session?.user) {
      router.push('/signup');
      return;
    }
    if (session?.user) {
      fetch('/api/user')
        .then((r) => r.json())
        .then((data) => {
          if (data.user) setProfile(data.user);
          else setError('Could not load profile data.');
        })
        .catch(() => setError('Network error.'))
        .finally(() => setLoading(false));
    }
  }, [session, sessionLoading, router]);

  const handleSignOut = async () => {
    await authClient.signOut();
    router.push('/');
  };

  if (sessionLoading || loading) {
    return (
      <div className="min-h-screen bg-[#050816] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 rounded-full border-4 border-cyan-500/30 border-t-cyan-500 animate-spin" />
          <p className="text-gray-400 text-sm">Loading your profile…</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#050816] flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-red-400 text-lg">{error}</p>
          <Link href="/" className="text-cyan-400 hover:underline text-sm">
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const joinedDate = profile?.createdAt
    ? new Date(profile.createdAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : '—';

  const initials = profile?.name
    ?.split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <main className="min-h-screen bg-[#050816] text-white">
      {/* Background glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 pt-28 pb-20">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 text-sm transition-colors mb-10 group"
        >
          <svg
            className="w-4 h-4 group-hover:-translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>

        {/* Profile card */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm overflow-hidden shadow-2xl shadow-black/40">
          {/* Banner */}
          <div className="h-40 bg-gradient-to-r from-cyan-900/40 via-indigo-900/40 to-[#050816] relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050816]/60" />
          </div>

          {/* Avatar row */}
          <div className="px-8 pb-8 -mt-14 relative">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
              {/* Avatar */}
              <div className="relative inline-block">
                {profile?.image ? (
                  <div className="rounded-full ring-4 ring-[#050816] overflow-hidden w-28 h-28 shadow-xl">
                    <Image
                      src={profile.image}
                      alt={profile.name}
                      width={112}
                      height={112}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ) : (
                  <div className="w-28 h-28 rounded-full ring-4 ring-[#050816] bg-gradient-to-br from-cyan-600 to-indigo-600 flex items-center justify-center text-3xl font-bold shadow-xl">
                    {initials}
                  </div>
                )}
                {/* Online dot */}
                <span className="absolute bottom-1 right-1 w-5 h-5 bg-green-400 rounded-full ring-2 ring-[#050816]" />
              </div>

              {/* Sign out button */}
              <button
                onClick={handleSignOut}
                className="flex items-center gap-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Sign Out
              </button>
            </div>

            {/* Name & email */}
            <div className="mt-5">
              <h1 className="text-3xl font-bold text-white">{profile?.name}</h1>
              <p className="text-gray-400 mt-1 text-sm">{profile?.email}</p>
            </div>

            {/* Stats row */}
            <div className="mt-6 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm text-gray-300">
                <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Joined {joinedDate}
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm">
                {profile?.emailVerified ? (
                  <>
                    <span className="w-2 h-2 rounded-full bg-green-400" />
                    <span className="text-green-400 font-medium">Email Verified</span>
                  </>
                ) : (
                  <>
                    <span className="w-2 h-2 rounded-full bg-yellow-400" />
                    <span className="text-yellow-400 font-medium">Not Verified</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Details grid */}
        <div className="mt-6 grid sm:grid-cols-2 gap-4">
          {[
            { label: 'Full Name', value: profile?.name, icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
            { label: 'Email Address', value: profile?.email, icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
            { label: 'User ID', value: profile?.id, icon: 'M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2' },
            { label: 'Member Since', value: joinedDate, icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
          ].map(({ label, value, icon }) => (
            <div
              key={label}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-cyan-500/30 hover:bg-white/[0.05] transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                  <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
                  </svg>
                </div>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">{label}</p>
              </div>
              <p className="text-white font-medium text-sm break-all">{value ?? '—'}</p>
            </div>
          ))}
        </div>

        {/* Ticket CTA */}
        <div className="mt-6 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-white font-semibold">Ready for the AI Summit?</h3>
            <p className="text-gray-400 text-sm mt-1">Book your ticket and join Bangladesh&apos;s biggest AI conference.</p>
          </div>
          <Link href="/#pricing">
            <button className="shrink-0 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/30 cursor-pointer">
              Book Ticket
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
