import Component from '@ember/component';

export default Component.extend({
    
    actions: {
        previewImage() {
            let preview = document.querySelector('img');
            let file = document.querySelector('input[type=file]').files[0];
            let reader = new FileReader();
         
            reader.addEventListener("load", () => {
           
            preview.src = reader.result;
            //to get the path of the uploaded image.
            // this.get('member-profile').set('image',preview.src)
            }, false);
        
            if (file) {
              reader.readAsDataURL(file);
            }

            
            
          }
        } 

});

