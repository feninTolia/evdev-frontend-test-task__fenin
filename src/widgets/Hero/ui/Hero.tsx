import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Hero.module.scss';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Text, TextSize, TextTheme } from '@/shared/ui/Text/Text';

interface IHeroProps {
  className?: string;
}

export const Hero = memo((props: IHeroProps) => {
  const { className } = props;

  return (
    <div className={classNames(cls.Hero, {}, [className])}>
      <div className={cls.row}>
        <Text title="RENT / BUY" size={TextSize.XXL} />
      </div>
      <div className={cls.actionRow}>
        <Button theme={ButtonTheme.OUTLINE}>SUPPORT UKRAINE</Button>
        <Text title="REAL ESTATE" size={TextSize.XXL} />
      </div>
      <div className={cls.actionRow}>
        <Text title="WITH SVOY" size={TextSize.XXL} />
        <Button theme={ButtonTheme.OUTLINE}>WHOLE COLLECTION</Button>
      </div>
      <div className={cls.row}>
        <Text
          title="REAL ESTATE AGENCY"
          size={TextSize.S}
          theme={TextTheme.ALTER_FONT}
          className={cls.alterRow}
        />
      </div>
    </div>
  );
});
