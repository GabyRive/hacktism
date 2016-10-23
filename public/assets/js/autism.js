$(document).ready(function() {
  $('#brand').on('click', function() {
    $.get('index.html', function(data) {
      $('#content').html(data);
    });
  });

  $('#home-treatment').on('click', function() {
    $.get('home-treatment.html', function(data) {
      $('#content').html(data);
    });
  });

  $('#outside-treatment').on('click', function() {
    $.get('outside-treatment.html', function(data) {
      $('#content').html(data);
    });
  });

  $('#autism-info').on('click', function() {
    $.get('autism-info.html', function(data) {
      $('#content').html(data);
    });
  });

  $('#statistics-local').on('click', function() {
    $.get('statistics-local.html', function(data) {
      $('#content').html(data);
    });
  });

    $('#autism-causes').on('click', function() {
      $.get('autism-causes.html', function(data) {
        $('#content').html(data);
      });
    });

    $('#autism-sy').on('click', function() {
      $.get('autism-sy.html', function(data) {
        $('#content').html(data);
      });
    });

});
