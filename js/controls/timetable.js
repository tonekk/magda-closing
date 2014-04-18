Timetable = can.Control.extend({
  init: function(){

    var self = this;


    var days = new can.List()
      , now = moment();

    $.each(MagdaClosing.djs, function(i, dj) {

      if(MagdaClosing.searchTerm) {
        if(dj.name.toLowerCase().indexOf(MagdaClosing.searchTerm) == -1) {
          return;
        }
      }

      var yday = dj.end.dayOfYear()
        , ydayString = dj.end.lang('de').format('dddd')
        , entry = _.find(days, function(e) {
        return e.attr('yday') == yday;
      });

      if(entry) {
        entry.djs.push(dj);
      } else {
        entry = new can.Map({yday: yday, day: ydayString, djs: [dj]});
        days.push(entry);
      }
    });

    this.state = new can.Map({
      days: days,
    });

    self.element.html(can.view('views/timetableView.mustache', this.state));
  }
});
