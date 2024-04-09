import css from './styles.module.scss';
import { Phone } from '../../assets/svgComponents/Phone';
import { Facebook } from '../../assets/svgComponents/Facebook';
import { Instagram } from '../../assets/svgComponents/Instagram';
import { Tiktok } from '../../assets/svgComponents/Tiktok';
import { Mail } from '../../assets/svgComponents/Mail';
import { MapPin } from '../../assets/svgComponents/MapPin';
import MapComponent from '../MapComponent/MapComponent';

const Footer = () => {
    return (
        <footer className={css.footer}>
        <h2 className={css.footerTitle}>CONTACTS</h2>
        <a className={css.footerTel} href="tel:+18259674847" width={24} height={24}><Phone />+1 825 967 4847</a>
        <div className={css.socialBox}>
          <a href="">
            <Instagram />
          </a>
          <a href="">
            <Facebook />
          </a>
          <a href="">
            <Tiktok />
          </a>
        </div>
        <p className={css.footerText}>Follow us on social networks to stay updated on our latest products and promotions!</p>
        <a className={css.footerEmail} href="mailto:fosso.sushi.restaurant@gmail.com"><Mail /> fosso.sushi.restaurant@gmail.com</a>
        <h2 className={css.workingTitle}>Working hours:</h2>
        <ul className={css.workingList}>
          <li>
            <span>Tuesday</span>
            <span>2pm.-10pm.</span>
          </li>
          <li>
            <span>Wednesday</span>
            <span>2pm.-10pm.</span>
          </li>
          <li>
            <span>Thursday</span>
            <span>2pm.-10pm.</span>
          </li>
          <li>
            <span>Friday</span>
            <span>2pm.-10pm.</span>
          </li>
          <li>
            <span>Saturday</span>
            <span>2pm.-10pm.</span>
          </li>
        </ul>
        <h2>ADDRESS</h2>
        <span className={css.cartText}>
          <MapPin />  Edmonton AB, 8861 63 Ave
        </span>
        <div className={css.cartBox}>
          <div><MapComponent /></div>
          
        </div>
        <div className={css.line}></div>
      </footer>
    );
};

export default Footer;
