import { Phone } from '../../assets/svgComponents/Phone';
import css from './styles.module.scss';

const Hero = () => {
    return (
      <section className={css.Hero}>
        <div className={css.HeroBtnBox}>
          <button className={css.btn}>ORDER NOW <Phone className={css.Phone} /></button>
          <span className={css.text}>We speak English, <br/> Ukrainian, Polish</span>
        </div>
      </section>
    );
};

export default Hero;
