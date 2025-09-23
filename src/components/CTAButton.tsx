'use client';
import React, { ReactNode } from 'react';
import { Button as BaseButton, ButtonProps } from '@/components/ui/Button';
import { useABTest, getCTAText } from '@/hooks/useABTest';
import logEvent from '@/lib/analytics';

interface CTAButtonProps extends ButtonProps {
  children?: ReactNode;
}

const CTAButton: React.FC<CTAButtonProps> = ({ children, ...props }) => {
  const variant = useABTest('main_cta');
  const text = getCTAText(variant);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    logEvent({
      name: 'cta_click',
      properties: {
        variant,
        text,
      },
    });
    // Assuming the button's onClick is passed via props
    if (props.onClick) {
      props.onClick(e);
    }
  };

  return (
    <BaseButton {...props} onClick={handleClick}>
      {text}
    </BaseButton>
  );
};

export default CTAButton;
