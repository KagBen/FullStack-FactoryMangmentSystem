
const getDateToday = () => { 
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed, so add 1
    const day = String(currentDate.getDate()).padStart(2, '0');
    
    return  `${day}/${month}/${year}`;
}


module.exports ={getDateToday}