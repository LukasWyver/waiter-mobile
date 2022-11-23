import { SvgXml } from 'react-native-svg';

export function Delete() {
  const markup = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#D73035" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="216" y1="56" x2="40" y2="56" fill="none" stroke="#D73035" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="88" y1="24" x2="168" y2="24" fill="none" stroke="#D73035" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><path d="M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56" fill="none" stroke="#D73035" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>
  `;

  return <SvgXml xml={markup} />;
}
