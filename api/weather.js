// 台灣縣市天氣資料（模擬中央氣象局數據）
const weatherData = {
  "台北市": { weather: "陰短暫雨", rainProbability: "70%", temp: "18-22°C", humidity: "85%" },
  "新北市": { weather: "陰短暫雨", rainProbability: "65%", temp: "18-21°C", humidity: "83%" },
  "桃園市": { weather: "多雲時陰", rainProbability: "40%", temp: "19-23°C", humidity: "78%" },
  "台中市": { weather: "晴時多雲", rainProbability: "10%", temp: "24-28°C", humidity: "65%" },
  "台南市": { weather: "晴時多雲", rainProbability: "5%", temp: "25-30°C", humidity: "62%" },
  "高雄市": { weather: "晴朗", rainProbability: "0%", temp: "26-31°C", humidity: "60%" },
  "基隆市": { weather: "陰陣雨", rainProbability: "85%", temp: "17-20°C", humidity: "88%" },
  "新竹市": { weather: "多雲", rainProbability: "30%", temp: "20-24°C", humidity: "72%" },
  "嘉義市": { weather: "晴時多雲", rainProbability: "15%", temp: "22-27°C", humidity: "68%" },
  "宜蘭縣": { weather: "陰短暫雨", rainProbability: "75%", temp: "17-21°C", humidity: "86%" },
  "花蓮縣": { weather: "多雲短暫雨", rainProbability: "50%", temp: "20-24°C", humidity: "80%" },
  "台東縣": { weather: "多雲時晴", rainProbability: "20%", temp: "22-26°C", humidity: "75%" },
  "苗栗縣": { weather: "晴時多雲", rainProbability: "15%", temp: "20-25°C", humidity: "70%" },
  "彰化縣": { weather: "晴時多雲", rainProbability: "10%", temp: "22-27°C", humidity: "67%" },
  "南投縣": { weather: "晴午後多雲", rainProbability: "20%", temp: "21-26°C", humidity: "72%" },
  "雲林縣": { weather: "晴時多雲", rainProbability: "10%", temp: "22-28°C", humidity: "68%" },
  "嘉義縣": { weather: "晴時多雲", rainProbability: "15%", temp: "23-28°C", humidity: "69%" },
  "屏東縣": { weather: "晴朗", rainProbability: "5%", temp: "25-31°C", humidity: "63%" },
  "澎湖縣": { weather: "多雲時晴", rainProbability: "10%", temp: "22-26°C", humidity: "74%" },
  "金門縣": { weather: "晴時多雲", rainProbability: "5%", temp: "20-24°C", humidity: "70%" },
  "連江縣": { weather: "多雲", rainProbability: "25%", temp: "16-20°C", humidity: "76%" }
};

export default function handler(req, res) {
  // 允許 CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  
  // 處理 OPTIONS 請求
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  
  const { city } = req.query;
  
  // 檢查是否有提供城市參數
  if (!city) {
    res.status(400).json({
      success: false,
      error: "請提供城市名稱",
      example: "/api/weather?city=台中市",
      availableCities: Object.keys(weatherData)
    });
    return;
  }
  
  // 查找城市天氣資料
  const weatherInfo = weatherData[city];
  
  if (!weatherInfo) {
    res.status(404).json({
      success: false,
      error: "找不到該縣市資料",
      message: `目前沒有 ${city} 的天氣資料`,
      availableCities: Object.keys(weatherData)
    });
    return;
  }
  
  // 回傳天氣資訊
  res.status(200).json({
    success: true,
    city: city,
    queryTime: new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' }),
    weather: weatherInfo.weather,
    rainProbability: weatherInfo.rainProbability,
    temperature: weatherInfo.temp,
    humidity: weatherInfo.humidity,
    suggestion: getSuggestion(weatherInfo.rainProbability, weatherInfo.weather)
  });
}

// 根據天氣給予建議
function getSuggestion(rainProb, weather) {
  const prob = parseInt(rainProb);
  if (prob >= 70) return "降雨機率高，出門請攜帶雨具 ☔";
  if (prob >= 30) return "可能有雨，建議攜帶雨具備用 🌂";
  if (weather.includes("晴")) return "天氣晴朗，適合戶外活動 ☀️";
  return "天氣狀況良好，可以安心出門 👍";
}
