class Carousel{
    constructor(){
        this.btnNavigationPrev = document.querySelector('.carousel__btnNavigation--prev');
        this.btnNavigationNext = document.querySelector('.carousel__btnNavigation--next');
        this.singles = document.querySelectorAll('.carousel__single');
        this.singlesWrapper = document.querySelector('.carousel__singleWrapper');
        this.automaticCarouselInterval;
        this.events();
        this.automaticCarousel()
    }

    events(){
        this.btnNavigationPrev.addEventListener('click', ()=>this.move('left'))
        this.btnNavigationNext.addEventListener('click', ()=>this.move('right'))
    }

    automaticCarousel(){
        this.automaticCarouselInterval = setInterval(() => {
            const singleWrapperChildren = document.querySelector('.carousel__singleWrapper').children;     
            const singleWidth = singleWrapperChildren[0].offsetWidth;

            const lastSingle = singleWrapperChildren[singleWrapperChildren.length-1];
            lastSingle.style.width=0;
            this.singlesWrapper.prepend(lastSingle);
            setTimeout(()=>{                 
                lastSingle.style.width=`${singleWidth}px`;
            },0)

        }, 3000);
    }

    move(direction){
        const singleWrapperChildren = document.querySelector('.carousel__singleWrapper').children;     
        const singleWidth = singleWrapperChildren[0].offsetWidth;

        clearInterval(this.automaticCarouselInterval)

        
        if(direction=='left'){
            const firstSingle = singleWrapperChildren[0];
            firstSingle.style.width=0;
            setTimeout(()=>{      
                this.singlesWrapper.append(firstSingle);
                firstSingle.style.width=`${singleWidth}px`;
            },300)
        }else{
            const lastSingle = singleWrapperChildren[singleWrapperChildren.length-1];
            lastSingle.style.width=0;
            this.singlesWrapper.prepend(lastSingle);
            setTimeout(()=>{                 
                lastSingle.style.width=`${singleWidth}px`;
            },0)
        }

        this.automaticCarousel()

    }

        


}


const carousel = new Carousel();