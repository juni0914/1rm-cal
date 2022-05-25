var d = new Date();
    var year = d.getFullYear().toString();
    var month = (d.getMonth() + 1).toString();
    var day = d.getDate().toString();
    var hours = d.getHours().toString();
    var min = d.getMinutes().toString();
    var sec = d.getSeconds().toString();
    var currentTime = year +"년"+ month +"월"+ day +"일"+ hours + "시" + min + "분" + sec+ "초";