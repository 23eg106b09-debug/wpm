const homelist = (req, res) => {
    res.render('locations-list', {
        title: 'Home',
        locations: [
            {
                name: 'Starcups',
                address: '125 High Street, Reading, RG6 1PS',
                rating: 3,
                facilities: ['Hot drinks', 'Food', 'Premium wifi'],
                distance: '100m'
            },
            {
                name: 'Cafe Hero',
                address: '125 High Street, Reading, RG6 1PS',
                rating: 4,
                facilities: ['Hot drinks', 'Food', 'Premium wifi'],
                distance: '200m'
            },
            {
                name: 'Burger Queen',
                address: '125 High Street, Reading, RG6 1PS',
                rating: 2,
                facilities: ['Food', 'Premium wifi'],
                distance: '500m'
            }
        ]
    });
};
 /* GET 'Location info' page */
 const locationInfo = (req, res) => {
  res.render('index', { title: 'Location info' });
 };
 /* GET 'Add review' page */
 const addReview = (req, res) => {
  res.render('index', { title: 'Add review' });
 };
module.exports = {
  homelist,
  locationInfo,
  addReview
 };
