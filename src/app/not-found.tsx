import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6 px-6">
        <h1 className="text-6xl font-bold text-primary">404</h1>
        <h2 className="text-2xl font-semibold text-foreground">
          Stránka nebola nájdená
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          Ľutujeme, ale stránka ktorú hľadáte neexistuje alebo bola premiestnená.
        </p>
        <Button asChild size="lg">
          <Link href="/">
            Späť na hlavnú stránku
          </Link>
        </Button>
      </div>
    </div>
  );
}