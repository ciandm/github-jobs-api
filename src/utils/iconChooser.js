import {
  MdSearch,
  MdPinDrop
} from 'react-icons/md'

export const iconChooser = icon => {
  switch (icon) {
    case 'search':
      return <MdSearch />;
    case 'location':
      return <MdPinDrop />;
    default:
      throw new Error('Not a valid icon');
  }
}

export default iconChooser;