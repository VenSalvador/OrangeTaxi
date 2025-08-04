// import React from 'react';
// import ExampleList from './components/ExampleList';

// function App() {
//   return (
//     <div className="App">
//       <h1>MERN Stack App</h1>
//       <ExampleList />
//     </div>
//   );
// }

// export default App;


import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <HomePage />
      </main>
      <Footer />
    </div>
  );
};

export default App;
