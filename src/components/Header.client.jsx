import {Link} from '@shopify/hydrogen/client';
import {useState} from 'react';
import CartToggle from './CartToggle.client';
// import CurrencySelector from './CurrencySelector.client';
import MobileNavigation from './MobileNavigation.client';
// import Navigation from './Navigation.client';

/**
 * A client component that specifies the content of the header on the website
 */
export default function Header({collections}) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <header className="h-20 lg:h-32" role="banner">
      {/* Header Nav */}
      <div
        className={`fixed z-20 h-20 lg:h-28 w-full border-b border-gray-200 px-6 md:px-8 md:py-6 lg:pt-8 lg:pb-0 mx-auto bg-white ${
          isMobileNavOpen ? '' : 'bg-opacity-95'
        }`}
      >
        <div className="h-full flex lg:flex-col place-content-between">
          <div className="text-center w-full flex justify-between items-center">
            {/* <CurrencySelector /> */}
            <MobileNavigation
              collections={collections}
              isOpen={isMobileNavOpen}
              setIsOpen={setIsMobileNavOpen}
            />
            <Link
              className="font-black uppercase text-3xl tracking-widest"
              to="/"
            >
              Deshi Dokan
            </Link>
            <CartToggle
              handleClick={() => {
                if (isMobileNavOpen) setIsMobileNavOpen(false);
              }}
            />
          </div>
          {/* <Navigation collections={collections} storeName={storeName} /> */}
        </div>
      </div>
    </header>
  );
}
