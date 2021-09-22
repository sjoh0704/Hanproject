export default function parseDate(tdate) {
    const created = new Date(Date.parse(tdate));
    const now = new Date();
    const diff = Math.floor((now - created) / 1000);
    const end = 10800
    const endday =new Date(Date.parse(created) + (end * 1000))
    // const end = 10800;
    if (diff < end) {
      
      return `${endday.toLocaleString()}에 경매 종료`
    }
    
    return '경매 종료된 상품입니다'
  }
  