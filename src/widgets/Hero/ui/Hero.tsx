import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Hero.module.scss';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Text, TextSize, TextTheme } from '@/shared/ui/Text/Text';
import Image from 'next/image';
import trident from '@/shared/assets/icons/trident.svg';

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
        <Button theme={ButtonTheme.OUTLINE} className={cls.supportButtonBig}>
          SUPPORT UKRAINE
        </Button>
        <Button
          theme={ButtonTheme.OUTLINE}
          rounded
          className={cls.supportButtonSmall}
        >
          <Image
            src={trident}
            alt="trident"
            width={20}
            height={30}
            style={{ margin: '0 auto' }}
          />
        </Button>
        <Text title="REAL ESTATE" size={TextSize.XXL} />
      </div>
      <div className={cls.actionCollectionRow}>
        <Text title="WITH SVOY" size={TextSize.XXL} />
        <Text
          title="REAL ESTATE AGENCY"
          size={TextSize.S}
          theme={TextTheme.ALTER_FONT}
          className={cls.alterRow}
        />
        <Button theme={ButtonTheme.OUTLINE} className={cls.collectionButton}>
          WHOLE COLLECTION
        </Button>
      </div>
    </div>
  );
});
