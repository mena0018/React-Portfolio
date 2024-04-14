'use client';

import { AppIcon } from '@/icons/AppIcon';
import { NavItem } from '@/app/(navbar)/nav-item';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { navItems } from '@/app/(navbar)/navbar.data';
import { ModeToggle } from '@/app/(theme)/mode-toggle';
import { BurgerMenu } from '@/app/(navbar)/burger-menu';
import { useNavbarStore } from '@/app/(navbar)/navbar.store';

export const Header = () => {
  const isDesktop = useMediaQuery();
  const updateHash = useNavbarStore((state) => state.updateHash);

  return (
    <header className='z-50 fixed inset-x-0 w-screen h-20 shadow backdrop-blur-md'>
      <div className='w-full h-full max-w-container mx-auto flex items-center justify-between gap-1 px-4 xl:px-0'>
        <AppIcon />

        <ul className='h-12 flex flex-1 items-center justify-between border-2 border-accent bg-primary-foreground rounded-full px-6 md:max-w-[400px]'>
          {isDesktop ? (
            navItems.map((item) => (
              <NavItem
                {...item}
                key={item.id}
                className='hover:text-secondary '
                onClick={() => updateHash(item.href)}
              />
            ))
          ) : (
            <BurgerMenu />
          )}
        </ul>

        <ModeToggle />
      </div>
    </header>
  );
};