import React, { memo } from 'react';
import mainIcon from '../../Images/mainIcon.png';
import firstItem from '../../Images/NavItems/Asset 9@4x 1.png';
import secondItem from '../../Images/NavItems/Asset 7@4x 1.png';
import thirdItem from '../../Images/NavItems/Asset 10@4x 1.png';
import fourthItem from '../../Images/NavItems/Asset 8@4x 1.png';
import fifthItem from '../../Images/NavItems/Asset 1 8.png';
import sixthItem from '../../Images/NavItems/Asset 12@4x 1.png';
import './Navigation.scss';

const navIcon = [
  { id: 1, icon: firstItem, alt: 'firstItem' },
  { id: 2, icon: secondItem, alt: 'secondItem' },
  { id: 3, icon: thirdItem, alt: 'thirdItem' },
  { id: 4, icon: fourthItem, alt: 'fourthItem' },
  { id: 5, icon: fifthItem, alt: 'fifthItem' },
  { id: 6, icon: sixthItem, alt: 'sixthItem' },
];

const navItems = navIcon.map((item) => {
  return <img key={item.id} src={item.icon} alt={item.alt} />;
});

const Navigation = memo(() => {
  return (
    <div className='nav-container'>
      <div className='nav-inner'>
        <div className='left-area'>
          <div className='icon-area'>
            <img className='icon' src={mainIcon} alt='main-icon' />
          </div>
          <div className='nav-items'>{navItems}</div>
        </div>
      </div>
    </div>
  );
});

export default Navigation;
