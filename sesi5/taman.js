var listTaman = $('.daftar-taman.grid-layout');
$.get('https://ariona.net/talentbandung/', function (data, status) {
    console.log(data);
    for (var i = 0; i < data.length; i++) {
        var taman = '<div class="grid-item">' + '<article class="taman">' + '<figure>' + '<img src="' + data[i].image.thumbnail+'"/>'+ '</figure>' + '<div class="taman-detail">' + '<h2>' + '<span class="title">' + data[i].nama + '</span>' + '</h2>' + '<p>' + data[i].alamat + '</p>' + '</div>' + '</article>' + '</div>';
        listTaman.append(taman);
    }
});

var filter = $('.search');
filter.keyup(filterTaman);

function filterTaman() {
    var taman = $('.taman');
    for (var i = 0; i < taman.length; i++) {
        var item = $(taman[i]).text().toLowerCase();
        if (item.indexOf(filter.val().toLowerCase()) != -1) {
            $(taman[i]).slideDown();
        } else {
            $(taman[i]).slideUp();
        }
    }

}