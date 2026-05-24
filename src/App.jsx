import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import './App.css';
import ErrorBoundary from "./components/ErrorBoundary";
import { AuthProvider, useAuth } from "./context/AuthContext1";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotesWorkspace from "./pages/workspace";

function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return <div className="h-screen bg-[#f9f0d6] flex items-center justify-center">Loading...</div>;
  }

  return user ? children : <Navigate to="/login" />;
}

function AppContent() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/workspace"
          element={
            <ProtectedRoute>
              <NotesWorkspace />
            </ProtectedRoute>
          }
        />
      </Routes>
    </ErrorBoundary>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;