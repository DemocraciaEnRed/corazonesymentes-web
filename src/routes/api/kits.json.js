import axios from 'axios';
export  function get (req, res) {
  const url = "https://spreadsheets.google.com/feeds/list/16PA0-OgQxl7a47LhSAnDfSXE6s2jqTGR6LDWBxlWhSM/1/public/values?alt=json";
  try{
  axios.get(url)
  .then((response)=>{
    const formatedResponse = formatSpreadsheet(response.data.feed.entry)
    res.end(JSON.stringify(formatedResponse))
  }).catch((error)=>{
    res.status(400)
    res.end(JSON.stringify([]))
  })
  }catch(e){
    res.end()
  }
}

