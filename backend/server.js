const express = require('express');    // express: Web sunucusu kurmak için.
const cors = require('cors');          //   cors: Farklı porttaki React frontend'in backend'e erişebilmesi için.
const fs = require('fs');              //  fs: Dosya sistemine erişip questions.json'u okumak için.
const path = require('path');          //  path: Dosya yollarını platform bağımsız kurmak için

const app = express();                 // Sunucu uygulaması oluşturuluyor
const PORT = 5000;

app.use(cors());   // CORS sorunlarını önlemek için- Bu satır sayesinde, localhost:3000 (React) → localhost:5000 (backend) veri çekebilir.

const questionsPath = path.join(__dirname, 'questions.json');    // JSON dosyasının bulunduğu tam yol


app.get('/api/questions/:difficulty/:amount', (req, res) => {   // API endpoint: /api/questions/:difficulty/:amount
  const { difficulty, amount } = req.params;                    //  “/api/questions/easy/5 gibi bir istek gelirse, bu isteği şu şekilde işle.”  


  
  fs.readFile(questionsPath, 'utf8', (err, data) => {                     // Dosyayı oku
 if (err) {
      return res.status(500).json({ error: 'Dosya okunamadı' });
    }

    const questionsData = JSON.parse(data);             // Dosyadaki tüm soruları JavaScript objesine çeviriyoruz.
    const questions = questionsData[difficulty.charAt(0).toUpperCase() + difficulty.slice(1)];



    if (!questions) {
      return res.status(400).json({ error: 'Geçersiz zorluk seviyesi' });
    }

    const shuffled = questions.sort(() => 0.5 - Math.random());           // istenen kadar soruyu rastgele seç
    const selected = shuffled.slice(0, parseInt(amount));

    res.json(selected);                        //Frontend'e JSON olarak gönderiyoruz.                                  
  });
});

app.listen(PORT, () => {
  console.log(`Server ${PORT} portunda çalışıyor`);             // Sunucuyu başlat
});
