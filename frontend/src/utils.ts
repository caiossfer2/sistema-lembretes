export function formatDateToISO(dateString: string) {
    let dateArr = dateString.split('/');
    const day = dateArr[0];
    dateArr[0] = dateArr[1];
    dateArr[1] = day;
    return new Date(dateArr.join());
  }