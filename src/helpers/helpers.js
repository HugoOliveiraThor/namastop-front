export const getToDateTime = (secs) => {
  let t = new Date(1970, 0, 1); // Epoch
  t.setSeconds(secs);
  return t
}

export const formatDataToBrazil = (date) => {
   let day = date.getDate().toString()
   let dayShow = (day.lenght == 1) ? '0'+day : day
   let month = (date.getMonth()+1).toString()
   let monthShow = (month.lenght == 1) ? `0 ${month}` : month
   let yearShow = date.getFullYear()
   return `${dayShow}/${monthShow}/${yearShow}`
}

