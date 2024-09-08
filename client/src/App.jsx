import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AppLayout from './ui/AppLayout';
import Home from './pages/Home';
import Account from './pages/Account';
import Settings from './pages/Settings';
import PageNotFound from './ui/PageNotFound';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProtectedRoute from './features/authentication/ProtectedRoute';
import { Toaster } from 'react-hot-toast';
import Friends from './pages/Friends';
import GlobalStyle from './styles/GlobalStyle';
import { DarkModeProvider } from './context/DarkModeContext';
import Friend from './pages/Friend';
import { UserIDProvider } from './context/UserIDContext';
import Search from './features/user/SearchEngin';
import AllMyFriends from './ui/AllMyFriends';
import FriendRequest from './features/friendship/FriendRequest';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5000,
    },
  },
});
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <DarkModeProvider>
        <UserIDProvider>
          <ReactQueryDevtools initialIsOpen={false} />
          <GlobalStyle />
          <BrowserRouter>
            <Routes>
              <Route
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate replace to="home" />} />
                <Route path="home" element={<Home />} />
                <Route path="account" element={<Account />} />
                <Route path="settings" element={<Settings />} />
                <Route path="search" element={<Search />} />
                <Route path="friends/:friendId" element={<Friend />} />
                <Route path="friends" element={<Friends />}>
                  <Route index element={<Navigate replace to="allfriends" />} />
                  <Route path="allfriends" element={<AllMyFriends />} />
                  <Route path="friendrequest" element={<FriendRequest />} />
                </Route>
              </Route>
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </BrowserRouter>
          <Toaster
            position="top-center"
            gutter={10}
            toastOptions={{
              success: {
                duration: 3000,
              },
              error: {
                duration: 5000,
              },
              style: {
                fontSize: '16px',
                maxWidth: '500px',
                padding: '16px 24px',
                backgroundColor: 'var(--color--gray)',
                color: 'var(--color-border-aqua)',
              },
            }}
          />
        </UserIDProvider>
      </DarkModeProvider>
    </QueryClientProvider>
  );
}

export default App;
