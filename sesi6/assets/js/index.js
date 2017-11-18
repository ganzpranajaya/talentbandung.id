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

var gallery = $('.gallery-carousel').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: '<button type="button" class="slick-prev"><i class="ion-android-arrow-dropleft-circle"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="ion-android-arrow-dropright-circle"></i></button>',
});

function initMap() {
    var uluru = {}
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
    });
}