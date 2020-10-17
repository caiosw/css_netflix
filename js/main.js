function renderCarouselThumbnails () {
  for (let i = 0; i < 10; i++) {
    var img = $('<img>').addClass('box-movie');
    img.attr('src', `img/thumb${i + 1}.jpg`);
    img.attr('data-movie-info', `id_${i + 1}`);
    img.attr('data-custom-open', 'modal-info');
  
    var item = $('<div>').addClass('item');
    item.append(img);

    $('#home_carousel').append(item);
  }
}

// mousedown isn't the best option, but it managed to avoid opening the wrong movie 
// acidentally due the drag and drop
$('body').on('mousedown', '[data-movie-info]', function (e) {
  var id = $(e.target).data('movie-info');
  $('#modal_title').text(movies_data[id].name);
  $('#modal_description').text(movies_data[id].description);
  $('#modal_image').attr('src', movies_data[id].img);
  $('#modal_watch_btn').attr('data-movie-watch', id);
});

$('body').on('click', '[data-movie-watch]', function (e) {
  window.scrollTo(0, 0)
  MicroModal.close('modal-info'); 

  var id = $(e.target).data('movie-watch');

  $('section#home').addClass('d-none');
  $('section#theater').removeClass('d-none');
  $('#video_player').attr('src', `https://www.youtube.com/embed/${movies_data[id].video_id}`);
  
  $('#movie_title').text(movies_data[id].name);
});

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

MicroModal.init({
  onShow: (modal, trigger) => console.info(`${modal.id} is shown`, modal), // [1]
  onClose: modal => console.info(`${modal.id} is hidden`), // [2]
  openTrigger: 'data-custom-open', // [3]
  closeTrigger: 'data-custom-close', // [4]
  openClass: 'is-open', // [5]
  disableScroll: true, // [6]
  disableFocus: false, // [7]
  awaitOpenAnimation: false, // [8]
  awaitCloseAnimation: false, // [9]
  debugMode: true // [10]
});