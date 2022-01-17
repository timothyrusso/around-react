import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {

  const handleEditAvatarClick = () => {

  }

  React.useEffect(() => {
    document.body.classList.add('page');

    return () => {
      document.body.classList.remove('page');
    };
  })

  return (
    <>
      <div className="content">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
