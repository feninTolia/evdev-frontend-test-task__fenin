import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button';
import cls from './page.module.scss';
import { AppLink } from '@/shared/ui/AppLink/AppLink';

export default function MainPage() {
  return (
    <main
      className={cls.main}
      style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row' }}
    >
      <h1>Rent/Buy</h1>
      <Button>WHOLE COLLECTION</Button>
      <Button theme={ButtonTheme.CLEAR}>WHOLE COLLECTION</Button>
      <Button theme={ButtonTheme.OUTLINE}>Support</Button>
      <Button rounded>LEARN MORE</Button>
      <Button rounded theme={ButtonTheme.OUTLINE}>
        LEARN MORE
      </Button>
      <AppLink href={'/'}>Catalog</AppLink>
    </main>
  );
}
