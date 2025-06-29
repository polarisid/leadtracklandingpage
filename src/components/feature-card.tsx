import type { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="font-headline text-lg font-semibold">{title}</h3>
        <p className="mt-1 text-muted-foreground font-body">{description}</p>
      </div>
    </div>
  );
}
