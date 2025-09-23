import { cn } from '@/lib/utils';

interface KPIChipProps {
  label: string;
  value: string;
  variant?: 'default' | 'success' | 'warning' | 'info';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function KPIChip({ 
  label, 
  value, 
  variant = 'default', 
  size = 'md',
  className 
}: KPIChipProps) {
  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base'
  };

  const variantClasses = {
    default: 'bg-saffron-100 text-saffron-700 border-saffron-200',
    success: 'bg-teal-100 text-teal-700 border-teal-200',
    warning: 'bg-amber-100 text-amber-700 border-amber-200',
    info: 'bg-blue-100 text-blue-700 border-blue-200'
  };

  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full border font-medium transition-colors',
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      <span className="font-semibold text-saffron-600 mr-1">{value}</span>
      <span className="text-charcoal-600">{label}</span>
    </div>
  );
}
