'use client';
import React from 'react';
import { Button as BaseButton } from '@/components/ui/Button';
import { useABTest, getCTAText } from '@/hooks/useABTest';
import logEvent from '@/lib/analytics';

const CTAButton = ({ children, ...props }) => {
  const variant = useABTest('main_cta');
  const text = getCTAText(variant);

  const handleClick = () => {
    logEvent({
      name: 'cta_click',
      properties: {
        variant,
        text,
      },
    });
    // Assuming the button's onClick is passed via props
    if (props.onClick) {
      props.onClick();
    }
  };

  return (
    <BaseButton {...props} onClick={handleClick}>
      {text}
    </BaseButton>
  );
};

export default CTAButton;
