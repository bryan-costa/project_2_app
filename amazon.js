const amazon = require('amazon-product-api');
Create client

let client = amazon.createClient({
  awsId: '#',
  awsSecret: '#',
  awsTag: "aws Tag"
});

client.itemSearch({
    director: 'Quentin Tarantino',
    actor: 'Samuel L. Jackson',
    searchIndex: 'DVD',
    audienceRating: 'R',
    responseGroup: 'ItemAttributes,Offers,ItemPage,Images'
  }).then(function(results){
    console.log(results);
  }).catch(function(err){
    console.log(err);
  });



