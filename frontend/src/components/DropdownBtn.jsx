import { useState } from 'react';
import { Menu } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

export default function DropdownBtn() {
  const [selectedMode, setSelectedMode] = useState('therapist'); 
  const [menuItems, setMenuItems] = useState([
    { label: 'logical', value: 'logical' },
    { label: 'emotional', value: 'emotional' },
  ]); 

  const handleSelection = (selectedValue) => {
    setMenuItems((prevItems) => [
      ...prevItems.filter((item) => item.value !== selectedValue),
      { label: selectedMode, value: selectedMode },
    ]);
    setSelectedMode(selectedValue);
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-[15px] bg-pink2 px-3 py-2 text-sm font-semibold text-gray1 shadow-sm hover:bg-pink3">
          {selectedMode}
          <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray1" />
        </Menu.Button>
      </div>

      <Menu.Items className="absolute z-10 mt-2 w-full origin-top-right rounded-[15px] bg-pink2 shadow-lg ring-1 ring-black/5 focus:outline-none">
        {menuItems.map((item) => (
          <Menu.Item key={item.value}>
            {({ active }) => (
              <button
                type="button"
                onClick={() => handleSelection(item.value)}
                className={`block w-full px-4 py-2 text-left text-sm rounded-[15px] ${
                  active ? 'bg-pink3 text-gray-900' : 'text-gray1'
                }`}
              >
                {item.label}
              </button>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
}
