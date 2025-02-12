import { CITIES } from '../const/const';

function NavigationScreen(): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((city, index) => (
            <li className="locations__item" key={index}>
              <a
                className={`locations__item-link tabs__item ${index === 3 ? 'tabs__item--active' : ''}`}
                href="#"
              >
                <span>{city}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default NavigationScreen;
