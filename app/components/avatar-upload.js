import Component from '@ember/component';

export default Component.extend({
    
    actions: {
        previewImage() {
            let preview = document.querySelector('img');
            let file = document.querySelector('input[type=file]').files[0];
            let reader = new FileReader();
         
            reader.addEventListener("load", () => {
           
            preview.src = reader.result;
            }, false);
        
            if (file) {
              reader.readAsDataURL(file);
            }

            
            this.get('mem').set('image',preview.src)
          }
        } 

});

