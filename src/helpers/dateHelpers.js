export function getAgeFrom(birthDate) {
  if (!birthDate) {
    return '??'; //no caso de data inválida como 30/02
  }

  const [birthYear, birthMonth, birthDay] = birthDate.split('-'); //quebrando array
  const today = new Date(); //função do JS dia de atual
  const todayYear = today.getFullYear();
  const todayMonth = today.getMonth() + 1; //precisa colocar +1 pq janeiro conta como zero
  const todayDay = today.getDate();

  const age = todayYear - parseInt(birthYear, 10);

  if (parseInt(birthMonth, 10) > todayMonth) {
    return age - 1;
  }

  if (
    parseInt(birthMonth, 10) === todayMonth &&
    parseInt(birthDay, 10) > todayDay
  ) {
    return age - 1;
  }

  return age;
}
