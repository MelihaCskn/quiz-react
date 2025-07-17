
const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'; // .env varsa onu kullan, yoksa localhost

export const getQuestions = async (difficulty, amount) => {                     //getQuestions() fonksiyonu ile API'den soruları çeker.
  try {
    const response = await fetch(`${BASE_URL}/api/questions/${difficulty}/${amount}`);  //fetch kullanarak backend’den soruları alıyor. Hata durumunda console’a yazıyor.
                                                                                         // Bu satırda doğru endpoint ve GET metodu kullanıldı                                                                     
    if (!response.ok) {
      throw new Error("Sorular alınamadı");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API Hatası:", error);
    return [];
  }
};

//API çağrısı yapma mekanizmasını Api.jsx dosyasında merkezi hâle getirdik
//Api.jsx – API Bağlantı Noktası (Frontend ile Backend Köprüsü)
//React uygulamasının backend'e istekte bulunmasını sağlar.
//fetch ile server.js'deki API'ye istek atar, sonucu alır.
