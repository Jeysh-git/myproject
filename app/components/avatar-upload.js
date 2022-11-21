import Component from '@ember/component';

export default Component.extend({
    
    actions: {
        previewImage() {
            let preview = document.querySelector('.profilepicture');
            let file = document.querySelector('input[type=file]').files[0];
            let reader = new FileReader();
         
            reader.addEventListener("load", () => {
           
            preview.src = reader.result;
           this.get('member-profile').set('image',preview.src)
            }, false);
        
            if (file) {
              reader.readAsDataURL(file);
            }

            
            
          }
        } 

});

