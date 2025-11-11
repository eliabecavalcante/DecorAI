// /client/app/studio/scan/page.js
'use client';
import { useState, useRef, useEffect } from 'react';
import styles from './scan.module.css';

export default function ScanPage() {
  
  // Nossos estados:
  // 'default', 'loading', 'granted' (vídeo ao vivo), 'preview' (foto tirada), 'denied'
  const [cameraState, setCameraState] = useState('default');
  
  const videoRef = useRef(null);
  const canvasRef = useRef(null); // 1. NOVO: Referência para o canvas
  const streamRef = useRef(null);

  // Função para ativar a câmera (sem mudanças)
  const handleActivateCamera = async () => {
    setCameraState('loading');
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false,
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      setCameraState('granted');
    } catch (err) {
      console.error("Erro ao acessar a câmera:", err);
      setCameraState('denied');
    }
  };

  // 2. NOVA FUNÇÃO: Para tirar a foto
  const handleCaptureSnapshot = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    // Define o tamanho do canvas igual ao do vídeo
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    // "Desenha" a imagem do vídeo no canvas
    const context = canvas.getContext('2d');
    
    // Espelha o canvas (pois o vídeo está espelhado)
    context.translate(canvas.width, 0);
    context.scale(-1, 1);
    
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    
    // Muda para o estado de "preview"
    setCameraState('preview');
  };

  // 3. NOVA FUNÇÃO: Para voltar ao feed de vídeo
  const handleRetakePhoto = () => {
    setCameraState('granted');
  };

  // Efeito para limpar (sem mudanças)
  useEffect(() => {
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  return (
    <div className={styles.scanContainer}>
      
      {/* Coluna da Esquerda: Conteúdo Dinâmico */}
      <div className={styles.contentColumn}>
        <div className={styles.cameraBox}>
          
          {/* Estado Padrão (Botão) */}
          {cameraState === 'default' && (
            <>
              <span className={styles.cameraIcon}>📷</span>
              <h2 className={styles.cameraTitle}>Iniciar Escaneamento</h2>
              <p className={styles.cameraSubtitle}>
                Permita o acesso à câmera para começar.
              </p>
              <button 
                className={styles.cameraButton}
                onClick={handleActivateCamera}
              >
                Ativar Câmera
              </button>
            </>
          )}

          {/* Estado de Carregamento (Spinner) */}
          {cameraState === 'loading' && (
            <>
              <div className={styles.spinner}></div>
              <h2 className={styles.cameraTitle}>Iniciando Câmera...</h2>
              <p className={styles.cameraSubtitle}>
                Aguarde enquanto acessamos sua câmera
              </p>
            </>
          )}

          {/* Estado de Permissão Negada (Erro) */}
          {cameraState === 'denied' && (
            <>
              <span className={styles.cameraIcon}>🚫</span>
              <h2 className={styles.cameraTitle}>Acesso Negado</h2>
              <p className={styles.cameraSubtitle}>
                Você precisa permitir o acesso à câmera nas configurações do seu navegador
                para continuar.
              </p>
            </>
          )}

          {/* 4. MUDANÇA: O vídeo agora está em um container */}
          <div className={cameraState === 'granted' ? styles.videoContainer : styles.videoHidden}>
            <video 
              ref={videoRef} 
              autoPlay 
              playsInline
              muted
              className={styles.videoFeed}
            />
            <button 
              className={styles.captureButton}
              onClick={handleCaptureSnapshot}
            >
              Capturar Foto
            </button>
          </div>
          
          {/* 5. NOVO: O canvas de preview */}
          <canvas 
            ref={canvasRef}
            className={cameraState === 'preview' ? styles.canvasPreview : styles.canvasHidden}
          />
          
          {/* 6. NOVO: Controles do Preview */}
          {cameraState === 'preview' && (
            <div className={styles.previewControls}>
              <button 
                className={styles.retakeButton}
                onClick={handleRetakePhoto}
              >
                Tirar Nova Foto
              </button>
              <button className={styles.cameraButton}>
                Usar esta Foto
              </button>
            </div>
          )}
          
        </div>
      </div>

      {/* Coluna da Direita: Progresso (Não muda) */}
      <aside className={styles.sidebarColumn}>
        <div className={styles.progressBox}>
          <h3 className={styles.progressTitle}>Progresso do Escaneamento</h3>
          {/* ... (toda a lista de progresso continua igual) ... */}
          <ul className={styles.progressList}>
            <li className={`${styles.progressStep} ${styles.stepActive}`}>
              <span className={styles.stepIcon}>👁️</span>
              <div className={styles.stepText}>
                <h4>Visão Geral</h4>
                <p>Capture uma visão ampla do ambiente</p>
              </div>
            </li>
            <li className={styles.progressStep}>
              <span className={styles.stepIcon}>🧱</span>
              <div className={styles.stepText}>
                <h4>Parede Frontal</h4>
                <p>Foque na parede principal</p>
              </div>
            </li>
            <li className={styles.progressStep}>
              <span className={styles.stepIcon}>🧱</span>
              <div className={styles.stepText}>
                <h4>Parede Esquerda</h4>
                <p>Capture a parede esquerda</p>
              </div>
            </li>
            <li className={styles.progressStep}>
              <span className={styles.stepIcon}>🧱</span>
              <div className={styles.stepText}>
                <h4>Parede Direita</h4>
                <p>Capture a parede direita</p>
              </div>
            </li>
            <li className={styles.progressStep}>
              <span className={styles.stepIcon}>🧱</span>
              <div className={styles.stepText}>
                <h4>Parede Traseira</h4>
                <p>Foque na parede de trás</p>
              </div>
            </li>
            <li className={styles.progressStep}>
              <span className={styles.stepIcon}>⚙️</span>
              <div className={styles.stepText}>
                <h4>Detalhes</h4>
                <p>Capture detalhes importantes</p>
              </div>
            </li>
          </ul>
        </div>
      </aside>

    </div>
  );
}