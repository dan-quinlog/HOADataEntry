import React, { useEffect, useState } from 'react';
import { Amplify } from 'aws-amplify';
import { getCurrentUser, fetchAuthSession } from '@aws-amplify/auth';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { createAuthLink } from 'aws-appsync-auth-link';
import { createSubscriptionHandshakeLink } from 'aws-appsync-subscription-link';
import { ApolloLink } from '@apollo/client';
import DataEntryPage from './pages/DataEntryPage';
import ViewRecordsPage from './pages/ViewRecordsPage';
import Login from './components/Login';
import Nav from './components/Nav';
import awsmobile from './aws-exports';

Amplify.configure(awsmobile);

const url = awsmobile.aws_appsync_graphqlEndpoint;
const region = awsmobile.aws_appsync_region;

function App() {
  const [user, setUser] = useState(null);

  const auth = {
    type: user ? awsmobile.aws_appsync_authenticationType : 'API_KEY',
    apiKey: 'da2-your-api-key-here',
    jwtToken: async () => {
      if (user) {
        const session = await fetchAuthSession();
        return session?.tokens?.idToken?.toString() || '';
      }
      return null;
    },
  };

  const client = new ApolloClient({
    link: ApolloLink.from([
      createAuthLink({ url, region, auth }),
      createSubscriptionHandshakeLink({ url, region, auth })
    ]),
    cache: new InMemoryCache()
  });

  useEffect(() => {
    const handleRedirect = async () => {
      try {
        const currentUser = await getCurrentUser();
        if (currentUser) {
          setUser(currentUser);
          const session = await fetchAuthSession();
        }
      } catch (error) {
        setUser(null);
      }
    };

    handleRedirect();
  }, []);

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <Login />
      </div>
    );
  }
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-100">
          <Nav />
          <Routes>
            <Route path="/data-entry" element={<DataEntryPage />} />
            <Route path="/view-records" element={<ViewRecordsPage />} />
            <Route path="*" element={<Navigate to="/data-entry" replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;