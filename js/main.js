let container = document.getElementsByClassName('container')[0],
    article_container = document.querySelector('.article_container'),
    comment = document.querySelector('.comment'),
    like = document.querySelector('.like'),
    _comment_text = document.querySelector('.comment_text');
   



    comment.addEventListener('mouseover',function(){
      comment.style.cursor = "pointer";
    })

    like.addEventListener('mouseover',function(){
      like.style.cursor = "pointer";
    })

    

    comment.addEventListener('click',function(e){
      e.preventDefault();
     var textarea = document.createElement('TEXTAREA');
     var comment_block = document.createElement('DIV');
      article_container.appendChild(comment_block);
      textarea.classList = "comment_text";
      comment_block.appendChild(textarea);
      comment_block.style.width = 300+'px';
      //focus on textarea
      textarea.focus();

      // hiding textarea with mouseleave

      textarea.addEventListener('mouseleave',function(){
        comment_block.removeChild(textarea);
      })


      textarea.addEventListener('keydown', function(e){
       
        if(e.keyCode === 13){
          let comment = document.createElement('TEXTAREA'),
              close = document.createElement('DIV');

              comment.setAttribute('readonly','readonly');
              
          comment_block.classList = 'article_comment-block';
          comment.classList = 'comment_text';
          close.classList = 'comment_delete';
          close.innerHTML = 'x';
          let val = textarea.value;
          if( val !== ''){
          comment.innerText = textarea.value;
          console.log(typeof(textarea.value),'hey');
          comment_block.appendChild(close);
          comment_block.appendChild(comment);

          }
          comment_block.removeChild(textarea);
          // console.log(comment.innerHTML);

          close.addEventListener('mouseover',function(){
            this.style.cursor = 'pointer';
          })
          close.addEventListener('click',function(){
            article_container.removeChild(comment_block);
            
          })
        }
      })
    })
    
    
   