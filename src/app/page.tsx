import { Hero } from '@/widgets/Hero';
import Image from 'next/image';
import House1 from '@/shared/assets/images/house1.jpg';
import House2 from '@/shared/assets/images/house2.jpg';
import Bathroom from '@/shared/assets/images/bathroom.jpg';
import { Text, TextSize, TextTheme } from '@/shared/ui/Text/Text';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button';
import cls from './page.module.scss';

export default function MainPage() {
  return (
    <main className={cls.pageWrapper}>
      <div className={cls.sectionWrapper}>
        <Hero />
        <Image src={House1} alt="house" className={cls.heroImage} />
      </div>
      <div className={cls.offerSection}>
        <div className={cls.sectionWrapper}>
          <Image src={House2} alt="house" className={cls.houseImage} />
          <div className={cls.offerText}>
            <Text
              className={cls.offerTitleTop}
              size={TextSize.XL}
              title="WHAT"
              theme={TextTheme.INVERTED}
            />
            <Text
              className={cls.offerTitleBottom}
              size={TextSize.XL}
              title="WE OFFER"
              theme={TextTheme.INVERTED}
            />
            <Text
              className={cls.offerDescription}
              theme={TextTheme.INVERTED}
              size={TextSize.M}
              title="Our architecture encourages co-existence. So does our business philosophy. We have abolished barriers of hierarchy and departmentalization to work as a single team. We believe in full transparency — and of course, that entails our clients."
            />
          </div>
          <Image
            src={Bathroom}
            alt="bathroom"
            height={240}
            width={387}
            className={cls.bathroomImage}
          />
          <Button
            rounded
            size={ButtonSize.M}
            theme={ButtonTheme.OUTLINE_INVERTED}
            className={cls.btn}
          >
            LEARN MORE
          </Button>
        </div>
      </div>
    </main>
  );
}
