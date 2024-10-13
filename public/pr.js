let dt= 1718950235;
const curDate=new Date(dt*1000);

const options={
    weekday:"long",
    year:"numeric",
    month:"long",
    day:"numeric",
    hour:"numeric",
    minute:"numeric",
  //  second:"numeric"
};
const formatter=new Intl.DateTimeFormat("en-US",options);
const formateDate=formatter.format(curDate);
return formateDate;