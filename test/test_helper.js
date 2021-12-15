const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/fitness_testdb'); 
mongoose.connection
    .once('open', () => console.log('Connected!'))
    .on('error', (error) => {
        console.warn('Error : ',error);
    });
//Called hooks which runs before something.
 beforeEach((done) => {
     mongoose.connection.collections.fitnesses.drop(() => {
          //this function runs after the drop is completed
        done(); //go ahead everything is done now.
     }); 
 });