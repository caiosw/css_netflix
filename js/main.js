function renderCarouselThumbnails () {
  for (let i = 0; i < 10; i++) {
    var img = $('<img>').addClass('box-movie');
    img.attr('src', `img/thumb${i + 1}.jpg`);
  
    var item = $('<div>').addClass('item');
    item.append(img);

    $('#home_carousel').append(item);
  }
}

renderCarouselThumbnails();

$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  responsive: {
    0: {
      items:1
    },
    600: {
      items:3
    },
    1000: {
      items:5
    }
  }
})