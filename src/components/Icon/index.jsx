import React from 'react';
import PropType from 'prop-types';
import IcoMoon from 'icomoon-react';
// import iconSet from '../../assets/icons/selection.json';
import './Icon.css';
// import { IconIdentifier } from './IconIdentifier';

const Icon = ({
  iconIdentifier,
  imageSource = Null,
  className = '',
  iconSize = 18,
  clickable = false,
  onClick = () => {},
  ...rest
}) => {
  let iconClassName = 'event-icon';

  if (clickable) {
    iconClassName = `${iconClassName} clickable`;
  }

  if (!isNull(imageSource)) {
    return (
      <div className={[iconClassName, className].join(' ')}>
        <img src={imageSource} />
      </div>
    );
  }

  return (
    <div className={[iconClassName, className].join(' ')} onClick={onClick}>
      <IcoMoon
        iconSet={iconSet}
        icon={iconIdentifier}
        size={iconSize}
        {...rest}
      />
    </div>
  );
};

Icon.propTypes = {
  ...IcoMoon.propTypes,
  className: PropType.string,
  iconIdentifier: PropType.oneOf(Object.values(IconIdentifier)).isRequired,
  imageSource: PropType.string,
  isEnlarged: PropType.bool,
  iconSize: PropType.oneOfType([PropType.number, PropType.string]),
  clickable: PropType.bool,
};

export default Icon;
export { IconIdentifier };
