import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useTheme } from '@/components/ThemeProvider';
import { 
  FiSun, 
  FiMoon, 
  FiMenu, 
  FiBell, 
  FiUser,
  FiChevronDown,
  FiHome,
  FiSettings,
  FiInfo,
  FiMail,
  FiFileText,
  FiSmartphone,
  FiCreditCard,
  FiGrid
} from 'react-icons/fi';

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [notifications] = useState(3); // Mock notification count

  const navigation = [
    { name: 'Home', href: '/', icon: FiHome },
    { name: 'Services', href: '/services', icon: FiSettings },
    { name: 'Case Study', href: '/case-study', icon: FiFileText },
    
    { name: 'Apps', href: '/apps', icon: FiGrid },
    { name: 'Plans', href: '/plans', icon: FiCreditCard },
    { name: 'About', href: '/about', icon: FiInfo },
    { name: 'Contact', href: '/contact', icon: FiMail },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 w-full items-center justify-between px-2 md:px-4">
        {/* Logo and Title */}
        <div className="flex items-center space-x-4">
          <img 
            src="https://placehold.co/40x40" 
            alt="Gorilla Tech Solution Logo" 
            width={40}
            height={40}
            className="h-10 w-10 rounded-full object-cover shadow-lg border-2 border-white/10"
            data-ai-hint="company logo for digital tech solution agency"
          />
          <div className="block">
            <h1 className="text-sm sm:text-xl font-bold bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent truncate max-w-[140px] sm:max-w-none">GORILLA TECH SOLUTION</h1>
            <p className="hidden sm:block text-sm text-muted-foreground">Digital Media Excellence</p>
          </div>
        </div>

        {/* Right Side - Navigation and Controls */}
        <div className="flex items-center space-x-3">
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                <item.icon className="h-4 w-4" />
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Controls */}
          <div className="flex items-center space-x-2">
          {/* Theme Toggle - Hidden on mobile */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="hidden sm:flex h-9 w-9"
          >
            <FiSun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <FiMoon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          {/* Notifications */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative h-9 w-9" aria-label="View notifications">
                <FiBell className="h-4 w-4 text-foreground" />
                {notifications > 0 && (
                  <Badge 
                    variant="destructive" 
                    className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-0 text-xs flex items-center justify-center min-w-[20px]"
                  >
                    {notifications}
                  </Badge>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64 z-50 bg-popover border">
              <div className="py-2">
                <div className="px-3 py-2 border-b">
                  <h3 className="font-medium text-sm">Notifications</h3>
                </div>
                <div className="max-h-64 overflow-y-auto">
                  <Link to="#" className="flex items-start gap-3 px-3 py-3 hover:bg-accent transition-colors border-b last:border-0">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-sm font-medium">New project update</p>
                      <p className="text-xs text-muted-foreground">Available now</p>
                    </div>
                  </Link>
                  <Link to="#" className="flex items-start gap-3 px-3 py-3 hover:bg-accent transition-colors border-b last:border-0">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-sm font-medium">Welcome message</p>
                      <p className="text-xs text-muted-foreground">From Gorilla Tech</p>
                    </div>
                  </Link>
                  <Link to="#" className="flex items-start gap-3 px-3 py-3 hover:bg-accent transition-colors border-b last:border-0">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-sm font-medium">System maintenance</p>
                      <p className="text-xs text-muted-foreground">Scheduled for tonight</p>
                    </div>
                  </Link>
                </div>
                <div className="px-3 py-2 border-t">
                  <Link to="#" className="text-xs text-primary hover:underline">View all notifications</Link>
                </div>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Account Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-9 gap-2 px-3" aria-label="Account menu">
                <FiUser className="h-4 w-4" />
                <span className="hidden sm:inline">Account</span>
                <FiChevronDown className="h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48 z-50 bg-popover border">
              <div className="py-1">
                <Link to="/signin" className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-accent transition-colors">
                  <FiUser className="h-4 w-4" />
                  Sign In
                </Link>
                <Link to="/signup" className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-accent transition-colors">
                  <FiSettings className="h-4 w-4" />
                  Sign Up
                </Link>
                <Link to="/profile" className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-accent transition-colors">
                  <FiUser className="h-4 w-4" />
                  Profile
                </Link>
                <Link to="/profile" className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-accent transition-colors">
                  <FiSettings className="h-4 w-4" />
                  Settings
                </Link>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="sm:hidden h-9 w-9" aria-label="Open navigation menu">
                <FiMenu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-4 mt-8">
                <div className="text-center">
                  <h2 className="text-lg font-semibold bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent">GORILLA TECH SOLUTION</h2>
                  <p className="text-sm text-muted-foreground">Digital Media Excellence</p>
                </div>
                
                {/* Theme Toggle in Mobile Menu */}
                <div className="flex items-center justify-between px-4 py-2 bg-accent/20 rounded-lg">
                  <span className="text-sm font-medium">Theme</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="h-8 w-8"
                  >
                    <FiSun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <FiMoon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  </Button>
                </div>
                
                <nav className="flex flex-col space-y-2">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="flex items-center gap-3 rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent"
                    >
                      <item.icon className="h-4 w-4" />
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;