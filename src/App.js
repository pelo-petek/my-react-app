import './App.css';

function Header() {
  return (
    <div className="header">
      <header className="menu">
        <h1>RİZGAR COMPANY</h1>
        <ul>
            <li>HOME</li>
            <li>MENU</li>
            <li>ABOUT</li>
            <li>PRODUCTS</li>
        </ul>
    </header>
    </div>
  );
}

function Footer(){
  return <footer class="footer">
  <ul>
      <li>rizgar company</li>
      <li>created by Pelda Petekkaya</li>
  </ul>
</footer>
}

export default Header;
