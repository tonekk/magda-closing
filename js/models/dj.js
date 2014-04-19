// Setup our model
Dj = can.Model({
  findAll: 'GET /djs.json',
}, {

  init: function() {
    // Create moment.js objects
    this.attr('start', this.getMoment(this.attr('start')));
    this.attr('end', this.getMoment(this.attr('end')));

    // Format dates
    this.attr('startString', this.start.format('HH:mm'));
    this.attr('endString', this.end.format('HH:mm'));

    this.attr('floorString', this.getFloorString(this.floor));

    // Check if DJ is playing now
    var now = moment();

    if(this.start < now && this.end > now) {
      this.attr('playing', true)
    } else {
      this.attr('playing', false)
    }
  },

  getMoment: function(input) {
    return moment.unix(parseInt(input) / 1000).subtract('hours', 2);
  },

  getFloorString: function(abr) {
    return MagdaClosing.floors[abr];
  }
});

MagdaClosing.floors = {
  'M' :'Main',
  'L' : 'Lena',
  'J' : 'Jaegerline',
  'K' : 'Keller',
  'H' : 'Versteckt',
  'T' : 'Terrasse',
};
