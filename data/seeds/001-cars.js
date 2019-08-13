
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {
          carid: 1,
          year: '2019',
          make: 'Porsche',
          model: '911',
          transmissionType: 'manual',
          titleStatus: 'clean'
        },
        {
          carid: 2,
          year: '1978',
          make: 'Mazda',
          model: 'RX-7',
          transmissionType: 'manual',
          titleStatus: ''
        },
        {
          carid: 3,
          year: '2012',
          make: 'Ford',
          model: 'F-250',
          transmissionType: 'automatic',
          titleStatus: ''
        },
        {
          carid: 4,
          year: '2008',
          make: 'Ford',
          model: 'Explorer',
          transmissionType: 'automatic',
          titleStatus: 'clean'
        },
        {
          carid: 5,
          year: '2014',
          make: 'BMW',
          model: '3 Series',
          transmissionType: 'manual',
          titleStatus: 'salvage'
        },
        {
          carid: 6,
          year: '2007',
          make: 'Volkswagen',
          model: 'Jetta',
          transmissionType: '',
          titleStatus: 'clean'
        }
      ]);
    });
};
