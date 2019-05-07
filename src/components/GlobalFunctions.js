export default function abbreviateNumber(number) {
  var SI_SYMBOL = ["", "k", "M", "G", "T", "P", "E"];
  // what tier? (determines SI symbol)
  var tier = (Math.log10(number) / 3) | 0;

  // if zero, we don't need a suffix
  if (tier === 0) return number;

  // get suffix and determine scale
  var suffix = SI_SYMBOL[tier];
  var scale = Math.pow(10, tier * 3);

  // scale the number
  var scaled = number / scale;

  // format number and add suffix
  return scaled.toFixed(1) + suffix;
}

export function randomNumber(min, max) {
  var random = Math.floor(Math.random() * (+max - +min)) + +min;
  return random;
}

// export function timeSince(dateParam) {
//   let date = new Date(new Date().getTime() / 1000 - new Date(dateParam));
//   alert("Date: " + new Date(date));
//   var seconds = Math.floor((new Date() - date) / 1000);

//   var interval = Math.floor(seconds / 31536000);

//   if (interval > 1) {
//     return interval + " years";
//   }
//   interval = Math.floor(seconds / 2592000);
//   if (interval > 1) {
//     return interval + " months";
//   }
//   interval = Math.floor(seconds / 86400);
//   if (interval > 1) {
//     return interval + " days";
//   }
//   interval = Math.floor(seconds / 3600);
//   if (interval > 1) {
//     return interval + " hours";
//   }
//   interval = Math.floor(seconds / 60);
//   if (interval > 1) {
//     return interval + " minutes";
//   }
//   return Math.floor(seconds) + " seconds";
// }

var DURATION_IN_SECONDS = {
  epochs: ["year", "month", "day", "hour", "minute"],
  year: 31536000,
  month: 2592000,
  day: 86400,
  hour: 3600,
  minute: 60
};

function getDuration(seconds) {
  var epoch, interval;

  for (var i = 0; i < DURATION_IN_SECONDS.epochs.length; i++) {
    epoch = DURATION_IN_SECONDS.epochs[i];
    interval = Math.floor(seconds / DURATION_IN_SECONDS[epoch]);
    if (interval >= 1) {
      return {
        interval: interval,
        epoch: epoch
      };
    }
  }
}

export function timeSince(date) {
  let days = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  let newDate = new Date(date);
  var seconds = Math.floor((new Date() - new Date(date)) / 1000);
  var duration = getDuration(seconds);
  var suffix = duration.interval > 1 || duration.interval === 0 ? "s" : "";
  if (duration.epoch === "year") {
    return (
      months[newDate.getMonth()] +
      ". " +
      newDate.getDate() +
      ", " +
      newDate.getFullYear() +
      " at " +
      formatAMPM(newDate)
    );
  }
  if (duration.epoch === "day" || duration.epoch === "month") {
    return (
      months[newDate.getMonth()] +
      ". " +
      newDate.getDate() +
      " at " +
      formatAMPM(newDate)
    );
  }
  return duration.interval + " " + duration.epoch + suffix + " ago";
}

export function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
}
