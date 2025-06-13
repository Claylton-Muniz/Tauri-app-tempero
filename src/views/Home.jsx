import { WebviewWindow } from '@tauri-apps/api/webviewWindow'

function Home() {
  const abrirJanelaTest = () => {
    const webview = new WebviewWindow('teste', {
      title: 'test',
      url: '/#/teste',
      width: 1100,
      height: 620,
      fullscreen: false
    });

    webview.once('tauri://created', function () {
      console.log('Janela test criada');
    });
    
    webview.once('tauri://error', function (e) {
      console.error('Erro ao criar janela test:', e);
    });
  };

  return (
    <div>
      <h1>Página 1</h1>
      <button onClick={abrirJanelaTest}>Abrir janela de teste</button>
    </div>
  );
}

export default Home;
