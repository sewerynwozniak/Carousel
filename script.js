class Carousel{
    constructor(){
        this.moved=0;
        this.btnNavigationPrev = document.querySelector('.carousel__btnNavigation--prev');
        this.btnNavigationNext = document.querySelector('.carousel__btnNavigation--next');
        this.singles = document.querySelectorAll('.carousel__single');
        this.events();
    }

    events(){
        this.btnNavigationPrev.addEventListener('click', ()=>this.move('left'))
        this.btnNavigationNext.addEventListener('click', ()=>this.move('right'))
    }

    move(direction){
        console.log('moving ' + direction)
        this.moved = this.moved+100;
        this.singles.forEach(s=>s.style.transform=`translateX(-${this.moved}%)`)
    }

}


const carousel = new Carousel();