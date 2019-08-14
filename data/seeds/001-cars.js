
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {
          VIN: 11234132,
          year: '2019',
          make: 'Porsche',
          model: '911',
          mileage: '30000',
          transmissionType: 'manual',
          titleStatus: 'clean'
        },
        {
          VIN: 21234,
          year: '1978',
          make: 'Mazda',
          model: 'RX-7',
          mileage: '30000',
          transmissionType: 'manual',
          titleStatus: ''
        },
        {
          VIN: 31234123,
          year: '2012',
          make: 'Ford',
          model: 'F-250',
          mileage: '30000',
          transmissionType: 'automatic',
          titleStatus: ''
        },
        {
          VIN: 4,
          year: '2008',
          make: 'Ford',
          model: 'Explorer',
          mileage: '30000',
          transmissionType: 'automatic',
          titleStatus: 'clean'
        },
        {
          VIN: 5,
          year: '2014',
          make: 'BMW',
          model: '3 Series',
          mileage: '30000',
          transmissionType: 'manual',
          titleStatus: 'salvage'
        },
        {
          VIN: 6,
          year: '2007',
          make: 'Volkswagen',
          model: 'Jetta',
          mileage: '30000',
          transmissionType: '',
          titleStatus: 'clean'
        }
      ]);
    });
};
