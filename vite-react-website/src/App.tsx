import React from 'react';
import './index.css';
import './global.css';

const App = () => {
  return (
    <div className="bg-black text-gold min-h-screen">
      <header>
        <h1 className="text-gold">Welcome to My Vite React Website</h1>
      </header>
      <main>
        {/* Add your routes or main content here */}
      </main>
      <footer>
        <p className="text-gold">© 2023 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;