// /client/app/page.js
import styles from './page.module.css';
import Link from 'next/link'; // IMPORTADO O 'Link'

export default function Home() {
  return (
    <>
      {/* ==================================================
      == SEÇÃO 1: HERO 
      ==================================================
      */}
      <div className={`${styles.hero} container`}> 
        <h1 className={styles.title}>
          Transforme Seu Espaço em 3D
        </h1>
        <p className={styles.subtitle}>
          Escaneie qualquer ambiente com IA avançada e crie modelos 3D
          perfeitos para design de interiores profissional.
        </p>
        <div className={styles.buttonGroup}>
          
          {/* MUDANÇA AQUI: O botão agora é um Link */}
          <Link href="/studio" className={styles.buttonPrimary}>
            Começar Escaneamento
          </Link>
          
          <button className={styles.buttonSecondary}>
            Ver Demonstração
          </button>
        </div>
      </div>

      {/* ==================================================
      == SEÇÃO 2: RECURSOS REVOLUCIONÁRIOS
      ==================================================
      */}
      <section id="recursos" className={styles.featuresSection}>
        <div className="container">
          <div className={styles.featuresHeader}>
            <h2 className={styles.featuresTitle}>Recursos Revolucionários</h2>
            <p className={styles.featuresSubtitle}>
              Tecnologia de ponta que combina visão computacional, inteligência artificial e
              renderização 3D para criar a experiência de decoração mais avançada do mercado.
            </p>
          </div>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <span className={styles.featureIcon}>📷</span>
              <h3 className={styles.featureCardTitle}>Escaneamento Inteligente</h3>
              <p className={styles.featureCardText}>
                Capture seu ambiente com a câmera e nossa IA mapeia automaticamente
                paredes, pisos e objetos existentes.
              </p>
            </div>
            <div className={styles.featureCard}>
              <span className={styles.featureIcon}>🧊</span>
              <h3 className={styles.featureCardTitle}>Modelagem 3D Automática</h3>
              <p className={styles.featureCardText}>
                Transformamos suas fotos em modelos 3D precisos e escalados
                para decoração virtual.
              </p>
            </div>
            <div className={styles.featureCard}>
              <span className={styles.featureIcon}>💡</span>
              <h3 className={styles.featureCardTitle}>Sugestões por IA</h3>
              <p className={styles.featureCardText}>
                Nossa IA analisa seu espaço e estilo para sugerir móveis e
                decorações personalizadas.
              </p>
            </div>
            <div className={styles.featureCard}>
              <span className={styles.featureIcon}>🔄</span>
              <h3 className={styles.featureCardTitle}>Personalização Total</h3>
              <p className={styles.featureCardText}>
                Arraste, rotacione e redimensione móveis. Aplique texturas e
                cores em tempo real.
              </p>
            </div>
            <div className={styles.featureCard}>
              <span className={styles.featureIcon}>✨</span>
              <h3 className={styles.featureCardTitle}>Digitalização de Objetos</h3>
              <p className={styles.featureCardText}>
                Escaneie seus móveis reais e integre-os ao projeto virtual
                com precisão fotorrealista.
              </p>
            </div>
            <div className={styles.featureCard}>
              <span className={styles.featureIcon}>👁️</span>
              <h3 className={styles.featureCardTitle}>Renderização Premium</h3>
              <p className={styles.featureCardText}>
                Gere imagens fotorrealistas de alta qualidade do seu projeto
                finalizado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
      == SEÇÃO 3: COMO FUNCIONA
      ==================================================
      */}
      <section id="como-funciona" className={styles.howItWorksSection}>
        <div className="container">
          <div className={styles.howItWorksHeader}>
            <h2 className={styles.howItWorksTitle}>Como Funciona</h2>
            <p className={styles.howItWorksSubtitle}>
              Em apenas 4 passos simples, transforme qualquer ambiente em um projeto
              de decoração profissional com a ajuda da inteligência artificial.
            </p>
          </div>
          <div className={styles.stepsContainer}>
            {/* Passo 01 */}
            <div className={styles.stepItem}>
              <div className={styles.stepContent}>
                <div className={styles.stepHeader}>
                  <span className={styles.stepNumber}>01</span>
                  <span className={styles.stepIcon}>📷</span>
                </div>
                <h3 className={styles.stepTitle}>Capture o Ambiente</h3>
                <p className={styles.stepText}>
                  Tire fotos do seu espaço ou use nossa ferramenta de escaneamento
                  em tempo real para mapear o ambiente.
                </p>
              </div>
              <div className={styles.stepImagePlaceholder}></div>
            </div>
            {/* Passo 02 */}
            <div className={styles.stepItem}>
              <div className={styles.stepContent}>
                <div className={styles.stepHeader}>
                  <span className={styles.stepNumber}>02</span>
                  <span className={styles.stepIcon}>🧊</span>
                </div>
                <h3 className={styles.stepTitle}>IA Processa o Espaço</h3>
                <p className={styles.stepText}>
                  Nossa inteligência artificial analisa as imagens, detecta paredes,
                  pisos e cria um modelo 3D preciso.
                </p>
              </div>
              <div className={styles.stepImagePlaceholder}></div>
            </div>
            {/* Passo 03 */}
            <div className={styles.stepItem}>
              <div className={styles.stepContent}>
                <div className={styles.stepHeader}>
                  <span className={styles.stepNumber}>03</span>
                  <span className={styles.stepIcon}>🛋️</span>
                </div>
                <h3 className={styles.stepTitle}>Decore Virtualmente</h3>
                <p className={styles.stepText}>
                  Escolha móveis do nosso catálogo ou escaneie os seus próprios.
                  Posicione, redimensione e personalize.
                </p>
              </div>
              <div className={styles.stepImagePlaceholder}></div>
            </div>
            {/* Passo 04 */}
            <div className={styles.stepItem}>
              <div className={styles.stepContent}>
                <div className={styles.stepHeader}>
                  <span className={styles.stepNumber}>04</span>
                  <span className={styles.stepIcon}>👁️</span>
                </div>
                <h3 className={styles.stepTitle}>Visualize o Resultado</h3>
                <p className={styles.stepText}>
                  Gere renderizações fotorrealistas e explore seu projeto em 3D
                  antes de implementar na vida real.
                </p>
              </div>
              <div className={styles.stepImagePlaceholder}></div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
      == SEÇÃO 4: PROJETOS INSPIRADORES
      ==================================================
      */}
      <section id="galeria" className={styles.gallerySection}>
        <div className="container">
          <div className={styles.galleryHeader}>
            <h2 className={styles.galleryTitle}>Projetos Inspiradores</h2>
            <p className={styles.gallerySubtitle}>
              Explore alguns dos projetos criados com nossa plataforma. Cada ambiente
              foi modelado e decorado usando nossa tecnologia de IA.
            </p>
          </div>
          <div className={styles.galleryGrid}>
            <div className={styles.galleryCard}>
              <div className={`${styles.galleryImage} ${styles.galleryImg1}`}></div>
              <h3 className={styles.galleryCardTitle}>Sala de Estar Moderna</h3>
              <p className={styles.galleryCardText}>Estilo Minimalista</p>
            </div>
            <div className={styles.galleryCard}>
              <div className={`${styles.galleryImage} ${styles.galleryImg2}`}></div>
              <h3 className={styles.galleryCardTitle}>Quarto Master</h3>
              <p className={styles.galleryCardText}>Estilo Contemporâneo</p>
            </div>
            <div className={styles.galleryCard}>
              <div className={`${styles.galleryImage} ${styles.galleryImg3}`}></div>
              <h3 className={styles.galleryCardTitle}>Cozinha Moderna</h3>
              <p className={styles.galleryCardText}>Estilo Industrial</p>
            </div>
            <div className={styles.galleryCard}>
              <div className={`${styles.galleryImage} ${styles.galleryImg4}`}></div>
              <h3 className={styles.galleryCardTitle}>Home Office Criativo</h3>
              <p className={styles.galleryCardText}>Estilo Escandinavo</p>
            </div>
            <div className={styles.galleryCard}>
              <div className={`${styles.galleryImage} ${styles.galleryImg5}`}></div>
              <h3 className={styles.galleryCardTitle}>Banheiro Spa</h3>
              <p className={styles.galleryCardText}>Estilo Zen</p>
            </div>
            <div className={styles.galleryCard}>
              <div className={`${styles.galleryImage} ${styles.galleryImg6}`}></div>
              <h3 className={styles.galleryCardTitle}>Área Gourmet Externa</h3>
              <p className={styles.galleryCardText}>Estilo Tropical</p>
            </div>
          </div>
          <div className={styles.galleryButtonWrapper}>
            <button className={styles.buttonSecondary}>Ver Mais Projetos</button>
          </div>
        </div>
      </section>

      {/* ==================================================
      == SEÇÃO 5: PLANOS E PREÇOS
      ==================================================
      */}
      <section id="precos" className={styles.pricingSection}>
        <div className="container">
          <div className={styles.pricingHeader}>
            <h2 className={styles.pricingTitle}>Planos e Preços</h2>
            <p className={styles.pricingSubtitle}>
              Escolha o plano ideal para suas necessidades. Comece gratuitamente e evolua
              conforme seu projeto cresce.
            </p>
          </div>
          <div className={styles.pricingGrid}>
            {/* Card Básico */}
            <div className={styles.pricingCard}>
              <h3 className={styles.pricingCardTitle}>Básico</h3>
              <p className={styles.pricingCardPrice}>Grátis</p>
              <p className={styles.pricingCardDesc}>Perfeito para experimentar nossa tecnologia</p>
              <ul className={styles.featuresList}>
                <li>✔️ 3 projetos por mês</li>
                <li>✔️ Escaneamento básico</li>
                <li>✔️ Catálogo limitado de móveis</li>
                <li>✔️ Renderização em baixa qualidade</li>
                <li>✔️ Suporte por email</li>
              </ul>
              <button className={styles.buttonSecondary}>Começar Grátis</button>
            </div>
            {/* Card Profissional (Popular) */}
            <div className={`${styles.pricingCard} ${styles.pricingCardPopular}`}>
              <span className={styles.popularTag}>Mais Popular</span>
              <h3 className={styles.pricingCardTitle}>Profissional</h3>
              <p className={styles.pricingCardPrice}>R$ 49<span className={styles.pricePerMonth}>/mês</span></p>
              <p className={styles.pricingCardDesc}>Ideal para designers e arquitetos</p>
              <ul className={styles.featuresList}>
                <li>✔️ Projetos ilimitados</li>
                <li>✔️ Escaneamento avançado com IA</li>
                <li>✔️ Catálogo completo de móveis</li>
                <li>✔️ Renderização em alta qualidade</li>
                <li>✔️ Suporte prioritário</li>
                <li>✔️ Exportação em múltiplos formatos</li>
              </ul>
              <button className={styles.buttonPrimary}>Assinar Agora</button>
            </div>
            {/* Card Empresarial */}
            <div className={styles.pricingCard}>
              <h3 className={styles.pricingCardTitle}>Empresarial</h3>
              <p className={styles.pricingCardPrice}>R$ 149<span className={styles.pricePerMonth}>/mês</span></p>
              <p className={styles.pricingCardDesc}>Para equipes e empresas de design</p>
              <ul className={styles.featuresList}>
                <li>✔️ Tudo do plano Profissional</li>
                <li>✔️ Colaboração em equipe</li>
                <li>✔️ API para integração</li>
                <li>✔️ Renderização Ultra HD</li>
                <li>✔️ Biblioteca personalizada</li>
                <li>✔️ Suporte dedicado 24/7</li>
              </ul>
              <button className={styles.buttonSecondary}>Falar com Vendas</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}