$(document).ready(function() {

  $.get("http://www.mercedes-benz.ru/content/russia/mpc/mpc_russia_website/ru/home_mpc/passengercars/home/new_cars/price.html#_int_passengercars:home:quick-link:price", function(html) {

    var a = $(html).find("div.ms-component ms-distance-0r:contains('Цена с НДС')").text();

    var b = a.replace(/^\d{6,}$/g, '$1')

    alert(b)

  });

});
