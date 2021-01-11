import {
  MdSearch,
  MdPlace
} from 'react-icons/md'

export const iconChooser = icon => {
  switch (icon) {
    case 'search':
      return <MdSearch />;
    case 'location':
      return <MdPlace />;
    default:
      throw new Error('Not a valid icon');
  }
}

export default iconChooser;