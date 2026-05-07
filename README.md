# 台灣交通天氣 API

## API 端點

### 1. 台中市十大肇事路口
- **網址**: `/api/road`
- **方法**: GET
- **範例**: `https://你的網址.vercel.app/api/road`

### 2. 天氣查詢
- **網址**: `/api/weather`
- **方法**: GET
- **參數**: `city` (縣市名稱)
- **範例**: `https://你的網址.vercel.app/api/weather?city=台中市`

## 使用範例

### JavaScript
\`\`\`javascript
// 查詢天氣
fetch('https://你的網址.vercel.app/api/weather?city=台中市')
  .then(res => res.json())
  .then(data => console.log(data));

// 查詢肇事路口
fetch('https://你的網址.vercel.app/api/road')
  .then(res => res.json())
  .then(data => console.log(data));
\`\`\`

## 部署方式
1. 上傳到 GitHub
2. 在 Vercel 匯入專案
3. 自動部署完成
