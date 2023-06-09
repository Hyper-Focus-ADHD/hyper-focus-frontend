import { forwardRef } from 'react';
import { Dropdown } from 'react-bootstrap';

import { BsThreeDotsVertical } from 'react-icons/bs';

import IconButton from './IconButton';

function OptionsButton({ options }) {
  return (
    <Dropdown>
      <Dropdown.Toggle
        id="dropdown-autoclose-true"
        as={forwardRef((props, ref) => (
          <IconButton
            ref={ref}
            style={{ fontSize: '22px', padding: '0px' }}
            icon={<BsThreeDotsVertical />}
            {...props}
          />
        ))}
      />

      <Dropdown.Menu>
        {options.map((option) => (
          <Dropdown.Item key={option.id} onClick={option.onClick}>
            {option.content}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default OptionsButton;
