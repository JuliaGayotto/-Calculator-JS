function Calculator () {
    this.display = document.querySelector('.display');

    this.start = () => this.buttonClicks();

    this.buttonClicks = () => {
        document.addEventListener('click', e => {
            const el = e.target; 

            if(el.classList.contains('btn-display')) this.btnToDisplay(el.innerText);
            if(el.classList.contains('btn-clear')) this.clear();
            if(el.classList.contains('btn-del')) this.deleteOne();
            if(el.classList.contains('btn-eq')) this.doMath();
        })
    };

    this.doMath = () => {
        try{
            const count = eval(this.display.value);

            if (!count) {
                this.display.value = 'ERROR'
                return;
            }

            this.display.value = count;
        } catch (e) {
            this.display.value = 'ERROR'
            return;
        } 
    };

    this.btnToDisplay= valor => this.display.value += valor;
    this.clear = () => this.display.value = '';
    this.deleteOne = () => this.display.value = this.display.value.slice(0, -1);
};

const calculator = new Calculator();
calculator.start();
