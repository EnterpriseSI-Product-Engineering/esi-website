import { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-background/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-ai-purple to-ai-blue bg-clip-text text-transparent">
              SuperIntelligence
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="#home"
                className="text-foreground hover:text-ai-purple px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Home
              </a>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-1">
                    Our Products
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Agentic AI Builder Playground</DropdownMenuItem>
                  <DropdownMenuItem>Agentic AI Pilot Accelerator Suite</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <a
                href="#about"
                className="text-foreground hover:text-ai-purple px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-foreground hover:text-ai-purple px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
            <a
              href="#home"
              className="text-foreground hover:text-ai-purple block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </a>
            <div className="px-3 py-2">
              <p className="text-sm font-medium text-muted-foreground mb-2">Our Products</p>
              <div className="pl-4 space-y-1">
                <a
                  href="#product1"
                  className="text-foreground hover:text-ai-purple block py-1 text-sm"
                >
                  Agentic AI Builder Playground
                </a>
                <a
                  href="#product2"
                  className="text-foreground hover:text-ai-purple block py-1 text-sm"
                >
                  Agentic AI Pilot Accelerator Suite
                </a>
              </div>
            </div>
            <a
              href="#about"
              className="text-foreground hover:text-ai-purple block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-foreground hover:text-ai-purple block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;