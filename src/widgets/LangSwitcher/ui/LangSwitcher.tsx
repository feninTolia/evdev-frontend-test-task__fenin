'use client';
import { memo, useState } from 'react';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button';
import { Select } from '@/shared/ui/Select/Select';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './LangSwitcher.module.scss';

interface ILangSwitcherProps {
  className?: string;
}
interface ILangOption {
  value: string;
  content: string;
}

enum Language {
  UK = 'uk',
  EN = 'en',
  RU = 'ru',
}

const langOptions = {
  [Language.EN]: { value: Language.EN, content: 'ENG' },
  [Language.UK]: { value: Language.UK, content: 'UA' },
  [Language.RU]: { value: Language.RU, content: 'RU' },
};

export const LangSwitcher = memo((props: ILangSwitcherProps) => {
  const { className } = props;
  const [selected, setSelected] = useState<ILangOption>(
    langOptions[Language.EN]
  );

  return (
    <>
      <div className={cls.mobileButtons}>
        {Object.values(langOptions).map((option) => (
          <Button
            key={option.value}
            theme={ButtonTheme.CLEAR}
            size={ButtonSize.M}
            disabled={selected.value === option.value}
            className={classNames(cls.LangSwitcherItemMobile, {}, [className])}
            onClick={() => setSelected(option)}
          >
            {option.content}
          </Button>
        ))}
      </div>

      <Select
        className={cls.desktopSelect}
        options={Object.values(langOptions)}
      />
    </>
  );
});
