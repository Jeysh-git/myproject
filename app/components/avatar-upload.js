import Component from '@ember/component';

export default Component.extend({

   imageError: '',
    
    actions: {
        previewImage() {
          
            let file = document.querySelector('#file-upload').files[0];
            
            let reader = new FileReader();
            let allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
             
            if (!allowedExtensions.exec(file.name)) {
                this.set('ValidationFailed',true)
                this.set('imageError','Invalid file type')
                return false;
            }
            else
            {
         
            reader.addEventListener("load", () => {
            this.set('imageplaceholder',reader.result)
            this.get('member-profile').set('image',this.imageplaceholder)
            }, false);
        
            if (file) {
              reader.readAsDataURL(file);
            }
          }
          }
        } 

});

