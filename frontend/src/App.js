import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ExampleList from './components/ExampleList';

const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1 container py-4">
        <HomePage />
        <ExampleList />
      </main>
      <Footer />
    </div>
  );
};

export default App;
