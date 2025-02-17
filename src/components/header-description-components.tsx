import { HeaderDescription } from '../types/type.ts';

function HeaderDescriptionScreen({
  number,
  city,
}: HeaderDescription): JSX.Element {
  return (
    <b className="places__found">
      {number} places to stay in {city}
    </b>
  );
}

export default HeaderDescriptionScreen;
