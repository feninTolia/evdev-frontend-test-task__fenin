'use client';
import { memo } from 'react';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button';
import { Select } from '@/shared/ui/Select/Select';

interface ILangSwitcherProps {
  className?: string;
}

export const LangSwitcher = memo((props: ILangSwitcherProps) => {
  const { className } = props;

  // const toggle = (): void => {
  //   void i18n.changeLanguage(i18n.language === 'EN' ? 'UK' : 'EN');
  // };

  return (
    // <Button
    //   theme={ButtonTheme.CLEAR}
    //   size={ButtonSize.M}
    //   className={classNames(cls.LangSwitcher, {}, [className])}
    //   // onClick={toggle}
    // >
    //   ENG
    // </Button>
    <Select
      options={[
        { value: 'en', content: 'ENG' },
        { value: 'uk', content: 'UA' },
        { value: 'ru', content: 'RU' },
      ]}
    />
  );
});
