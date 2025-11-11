// /client/app/studio/layout.js
import StudioHeader from '../components/StudioHeader';
import styles from './studio.module.css';

export const metadata = {
  title: 'Estúdio | DecorAI',
};

export default function StudioLayout({ children }) {
  return (
    <div className={styles.studioBackground}>
      {/* Este é o novo Header (branco, com 'Voltar') */}
      <StudioHeader />
      {/* O 'children' será a nossa nova 'page.js' */}
      <main className={styles.studioContainer}>
        {children}
      </main>
    </div>
  );
}