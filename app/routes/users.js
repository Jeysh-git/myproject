import Route from '@ember/routing/route';

export default Route.extend({
    // beforeModel(){
    //     let users = [{
    //       first_name: 'Anuja',
    //       last_name: 'karthik',
    //       email: 'aaa@gmail.com',
    //       team: 'Freshteam1',
    //       image : '/assets/images/avatar.png',
    //       joiningDate: '2020-07-01'
    //     },  {
    //       first_name: 'Banu',
    //       last_name: 'rekha',
    //       email: 'ccc@gmail.com',
    //       team: 'Freshteam3',
    //       image:'',
    //       joiningDate: '2020-07-04'  
    //     }, {
    //       first_name: 'Chitra',
    //       last_name: 'ganesh',
    //       email: 'ddd@gmail.com',
    //       team: 'Freshteam4',
    //       image:'',
    //       joiningDate: '2020-07-05'
    //     }, {
    //       first_name: 'Dinesh',
    //       last_name: 'kumar',
    //       email: 'eee@gmail.com',
    //       team: 'Freshteam1',
    //       image:'',
    //       joiningDate: '2020-07-06'
    //     }, {
    //       first_name: 'Aarathy',
    //       last_name: 'selvaraj',
    //       email: 'fff@gmail.com',
    //       team: 'Freshteam2',
    //       image: '',
    //       joiningDate: '2020-07-01'
    //     }, {
    //       first_name: 'Shankar',
    //       last_name: 'ganesh',
    //       email: 'ggg@gmail.com',
    //       team: 'Freshteam2',
    //       image:'',
    //       joiningDate: '2020-07-07'
    //     }, {
    //       first_name: 'Yogesh',
    //       last_name: 'prabu',
    //       email: 'hhh@gmail.com',
    //       team: 'Freshteam3',
    //       image:'',
    //       joiningDate: '2020-07-05'
    //     }, {
    //       first_name: 'Nivetha',
    //       last_name: 'yogesh',
    //       email: 'iii@gmail.com',
    //       team: 'Freshteam4',
    //       image:'',
    //       joiningDate: '2020-07-07'
    //     }, {
    //       first_name: 'Saanvi',
    //       last_name: 'shankar',
    //       email: 'jjj@gmail.com',
    //       team: 'Freshteam4',
    //       image:'',
    //       joiningDate: '2020-07-07'
    //     }, {
    //       first_name: 'Dheeran',
    //       last_name: 'kumar',
    //       email: 'hhh@gmail.com',
    //       team: 'Freshteam3',
    //       image:'',
    //       joiningDate: '2020-07-09'
    //     }, 
    //       ]; // Add more data here

    
      
    //     users.forEach((user) => {
    //       let userRecord = this.store.createRecord('user', user);
    //       userRecord.save();
    //     });
    // }
      model(){
        return this.store.findAll('user').
          then(results => results.filter(user => !user.get('isNew')))
      } 
})
