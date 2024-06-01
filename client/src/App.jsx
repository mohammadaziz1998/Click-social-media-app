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
      <ReactQueryDevtools initialIsOpen={false} />

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
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-right"
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
    </QueryClientProvider>
  );
}

export default App;
