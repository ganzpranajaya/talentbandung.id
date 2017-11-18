/* var buah=["Mangga","Apel","Anggur","Durian","Semangka"]
for (i=0; i<buah.length; i++){
    var listItem = document.createElement('li');
    listItem.classList.add('buah');
    listItem.textContent = buah [i];
    var listbuah = document.getElementById('buah');
    listbuah.appendChild(listItem);
}
var filter =document.getElementById("filter")
filter.addEventListener("keyup", filterBuah);

function filterBuah() {
    var listItem = document.getElementsByClassName('buah');

    for (i=0; i<listItem.length; i++) {
        var listText= listItem[i].textContent;
        if(listText.indexOf(filter.value) != -1 ) {
            listItem[i].style.display = 'block';
        } else {
            listItem[i].style.display = 'none';
        }
    }
} */

    var buah=["Mangga","Apel","Anggur","Durian","Semangka"]
    var listbuah = $('#buah')

    for(var i=0; i<buah.length; i++) {
        var listItem= '<li class="buah">'+ buah[i] +'</li>';
        listbuah.append(listItem)
    }

    var filter = $('#filter');
    filter.keyup(filterBuah);
    
    function filterBuah(){
        /* var buah = $('.buah');

        for(var i=0; i< buah.length; i++){
            var item = $(buah[i]).text().toLowerCase();

            if(item.indexOf(filter.val().toLowerCase() ) != -1){
                $(buah[i]).slideDown();
            } else{
                $(buah[i]).slideUp()
            }
        } */
        var search = filter.val();
        var buahItem = $('.buah');

        buahItem.each(function(){
            var buah = $(this)
            namaBuah = buah.text();

            if (namaBuah.indexOf (search) != -1){
                $(this).slideDown();
            } else {
                $(this).slideUp();
            }
        });
    }
