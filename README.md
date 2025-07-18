# 🧠 React Quiz Uygulaması

Bu proje, React.js kullanılarak geliştirilmiş basit bir **Quiz (Soru-Cevap)** uygulamasıdır. Kullanıcılar belirlenen zorluk seviyesinde rastgele sorulara cevap verir, her soruya 60 saniye süre tanınır ve test sonunda başarı oranı görüntülenir.

---

## 📌 Özellikler

- ✅ React ile modern komponent yapısı
- 🎯 Rastgele sıralanan sorular
- ⏱️ Her soru için **60 saniyelik süre** (otomatik geçiş)
- 🎨 Doğru/yanlış cevap için **renkli görsel geri bildirim**
- 📊 Sonuç ekranı ve başarı oranı
- 🔁 Quiz'i tekrar başlatma özelliği
- 📌 Tüm veriler backend’den çekiliyor (/api/questions/:difficulty/:amount)

---

## 🚀 Kurulum ve Çalıştırma

**Sunucu dosyası:** `server.js`  
**Veri dosyası:** `questions.json`

### 1. Backend (Node.js)
```bash
cd backend
npm install
node server.js


# Frontend (React)
-npm install
-npm run dev

 ---  


## 🛠️Kullanılan Teknolojiler
-React.js – Frontend için
-Node.js (Express) – Basit API sunucusu
-CORS, fs, path – Node modülleri
-React Router DOM – Sayfa geçişleri
-CSS – Basit stiller ve zaman göstergesi
 
## 🖼️ Uygulama Görseli

![Start Screen](app-screenshots/start-screen.png)
![Question Screen](app-screenshots/question-screen.png)
![Result Screen](app-screenshots/result-screen.png)



## 📋 Değerlendirme Kriterlerine Uygunluk
-create-react-app benzeri proje yapısı kuruldu
-Komponent yapısı düzenli şekilde oluşturuldu
-React hook’ları (useState, useEffect) işlevine uygun kullanıldı
-Zamanlayıcı işlevsel olarak çalışıyor
-Sorular rastgele sırada geliyor
-Görsel geri bildirim (renk değişimi) sağlandı
-Sonuç ekranı doğru şekilde gösteriliyor
-Responsive ve sade tasarım dikkatle uygulandı

---

## 👤 Geliştirici
Meliha Çınarlıdere
GitHub:https://github.com/MelihaCskn
