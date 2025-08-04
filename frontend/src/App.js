import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AppRouter from './routes/Router';
import ExampleList from './components/ExampleList';

const App = () => {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <main className="flex-grow-1 container py-4">
          <AppRouter />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
