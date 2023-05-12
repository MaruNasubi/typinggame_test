// ランダムな文章を返す関数
function getRandomSentence() {
    const sentences = [
      '隣の客はよく柿食う客だ',
      '炙りカルビ',
      '坊主が上手にびょうぶに坊主の絵をかいた',
      '赤巻紙青巻紙黄巻紙',
      '東京特許許可局',
      '竹藪焼けた',
      '生麦生米生卵',
      '僕ボブ',
      '野田だな野田だな野田なのだな',
      'すもももももももものうち'
    ];    
    const randomIndex = Math.floor(Math.random() * sentences.length);
    return sentences[randomIndex];
}
  
// ゲーム開始
function startGame() {
    // ランダムな早口言葉を表示する
    const sentence = getRandomSentence();
    const sentenceElement = document.getElementById('sentence');
    sentenceElement.textContent = sentence;
  
    // タイピングエリア
    const typingArea = document.getElementById('typing-area');
  
    // 文字列を比較
    let score = 0;
    let isGameOver = false;
    typingArea.addEventListener('input', function() {
      if (isGameOver) {
        return;
      }
  
      const typedText = typingArea.value;
      if (typedText === sentence) {
        score++;
        document.getElementById('score').textContent = `スコア: ${score}`;
        if (score === 1) {
          isGameOver = true;
          document.getElementById('result-message').textContent = 'ゲームクリア！';
          document.getElementById('restart-button').style.display = 'block';
        } else {
          sentenceElement.textContent = getRandomSentence();
          typingArea.value = '';
        }
      }
    });
}
  
// ゲームスタート
const startButton = document.getElementById('start-button');
startButton.addEventListener('click', startGame);
  
// 再スタートボタンをクリックしたらゲームが始まる
const restartButton = document.getElementById('restart-button');
restartButton.addEventListener('click', function() {
    document.getElementById('score').textContent = 'スコア: 0';
    document.getElementById('result-message').textContent = '';
    restartButton.style.display = 'none';
    document.getElementById('typing-area').value = '';
    startGame();
});
  