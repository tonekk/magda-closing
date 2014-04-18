// Application Singleton
window.MagdaClosing = {
};

$(function() {
  Dj.findAll({}, function(djs) {
    MagdaClosing.djs = djs;
    MagdaClosing.timetable = new Timetable('#time-table');
  });

  $('#term').keyup(function() {
    $('#time-table').html("");
    MagdaClosing.searchTerm = $(this).val();
    MagdaClosing.timetable = new Timetable('#time-table');
  });
});

