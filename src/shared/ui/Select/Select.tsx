import { memo, useCallback, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Select.module.scss';

export interface ISelectOption {
  value: string;
  content: string;
}

interface ISelectProps {
  className?: string;
  options?: ISelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
}

export const Select = memo((props: ISelectProps) => {
  const { className, options, onChange, readonly, value } = props;
  const mods = { [cls.readonly]: readonly };

  const onChangeHandler = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      onChange?.(e.target.value);
    },
    [onChange]
  );

  const optionsList = useMemo(() => {
    return options?.map((opt) => (
      <option key={opt.value} value={opt.value}>
        {opt.content}
      </option>
    ));
  }, [options]);

  return (
    <select
      className={classNames(cls.select, mods, [className])}
      disabled={readonly}
      value={value}
      onChange={onChangeHandler}
    >
      {optionsList}
    </select>
  );
});
