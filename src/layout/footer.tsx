import { FC } from 'react';
// import './styles-one.scss';
import './styles-tow.scss';

const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        &copy; {new Date().getFullYear()} <span>Light/Dark mode app</span>
      </div>
    </footer>
  );
};

export default Footer;
