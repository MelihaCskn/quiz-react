const express = require('express');    // express: Web sunucusu kurmak için.
const cors = require('cors');          //   cors: Farklı porttaki React frontend'in backend'e erişebilmesi için.
const fs = require('fs');              //  fs: Dosya sistemine erişip questions.json'u okumak için.
const path = require('path');          //  path: Dosya yollarını platform bağımsız kurmak için

const app = express();                 // Sunucu uygulaması oluşturuluyor
const PORT = 5000;

app.use(cors());   // CORS sorunlarını önlemek için-Bu satır backend’de CORS’u aktif ediyor.

const questionsPath = path.join(__dirname, 'questions.json');    // JSON dosyasının bulunduğu tam yol


app.get('/api/questions/:difficulty/:amount', (req, res) => {   // API endpoint: /api/questions/:difficulty/:amount
  const { difficulty, amount } = req.params;                    // Backend bu endpoint’leri tanımlar, frontend de çağırır. 


  
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

app.listen(PORT, () => {                                          //- Backend’in portu biliniyor ve frontend erişebiliyor
  console.log(`Server ${PORT} portunda çalışıyor`);             // Sunucuyu başlat
                                                                //Sunucu 5000 portunda çalışıyor, frontend bu portu kullanarak API çağrısı yapıyor.
});
