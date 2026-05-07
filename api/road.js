export default function handler(req, res) {
  // 允許 CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  const data = {
    success: true,
    city: "台中市",
    updateDate: "2026-05-07",
    top10: [
      {
        rank: 1,
        location: "西屯區台灣大道與文心路口",
        accidents: 127,
        description: "車流量大，多為追撞事故"
      },
      {
        rank: 2,
        location: "北區三民路與崇德路口",
        accidents: 98,
        description: "未依規定轉彎為主因"
      },
      {
        rank: 3,
        location: "南屯區五權西路與環中路口",
        accidents: 86,
        description: "超速及未保持安全距離"
      },
      {
        rank: 4,
        location: "北屯區北屯路與松竹路口",
        accidents: 74,
        description: "闖紅燈頻率高"
      },
      {
        rank: 5,
        location: "西區公益路與中美街口",
        accidents: 65,
        description: "商圈周邊人車交織"
      },
      {
        rank: 6,
        location: "南區復興路與國光路口",
        accidents: 58,
        description: "多向號誌複雜"
      },
      {
        rank: 7,
        location: "東區自由路與建成路口",
        accidents: 52,
        description: "視線死角多"
      },
      {
        rank: 8,
        location: "大雅區中清路與民生路口",
        accidents: 47,
        description: "大型車轉彎事故"
      },
      {
        rank: 9,
        location: "潭子區中山路與雅潭路口",
        accidents: 41,
        description: "機車違規左轉"
      },
      {
        rank: 10,
        location: "太平區中山路與環中東路口",
        accidents: 38,
        description: "夜間視線不良"
      }
    ],
    summary: "以上路口為2025年度統計數據，請用路人特別注意行車安全"
  };
  
  res.status(200).json(data);
}
