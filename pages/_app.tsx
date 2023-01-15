import { SessionContextProvider, useSession } from '@supabase/auth-helpers-react';
import type { AppProps } from 'next/app';
import { useState } from 'react';

import supabase from 'lib/supabase';

import '../styles/globals.css';

async function signInWithGitHub() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
  });
}

function Auth() {
  const [loading, setLoading] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setLoading(true);
          signInWithGitHub();
        }}
      >
        Login
      </button>
    </div>
  );
}

function Wrapped({ Component, pageProps }: AppProps) {
  const session = useSession();
  return <>{!session ? <Auth /> : <Component {...pageProps} />}</>;
}

function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <SessionContextProvider
        supabaseClient={supabase}
        initialSession={pageProps.initialSession}
      >
        <Wrapped Component={Component} {...pageProps} />
      </SessionContextProvider>
    </main>
  );
}

export default App;
