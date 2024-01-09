window.addEventListener('DOMContentLoaded', () => { 
  
    document.querySelector('.topLeft').addEventListener("mouseover", () => { 
      startAnimation(1);
    });
  
    document.querySelector('.topLeft').addEventListener('mouseout', () => {
      stopAnimation(1);
    });
    
    document.querySelector('.topMiddle').addEventListener('mouseover', () => {
      startAnimation(2); 
    }); 
    
    document.querySelector('.topMiddle').addEventListener('mouseout', () => {
      stopAnimation(2); 
    });    
    
    document.querySelector('.topRight').addEventListener('mouseover', () => {
      startAnimation(3); 
    });
    
    document.querySelector('.topRight').addEventListener('mouseout', () => {
      stopAnimation(3)
    })
    
    document.querySelector('.left').addEventListener("mouseover", () => { 
      startAnimation(4);
    });
  
    document.querySelector('.left').addEventListener('mouseout', () => {
      stopAnimation(4);
    });
    
    document.querySelector('.right').addEventListener('mouseover', () => {
      startAnimation(5); 
    }); 
    
    document.querySelector('.right').addEventListener('mouseout', () => {
      stopAnimation(5); 
    });    
    
    document.querySelector('.bottomLeft').addEventListener('mouseover', () => {
      startAnimation(6); 
    });
    
    document.querySelector('.bottomLeft').addEventListener('mouseout', () => {
      stopAnimation(6)
    })
    
    document.querySelector('.bottomMiddle').addEventListener("mouseover", () => { 
      startAnimation(7);
    });
  
    document.querySelector('.bottomMiddle').addEventListener('mouseout', () => {
      stopAnimation(7);
    });
    
    document.querySelector('.bottomRight').addEventListener('mouseover', () => {
      startAnimation(8); 
    }); 
    
    document.querySelector('.bottomRight').addEventListener('mouseout', () => {
      stopAnimation(8); 
    }); 
    
  });
  
  function startAnimation(value){
    
       let sphere = document.querySelector('#sphere');
      
       switch(value){
        
        case 1:
  
          sphere.classList.add("topLeftAnimation");
  
          break;
  
        case 2:
  
          sphere.classList.add("topMiddleAnimation");
  
          break;
  
        case 3:
        
          sphere.classList.add("topRightAnimation");
    
          break;
  
        case 4:
    
          sphere.classList.add("leftAnimation");
        
          break;
      
        case 5:
      
          sphere.classList.add("rightAnimation");
      
          break;
      
        case 6:
  
           sphere.classList.add("bottomLeftAnimation");
          
            break;
          
          case 7:
          
            sphere.classList.add("bottomMiddleAnimation");
          
            break;
          
          case 8:
          
            sphere.classList.add("bottomRightAnimation");
          
            break;  
        }    
    }
    
    function stopAnimation(value){
      let sphere = document.querySelector('#sphere');
      
      switch(value){
      
        case 1:
  
          sphere.classList.remove("topLeftAnimation");
        
          break;
  
        case 2:
        
          sphere.classList.remove("topMiddleAnimation");
  
          break;
  
        case 3:
  
          sphere.classList.remove("topRightAnimation");
  
          break;
  
        case 4:
  
          sphere.classList.remove("leftAnimation");
        
          break;
          
        case 5:
        
          sphere.classList.remove("rightAnimation");
        
          break;
          
        case 6:
      
          sphere.classList.remove("bottomLeftAnimation");
                
          break;
              
        case 7:
       
          sphere.classList.remove("bottomMiddleAnimation");
        
          break;
              
        case 8:      
       
          sphere.classList.remove("bottomRightAnimation");
        
          break;
      
      }
  
    }
  
  